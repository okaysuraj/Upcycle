/**
 * Auto-Assignment Engine
 * Scores candidate users for a given task based on:
 *   - Skill match with task category (max 10 points each)
 *   - Workload penalty (subtract 3 per active task)
 *   - Availability bonus (add 0.5 per available hour/week)
 *   - Role compatibility (staff can handle complex tasks)
 */

const SKILL_CATEGORY_MAP = {
  Plantation: ['Plantation', 'Soil Preparation'],
  Watering: ['Watering', 'Irrigation'],
  Weeding: ['Weeding'],
  Harvesting: ['Harvesting'],
  Pruning: ['Pruning'],
  Irrigation: ['Irrigation', 'Watering'],
  'Soil Preparation': ['Soil Preparation', 'Plantation'],
};

function scoreCandidate(user, task) {
  const requiredSkills = SKILL_CATEGORY_MAP[task.category] || [task.category];
  const userSkills = user.skills || [];

  // Skill match score
  const matchedSkills = requiredSkills.filter(s => userSkills.includes(s));
  const skillScore = matchedSkills.length * 10;

  // Workload penalty
  const workloadPenalty = (user.activeTasks || 0) * 3;

  // Availability bonus
  const availabilityBonus = (user.availabilityHours || 0) * 0.5;

  // Role bonus: staff get +5 for handling complex tasks
  const roleBonus = (user.role === 'staff' || user.role === 'admin') ? 5 : 0;

  const totalScore = skillScore - workloadPenalty + availabilityBonus + roleBonus;

  return {
    userId: user._id,
    name: user.name,
    role: user.role,
    skills: userSkills,
    matchedSkills,
    activeTasks: user.activeTasks || 0,
    availabilityHours: user.availabilityHours || 0,
    skillScore,
    workloadPenalty,
    availabilityBonus,
    roleBonus,
    totalScore,
  };
}

function runAssignmentEngine(candidates, task) {
  if (!candidates || candidates.length === 0) return null;

  const scored = candidates
    .filter(u => u.role !== 'admin') // Admins manage, they don't get assigned
    .map(user => scoreCandidate(user, task))
    .sort((a, b) => b.totalScore - a.totalScore);

  return scored;
}

module.exports = { runAssignmentEngine, SKILL_CATEGORY_MAP };
