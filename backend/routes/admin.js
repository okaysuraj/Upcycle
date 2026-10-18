// Restrict account management and platform moderation to administrators.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/admin/system-health
router.get('/system-health', auth, requireRole(['PLATFORM_ADMIN', 'ADMIN']), async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    const campusCount = await prisma.campus.count();
    const errorLogs = await prisma.auditLog.count({ where: { action: 'ERROR' } });

    res.json({
      status: 'OK',
      uptime: process.uptime(),
      stats: { userCount, campusCount, errorLogs },
      timestamp: new Date(),
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/admin/audit-logs
router.get('/audit-logs', auth, requireRole(['PLATFORM_ADMIN', 'ADMIN']), async (req, res) => {
  try {
    const logs = await prisma.auditLog.findMany({
      orderBy: { timestamp: 'desc' },
      take: 50,
      include: { user: { select: { name: true, role: true } } },
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/admin/moderation-queue
router.get(
  '/moderation-queue',
  auth,
  requireRole(['PLATFORM_ADMIN', 'ADMIN']),
  async (req, res) => {
    try {
      const queue = await prisma.contentModeration.findMany({
        where: { status: 'PENDING' },
        include: {
          post: true,
          reportedBy: { select: { name: true } },
        },
      });
      res.json(queue);
    } catch (err) {
      res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
    }
  }
);

// PUT /api/admin/moderation/:id
router.put('/moderation/:id', auth, requireRole(['PLATFORM_ADMIN', 'ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;
    const { status, action } = req.body; // status: RESOLVED, action: DELETE_POST / IGNORE

    const mod = await prisma.contentModeration.update({
      where: { id },
      data: { status },
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
        details: { status, action },
      },
    });

    res.json({ message: 'Moderation action taken' });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/admin/feature-flags
router.get('/feature-flags', auth, requireRole(['PLATFORM_ADMIN', 'ADMIN']), async (req, res) => {
  try {
    const flags = await prisma.featureFlag.findMany();
    res.json(flags);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/admin/feature-flags/:name
router.put(
  '/feature-flags/:name',
  auth,
  requireRole(['PLATFORM_ADMIN', 'ADMIN']),
  async (req, res) => {
    try {
      const { name } = req.params;
      const { isEnabled } = req.body;
      const flag = await prisma.featureFlag.upsert({
        where: { name },
        update: { isEnabled },
        create: { name, isEnabled },
      });
      res.json(flag);
    } catch (err) {
      res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
    }
  }
);

// GET /api/admin/users
router.get('/users', auth, requireRole(['PLATFORM_ADMIN', 'ADMIN']), async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        kycStatus: true,
        points: true,
        createdAt: true,
        campus: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/admin/users/:id/role
router.put('/users/:id/role', auth, requireRole(['PLATFORM_ADMIN', 'ADMIN']), async (req, res) => {
  try {
    const { id } = req.params;
    const { role, isActive, kycStatus } = req.body;
    if (kycStatus !== undefined)
      return res
        .status(400)
        .json({ message: 'Review submitted documents through vendor verification' });
    if (
      role !== undefined &&
      ![
        'STUDENT',
        'CAMPUS_ADMIN',
        'WASTE_STAFF',
        'VENDOR',
        'CONSULTANT',
        'EVENT_ORGANIZER',
        'PLATFORM_ADMIN',
        'VOLUNTEER',
        'ADMIN',
        'STAFF',
      ].includes(role)
    )
      return res.status(400).json({ message: 'Invalid role' });
    const updated = await prisma.user.update({
      where: { id },
      data: {
        role: role || undefined,
        isActive: typeof isActive === 'boolean' ? isActive : undefined,
      },
      select: { id: true, name: true, email: true, role: true, isActive: true, kycStatus: true },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
