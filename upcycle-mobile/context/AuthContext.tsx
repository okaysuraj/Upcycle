// Keep the Firebase session and saved mobile application profile in sync.
import { fetchWithTimeout } from '../../shared/request.mjs';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { API_BASE_URL, authFetch } from '../utils/api';
import * as sdk from 'firebase/auth';
import {
  registerAccount,
  resendVerification as resendAccountVerification,
} from '../../shared/auth-actions.mjs';
import { auth } from '../config/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User as FirebaseUser,
} from 'firebase/auth';

interface AuthContextType {
  user: any;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    error?: string;
    notVerified?: boolean;
    message?: string;
    user?: any;
  }>;
  register: (
    name: string,
    email: string,
    password: string,
    role?: string
  ) => Promise<{ success: boolean; error?: string }>;
  resendVerification: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string; message?: string }>;
  confirmPasswordReset: (
    code: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  authFetch: (endpoint: string, options?: RequestInit) => Promise<Response>;
  authFetchJson: <T = any>(endpoint: string, options?: RequestInit) => Promise<T>;
  updateProfile: (data: any) => Promise<{ success: boolean; error?: string }>;
  uploadProfilePic: (uri: string) => Promise<{ success: boolean; url?: string; error?: string }>;
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

      const response = await fetchWithTimeout(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        return userData;
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Backend auth sync failed:', errorData);
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
        return {
          success: false,
          notVerified: true,
          error:
            'Please verify your email address before signing in. Check your inbox for the activation link.',
        };
      }

      const syncSuccess = await syncWithBackend(userCredential.user);
      if (!syncSuccess) {
        await signOut(auth);
        return {
          success: false,
          error: 'Unable to load your profile. Please try again or contact campus support.',
        };
      }

      return { success: true, user: syncSuccess };
    } catch (error: any) {
      console.error('Firebase Login Error:', error);
      let msg = error.message || 'Login failed.';
      if (error.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
      return { success: false, error: msg };
    }
  };

  const register = (name: string, email: string, password: string, role = 'STUDENT') =>
    registerAccount(
      {
        auth,
        sdk,
        saveProfile: async (fbUser: FirebaseUser, data: any) => {
          const token = await fbUser.getIdToken();
          const response = await fetchWithTimeout(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(
              error.message ||
                'Your authentication account exists, but the database profile could not be saved. Retry with the same credentials.'
            );
          }
        },
      },
      name,
      email,
      password,
      role
    );
  const resendVerification = (email: string, password: string) =>
    resendAccountVerification({ auth, sdk }, email, password);
  const confirmPasswordReset = async (code: string, password: string) => {
    try {
      await sdk.confirmPasswordReset(auth, code, password);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await signOut(auth);
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

  const updateProfile = async (data: any) => {
    try {
      const response = await authFetch('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(data),
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

      if (Platform.OS === 'web')
        formData.append('image', await (await fetch(uri)).blob(), filename);
      // @ts-ignore - React Native FormData accepts this structure
      else formData.append('image', { uri, name: filename, type });

      const token = await firebaseUser.getIdToken();

      // Use direct fetch without Content-Type so RN can add the multipart boundary
      const response = await fetchWithTimeout(`${API_BASE_URL}/upload/profile-pic`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const updated = await updateProfile({ profilePicUrl: data.url });
        if (!updated.success) return updated;
        return { success: true, url: data.url };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.message || 'Failed to upload image' };
      }
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  };

  const contextFetch = useCallback(async (endpoint: string, options: RequestInit = {}) => {
    const response = await authFetch(endpoint, options);
    if (response.ok && options.method?.toUpperCase() === 'PUT' && endpoint === '/users/profile')
      setUser(await response.clone().json());
    if (response.ok && options.method?.toUpperCase() === 'POST' && endpoint === '/users/kyc') {
      const profile = await authFetch('/auth/me');
      if (profile.ok) setUser(await profile.json());
    }
    return response;
  }, []);
  const contextFetchJson = useCallback(
    async <T,>(endpoint: string, options: RequestInit = {}): Promise<T> => {
      const response = await contextFetch(endpoint, options);
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || data.error || 'Could not load records.');
      }
      return (response.status === 204 ? null : response.json()) as Promise<T>;
    },
    [contextFetch]
  );
  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        loading,
        login,
        register,
        logout,
        resetPassword,
        resendVerification,
        confirmPasswordReset,
        authFetch: contextFetch,
        authFetchJson: contextFetchJson,
        updateProfile,
        uploadProfilePic,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
