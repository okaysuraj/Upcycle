import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';

export default function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="p-8 max-w-[1440px] mx-auto min-h-screen">
      {/* Profile Header */}
      <div className="mb-10 flex flex-col md:flex-row items-end gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-[32px] overflow-hidden border-4 border-white shadow-xl bg-gray-200 flex items-center justify-center">
             <span className="material-symbols-outlined text-gray-400 text-5xl">person</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#2eb872] text-white px-2 py-1 rounded-full flex items-center gap-1 shadow-md border-2 border-white">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="text-xs font-bold">Active</span>
          </div>
        </div>
        
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="font-display text-5xl font-bold text-on-background leading-tight">
              {user?.name || 'Alex River'}
            </h1>
            <span className="bg-[#d9e6da] text-[#5b675e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {user?.roleMetadata?.sustainabilityTrack || 'Eco Warrior'}
            </span>
          </div>
          <p className="text-lg text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">location_on</span> 
            {user?.roleMetadata?.pickupAddress?.split(',')[1]?.trim() || 'Portland, Oregon'} • {user?.roleMetadata?.position || 'Sustainability Coordinator'}
          </p>
        </div>

        <div className="flex gap-2 pb-2">
          <Link to="/edit-profile" className="px-6 py-2 border border-[#717973] text-primary font-bold hover:bg-[#edeeef] transition-colors rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined">edit</span>
            <span className="text-sm">Edit Profile</span>
          </Link>
          <button onClick={handleLogout} className="px-6 py-2 bg-[#ba1a1a] text-white font-bold hover:opacity-90 transition-opacity rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Sustainability Impact Section */}
        <section className="col-span-1 md:col-span-8 flex flex-col gap-4">
          <Card className="p-6 h-full flex flex-col gap-6 shadow-sm border border-[#bec9be]/30">
            <div className="flex justify-between items-center">
              <h2 className="font-display text-2xl font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span> Sustainability Impact
              </h2>
              <span className="text-sm font-bold text-primary cursor-pointer hover:underline">Monthly View</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#f4faff] p-3 rounded-xl border border-[#bec9be]/30 text-center">
                <p className="text-xs font-bold text-on-surface-variant opacity-70">Carbon Offset</p>
                <p className="font-display text-3xl font-bold text-primary">12.4 <span className="text-sm">tons</span></p>
              </div>
              <div className="bg-[#f4faff] p-3 rounded-xl border border-[#bec9be]/30 text-center">
                <p className="text-xs font-bold text-on-surface-variant opacity-70">Waste Diverted</p>
                <p className="font-display text-3xl font-bold text-[#556158]">85%</p>
              </div>
              <div className="bg-[#f4faff] p-3 rounded-xl border border-[#bec9be]/30 text-center">
                <p className="text-xs font-bold text-on-surface-variant opacity-70">Renewable energy</p>
                <p className="font-display text-3xl font-bold text-[#24502c]">9.8 <span className="text-sm">mWh</span></p>
              </div>
            </div>

            <div className="flex-1 min-h-[200px] relative rounded-2xl overflow-hidden bg-[#f3f4f5] p-6 border border-[#bec9be]/30">
              {/* Abstract Progress Visual */}
              <div className="flex flex-col gap-6 relative z-10">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold">Quarterly Goal: Tree Planting</span>
                    <span className="text-sm font-bold">75%</span>
                  </div>
                  <div className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full transition-all duration-1000"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold">Quarterly Goal: Solar Adoption</span>
                    <span className="text-sm font-bold">42%</span>
                  </div>
                  <div className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden">
                    <div className="h-full bg-[#24502c] w-[42%] rounded-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-on-surface-variant opacity-30 pointer-events-none">
                <span className="material-symbols-outlined text-[120px]">eco</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Achievements Section */}
        <section className="col-span-1 md:col-span-4 flex flex-col gap-4">
          <Card className="p-6 flex-1 shadow-sm border border-[#bec9be]/30">
            <h2 className="font-display text-2xl font-bold text-on-surface mb-6">Achievements</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center gap-1 p-3 bg-white/70 border border-[#a5d6a7]/30 rounded-xl text-center group cursor-help hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-primary text-[40px] group-hover:font-variation-[FILL_1]">workspace_premium</span>
                <span className="text-xs font-bold">Compost Master</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/70 border border-[#a5d6a7]/30 rounded-xl text-center group cursor-help hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[#556158] text-[40px] group-hover:font-variation-[FILL_1]">energy_savings_leaf</span>
                <span className="text-xs font-bold">Grid Guardian</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/70 border border-[#a5d6a7]/30 rounded-xl text-center group cursor-help hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[#24502c] text-[40px] group-hover:font-variation-[FILL_1]">forest</span>
                <span className="text-xs font-bold">Reforester</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 border border-dashed border-[#bec9be] rounded-xl text-center opacity-40">
                <span className="material-symbols-outlined text-[40px]">lock</span>
                <span className="text-xs font-bold">Urban Grower</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border-t border-[#bec9be]/30 text-sm font-bold text-primary hover:bg-[#f4faff] transition-colors">
              View All Badges
            </button>
          </Card>
        </section>

        {/* Activity History Section */}
        <section className="col-span-1 md:col-span-6">
          <Card className="p-6 shadow-sm border border-[#bec9be]/30 h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold text-on-surface">Activity History</h2>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">history</span>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#9cf6ba] flex items-center justify-center text-[#00210f] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">recycling</span>
                </div>
                <div>
                  <p className="text-base text-on-surface">Updated community recycling protocols</p>
                  <p className="text-xs font-bold text-on-surface-variant">2 hours ago • City Central Hub</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#d9e6da] flex items-center justify-center text-[#131e17] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                </div>
                <div>
                  <p className="text-base text-on-surface">Completed "Circular Economy" certification</p>
                  <p className="text-xs font-bold text-on-surface-variant">Yesterday • Upcycle Academy</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#bdefbf] flex items-center justify-center text-[#002109] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                </div>
                <div>
                  <p className="text-base text-on-surface">Joined Portland Green Initiative</p>
                  <p className="text-xs font-bold text-on-surface-variant">3 days ago • Networking</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Connected Organizations Section */}
        <section className="col-span-1 md:col-span-6">
          <Card className="p-6 shadow-sm border border-[#bec9be]/30 h-full">
            <h2 className="font-display text-2xl font-bold text-on-surface mb-6">Connected Organizations</h2>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 flex items-center gap-3 pr-6 py-3 pl-3 rounded-full cursor-pointer hover:border-primary transition-all shadow-sm">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-[#006d3e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">home_work</span>
                </div>
                <span className="text-sm font-bold">Portland City Council</span>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 flex items-center gap-3 pr-6 py-3 pl-3 rounded-full cursor-pointer hover:border-primary transition-all shadow-sm">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-[#cce6d0] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#006d3e] text-sm">bolt</span>
                </div>
                <span className="text-sm font-bold">EcoGrid Systems</span>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 flex items-center gap-3 pr-6 py-3 pl-3 rounded-full cursor-pointer hover:border-primary transition-all shadow-sm">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-[#00452e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">public</span>
                </div>
                <span className="text-sm font-bold">Global ReLeaf</span>
              </div>
              <button className="flex items-center justify-center w-14 h-14 rounded-full border border-dashed border-[#717973] hover:bg-[#edeeef] transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </Card>
        </section>

        {/* Account Settings Entry Point */}
        <section className="col-span-1 md:col-span-12">
          <Link to="/account-settings">
            <Card className="p-6 bg-[#0d1e25] group cursor-pointer hover:bg-[#23333a] transition-colors border-none shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[28px]">settings</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Manage your account</h3>
                    <p className="text-base text-[#d4e5ef] opacity-80">Security, preferences, and data exports.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white text-[32px] group-hover:translate-x-2 transition-transform">chevron_right</span>
              </div>
            </Card>
          </Link>
        </section>

      </div>
    </div>
  );
}
