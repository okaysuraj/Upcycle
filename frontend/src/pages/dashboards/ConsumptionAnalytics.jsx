import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const barData = [
  { day: 'Mon', energy: 40, water: 30, gas: 10 },
  { day: 'Tue', energy: 50, water: 25, gas: 12 },
  { day: 'Wed', energy: 35, water: 45, gas: 5 },
  { day: 'Thu', energy: 60, water: 10, gas: 15 },
  { day: 'Fri', energy: 45, water: 20, gas: 20 },
  { day: 'Sat', energy: 20, water: 15, gas: 5 },
  { day: 'Sun', energy: 15, water: 10, gas: 3 }
];

export default function ConsumptionAnalytics() {
  const { authFetch } = useAuth();
  const [stats, setStats] = useState(null);
  const [esg, setEsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, esgRes] = await Promise.all([
          authFetch('/campuses/stats'),
          authFetch('/esg/corporate')
        ]);
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }
        if (esgRes.ok) {
          const esgData = await esgRes.json();
          setEsg(esgData);
        }
      } catch (err) {
        console.error("Error fetching consumption analytics:", err);
      }
    };
    fetchData();
  }, [authFetch]);

  return (
    <div className="flex flex-col gap-md">
      {/* KPI Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <div>
            <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Total Carbon Savings</p>
            <h2 className="font-display text-headline-lg text-primary">{esg?.globalImpact?.estimatedCarbonOffsetKg || 0} kg</h2>
            <span className="text-success-container font-bold flex items-center text-sm">
              <span className="material-symbols-outlined text-sm">arrow_upward</span> 12.4% vs last month
            </span>
          </div>
        </div>
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
            <span className="material-symbols-outlined text-3xl">electric_bolt</span>
          </div>
          <div>
            <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Energy Usage</p>
            <h2 className="font-display text-headline-lg text-primary">{stats?.energyUsage || 0} kW</h2>
            <span className="text-error-warm font-bold flex items-center text-sm">
              <span className="material-symbols-outlined text-sm">warning</span> Peak demand metrics
            </span>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-6 border border-outline-variant/30 flex flex-col justify-between overflow-hidden relative">
          <div className="z-10">
            <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Efficiency Index</p>
            <h2 className="font-display text-headline-lg text-primary">{stats?.gridEfficiency || 0}/100</h2>
          </div>
          <div className="mt-4 z-10">
            <div className="w-full bg-secondary-container h-3 rounded-full">
              <div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: `${stats?.gridEfficiency || 0}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Mix & Side Panel */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Bar Chart */}
        <div className="lg:col-span-8 bg-white rounded-[24px] p-8 border border-outline-variant/30 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline-md text-on-surface">Resource Consumption Mix</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-primary-container text-on-primary-container">Energy</span>
              <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container">Water</span>
              <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">Gas</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {barData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group">
                <div className="w-full flex flex-col-reverse h-full justify-start items-center gap-1">
                  <div className="w-10 bg-primary rounded-t-sm" style={{ height: `${d.energy}%` }} title="Energy"></div>
                  <div className="w-10 bg-tertiary-fixed-dim" style={{ height: `${d.water}%` }} title="Water"></div>
                  <div className="w-10 bg-secondary-fixed-dim" style={{ height: `${d.gas}%` }} title="Gas"></div>
                </div>
                <span className="mt-4 font-label-sm text-on-surface-variant">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Building Heatmap Side */}
        <div className="lg:col-span-4 bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm flex flex-col">
          <h3 className="font-headline-md text-on-surface mb-6">Building Consumption</h3>
          <div className="space-y-4 flex-1">
            {[
              { name: 'Science Block', consumption: 92, color: 'bg-error-warm', textColor: 'text-error-warm' },
              { name: 'Admin Tower', consumption: 74, color: 'bg-primary', textColor: 'text-primary' },
              { name: 'Library', consumption: 58, color: 'bg-tertiary', textColor: 'text-tertiary' },
              { name: 'Student Union', consumption: 45, color: 'bg-secondary', textColor: 'text-secondary' },
              { name: 'Dormitory A', consumption: 31, color: 'bg-success-container', textColor: 'text-success-container' }
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-label-md text-on-surface w-28 truncate">{b.name}</span>
                <div className="flex-1 h-3 bg-secondary-container rounded-full overflow-hidden">
                  <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.consumption}%` }}></div>
                </div>
                <span className={`font-label-sm font-bold ${b.textColor}`}>{b.consumption}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Breakdown Table */}
      <section className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden">
        <div className="p-md border-b border-outline-variant/20 flex justify-between items-center">
          <h4 className="font-headline-md text-headline-md">Detailed Breakdown</h4>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md flex items-center gap-2 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined">download</span> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-secondary font-label-md">
                <th className="px-md py-4">Facility</th>
                <th className="px-md py-4 text-right">Energy (kWh)</th>
                <th className="px-md py-4 text-right">Water (m³)</th>
                <th className="px-md py-4 text-right">Gas (m³)</th>
                <th className="px-md py-4 text-right">Cost ($)</th>
                <th className="px-md py-4">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 text-body-md">
              {[
                { facility: 'Science Block', energy: '18,420', water: '3,200', gas: '1,850', cost: '12,840', trend: 'up' },
                { facility: 'Admin Tower', energy: '12,100', water: '1,800', gas: '920', cost: '8,450', trend: 'down' },
                { facility: 'Library', energy: '8,600', water: '2,100', gas: '400', cost: '5,920', trend: 'flat' },
                { facility: 'Student Union', energy: '6,200', water: '4,500', gas: '300', cost: '4,850', trend: 'up' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-ice transition-colors">
                  <td className="px-md py-4 font-bold text-on-surface">{row.facility}</td>
                  <td className="px-md py-4 text-right">{row.energy}</td>
                  <td className="px-md py-4 text-right">{row.water}</td>
                  <td className="px-md py-4 text-right">{row.gas}</td>
                  <td className="px-md py-4 text-right font-bold">{row.cost}</td>
                  <td className="px-md py-4">
                    <span className={`material-symbols-outlined ${row.trend === 'up' ? 'text-error-warm' : row.trend === 'down' ? 'text-success-container' : 'text-on-surface-variant'}`}>
                      {row.trend === 'up' ? 'trending_up' : row.trend === 'down' ? 'trending_down' : 'trending_flat'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
