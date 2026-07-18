import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-surface-ice text-on-surface flex flex-col items-center justify-center relative overflow-hidden">
      {/* Atmospheric Background Animation from design system */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-container/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-tertiary-container/10 rounded-full blur-3xl opacity-60"></div>
      
      <main className="relative z-10 w-full max-w-[1440px] px-margin-desktop flex items-center justify-center min-h-screen py-xl">
        <Outlet />
      </main>
    </div>
  );
}