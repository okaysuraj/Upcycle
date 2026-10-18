export function registerAccount(
  dependencies: any,
  name: string,
  email: string,
  password: string,
  role?: string
): Promise<{
  success: boolean;
  email?: string;
  message?: string;
  error?: string;
}>;
export function resendVerification(
  dependencies: any,
  email: string,
  password: string
): Promise<{ success: boolean; message?: string; error?: string }>;
