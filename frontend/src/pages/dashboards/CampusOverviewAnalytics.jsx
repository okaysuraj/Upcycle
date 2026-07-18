import React, { useState, useEffect } from 'react';

export default function CampusOverviewAnalytics() {
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setToastVisible(true), 1000);
    const timer2 = setTimeout(() => setToastVisible(false), 5000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  return (
    <div className="flex flex-col gap-md relative">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-md mb-md">
        <div>
          <h1 className="font-display text-display text-primary">Sustainability Metrics</h1>
          <p className="font-body-lg text-body-lg text-secondary">Real-time environmental performance across all campus facilities.</p>
        </div>
        <div className="flex gap-sm">
          <div className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary">calendar_today</span>
            <span className="font-label-md text-label-md">Last 30 Days</span>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold shadow-md flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">download</span>
            Export Data
          </button>
        </div>
      </section>

      {/* KPI Row (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-md mb-md">
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-primary-container/20 rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>delete_sweep</span>
            </div>
            <span className="text-success-container flex items-center font-bold text-xs">
              <span className="material-symbols-outlined text-sm mr-1">arrow_upward</span> 12%
            </span>
          </div>
          <div className="mt-md">
            <p className="text-secondary font-label-md">Waste Diverted</p>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">42.8 Tons</h3>
          </div>
        </div>
        
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-tertiary-container/20 rounded-lg text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
            </div>
            <span className="text-success-container flex items-center font-bold text-xs">
              <span className="material-symbols-outlined text-sm mr-1">arrow_upward</span> 8.4%
            </span>
          </div>
          <div className="mt-md">
            <p className="text-secondary font-label-md">Carbon Offset</p>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">156 CO2e</h3>
          </div>
        </div>
        
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-secondary-container rounded-lg text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
            </div>
            <span className="text-primary flex items-center font-bold text-xs">
              Steady
            </span>
          </div>
          <div className="mt-md">
            <p className="text-secondary font-label-md">Recycling Rate</p>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">64.2%</h3>
          </div>
        </div>
        
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-error-container text-error-warm rounded-lg">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <span className="text-error-warm flex items-center font-bold text-xs">
              -4.2%
            </span>
          </div>
          <div className="mt-md">
            <p className="text-secondary font-label-md">Contamination</p>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">3.1%</h3>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-md mb-md">
        {/* Trend Line Chart */}
        <div className="lg:col-span-8 bg-white p-md rounded-[24px] border border-outline-variant/30 relative overflow-hidden h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-md">
            <h4 className="font-headline-md text-headline-md text-on-surface">Waste vs Recycling Trend</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs font-label-md">Recycling</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-outline"></div>
                <span className="text-xs font-label-md">Landfill</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative flex items-end justify-between px-2 pt-10">
            <div className="absolute inset-x-0 bottom-0 top-10 flex items-end justify-between px-4 pb-6">
              <div className="w-full h-full relative group">
                <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-primary/10 to-transparent rounded-t-xl"></div>
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path className="text-primary opacity-80" d="M0,150 Q50,120 100,160 T200,100 T300,140 T400,80 T500,120 T600,60 T700,100" fill="none" stroke="currentColor" strokeWidth="3" style={{ vectorEffect: 'non-scaling-stroke' }}></path>
                  <path className="text-outline opacity-40" d="M0,180 Q50,170 100,190 T200,160 T300,180 T400,150 T500,170 T600,140 T700,160" fill="none" stroke="currentColor" strokeWidth="2" style={{ vectorEffect: 'non-scaling-stroke' }}></path>
                </svg>
              </div>
            </div>
            <div className="w-full flex justify-between absolute bottom-0 px-2 text-[10px] text-secondary font-bold">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </div>
        </div>
        
        {/* Pie Chart / Breakdown */}
        <div className="lg:col-span-4 bg-white/70 backdrop-blur-md p-md rounded-[24px] border border-outline-variant/30 flex flex-col">
          <h4 className="font-headline-md text-headline-md text-on-surface mb-md">Waste Types</h4>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="relative w-48 h-48 mb-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md w-28 h-28 rounded-full flex flex-col items-center justify-center border border-primary-fixed shadow-sm">
                  <span className="text-xs text-secondary font-bold">TOTAL</span>
                  <span className="text-xl font-bold text-primary">100%</span>
                </div>
              </div>
              {/* Pseudo SVG circle representing the pie */}
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ba1a1a" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="210"></circle>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#bdcabf" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="165"></circle>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2eb872" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="60"></circle>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3c6842" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0"></circle>
              </svg>
            </div>
            <div className="w-full space-y-sm">
              <div className="flex justify-between items-center text-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3c6842]"></div>
                  <span>Glass</span>
                </div>
                <span className="font-bold">24%</span>
              </div>
              <div className="flex justify-between items-center text-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2eb872]"></div>
                  <span>Plastic</span>
                </div>
                <span className="font-bold">42%</span>
              </div>
              <div className="flex justify-between items-center text-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#bdcabf]"></div>
                  <span>Paper</span>
                </div>
                <span className="font-bold">18%</span>
              </div>
              <div className="flex justify-between items-center text-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ba1a1a]"></div>
                  <span>Metal</span>
                </div>
                <span className="font-bold">16%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden">
        <div className="px-md py-md border-b border-outline-variant/20 flex justify-between items-center">
          <h4 className="font-headline-md text-headline-md text-on-surface">Building Performance Metrics</h4>
          <button className="text-primary font-bold text-label-md hover:underline">View All Facilities</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-secondary font-label-md">
                <th className="px-md py-4">Building Name</th>
                <th className="px-md py-4">Status</th>
                <th className="px-md py-4 text-right">Waste (kg)</th>
                <th className="px-md py-4 text-right">Recycling (kg)</th>
                <th className="px-md py-4 text-center">Diversion Rate</th>
                <th className="px-md py-4">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 text-body-md">
              <tr className="hover:bg-surface-ice transition-colors">
                <td className="px-md py-4 font-bold text-on-surface">Science Innovation Center</td>
                <td className="px-md py-4">
                  <span className="bg-success-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold">Optimal</span>
                </td>
                <td className="px-md py-4 text-right">1,240</td>
                <td className="px-md py-4 text-right">890</td>
                <td className="px-md py-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-24 h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '71.7%' }}></div>
                    </div>
                    <span className="text-xs font-bold">71.7%</span>
                  </div>
                </td>
                <td className="px-md py-4 text-success-container">
                  <span className="material-symbols-outlined">trending_up</span>
                </td>
              </tr>
              <tr className="hover:bg-surface-ice transition-colors">
                <td className="px-md py-4 font-bold text-on-surface">Humanities Hall</td>
                <td className="px-md py-4">
                  <span className="bg-primary-container/20 text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">Stable</span>
                </td>
                <td className="px-md py-4 text-right">980</td>
                <td className="px-md py-4 text-right">540</td>
                <td className="px-md py-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-24 h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '55.1%' }}></div>
                    </div>
                    <span className="text-xs font-bold">55.1%</span>
                  </div>
                </td>
                <td className="px-md py-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">trending_flat</span>
                </td>
              </tr>
              <tr className="hover:bg-surface-ice transition-colors">
                <td className="px-md py-4 font-bold text-on-surface">Athletic Complex</td>
                <td className="px-md py-4">
                  <span className="bg-error-container text-error-warm px-3 py-1 rounded-full text-xs font-bold">Action Needed</span>
                </td>
                <td className="px-md py-4 text-right">2,150</td>
                <td className="px-md py-4 text-right">620</td>
                <td className="px-md py-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-24 h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-error-warm" style={{ width: '28.8%' }}></div>
                    </div>
                    <span className="text-xs font-bold">28.8%</span>
                  </div>
                </td>
                <td className="px-md py-4 text-error-warm">
                  <span className="material-symbols-outlined">trending_down</span>
                </td>
              </tr>
              <tr className="hover:bg-surface-ice transition-colors">
                <td className="px-md py-4 font-bold text-on-surface">Student Union</td>
                <td className="px-md py-4">
                  <span className="bg-success-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold">Optimal</span>
                </td>
                <td className="px-md py-4 text-right">1,860</td>
                <td className="px-md py-4 text-right">1,410</td>
                <td className="px-md py-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-24 h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '75.8%' }}></div>
                    </div>
                    <span className="text-xs font-bold">75.8%</span>
                  </div>
                </td>
                <td className="px-md py-4 text-success-container">
                  <span className="material-symbols-outlined">trending_up</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Notification Toast */}
      <div className={`fixed bottom-md right-md transition-all duration-500 z-50 ${toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-white/90 backdrop-blur-md px-md py-sm rounded-full flex items-center gap-sm shadow-2xl border border-outline-variant/20">
          <div className="w-2 h-2 bg-success-container rounded-full animate-pulse"></div>
          <span className="text-label-md font-bold text-on-surface">Real-time data synced</span>
        </div>
      </div>
    </div>
  );
}
