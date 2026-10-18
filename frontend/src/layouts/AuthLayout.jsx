import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';

export default function AuthLayout() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafaf8] dark:bg-[#121413]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
          <p role="status" className="text-sm font-medium text-stone-500 dark:text-stone-400">
            Connecting to Upcycle…
          </p>
        </div>
      </div>
    );
  }

  if (user && ['/login', '/register', '/onboarding', '/choose-role'].includes(location.pathname)) {
    return <Navigate to="/features/overview" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#fafaf8] text-[#191c1a] dark:bg-[#121413] dark:text-[#f4f4f0] relative overflow-hidden">
      {/* Subtle Ambient Background Mesh */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-emerald-600/5 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-stone-200/80 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-stone-800 dark:bg-[#1a1d1b]/80">
        <Link
          to={user ? '/features/overview' : '/'}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 group"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[18px]">eco</span>
          </div>
          <span>Upcycle</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex flex-1 items-center justify-center p-5 sm:p-8">
        <div className="w-full max-w-[480px]">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-200/60 py-4 text-center text-xs text-stone-500 dark:border-stone-800/60">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/terms"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <span>·</span>
          <Link
            to="/privacy"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <span>·</span>
          <Link
            to="/support"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Support
          </Link>
        </div>
      </footer>
    </div>
  );
}
