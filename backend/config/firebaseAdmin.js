// Initialize the server SDK used to verify Firebase sessions.
const { getApps, initializeApp, cert } = require('firebase-admin/app');
const admin = require('firebase-admin');

if (getApps().length === 0) {
  try {
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // The private key comes from .env with escaped newlines — replace them
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    initializeApp({
      credential: cert(serviceAccount),
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'production')
      throw new Error('Firebase Admin credentials are invalid');
    console.error('Firebase admin initialization error:', error.message);
    // Fallback: initialize without credentials (token verification will fail)
    initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
}

module.exports = admin;
