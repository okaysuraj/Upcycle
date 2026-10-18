// Manage campus records, approvals, and campus summaries.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth'); // Reuse auth middleware
const { requireRole } = require('../middleware/rbac');

// GET /api/campuses
router.get('/', auth, async (req, res) => {
  try {
    const campuses = await prisma.campus.findMany({
      include: {
        _count: {
          select: { users: true, bins: true, events: true },
        },
      },
    });
    res.json(campuses);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// Static routes must precede /:id.
router.get('/stats', auth, async (req, res) => {
  try {
    const where = req.user.campusId ? { campusId: req.user.campusId } : {};
    const [waste, carbon, energy, bins] = await Promise.all([
      prisma.wasteLog.aggregate({ where, _sum: { quantityKg: true } }),
      prisma.carbonFootprint.aggregate({ where, _sum: { reduction: true } }),
      prisma.energyUsage.aggregate({
        where,
        _sum: { kwhUsed: true },
        _avg: { percentageRenewable: true },
      }),
      prisma.smartBin.findMany({ where: { ...where, fillLevel: { gte: 90 } }, take: 10 }),
    ]);
    res.json({
      carbonOffset: carbon._sum.reduction || 0,
      carbonOffsetTrend: null,
      wasteDiverted: waste._sum.quantityKg || 0,
      wasteDivertedTarget: null,
      energyUsage: energy._sum.kwhUsed || 0,
      gridEfficiency: energy._avg.percentageRenewable || 0,
      urgentTasks: bins.map((bin) => ({
        id: bin.id,
        title: 'Bin collection needed',
        desc: `${bin.location}: ${bin.fillLevel}% full`,
        type: 'waste',
      })),
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not load campus statistics' });
  }
});

// GET /api/campuses/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const campus = await prisma.campus.findUnique({
      where: { id: req.params.id },
      include: {
        users: {
          select: { id: true, name: true, role: true },
        },
        bins: true,
      },
    });
    if (!campus) return res.status(404).json({ message: 'Campus not found' });
    res.json(campus);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/campuses
router.post('/', auth, requireRole(['PLATFORM_ADMIN']), async (req, res) => {
  try {
    const { name, domain, location } = req.body;
    const campus = await prisma.campus.create({
      data: {
        name,
        domain,
        location,
      },
    });
    res.status(201).json(campus);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/campuses/:id
router.put('/:id', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, domain, location } = req.body;
    const updated = await prisma.campus.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(domain && { domain }),
        ...(location && { location }),
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/campuses/:id/ai-score
// No model or scoring methodology is configured.
router.post('/:id/ai-score', auth, requireRole(['PLATFORM_ADMIN', 'CAMPUS_ADMIN']), (req, res) =>
  res
    .status(501)
    .json({
      message:
        'Automated campus scoring is not configured. The current score has not been changed.',
    })
);

module.exports = router;
