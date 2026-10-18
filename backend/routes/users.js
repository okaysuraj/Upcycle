// Manage profiles, preferences, and vendor verification submissions.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { publicUser, publicMetadata } = require('../utils/publicUser');

// PUT /api/users/profile
// Update demographics and privacy settings
router.put('/profile', auth, async (req, res) => {
  try {
    if (['role', 'isActive', 'points', 'isVerified', 'kycStatus'].some((key) => key in req.body))
      return res
        .status(403)
        .json({
          message: 'This field must be changed by an administrator or the dedicated account action',
        });
    const { name, skills, availabilityHours, privacySettings, roleMetadata, profilePicUrl } =
      req.body;
    if (name !== undefined && (typeof name !== 'string' || !name.trim()))
      return res.status(400).json({ message: 'Name is required' });
    if (
      skills !== undefined &&
      (!Array.isArray(skills) || skills.some((skill) => typeof skill !== 'string'))
    )
      return res.status(400).json({ message: 'Skills must be a list' });
    if (
      availabilityHours !== undefined &&
      (!Number.isInteger(availabilityHours) || availabilityHours < 0)
    )
      return res.status(400).json({ message: 'Available hours must be a nonnegative integer' });
    if (
      profilePicUrl !== undefined &&
      profilePicUrl !== null &&
      (typeof profilePicUrl !== 'string' ||
        !process.env.CLOUDINARY_CLOUD_NAME ||
        !profilePicUrl.startsWith(
          `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`
        ))
    )
      return res.status(400).json({ message: 'Upload a profile image before saving it' });

    if (roleMetadata && ('rbacMatrix' in roleMetadata || 'platformSettings' in roleMetadata))
      return res
        .status(400)
        .json({
          message:
            'Global access and security policies cannot be changed through a personal profile',
        });
    const existing = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!existing) return res.status(404).json({ message: 'Account not found' });
    const metadata = { ...existing.roleMetadata };
    for (const [key, value] of Object.entries(publicMetadata(roleMetadata))) {
      metadata[key] =
        value && typeof value === 'object' && !Array.isArray(value)
          ? { ...(metadata[key] || {}), ...value }
          : value;
    }
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name }),
        ...(skills && { skills }),
        ...(availabilityHours !== undefined && { availabilityHours }),
        ...(privacySettings && {
          privacySettings: { ...existing.privacySettings, ...privacySettings },
        }),
        ...(roleMetadata && { roleMetadata: metadata }),
        ...(profilePicUrl !== undefined && { profilePicUrl }),
      },
    });

    res.json(publicUser(user));
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/users/kyc
// Submit KYC verification documents
router.post('/kyc', auth, requireRole(['VENDOR']), async (req, res) => {
  try {
    const { documentsUrl } = req.body;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return res.status(503).json({ message: 'Document storage is not configured' });
    const prefix = `https://res.cloudinary.com/${cloudName}/`;
    if (
      !Array.isArray(documentsUrl) ||
      documentsUrl.length < 1 ||
      documentsUrl.length > 3 ||
      documentsUrl.some((url) => typeof url !== 'string' || !url.startsWith(prefix))
    ) {
      return res.status(400).json({ message: 'Upload one to three documents before submitting' });
    }
    await prisma.$transaction(async (tx) => {
      await tx.user.update({ where: { id: req.user.id }, data: { kycStatus: 'PENDING' } });
      await tx.vendorVerification.create({
        data: { vendorId: req.user.id, documentsUrl, status: 'PENDING' },
      });
    });
    res.json({ message: 'Documents submitted for review', kycStatus: 'PENDING' });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
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
      },
    });

    res.json({ message: 'Account deactivated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
