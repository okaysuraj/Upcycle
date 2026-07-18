const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/marketplace
router.get('/', auth, async (req, res) => {
  try {
    const listings = await prisma.marketplaceListing.findMany({
      where: { status: 'ACTIVE' },
      include: {
        vendor: { select: { name: true, role: true } },
        campus: { select: { name: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/marketplace
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, price, category, campusId, isService, serviceType } = req.body;
    
    const listing = await prisma.marketplaceListing.create({
      data: {
        title,
        description,
        price: parseFloat(price) || 0,
        category,
        serviceType: serviceType || 'MATERIAL_DONATION',
        isService: isService || false,
        vendorId: req.user.id,
        campusId: campusId || null,
        status: 'ACTIVE'
      }
    });
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/marketplace/:id/buy
router.post('/:id/buy', auth, async (req, res) => {
  try {
    const { id } = req.params;
    
    const listing = await prisma.marketplaceListing.findUnique({ where: { id } });
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (listing.status !== 'ACTIVE') return res.status(400).json({ message: 'Listing is no longer active' });

    // Create escrow transaction
    const transaction = await prisma.escrowTransaction.create({
      data: {
        listingId: id,
        buyerId: req.user.id,
        sellerId: listing.vendorId,
        amount: listing.price || 0,
        status: 'HELD'
      }
    });
    
    if (!listing.isService) {
      await prisma.marketplaceListing.update({
        where: { id },
        data: { status: 'SOLD' }
      });
    }

    res.json({ message: 'Purchase successful, funds in escrow!', transaction });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/marketplace/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const totalListings = await prisma.marketplaceListing.count({ where: { status: 'ACTIVE' } });
    
    const valueQuery = await prisma.marketplaceListing.aggregate({
      where: { status: 'ACTIVE' },
      _sum: { price: true }
    });
    const totalValue = valueQuery._sum.price || 0;

    const successfulExchanges = await prisma.marketplaceListing.count({ where: { status: 'SOLD' } });
    
    // Count distinct vendors who have an active listing
    const vendors = await prisma.marketplaceListing.groupBy({
      by: ['vendorId'],
      where: { status: 'ACTIVE' },
    });

    res.json({
      totalListings,
      totalValue,
      successfulExchanges,
      activeVendorsCount: vendors.length
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/marketplace/rfp
router.get('/rfp', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const rfps = await prisma.rFP.findMany({
      where: campusId ? { campusId, status: 'OPEN' } : { status: 'OPEN' },
      include: {
        quotes: { select: { id: true, amount: true, vendorId: true } },
        campus: { select: { name: true } }
      }
    });
    res.json(rfps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/marketplace/rfp
router.post('/rfp', auth, async (req, res) => {
  try {
    const { title, description, requirements, deadline, campusId } = req.body;
    const rfp = await prisma.rFP.create({
      data: {
        title, description, requirements, campusId,
        deadline: new Date(deadline)
      }
    });
    res.json(rfp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/marketplace/rfp/:id/quote
router.post('/rfp/:id/quote', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, proposalDetails } = req.body;
    const quote = await prisma.quote.create({
      data: {
        rfpId: id,
        vendorId: req.user.id,
        amount: parseFloat(amount),
        proposalDetails
      }
    });
    res.json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
