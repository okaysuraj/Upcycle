// Manage organizations and feeds with membership checks.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { operationsRoles, httpError, route, transaction } = require('../utils/http');
const groupAccess = async (groupId, userId) => {
  if (!(await prisma.ecoGroup.findUnique({ where: { id: groupId }, select: { id: true } })))
    throw httpError(404, 'Organization not found');
  if (!(await prisma.ecoGroupMember.findFirst({ where: { groupId, userId } })))
    throw httpError(403, 'Join this organization before opening its feed');
};
const readablePost = async (id, userId) => {
  const post = await prisma.post.findUnique({ where: { id }, select: { id: true, groupId: true } });
  if (!post) throw httpError(404, 'Post not found');
  if (post.groupId) await groupAccess(post.groupId, userId);
  return post;
};
const failure = (res, error) =>
  res
    .status(error.status || 500)
    .json({
      message: error.status ? error.message : 'Unable to complete the request. Please try again.',
    });

// GET /api/community/posts
router.get('/posts', auth, async (req, res) => {
  try {
    const { campusId, groupId } = req.query;
    if (groupId) await groupAccess(groupId, req.user.id);
    const posts = await prisma.post.findMany({
      where: {
        ...(campusId ? { campusId } : {}),
        ...(groupId
          ? { groupId }
          : { OR: [{ groupId: null }, { group: { members: { some: { userId: req.user.id } } } }] }),
      },
      include: {
        author: { select: { name: true, role: true } },
        group: { select: { id: true, name: true } },
        comments: {
          include: { author: { select: { name: true } } },
          orderBy: { createdAt: 'asc' },
        },
        _count: { select: { comments: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    res.json(posts);
  } catch (err) {
    failure(res, err);
  }
});

// POST /api/community/posts
router.post('/posts', auth, async (req, res) => {
  try {
    const { content, imageUrl, campusId, groupId } = req.body;
    if (groupId) await groupAccess(groupId, req.user.id);
    const post = await prisma.post.create({
      data: {
        content,
        imageUrl,
        campusId,
        authorId: req.user.id,
        groupId: groupId || null,
      },
      include: { author: { select: { name: true, role: true } } },
    });
    res.json(post);
  } catch (err) {
    failure(res, err);
  }
});

// POST /api/community/posts/:id/comment
router.post('/posts/:id/comment', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await readablePost(id, req.user.id);
    const comment = await prisma.comment.create({
      data: {
        content,
        postId: id,
        authorId: req.user.id,
      },
      include: { author: { select: { name: true } } },
    });
    res.json(comment);
  } catch (err) {
    failure(res, err);
  }
});

// POST /api/community/posts/:id/like
router.post(
  '/posts/:id/like',
  auth,
  route(async (req, res) => {
    const { id } = req.params;
    await readablePost(id, req.user.id);
    const post = await transaction(prisma, async (tx) => {
      const inserted = await tx.postLike.createMany({
        data: [{ postId: id, userId: req.user.id }],
        skipDuplicates: true,
      });
      return inserted.count
        ? tx.post.update({ where: { id }, data: { likes: { increment: 1 } } })
        : tx.post.findUnique({ where: { id } });
    });
    if (!post) throw httpError(404, 'Post not found');
    res.json({ likes: post.likes });
  })
);

// POST /api/community/posts/:id/report
router.post('/posts/:id/report', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    await readablePost(id, req.user.id);

    const report = await prisma.contentModeration.create({
      data: {
        postId: id,
        reason,
        reportedById: req.user.id,
      },
    });
    res.json(report);
  } catch (err) {
    failure(res, err);
  }
});

// GET /api/community/groups
router.get('/groups', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const groups = await prisma.ecoGroup.findMany({
      where: campusId ? { campusId } : undefined,
      include: {
        _count: { select: { members: true } },
        members: { where: { userId: req.user.id }, select: { userId: true, role: true } },
      },
    });
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/community/groups
router.get('/groups/:id', auth, async (req, res) => {
  try {
    const membership = await prisma.ecoGroupMember.findFirst({
      where: { groupId: req.params.id, userId: req.user.id },
      select: { role: true },
    });
    const canViewMembers = operationsRoles.includes(req.user.role) || membership?.role === 'ADMIN';
    const group = await prisma.ecoGroup.findUnique({
      where: { id: req.params.id },
      include: {
        _count: { select: { members: true } },
        members: {
          where: canViewMembers ? undefined : { userId: req.user.id },
          select: {
            userId: true,
            role: true,
            user: { select: { name: true, privacySettings: true } },
          },
        },
      },
    });
    if (!group) return res.status(404).json({ message: 'Organization not found' });
    res.json({
      ...group,
      members: group.members.map(({ user, ...member }) => ({
        ...member,
        name: user.privacySettings?.profileVisible === false ? null : user.name,
      })),
    });
  } catch (error) {
    failure(res, error);
  }
});

// POST /api/community/groups
router.post('/groups', auth, async (req, res) => {
  try {
    const { name, description, campusId } = req.body;
    const group = await prisma.ecoGroup.create({
      data: {
        name,
        description,
        campusId: campusId || req.user.campusId,
        members: {
          create: {
            userId: req.user.id,
            role: 'ADMIN',
          },
        },
      },
      include: {
        _count: { select: { members: true } },
        members: { where: { userId: req.user.id }, select: { userId: true, role: true } },
      },
    });
    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/community/groups/:id/join
router.post('/groups/:id/join', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await prisma.ecoGroupMember.findFirst({
      where: { groupId: id, userId: req.user.id },
    });

    if (existing) {
      return res.status(400).json({ message: 'Already a member of this group' });
    }

    await prisma.ecoGroupMember.upsert({
      where: { groupId_userId: { groupId: id, userId: req.user.id } },
      update: {},
      create: {
        groupId: id,
        userId: req.user.id,
        role: 'MEMBER',
      },
    });

    const memberCount = await prisma.ecoGroupMember.count({ where: { groupId: id } });
    res.json({ message: 'Successfully joined group', memberCount });
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

router.delete('/groups/:id/join', auth, async (req, res) => {
  try {
    const member = await prisma.ecoGroupMember.findFirst({
      where: { groupId: req.params.id, userId: req.user.id },
    });
    if (!member) return res.status(404).json({ message: 'Membership not found' });
    if (member.role === 'ADMIN')
      return res
        .status(409)
        .json({ message: 'Organization administrators must keep their membership.' });
    await prisma.ecoGroupMember.delete({ where: { id: member.id } });
    res.status(204).end();
  } catch {
    res.status(500).json({ message: 'Could not leave this organization.' });
  }
});

module.exports = router;
