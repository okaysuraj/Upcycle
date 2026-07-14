const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// --- SMART BINS ---

// GET /api/waste/bins
router.get('/bins', auth, async (req, res) => {
  try {
    const bins = await prisma.smartBin.findMany({
      include: { campus: { select: { name: true } } }
    });
    res.json(bins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/waste/bins
router.post('/bins', auth, async (req, res) => {
  try {
    const { campusId, location, category } = req.body;
    const bin = await prisma.smartBin.create({
      data: {
        campusId,
        location,
        category,
        fillLevel: 0.0
      }
    });
    res.status(201).json(bin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /api/waste/bins/:id/fill
// Mock IoT endpoint to update bin fill level
router.patch('/bins/:id/fill', async (req, res) => {
  try {
    const { id } = req.params;
    const { fillLevel } = req.body; // e.g. 85.5 for 85.5%

    const bin = await prisma.smartBin.update({
      where: { id },
      data: { fillLevel }
    });

    // Simple overflow alert logic
    if (fillLevel > 90) {
      // In a real app, create a Notification for WASTE_STAFF or CAMPUS_ADMIN
      console.log(`🚨 ALERT: Bin ${id} is overflowing at ${fillLevel}%!`);
    }

    res.json(bin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/waste/bins/:id/empty
router.post('/bins/:id/empty', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const bin = await prisma.smartBin.update({
      where: { id },
      data: { 
        fillLevel: 0,
        lastEmptied: new Date()
      }
    });
    res.json({ message: 'Bin emptied successfully', bin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// --- WASTE LOGS ---

// GET /api/waste/logs
router.get('/logs', auth, async (req, res) => {
  try {
    const logs = await prisma.wasteLog.findMany({
      include: {
        user: { select: { name: true, role: true } },
        campus: { select: { name: true } }
      },
      orderBy: { date: 'desc' }
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/waste/logs
router.post('/logs', auth, async (req, res) => {
  try {
    const { campusId, category, quantityKg } = req.body;
    const log = await prisma.wasteLog.create({
      data: {
        campusId,
        userId: req.user.id,
        category,
        quantityKg: parseFloat(quantityKg)
      }
    });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/waste/stats
// For dashboard charts
router.get('/stats', auth, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Total daily waste
    const dailyLogs = await prisma.wasteLog.aggregate({
      where: { date: { gte: today } },
      _sum: { quantityKg: true }
    });
    const totalDailyWasteKg = dailyLogs._sum.quantityKg || 0;

    // Recycling rate (all time or daily - let's do all time for now)
    const allLogs = await prisma.wasteLog.groupBy({
      by: ['category'],
      _sum: { quantityKg: true }
    });
    
    let totalWaste = 0;
    let recycledWaste = 0;
    const recycledCategories = ['PLASTIC', 'PAPER', 'ORGANIC']; // Assuming these count as recycled
    
    allLogs.forEach(log => {
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
      include: { campus: { select: { name: true } } }
    });

    const totalBins = await prisma.smartBin.count();

    const formattedStats = allLogs.map(s => ({
      category: s.category,
      totalKg: s._sum.quantityKg || 0
    }));

    res.json({
      totalDailyWasteKg,
      recyclingRate: parseFloat(recyclingRate),
      criticalBins,
      totalBins,
      categoryBreakdown: formattedStats
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
