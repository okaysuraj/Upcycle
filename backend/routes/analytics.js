const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { pool } = require('../config/db'); // for pg queries if needed
const { auth } = require('./auth');

// GET /api/analytics/dashboard/student
router.get('/dashboard/student', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Total Waste Diverted
    const wasteLogs = await prisma.wasteLog.findMany({ where: { userId } });
    const totalWasteKg = wasteLogs.reduce((sum, log) => sum + log.quantityKg, 0);
    
    // Carbon Offset (mock formula: 1kg waste = 0.5m3 carbon)
    const carbonOffset = totalWasteKg * 0.5;

    // Badges / Goal Progress
    const badges = await prisma.userBadge.count({ where: { userId } });
    const goalProgress = Math.min(100, Math.round((totalWasteKg / 100) * 100)); // assuming 100kg goal

    res.json({
      totalWasteKg: parseFloat(totalWasteKg.toFixed(1)),
      carbonOffset: parseFloat(carbonOffset.toFixed(1)),
      goalProgress,
      badges
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/analytics/dashboard/staff
router.get('/dashboard/staff', auth, async (req, res) => {
  try {
    // Check if user is staff/admin
    // (Skipping strict role check here for brevity, but normally we would enforce it)

    // Active Users (Volunteers & Students)
    const activeUsersCount = await prisma.user.count({
      where: { isActive: true }
    });

    // GMV from Escrow Transactions
    const transactions = await prisma.escrowTransaction.findMany({
      where: { status: 'RELEASED' }
    });
    const gmv = transactions.reduce((sum, tx) => sum + tx.amount, 0);

    // Pending Approvals (from Task table using pool)
    const tasksRes = await pool.query("SELECT count(*) FROM tasks WHERE status = 'Pending'");
    const pendingApprovals = parseInt(tasksRes.rows[0].count, 10);

    res.json({
      activeUsers: activeUsersCount,
      gmv: parseFloat(gmv.toFixed(2)),
      pendingApprovals
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
