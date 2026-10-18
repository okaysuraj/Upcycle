// Manage sustainability goals and their saved milestones.
const express = require('express');
const router = express.Router();
const { prisma } = require('../config/db');
const { auth } = require('../middleware/auth');
const { transaction } = require('../utils/http');

// GET /api/goals
router.get('/', auth, async (req, res) => {
  try {
    const { campusId } = req.query;
    const goals = await prisma.sustainabilityGoal.findMany({
      where: campusId ? { campusId } : undefined,
      include: {
        milestones: { orderBy: { createdAt: 'asc' } },
      },
      orderBy: { createdAt: 'asc' },
    });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// POST /api/goals
router.post('/', auth, async (req, res) => {
  try {
    const {
      category,
      title,
      targetYear,
      baseline,
      targetValue,
      currentVal,
      department,
      campusId,
      milestones,
    } = req.body;

    let targetCampusId = campusId || req.user.campusId;

    if (!targetCampusId) {
      return res.status(400).json({ message: 'A valid campusId is required.' });
    }

    const goal = await prisma.sustainabilityGoal.create({
      data: {
        campusId: targetCampusId,
        category,
        title,
        targetYear: Number(targetYear),
        baseline,
        targetValue,
        currentVal,
        progressPct:
          Array.isArray(milestones) && milestones.length
            ? Math.round(
                (100 * milestones.filter((m) => m.completed === true).length) / milestones.length
              )
            : 0,
        department: department || null,
        milestones:
          milestones && Array.isArray(milestones)
            ? {
                create: milestones.map((m) => ({
                  title: m.title || m.text,
                  leadTeam: m.leadTeam || null,
                  completed: Boolean(m.completed),
                })),
              }
            : undefined,
      },
      include: { milestones: true },
    });

    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

// PATCH /api/goals/milestones/:id
router.patch('/milestones/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    if (typeof completed !== 'boolean')
      return res.status(400).json({ message: 'Completed must be a boolean' });

    const milestone = await transaction(prisma, async (tx) => {
      const updated = await tx.goalMilestone.update({
        where: { id },
        data: {
          completed,
          completedAt: completed ? new Date() : null,
        },
      });

      // Recalculate parent goal progress
      const allMilestones = await tx.goalMilestone.findMany({
        where: { goalId: updated.goalId },
      });

      if (allMilestones.length > 0) {
        const doneCount = allMilestones.filter((m) => m.completed).length;
        const progressPct = Math.round((doneCount / allMilestones.length) * 100);
        await tx.sustainabilityGoal.update({
          where: { id: updated.goalId },
          data: { progressPct },
        });
      }
      return updated;
    });

    res.json(milestone);
  } catch (err) {
    res.status(500).json({ message: 'Unable to complete the request. Please try again.' });
  }
});

module.exports = router;
