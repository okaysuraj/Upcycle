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
      localStorage.setItem('upcycle_token', token);

      // Try to fetch existing Postgres user profile
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        return true;
      }

      // If user doesn't exist in Postgres (404), auto-create their profile
      // This handles the case where Firebase registration succeeded but backend failed
      if (response.status === 404) {
        console.warn('User not found in Postgres, auto-creating profile...');
        const registerResponse = await fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: fbUser.displayName || fbUser.email.split('@')[0],
            email: fbUser.email,
            role: 'VOLUNTEER',
            firebaseUid: fbUser.uid,
          }),
        });

        if (registerResponse.ok) {
          // Now fetch the newly created user
          const retryResponse = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (retryResponse.ok) {
            const userData = await retryResponse.json();
            setUser(userData);
            return true;
          }
        }
      }

      console.error('Backend auth sync failed, status:', response.status);
      setUser(null);
      return false;
    } catch (error) {
      console.error('Backend sync error:', error);
      setUser(null);
      return false;
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
      // Sync with backend and check if user profile exists/was created
      const synced = await syncWithBackend(userCredential.user);
      if (!synced) {
        await signOut(auth);
        return { success: false, error: 'Unable to load your profile. Please try again or contact support.' };
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
      // This is best-effort — even if it fails, the Firebase user + email were created.
      // The backend /me endpoint can re-create the profile on first verified login if needed.
      try {
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
          const errorData = await response.json().catch(() => ({}));
          console.warn('Backend profile creation returned non-OK:', response.status, errorData.message);
        }
      } catch (backendError) {
        console.warn('Backend profile creation failed (non-critical):', backendError.message);
      }

      // We sign them out immediately so they have to verify email to get back in
      await signOut(auth);

      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
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