// Render shared authentication forms using the web session provider.
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAuthForm } from '../../../shared/use-auth-form.mjs';
import Button from './ui/Button';
import Card from './ui/Card';

export default function AuthScreen({ mode = 'login' }) {
  const auth = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const state = useAuthForm(mode, auth, Object.fromEntries(params), () =>
    navigate('/features/overview')
  );
  const { screen, values, update, busy, error, notice, unverified, showPassword, setShowPassword } =
    state;

  return (
    <Card className="mx-auto w-full max-w-[480px] p-6 sm:p-8 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
      <div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/70 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60">
          Your campus workspace
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {screen.title}
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          {screen.description}
        </p>
      </div>

      {screen.fields.length > 0 && (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            void state.submit();
          }}
        >
          {screen.fields.map((field) => (
            <label key={field.key} className="block text-sm">
              <span className="mb-1.5 block font-semibold text-stone-800 dark:text-stone-200">
                {field.label}
              </span>
              {field.type === 'select' ? (
                <select
                  aria-label={field.label}
                  required
                  className="min-h-[44px] w-full rounded-xl border border-stone-200 bg-white p-3 text-sm focus:border-emerald-600 focus:outline-none dark:border-stone-700 dark:bg-[#232725] dark:text-stone-100 transition-colors"
                  value={values[field.key]}
                  onChange={(event) => update(field.key, event.target.value)}
                >
                  <option value="">Select a role</option>
                  {field.options.map((role) => (
                    <option key={role} value={role}>
                      {role.toLowerCase().replaceAll('_', ' ')}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="relative">
                  <input
                    required
                    aria-label={field.label}
                    type={field.type === 'password' && showPassword ? 'text' : field.type}
                    autoComplete={
                      field.key === 'name'
                        ? 'name'
                        : field.type === 'email'
                          ? 'email'
                          : field.type === 'password'
                            ? mode === 'login'
                              ? 'current-password'
                              : 'new-password'
                            : 'off'
                    }
                    minLength={field.type === 'password' && mode !== 'login' ? 8 : undefined}
                    className="min-h-[44px] w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm placeholder:text-stone-400 focus:border-emerald-600 focus:outline-none dark:border-stone-700 dark:bg-[#232725] dark:text-stone-100 transition-colors"
                    value={values[field.key]}
                    onChange={(event) => update(field.key, event.target.value)}
                  />
                  {field.type === 'password' && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 cursor-pointer"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  )}
                </div>
              )}
            </label>
          ))}

          {screen.fields.some((field) => field.type === 'password') && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 font-medium"
              >
                {showPassword ? 'Hide password' : 'Show password'}
              </button>
            </div>
          )}

          <Button type="submit" disabled={busy} className="w-full mt-2">
            {busy ? 'Please wait…' : screen.button}
          </Button>
        </form>
      )}

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-rose-200 bg-rose-50/90 p-3.5 text-sm font-medium text-rose-800 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-300"
        >
          {error}
        </div>
      )}

      {notice && (
        <p
          role="status"
          className="rounded-xl border border-emerald-200 bg-emerald-50/90 p-3.5 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300"
        >
          {notice}
        </p>
      )}

      {unverified && (
        <Button
          variant="outline"
          disabled={busy}
          className="w-full"
          onClick={() => state.submit(true)}
        >
          Resend verification link
        </Button>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-sm">
        {mode !== 'login' && (
          <Link
            to="/login"
            className="text-[var(--accent-emerald)] font-semibold hover:underline dark:text-[var(--accent-emerald)]"
          >
            Sign in
          </Link>
        )}
        {mode !== 'register' && (
          <Link
            to="/register"
            className="text-[var(--accent-emerald)] font-semibold hover:underline dark:text-[var(--accent-emerald)]"
          >
            Create account
          </Link>
        )}
        {['login', 'reset'].includes(mode) && (
          <Link
            to="/forgot-password"
            className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 text-xs hover:underline"
          >
            Forgot password?
          </Link>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400 dark:text-stone-500 pt-1">
        <Link to="/terms" className="hover:underline">
          Terms of service
        </Link>
        <span>·</span>
        <Link to="/privacy" className="hover:underline">
          Privacy policy
        </Link>
      </div>
    </Card>
  );
}
