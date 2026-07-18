import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

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
    <div className="flex flex-col gap-md">
      {/* Header & Top KPIs */}
      <div className="flex justify-between items-end mb-lg">
        <div>
          <h1 className="font-display text-display text-on-surface mb-xs">Campus Sustainability Pulse</h1>
          <p className="font-body-lg text-body-lg text-secondary">Real-time circular economy analytics for Hub Alpha.</p>
        </div>
        <div className="flex gap-sm">
          <div className="bg-surface-container-high px-md py-sm rounded-xl border border-outline-variant/30 flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">calendar_today</span>
            <span className="font-label-md text-label-md">Current Month</span>
          </div>
        </div>
      </div>

      {/* KPI Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg">
        {[
          { icon: 'recycling', iconBg: 'bg-primary-container', iconColor: 'text-on-primary-container', label: 'Active Listings', value: stats?.totalListings || 0, trend: 'Available items', trendColor: 'text-success-container', valueColor: 'text-primary' },
          { icon: 'eco', iconBg: 'bg-secondary-container', iconColor: 'text-on-secondary-container', label: 'Successful Exchanges', value: stats?.successfulExchanges || 0, unit: 'items', trend: 'Completed so far', trendColor: 'text-success-container', valueColor: 'text-secondary' },
          { icon: 'payments', iconBg: 'bg-tertiary-fixed', iconColor: 'text-on-tertiary-fixed', label: 'Community Value', value: `$${stats?.totalValue || 0}`, trend: 'Saved by students & staff', trendColor: 'text-secondary', trendIcon: 'group', valueColor: 'text-tertiary' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-xl rounded-[24px] border border-outline-variant/30 relative overflow-hidden group hover:shadow-sm transition-shadow">
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-full ${kpi.iconBg} flex items-center justify-center mb-md group-hover:scale-110 transition-transform`}>
                <span className={`material-symbols-outlined ${kpi.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{kpi.icon}</span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1">{kpi.label}</p>
              <h2 className={`font-display text-display ${kpi.valueColor} leading-none`}>{kpi.value}{kpi.unit && <span className="text-headline-md"> {kpi.unit}</span>}</h2>
              <div className={`mt-md flex items-center gap-xs ${kpi.trendColor} font-label-md`}>
                <span className="material-symbols-outlined">{kpi.trendIcon || 'trending_up'}</span>
                <span>{kpi.trend}</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <span className="material-symbols-outlined text-[160px]">{kpi.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-lg">
        {/* Circular Flow Ecosystem Diagram */}
        <div className="lg:col-span-8 bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden relative min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-ice via-surface-container-low to-surface-container-high opacity-40"></div>
          <div className="p-lg relative z-20 flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Circular Flow Ecosystem</h3>
              <p className="font-label-md text-label-md text-secondary">Mapping active resource transfers</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-success-container/10 text-success-container font-label-sm border border-success-container/30">Live Data</span>
              <button className="material-symbols-outlined p-2 hover:bg-surface-variant/30 rounded-full transition-colors">fullscreen</button>
            </div>
          </div>
          {/* Diagram Canvas */}
          <div className="absolute inset-0 flex items-center justify-center p-xl">
            <div className="relative w-full h-full max-w-2xl max-h-[400px]">
              {/* Diagram Hubs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg border-2 border-primary/20 z-10">
                  <span className="material-symbols-outlined text-[32px]">science</span>
                </div>
                <span className="text-label-sm font-bold mt-2">Labs</span>
              </div>
              <div className="absolute bottom-0 left-1/4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-tertiary shadow-lg border-2 border-tertiary/20 z-10">
                  <span className="material-symbols-outlined text-[32px]">apartment</span>
                </div>
                <span className="text-label-sm font-bold mt-2">Dorms</span>
              </div>
              <div className="absolute bottom-0 right-1/4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-secondary shadow-lg border-2 border-secondary/20 z-10">
                  <span className="material-symbols-outlined text-[32px]">store</span>
                </div>
                <span className="text-label-sm font-bold mt-2">Market</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg border-2 border-primary/20 z-10">
                  <span className="material-symbols-outlined text-[32px]">factory</span>
                </div>
                <span className="text-label-sm font-bold mt-2">Facilities</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-success-container shadow-lg border-2 border-success-container/20 z-10">
                  <span className="material-symbols-outlined text-[32px]">compost</span>
                </div>
                <span className="text-label-sm font-bold mt-2">Compost</span>
              </div>
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-primary text-on-primary flex flex-col items-center justify-center shadow-xl z-20 relative">
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
                  <span className="text-[10px] font-bold mt-1">CIRCULAR</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel: Active Matches / Recent Activity */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          {/* Active Matches */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 p-md flex-1">
            <div className="flex justify-between items-center mb-md">
              <h4 className="font-headline-md text-headline-md">Active Matches</h4>
              <span className="bg-primary-container text-on-primary-container text-label-sm px-3 py-1 rounded-full font-bold">{listings.length} Live</span>
            </div>
            <div className="space-y-4">
              {loading ? (
                <p className="text-center text-secondary py-4">Loading matches...</p>
              ) : listings.slice(0, 3).map((match, i) => (
                <div key={match.id || i} className="p-4 rounded-xl bg-surface-ice border border-outline-variant/10 hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-label-md text-label-md font-bold">{match.title}</p>
                    <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-1 rounded-full font-bold">{match.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                    <span>{match.vendor?.name}</span>
                    <span className="material-symbols-outlined text-[14px] text-primary">store</span>
                    <span>{match.campus?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Glass Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-[24px] border border-outline-variant/30 p-md relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Community Impact Score</span>
              <h3 className="font-display text-display text-primary mt-2">A+</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Top 3% globally among university campuses in circular resource management.
              </p>
              <div className="mt-md w-full h-3 bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[97%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Donations Table */}
      <div className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden">
        <div className="p-md border-b border-outline-variant/20 flex justify-between items-center">
          <h4 className="font-headline-md text-headline-md">Recent Active Listings</h4>
          <button className="text-primary font-label-md hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-secondary font-label-md">
                <th className="px-md py-4">Item</th>
                <th className="px-md py-4">Vendor</th>
                <th className="px-md py-4">Campus</th>
                <th className="px-md py-4">Category</th>
                <th className="px-md py-4">Price</th>
                <th className="px-md py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 text-body-md">
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-secondary">Loading...</td>
                </tr>
              ) : listings.map((row) => (
                <tr key={row.id} className="hover:bg-surface-ice transition-colors">
                  <td className="px-md py-4 font-bold text-on-surface">{row.title}</td>
                  <td className="px-md py-4">{row.vendor?.name}</td>
                  <td className="px-md py-4">{row.campus?.name}</td>
                  <td className="px-md py-4"><span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-xs font-bold">{row.category}</span></td>
                  <td className="px-md py-4 text-on-surface-variant">${row.price}</td>
                  <td className="px-md py-4"><span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold">{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
