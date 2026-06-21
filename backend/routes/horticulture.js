const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const { auth } = require('./auth');

// GET /api/horticulture/plants
router.get('/plants', auth, async (req, res) => {
  try {
    const plants = await pool.query('SELECT * FROM plants ORDER BY "plantedDate" DESC');
    res.json(plants.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/horticulture/plants
router.post('/plants', auth, async (req, res) => {
  try {
    const { name, location, plantedDate, status } = req.body;
    const newPlant = await pool.query(`
      INSERT INTO plants (name, location, "plantedDate", status)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, location, plantedDate, status || 'Healthy']);
    res.status(201).json(newPlant.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/horticulture/harvests
router.get('/harvests', auth, async (req, res) => {
  try {
    const harvests = await pool.query(`
      SELECT h.*, p.name as "plantName", p.location
      FROM harvests h
      JOIN plants p ON h."plantId" = p.id
      ORDER BY h.date DESC
    `);
    res.json(harvests.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/horticulture/plants/:id/harvest
router.post('/plants/:id/harvest', auth, async (req, res) => {
  try {
    const plantId = req.params.id;
    const { quantity, unit, date } = req.body;

    const newHarvest = await pool.query(`
      INSERT INTO harvests ("plantId", quantity, unit, date)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [plantId, quantity, unit, date || new Date()]);

    res.status(201).json(newHarvest.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
