// Manage shared resources and their recorded availability.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { route, httpError, transaction, operationsRoles, positiveNumber } = require('../utils/http');
const manage = requireRole(operationsRoles);
router.get(
  '/',
  auth,
  route(async (req, res) => res.json(await prisma.resource.findMany()))
);
router.get(
  '/stats',
  auth,
  route(async (req, res) => {
    const resources = await prisma.resource.findMany();
    res.json({
      total: resources.length,
      lowStock: resources.filter((r) => r.quantity <= r.threshold).length,
      critical: resources.filter((r) => r.quantity <= r.threshold * 0.5).length,
      healthy: resources.filter((r) => r.quantity > r.threshold).length,
    });
  })
);
router.get(
  '/:id',
  auth,
  route(async (req, res) => {
    const resource = await prisma.resource.findUnique({ where: { id: req.params.id } });
    if (!resource) throw httpError(404, 'Resource not found');
    res.json(resource);
  })
);
function input(body, partial = false) {
  const data = {};
  for (const key of ['name', 'unit', 'category', 'icon'])
    if (body[key] !== undefined) data[key] = body[key];
  for (const key of ['quantity', 'threshold'])
    if (body[key] !== undefined) {
      const n = Number(body[key]);
      if (!Number.isInteger(n) || n < 0)
        throw httpError(400, `${key} must be a non-negative integer`);
      data[key] = n;
    }
  if (
    !partial &&
    (!data.name ||
      !data.unit ||
      !data.category ||
      data.quantity === undefined ||
      data.threshold === undefined)
  )
    throw httpError(400, 'Name, unit, category, quantity and threshold are required');
  return data;
}
router.post(
  '/',
  auth,
  manage,
  route(async (req, res) =>
    res.status(201).json(await prisma.resource.create({ data: input(req.body) }))
  )
);
router.put(
  '/:id',
  auth,
  manage,
  route(async (req, res) =>
    res.json(
      await prisma.resource.update({ where: { id: req.params.id }, data: input(req.body, true) })
    )
  )
);
for (const action of ['consume', 'restock'])
  router.post(
    `/:id/${action}`,
    auth,
    manage,
    route(async (req, res) => {
      const amount = positiveNumber(req.body.amount);
      if (!Number.isInteger(amount)) throw httpError(400, 'Amount must be an integer');
      const resource = await transaction(prisma, async (tx) => {
        const current = await tx.resource.findUnique({ where: { id: req.params.id } });
        if (!current) throw httpError(404, 'Resource not found');
        if (action === 'consume' && current.quantity < amount)
          throw httpError(409, 'Not enough stock');
        const updated = await tx.resource.update({
          where: { id: current.id },
          data: { quantity: { increment: action === 'restock' ? amount : -amount } },
        });
        if (updated.quantity <= updated.threshold && current.quantity > current.threshold) {
          const admins = await tx.user.findMany({
            where: { isActive: true, role: { in: ['ADMIN', 'PLATFORM_ADMIN'] } },
            select: { id: true },
          });
          if (admins.length)
            await tx.notification.createMany({
              data: admins.map((user) => ({
                userId: user.id,
                type: 'stock_low',
                message: `Low stock: ${updated.name} (${updated.quantity} ${updated.unit} remaining)`,
              })),
            });
        }
        return updated;
      });
      res.json(resource);
    })
  );
router.delete(
  '/:id',
  auth,
  manage,
  route(async (req, res) => {
    await prisma.resource.delete({ where: { id: req.params.id } });
    res.json({ message: 'Resource deleted' });
  })
);
module.exports = router;
