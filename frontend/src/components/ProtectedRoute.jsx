import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user, firebaseUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafaf8] dark:bg-[#121413] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 rounded-2xl flex items-center justify-center animate-pulse border border-emerald-200/60">
          <span className="material-symbols-outlined text-[22px]">eco</span>
        </div>
        <p className="text-xs text-stone-500 font-medium">Verifying campus session...</p>
      </div>
    );
  }

  // Not authenticated or email not verified
  if (!firebaseUser || !firebaseUser.emailVerified || !user) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`}
        replace
      />
    );
  }

  const platform = ['ADMIN', 'PLATFORM_ADMIN'];
  const operations = [...platform, 'CAMPUS_ADMIN', 'STAFF', 'WASTE_STAFF'];
  const protectedAdmin =
    /^\/(admin(?:$|\/(?:users|moderation|marketplace-moderation|features|broadcasts|platform-settings|role-permissions|roles))|platform_admin|users$)/;
  const required =
    allowedRoles ||
    (protectedAdmin.test(location.pathname)
      ? platform
      : location.pathname.startsWith('/staff')
        ? operations
        : null);
  // Route authorization complements server-side checks.
  if (required && !required.includes(user.role)) {
    // Redirect to user's assigned dashboard
    const role = user.role;
    if (role === 'PLATFORM_ADMIN' || role === 'ADMIN') {
      return <Navigate to="/admin" replace />;
    } else if (role === 'VENDOR') {
      return <Navigate to="/vendor" replace />;
    } else if (role === 'WASTE_STAFF' || role === 'STAFF' || role === 'CAMPUS_ADMIN') {
      return <Navigate to="/staff/facilities" replace />;
    } else {
      return <Navigate to="/student" replace />;
    }
  }

  return children ? children : <Outlet />;
}
