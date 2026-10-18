// Manage plant inventory and recorded harvests.
const router = require('express').Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { route, httpError, positiveNumber, operationsRoles } = require('../utils/http');
router.get(
  '/plants',
  auth,
  route(async (req, res) =>
    res.json(await prisma.plant.findMany({ orderBy: { plantedDate: 'desc' } }))
  )
);
router.post(
  '/plants',
  auth,
  requireRole(operationsRoles),
  route(async (req, res) => {
    const { name, location, plantedDate, status = 'Healthy' } = req.body;
    if (!name?.trim()) throw httpError(400, 'Plant name is required');
    if (plantedDate && Number.isNaN(Date.parse(plantedDate)))
      throw httpError(400, 'Invalid planting date');
    res
      .status(201)
      .json(
        await prisma.plant.create({
          data: { name, location, plantedDate: plantedDate ? new Date(plantedDate) : null, status },
        })
      );
  })
);
router.get(
  '/harvests',
  auth,
  route(async (req, res) => {
    const harvests = await prisma.harvest.findMany({
      include: { plant: { select: { name: true, location: true } } },
      orderBy: { date: 'desc' },
    });
    res.json(
      harvests.map(({ plant, ...harvest }) => ({
        ...harvest,
        plantName: plant.name,
        location: plant.location,
      }))
    );
  })
);
router.post(
  '/plants/:id/harvest',
  auth,
  requireRole(operationsRoles),
  route(async (req, res) => {
    const { unit, date } = req.body;
    if (!unit) throw httpError(400, 'Unit is required');
    if (date && Number.isNaN(Date.parse(date))) throw httpError(400, 'Invalid harvest date');
    res
      .status(201)
      .json(
        await prisma.harvest.create({
          data: {
            plantId: req.params.id,
            quantity: positiveNumber(req.body.quantity),
            unit,
            date: date ? new Date(date) : new Date(),
          },
        })
      );
  })
);
module.exports = router;
