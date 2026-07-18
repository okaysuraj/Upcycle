const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/admin/system-health
router.get('/system-health', auth, async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    const campusCount = await prisma.campus.count();
    const errorLogs = await prisma.auditLog.count({ where: { action: 'ERROR' } });
    
    res.json({
      status: 'OK',
      uptime: process.uptime(),
      stats: { userCount, campusCount, errorLogs },
      timestamp: new Date()
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/admin/audit-logs
router.get('/audit-logs', auth, async (req, res) => {
  try {
    const logs = await prisma.auditLog.findMany({
      orderBy: { timestamp: 'desc' },
      take: 50,
      include: { user: { select: { name: true, role: true } } }
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/admin/moderation-queue
router.get('/moderation-queue', auth, async (req, res) => {
  try {
    const queue = await prisma.contentModeration.findMany({
      where: { status: 'PENDING' },
      include: {
        post: true,
        reportedBy: { select: { name: true } }
      }
    });
    res.json(queue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/admin/moderation/:id
router.put('/moderation/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, action } = req.body; // status: RESOLVED, action: DELETE_POST / IGNORE

    const mod = await prisma.contentModeration.update({
      where: { id },
      data: { status }
    });

    if (action === 'DELETE_POST' && mod.postId) {
      await prisma.post.delete({ where: { id: mod.postId } });
    }

    // Log action
    await prisma.auditLog.create({
      data: {
        userId: req.user.id,
        action: 'MODERATION_RESOLVED',
        entity: 'ContentModeration',
        entityId: id,
        details: { status, action }
      }
    });

    res.json({ message: 'Moderation action taken' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/admin/feature-flags
router.get('/feature-flags', auth, async (req, res) => {
  try {
    const flags = await prisma.featureFlag.findMany();
    res.json(flags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/admin/feature-flags/:name
router.put('/feature-flags/:name', auth, async (req, res) => {
  try {
    const { name } = req.params;
    const { isEnabled } = req.body;
    const flag = await prisma.featureFlag.upsert({
      where: { name },
      update: { isEnabled },
      create: { name, isEnabled }
    });
    res.json(flag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
