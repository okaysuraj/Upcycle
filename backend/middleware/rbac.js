// Authentication already loaded the current database role for this request.
const requireRole = (allowedRoles) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  if (!req.dbUser) return res.status(401).json({ error: 'User not found in database' });
  if (!allowedRoles.includes(req.dbUser.role)) {
    return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
  }
  next();
};

module.exports = { requireRole };
