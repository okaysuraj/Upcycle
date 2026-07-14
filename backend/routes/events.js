const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/events
router.get('/', auth, async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        campus: { select: { name: true } },
        _count: { select: { registrations: true } }
      },
      orderBy: { date: 'asc' }
    });
    const stats = {
      totalVolunteers: 342,
      hoursLogged: 1250,
      upcomingEvents: events.filter(e => e.status === 'UPCOMING').length
    };

    res.json({ events, stats });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/events/:id/registrations
router.get('/:id/registrations', auth, async (req, res) => {
  try {
    const registrations = await prisma.eventRegistration.findMany({
      where: { eventId: req.params.id },
      include: {
        user: { select: { name: true, email: true, role: true } }
      }
    });
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/events
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, date, location, maxVolunteers, campusId } = req.body;
    
    // Only EVENT_ORGANIZER or PLATFORM_ADMIN should ideally create events.
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        maxAttendees: parseInt(maxVolunteers) || null,
        campusId: campusId || null,
      }
    });
    res.status(201).json(newEvent);
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
    const existing = await prisma.eventRegistration.findFirst({
      where: { eventId, userId }
    });
    
    if (existing) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    const reg = await prisma.eventRegistration.create({
      data: {
        eventId,
        userId,
        status: 'REGISTERED'
      }
    });
    
    res.status(201).json(reg);
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

    const existing = await prisma.eventRegistration.findFirst({
      where: { eventId, userId }
    });

    if (!existing) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    const reg = await prisma.eventRegistration.update({
      where: { id: existing.id },
      data: {
        hoursLogged: parseFloat(hours),
        status: 'ATTENDED'
      }
    });

    res.json(reg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
