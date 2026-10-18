// Serve published policies and FAQs; administrators manage drafts.
const router = require('express').Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { requireRole } = require('../middleware/rbac');
const { adminRoles, route, httpError } = require('../utils/http');
const kinds = ['TERMS', 'PRIVACY', 'FAQ'];
function kind(query) {
  if (!kinds.includes(query)) throw httpError(400, 'Select a valid document type');
  return query;
}
function input(body, create = false) {
  const data = {};
  for (const key of ['title', 'body', 'version'])
    if (body[key] !== undefined) {
      if (typeof body[key] !== 'string' || !body[key].trim())
        throw httpError(400, `${key} is required`);
      data[key] = body[key].trim();
    }
  if (create && ['title', 'body', 'version'].some((key) => !data[key]))
    throw httpError(400, 'Title, text and version are required');
  if (body.isPublished !== undefined) {
    if (typeof body.isPublished !== 'boolean') throw httpError(400, 'Published must be a boolean');
    data.isPublished = body.isPublished;
  }
  return data;
}
router.get(
  '/public',
  route(async (req, res) =>
    res.json(
      await prisma.contentDocument.findMany({
        where: { kind: kind(req.query.kind), isPublished: true },
        orderBy: { updatedAt: 'desc' },
      })
    )
  )
);
router.get(
  '/',
  auth,
  route(async (req, res) =>
    res.json(
      await prisma.contentDocument.findMany({
        where: {
          kind: kind(req.query.kind),
          ...(adminRoles.includes(req.user.role) ? {} : { isPublished: true }),
        },
        orderBy: { updatedAt: 'desc' },
      })
    )
  )
);
router.post(
  '/',
  auth,
  requireRole(adminRoles),
  route(async (req, res) =>
    res
      .status(201)
      .json(
        await prisma.contentDocument.create({
          data: { ...input(req.body, true), kind: kind(req.body.kind), createdById: req.user.id },
        })
      )
  )
);
router.put(
  '/:id',
  auth,
  requireRole(adminRoles),
  route(async (req, res) =>
    res.json(
      await prisma.contentDocument.update({ where: { id: req.params.id }, data: input(req.body) })
    )
  )
);
router.delete(
  '/:id',
  auth,
  requireRole(adminRoles),
  route(async (req, res) => {
    await prisma.contentDocument.delete({ where: { id: req.params.id } });
    res.status(204).end();
  })
);
module.exports = router;
