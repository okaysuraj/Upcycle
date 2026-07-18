import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { auth } from '../config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  User as FirebaseUser
} from 'firebase/auth';

interface AuthContextType {
  user: any;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string, role: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  authFetch: (endpoint: string, options?: RequestInit) => Promise<Response>;
  API_BASE_URL: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:5000/api' : 'http://localhost:5000/api';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      if (fbUser) {
        if (fbUser.emailVerified) {
          await syncWithBackend(fbUser);
        } else {
          // Logged in Firebase, but email not verified
          setUser(null);
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const syncWithBackend = async (fbUser: FirebaseUser) => {
    try {
      const token = await fbUser.getIdToken();
      // Store token in SecureStore for offline usage/legacy fallback if needed
      await SecureStore.setItemAsync('token', token);

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error("Backend auth sync failed");
        setUser(null);
      }
    } catch (error) {
      console.error('Backend sync error:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        await signOut(auth);
        return { success: false, error: 'Please verify your email before logging in.' };
      }
      return { success: true };
    } catch (error: any) {
      let msg = 'Login failed.';
      if (error.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
      return { success: false, error: msg };
    }
  };

  const register = async (name: string, email: string, password: string, role: string) => {
    try {
      // 1. Create in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // 2. Send Verification Email
      await sendEmailVerification(userCredential.user);

      // 3. Register user profile in Postgres (Backend)
      const token = await userCredential.user.getIdToken();
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ name, email, role, firebaseUid: userCredential.user.uid })
      });

      if (!response.ok) {
        throw new Error('Failed to create profile in database');
      }

      // 4. Sign out immediately to enforce email verification
      await signOut(auth);

      return { success: true };
    } catch (error: any) {
      console.error(error);
      let msg = 'Registration failed.';
      if (error.code === 'auth/email-already-in-use') msg = 'Email is already in use.';
      if (error.code === 'auth/weak-password') msg = 'Password is too weak.';
      return { success: false, error: msg };
    }
  };

  const logout = async () => {
    await signOut(auth);
    await SecureStore.deleteItemAsync('token');
    setUser(null);
    setFirebaseUser(null);
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const authFetch = async (endpoint: string, options: RequestInit = {}) => {
    if (!firebaseUser) return fetch(`${API_BASE_URL}${endpoint}`, options);
    
    const token = await firebaseUser.getIdToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
      'Authorization': `Bearer ${token}`
    };
    return fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
  };

  return (
    <AuthContext.Provider value={{ user, firebaseUser, loading, login, register, logout, resetPassword, authFetch, API_BASE_URL }}>
      {children}
    </AuthContext.Provider>
  );
};
