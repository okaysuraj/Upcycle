import Constants from 'expo-constants';
import { auth } from '../config/firebase';

const debuggerHost = Constants.expoConfig?.hostUri;
const localhost = debuggerHost?.split(':')[0] || 'localhost';
const API_BASE_URL = `http://${localhost}:5000/api`;

export const authFetch = async (url: string, options: RequestInit = {}) => {
  const user = auth.currentUser;
  let token = null;

  if (user) {
    token = await user.getIdToken();
  }

  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
    'Content-Type': (options.headers as any)?.['Content-Type'] || 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;

  return fetch(fullUrl, {
    ...options,
    headers,
  });
};
