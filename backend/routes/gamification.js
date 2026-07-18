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
        points: true
      },
      orderBy: { points: 'desc' },
      take: 10
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/gamification/badges/:userId
router.get('/badges/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const userBadges = await prisma.userBadge.findMany({
      where: { userId },
      include: { badge: true }
    });
    res.json(userBadges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/gamification/award/:userId
router.post('/award/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const { points, reason } = req.body;
    
    const user = await prisma.user.update({
      where: { id: userId },
      data: { points: { increment: points } }
    });

    res.json({
      message: `Successfully awarded ${points} points to user ${userId}`,
      reason,
      newTotal: user.points
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/gamification/rewards
router.get('/rewards', auth, async (req, res) => {
  try {
    const rewards = await prisma.rewardItem.findMany();
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/gamification/redeem
router.post('/redeem', auth, async (req, res) => {
  try {
    const { rewardId } = req.body;
    const userId = req.user.id;

    const reward = await prisma.rewardItem.findUnique({ where: { id: rewardId } });
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !reward) return res.status(404).json({ message: "User or Reward not found" });

    if (user.points < reward.pointsCost) {
      return res.status(400).json({ message: "Insufficient points" });
    }

    if (reward.quantityAvailable <= 0) {
      return res.status(400).json({ message: "Reward out of stock" });
    }

    await prisma.$transaction([
      prisma.user.update({ where: { id: userId }, data: { points: { decrement: reward.pointsCost } } }),
      prisma.rewardItem.update({ where: { id: rewardId }, data: { quantityAvailable: { decrement: 1 } } }),
      prisma.redemption.create({ data: { userId, rewardId } })
    ]);

    res.json({ message: "Reward redeemed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
