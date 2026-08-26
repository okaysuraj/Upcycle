import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NotificationDrawer from '../components/NotificationDrawer';

export default function DashboardLayout() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const location = window.location.pathname;
  let inferredRole = 'STUDENT';
  if (location.startsWith('/admin')) inferredRole = 'ADMIN';
  else if (location.startsWith('/vendor')) inferredRole = 'VENDOR';
  else if (location.startsWith('/staff')) inferredRole = 'STAFF';

  const currentUser = user || {
    name: 'Eco Professional',
    email: 'eco.coordinator@upcycle.org',
    role: inferredRole
  };

  const handleLogout = async () => {
    if (user) await logout();
    navigate('/login');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Comprehensive role-aware navigation configuration
  const role = currentUser?.role || 'STUDENT';

  let navItems = [];
  if (role === 'ADMIN' || role === 'PLATFORM_ADMIN') {
    navItems = [
      { name: 'Overview', icon: 'dashboard', path: '/admin' },
      { name: 'Waste Analytics', icon: 'analytics', path: '/operations/waste' },
      { name: 'ESG & Carbon', icon: 'co2', path: '/sustainability' },
      { name: 'Campus Operations', icon: 'corporate_fare', path: '/operations/buildings' },
      { name: 'Marketplace Admin', icon: 'storefront', path: '/admin/marketplace-moderation' },
      { name: 'Community Hub', icon: 'groups', path: '/community' },
      { name: 'User Management', icon: 'manage_accounts', path: '/admin/users' },
    ];
  } else if (role === 'VENDOR') {
    navItems = [
      { name: 'Dashboard', icon: 'dashboard', path: '/vendor' },
      { name: 'Analytics', icon: 'query_stats', path: '/vendor/analytics' },
      { name: 'Supply Chain', icon: 'inventory_2', path: '/marketplace' },
      { name: 'Live Pickups', icon: 'local_shipping', path: '/operations/live-collection' },
      { name: 'Contracts & RFPs', icon: 'description', path: '/marketplace/quotes/compare' },
      { name: 'KYC Verification', icon: 'verified', path: '/kyc-verification' },
    ];
  } else if (role === 'STAFF') {
    navItems = [
      { name: 'Operations', icon: 'dashboard', path: '/staff/facilities' },
      { name: 'Smart Bins', icon: 'delete_sweep', path: '/staff/sensors' },
      { name: 'Task Dispatch', icon: 'task_alt', path: '/staff/tasks' },
      { name: 'Logistics Map', icon: 'route', path: '/operations/route-optimization' },
      { name: 'Maintenance', icon: 'build', path: '/staff/maintenance' },
      { name: 'Workforce', icon: 'badge', path: '/staff/directory' },
    ];
  } else {
    // Default Student / Volunteer / General Citizen
    navItems = [
      { name: 'Overview', icon: 'dashboard', path: '/student' },
      { name: 'Log Waste', icon: 'recycling', path: '/student/waste-logger' },
      { name: 'My Impact', icon: 'workspace_premium', path: '/student/impact' },
      { name: 'Events & Drives', icon: 'event', path: '/student/events' },
      { name: 'Green Clubs', icon: 'groups', path: '/student/organizations' },
      { name: 'Eco-Marketplace', icon: 'storefront', path: '/marketplace' },
      { name: 'Learning Hub', icon: 'school', path: '/education/learning-hub' },
    ];
  }

  return (
    <div className="bg-[#f4faff] text-[#0d1e25] min-h-screen flex overflow-hidden font-['Hanken_Grotesk',sans-serif]">
      {/* NavigationDrawer (The Anchor) */}
      <aside className="hidden md:flex flex-col h-screen sticky left-0 top-0 w-72 bg-white border-r border-[#bec9be]/30 py-6 space-y-4 z-50 shadow-sm">
        {/* Logo Branding */}
        <div className="px-6 mb-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00522d] rounded-xl flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#00522d] tracking-tight block leading-tight">Upcycle</span>
              <span className="text-[10px] font-bold text-[#556158] uppercase tracking-widest block">
                {role.replace('_', ' ')}
              </span>
            </div>
          </Link>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex flex-col space-y-1 px-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3.5 rounded-2xl px-4 py-3 cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#d9e6da] text-[#00522d] font-bold shadow-sm' 
                    : 'text-[#556158] hover:bg-[#e7f6ff]/70 hover:text-[#0d1e25] font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span 
                    className={`material-symbols-outlined text-[22px] ${isActive ? 'text-[#00522d]' : 'text-[#556158]'}`}
                    style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Goal / Plan Widget */}
        <div className="px-4 mt-auto">
          <div className="p-4 bg-[#e7f6ff] rounded-2xl border border-[#bec9be]/40">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider">
                {role === 'ADMIN' ? 'MUNICIPAL TARGET' : 'MONTHLY GOAL'}
              </span>
              <span className="text-xs font-bold text-[#00522d]">75%</span>
            </div>
            <div className="h-2 w-full bg-[#bec9be]/30 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-[#00522d] w-3/4 rounded-full transition-all"></div>
            </div>
            <p className="text-[11px] text-[#556158] leading-tight">
              1,240 kg waste diverted this cycle
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-3 pt-2 border-t border-[#bec9be]/20 space-y-1">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3.5 rounded-2xl px-4 py-2.5 transition-all text-xs font-semibold ${
                isActive ? 'bg-[#d9e6da] text-[#00522d]' : 'text-[#556158] hover:bg-[#e7f6ff]/50'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
            <span>Settings</span>
          </NavLink>
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3.5 rounded-2xl px-4 py-2.5 transition-all text-xs font-semibold text-[#ba1a1a] hover:bg-[#ffdad6]/60 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 h-screen overflow-y-auto relative bg-[#f4faff] flex flex-col">
        {/* Top App Bar (Sticky) */}
        <header className="flex justify-between items-center px-6 lg:px-10 h-16 w-full sticky top-0 bg-[#f4faff]/85 backdrop-blur-md z-40 border-b border-[#bec9be]/30">
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md mr-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#556158] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search eco-initiatives, logs, or metrics..."
                className="w-full bg-[#e7f6ff]/70 border border-[#bec9be]/40 rounded-full py-2 pl-10 pr-4 text-xs sm:text-sm text-[#0d1e25] focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
              />
            </div>
          </form>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full bg-white border border-[#bec9be]/30 hover:bg-[#e7f6ff] transition-all flex items-center justify-center text-[#556158] relative cursor-pointer shadow-sm"
              title="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>

            <Link 
              to="/support"
              className="w-10 h-10 rounded-full bg-white border border-[#bec9be]/30 hover:bg-[#e7f6ff] transition-all flex items-center justify-center text-[#556158] cursor-pointer shadow-sm"
              title="Help & Support"
            >
              <span className="material-symbols-outlined text-[20px]">help</span>
            </Link>

            {/* Profile Chip */}
            <Link 
              to="/profile"
              className="flex items-center gap-2.5 bg-white border border-[#bec9be]/30 pl-1.5 pr-3 py-1 rounded-full shadow-sm hover:bg-[#e7f6ff]/50 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#00522d] text-white flex items-center justify-center font-bold text-xs">
                {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <span className="text-xs font-semibold text-[#0d1e25] hidden sm:inline max-w-[120px] truncate">
                {currentUser?.name || currentUser?.email || 'My Profile'}
              </span>
            </Link>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1440px] w-full mx-auto pb-24 md:pb-8">
          <Outlet />
        </div>
      </main>

      {/* Notification Drawer */}
      <NotificationDrawer isOpen={showNotifications} onClose={() => setShowNotifications(false)} />

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-2 border-t border-[#bec9be]/30 bg-white/95 backdrop-blur-md md:hidden z-50 shadow-lg">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center p-1.5 rounded-xl transition-all ${
                isActive ? 'text-[#00522d] font-bold' : 'text-[#556158]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {item.icon}
                </span>
                <span className="text-[10px] mt-0.5">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
