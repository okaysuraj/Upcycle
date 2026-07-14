const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth'); // Reuse auth middleware

// GET /api/campuses
router.get('/', auth, async (req, res) => {
  try {
    const campuses = await prisma.campus.findMany({
      include: {
        _count: {
          select: { users: true, bins: true, events: true }
        }
      }
    });
    res.json(campuses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/campuses/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const campus = await prisma.campus.findUnique({
      where: { id: req.params.id },
      include: {
        users: {
          select: { id: true, name: true, role: true }
        },
        bins: true,
      }
    });
    if (!campus) return res.status(404).json({ message: 'Campus not found' });
    res.json(campus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/campuses
router.post('/', auth, async (req, res) => {
  // Ideally, check if user is PLATFORM_ADMIN
  try {
    const { name, domain, location } = req.body;
    const campus = await prisma.campus.create({
      data: {
        name,
        domain,
        location,
        sustainabilityScore: 50.0 // Default starting score
      }
    });
    res.status(201).json(campus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/campuses/:id/ai-score
// Mock endpoint for AI calculating the sustainability score based on waste and energy
router.post('/:id/ai-score', auth, async (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real implementation, this would aggregate WasteLogs, fetch Energy data via IoT/APIs, 
    // and pass it to an LLM/ML model to generate a score and recommendations.
    
    // MOCK AI GENERATION
    const newScore = Math.floor(Math.random() * 30) + 60; // Random score 60-90
    const suggestions = [
      "Increase composting capacity by 20% to reduce organic waste.",
      "Optimize smart bin pickup routes in the north sector.",
      "Switch cafeteria packaging to compostable alternatives."
    ];

    const campus = await prisma.campus.update({
      where: { id },
      data: { sustainabilityScore: newScore }
    });

    res.json({
      campus,
      aiInsights: suggestions,
      message: 'Sustainability score updated successfully by AI engine.'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/campuses/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const campusId = req.user.campusId; // Scope to user's campus if they have one

    // In a real app, these would aggregate actual IoT tables, energy bills, and task alerts.
    // For now, we will return some mock calculated KPI data that powers the CampusAdmin Dashboard.
    const stats = {
      carbonOffset: 42.8,
      carbonOffsetTrend: 12,
      wasteDiverted: 68,
      wasteDivertedTarget: 75,
      energyUsage: 12.4,
      gridEfficiency: 88,
      urgentTasks: [
        { id: 1, title: 'Sensor Failure: West Wing', desc: 'Water flow meter at Building 4 is unresponsive.', type: 'warning' },
        { id: 2, title: 'Bin Capacity Reached', desc: 'Main Library recycling cluster is at 95% capacity.', type: 'waste' },
        { id: 3, title: 'Anomalous Usage Spike', desc: 'Gymnasium HVAC system exceeding baseline by 24%.', type: 'energy' }
      ]
    };

    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
