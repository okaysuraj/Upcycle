// Manage volunteer shifts and enforce reservation capacity.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { route, httpError, transaction } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/shifts
router.get('/', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const shifts = await prisma.volunteerShift.findMany({
      where: campusId ? { campusId } : undefined,
      include: {
        _count: { select: { signups: { where: { status: 'CONFIRMED' } } } },
        signups: {
          where: { userId: req.user.id, status: 'CONFIRMED' },
          include: {
            user: { select: { id: true, name: true } },
          },
        },
      },
      orderBy: { date: 'asc' },
    });

    // Add userSignedUp boolean for convenience
    const formatted = shifts.map((s) => ({
      ...s,
      slotsFilled: s._count.signups,
      slotsRemaining: Math.max(0, s.maxSlots - s._count.signups),
      userSignedUp: s.signups.some((sub) => sub.userId === req.user.id),
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/shifts
router.post('/', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const {
      role,
      date,
      startTime,
      endTime,
      location,
      hours,
      points,
      maxSlots,
      supervisor,
      campusId,
    } = req.body;

    let targetCampusId = campusId || req.user.campusId;

    if (!targetCampusId) {
      return res.status(400).json({ message: 'A valid campusId is required.' });
    }

    const shift = await prisma.volunteerShift.create({
      data: {
        campusId: targetCampusId,
        role,
        date: new Date(date),
        startTime,
        endTime,
        location,
        hours: Number(hours),
        points: Number(points),
        maxSlots: Number(maxSlots),
        supervisor: supervisor || null,
      },
    });
    res.status(201).json(shift);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/shifts/:id/signup
router.post(
  '/:id/signup',
  auth,
  route(async (req, res) => {
    const signup = await transaction(prisma, async (tx) => {
      const shift = await tx.volunteerShift.findUnique({
        where: { id: req.params.id },
        include: { _count: { select: { signups: { where: { status: 'CONFIRMED' } } } } },
      });
      if (!shift) throw httpError(404, 'Shift not found');
      if (
        new Date(shift.date).toDateString() !== new Date().toDateString() &&
        shift.date < new Date()
      )
        throw httpError(409, 'This shift has ended');
      const existing = await tx.volunteerSignup.findUnique({
        where: { shiftId_userId: { shiftId: shift.id, userId: req.user.id } },
      });
      if (existing) return existing;
      if (shift._count.signups >= shift.maxSlots) throw httpError(409, 'This shift is full');
      // Signup reserves a place. Points require completion, not repeated signups.
      return tx.volunteerSignup.create({
        data: { shiftId: shift.id, userId: req.user.id, status: 'CONFIRMED' },
      });
    });
    res.status(201).json({ message: 'Shift reserved', signup });
  })
);
router.delete(
  '/:id/signup',
  auth,
  route(async (req, res) => {
    await prisma.volunteerSignup.deleteMany({
      where: { shiftId: req.params.id, userId: req.user.id, status: 'CONFIRMED' },
    });
    res.json({ message: 'Shift reservation cancelled' });
  })
);

module.exports = router;
