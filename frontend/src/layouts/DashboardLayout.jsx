import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/auth/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: `/${user?.role?.toLowerCase() || 'student'}` },
    { name: 'Sustainability', icon: 'analytics', path: '/sustainability' },
    { name: 'Community', icon: 'group', path: '/community' },
    { name: 'Notifications', icon: 'notifications', path: '/notifications' },
  ];

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-hidden">
      {/* Side Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col h-screen sticky left-0 top-0 w-72 bg-surface-container-lowest border-r border-outline-variant/20 py-lg space-y-base z-50">
        <div className="px-md mb-xl flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <span className="font-display text-headline-md text-primary">Upcycle</span>
        </div>
        
        <nav className="flex-1 flex flex-col space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 mx-2 cursor-pointer transition-all ${
                  isActive 
                    ? 'bg-secondary-container text-on-secondary-container' 
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                    {item.icon}
                  </span>
                  <span className="font-body-md text-body-md">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-md py-4 mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 text-error hover:bg-error-container/50 rounded-xl px-4 py-3 transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 h-screen overflow-y-auto scroll-hide relative bg-surface-ice">
        {/* Top App Bar */}
        <header className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full sticky top-0 bg-surface/80 backdrop-blur-md z-40">
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface capitalize">
            {user?.role?.replace('_', ' ').toLowerCase() || 'Welcome'}
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-secondary-container/50 transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">search</span>
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-primary-container flex items-center justify-center">
              <span className="font-bold text-primary">{user?.name?.charAt(0) || 'U'}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="px-margin-mobile md:px-margin-desktop py-md space-y-lg max-w-[1440px] mx-auto pb-xl">
          <Outlet />
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 border-t border-outline-variant/30 bg-surface md:hidden z-50 shadow-sm pb-safe">
        {navItems.slice(0, 4).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                isActive ? 'text-primary' : 'text-on-surface-variant'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {item.icon}
                </span>
                <span className="font-label-sm text-[10px] mt-1">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
