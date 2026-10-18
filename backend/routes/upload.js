// Validate file uploads and save them to the configured storage provider.
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { uploadToCloudinary, generateUploadSignature } = require('../config/cloudinary');
const { storageStatus } = require('../utils/storageStatus');
router.use(auth);
router.use(async (req, res, next) => {
  const status = await storageStatus();
  if (!status.available) return res.status(503).json({ message: status.reason });
  next();
});

// Configure multer for memory storage (files stay in buffer, not written to disk)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, WebP, GIF, and PDF files are allowed.'));
    }
  },
});

// POST /api/upload/profile-pic
// Upload a single profile picture
router.post('/profile-pic', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const result = await uploadToCloudinary(req.file.buffer, {
      folder: 'upcycle/profiles',
      transformation: 'c_fill,w_400,h_400,g_face',
    });

    res.json({
      url: result.url,
      publicId: result.publicId,
      message: 'Profile picture uploaded successfully',
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/upload/listing-images
// Upload multiple images for a marketplace listing (max 5)
router.post('/listing-images', upload.array('images', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No image files provided' });
    }

    const uploadPromises = req.files.map((file) =>
      uploadToCloudinary(file.buffer, {
        folder: 'upcycle/marketplace',
      })
    );

    const results = await Promise.all(uploadPromises);
    const urls = results.map((r) => r.url);

    res.json({
      urls,
      message: `${urls.length} image(s) uploaded successfully`,
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/upload/post-image
// Upload a single image for a community post
router.post('/post-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const result = await uploadToCloudinary(req.file.buffer, {
      folder: 'upcycle/posts',
    });

    res.json({
      url: result.url,
      publicId: result.publicId,
      message: 'Post image uploaded successfully',
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/upload/kyc-documents
// Upload KYC verification documents (max 3)
router.post(
  '/kyc-documents',
  requireRole(['VENDOR']),
  upload.array('documents', 3),
  async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No document files provided' });
      }

      const uploadPromises = req.files.map((file) =>
        uploadToCloudinary(file.buffer, {
          folder: 'upcycle/kyc',
          resource_type: 'auto',
        })
      );

      const results = await Promise.all(uploadPromises);
      const urls = results.map((r) => r.url);

      res.json({
        urls,
        message: `${urls.length} document(s) uploaded successfully`,
      });
    } catch (err) {
      res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
    }
  }
);

// POST /api/upload/waste-photo
// Upload a waste log photo proof
router.post('/waste-photo', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const result = await uploadToCloudinary(req.file.buffer, {
      folder: 'upcycle/waste-logs',
    });

    res.json({
      url: result.url,
      publicId: result.publicId,
      message: 'Waste photo uploaded successfully',
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/upload/event-cover
// Upload an event cover image
router.post('/event-cover', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const result = await uploadToCloudinary(req.file.buffer, {
      folder: 'upcycle/events',
      transformation: 'c_fill,w_1200,h_630',
    });

    res.json({
      url: result.url,
      publicId: result.publicId,
      message: 'Event cover image uploaded successfully',
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

const ALLOWED_UPLOAD_FOLDERS = [
  'upcycle/general',
  'upcycle/profiles',
  'upcycle/marketplace',
  'upcycle/posts',
  'upcycle/kyc',
  'upcycle/waste-logs',
  'upcycle/events',
];

// GET /api/upload/signature
// Generate a signed upload signature for client-side direct uploads
router.get('/signature', async (req, res) => {
  try {
    const folder = req.query.folder || 'upcycle/general';
    if (!ALLOWED_UPLOAD_FOLDERS.includes(folder)) {
      return res.status(400).json({ message: 'Invalid or unauthorized upload destination folder' });
    }
    const signatureData = generateUploadSignature({
      folder,
    });
    res.json(signatureData);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
