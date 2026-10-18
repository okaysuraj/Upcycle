// Manage scoped task assignments and update workloads atomically.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { runAssignmentEngine } = require('../utils/assignmentEngine');
const { route, httpError, transaction, operationsRoles } = require('../utils/http');
const manage = requireRole(operationsRoles);
const serialize = (task) => ({ ...task, assignedTo: task.assignedToId });
const scope = (req) =>
  operationsRoles.includes(req.user.role) ? {} : { assignedToId: req.user.id };
const statuses = ['Pending', 'Assigned', 'In-Progress', 'Completed'];

router.get(
  '/',
  auth,
  route(async (req, res) => {
    const where = scope(req);
    for (const key of ['status', 'category', 'priority'])
      if (req.query[key] && req.query[key] !== 'All') where[key] = req.query[key];
    res.json(
      (await prisma.task.findMany({ where, orderBy: { createdAt: 'desc' } })).map(serialize)
    );
  })
);
router.get(
  '/stats',
  auth,
  route(async (req, res) => {
    const tasks = await prisma.task.findMany({
      where: scope(req),
      select: { status: true, priority: true },
    });
    res.json({
      total: tasks.length,
      pending: tasks.filter((t) => t.status === 'Pending').length,
      assigned: tasks.filter((t) => t.status === 'Assigned').length,
      inProgress: tasks.filter((t) => t.status === 'In-Progress').length,
      completed: tasks.filter((t) => t.status === 'Completed').length,
      highPriority: tasks.filter((t) => t.priority === 'High').length,
    });
  })
);
router.get(
  '/:id',
  auth,
  route(async (req, res) => {
    const task = await prisma.task.findFirst({ where: { id: req.params.id, ...scope(req) } });
    if (!task) throw httpError(404, 'Task not found');
    res.json(serialize(task));
  })
);
router.post(
  '/',
  auth,
  manage,
  route(async (req, res) => {
    const { title, description = '', category, priority = 'Medium', dueDate } = req.body;
    if (!title?.trim() || !category) throw httpError(400, 'Title and category are required');
    if (dueDate && Number.isNaN(Date.parse(dueDate))) throw httpError(400, 'Due date is invalid');
    res
      .status(201)
      .json(
        serialize(
          await prisma.task.create({
            data: {
              title: title.trim(),
              description,
              category,
              priority,
              dueDate: dueDate ? new Date(dueDate) : null,
            },
          })
        )
      );
  })
);
router.put(
  '/:id',
  auth,
  route(async (req, res) => {
    const result = await transaction(prisma, async (tx) => {
      const task = await tx.task.findFirst({ where: { id: req.params.id, ...scope(req) } });
      if (!task) throw httpError(404, 'Task not found');
      const data = {};
      const keys = operationsRoles.includes(req.user.role)
        ? ['title', 'description', 'category', 'priority', 'status', 'notes', 'materialsUsed']
        : ['status', 'notes'];
      for (const key of keys) if (req.body[key] !== undefined) data[key] = req.body[key];
      if (data.status && !statuses.includes(data.status))
        throw httpError(400, 'Invalid task status');
      if (req.body.dueDate !== undefined && operationsRoles.includes(req.user.role)) {
        if (req.body.dueDate && Number.isNaN(Date.parse(req.body.dueDate)))
          throw httpError(400, 'Due date is invalid');
        data.dueDate = req.body.dueDate ? new Date(req.body.dueDate) : null;
      }
      if (
        data.status &&
        data.status !== task.status &&
        (data.status === 'Completed' || task.status === 'Completed')
      ) {
        const completed = data.status === 'Completed';
        data.completedAt = completed ? new Date() : null;
        if (task.assignedToId) {
          if (completed)
            await tx.user.updateMany({
              where: { id: task.assignedToId, activeTasks: { gt: 0 } },
              data: { activeTasks: { decrement: 1 } },
            });
          else
            await tx.user.update({
              where: { id: task.assignedToId },
              data: { activeTasks: { increment: 1 } },
            });
        }
      }
      return tx.task.update({ where: { id: task.id }, data });
    });
    res.json(serialize(result));
  })
);
router.delete(
  '/:id',
  auth,
  manage,
  route(async (req, res) => {
    await transaction(prisma, async (tx) => {
      const task = await tx.task.findUnique({ where: { id: req.params.id } });
      if (!task) throw httpError(404, 'Task not found');
      if (task.assignedToId && task.status !== 'Completed')
        await tx.user.updateMany({
          where: { id: task.assignedToId, activeTasks: { gt: 0 } },
          data: { activeTasks: { decrement: 1 } },
        });
      await tx.task.delete({ where: { id: task.id } });
    });
    res.json({ message: 'Task deleted' });
  })
);
async function assign(req, auto) {
  return transaction(prisma, async (tx) => {
    const task = await tx.task.findUnique({ where: { id: req.params.id } });
    if (!task) throw httpError(404, 'Task not found');
    if (task.status === 'Completed') throw httpError(409, 'Reopen the task before assigning it');
    const candidates = await tx.user.findMany({
      where: { isActive: true, role: { in: ['STUDENT', 'VOLUNTEER', 'STAFF', 'WASTE_STAFF'] } },
      select: {
        id: true,
        name: true,
        role: true,
        skills: true,
        activeTasks: true,
        availabilityHours: true,
      },
    });
    const scored = runAssignmentEngine(candidates, task) || [];
    const user = auto ? scored[0] : scored.find((item) => item.userId === req.body.userId);
    if (!user) throw httpError(400, 'No eligible assignee found');
    if (task.assignedToId !== user.userId) {
      if (task.assignedToId)
        await tx.user.updateMany({
          where: { id: task.assignedToId, activeTasks: { gt: 0 } },
          data: { activeTasks: { decrement: 1 } },
        });
      await tx.user.update({ where: { id: user.userId }, data: { activeTasks: { increment: 1 } } });
      await tx.notification.create({
        data: {
          type: 'task_assigned',
          message: `You have been assigned: ${task.title}`,
          userId: user.userId,
          taskId: task.id,
        },
      });
    }
    const updated = await tx.task.update({
      where: { id: task.id },
      data: { assignedToId: user.userId, assigneeName: user.name, status: 'Assigned' },
    });
    return {
      message: 'Task assigned',
      task: serialize(updated),
      assignedTo: user,
      allCandidates: scored,
    };
  });
}
router.post(
  '/:id/auto-assign',
  auth,
  manage,
  route(async (req, res) => res.json(await assign(req, true)))
);
router.post(
  '/:id/assign',
  auth,
  manage,
  route(async (req, res) => res.json(await assign(req, false)))
);
module.exports = router;
