// Manage events and registrations without exposing other attendees.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { route, httpError, positiveNumber, transaction } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/events
router.get('/', auth, async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        campus: { select: { name: true } },
        registrations: { where: { userId: req.user.id }, select: { status: true } },
        _count: { select: { registrations: { where: { status: { not: 'CANCELLED' } } } } },
      },
      orderBy: { date: 'asc' },
    });
    const totalVolunteers = await prisma.eventRegistration.count({
      where: { status: { not: 'CANCELLED' } },
    });
    let hoursLogged = 0;
    try {
      const hours = await prisma.eventRegistration.aggregate({
        where: { status: 'ATTENDED' },
        _sum: { hoursLogged: true },
      });
      hoursLogged = hours._sum.hoursLogged || 0;
    } catch (error) {
      if (error.code !== 'P2022') throw error; // Existing deployments need the additive migration.
    }
    const stats = {
      totalVolunteers,
      hoursLogged: Math.round(hoursLogged),
      upcomingEvents: events.filter((e) => e.status === 'UPCOMING').length,
    };

    res.json({
      events: events.map(({ registrations, ...event }) => ({
        ...event,
        userRegistered: registrations.some((registration) => registration.status !== 'CANCELLED'),
      })),
      stats,
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/events/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: req.params.id },
      include: {
        campus: { select: { name: true } },
        registrations: { where: { userId: req.user.id }, select: { status: true } },
        _count: { select: { registrations: { where: { status: { not: 'CANCELLED' } } } } },
      },
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    const { registrations, ...eventData } = event;
    res.json({
      ...eventData,
      userRegistered: registrations.some((registration) => registration.status !== 'CANCELLED'),
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/events/:id/registrations
router.get('/:id/registrations', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const registrations = await prisma.eventRegistration.findMany({
      where: { eventId: req.params.id },
      include: {
        user: { select: { name: true, role: true } },
      },
    });
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/events
router.post('/', auth, requireRole([...operationsRoles, 'EVENT_ORGANIZER']), async (req, res) => {
  try {
    const { title, description, date, location, maxVolunteers, campusId } = req.body;

    if (
      !title?.trim() ||
      !description?.trim() ||
      !location?.trim() ||
      Number.isNaN(Date.parse(date))
    )
      return res
        .status(400)
        .json({ message: 'Title, description, location and a valid date are required' });
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        maxAttendees: parseInt(maxVolunteers) || null,
        campusId: campusId || null,
      },
    });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/events/:id/rsvp
router.post(
  '/:id/rsvp',
  auth,
  route(async (req, res) => {
    const reg = await transaction(prisma, async (tx) => {
      const event = await tx.event.findUnique({
        where: { id: req.params.id },
        include: {
          _count: { select: { registrations: { where: { status: { not: 'CANCELLED' } } } } },
        },
      });
      if (!event) throw httpError(404, 'Event not found');
      if (event.status !== 'UPCOMING' || event.date <= new Date())
        throw httpError(409, 'Registration for this event is closed');
      const existing = await tx.eventRegistration.findUnique({
        where: { eventId_userId: { eventId: event.id, userId: req.user.id } },
      });
      if (existing && existing.status !== 'CANCELLED') return existing;
      if (event.maxAttendees && event._count.registrations >= event.maxAttendees)
        throw httpError(409, 'This event is full');
      return tx.eventRegistration.upsert({
        where: { eventId_userId: { eventId: event.id, userId: req.user.id } },
        create: { eventId: event.id, userId: req.user.id },
        update: { status: 'REGISTERED' },
      });
    });
    res.status(201).json(reg);
  })
);

router.delete(
  '/:id/rsvp',
  auth,
  route(async (req, res) => {
    const registration = await prisma.eventRegistration.findUnique({
      where: { eventId_userId: { eventId: req.params.id, userId: req.user.id } },
    });
    if (!registration || registration.status === 'CANCELLED')
      throw httpError(404, 'Active registration not found');
    if (registration.status === 'ATTENDED')
      throw httpError(409, 'Attendance has already been recorded');
    await prisma.eventRegistration.update({
      where: { id: registration.id },
      data: { status: 'CANCELLED' },
    });
    res.status(204).end();
  })
);

// POST /api/events/:id/log-hours
router.post('/:id/log-hours', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const eventId = req.params.id;
    const { hours, userId } = req.body;
    if (!Number.isFinite(Number(hours)) || Number(hours) <= 0 || Number(hours) > 24)
      return res.status(400).json({ message: 'Hours must be between 0 and 24' });
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId || ''))
      return res.status(400).json({ message: 'A valid attendee ID is required' });

    const existing = await prisma.eventRegistration.findFirst({
      where: { eventId, userId },
    });

    if (!existing || existing.status === 'CANCELLED') {
      return res.status(404).json({ message: 'Registration not found' });
    }

    const reg = await prisma.eventRegistration.update({
      where: { id: existing.id },
      data: {
        hoursLogged: parseFloat(hours),
        status: 'ATTENDED',
      },
    });

    res.json(reg);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
