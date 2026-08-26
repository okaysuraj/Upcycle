import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthLayout() {
  const { user, firebaseUser, loading } = useAuth();
  
  if (loading) return null;
  
  if (user) {
    // Navigate based on Postgres role
    if (user.role === 'PLATFORM_ADMIN') return <Navigate to="/admin" replace />;
    if (user.role === 'VENDOR') return <Navigate to="/vendor" replace />;
    return <Navigate to="/student" replace />; // Default fallback
  }

  // If they are in Firebase but NO Postgres user yet (maybe email unverified)
  // we let them stay on auth pages to see messages, or we handle it in context.

  return (
    <div className="min-h-screen bg-[#f4faff] text-[#0d1e25] flex flex-col items-center justify-between relative overflow-hidden font-['Hanken_Grotesk',sans-serif]">
      {/* Atmospheric Background Animation */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#006d3e]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3c6842]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <main className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[120px] flex items-center justify-center min-h-[calc(100vh-80px)] py-12">
        <Outlet />
      </main>

      {/* Footer Links */}
      <footer className="w-full py-5 px-6 lg:px-[120px] flex flex-col md:flex-row justify-between items-center gap-4 relative z-20 border-t border-[#bec9be]/20 bg-[#f4faff]/80 backdrop-blur-sm">
        <p className="text-xs text-[#6f7a70] font-medium">© 2024 Upcycle Municipal Solutions. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <Link to="/privacy" className="text-xs text-[#3f4941] hover:text-[#00522d] transition-colors font-medium">Privacy Policy</Link>
          <Link to="/terms" className="text-xs text-[#3f4941] hover:text-[#00522d] transition-colors font-medium">Terms of Service</Link>
          <Link to="/accessibility" className="text-xs text-[#3f4941] hover:text-[#00522d] transition-colors font-medium">Accessibility</Link>
        </div>
      </footer>
    </div>
  );
}