import { auth } from '../config/firebase';

export const authFetch = async (url, options = {}) => {
  const user = auth.currentUser;
  let token = null;

  if (user) {
    token = await user.getIdToken();
  }

  const headers = {
    ...options.headers,
    'Content-Type': options.headers?.['Content-Type'] || 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return fetch(url, {
    ...options,
    headers
  });
};
