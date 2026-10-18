// Show navigation for the signed-in role and render the active page.
import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { catalog, permitted } from '../../../shared/feature-client.mjs';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ThemeToggle';

export default function WorkspaceLayout() {
  const auth = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const available = catalog.filter((feature) => permitted(feature, auth.user));
  const groups = Array.from(new Set(available.map((feature) => feature.group)));

  const navigation = (
    <div className="space-y-6">
      {groups.map((group) => (
        <section key={group}>
          <p className="mb-2.5 px-3 text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
            {group}
          </p>
          <nav className="space-y-1" aria-label={group}>
            {available
              .filter((feature) => feature.group === group)
              .map((feature) => (
                <NavLink
                  key={feature.key}
                  to={`/features/${feature.key}`}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-150 ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 font-semibold text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                        : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100/80 dark:hover:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100'
                    }`
                  }
                >
                  <span className="truncate">{feature.title}</span>
                </NavLink>
              ))}
          </nav>
        </section>
      ))}

      <section className="pt-4 border-t border-stone-200/80 dark:border-stone-800 space-y-2">
        {auth.user?.role === 'VENDOR' && (
          <Link
            to="/kyc-verification"
            onClick={() => setMenu(false)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[var(--accent-emerald)] dark:text-[var(--accent-emerald)] hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-colors font-medium"
          >
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Vendor verification</span>
          </Link>
        )}
        <Link
          to="/forgot-password"
          onClick={() => setMenu(false)}
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100/60 dark:hover:bg-stone-800/40 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">lock_reset</span>
          <span>Password reset</span>
        </Link>
      </section>
    </div>
  );

  const userInitials = auth.user?.name
    ? auth.user.name
        .split(' ')
        .map((p) => p[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#191c1a] dark:bg-[#121413] dark:text-[#f4f4f0]">
      {/* Sidebar for Desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-stone-200/80 bg-white dark:border-stone-800 dark:bg-[#1a1d1b] lg:flex">
        <div className="p-6 pb-4 flex items-center justify-between border-b border-stone-100 dark:border-stone-800/60">
          <Link to="/features/overview" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[18px]">eco</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Upcycle
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-5">{navigation}</div>

        {/* User Mini Card in Sidebar */}
        {auth.user && (
          <div className="p-4 border-t border-stone-100 dark:border-stone-800/60">
            <button
              type="button"
              onClick={() => setMenu(true)}
              className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center shrink-0">
                {userInitials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold truncate text-stone-900 dark:text-stone-100">
                  {auth.user?.name}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate capitalize">
                  {auth.user?.role?.toLowerCase().replaceAll('_', ' ')}
                </p>
              </div>
              <span className="material-symbols-outlined text-[18px] text-stone-400">
                more_vert
              </span>
            </button>
          </div>
        )}
      </aside>

      {/* Main Container */}
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-20 flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 bg-white/90 px-5 py-3 backdrop-blur-md dark:border-stone-800 dark:bg-[#1a1d1b]/90">
          <Link
            to="/features/overview"
            className="flex items-center gap-2 text-xl font-bold text-[var(--accent-emerald)] dark:text-[var(--accent-emerald)] lg:hidden"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">eco</span>
            </div>
            <span>Upcycle</span>
          </Link>

          {/* Search Bar */}
          <form
            className="hidden min-w-0 max-w-sm flex-1 items-center gap-2 sm:flex"
            onSubmit={(event) => {
              event.preventDefault();
              navigate(`/features/search?q=${encodeURIComponent(query)}`);
            }}
          >
            <div className="relative flex-1">
              <span className="absolute left-3 text-stone-400 dark:text-stone-500 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-[18px]">search</span>
              </span>
              <input
                aria-label="Search workspace"
                className="min-h-10 w-full rounded-xl border border-stone-200/90 bg-stone-50/70 pl-9 pr-3 text-sm focus:border-emerald-600 focus:bg-white focus:outline-none dark:border-stone-700/80 dark:bg-stone-900/60 dark:focus:bg-stone-900 transition-colors"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search workspace…"
              />
            </div>
            <Button type="submit" variant="outline" size="sm">
              Search
            </Button>
          </form>

          {/* Right Header Actions */}
          <div className="ml-auto flex flex-wrap items-center gap-2.5">
            <Link
              to="/features/search"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-stone-200/80 dark:border-stone-800 text-stone-600 dark:text-stone-300"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-[19px]">search</span>
            </Link>

            <Link
              to="/features/notifications"
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-white/80 dark:bg-[#1a1d1b]/80 text-stone-600 dark:text-stone-300 hover:bg-stone-100/80 dark:hover:bg-stone-800/80 transition-colors shadow-xs"
              title="Notifications"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined text-[19px]">notifications</span>
            </Link>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenu(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-white/80 dark:bg-[#1a1d1b]/80 hover:bg-stone-100/80 dark:hover:bg-stone-800/80 transition-colors text-sm font-medium shadow-xs"
              aria-label="Open workspace menu"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-semibold text-[10px] flex items-center justify-center shrink-0">
                {userInitials}
              </div>
              <span className="hidden sm:inline text-xs font-semibold">Menu</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="dashboard-content min-w-0 px-5 py-6 pb-28 sm:px-8 lg:pb-12">
          <Outlet />
        </main>
      </div>

      {/* Mobile Primary Bottom Bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-stone-200/80 bg-white/95 px-2 py-1.5 backdrop-blur-md dark:border-stone-800 dark:bg-[#1a1d1b]/95 lg:hidden shadow-lg"
      >
        {[
          { key: 'overview', icon: 'dashboard', label: 'Overview' },
          { key: 'waste', icon: 'recycling', label: 'Waste' },
          { key: 'events', icon: 'calendar_today', label: 'Events' },
          { key: 'profile', icon: 'person', label: 'Profile' },
        ].map(({ key, icon, label }) => {
          const title = catalog.find((feature) => feature.key === key)?.title || label;
          return (
            <NavLink
              key={key}
              to={`/features/${key}`}
              className={({ isActive }) =>
                `flex min-h-12 flex-col items-center justify-center px-3 py-1 rounded-xl text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
              <span className="mt-0.5 text-[11px] leading-tight">{title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Workspace Menu Modal */}
      <Modal isOpen={menu} onClose={() => setMenu(false)} title="Your workspace">
        <div className="space-y-6">
          <div className="flex items-center gap-3.5 p-3.5 bg-stone-50 dark:bg-[#232725] rounded-xl border border-stone-200/60 dark:border-stone-800">
            <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
              {userInitials}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                {auth.user?.name}
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 capitalize">
                {auth.user?.role?.toLowerCase().replaceAll('_', ' ')}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Appearance
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' },
              ].map(({ value, label }) => (
                <Button
                  key={value}
                  variant={theme === value ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setTheme(value)}
                >
                  {label}
                  {theme === value ? ' ✓' : ''}
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Navigation
            </p>
            {navigation}
          </div>

          <div className="pt-2 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                void auth
                  .logout()
                  .then(() => navigate('/login'))
                  .catch((cause) => setError(cause.message));
              }}
            >
              Sign out
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setMenu(false)}>
              Close
            </Button>
          </div>

          {error && (
            <p role="alert" className="text-sm text-rose-700 dark:text-rose-400">
              {error}
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
}
