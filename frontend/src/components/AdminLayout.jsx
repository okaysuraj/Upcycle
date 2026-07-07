import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Leaf, Users, Trash2, Home, ShoppingBag, Calendar, BarChart3, Settings } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Campuses', href: '/admin/campuses', icon: Leaf },
    { name: 'Users & Roles', href: '/admin/users', icon: Users },
    { name: 'Waste Mgmt', href: '/admin/waste', icon: Trash2 },
    { name: 'Marketplace', href: '/admin/marketplace', icon: ShoppingBag },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'ESG Reports', href: '/admin/reports', icon: BarChart3 },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Leaf className="w-8 h-8 text-emerald-600 mr-2" />
          <span className="text-xl font-bold text-gray-900">Upcycle</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Platform Admin</p>
              <p className="text-xs text-gray-500">admin@upcycle.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            {navigation.find(n => n.href === location.pathname)?.name || 'Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <span className="sr-only">Notifications</span>
              {/* Notification Bell Icon */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
