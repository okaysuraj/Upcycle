// Manage waste records, bin readings, and overflow notifications.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { positiveNumber, route, httpError, transaction } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// --- SMART BINS ---

// GET /api/waste/bins
router.get('/bins', auth, async (req, res) => {
  try {
    const bins = await prisma.smartBin.findMany({
      include: { campus: { select: { name: true } } },
    });
    res.json(bins);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/waste/bins
router.post('/bins', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    let { campusId, location, category, buildingId, fillLevel } = req.body;
    if (
      !location?.trim() ||
      ![
        'PLASTIC',
        'PAPER',
        'GLASS',
        'METAL',
        'ORGANIC',
        'E_WASTE',
        'HAZARDOUS',
        'GENERAL',
      ].includes(category) ||
      typeof fillLevel !== 'number' ||
      fillLevel < 0 ||
      fillLevel > 100 ||
      !Number.isFinite(fillLevel)
    )
      return res
        .status(400)
        .json({ message: 'Enter a location, category and observed fill between 0 and 100' });
    if (!campusId) {
      campusId = req.user.campusId;
    }
    if (buildingId) {
      const building = await prisma.building.findUnique({ where: { id: buildingId } });
      if (!building) return res.status(404).json({ message: 'Building not found' });
      if (campusId && campusId !== building.campusId)
        return res.status(400).json({ message: 'Building does not belong to this campus' });
      campusId = building.campusId;
    }
    if (!campusId) {
      return res.status(400).json({ message: 'Campus ID is required to register a smart bin.' });
    }

    // Standardize category enum
    let cleanCategory = category || 'GENERAL';
    if (cleanCategory === 'CARDBOARD') cleanCategory = 'PAPER';
    if (cleanCategory === 'E-WASTE') cleanCategory = 'E_WASTE';

    const bin = await prisma.smartBin.create({
      data: {
        campusId,
        location,
        category: cleanCategory,
        fillLevel,
        buildingId: buildingId || undefined,
      },
    });
    res.status(201).json(bin);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PATCH /api/waste/bins/:id/fill
// Staff enter an observed reading; no sensor feed is simulated.
router.patch('/bins/:id/fill', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const { fillLevel } = req.body;
    if (
      typeof fillLevel !== 'number' ||
      !Number.isFinite(fillLevel) ||
      fillLevel < 0 ||
      fillLevel > 100
    )
      return res.status(400).json({ message: 'Fill level must be between 0 and 100' }); // e.g. 85.5 for 85.5%

    const bin = await transaction(prisma, async (tx) => {
      const previous = await tx.smartBin.findUnique({ where: { id } });
      if (!previous) throw httpError(404, 'Bin not found');
      const updated = await tx.smartBin.update({
        where: { id },
        data: { fillLevel },
      });

      // Store an in-app alert when a recorded reading crosses the collection threshold.
      if (fillLevel > 90 && previous.fillLevel <= 90) {
        const staff = await tx.user.findMany({
          where: {
            isActive: true,
            OR: [
              {
                campusId: updated.campusId,
                role: { in: ['WASTE_STAFF', 'STAFF', 'CAMPUS_ADMIN'] },
              },
              { role: { in: ['ADMIN', 'PLATFORM_ADMIN'] } },
            ],
          },
          select: { id: true },
        });
        if (staff.length)
          await tx.notification.createMany({
            data: staff.map((user) => ({
              userId: user.id,
              type: 'BIN_COLLECTION',
              message: `${updated.location}: observed fill ${fillLevel}%; collection is needed.`,
            })),
          });
      }
      return updated;
    });

    res.json(bin);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/waste/bins/:id/empty
router.post('/bins/:id/empty', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const bin = await prisma.smartBin.update({
      where: { id },
      data: {
        fillLevel: 0,
        lastEmptied: new Date(),
      },
    });
    res.json({ message: 'Bin emptied successfully', bin });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// --- WASTE LOGS ---

// GET /api/waste/public-activity (Unauthenticated for public landing page ticker)
router.get('/public-activity', async (req, res) => {
  try {
    const logs = await prisma.wasteLog.findMany({
      where: {
        user: { isActive: true, privacySettings: { path: ['activityFeed'], equals: true } },
      },
      select: {
        id: true,
        category: true,
        quantityKg: true,
        date: true,
        campus: { select: { name: true } },
        user: { select: { name: true } },
      },
      orderBy: { date: 'desc' },
      take: 10,
    });
    res.json(logs);
  } catch {
    res.status(500).json({ message: 'Could not load public activity' });
  }
});

// GET /api/waste/logs
router.get('/logs', auth, async (req, res) => {
  try {
    const logs = await prisma.wasteLog.findMany({
      where: operationsRoles.includes(req.user?.role)
        ? {}
        : { userId: req.user?.id || '__public__' },
      include: {
        user: { select: { name: true, role: true } },
        campus: { select: { name: true } },
      },
      orderBy: { date: 'desc' },
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/waste/logs
router.post(
  '/logs',
  auth,
  route(async (req, res) => {
    const campusId = req.body.campusId || req.user.campusId;
    const { category, photoUrl } = req.body;
    if (!campusId) throw httpError(400, 'Select a campus before logging waste');
    if (
      ![
        'PLASTIC',
        'PAPER',
        'GLASS',
        'METAL',
        'ORGANIC',
        'E_WASTE',
        'HAZARDOUS',
        'GENERAL',
      ].includes(category)
    )
      throw httpError(400, 'Select a valid waste category');
    const quantityKg = positiveNumber(req.body.quantityKg, 'Weight');
    const log = await prisma.wasteLog.create({
      data: { campusId, userId: req.user.id, category, quantityKg, photoUrl },
      include: { campus: { select: { name: true } }, user: { select: { name: true, role: true } } },
    });
    res.status(201).json(log);
  })
);

// GET /api/waste/stats
// For dashboard charts
router.get('/stats', auth, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Total daily waste
    const dailyLogs = await prisma.wasteLog.aggregate({
      where: { date: { gte: today } },
      _sum: { quantityKg: true },
    });
    const totalDailyWasteKg = dailyLogs._sum.quantityKg || 0;

    // Recycling rate (all time or daily - let's do all time for now)
    const allLogs = await prisma.wasteLog.groupBy({
      by: ['category'],
      _sum: { quantityKg: true },
    });

    let totalWaste = 0;
    let recycledWaste = 0;
    const recycledCategories = ['PLASTIC', 'PAPER', 'ORGANIC']; // Assuming these count as recycled

    allLogs.forEach((log) => {
      const kg = log._sum.quantityKg || 0;
      totalWaste += kg;
      if (recycledCategories.includes(log.category)) {
        recycledWaste += kg;
      }
    });

    const recyclingRate = totalWaste > 0 ? ((recycledWaste / totalWaste) * 100).toFixed(1) : 0;

    // Critical bins
    const criticalBins = await prisma.smartBin.findMany({
      where: { fillLevel: { gt: 90 } },
      include: { campus: { select: { name: true } } },
    });

    const totalBins = await prisma.smartBin.count();

    const formattedStats = allLogs.map((s) => ({
      category: s.category,
      totalKg: s._sum.quantityKg || 0,
    }));

    res.json({
      totalDailyWasteKg,
      recyclingRate: null,
      potentiallyRecoverableCategorySharePct: parseFloat(recyclingRate),
      measurementNote:
        'Category share is calculated from reported waste categories. Actual recycling or diversion has not been measured.',
      criticalBins,
      totalBins,
      categoryBreakdown: formattedStats,
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
