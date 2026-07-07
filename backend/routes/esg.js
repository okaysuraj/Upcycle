const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/esg/report/:campusId
router.get('/report/:campusId', auth, async (req, res) => {
  try {
    const { campusId } = req.params;

    // In a real application, you'd aggregate data over a specific time range.
    // For this prototype, we'll fetch lifetime stats for the campus.
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
    
    // Carbon offset mock logic: Assume 1kg waste diverted = 0.5kg CO2 offset
    const totalWasteDiverted = wasteStats._sum.quantityKg || 0;
    const carbonOffsetKg = totalWasteDiverted * 0.5;

    res.json({
      campusName: campus.name,
      sustainabilityScore: campus.sustainabilityScore,
      totalWasteDivertedKg: totalWasteDiverted,
      estimatedCarbonOffsetKg: carbonOffsetKg,
      communityEngagement: {
        activeMembers: campus._count.users,
        eventsHosted: campus._count.events
      },
      // Mock generated compliance text
      aiSummary: `Overall ESG compliance is strong. Focus on increasing organic waste diversion to boost the sustainability score further.`
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/esg/corporate
// Aggregate stats across ALL campuses for a corporate-level view
router.get('/corporate', auth, async (req, res) => {
  try {
    // Only allow PLATFORM_ADMIN ideally
    const totalWaste = await prisma.wasteLog.aggregate({ _sum: { quantityKg: true } });
    const campusCount = await prisma.campus.count();
    const eventCount = await prisma.event.count();
    const userCount = await prisma.user.count();
    
    res.json({
      globalImpact: {
        totalCampuses: campusCount,
        totalUsers: userCount,
        totalEvents: eventCount,
        totalWasteDivertedKg: totalWaste._sum.quantityKg || 0,
        estimatedCarbonOffsetKg: (totalWaste._sum.quantityKg || 0) * 0.5,
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
