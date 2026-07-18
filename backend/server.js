require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
const { router: authRouter } = require('./routes/auth');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const resourcesRouter = require('./routes/resources');
const notificationsRouter = require('./routes/notifications');
const eventsRouter = require('./routes/events');
const recyclingRouter = require('./routes/recycling');
const horticultureRouter = require('./routes/horticulture');
const campusRouter = require('./routes/campus');
const wasteRouter = require('./routes/waste');
const marketplaceRouter = require('./routes/marketplace');
const paymentsRouter = require('./routes/payments');
const esgRouter = require('./routes/esg');
const gamificationRouter = require('./routes/gamification');
const communityRouter = require('./routes/community');
const adminRouter = require('./routes/admin');
const educationRouter = require('./routes/education');

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/recycling', recyclingRouter);
app.use('/api/horticulture', horticultureRouter);
app.use('/api/campuses', campusRouter);
app.use('/api/waste', wasteRouter);
app.use('/api/marketplace', marketplaceRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/esg', esgRouter);
app.use('/api/gamification', gamificationRouter);
app.use('/api/community', communityRouter);
app.use('/api/admin', adminRouter);
app.use('/api/education', educationRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    db: 'postgresql',
    timestamp: new Date().toISOString()
  });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🌿 Upcycle API running on http://localhost:${PORT}`);
    console.log(`📋 Health: http://localhost:${PORT}/api/health\n`);
  });
});
