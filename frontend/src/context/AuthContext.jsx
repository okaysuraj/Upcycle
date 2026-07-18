import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';

const AuthContext = createContext();
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // This will hold our Postgres user data
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      if (fbUser) {
        if (fbUser.emailVerified) {
          await syncWithBackend(fbUser);
        } else {
          // They are logged in Firebase, but email not verified
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

  const syncWithBackend = async (fbUser) => {
    try {
      const token = await fbUser.getIdToken();
      localStorage.setItem('upcycle_token', token); // Optional: keep for legacy compat

      // In a real app, this endpoint verifies the Firebase Token
      // and creates/returns the Postgres User.
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

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        await signOut(auth);
        return { success: false, error: 'Please verify your email before logging in.' };
      }
      return { success: true };
    } catch (error) {
      let msg = 'Login failed.';
      if (error.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
      return { success: false, error: msg };
    }
  };

  const register = async (name, email, password, role) => {
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

      // We sign them out immediately so they have to verify email to get back in
      await signOut(auth);

      return { success: true };
    } catch (error) {
      console.error(error);
      let msg = 'Registration failed.';
      if (error.code === 'auth/email-already-in-use') msg = 'Email is already in use.';
      if (error.code === 'auth/weak-password') msg = 'Password is too weak.';
      return { success: false, error: msg };
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setFirebaseUser(null);
    localStorage.removeItem('upcycle_token');
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const authFetch = async (endpoint, options = {}) => {
    if (!firebaseUser) return fetch(`${API_BASE_URL}${endpoint}`, options);
    
    const token = await firebaseUser.getIdToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      'Authorization': `Bearer ${token}`
    };
    return fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
  };

  return (
    <AuthContext.Provider value={{ user, firebaseUser, loading, login, register, logout, resetPassword, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);