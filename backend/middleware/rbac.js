const { prisma } = require('../config/db');

const requireRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const user = req.user; // Set by auth middleware
      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Fetch user from db to get current role
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email }
      });

      if (!dbUser) {
        return res.status(401).json({ error: 'User not found in database' });
      }

      if (!allowedRoles.includes(dbUser.role)) {
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
      }

      // Optionally attach dbUser to request for convenience in subsequent handlers
      req.dbUser = dbUser;
      
      next();
    } catch (error) {
      console.error('RBAC Error:', error);
      res.status(500).json({ error: 'Internal server error checking permissions' });
    }
  };
};

module.exports = { requireRole };
