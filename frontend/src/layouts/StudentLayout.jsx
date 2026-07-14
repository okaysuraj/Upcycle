import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, Ticket, ShoppingBag, Trophy, User } from 'lucide-react';

export default function StudentLayout() {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  
  if (!user || user.role !== 'student') {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-black text-emerald-600">Upcycle Student</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/student" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-medium transition-colors">
            <Home size={20} /> Dashboard
          </Link>
          <Link to="/student/events" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-medium transition-colors">
            <Ticket size={20} /> Events
          </Link>
          <Link to="/student/market" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-medium transition-colors">
            <ShoppingBag size={20} /> Marketplace
          </Link>
          <Link to="/student/rank" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-medium transition-colors">
            <Trophy size={20} /> Leaderboard
          </Link>
          <Link to="/student/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-medium transition-colors">
            <User size={20} /> Profile
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