// One bounded request implementation for browsers and React Native.
export async function fetchWithTimeout(
  url,
  options = {},
  fetcher = globalThis.fetch,
  timeoutMs = 30_000
) {
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (options.signal?.aborted) controller.abort();
  else options.signal?.addEventListener('abort', abort, { once: true });
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  try {
    return await fetcher(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (timedOut)
      throw new Error('Upcycle took too long to respond. Check your connection and try again.');
    throw error;
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener('abort', abort);
  }
}

export function apiRequestURL(base, endpoint) {
  if (!base) throw new Error('The app API is not configured.');
  if (/^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(endpoint)) {
    if (!/^https?:\/\//i.test(base) || !endpoint.startsWith(`${base}/`))
      throw new Error('Authenticated requests must use the configured Upcycle API.');
    const url = new URL(endpoint);
    if (url.origin !== new URL(base).origin || url.username || url.password)
      throw new Error('Authenticated requests must use the configured Upcycle API.');
    return endpoint;
  }
  return `${base}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
}
