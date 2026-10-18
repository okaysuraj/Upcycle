// Calculate dashboard summaries from stored application records.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { operationsRoles, route } = require('../utils/http');

router.get(
  '/dashboard/student',
  auth,
  route(async (req, res) => {
    const [waste, badges, account, leaderboard] = await Promise.all([
      prisma.wasteLog.aggregate({ where: { userId: req.user.id }, _sum: { quantityKg: true } }),
      prisma.userBadge.count({ where: { userId: req.user.id } }),
      prisma.user.findUnique({ where: { id: req.user.id }, select: { points: true } }),
      prisma.user.findMany({
        where: { isActive: true },
        select: { id: true, points: true, privacySettings: true },
        orderBy: [{ points: 'desc' }, { id: 'asc' }],
      }),
    ]);
    const visible = leaderboard.filter((user) => user.privacySettings?.shareImpact !== false);
    const index = visible.findIndex((user) => user.id === req.user.id);
    const totalWasteKg = waste._sum.quantityKg ?? 0;
    res.json({
      totalWasteKg,
      estimatedCarbonOffsetKg: totalWasteKg * 0.5,
      points: account.points,
      rank: index < 0 ? null : index + 1,
      badges,
    });
  })
);

router.get(
  '/dashboard/staff',
  auth,
  requireRole(operationsRoles),
  route(async (req, res) => {
    const [activeUsers, pendingApprovals] = await Promise.all([
      prisma.user.count({ where: { isActive: true } }),
      prisma.task.count({ where: { status: 'Pending' } }),
    ]);
    res.json({ activeUsers, pendingApprovals });
  })
);

router.get(
  '/insights',
  auth,
  requireRole(operationsRoles),
  route(async (req, res) => {
    const [criticalBins, totalBins] = await Promise.all([
      prisma.smartBin.findMany({
        where: { fillLevel: { gte: 70 } },
        select: { id: true, location: true, fillLevel: true },
        orderBy: { fillLevel: 'desc' },
        take: 20,
      }),
      prisma.smartBin.count(),
    ]);
    const insights = criticalBins.map((bin) => ({
      id: bin.id,
      title: `Check bin at ${bin.location}`,
      category: 'WASTE_COLLECTION',
      impact: bin.fillLevel >= 90 ? 'URGENT' : 'REVIEW',
      desc: `Recorded fill level is ${Math.round(bin.fillLevel)}%. Verify the sensor reading and schedule collection if needed.`,
      fillLevel: bin.fillLevel,
    }));
    res.json({
      totalBins,
      binsAboveThreshold: criticalBins.length,
      insights,
      recommendations: insights,
    });
  })
);

module.exports = router;
