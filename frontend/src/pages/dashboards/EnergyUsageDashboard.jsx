import React, { useState } from 'react';

export default function EnergyUsageDashboard() {
  const [energyData] = useState({
    realtimeWattage: 42.8,
    solarContribution: 65,
    solarKw: 28.2,
    gridKw: 14.6,
    efficiency: 92,
    peakMitigation: 12,
    carbonSaved: 1.2,
    costAvoided: 420
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Smart Microgrid & Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Energy Hub</h2>
          <p className="text-sm text-[#556158] mt-1">Real-time load balancing, solar micro-generation and historical grid performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#9cf6ba]/40 text-[#00522d] font-bold text-xs gap-2 shadow-sm border border-[#9cf6ba]">
            <span className="w-2 h-2 bg-[#2eb872] rounded-full animate-pulse"></span>
            Grid Optimal
          </span>
          <button 
            onClick={() => alert('Filtering timeline...')}
            className="bg-white border border-[#bec9be]/40 px-4 py-2 rounded-full text-xs font-bold text-[#0d1e25] flex items-center gap-1.5 hover:bg-[#e7f6ff] transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>Last 24 Hours</span>
          </button>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Real-time Chart (Span 8) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Real-time Wattage</h3>
              <p className="text-xs text-[#556158]">Live demand vs. generation capacity</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-[#00522d] leading-none">
                {energyData.realtimeWattage}<span className="text-lg">kW</span>
              </span>
              <p className="text-xs text-[#556158] mt-0.5">+2.4% from average</p>
            </div>
          </div>

          <div className="h-64 w-full bg-[#f4faff] rounded-2xl relative flex items-end px-4 pb-4 gap-2 border border-[#bec9be]/30">
            <div className="flex-1 bg-[#00522d]/20 rounded-t-lg h-2/3 transition-all duration-1000"></div>
            <div className="flex-1 bg-[#00522d]/30 rounded-t-lg h-1/2"></div>
            <div className="flex-1 bg-[#00522d]/40 rounded-t-lg h-3/4"></div>
            <div className="flex-1 bg-[#00522d]/60 rounded-t-lg h-2/3"></div>
            <div className="flex-1 bg-[#00522d]/80 rounded-t-lg h-5/6"></div>
            <div className="flex-1 bg-[#00522d] rounded-t-lg h-full relative">
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0d1e25] text-white px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap shadow-sm">
                Current Peak
              </div>
            </div>
            <div className="flex-1 bg-[#00522d]/80 rounded-t-lg h-4/5"></div>
            <div className="flex-1 bg-[#00522d]/50 rounded-t-lg h-2/3"></div>
            <div className="flex-1 bg-[#00522d]/30 rounded-t-lg h-1/2"></div>
            <div className="flex-1 bg-[#00522d]/20 rounded-t-lg h-1/3"></div>
          </div>

          <div className="flex justify-between mt-6 pt-4 border-t border-[#bec9be]/20 text-xs font-semibold text-[#556158]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00522d]"></span>
              <span>Active Load</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9cf6ba]"></span>
              <span>Solar Contribution</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#d4e5ef]"></span>
              <span>Projected Baseline</span>
            </div>
          </div>
        </section>

        {/* Energy Sources Breakdown (Span 4) */}
        <section className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight mb-1">Energy Mix</h3>
            <p className="text-xs text-[#556158]">Current supply distribution</p>
          </div>

          <div className="relative w-44 h-44 mx-auto my-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="none" r="15.915" stroke="#d4e5ef" strokeWidth="4.5"></circle>
              <circle cx="18" cy="18" fill="none" r="15.915" stroke="#00522d" strokeDasharray="65 35" strokeWidth="4.5"></circle>
              <circle cx="18" cy="18" fill="none" r="15.915" stroke="#2eb872" strokeDasharray="25 75" strokeDashoffset="-65" strokeWidth="4.5"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#00522d] leading-none">{energyData.solarContribution}%</span>
              <span className="text-[10px] uppercase font-bold text-[#556158] mt-1">Renewable Solar</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#9cf6ba]/50 flex items-center justify-center text-[#00522d]">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                </div>
                <span className="text-xs font-bold text-[#0d1e25]">Rooftop Solar Array</span>
              </div>
              <span className="text-xs font-bold text-[#00522d]">{energyData.solarKw} kW</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#dff1fb] flex items-center justify-center text-[#556158]">
                  <span className="material-symbols-outlined text-sm">electric_meter</span>
                </div>
                <span className="text-xs font-bold text-[#0d1e25]">Municipal Clean Grid</span>
              </div>
              <span className="text-xs font-bold text-[#556158]">{energyData.gridKw} kW</span>
            </div>
          </div>
        </section>

        {/* 3 Lower KPI Cards */}
        <section className="col-span-12 md:col-span-4 bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Grid Efficiency</span>
          <div className="my-2">
            <span className="text-3xl font-bold text-[#00522d]">{energyData.efficiency}%</span>
            <p className="text-xs text-[#556158] mt-1">Smart inverter conversion rate</p>
          </div>
          <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
            <div className="h-full bg-[#00522d] w-[92%]"></div>
          </div>
        </section>

        <section className="col-span-12 md:col-span-4 bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Carbon Avoided</span>
          <div className="my-2">
            <span className="text-3xl font-bold text-[#24502c]">{energyData.carbonSaved} Tons</span>
            <p className="text-xs text-[#556158] mt-1">Equivalent to 64 mature trees</p>
          </div>
          <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
            <div className="h-full bg-[#2eb872] w-[75%]"></div>
          </div>
        </section>

        <section className="col-span-12 md:col-span-4 bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Avoided Utility Cost</span>
          <div className="my-2">
            <span className="text-3xl font-bold text-[#0d1e25]">${energyData.costAvoided}</span>
            <p className="text-xs text-[#556158] mt-1">Saved this billing cycle via microgrid</p>
          </div>
          <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
            <div className="h-full bg-[#006d3e] w-[60%]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
