export function fetchWithTimeout(
  url: string,
  options?: RequestInit,
  fetcher?: typeof fetch,
  timeoutMs?: number
): Promise<Response>;
export function apiRequestURL(base: string, endpoint: string): string;
