const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('./auth');

// GET /api/community/posts
router.get('/posts', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const posts = await prisma.post.findMany({
      where: campusId ? { campusId } : undefined,
      include: {
        author: { select: { name: true, role: true } },
        comments: {
          include: { author: { select: { name: true } } },
          orderBy: { createdAt: 'asc' }
        },
        _count: { select: { comments: true } }
      },
      orderBy: { createdAt: 'desc' },
      take: 20
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/community/posts
router.post('/posts', auth, async (req, res) => {
  try {
    const { content, imageUrl, campusId } = req.body;
    const post = await prisma.post.create({
      data: {
        content,
        imageUrl,
        campusId,
        authorId: req.user.id
      },
      include: { author: { select: { name: true, role: true } } }
    });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/community/posts/:id/comment
router.post('/posts/:id/comment', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const comment = await prisma.comment.create({
      data: {
        content,
        postId: id,
        authorId: req.user.id
      },
      include: { author: { select: { name: true } } }
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/community/posts/:id/like
router.post('/posts/:id/like', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.update({
      where: { id },
      data: { likes: { increment: 1 } }
    });
    res.json({ likes: post.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/community/posts/:id/report
router.post('/posts/:id/report', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    
    const report = await prisma.contentModeration.create({
      data: {
        postId: id,
        reason,
        reportedById: req.user.id
      }
    });
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/community/groups
router.get('/groups', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const groups = await prisma.ecoGroup.findMany({
      where: campusId ? { campusId } : undefined,
      include: {
        _count: { select: { members: true } }
      }
    });
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
