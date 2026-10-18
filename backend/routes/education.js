// Manage courses, lessons, and each user's enrollment progress.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/education/courses
router.get('/courses', auth, async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'asc' },
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/education/courses/:id
router.get('/courses/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findFirst({
      where: {
        ...(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
          ? { id }
          : { code: id }),
      },
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/education/courses
router.post('/courses', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const {
      code,
      title,
      description,
      category,
      durationHrs,
      level,
      rating,
      icon,
      colorClass,
      modules,
    } = req.body;
    const course = await prisma.course.create({
      data: {
        code,
        title,
        description,
        category,
        durationHrs: Number(durationHrs),
        level,
        rating: null,
        icon: icon || 'school',
        colorClass: colorClass || 'text-primary',
        modules: modules || [],
      },
    });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
