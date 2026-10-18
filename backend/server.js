require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, prisma, pool } = require('./config/db');
const {
  configureProduction,
  validateEnvironment,
  errorHandler,
} = require('./middleware/production');

const app = express();
configureProduction(app);

const allowedOrigins = [
  ...(process.env.NODE_ENV !== 'production'
    ? [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'http://localhost:8081',
        'http://127.0.0.1:8081',
      ]
    : []),
  ...(process.env.FRONTEND_URL || '').split(',').map((origin) => origin.trim()),
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(Object.assign(new Error('Origin is not allowed'), { status: 403 }));
      }
    },
    credentials: true,
  })
);
app.use(express.json({ limit: '256kb' }));
app.use('/api', require('./middleware/featureValidation').featureValidation);

require('./routes')(app);

// Health check
app.get('/api/live', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected', timestamp: new Date().toISOString() });
  } catch {
    res.status(503).json({ status: 'unavailable', db: 'disconnected' });
  }
});

app.use('/api', (req, res) => res.status(404).json({ message: 'API endpoint not found' }));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  validateEnvironment();
  connectDB().then(() => {
    const server = app.listen(PORT, () => console.log(`Upcycle API listening on port ${PORT}`));
    server.requestTimeout = 60_000;
    server.headersTimeout = 65_000;
    let stopping = false;
    const shutdown = () => {
      if (stopping) return;
      stopping = true;
      const deadline = setTimeout(() => process.exit(1), 15_000).unref();
      server.close(async () => {
        try {
          await prisma.$disconnect();
          await pool.end();
          clearTimeout(deadline);
          process.exitCode = 0;
        } catch {
          process.exitCode = 1;
        }
      });
    };
    process.once('SIGTERM', shutdown);
    process.once('SIGINT', shutdown);
  });
}

module.exports = app;
