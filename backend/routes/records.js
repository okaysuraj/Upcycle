// Validate and store measured campus energy, water, and emissions data.
const express = require('express');
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { route, httpError, operationsRoles } = require('../utils/http');
const router = express.Router();
const datasets = {
  energy: { model: 'energyUsage', date: 'date', fields: ['kwhUsed', 'percentageRenewable'] },
  water: { model: 'waterUsage', date: 'date', fields: ['gallonsUsed', 'saved'] },
  carbon: { model: 'carbonFootprint', date: 'month', fields: ['totalEmissions', 'reduction'] },
  reports: { model: 'monthlyESGReport', date: 'month' },
};
router.get(
  '/capabilities',
  auth,
  route(async (_req, res) => {
    const storage = await require('../utils/storageStatus').storageStatus();
    res.json([
      {
        id: 'payments',
        name: 'Payments and escrow',
        available: false,
        reason: 'No payment or settlement provider is connected.',
      },
      {
        id: 'mfa',
        name: 'Authenticator MFA',
        available: false,
        reason: 'No enrollment or challenge provider is connected.',
      },
      {
        id: 'certification',
        name: 'Certified ESG reports',
        available: false,
        reason: 'No certification service is connected. Stored records can be exported.',
      },
      {
        id: 'scoring',
        name: 'AI sustainability scoring',
        available: false,
        reason:
          'No scoring model is connected. Collection recommendations use recorded fill levels.',
      },
      { id: 'uploads', name: 'Photo and document storage', ...storage },
      {
        id: 'delivery',
        name: 'External email, SMS and push',
        available: false,
        reason:
          'In-app notifications are stored in the database. External delivery is not configured.',
      },
    ]);
  })
);
router.get(
  '/summary',
  auth,
  route(async (req, res) => {
    const campusWhere = req.user.campusId ? { campusId: req.user.campusId } : {};
    const personal = !operationsRoles.includes(req.user.role) && req.user.role !== 'VENDOR';
    const [waste, energy, water, unreadNotifications, account] = await Promise.all([
      prisma.wasteLog.aggregate({
        where: personal ? { userId: req.user.id } : campusWhere,
        _sum: { quantityKg: true },
      }),
      prisma.energyUsage.aggregate({ where: campusWhere, _sum: { kwhUsed: true } }),
      prisma.waterUsage.aggregate({ where: campusWhere, _sum: { gallonsUsed: true } }),
      prisma.notification.count({ where: { userId: req.user.id, read: false } }),
      prisma.user.findUnique({ where: { id: req.user.id }, select: { points: true } }),
    ]);
    const wasteLoggedKg = waste._sum.quantityKg ?? 0;
    res.json({
      wasteLoggedKg,
      estimatedWasteOffsetKg: wasteLoggedKg * 0.5,
      recordedEnergyKwh: energy._sum.kwhUsed ?? 0,
      recordedWaterGallons: water._sum.gallonsUsed ?? 0,
      points: account.points,
      unreadNotifications,
    });
  })
);
router.get(
  '/comparison',
  auth,
  route(async (_req, res) => {
    const [campuses, waste, energy, water] = await Promise.all([
      prisma.campus.findMany({ select: { id: true, name: true, location: true } }),
      prisma.wasteLog.groupBy({
        by: ['campusId'],
        _sum: { quantityKg: true },
        _count: { _all: true },
      }),
      prisma.energyUsage.groupBy({
        by: ['campusId'],
        _sum: { kwhUsed: true },
        _count: { _all: true },
      }),
      prisma.waterUsage.groupBy({
        by: ['campusId'],
        _sum: { gallonsUsed: true },
        _count: { _all: true },
      }),
    ]);
    const grouped = (rows) => new Map(rows.map((row) => [row.campusId, row]));
    const wasteByCampus = grouped(waste),
      energyByCampus = grouped(energy),
      waterByCampus = grouped(water);
    res.json(
      campuses.map((campus) => ({
        ...campus,
        wasteKg: wasteByCampus.get(campus.id)?._sum.quantityKg ?? null,
        wasteRecords: wasteByCampus.get(campus.id)?._count._all ?? 0,
        energyKwh: energyByCampus.get(campus.id)?._sum.kwhUsed ?? null,
        energyRecords: energyByCampus.get(campus.id)?._count._all ?? 0,
        waterGallons: waterByCampus.get(campus.id)?._sum.gallonsUsed ?? null,
        waterRecords: waterByCampus.get(campus.id)?._count._all ?? 0,
      }))
    );
  })
);
router.get(
  '/search',
  auth,
  route(async (_req, res) => {
    const [buildings, events, listings, groups] = await Promise.all([
      prisma.building.findMany({ select: { id: true, name: true, sector: true } }),
      prisma.event.findMany({ select: { id: true, title: true, description: true } }),
      prisma.marketplaceListing.findMany({
        where: { status: 'ACTIVE' },
        select: { id: true, title: true, description: true },
      }),
      prisma.ecoGroup.findMany({ select: { id: true, name: true, description: true } }),
    ]);
    res.json([
      ...buildings.map((item) => ({
        id: item.id,
        kind: 'Building',
        feature: 'buildings',
        title: item.name,
        description: item.sector,
      })),
      ...events.map((item) => ({ ...item, kind: 'Event', feature: 'events' })),
      ...listings.map((item) => ({ ...item, kind: 'Listing', feature: 'listings' })),
      ...groups.map((item) => ({
        id: item.id,
        kind: 'Organization',
        feature: 'groups',
        title: item.name,
        description: item.description,
      })),
    ]);
  })
);
router.get(
  '/:kind',
  auth,
  route(async (req, res) => {
    const spec = datasets[req.params.kind];
    if (!spec) throw httpError(404, 'Dataset not found');
    if (req.query.campusId && !/^[0-9a-f-]{36}$/i.test(req.query.campusId))
      throw httpError(400, 'Select a valid campus');
    const where = req.query.campusId ? { campusId: req.query.campusId } : {};
    res.json(
      await prisma[spec.model].findMany({
        where,
        include: { campus: { select: { name: true } } },
        orderBy: { [spec.date]: 'desc' },
      })
    );
  })
);
router.post(
  '/:kind',
  auth,
  requireRole(operationsRoles),
  route(async (req, res) => {
    const spec = datasets[req.params.kind];
    if (!spec?.fields) throw httpError(404, 'Writable dataset not found');
    const campusId = req.body.campusId || req.user.campusId;
    if (!campusId || !/^[0-9a-f-]{36}$/i.test(campusId))
      throw httpError(400, 'Select a valid campus');
    if (!(await prisma.campus.findUnique({ where: { id: campusId }, select: { id: true } })))
      throw httpError(404, 'Campus not found');
    const date = new Date(req.body[spec.date]);
    if (Number.isNaN(date.getTime())) throw httpError(400, 'A valid record date is required');
    const data = { campusId, [spec.date]: date };
    for (const key of spec.fields) {
      const value = req.body[key];
      if (
        typeof value !== 'number' ||
        !Number.isFinite(value) ||
        value < 0 ||
        (key === 'percentageRenewable' && value > 100)
      )
        throw httpError(400, `Invalid ${key}`);
      data[key] = value;
    }
    res
      .status(201)
      .json(
        await prisma[spec.model].create({ data, include: { campus: { select: { name: true } } } })
      );
  })
);
module.exports = router;
