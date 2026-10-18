// Verify Firebase identity and load the current application profile once per request.
const { prisma } = require('../config/db');
require('../config/firebaseAdmin');
const { getAuth } = require('firebase-admin/auth');

// Middleware: authenticate Firebase ID Token
const auth = async (req, res, next) => {
  const token = /^Bearer (\S+)$/i.exec(req.headers.authorization || '')?.[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = await getAuth().verifyIdToken(token, true);
    if (!decodedToken.email)
      return res.status(401).json({ message: 'An email identity is required' });

    // Look up the Postgres user to attach the ID and role
    const user = await prisma.user.findUnique({ where: { email: decodedToken.email } });

    if (user && !user.isActive)
      return res
        .status(403)
        .json({ message: 'This account is deactivated. Contact campus support.' });
    const registering = req.baseUrl === '/api/auth' && req.path === '/register';
    const syncing = req.baseUrl === '/api/auth' && req.path === '/me';
    if (!registering && !decodedToken.email_verified)
      return res.status(403).json({ message: 'Verify your email before continuing' });
    if (!user && !registering && !syncing)
      return res.status(403).json({ message: 'Complete your profile before continuing' });
    req.dbUser = user;
    req.user = {
      campusId: user?.campusId,
      name: user?.name,
      firebaseUid: decodedToken.uid,
      email: decodedToken.email,
      email_verified: decodedToken.email_verified,
      id: user ? user.id : null,
      role: user ? user.role : null,
      kycStatus: user ? user.kycStatus : null,
    };
    next();
  } catch (error) {
    const invalidToken = String(error.code || '').startsWith('auth/');
    res
      .status(invalidToken ? 401 : 503)
      .json({
        message: invalidToken
          ? 'Invalid or expired token'
          : 'Authentication service is unavailable. Please try again.',
      });
  }
};

module.exports = { auth };
