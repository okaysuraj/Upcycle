const express = require('express');
const router = express.Router();
const { auth } = require('./auth');

// Mock data for courses since there's no DB model
const courses = [
  {
    id: 'c1',
    title: 'Intro to Solar Systems',
    description: 'Learn the basics of photovoltaic design and campus integration strategies.',
    level: 'Beginner',
    rating: 4.8,
    modulesCount: 3,
    icon: 'wb_sunny',
    colorClass: 'text-primary'
  },
  {
    id: 'c2',
    title: 'Advanced Water Management',
    description: 'Techniques for reducing greywater waste in large-scale building facilities.',
    level: 'Intermediate',
    rating: 4.6,
    modulesCount: 5,
    icon: 'water_drop',
    colorClass: 'text-tertiary'
  },
  {
    id: 'c3',
    title: 'Lifecycle Analysis (LCA)',
    description: 'Deep dive into measuring cradle-to-grave carbon footprint for operations.',
    level: 'Advanced',
    rating: 4.9,
    modulesCount: 8,
    icon: 'recycling',
    colorClass: 'text-secondary'
  }
];

// GET /api/education/courses
router.get('/courses', auth, async (req, res) => {
  try {
    // Return mock data for courses
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
