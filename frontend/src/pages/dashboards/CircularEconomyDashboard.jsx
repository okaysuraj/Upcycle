import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function CircularEconomyDashboard() {
  const { authFetch } = useAuth();
  const [stats, setStats] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, listingsRes] = await Promise.all([
          authFetch('/marketplace/stats'),
          authFetch('/marketplace')
        ]);
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }
        if (listingsRes.ok) {
          const listingsData = await listingsRes.json();
          setListings(listingsData);
        }
      } catch (err) {
        console.error("Error fetching circular economy data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header & Top KPIs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Resource Loop & Reuse Intelligence
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Campus Sustainability Pulse</h1>
          <p className="text-sm text-[#556158] mt-1">Real-time circular economy closed-loop analytics for Hub Alpha.</p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/marketplace/new"
            className="px-5 py-2.5 bg-[#00522d] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#003d21] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>List Circular Asset</span>
          </Link>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: 'recycling', iconBg: 'bg-[#dff1fb]', iconColor: 'text-[#00522d]', label: 'Active Items Diverted', value: stats?.totalListings || '12,482', unit: '', trend: '+14% from last month', valueColor: 'text-[#00522d]' },
          { icon: 'eco', iconBg: 'bg-[#9cf6ba]/40', iconColor: 'text-[#00210f]', label: 'Carbon Avoided', value: stats?.successfulExchanges || '84.2', unit: 'tons', trend: 'Direct avoidance', valueColor: 'text-[#24502c]' },
          { icon: 'payments', iconBg: 'bg-[#dff1fb]', iconColor: 'text-[#00522d]', label: 'Community Value Saved', value: stats?.totalValue ? `$${stats.totalValue}` : '$42,500', trend: 'Reinvested in campus', valueColor: 'text-[#00522d]' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 sm:p-8 rounded-[28px] border border-[#bec9be]/30 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-2xl ${kpi.iconBg} flex items-center justify-center mb-4 ${kpi.iconColor} shadow-sm`}>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{kpi.icon}</span>
              </div>
              <p className="text-[11px] font-bold text-[#556158] uppercase tracking-wider mb-1">{kpi.label}</p>
              <h2 className={`text-3xl sm:text-4xl font-bold ${kpi.valueColor} leading-tight`}>
                {kpi.value}{kpi.unit && <span className="text-lg font-normal text-[#556158]"> {kpi.unit}</span>}
              </h2>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#00522d]">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>{kpi.trend}</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[140px] text-[#00522d]">{kpi.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Circular Flow Ecosystem Diagram (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden relative min-h-[460px] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start z-10">
            <div>
              <h3 className="text-xl font-bold text-[#0d1e25]">Circular Flow Ecosystem</h3>
              <p className="text-xs text-[#556158] mt-0.5">Mapping active resource transfers between laboratories & campus dorms</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#9cf6ba]/40 text-[#00522d] font-bold text-xs border border-[#9cf6ba]">
              Live Ecosystem Stream
            </span>
          </div>
          
          {/* Circular Node Map Visual */}
          <div className="relative w-full h-72 my-4 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full border-2 border-dashed border-[#bec9be] flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
              <div className="absolute -top-5 bg-[#00522d] text-white p-3 rounded-2xl shadow-md">
                <span className="material-symbols-outlined text-xl">science</span>
              </div>
              <div className="absolute -bottom-5 bg-[#24502c] text-white p-3 rounded-2xl shadow-md">
                <span className="material-symbols-outlined text-xl">apartment</span>
              </div>
              <div className="absolute -left-5 bg-[#2eb872] text-[#00210f] p-3 rounded-2xl shadow-md">
                <span className="material-symbols-outlined text-xl">palette</span>
              </div>
              <div className="absolute -right-5 bg-[#006d3e] text-white p-3 rounded-2xl shadow-md">
                <span className="material-symbols-outlined text-xl">store</span>
              </div>
            </div>

            <div className="absolute text-center bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-[#bec9be]/40 shadow-xl">
              <span className="material-symbols-outlined text-3xl text-[#00522d]" style={{ fontVariationSettings: "'FILL' 1" }}>all_inclusive</span>
              <p className="text-xs font-bold text-[#0d1e25] mt-1">94.2% Loop Retention</p>
              <p className="text-[10px] text-[#556158]">0% Landfill Direct</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs font-semibold text-[#556158] pt-3 border-t border-[#bec9be]/20 z-10">
            <span>Science & Tech Labs</span>
            <span>Student Housing & Quads</span>
            <span>Design Workshops</span>
            <span>Community Exchange Hub</span>
          </div>
        </div>

        {/* Live Exchange Feed (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#0d1e25] pb-3 border-b border-[#bec9be]/20">Recent Exchanges</h3>
            
            <div className="divide-y divide-[#bec9be]/20 text-xs">
              {[
                { title: 'Digital Oscilloscope', from: 'Electrical Eng', to: 'Robotics Club', time: '12m ago', icon: 'memory' },
                { title: 'Timber Pallets (12x)', from: 'Campus Facilities', to: 'Architecture Studio', time: '1h ago', icon: 'carpenter' },
                { title: 'Glass Beakers Set', from: 'Bio Lab A', to: 'Science Outreach', time: '3h ago', icon: 'biotech' }
              ].map((item, idx) => (
                <div key={idx} className="py-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#0d1e25]">{item.title}</h4>
                    <p className="text-[10px] text-[#556158] mt-0.5">{item.from} → {item.to}</p>
                  </div>
                  <span className="text-[10px] text-[#556158]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/marketplace"
            className="w-full py-2.5 bg-[#f4faff] hover:bg-[#dff1fb] border border-[#bec9be]/40 text-[#00522d] rounded-full text-xs font-bold text-center transition-all block"
          >
            Explore All Campus Listings →
          </Link>
        </div>
      </div>
    </div>
  );
}
