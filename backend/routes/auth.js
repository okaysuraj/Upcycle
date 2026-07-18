const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const admin = require('../config/firebaseAdmin');

// Middleware: authenticate Firebase ID Token
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Look up the Postgres user to attach the ID and role
    const user = await prisma.user.findUnique({ where: { email: decodedToken.email } });
    
    req.user = { 
      firebaseUid: decodedToken.uid, 
      email: decodedToken.email,
      email_verified: decodedToken.email_verified,
      id: user ? user.id : null,
      role: user ? user.role : null
    };
    next();
  } catch (error) {
    console.error('Firebase token verification failed:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// POST /api/auth/register
// Called by the frontend after Firebase user is created
router.post('/register', auth, async (req, res) => {
  try {
    const { name, role, skills, availabilityHours } = req.body;
    
    // We get the email and firebaseUid from the verified token in `req.user`
    const { email, firebaseUid } = req.user;
    
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ message: 'User already exists in database' });

    const user = await prisma.user.create({
      data: {
        name: name || email.split('@')[0],
        email,
        password: '', // Password is managed by Firebase now
        role: role || 'VOLUNTEER',
        skills: skills || [],
        availabilityHours: availabilityHours || 10,
        activeTasks: 0,
        isVerified: req.user.email_verified || false, // Should be false initially for email-link verification
      }
    });

    res.status(201).json({ message: 'Profile created successfully', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me
// Called by the frontend on app load to sync Postgres user state
router.get('/me', auth, async (req, res) => {
  try {
    // We find by email because firebaseUid wasn't explicitly added to the schema in previous steps,
    // though adding firebaseUid to schema would be safer.
    const user = await prisma.user.findUnique({ where: { email: req.user.email } });
    
    if (!user) {
      return res.status(404).json({ message: 'User profile not found in database' });
    }

    // Sync verification status if they verified via Firebase recently
    if (req.user.email_verified && !user.isVerified) {
      await prisma.user.update({
        where: { email: req.user.email },
        data: { isVerified: true }
      });
      user.isVerified = true;
    }

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
