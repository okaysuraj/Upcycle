import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
// @ts-ignore - getReactNativePersistence is missing from TS types in Firebase 12
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "AIzaSy_MOCK_API_KEY",
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "upcycle-mock.firebaseapp.com",
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "upcycle-mock",
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "upcycle-mock.appspot.com",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:mock123"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence to persist login across reloads
// @ts-ignore - getReactNativePersistence is missing from TS types in Firebase 12 but works at runtime
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
