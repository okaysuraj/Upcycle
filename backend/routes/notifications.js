const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const { auth } = require('./auth');

// GET /api/notifications
router.get('/', auth, async (req, res) => {
  try {
    const userRes = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    const user = userRes.rows[0];
    
    // For simplicity, returning the user's notifications. Admin can have all notifications generated for them.
    const notifRes = await pool.query('SELECT * FROM notifications WHERE "userId" = $1 ORDER BY "createdAt" DESC LIMIT 50', [user.id]);
    res.json(notifRes.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/notifications/unread-count
router.get('/unread-count', auth, async (req, res) => {
  try {
    const countRes = await pool.query('SELECT COUNT(*) FROM notifications WHERE "userId" = $1 AND read = false', [req.user.id]);
    res.json({ count: parseInt(countRes.rows[0].count, 10) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/notifications/:id/read
router.put('/:id/read', auth, async (req, res) => {
  try {
    const notifRes = await pool.query('UPDATE notifications SET read = true WHERE id = $1 RETURNING *', [req.params.id]);
    if (notifRes.rows.length === 0) return res.status(404).json({ message: 'Notification not found' });
    res.json(notifRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/notifications/mark-all-read
router.put('/mark-all-read', auth, async (req, res) => {
  try {
    await pool.query('UPDATE notifications SET read = true WHERE "userId" = $1 AND read = false', [req.user.id]);
    res.json({ message: 'All notifications marked as read' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/notifications
router.post('/', auth, async (req, res) => {
  try {
    const { type, message, userId, taskId } = req.body;
    const notifRes = await pool.query(`
      INSERT INTO notifications (type, message, "userId", "taskId", read)
      VALUES ($1, $2, $3, $4, false)
      RETURNING *
    `, [type, message, userId, taskId]);
    res.status(201).json(notifRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
