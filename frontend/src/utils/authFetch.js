// Attach Firebase tokens and surface API failures to the web workspace.
import { auth } from '../config/firebase';
import { apiRequestURL, fetchWithTimeout } from '../../../shared/request.mjs';

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api')
).replace(/\/$/, '');

export const authFetch = async (url, options = {}) => {
  const user = auth.currentUser;
  let token = null;

  if (user) {
    token = await user.getIdToken();
  }

  const headers = new Headers(options.headers);
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const fullUrl = apiRequestURL(API_BASE_URL, url);
  try {
    const response = await fetchWithTimeout(fullUrl, { ...options, headers });
    if (!response.ok) {
      const data = await response
        .clone()
        .json()
        .catch(() => ({}));
      window.dispatchEvent(
        new CustomEvent('upcycle:request-error', {
          detail:
            data.message ||
            data.error ||
            `The request failed (${response.status}). Please try again.`,
        })
      );
    }
    if (!response.ok && options.method && options.method.toUpperCase() !== 'GET') {
      const data = await response
        .clone()
        .json()
        .catch(() => ({}));
      throw Object.assign(new Error(data.message || data.error || 'Changes could not be saved.'), {
        status: response.status,
      });
    }
    if (
      response.ok &&
      options.method?.toUpperCase() === 'PUT' &&
      fullUrl.endsWith('/users/profile')
    ) {
      window.dispatchEvent(
        new CustomEvent('upcycle:profile-updated', { detail: await response.clone().json() })
      );
    }
    if (response.ok && options.method?.toUpperCase() === 'POST' && fullUrl.endsWith('/users/kyc')) {
      const profile = await fetchWithTimeout(`${API_BASE_URL}/auth/me`, { headers });
      if (profile.ok)
        window.dispatchEvent(
          new CustomEvent('upcycle:profile-updated', { detail: await profile.json() })
        );
    }
    return response;
  } catch (error) {
    if (error.name !== 'AbortError' && !error.status)
      window.dispatchEvent(
        new CustomEvent('upcycle:request-error', {
          detail: 'Cannot reach Upcycle. Check your connection and try again.',
        })
      );
    throw error;
  }
};

export const authFetchJson = async (url, options = {}) => {
  const response = await authFetch(url, options);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw Object.assign(
      new Error(data.message || data.error || `The request failed (${response.status}).`),
      { status: response.status }
    );
  }
  return response.status === 204 ? null : response.json();
};
