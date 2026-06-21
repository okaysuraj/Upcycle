const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const { auth } = require('./auth');

async function checkAndNotifyLowStock(resource) {
  if (resource.quantity <= resource.threshold) {
    const adminRes = await pool.query("SELECT id FROM users WHERE role = 'admin' LIMIT 1");
    if (adminRes.rows.length > 0) {
      await pool.query(`
        INSERT INTO notifications (type, message, "userId", read)
        VALUES ('stock_low', $1, $2, false)
      `, [`⚠️ Low Stock Alert: ${resource.name} is below threshold (${resource.quantity} ${resource.unit} remaining)`, adminRes.rows[0].id]);
    }
  }
}

// GET /api/resources
router.get('/', auth, async (req, res) => {
  try {
    const resources = await pool.query('SELECT * FROM resources');
    res.json(resources.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/resources/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const resourcesRes = await pool.query('SELECT * FROM resources');
    const resources = resourcesRes.rows;
    const stats = {
      total: resources.length,
      lowStock: resources.filter(r => r.quantity <= r.threshold).length,
      critical: resources.filter(r => r.quantity <= r.threshold * 0.5).length,
      healthy: resources.filter(r => r.quantity > r.threshold).length,
    };
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/resources/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const resourceRes = await pool.query('SELECT * FROM resources WHERE id = $1', [req.params.id]);
    if (resourceRes.rows.length === 0) return res.status(404).json({ message: 'Resource not found' });
    res.json(resourceRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/resources
router.post('/', auth, async (req, res) => {
  try {
    const { name, quantity, unit, threshold, category, icon } = req.body;
    const resourceRes = await pool.query(`
      INSERT INTO resources (name, quantity, unit, threshold, category, icon)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `, [name, quantity, unit, threshold, category, icon]);
    res.status(201).json(resourceRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/resources/:id
router.put('/:id', auth, async (req, res) => {
  try {
    const { name, quantity, unit, threshold, category, icon } = req.body;
    const resourceRes = await pool.query(`
      UPDATE resources
      SET name = COALESCE($1, name),
          quantity = COALESCE($2, quantity),
          unit = COALESCE($3, unit),
          threshold = COALESCE($4, threshold),
          category = COALESCE($5, category),
          icon = COALESCE($6, icon),
          "updatedAt" = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *
    `, [name, quantity, unit, threshold, category, icon, req.params.id]);
    
    if (resourceRes.rows.length === 0) return res.status(404).json({ message: 'Resource not found' });
    
    await checkAndNotifyLowStock(resourceRes.rows[0]);
    res.json(resourceRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/resources/:id/consume — deduct stock
router.post('/:id/consume', auth, async (req, res) => {
  try {
    const { amount } = req.body;
    const resourceRes = await pool.query('SELECT quantity FROM resources WHERE id = $1', [req.params.id]);
    if (resourceRes.rows.length === 0) return res.status(404).json({ message: 'Resource not found' });

    const newQuantity = Math.max(0, resourceRes.rows[0].quantity - amount);
    const updatedRes = await pool.query(`
      UPDATE resources SET quantity = $1, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *
    `, [newQuantity, req.params.id]);

    await checkAndNotifyLowStock(updatedRes.rows[0]);
    res.json(updatedRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/resources/:id/restock — add stock
router.post('/:id/restock', auth, async (req, res) => {
  try {
    const { amount } = req.body;
    const resourceRes = await pool.query('SELECT quantity FROM resources WHERE id = $1', [req.params.id]);
    if (resourceRes.rows.length === 0) return res.status(404).json({ message: 'Resource not found' });

    const newQuantity = resourceRes.rows[0].quantity + amount;
    const updatedRes = await pool.query(`
      UPDATE resources SET quantity = $1, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *
    `, [newQuantity, req.params.id]);
    res.json(updatedRes.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/resources/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleteRes = await pool.query('DELETE FROM resources WHERE id = $1 RETURNING *', [req.params.id]);
    if (deleteRes.rows.length === 0) return res.status(404).json({ message: 'Resource not found' });
    res.json({ message: 'Resource deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
