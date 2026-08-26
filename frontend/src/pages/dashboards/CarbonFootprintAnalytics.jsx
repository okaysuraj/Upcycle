import React from 'react';

export default function CarbonFootprintAnalytics() {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            GHG Protocol Accounting & Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Carbon Footprint Analytics</h2>
          <p className="text-sm text-[#556158] mt-1">
            Real-time carbon emissions telemetry across Scopes 1, 2, and 3.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#9cf6ba]/40 text-[#00522d] border border-[#9cf6ba] text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
            FY 2024 Active Sync
          </span>
          <button 
            onClick={() => alert('Exporting verified GHG Protocol PDF report...')}
            className="flex items-center gap-1.5 bg-white border border-[#bec9be]/40 px-4 py-2 rounded-full text-xs font-bold text-[#0d1e25] hover:bg-[#e7f6ff] transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            <span>Export ESG Data</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* CO2e Output Chart (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm min-h-[440px] relative overflow-hidden">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold text-[#556158] uppercase tracking-wider">Total CO2e Gross Output</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#00522d] mt-1 leading-none">
                  1,248.5 <span className="text-lg font-normal text-[#556158]">tonnes</span>
                </h3>
              </div>
              <span className="bg-[#2eb872]/20 text-[#00522d] px-3 py-1 rounded-full text-xs font-bold">
                -8.4% YoY Reduction
              </span>
            </div>
            
            {/* Chart Area */}
            <div className="w-full h-56 bg-[#f4faff] rounded-2xl relative mt-4 border border-[#bec9be]/30 overflow-hidden">
              <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#9cf6ba" stopOpacity="0.4"></stop>
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,250 Q100,200 200,220 T400,150 T600,180 T800,100 V300 H0 Z" fill="url(#chartGradient)"></path>
                <path d="M0,250 Q100,200 200,220 T400,150 T600,180 T800,100" fill="none" stroke="#00522d" strokeLinecap="round" strokeWidth="3.5"></path>
                <circle cx="400" cy="150" fill="#00522d" r="5"></circle>
                <circle cx="800" cy="100" fill="#00522d" r="5"></circle>
              </svg>
              
              {/* Tooltip */}
              <div className="absolute top-6 right-1/4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-md rounded-xl border border-[#bec9be]/40">
                <p className="text-[10px] font-bold uppercase text-[#556158]">Current Load Rate</p>
                <p className="text-sm font-bold text-[#00522d]">84.2 kg CO₂e / hr</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-4 pt-4 border-t border-[#bec9be]/20 text-xs font-semibold text-[#556158]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00522d]"></span>
              <span>Industrial Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#24502c]"></span>
              <span>Logistics & Fleet</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9cf6ba]"></span>
              <span>Purchased Power</span>
            </div>
          </div>
        </div>

        {/* GHG Protocol Scopes (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[28px] border border-[#bec9be]/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm space-y-6">
          <h4 className="text-xl font-bold text-[#0d1e25] tracking-tight">GHG Protocol Scopes</h4>
          
          <div className="space-y-5 flex-1">
            {[
              { scope: 'Scope 1', label: 'Direct Operations', value: '245 tCO2e', width: '35%', color: 'bg-[#00522d]', desc: 'On-site fuel & fleet vehicles.' },
              { scope: 'Scope 2', label: 'Purchased Energy', value: '512 tCO2e', width: '65%', color: 'bg-[#24502c]', desc: 'Clean grid electricity & steam.' },
              { scope: 'Scope 3', label: 'Value Chain & Waste', value: '491 tCO2e', width: '55%', color: 'bg-[#2eb872]', desc: 'Supply chain & landfill waste.' }
            ].map((s, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between items-end text-xs">
                  <div>
                    <span className="font-bold text-[#00522d] uppercase text-[10px]">{s.scope}</span>
                    <p className="font-bold text-[#0d1e25]">{s.label}</p>
                  </div>
                  <span className="font-bold text-[#00522d]">{s.value}</span>
                </div>
                <div className="w-full h-2.5 bg-[#d9e6da] rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full`} style={{ width: s.width }}></div>
                </div>
                <p className="text-[10px] text-[#556158]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 text-center">
            <span className="text-xs font-bold text-[#00522d]">Net Zero 2030 Commitment: 68% Achieved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
