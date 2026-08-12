const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
require('../config/firebaseAdmin'); // Ensure it's initialized
const { getAuth } = require('firebase-admin/auth');

const log = (msg) => {
  console.log(`${new Date().toISOString()} - ${msg}`);
};

// Middleware: authenticate Firebase ID Token
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    log('[AUTH] No token provided');
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    log('[AUTH] Verifying Firebase token...');
    const decodedToken = await getAuth().verifyIdToken(token);
    log(`[AUTH] Token verified for: ${decodedToken.email} | email_verified: ${decodedToken.email_verified}`);
    
    // Look up the Postgres user to attach the ID and role
    const user = await prisma.user.findUnique({ where: { email: decodedToken.email } });
    log(`[AUTH] Postgres user lookup: ${user ? `found (id: ${user.id})` : 'not found'}`);
    
    req.user = { 
      firebaseUid: decodedToken.uid, 
      email: decodedToken.email,
      email_verified: decodedToken.email_verified,
      id: user ? user.id : null,
      role: user ? user.role : null
    };
    next();
  } catch (error) {
    log(`[AUTH] Firebase token verification FAILED: ${error.code || error.message}`);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// POST /api/auth/register
// Called by the frontend after Firebase user is created
router.post('/register', auth, async (req, res) => {
  try {
    const { name, skills, availabilityHours, role: requestedRole } = req.body;
    
    // We get the email and firebaseUid from the verified token in `req.user`
    const { email, firebaseUid } = req.user;
    
    const allowedRegistrationRoles = ['VOLUNTEER', 'VENDOR', 'STUDENT'];
    const role = allowedRegistrationRoles.includes(requestedRole) ? requestedRole : 'VOLUNTEER';
    
    log(`[REGISTER] Attempting to create user: ${JSON.stringify({ name, email, role, firebaseUid })}`);
    
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      log('[REGISTER] User already exists in DB, skipping creation');
      return res.status(400).json({ message: 'User already exists in database' });
    }

    const user = await prisma.user.create({
      data: {
        name: name || email.split('@')[0],
        email,
        password: '', // Password is managed by Firebase now
        role: role || 'VOLUNTEER',
        skills: skills || [],
        availabilityHours: availabilityHours || 10,
        activeTasks: 0,
        isVerified: req.user.email_verified || false,
      }
    });

    log(`[REGISTER] ✅ User created successfully: ${user.id}`);
    res.status(201).json({ message: 'Profile created successfully', user });
  } catch (err) {
    log(`[REGISTER] ❌ Error creating user: ${err.message} \nStack: ${err.stack}`);
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
