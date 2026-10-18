// Read and update notifications belonging to the current account.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/notifications
router.get('/', auth, async (req, res) => {
  try {
    const where = {};
    if (
      req.query.scope === 'all' &&
      (req.user.role === 'ADMIN' || req.user.role === 'STAFF' || req.user.role === 'PLATFORM_ADMIN')
    ) {
      // Return platform-wide telemetry & notifications
    } else if (req.user.id) {
      where.userId = req.user.id;
    }
    const notifications = await prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/notifications/unread-count
router.get('/unread-count', auth, async (req, res) => {
  try {
    const count = await prisma.notification.count({
      where: { userId: req.user.id, read: false },
    });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/notifications/:id/read
router.put('/:id/read', auth, async (req, res) => {
  try {
    const notification = await prisma.notification.update({
      where: { id: req.params.id, userId: req.user.id },
      data: { read: true },
    });
    res.json(notification);
  } catch (err) {
    if (err.code === 'P2025') {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/notifications/mark-all-read
router.put('/mark-all-read', auth, async (req, res) => {
  try {
    await prisma.notification.updateMany({
      where: { userId: req.user.id, read: false },
      data: { read: true },
    });
    res.json({ message: 'All notifications marked as read' });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/notifications
router.post('/', auth, requireRole(adminRoles), async (req, res) => {
  try {
    const { type, message, userId, taskId, broadcast, audience } = req.body;

    if (typeof message !== 'string' || !message.trim())
      return res.status(400).json({ message: 'Notification message is required' });
    const audiences = {
      ALL: null,
      ALL_TENANTS: null,
      STAFF: ['STAFF', 'WASTE_STAFF', 'CAMPUS_ADMIN'],
      FACILITY_MANAGERS: ['STAFF', 'WASTE_STAFF', 'CAMPUS_ADMIN'],
      STUDENT: ['STUDENT', 'VOLUNTEER'],
      VOLUNTEER_CORPS: ['STUDENT', 'VOLUNTEER'],
      LOGISTICS_CARRIERS: ['VENDOR'],
    };
    if (audience && !Object.hasOwn(audiences, audience))
      return res.status(400).json({ message: 'Unknown notification audience' });
    const roles = audiences[audience || 'ALL'];
    if (broadcast || !userId) {
      // Find recipient users
      const users = await prisma.user.findMany({
        where: { isActive: true, ...(roles ? { role: { in: roles } } : {}) },
        select: { id: true },
      });

      if (users.length > 0) {
        await prisma.notification.createMany({
          data: users.map((u) => ({
            type: type || 'SYSTEM_ALERT',
            message: message,
            userId: u.id,
            taskId: taskId || null,
            read: false,
          })),
        });
      }

      return res.status(201).json({
        message: `Notification broadcast dispatched to ${users.length} users`,
        recipientsCount: users.length,
      });
    }

    const notification = await prisma.notification.create({
      data: {
        type: type || 'ALERT',
        message,
        userId,
        taskId: taskId || null,
        read: false,
      },
    });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
