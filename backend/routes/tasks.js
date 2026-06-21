const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const { auth } = require('./auth');
const { runAssignmentEngine } = require('../utils/assignmentEngine');

// GET /api/tasks
router.get('/', auth, async (req, res) => {
  try {
    const { status, category, priority } = req.query;
    let query = 'SELECT * FROM tasks WHERE 1=1';
    const values = [];
    let idx = 1;

    if (status && status !== 'All') {
      query += ` AND status = $${idx++}`;
      values.push(status);
    }
    if (category) {
      query += ` AND category = $${idx++}`;
      values.push(category);
    }
    if (priority) {
      query += ` AND priority = $${idx++}`;
      values.push(priority);
    }
    query += ' ORDER BY "createdAt" DESC';

    const tasksRes = await pool.query(query, values);
    res.json(tasksRes.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/tasks/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const tasksRes = await pool.query('SELECT * FROM tasks');
    const tasks = tasksRes.rows;
    const stats = {
      total: tasks.length,
      pending: tasks.filter(t => t.status === 'Pending').length,
      assigned: tasks.filter(t => t.status === 'Assigned').length,
      inProgress: tasks.filter(t => t.status === 'In-Progress').length,
      completed: tasks.filter(t => t.status === 'Completed').length,
      highPriority: tasks.filter(t => t.priority === 'High').length,
    };
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/tasks/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const taskRes = await pool.query('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
    if (taskRes.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
    res.json(taskRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/tasks
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, category, priority, status, assignedTo, assigneeName, dueDate, completedAt, materialsUsed, notes } = req.body;
    const taskRes = await pool.query(`
      INSERT INTO tasks (title, description, category, priority, status, "assignedTo", "assigneeName", "dueDate", "completedAt", "materialsUsed", notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `, [title, description, category, priority || 'Medium', status || 'Pending', assignedTo, assigneeName, dueDate, completedAt, materialsUsed ? JSON.stringify(materialsUsed) : null, notes]);
    res.status(201).json(taskRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/tasks/:id
router.put('/:id', auth, async (req, res) => {
  try {
    const existingRes = await pool.query('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
    if (existingRes.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
    const existingTask = existingRes.rows[0];

    let { title, description, category, priority, status, assignedTo, assigneeName, dueDate, completedAt, materialsUsed, notes } = req.body;
    
    if (status === 'Completed' && existingTask.status !== 'Completed') {
      completedAt = new Date().toISOString();
      if (existingTask.assignedTo) {
        await pool.query('UPDATE users SET "activeTasks" = GREATEST(0, "activeTasks" - 1) WHERE id = $1', [existingTask.assignedTo]);
      }
      const adminRes = await pool.query("SELECT id FROM users WHERE role = 'admin' LIMIT 1");
      if (adminRes.rows.length > 0) {
        await pool.query(`
          INSERT INTO notifications (type, message, "userId", "taskId", read)
          VALUES ('task_completed', $1, $2, $3, false)
        `, [`"${existingTask.title}" has been marked as Completed`, adminRes.rows[0].id, existingTask.id]);
      }
    }

    const taskRes = await pool.query(`
      UPDATE tasks
      SET title = COALESCE($1, title),
          description = COALESCE($2, description),
          category = COALESCE($3, category),
          priority = COALESCE($4, priority),
          status = COALESCE($5, status),
          "assignedTo" = COALESCE($6, "assignedTo"),
          "assigneeName" = COALESCE($7, "assigneeName"),
          "dueDate" = COALESCE($8, "dueDate"),
          "completedAt" = COALESCE($9, "completedAt"),
          "materialsUsed" = COALESCE($10, "materialsUsed"),
          notes = COALESCE($11, notes),
          "updatedAt" = CURRENT_TIMESTAMP
      WHERE id = $12
      RETURNING *
    `, [title, description, category, priority, status, assignedTo, assigneeName, dueDate, completedAt, materialsUsed ? JSON.stringify(materialsUsed) : null, notes, req.params.id]);

    res.json(taskRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/tasks/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleteRes = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [req.params.id]);
    if (deleteRes.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/tasks/:id/auto-assign
router.post('/:id/auto-assign', auth, async (req, res) => {
  try {
    const taskRes = await pool.query('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
    if (taskRes.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
    const task = taskRes.rows[0];

    const usersRes = await pool.query('SELECT * FROM users');
    const users = usersRes.rows.map(u => ({ ...u, _id: u.id }));
    const scored = runAssignmentEngine(users, task);

    if (!scored || scored.length === 0) {
      return res.status(400).json({ message: 'No eligible candidates found' });
    }

    const bestCandidate = scored[0];

    const updatedTaskRes = await pool.query(`
      UPDATE tasks SET "assignedTo" = $1, "assigneeName" = $2, status = 'Assigned', "updatedAt" = CURRENT_TIMESTAMP
      WHERE id = $3 RETURNING *
    `, [bestCandidate.userId, bestCandidate.name, task.id]);

    await pool.query('UPDATE users SET "activeTasks" = "activeTasks" + 1 WHERE id = $1', [bestCandidate.userId]);

    await pool.query(`
      INSERT INTO notifications (type, message, "userId", "taskId", read)
      VALUES ('task_assigned', $1, $2, $3, false)
    `, [`You have been assigned: "${task.title}"`, bestCandidate.userId, task.id]);

    res.json({
      message: 'Task auto-assigned successfully',
      assignedTo: bestCandidate,
      allCandidates: scored,
      task: updatedTaskRes.rows[0],
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/tasks/:id/assign
router.post('/:id/assign', auth, async (req, res) => {
  try {
    const { userId } = req.body;
    const taskRes = await pool.query('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
    if (taskRes.rows.length === 0) return res.status(404).json({ message: 'Task not found' });
    const task = taskRes.rows[0];

    const userRes = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (userRes.rows.length === 0) return res.status(404).json({ message: 'User not found' });
    const user = userRes.rows[0];

    if (task.assignedTo && task.assignedTo !== userId) {
      await pool.query('UPDATE users SET "activeTasks" = GREATEST(0, "activeTasks" - 1) WHERE id = $1', [task.assignedTo]);
    }

    const updatedTaskRes = await pool.query(`
      UPDATE tasks SET "assignedTo" = $1, "assigneeName" = $2, status = 'Assigned', "updatedAt" = CURRENT_TIMESTAMP
      WHERE id = $3 RETURNING *
    `, [userId, user.name, task.id]);

    await pool.query('UPDATE users SET "activeTasks" = "activeTasks" + 1 WHERE id = $1', [userId]);

    await pool.query(`
      INSERT INTO notifications (type, message, "userId", "taskId", read)
      VALUES ('task_assigned', $1, $2, $3, false)
    `, [`You have been manually assigned: "${task.title}"`, userId, task.id]);

    res.json({ message: 'Task assigned', task: updatedTaskRes.rows[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
