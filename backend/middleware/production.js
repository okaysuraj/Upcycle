// Apply request limits, security headers, and public error responses.
const { randomUUID } = require('node:crypto');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');

function configureProduction(app, env = process.env) {
  app.disable('x-powered-by');
  const proxyHops = Number(env.TRUST_PROXY_HOPS || 0);
  if (!Number.isInteger(proxyHops) || proxyHops < 0)
    throw new Error('TRUST_PROXY_HOPS must be a nonnegative integer');
  app.set('trust proxy', proxyHops);
  app.use(helmet());
  app.use((req, res, next) => {
    req.requestId = randomUUID();
    res.set('X-Request-ID', req.requestId);
    res.set('Cache-Control', 'no-store');
    next();
  });
  const options = {
    windowMs: 60_000,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { message: 'Too many requests. Please try again shortly.' },
  };
  app.use(
    '/api',
    rateLimit({
      ...options,
      limit: 300,
      skip: (req) => req.path === '/health' || req.path === '/live',
    })
  );
  app.use(
    '/api/auth',
    rateLimit({
      ...options,
      limit: 30,
      skip: (req) => req.method === 'GET' || req.method === 'OPTIONS',
    })
  );
  app.use('/api/upload', rateLimit({ ...options, limit: 20 }));
}

function validateEnvironment(env = process.env) {
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL is required');
  if (env.NODE_ENV !== 'production') return;
  for (const key of [
    'FIREBASE_PROJECT_ID',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_PRIVATE_KEY',
    'FRONTEND_URL',
  ]) {
    if (!env[key]) throw new Error(`${key} is required in production`);
  }
  for (const value of env.FRONTEND_URL.split(',')) {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.origin !== value.trim())
      throw new Error('FRONTEND_URL must contain comma-separated HTTPS origins');
  }
}

function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);
  const status =
    error.status ||
    {
      P2025: 404,
      P2002: 409,
      P2003: 400,
      P2023: 400,
      P2034: 409,
      LIMIT_FILE_SIZE: 413,
      LIMIT_UNEXPECTED_FILE: 400,
    }[error.code] ||
    (error.name === 'PrismaClientValidationError' ? 400 : 500);
  const message =
    {
      'entity.parse.failed': 'Request body must be valid JSON',
      'entity.too.large': 'Request body is too large',
      LIMIT_FILE_SIZE: 'File exceeds the 10 MB upload limit',
      LIMIT_UNEXPECTED_FILE: 'Invalid upload field or too many files',
    }[error.type || error.code] ||
    (error.status && status < 500
      ? error.message
      : {
          404: 'Record not found',
          409: 'This action conflicts with an existing record. Refresh and try again.',
          400: 'Invalid request data',
          403: 'Origin is not allowed',
        }[status] || 'Unable to complete the request. Please try again.');
  if (status >= 500)
    console.error(
      JSON.stringify({
        level: 'error',
        requestId: req.requestId,
        method: req.method,
        path: req.path,
        code: error.code || error.name,
      })
    );
  res.status(status).json({ message, requestId: req.requestId });
}

module.exports = { configureProduction, validateEnvironment, errorHandler };
