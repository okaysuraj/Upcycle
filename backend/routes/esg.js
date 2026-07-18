const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/esg/report/:campusId
router.get('/report/:campusId', auth, async (req, res) => {
  try {
    const { campusId } = req.params;

    const campus = await prisma.campus.findUnique({
      where: { id: campusId },
      include: {
        _count: { select: { users: true, bins: true, events: true } }
      }
    });

    if (!campus) return res.status(404).json({ message: 'Campus not found' });

    // Aggregate total waste
    const wasteStats = await prisma.wasteLog.aggregate({
      where: { campusId },
      _sum: { quantityKg: true }
    });
    const totalWasteDiverted = wasteStats._sum.quantityKg || 0;

    // Fetch actual carbon footprint, water, and energy
    const carbonFootprints = await prisma.carbonFootprint.findMany({
      where: { campusId },
      orderBy: { month: 'desc' },
      take: 12
    });

    const waterUsages = await prisma.waterUsage.findMany({
      where: { campusId },
      orderBy: { date: 'desc' },
      take: 12
    });

    const energyUsages = await prisma.energyUsage.findMany({
      where: { campusId },
      orderBy: { date: 'desc' },
      take: 12
    });

    const latestCarbon = carbonFootprints[0] || { totalEmissions: 0, reduction: 0 };
    const latestWater = waterUsages[0] || { gallonsUsed: 0, saved: 0 };
    const latestEnergy = energyUsages[0] || { kwhUsed: 0, percentageRenewable: 0 };

    res.json({
      campusName: campus.name,
      sustainabilityScore: campus.sustainabilityScore,
      totalWasteDivertedKg: totalWasteDiverted,
      estimatedCarbonOffsetKg: totalWasteDiverted * 0.5,
      carbon: latestCarbon,
      water: latestWater,
      energy: latestEnergy,
      history: {
        carbon: carbonFootprints,
        water: waterUsages,
        energy: energyUsages
      },
      communityEngagement: {
        activeMembers: campus._count.users,
        eventsHosted: campus._count.events
      }
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/esg/corporate
router.get('/corporate', auth, async (req, res) => {
  try {
    const totalWaste = await prisma.wasteLog.aggregate({ _sum: { quantityKg: true } });
    const campusCount = await prisma.campus.count();
    const eventCount = await prisma.event.count();
    const userCount = await prisma.user.count();
    
    // Summing across all campuses
    const totalCarbon = await prisma.carbonFootprint.aggregate({ _sum: { totalEmissions: true, reduction: true } });
    const totalWater = await prisma.waterUsage.aggregate({ _sum: { gallonsUsed: true, saved: true } });
    const totalEnergy = await prisma.energyUsage.aggregate({ _sum: { kwhUsed: true } });

    res.json({
      globalImpact: {
        totalCampuses: campusCount,
        totalUsers: userCount,
        totalEvents: eventCount,
        totalWasteDivertedKg: totalWaste._sum.quantityKg || 0,
        estimatedCarbonOffsetKg: (totalWaste._sum.quantityKg || 0) * 0.5,
        totalCarbonEmissions: totalCarbon._sum.totalEmissions || 0,
        totalWaterGallons: totalWater._sum.gallonsUsed || 0,
        totalEnergyKwh: totalEnergy._sum.kwhUsed || 0
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/esg/report/:campusId/generate
router.post('/report/:campusId/generate', auth, async (req, res) => {
  try {
    const { campusId } = req.params;
    const { month } = req.body;
    
    const newReport = await prisma.monthlyESGReport.create({
      data: {
        campusId,
        month: new Date(month),
        status: "GENERATING"
      }
    });

    res.json(newReport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
