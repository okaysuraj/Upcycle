// Validate and submit the same authentication forms on web and mobile.
import { useState } from 'react';
import screens from './auth-screens.json' with { type: 'json' };
export function useAuthForm(mode, auth, params, onLogin) {
  const screen = screens[mode] || screens.login;
  const [values, setValues] = useState({
    name: '',
    email: params.email || '',
    password: '',
    confirmPassword: '',
    role: ['STUDENT', 'VOLUNTEER', 'VENDOR'].includes(params.role) ? params.role : '',
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [unverified, setUnverified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const update = (key, value) => setValues((previous) => ({ ...previous, [key]: value }));
  async function submit(resend = false) {
    if (busy) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      for (const field of screen.fields)
        if (!values[field.key]?.trim()) throw new Error(`${field.label} is required.`);
      if (['register', 'reset'].includes(mode)) {
        if (values.password.length < 8)
          throw new Error('Password must contain at least eight characters.');
        if (values.password !== values.confirmPassword) throw new Error('Passwords do not match.');
      }
      let result;
      if (resend) result = await auth.resendVerification(values.email, values.password);
      else if (mode === 'login') result = await auth.login(values.email.trim(), values.password);
      else if (mode === 'register')
        result = await auth.register(
          values.name,
          values.email.trim(),
          values.password,
          values.role
        );
      else if (mode === 'forgot') result = await auth.resetPassword(values.email.trim());
      else if (mode === 'reset') {
        if (!params.oobCode)
          throw new Error(
            'This reset link is missing or invalid. Request a new password reset email.'
          );
        result = await auth.confirmPasswordReset(params.oobCode, values.password);
      }
      if (!result?.success) {
        if (result?.notVerified) setUnverified(true);
        throw new Error(result?.error || 'The request could not be completed.');
      }
      if (mode === 'login' && !resend) onLogin(result);
      else
        setNotice(
          result.message ||
            (mode === 'forgot'
              ? 'The password reset request was accepted. Check your email for the reset link.'
              : mode === 'reset'
                ? 'Your password was updated. You can sign in now.'
                : 'Your profile was saved. Check your email for the verification link.')
        );
    } catch (cause) {
      setError(cause.message || 'The request could not be completed.');
    } finally {
      setBusy(false);
    }
  }
  return {
    screen,
    values,
    update,
    busy,
    error,
    notice,
    unverified,
    showPassword,
    setShowPassword,
    submit,
  };
}
