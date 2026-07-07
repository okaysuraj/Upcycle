const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { prisma } = require('../config/db');
const { sendEmail } = require('../utils/email');

// Middleware: authenticate JWT
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, skills, availabilityHours } = req.body;
    
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomBytes(32).toString('hex');
    const verifyExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'VOLUNTEER',
        skills: skills || [],
        availabilityHours: availabilityHours || 10,
        activeTasks: 0,
        isVerified: false,
      }
    });

    // In a real app, you would save verification tokens to DB and send email.
    // For now we'll simulate success since schema doesn't have verification_token anymore
    
    res.status(201).json({ message: 'Registration successful. You can now log in.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    
    const { password: _, ...userData } = user;
    res.json({ token, user: userData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me
router.get('/me', auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const { password, ...userData } = user;
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/volunteers
router.get('/volunteers', auth, async (req, res) => {
  try {
    const volunteers = await prisma.user.findMany({
      where: {
        role: { not: 'PLATFORM_ADMIN' }
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        skills: true,
        availabilityHours: true,
        activeTasks: true
      }
    });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = { router, auth };
