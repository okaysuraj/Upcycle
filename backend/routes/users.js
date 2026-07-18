const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// PUT /api/users/profile
// Update demographics and privacy settings
router.put('/profile', auth, async (req, res) => {
  try {
    const { name, skills, availabilityHours, privacySettings, roleMetadata } = req.body;
    
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name }),
        ...(skills && { skills }),
        ...(availabilityHours !== undefined && { availabilityHours }),
        ...(privacySettings && { privacySettings }),
        ...(roleMetadata && { roleMetadata })
      }
    });

    const { password, ...userData } = user;
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/users/kyc
// Submit KYC verification documents
router.post('/kyc', auth, async (req, res) => {
  try {
    const { documentsUrl } = req.body;
    
    if (!documentsUrl || !documentsUrl.length) {
      return res.status(400).json({ message: 'Missing document URLs' });
    }

    // Update user kyc status to PENDING
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { kycStatus: 'PENDING' }
    });

    // If vendor, also create a vendor verification entry
    if (user.role === 'VENDOR') {
      await prisma.vendorVerification.create({
        data: {
          vendorId: user.id,
          documentsUrl: documentsUrl,
          status: 'PENDING'
        }
      });
    }

    res.json({ message: 'KYC documents submitted successfully', kycStatus: user.kycStatus });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/users/deactivate
// Soft delete user account
router.delete('/deactivate', auth, async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { 
        isActive: false,
        // Optionally scramble personal data
        // name: "Deactivated User",
        // email: `deactivated_${req.user.id}@upcycle.local`
      }
    });
    
    res.json({ message: 'Account deactivated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
