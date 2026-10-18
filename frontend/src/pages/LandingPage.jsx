import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../utils/authFetch';
import { fetchWithTimeout } from '../../../shared/request.mjs';

export default function LandingPage() {
  const { user, firebaseUser } = useAuth();
  const isAuthenticated = Boolean(user || firebaseUser);

  let dashboardPath = '/student';
  const role = user?.role;
  if (role === 'ADMIN' || role === 'PLATFORM_ADMIN' || role === 'CAMPUS_ADMIN') {
    dashboardPath = '/admin';
  } else if (role === 'VENDOR') {
    dashboardPath = '/vendor';
  } else if (role === 'STAFF' || role === 'WASTE_STAFF') {
    dashboardPath = '/staff/facilities';
  }

  const [campusActivity, setCampusActivity] = useState([]);
  const [activityError, setActivityError] = useState('');
  const [activityLoading, setActivityLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetchWithTimeout(`${API_BASE_URL}/waste/public-activity`);
        if (!res.ok) throw new Error('Recent activity could not be loaded.');
        const logs = await res.json();
        if (!Array.isArray(logs)) throw new Error('Recent activity could not be loaded.');
        setCampusActivity(
          logs.map((log) => ({
            id: log.id,
            time: new Date(log.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            location: log.campus?.name || 'Campus not specified',
            category: (log.category || 'General').replace('_', ' '),
            amount: `${log.quantityKg} kg`,
            status: 'Recorded',
          }))
        );
        setActivityError('');
      } catch {
        setCampusActivity([]);
        setActivityError('Recent activity is unavailable. Please try again shortly.');
      } finally {
        setActivityLoading(false);
      }
    };
    fetchActivity();
    const interval = setInterval(fetchActivity, 15000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: '01',
      title: 'Campus Bins',
      tag: 'Operations',
      desc: 'Review recorded bin fill levels and plan collections when readings are available.',
      stat: 'Track',
      statLabel: 'BIN READINGS',
      icon: 'sensors',
    },
    {
      id: '02',
      title: 'Collection Tasks',
      tag: 'Teamwork',
      desc: 'Assign collection work and follow its recorded status across your campus.',
      stat: 'Plan',
      statLabel: 'TEAM WORK',
      icon: 'route',
    },
    {
      id: '03',
      title: 'Waste and Impact Reports',
      tag: 'Reporting',
      desc: 'Explore recorded waste totals and clearly labeled impact estimates for your own reporting.',
      stat: 'Review',
      statLabel: 'RECORDED DATA',
      icon: 'verified',
    },
    {
      id: '04',
      title: 'Materials Exchange Market',
      tag: 'Circular Economy',
      desc: 'List reusable materials and review marketplace requests and quotes where your role allows.',
      stat: 'Connect',
      statLabel: 'MATERIALS EXCHANGE',
      icon: 'sync_alt',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-[#121413] text-stone-900 dark:text-stone-100 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Serene Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1a1d1b]/80 backdrop-blur-md border-b border-stone-200/70 dark:border-stone-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[22px]">eco</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Upcycle
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
            <a
              href="#features"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#activity"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              Campus Activity
            </a>
            <a
              href="#metrics"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              Impact
            </a>
            <Link
              to="/marketplace"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              Marketplace
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {isAuthenticated ? (
              <Link
                to={dashboardPath}
                className="px-4.5 py-2 text-sm font-medium bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center gap-1.5"
              >
                <span>Go to Dashboard</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4.5 py-2 text-sm font-medium bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl shadow-sm transition-all active:scale-[0.98]"
                >
                  Join Your Campus
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 px-4 sm:px-6 relative overflow-hidden ambient-hero-glow">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center">
          {/* Friendly Status Pill */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built for campus teams</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1] mb-6">
            Campus recycling, <br />
            <span className="text-emerald-700 dark:text-emerald-400">thoughtfully simplified.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed mb-10">
            A shared workspace connecting students, facilities teams, and vendors to record waste
            and keep useful materials in circulation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={isAuthenticated ? dashboardPath : '/register'}
              className="px-6 py-3.5 text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl shadow-md transition-all active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>{isAuthenticated ? 'Go to Dashboard' : 'Get Started with Upcycle'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              to="/marketplace"
              className="px-6 py-3.5 text-sm font-semibold bg-white dark:bg-[#1a1d1b] text-stone-800 dark:text-stone-200 border border-stone-200/90 dark:border-stone-700/80 rounded-xl shadow-sm hover:bg-stone-50 dark:hover:bg-stone-800 transition-all active:scale-[0.98]"
            >
              Explore Materials Exchange
            </Link>
          </div>
        </div>
      </section>

      {/* Serene Metric Ribbon */}
      <section
        id="metrics"
        className="border-y border-stone-200/70 dark:border-stone-800/70 bg-white dark:bg-[#1a1d1b] py-12 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100 dark:divide-stone-800">
          <div className="pt-4 md:pt-0">
            <span className="text-xs font-semibold text-stone-400 dark:text-stone-500 normal-case tracking-normal block mb-2">
              Diverted from Landfills
            </span>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              — <span className="text-lg font-medium text-stone-500">Tons</span>
            </div>
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1.5 inline-block">
              See your recorded totals after sign-in
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="text-xs font-semibold text-stone-400 dark:text-stone-500 normal-case tracking-normal block mb-2">
              Active Campuses
            </span>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              — <span className="text-lg font-medium text-stone-500">Campuses</span>
            </div>
            <span className="text-xs text-stone-500 font-medium mt-1.5 inline-block">
              Live totals are available after sign-in
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="text-xs font-semibold text-stone-400 dark:text-stone-500 normal-case tracking-normal block mb-2">
              Sorting Purity
            </span>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              —
            </div>
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1.5 inline-block">
              No verified purity data available
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="text-xs font-semibold text-stone-400 dark:text-stone-500 normal-case tracking-normal block mb-2">
              CO₂e Saved
            </span>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              — <span className="text-lg font-medium text-stone-500">MT</span>
            </div>
            <span className="text-xs text-stone-500 font-medium mt-1.5 inline-block">
              Estimates appear in authenticated reports
            </span>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400 block mb-2">
            Engineered for Campuses
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Practical tools for campus waste work.
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-3">
            Designed for ease of use by residence halls, green clubs, dining staff, and facilities
            teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-[#1a1d1b] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.06)] hover:border-stone-300 dark:hover:border-stone-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">{feature.icon}</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-full">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-8">
                  {feature.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60 flex items-baseline justify-between">
                <span className="text-xs font-medium text-stone-400 dark:text-stone-500">
                  {feature.statLabel}
                </span>
                <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                  {feature.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Peaceful Live Campus Activity Feed */}
      <section
        id="activity"
        className="border-t border-stone-200/70 dark:border-stone-800/70 bg-stone-50/60 dark:bg-[#151816] py-18 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold normal-case tracking-normal text-emerald-800 dark:text-emerald-300">
                  Campus Recycling Pulse
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Recent Campus Activity
              </h3>
            </div>
            <span className="text-xs text-stone-500 dark:text-stone-400 hidden sm:inline">
              Recent recorded activity
            </span>
          </div>

          <div className="bg-white dark:bg-[#1a1d1b] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl overflow-hidden shadow-sm">
            <div className="divide-y divide-stone-100 dark:divide-stone-800/60">
              {activityError ? (
                <div
                  role="alert"
                  className="p-8 text-center text-sm text-red-700 dark:text-red-300"
                >
                  {activityError}
                </div>
              ) : activityLoading ? (
                <div role="status" className="p-8 text-center text-sm">
                  Loading recorded activity...
                </div>
              ) : campusActivity.length === 0 ? (
                <div className="p-8 text-center text-xs font-sans text-stone-500 normal-case">
                  No recent public waste activity has been recorded.
                </div>
              ) : (
                campusActivity.map((act) => (
                  <div
                    key={act.id}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-50/70 dark:hover:bg-stone-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">recycling</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-stone-900 dark:text-stone-100">
                          {act.location}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                          {act.category} ·{' '}
                          <span className="font-medium text-emerald-700 dark:text-emerald-400">
                            {act.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4 pl-12 sm:pl-0">
                      <span className="text-xs font-medium px-2.5 py-0.5 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                        {act.status}
                      </span>
                      <span className="text-xs text-stone-400">{act.time}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-[#1a1d1b] border-t border-stone-200/70 dark:border-stone-800/70">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
            <span className="material-symbols-outlined text-[26px]">compost</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-4">
            Ready to cultivate a zero-waste campus?
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 max-w-xl mx-auto mb-8">
            Connect students, facility managers, and local recyclers into one unified eco-network.
            Fast onboarding with no complex hardware overhead.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to={isAuthenticated ? dashboardPath : '/register'}
              className="px-6 py-3.5 text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started with Upcycle'}
            </Link>
            <Link
              to="/support"
              className="px-6 py-3.5 text-sm font-semibold bg-stone-100 hover:bg-stone-200/80 text-stone-800 dark:bg-stone-800 dark:text-stone-200 rounded-xl transition-all"
            >
              Talk to Our Campus Team
            </Link>
          </div>
        </div>
      </section>

      {/* Serene Minimal Footer */}
      <footer className="py-10 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-700 dark:text-stone-300">Upcycle</span>
          <span>© 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Terms
          </Link>
          <Link
            to="/support"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Support
          </Link>
          <Link
            to="/admin"
            className="hover:text-emerald-700 dark:hover:text-white transition-colors"
          >
            Admin Console
          </Link>
        </div>
      </footer>
    </div>
  );
}
