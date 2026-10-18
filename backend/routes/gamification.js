// Expose earned achievements and redeem rewards atomically.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { route, httpError, transaction } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/gamification/leaderboard
router.get('/leaderboard', auth, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        role: true,
        points: true,
        privacySettings: true,
      },
      orderBy: { points: 'desc' },
      where: { isActive: true },
    });
    res.json(
      users
        .filter((user) => user.privacySettings?.shareImpact !== false)
        .slice(0, 10)
        .map(({ privacySettings, ...user }) => ({
          ...user,
          name: privacySettings?.profileVisible === false ? 'Anonymous participant' : user.name,
        }))
    );
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/gamification/badges
router.get('/badges', auth, async (req, res) => {
  try {
    const badges = await prisma.badge.findMany();
    res.json(badges);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/gamification/badges/:userId
router.get('/badges/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId !== req.user.id && !operationsRoles.includes(req.user.role))
      return res.status(403).json({ message: 'You can only read your own badges' });
    const userBadges = await prisma.userBadge.findMany({
      where: { userId },
      include: { badge: true },
    });
    res.json(userBadges);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/gamification/award/:userId
router.post('/award/:userId', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { userId } = req.params;
    const { points, reason } = req.body;
    if (!Number.isInteger(points) || points <= 0)
      return res.status(400).json({ message: 'Points must be a positive integer' });

    const user = await prisma.user.update({
      where: { id: userId },
      data: { points: { increment: points } },
    });

    res.json({
      message: `Successfully awarded ${points} points to user ${userId}`,
      reason,
      newTotal: user.points,
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/gamification/rewards
router.get('/rewards', auth, async (req, res) => {
  try {
    const rewards = await prisma.rewardItem.findMany();
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/gamification/redeem
router.post(
  '/redeem',
  auth,
  route(async (req, res) => {
    await transaction(prisma, async (tx) => {
      const reward = await tx.rewardItem.findUnique({ where: { id: req.body.rewardId } });
      if (!reward) throw httpError(404, 'Reward not found');
      if (reward.quantityAvailable <= 0) throw httpError(409, 'Reward is out of stock');
      const debit = await tx.user.updateMany({
        where: { id: req.user.id, points: { gte: reward.pointsCost } },
        data: { points: { decrement: reward.pointsCost } },
      });
      if (!debit.count) throw httpError(409, 'Insufficient points');
      const stock = await tx.rewardItem.updateMany({
        where: { id: reward.id, quantityAvailable: { gt: 0 } },
        data: { quantityAvailable: { decrement: 1 } },
      });
      if (!stock.count) throw httpError(409, 'Reward is out of stock');
      await tx.redemption.create({ data: { userId: req.user.id, rewardId: reward.id } });
    });
    res.json({ message: 'Reward redeemed successfully' });
  })
);

module.exports = router;
