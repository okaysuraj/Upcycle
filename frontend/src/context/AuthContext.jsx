// Keep the web session and saved application profile in sync.
import { fetchWithTimeout } from '../../../shared/request.mjs';
import { createContext, useContext, useState, useEffect } from 'react';
import * as sdk from 'firebase/auth';
import {
  registerAccount,
  resendVerification as resendAccountVerification,
} from '../../../shared/auth-actions.mjs';
import { auth } from '../config/firebase';
import { authFetch, authFetchJson, API_BASE_URL } from '../utils/authFetch';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';

const AuthContext = createContext();

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

  useEffect(() => {
    const update = (event) => setUser(event.detail);
    window.addEventListener('upcycle:profile-updated', update);
    return () => window.removeEventListener('upcycle:profile-updated', update);
  }, []);

  const syncWithBackend = async (fbUser) => {
    try {
      const token = await fbUser.getIdToken();
      localStorage.removeItem('upcycle_token');

      // Try to fetch existing Postgres user profile
      const response = await fetchWithTimeout(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        return userData;
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
        return {
          success: false,
          notVerified: true,
          error:
            'Please verify your email address before signing in. Check your inbox for the activation link.',
        };
      }
      // Sync with backend and check if user profile exists/was created
      const synced = await syncWithBackend(userCredential.user);
      if (!synced) {
        await signOut(auth);
        return {
          success: false,
          error: 'Unable to load your profile. Please try again or contact campus support.',
        };
      }
      return { success: true, user: synced };
    } catch (error) {
      let msg = 'Sign in failed.';
      if (error.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
      return { success: false, error: msg };
    }
  };

  const resendVerification = (email, password) =>
    resendAccountVerification({ auth, sdk }, email, password);
  const register = (name, email, password, role = 'STUDENT') =>
    registerAccount(
      {
        auth,
        sdk,
        saveProfile: async (fbUser, data) => {
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
  const confirmPasswordReset = async (code, password) => {
    try {
      await sdk.confirmPasswordReset(auth, code, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
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

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        loading,
        login,
        register,
        resendVerification,
        logout,
        resetPassword,
        confirmPasswordReset,
        authFetch,
        authFetchJson,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Context hook is intentionally exported beside its provider.
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
