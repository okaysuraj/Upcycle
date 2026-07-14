import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BarChart3, CheckSquare, Trash2, Building, Settings } from 'lucide-react';

export default function StaffLayout() {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  
  if (!user || user.role !== 'staff') {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-black text-white">Upcycle Staff</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/staff" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <BarChart3 size={20} /> Analytics
          </Link>
          <Link to="/staff/tasks" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <CheckSquare size={20} /> Approvals
          </Link>
          <Link to="/staff/waste" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <Trash2 size={20} /> Waste Ops
          </Link>
          <Link to="/staff/facilities" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <Building size={20} /> Facilities
          </Link>
          <Link to="/staff/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}