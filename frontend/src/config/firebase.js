import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// These should ideally be in a .env file (VITE_FIREBASE_API_KEY, etc.)
// For now, these are placeholder values until the real Firebase project is created.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSy_MOCK_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "upcycle-mock.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "upcycle-mock",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "upcycle-mock.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:mock123"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
