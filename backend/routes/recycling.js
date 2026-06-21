const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const { auth } = require('./auth');

// GET /api/recycling/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const globalStatsRes = await pool.query(`
      SELECT "materialType", SUM(quantity) as total_quantity, unit
      FROM recycling_logs
      GROUP BY "materialType", unit
    `);
    
    const userStatsRes = await pool.query(`
      SELECT "materialType", SUM(quantity) as total_quantity, unit
      FROM recycling_logs
      WHERE "userId" = $1
      GROUP BY "materialType", unit
    `, [req.user.id]);

    res.json({
      global: globalStatsRes.rows,
      user: userStatsRes.rows
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/recycling/logs
router.get('/logs', auth, async (req, res) => {
  try {
    const logs = await pool.query(`
      SELECT rl.*, u.name as "userName"
      FROM recycling_logs rl
      JOIN users u ON rl."userId" = u.id
      ORDER BY rl.date DESC
    `);
    res.json(logs.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/recycling/log
router.post('/log', auth, async (req, res) => {
  try {
    const { materialType, quantity, unit } = req.body;
    const userId = req.user.id;

    const newLog = await pool.query(`
      INSERT INTO recycling_logs ("userId", "materialType", quantity, unit)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [userId, materialType, quantity, unit]);

    res.status(201).json(newLog.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
