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
    console.log('✅ Firebase Admin initialized');
  } catch (error) {
    console.error('Firebase admin initialization error:', error.message);
    // Fallback: initialize without credentials (token verification will fail)
    initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID || 'upcycle-mock',
    });
  }
}

module.exports = admin;
