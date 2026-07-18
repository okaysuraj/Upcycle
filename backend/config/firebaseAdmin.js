const admin = require('firebase-admin');

// In production, this would use a service account key JSON file
// For this mock/development, we initialize it without credentials to avoid crashing,
// but auth verification will require real credentials in prod.
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      // credential: admin.credential.cert(serviceAccount)
      projectId: process.env.FIREBASE_PROJECT_ID || 'upcycle-mock'
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

module.exports = admin;
