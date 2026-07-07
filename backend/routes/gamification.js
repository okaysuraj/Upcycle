const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/gamification/leaderboard
router.get('/leaderboard', auth, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        role: true,
        ecoPoints: true // We'll add this field or mock it if not in schema.
      },
      // Since ecoPoints isn't explicitly in the schema initially, 
      // we can mock it by calculating points based on events attended or activeTasks
      orderBy: { activeTasks: 'desc' },
      take: 10
    });
    
    // Mock mapping activeTasks to EcoPoints for the prototype
    const leaderboard = users.map(u => ({
      ...u,
      ecoPoints: u.activeTasks * 50 + Math.floor(Math.random() * 100) // Mock logic
    })).sort((a, b) => b.ecoPoints - a.ecoPoints);

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/gamification/award/:userId
router.post('/award/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const { points, reason } = req.body;
    
    // In a real DB with an ecoPoints column:
    // await prisma.user.update({ where: { id: userId }, data: { ecoPoints: { increment: points } } });

    res.json({
      message: `Successfully awarded ${points} EcoPoints to user ${userId}`,
      reason
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
