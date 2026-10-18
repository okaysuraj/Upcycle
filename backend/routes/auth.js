// Create app profiles and synchronize verified Firebase identities.
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { publicUser } = require('../utils/publicUser');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { operationsRoles } = require('../utils/http');

// POST /api/auth/register
// Called by the frontend after Firebase user is created
router.post('/register', auth, async (req, res) => {
  try {
    const { name, password, skills, availabilityHours, role: requestedRole } = req.body;

    // We get the email and firebaseUid from the verified token in `req.user`
    const { email, firebaseUid } = req.user;

    const allowedRegistrationRoles = ['VOLUNTEER', 'VENDOR', 'STUDENT'];
    if (requestedRole && !allowedRegistrationRoles.includes(requestedRole))
      return res.status(400).json({ message: 'This role must be assigned by an administrator' });
    const role = requestedRole || 'STUDENT';

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res
        .status(200)
        .json({ message: 'Your profile already exists', user: publicUser(existing) });
    }

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : await bcrypt.hash(`firebase_${firebaseUid}`, 10);

    const user = await prisma.user.create({
      data: {
        name: name || email.split('@')[0],
        email,
        password: hashedPassword,
        role: role || 'VOLUNTEER',
        skills: skills || [],
        availabilityHours: availabilityHours ?? 0,
        activeTasks: 0,
        isVerified: req.user.email_verified || false,
      },
    });

    res.status(201).json({ message: 'Profile created successfully', user: publicUser(user) });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/auth/me
// Called by the frontend on app load to sync Postgres user state
router.get('/me', auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { campus: { select: { id: true, name: true } } },
    });

    if (!user) {
      return res.status(404).json({ message: 'User profile not found in database' });
    }

    // Verification comes from the verified Firebase token, without a write on GET.
    res.json(publicUser({ ...user, isVerified: req.user.email_verified ?? user.isVerified }));
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/auth/volunteers
router.get('/volunteers', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const volunteers = await prisma.user.findMany({
      where: {
        isActive: true,
        role: { not: 'PLATFORM_ADMIN' },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        skills: true,
        availabilityHours: true,
        activeTasks: true,
      },
    });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// The previous custom-token and 2FA implementations bypassed authentication.
// Fail closed until a real MFA provider and server-side session enforcement exist.
router.get('/2fa-secret', auth, (req, res) => {
  res
    .status(501)
    .json({
      message:
        'Authenticator setup is not available yet. Your account continues to use verified email and password sign-in.',
    });
});
router.post('/verify-2fa', auth, (req, res) => {
  res
    .status(501)
    .json({ message: 'Two-factor authentication is not configured. No code has been verified.' });
});
router.post('/quick-token', (req, res) => {
  res
    .status(410)
    .json({
      message: 'Email-only sign-in has been removed. Sign in with your email and password.',
    });
});

module.exports = router;
