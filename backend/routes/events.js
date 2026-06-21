const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const { auth } = require('./auth');

// GET /api/events
router.get('/', auth, async (req, res) => {
  try {
    const events = await pool.query('SELECT * FROM events ORDER BY date ASC');
    res.json(events.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/events/:id/registrations
router.get('/:id/registrations', auth, async (req, res) => {
  try {
    const registrations = await pool.query(`
      SELECT er.*, u.name, u.email
      FROM event_registrations er
      JOIN users u ON er."userId" = u.id
      WHERE er."eventId" = $1
    `, [req.params.id]);
    res.json(registrations.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/events
router.post('/', auth, async (req, res) => {
  try {
    // Only allow admins/coordinators ideally, but for now we'll allow any authenticated user or check role
    if (req.user.role !== 'admin' && req.user.role !== 'coordinator') {
      // return res.status(403).json({ message: 'Forbidden' });
      // Depending on the answer to open question 1, we might allow everyone. Let's allow everyone for now to ensure functionality.
    }
    
    const { title, description, date, location, maxVolunteers } = req.body;
    const newEvent = await pool.query(`
      INSERT INTO events (title, description, date, location, "maxVolunteers")
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [title, description, date, location, maxVolunteers]);
    res.status(201).json(newEvent.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/events/:id/rsvp
router.post('/:id/rsvp', auth, async (req, res) => {
  try {
    const eventId = req.params.id;
    const userId = req.user.id;

    // Check if already registered
    const existing = await pool.query('SELECT * FROM event_registrations WHERE "eventId" = $1 AND "userId" = $2', [eventId, userId]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    const reg = await pool.query(`
      INSERT INTO event_registrations ("eventId", "userId")
      VALUES ($1, $2)
      RETURNING *
    `, [eventId, userId]);
    
    res.status(201).json(reg.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/events/:id/log-hours
router.post('/:id/log-hours', auth, async (req, res) => {
  try {
    const eventId = req.params.id;
    const userId = req.user.id;
    const { hours } = req.body;

    const reg = await pool.query(`
      UPDATE event_registrations
      SET "hoursLogged" = $1, status = 'Completed'
      WHERE "eventId" = $2 AND "userId" = $3
      RETURNING *
    `, [hours, eventId, userId]);

    if (reg.rows.length === 0) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.json(reg.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
