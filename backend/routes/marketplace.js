// Manage listings, procurement requests, quotes, and vendor reviews.
const express = require('express');
const router = express.Router();
const { operationsRoles, adminRoles } = require('../utils/http');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');

// GET /api/marketplace
router.get('/', auth, async (req, res) => {
  try {
    const listings = await prisma.marketplaceListing.findMany({
      where: { status: 'ACTIVE' },
      include: {
        vendor: { select: { name: true, role: true } },
        campus: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/marketplace
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, price, category, campusId, isService, serviceType, images } =
      req.body;
    if (typeof price !== 'number' || !Number.isFinite(price) || price < 0)
      return res.status(400).json({ message: 'Enter a valid nonnegative price' });

    const listing = await prisma.marketplaceListing.create({
      data: {
        title,
        description,
        price,
        category,
        serviceType: serviceType || 'MATERIAL_DONATION',
        isService: isService || false,
        images: images || [],
        vendorId: req.user.id,
        campusId: campusId || null,
        status: 'ACTIVE',
      },
    });
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/marketplace/:id/buy
router.post('/:id/buy', auth, (req, res) =>
  res
    .status(501)
    .json({
      message: 'Payments and escrow are not configured. No funds have been collected or released.',
    })
);

// GET /api/marketplace/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const totalListings = await prisma.marketplaceListing.count({ where: { status: 'ACTIVE' } });

    const valueQuery = await prisma.marketplaceListing.aggregate({
      where: { status: 'ACTIVE' },
      _sum: { price: true },
    });
    const totalValue = valueQuery._sum.price || 0;

    const successfulExchanges = await prisma.marketplaceListing.count({
      where: { status: 'SOLD' },
    });

    // Count distinct vendors who have an active listing
    const vendors = await prisma.marketplaceListing.groupBy({
      by: ['vendorId'],
      where: { status: 'ACTIVE' },
    });

    res.json({
      totalListings,
      totalValue,
      successfulExchanges,
      activeVendorsCount: vendors.length,
    });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/marketplace/rfp
router.get('/rfp', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const rfps = await prisma.rFP.findMany({
      where: campusId ? { campusId } : {},
      include: {
        quotes: {
          where: operationsRoles.includes(req.user.role) ? {} : { vendorId: req.user.id },
          select: { id: true, amount: true, vendorId: true },
        },
        campus: { select: { name: true } },
      },
    });
    res.json(rfps);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/marketplace/rfp
router.post('/rfp', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    const { title, description, requirements, deadline, campusId } = req.body;
    const rfp = await prisma.rFP.create({
      data: {
        title,
        description,
        requirements,
        campusId,
        deadline: new Date(deadline),
      },
    });
    res.json(rfp);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/marketplace/rfp/:id/quote
router.post('/rfp/:id/quote', auth, requireRole(['VENDOR']), async (req, res) => {
  try {
    if (req.user.kycStatus !== 'VERIFIED')
      return res
        .status(403)
        .json({ message: 'Vendor verification is required before submitting quotes' });
    const { id } = req.params;
    const { amount, proposalDetails } = req.body;
    if (
      typeof amount !== 'number' ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      typeof proposalDetails !== 'string' ||
      !proposalDetails.trim()
    )
      return res.status(400).json({ message: 'Enter a positive amount and proposal' });
    const rfp = await prisma.rFP.findUnique({ where: { id } });
    if (!rfp) return res.status(404).json({ message: 'Request not found' });
    if (rfp.status !== 'OPEN' || rfp.deadline <= new Date())
      return res.status(409).json({ message: 'This request is closed for quotes' });
    const quote = await prisma.quote.create({
      data: {
        rfpId: id,
        vendorId: req.user.id,
        amount,
        proposalDetails,
      },
    });
    res.json(quote);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// GET /api/marketplace/quotes
router.get('/quotes', auth, requireRole([...operationsRoles, 'VENDOR']), async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany({
      where: req.user.role === 'VENDOR' ? { vendorId: req.user.id } : {},
      include: {
        vendor: { select: { id: true, name: true, email: true, role: true } },
        rfp: {
          select: {
            id: true,
            title: true,
            requirements: true,
            deadline: true,
            campus: { select: { name: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/marketplace/quotes/:id/award
router.post('/quotes/:id/award', auth, (req, res) =>
  res
    .status(501)
    .json({
      message: 'Payments and escrow are not configured. No funds have been collected or released.',
    })
);

// GET /api/marketplace/escrow
router.get('/escrow', auth, async (req, res) => {
  try {
    const transactions = await prisma.escrowTransaction.findMany({
      where: ['ADMIN', 'PLATFORM_ADMIN'].includes(req.user.role)
        ? {}
        : { OR: [{ buyerId: req.user.id }, { sellerId: req.user.id }] },
      include: {
        buyer: { select: { id: true, name: true, email: true } },
        seller: { select: { id: true, name: true, email: true } },
        listing: { select: { id: true, title: true, category: true, price: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PATCH /api/marketplace/escrow/:id/release
router.patch('/escrow/:id/release', auth, (req, res) =>
  res
    .status(501)
    .json({
      message: 'Payments and escrow are not configured. No funds have been collected or released.',
    })
);

// GET /api/marketplace/moderation
router.get('/moderation', auth, requireRole(adminRoles), async (req, res) => {
  try {
    const listings = await prisma.marketplaceListing.findMany({
      include: {
        vendor: { select: { id: true, name: true, email: true } },
        campus: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PATCH /api/marketplace/listings/:id/status
router.patch('/listings/:id/status', auth, requireRole(adminRoles), async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const listing = await prisma.marketplaceListing.update({
      where: { id },
      data: { status },
    });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

router.get('/vendors', auth, requireRole(operationsRoles), async (req, res) => {
  try {
    res.json(
      await prisma.user.findMany({
        where: { role: 'VENDOR' },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          kycStatus: true,
          isActive: true,
          createdAt: true,
          vendorVerifications: {
            select: { id: true, documentsUrl: true, status: true, createdAt: true },
            orderBy: { createdAt: 'desc' },
          },
        },
      })
    );
  } catch {
    res.status(500).json({ message: 'Could not load vendors' });
  }
});
router.patch('/vendors/:id/verify', auth, requireRole(adminRoles), async (req, res) => {
  const { status } = req.body;
  if (!['VERIFIED', 'REJECTED'].includes(status))
    return res.status(400).json({ message: 'Invalid verification status' });
  try {
    const vendor = await prisma.user.findFirst({ where: { id: req.params.id, role: 'VENDOR' } });
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    const updated = await prisma.$transaction(async (tx) => {
      const pending = await tx.vendorVerification.findFirst({
        where: { vendorId: vendor.id, status: 'PENDING' },
      });
      if (!pending?.documentsUrl?.length)
        throw Object.assign(new Error('There are no pending documents to review'), { status: 409 });
      await tx.vendorVerification.updateMany({
        where: { vendorId: vendor.id, status: 'PENDING' },
        data: { status, reviewedBy: req.user.id },
      });
      return tx.user.update({
        where: { id: vendor.id },
        data: { kycStatus: status },
        select: { id: true, name: true, kycStatus: true },
      });
    });
    res.json(updated);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.status ? error.message : 'Could not update verification' });
  }
});

module.exports = router;
