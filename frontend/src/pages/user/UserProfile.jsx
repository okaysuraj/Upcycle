import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function UserProfile() {
  const { user, logout, authFetch } = useAuth();
  const navigate = useNavigate();
  const [badges, setBadges] = useState([
    { name: 'Net-Zero Pioneer', icon: 'stars', level: 'Gold' },
    { name: 'Waste Warrior', icon: 'recycling', level: 'Silver' },
    { name: 'Water Steward', icon: 'water_drop', level: 'Bronze' }
  ]);

  useEffect(() => {
    if (user?.id) {
      authFetch(`/gamification/badges/${user.id}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) setBadges(data);
        })
        .catch(console.error);
    }
  }, [user?.id, authFetch]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#bec9be]/30">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-[32px] overflow-hidden border-4 border-white shadow-xl bg-[#dff1fb] flex items-center justify-center text-[#00522d]">
              <span className="material-symbols-outlined text-6xl">account_circle</span>
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 bg-[#2eb872] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md border-2 border-white text-[10px] font-bold">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span>Active</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] leading-tight">
                {user?.name || 'Alex River'}
              </h1>
              <span className="bg-[#dff1fb] text-[#00522d] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {user?.role || 'Campus Lead'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#556158] flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-base text-[#00522d]">location_on</span> 
              <span>Central Campus • Portland, Oregon</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            to="/settings/account" 
            className="px-5 py-2.5 border border-[#bec9be]/50 text-[#0d1e25] font-bold hover:bg-[#f4faff] transition-colors rounded-full flex items-center gap-1.5 text-xs shadow-sm"
          >
            <span className="material-symbols-outlined text-base">settings</span>
            <span>Account Settings</span>
          </Link>
          <button 
            type="button"
            onClick={handleLogout} 
            className="px-5 py-2.5 bg-[#ba1a1a] hover:bg-[#93000a] text-white font-bold transition-all rounded-full flex items-center gap-1.5 text-xs shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Sustainability Impact Section (8 Cols) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-[#bec9be]/20">
            <h2 className="text-xl font-bold text-[#0d1e25] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00522d]">analytics</span> 
              <span>Verified Sustainability Impact</span>
            </h2>
            <span className="text-xs font-bold text-[#00522d] bg-[#dff1fb] px-3 py-1 rounded-full">
              Annual Portfolio
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#f4faff] p-4 rounded-2xl border border-[#bec9be]/30 text-center space-y-1">
              <p className="text-[10px] font-bold text-[#556158] uppercase">Carbon Offset</p>
              <p className="text-2xl font-bold text-[#00522d]">12.4 <span className="text-xs font-normal">tCO₂e</span></p>
            </div>
            <div className="bg-[#f4faff] p-4 rounded-2xl border border-[#bec9be]/30 text-center space-y-1">
              <p className="text-[10px] font-bold text-[#556158] uppercase">Waste Diverted</p>
              <p className="text-2xl font-bold text-[#24502c]">85%</p>
            </div>
            <div className="bg-[#f4faff] p-4 rounded-2xl border border-[#bec9be]/30 text-center space-y-1">
              <p className="text-[10px] font-bold text-[#556158] uppercase">Clean Energy</p>
              <p className="text-2xl font-bold text-[#00522d]">9.8 <span className="text-xs font-normal">MWh</span></p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 space-y-3">
            <h4 className="text-xs font-bold text-[#0d1e25] uppercase tracking-wider">Campus Target Trajectory</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#556158]">Zero Waste Campus Goal</span>
                <span className="text-[#00522d]">85% of 100% Target</span>
              </div>
              <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-[#00522d] w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Recognition (4 Cols) */}
        <section className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#0d1e25] pb-3 border-b border-[#bec9be]/20">Earned Accreditations</h3>
            <div className="space-y-3 pt-2">
              {badges.map((b, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 text-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">{b.icon || 'military_tech'}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d1e25]">{b.name}</h4>
                    <p className="text-[10px] text-[#556158]">Rank: {b.level || 'Verified'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/achievements"
            className="w-full py-2.5 bg-[#dff1fb] text-[#00522d] rounded-full text-xs font-bold text-center block hover:bg-[#9cf6ba] transition-all"
          >
            View Complete Showcase →
          </Link>
        </section>
      </div>
    </div>
  );
}
