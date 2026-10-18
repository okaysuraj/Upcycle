// Manage collection vehicles, dispatches, and their recorded status.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/fleet/vehicles
router.get('/vehicles', auth, async (req, res) => {
  try {
    const vehicles = await prisma.fleetVehicle.findMany({
      include: {
        dispatches: {
          where: { status: 'EN_ROUTE' },
          take: 1,
        },
      },
      orderBy: { code: 'asc' },
    });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/fleet/vehicles
router.post('/vehicles', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { name, code, type, batteryPct, status, latitude, longitude } = req.body;
    if ((latitude !== undefined) !== (longitude !== undefined))
      return res
        .status(400)
        .json({ message: 'Record both latitude and longitude, or leave both empty' });
    const vehicle = await prisma.fleetVehicle.create({
      data: {
        name,
        code,
        type,
        batteryPct: Number(batteryPct),
        status: status || 'ACTIVE',
        latitude: latitude !== undefined ? parseFloat(latitude) : null,
        longitude: longitude !== undefined ? parseFloat(longitude) : null,
      },
    });
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/fleet/dispatches
router.get('/dispatches', auth, async (req, res) => {
  try {
    const { campusId, status } = req.query;
    const where = {};
    if (campusId) where.campusId = campusId;
    if (status) where.status = status;

    const dispatches = await prisma.dispatchOrder.findMany({
      where,
      include: {
        vehicle: true,
        campus: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(dispatches);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/fleet/dispatches
router.post('/dispatches', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { vehicleId, campusId, targetBins, payloadKg, etaMinutes } = req.body;

    let targetCampusId = campusId || req.user.campusId;

    if (!targetCampusId) {
      return res.status(400).json({ message: 'A valid campusId is required.' });
    }
    if (targetBins?.length) {
      const ids = [...new Set(targetBins)];
      const recordedBins = await prisma.smartBin.count({
        where: { id: { in: ids }, campusId: targetCampusId },
      });
      if (recordedBins !== ids.length)
        return res.status(400).json({ message: 'Select saved bins from the dispatch campus' });
    }

    const dispatch = await prisma.dispatchOrder.create({
      data: {
        vehicleId,
        campusId: targetCampusId,
        targetBins: targetBins || [],
        payloadKg: Number(payloadKg),
        etaMinutes: Number(etaMinutes),
        status: 'QUEUED',
      },
      include: {
        vehicle: true,
      },
    });

    res.status(201).json(dispatch);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PATCH /api/fleet/dispatches/:id
const ALLOWED_DISPATCH_STATUSES = [
  'QUEUED',
  'ASSIGNED',
  'DISPATCHED',
  'EN_ROUTE',
  'COMPLETED',
  'CANCELLED',
];

router.patch('/dispatches/:id', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (status && !ALLOWED_DISPATCH_STATUSES.includes(status)) {
      return res.status(400).json({ message: 'Invalid dispatch status' });
    }
    const updated = await prisma.dispatchOrder.update({
      where: { id },
      data: { status },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
