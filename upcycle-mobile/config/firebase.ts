import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { Platform } from 'react-native';
// @ts-ignore - getReactNativePersistence is missing from TS types in Firebase 12
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};
for (const key of ['apiKey', 'authDomain', 'projectId', 'appId'] as const) {
  if (!firebaseConfig[key])
    throw new Error(
      `Firebase ${key} is not configured. Set EXPO_PUBLIC_FIREBASE_* before building.`
    );
}

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence to persist login across reloads
// @ts-ignore - getReactNativePersistence is missing from TS types in Firebase 12 but works at runtime
export const auth =
  Platform.OS === 'web'
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
