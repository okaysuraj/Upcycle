// Send bounded authenticated requests to the configured application API.
import Constants from 'expo-constants';
import { auth } from '../config/firebase';
import { apiRequestURL, fetchWithTimeout } from '../../shared/request.mjs';

const host = Constants.expoConfig?.hostUri?.split(':')[0] || 'localhost';
export const API_BASE_URL = (
  process.env.EXPO_PUBLIC_API_URL || (__DEV__ ? `http://${host}:5000/api` : '')
).replace(/\/$/, '');

export const authFetch = async (url: string, options: RequestInit = {}) => {
  if (!API_BASE_URL)
    throw new Error('The app API is not configured. Set EXPO_PUBLIC_API_URL before building.');
  if (!__DEV__ && !API_BASE_URL.startsWith('https://'))
    throw new Error('The production API must use HTTPS.');
  const headers = new Headers(options.headers);
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type'))
    headers.set('Content-Type', 'application/json');
  const user = auth.currentUser;
  if (user) headers.set('Authorization', `Bearer ${await user.getIdToken()}`);
  const fullUrl = apiRequestURL(API_BASE_URL, url);
  const response = await fetchWithTimeout(fullUrl, { ...options, headers });
  if (!response.ok && options.method && options.method.toUpperCase() !== 'GET') {
    const data = await response
      .clone()
      .json()
      .catch(() => ({}));
    throw new Error(data.message || data.error || 'Changes could not be saved.');
  }
  return response;
};
