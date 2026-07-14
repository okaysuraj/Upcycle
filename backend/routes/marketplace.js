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
    const { title, description, price, category, campusId, isService } = req.body;
    
    // Only VENDORs or ADMINs should ideally list, but we'll allow for the prototype
    const listing = await prisma.marketplaceListing.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        category,
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

    // In a real application, this would integrate with Stripe/Payments.
    // For now, we'll mark the item as SOLD if it's a product, or leave ACTIVE if a service.
    
    if (!listing.isService) {
      await prisma.marketplaceListing.update({
        where: { id },
        data: { status: 'SOLD' }
      });
    }

    res.json({ message: 'Purchase successful!', listingId: id, pricePaid: listing.price });
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

    res.json({
      totalListings,
      totalValue,
      successfulExchanges,
      activeVendorsCount: 42 // Mock active vendors count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
