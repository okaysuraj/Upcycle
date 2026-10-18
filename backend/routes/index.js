// Register each API area in one place; route files own their handlers.
module.exports = function registerRoutes(app) {
  app.use('/api/auth', require('./auth'));
  app.use('/api/users', require('./users'));
  app.use('/api/tasks', require('./tasks'));
  app.use('/api/resources', require('./resources'));
  app.use('/api/notifications', require('./notifications'));
  app.use('/api/events', require('./events'));
  app.use('/api/records', require('./records'));
  app.use('/api/content', require('./content'));
  app.use('/api/recycling', require('./recycling'));
  app.use('/api/horticulture', require('./horticulture'));
  app.use('/api/campuses', require('./campus'));
  app.use('/api/waste', require('./waste'));
  app.use('/api/marketplace', require('./marketplace'));
  app.use('/api/payments', require('./payments'));
  app.use('/api/esg', require('./esg'));
  app.use('/api/gamification', require('./gamification'));
  app.use('/api/community', require('./community'));
  app.use('/api/admin', require('./admin'));
  app.use('/api/education', require('./education'));
  app.use('/api/upload', require('./upload'));
  app.use('/api/analytics', require('./analytics'));
  app.use('/api/buildings', require('./buildings'));
  app.use('/api/support', require('./support'));
  app.use('/api/fleet', require('./fleet'));
  app.use('/api/goals', require('./goals'));
  app.use('/api/shifts', require('./shifts'));
};
