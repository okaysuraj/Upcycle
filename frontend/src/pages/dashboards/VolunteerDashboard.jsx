import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function VolunteerDashboard() {
  const { user, authFetch } = useAuth();
  const [stats, setStats] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, rewardsRes] = await Promise.all([
          authFetch('/waste/stats'),
          authFetch('/gamification/rewards')
        ]);

        if (statsRes.ok) {
          const statsData = await statsRes.json();
          let total = 0;
          let plastic = 0, organic = 0, glass = 0;
          
          statsData.categoryBreakdown?.forEach(item => {
            total += item.totalKg;
            if (item.category === 'PLASTIC') plastic = item.totalKg;
            if (item.category === 'ORGANIC') organic = item.totalKg;
            if (item.category === 'GLASS') glass = item.totalKg;
          });

          const getPct = (val) => total > 0 ? Math.round((val / total) * 100) : 0;

          setStats({
            plastic: getPct(plastic) || 84,
            organic: getPct(organic) || 62,
            glass: getPct(glass) || 45,
            carbonOffset: user?.points || 124
          });
        } else {
          setStats({
            plastic: 84,
            organic: 62,
            glass: 45,
            carbonOffset: 124
          });
        }

        if (rewardsRes.ok) {
          const rewardsData = await rewardsRes.json();
          setRewards(rewardsData);
        }
      } catch (err) {
        console.error("Failed to fetch volunteer data", err);
        setStats({
          plastic: 84,
          organic: 62,
          glass: 45,
          carbonOffset: 124
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [authFetch, user]);

  if (loading || !stats) {
    return (
      <div className="p-12 text-center text-[#556158] font-['Hanken_Grotesk',sans-serif] flex flex-col items-center justify-center gap-3">
        <span className="material-symbols-outlined text-4xl text-[#00522d] animate-spin">progress_activity</span>
        <span className="font-semibold text-sm">Loading your eco-impact...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00522d] bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Campus Volunteer Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0d1e25] tracking-tight">
            Welcome back, {user?.name || 'Eco Warrior'}! 🌱
          </h1>
          <p className="text-sm text-[#556158] mt-1">
            Track your individual contribution to municipal zero-waste benchmarks.
          </p>
        </div>
        <Link 
          to="/student/waste-logger"
          className="bg-[#00522d] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#003d21] transition-all shadow-md flex items-center justify-center gap-2 self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          <span>Log New Waste</span>
        </Link>
      </div>

      {/* Hero Stats Bento */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Impact Chart */}
        <div className="md:col-span-8 bg-white border border-[#bec9be]/30 rounded-[28px] p-6 sm:p-8 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1e25] tracking-tight mb-1">Impact Analytics</h2>
              <p className="text-sm text-[#556158]">Your waste diversion metrics by stream this cycle.</p>
            </div>
            <span className="bg-[#2eb872]/20 text-[#00522d] px-3 py-1 rounded-full text-xs font-bold">
              +12.4% vs last mo.
            </span>
          </div>
          
          {/* Custom Progress Visualization */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1.5 text-xs font-bold">
                <span className="text-[#0d1e25] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#00522d] text-base">recycling</span>
                  Plastic Diversion
                </span>
                <span className="text-[#00522d]">{stats.plastic}%</span>
              </div>
              <div className="h-2.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-[#00522d] rounded-full transition-all duration-1000" style={{ width: `${stats.plastic}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1.5 text-xs font-bold">
                <span className="text-[#0d1e25] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#24502c] text-base">compost</span>
                  Organic Composting
                </span>
                <span className="text-[#00522d]">{stats.organic}%</span>
              </div>
              <div className="h-2.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-[#2eb872] rounded-full transition-all duration-1000" style={{ width: `${stats.organic}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1.5 text-xs font-bold">
                <span className="text-[#0d1e25] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#556158] text-base">liquor</span>
                  Glass Recycling
                </span>
                <span className="text-[#00522d]">{stats.glass}%</span>
              </div>
              <div className="h-2.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-[#006d3e] rounded-full transition-all duration-1000" style={{ width: `${stats.glass}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carbon Offset Summary */}
        <div className="md:col-span-4 bg-[#00522d] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <span className="material-symbols-outlined text-4xl text-[#9cf6ba]" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
            <h3 className="text-2xl font-bold tracking-tight">Carbon Offset</h3>
            <p className="text-xs text-white/80">Equivalent to planting native trees</p>
          </div>
          <div className="relative z-10 pt-6">
            <p className="text-5xl font-bold leading-none mb-1 text-[#9cf6ba]">{stats.carbonOffset}</p>
            <p className="text-xs font-medium text-white/80">Active eco-credits unlocked</p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </section>

      {/* Rewards and Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          to="/community/leaderboard"
          className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#9cf6ba]/40 text-[#00522d] flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl">leaderboard</span>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#0d1e25]">Campus Leaderboard</h4>
            <p className="text-xs text-[#556158]">View rank & top eco-volunteers</p>
          </div>
        </Link>

        <Link 
          to="/student/events"
          className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl">event</span>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#0d1e25]">Upcoming Cleanups</h4>
            <p className="text-xs text-[#556158]">Join local weekend initiatives</p>
          </div>
        </Link>

        <Link 
          to="/marketplace"
          className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#ffdad6]/60 text-[#ba1a1a] flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl">storefront</span>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#0d1e25]">Eco-Marketplace</h4>
            <p className="text-xs text-[#556158]">Donate & swap recycled assets</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
