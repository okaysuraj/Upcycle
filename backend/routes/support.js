// Scope support tickets to their owner or authorized staff.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/support/tickets
router.get('/tickets', auth, async (req, res) => {
  try {
    const isStaffOrAdmin = [
      'ADMIN',
      'PLATFORM_ADMIN',
      'CAMPUS_ADMIN',
      'STAFF',
      'WASTE_STAFF',
    ].includes(req.user.role);
    const where = isStaffOrAdmin ? {} : { userId: req.user.id };

    const tickets = await prisma.supportTicket.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/support/tickets
router.post('/tickets', auth, async (req, res) => {
  try {
    const { subject, category, priority, description } = req.body;
    if (!subject || !description) {
      return res.status(400).json({ message: 'Subject and description are required.' });
    }

    const ticket = await prisma.supportTicket.create({
      data: {
        userId: req.user.id,
        subject,
        category: category || 'GENERAL',
        priority: priority || 'MEDIUM',
        description,
        status: 'OPEN',
      },
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
      },
    });

    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PUT /api/support/tickets/:id
router.put('/tickets/:id', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const { status, priority, assignedTo } = req.body;

    const updated = await prisma.supportTicket.update({
      where: { id },
      data: {
        status,
        priority,
        assignedTo,
      },
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// DELETE /api/support/tickets/:id
router.delete('/tickets/:id', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.supportTicket.delete({ where: { id } });
    res.json({ message: 'Ticket deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
