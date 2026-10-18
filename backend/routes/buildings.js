// Manage campus buildings and their recorded zones.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/buildings
router.get('/', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const buildings = await prisma.building.findMany({
      where: campusId ? { campusId } : undefined,
      include: {
        _count: { select: { bins: true } },
        bins: true,
      },
      orderBy: { name: 'asc' },
    });
    res.json(buildings);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/buildings/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const building = await prisma.building.findUnique({
      where: { id },
      include: { bins: true, campus: true },
    });
    if (!building) return res.status(404).json({ message: 'Building not found' });
    res.json(building);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/buildings
router.post('/', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { name, code, sector, zonesCount, efficiency, leadTechnician, campusId } = req.body;

    // Use the explicitly selected or assigned campus.
    let targetCampusId = campusId || req.user.campusId;

    if (!targetCampusId) {
      return res.status(400).json({ message: 'A valid campusId is required.' });
    }

    const building = await prisma.building.create({
      data: {
        name,
        code: code || `BLD-${Date.now().toString().slice(-4)}`,
        sector,
        zonesCount: Number(zonesCount),
        efficiency: efficiency === undefined ? null : Number(efficiency),
        leadTechnician: leadTechnician || null,
        campusId: targetCampusId,
        status: 'OPERATIONAL',
      },
    });
    res.status(201).json(building);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/buildings/:id
router.put('/:id', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, sector, zonesCount, efficiency, leadTechnician, status } = req.body;
    const updated = await prisma.building.update({
      where: { id },
      data: {
        name,
        sector,
        zonesCount: zonesCount !== undefined ? Number(zonesCount) : undefined,
        efficiency: efficiency !== undefined ? Number(efficiency) : undefined,
        leadTechnician,
        status,
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
