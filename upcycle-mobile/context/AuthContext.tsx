import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
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
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  authFetch: (endpoint: string, options?: RequestInit) => Promise<Response>;
  updateProfile: (data: any) => Promise<{ success: boolean; error?: string }>;
  uploadProfilePic: (uri: string) => Promise<{ success: boolean; url?: string; error?: string }>;
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

  const debuggerHost = Constants.expoConfig?.hostUri;
  const localhost = debuggerHost?.split(':')[0] || 'localhost';
  const API_BASE_URL = `http://${localhost}:5000/api`;

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
      await SecureStore.setItemAsync('token', token);

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        return true;
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Backend auth sync failed:", errorData);
        setUser(null);
        return false;
      }
    } catch (error) {
      console.error('Backend sync error:', error);
      setUser(null);
      return false;
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
      
      // Explicitly wait for backend sync during login so we can catch DB missing profile errors
      const syncSuccess = await syncWithBackend(userCredential.user);
      if (!syncSuccess) {
        await signOut(auth);
        return { success: false, error: 'Account not found in database. Please register first.' };
      }
      
      return { success: true };
    } catch (error: any) {
      console.error('Firebase Login Error:', error);
      let msg = error.message || 'Login failed.';
      if (error.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
      return { success: false, error: msg };
    }
  };

  const register = async (name: string, email: string, password: string) => {
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
        body: JSON.stringify({ name, email, firebaseUid: userCredential.user.uid })
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

  const updateProfile = async (data: any) => {
    try {
      const response = await authFetch('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        return { success: true };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.message || 'Failed to update profile' };
      }
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  };

  const uploadProfilePic = async (uri: string) => {
    try {
      if (!firebaseUser) return { success: false, error: 'Not authenticated' };
      
      const formData = new FormData();
      const filename = uri.split('/').pop() || 'profile.jpg';
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image/jpeg';
      
      // @ts-ignore - React Native FormData accepts this structure
      formData.append('image', { uri, name: filename, type });
      
      const token = await firebaseUser.getIdToken();
      
      // Use direct fetch without Content-Type so RN can add the multipart boundary
      const response = await fetch(`${API_BASE_URL}/upload/profile-pic`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      
      if (response.ok) {
        const data = await response.json();
        await updateProfile({ profilePicUrl: data.url });
        return { success: true, url: data.url };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.message || 'Failed to upload image' };
      }
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, firebaseUser, loading, login, register, logout, resetPassword, authFetch, updateProfile, uploadProfilePic, API_BASE_URL }}>
      {children}
    </AuthContext.Provider>
  );
};
