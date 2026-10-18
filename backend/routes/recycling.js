// Compatibility endpoints backed by the same WasteLog ledger as the web/mobile apps.
const router = require('express').Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { route, httpError, positiveNumber, operationsRoles } = require('../utils/http');
router.get(
  '/stats',
  auth,
  route(async (req, res) => {
    const summarize = async (where) =>
      (await prisma.wasteLog.groupBy({ by: ['category'], where, _sum: { quantityKg: true } })).map(
        (row) => ({ materialType: row.category, total_quantity: row._sum.quantityKg, unit: 'kg' })
      );
    const [global, user] = await Promise.all([summarize({}), summarize({ userId: req.user.id })]);
    res.json({ global, user });
  })
);
router.get(
  '/logs',
  auth,
  route(async (req, res) => {
    const logs = await prisma.wasteLog.findMany({
      where: operationsRoles.includes(req.user.role) ? {} : { userId: req.user.id },
      include: { user: { select: { name: true } } },
      orderBy: { date: 'desc' },
    });
    res.json(
      logs.map(({ user, ...log }) => ({
        ...log,
        userName: user.name,
        materialType: log.category,
        quantity: log.quantityKg,
        unit: 'kg',
      }))
    );
  })
);
router.post(
  '/log',
  auth,
  route(async (req, res) => {
    const campusId = req.body.campusId || req.user.campusId;
    if (!campusId) throw httpError(400, 'Select a campus');
    if (req.body.unit && req.body.unit !== 'kg') throw httpError(400, 'Record the weight in kg');
    const category = String(req.body.materialType || '').toUpperCase();
    if (
      ![
        'PLASTIC',
        'PAPER',
        'GLASS',
        'METAL',
        'ORGANIC',
        'E_WASTE',
        'GENERAL',
        'HAZARDOUS',
      ].includes(category)
    )
      throw httpError(400, 'Invalid material category');
    res
      .status(201)
      .json(
        await prisma.wasteLog.create({
          data: {
            campusId,
            userId: req.user.id,
            category,
            quantityKg: positiveNumber(req.body.quantity),
          },
        })
      );
  })
);
module.exports = router;
