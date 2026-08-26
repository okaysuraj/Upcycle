import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AccountDeactivation() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleDeactivate = async () => {
    setIsDeactivating(true);
    setTimeout(async () => {
      await logout();
      navigate('/login');
    }, 800);
  };

  return (
    <div className="w-full max-w-[900px] mx-auto py-6 space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Hero Section */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ffdad6] text-[#ba1a1a] shadow-sm">
          <span className="material-symbols-outlined text-3xl">person_off</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1e25]">We're sorry to see you go</h2>
        <p className="text-xs sm:text-sm text-[#556158] max-w-lg mx-auto leading-relaxed">
          Deactivating your account is a permanent administrative step. Before you leave, review your campus contributions.
        </p>
      </div>

      {/* Bento Impact Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Total Footprint (7 Cols) */}
        <div className="col-span-12 md:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#556158]">Total Footprint Reduced</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-bold text-[#00522d]">1,248</span>
              <span className="text-lg font-bold text-[#556158]">kg CO₂e</span>
            </div>
            <p className="text-xs text-[#556158] mt-2 leading-relaxed">
              Equivalent to preserving 62 mature campus trees this academic year.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[140px] text-[#00522d]">forest</span>
          </div>
        </div>

        {/* Active Logs (5 Cols) */}
        <div className="col-span-12 md:col-span-5 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm flex flex-col justify-center items-center text-center space-y-2">
          <div className="w-14 h-14 bg-[#dff1fb] rounded-2xl flex items-center justify-center text-[#00522d] shadow-sm">
            <span className="material-symbols-outlined text-2xl">inventory</span>
          </div>
          <h4 className="text-2xl font-bold text-[#0d1e25]">420 Active Logs</h4>
          <p className="text-xs text-[#556158]">Telemetry & circular sorting submissions</p>
        </div>
      </div>

      {/* What Happens Next Card */}
      <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-5">
        <h3 className="text-lg font-bold text-[#0d1e25] pb-2 border-b border-[#bec9be]/20">What happens next?</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1">
            <p className="font-bold text-[#0d1e25]">Profile Hidden</p>
            <p className="text-[11px] text-[#556158]">Your campus achievements and leaderboard rankings will be permanently removed.</p>
          </div>
          <div className="p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1">
            <p className="font-bold text-[#0d1e25]">Active Listings Paused</p>
            <p className="text-[11px] text-[#556158]">Any open marketplace proposals or swap requests will be cancelled.</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => navigate('/settings/account')}
          className="w-full sm:w-auto px-6 py-3 border border-[#bec9be]/40 text-[#0d1e25] rounded-full text-xs font-bold hover:bg-[#f4faff] transition-colors"
        >
          Nevermind, Keep My Account
        </button>
        <button
          type="button"
          onClick={handleDeactivate}
          disabled={isDeactivating}
          className="w-full sm:w-auto px-8 py-3 bg-[#ba1a1a] hover:bg-[#93000a] text-white rounded-full text-xs font-bold shadow-md transition-all cursor-pointer disabled:opacity-50"
        >
          {isDeactivating ? 'Deactivating...' : 'Confirm Account Deactivation'}
        </button>
      </div>
    </div>
  );
}
