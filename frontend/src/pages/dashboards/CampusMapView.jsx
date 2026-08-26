import React, { useState } from 'react';

const buildingsData = {
  'Tech Hub A': {
    type: 'Innovation Center',
    occupancy: 412,
    energy: 45.2,
    efficiency: 98,
    smartBins: 24,
    alerts: [
      { icon: 'check_circle', color: 'text-[#2eb872]', text: 'Optimal cooling cycles maintained' },
      { icon: 'history', color: 'text-[#556158]', text: 'Scheduled automated bin pickup in 4h' }
    ]
  },
  'Library West': {
    type: 'Academic Facility',
    occupancy: 856,
    energy: 68.1,
    efficiency: 72,
    smartBins: 16,
    alerts: [
      { icon: 'warning', color: 'text-[#24502c]', text: 'Occupancy threshold exceeded (85%)' },
      { icon: 'air', color: 'text-[#24502c]', text: 'CO2 levels slightly elevated in Reading Room' }
    ]
  },
  'Athletics Complex': {
    type: 'Sports & Recreation',
    occupancy: 120,
    energy: 112.5,
    efficiency: 44,
    smartBins: 18,
    alerts: [
      { icon: 'error', color: 'text-[#ba1a1a]', text: 'Critical: HVAC Compressor Overload' },
      { icon: 'water_drop', color: 'text-[#556158]', text: 'Greywater reclamation filter check' }
    ]
  }
};

export default function CampusMapView() {
  const [selectedBuilding, setSelectedBuilding] = useState('Tech Hub A');
  const [mapMode, setMapMode] = useState('All');

  const data = buildingsData[selectedBuilding] || buildingsData['Tech Hub A'];

  return (
    <div className="w-full h-[calc(100vh-120px)] relative overflow-hidden rounded-[32px] border border-[#bec9be]/30 shadow-md font-['Hanken_Grotesk',sans-serif]">
      {/* Map Canvas with realistic campus map pattern */}
      <div className="absolute inset-0 bg-[#dff1fb]/60">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1D2TV9EGSwDFkh8NI5BWiNGDFV21BuzONkN3zEJICIP1EY4MjzTY6B3kPaQz6fIoiPUsHrtI6KXBlzLPQ6gmydPt2z6ns_bZCTZR9lH7EOpvchWYGDxrOrG-0SRdqxKJ_Iozu89PK6jpiLQ2U-pXjcUuHSJsU8brTLbypYGk5nOmnI8QreBVgaz2VqACDZMKCb1_SwzJ3JVX5Ksc8L-_XuBTAJvnYKbh8tCwliPlovzyIEcfiKjmABBsWcsZjTLb6QVhHWTqhgO0')" 
          }}
        >
          {/* Layer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00522d]/10 to-transparent pointer-events-none"></div>

          {/* Interactive Marker 1: Tech Hub A */}
          <div 
            className="absolute top-1/4 left-1/3 cursor-pointer group z-20" 
            onClick={() => setSelectedBuilding('Tech Hub A')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${
              selectedBuilding === 'Tech Hub A' ? 'bg-[#00522d] text-white scale-125 ring-4 ring-[#9cf6ba]' : 'bg-[#2eb872] text-white animate-bounce'
            }`}>
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1.5 rounded-xl shadow-xl border border-[#bec9be]/30 min-w-[140px] pointer-events-none text-center">
              <p className="font-bold text-[#00522d] text-xs">Tech Hub A</p>
              <p className="text-[10px] text-[#556158]">Efficiency: 98%</p>
            </div>
          </div>
          
          {/* Interactive Marker 2: Library West */}
          <div 
            className="absolute top-1/2 left-2/3 cursor-pointer group z-20" 
            onClick={() => setSelectedBuilding('Library West')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${
              selectedBuilding === 'Library West' ? 'bg-[#00522d] text-white scale-125 ring-4 ring-[#9cf6ba]' : 'bg-[#24502c] text-white animate-pulse'
            }`}>
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1.5 rounded-xl shadow-xl border border-[#bec9be]/30 min-w-[140px] pointer-events-none text-center">
              <p className="font-bold text-[#00522d] text-xs">Library West</p>
              <p className="text-[10px] text-[#556158]">Occupancy: 85%</p>
            </div>
          </div>
          
          {/* Interactive Marker 3: Athletics Complex */}
          <div 
            className="absolute bottom-1/4 left-1/2 cursor-pointer group z-20" 
            onClick={() => setSelectedBuilding('Athletics Complex')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${
              selectedBuilding === 'Athletics Complex' ? 'bg-[#00522d] text-white scale-125 ring-4 ring-[#ffdad6]' : 'bg-[#ba1a1a] text-white animate-pulse'
            }`}>
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1.5 rounded-xl shadow-xl border border-[#bec9be]/30 min-w-[150px] pointer-events-none text-center">
              <p className="font-bold text-[#ba1a1a] text-xs">Athletics Complex</p>
              <p className="text-[10px] text-[#556158]">HVAC Overload</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Map Controls Floating Bar */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#bec9be]/40 shadow-md">
        {['All Facilities', 'Energy Grid', 'Waste & Bins', 'Sensors'].map((mode) => (
          <button 
            key={mode}
            type="button"
            onClick={() => setMapMode(mode)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              mapMode === mode 
                ? 'bg-[#00522d] text-white shadow-sm' 
                : 'text-[#556158] hover:bg-[#e7f6ff]'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Bento Sidebar Overlay (Building Telemetry) */}
      <aside className="absolute right-6 top-6 bottom-6 w-[380px] z-30 flex flex-col pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md rounded-[28px] p-6 shadow-xl border border-[#bec9be]/40 pointer-events-auto flex flex-col justify-between flex-1 space-y-4">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Active Telemetry
                </span>
                <h2 className="text-2xl font-bold text-[#0d1e25] tracking-tight">{selectedBuilding}</h2>
                <p className="text-xs text-[#556158]">{data.type}</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-xl">domain</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold text-[#556158] uppercase">Efficiency Score</span>
                <p className="text-2xl font-bold text-[#00522d] mt-0.5">{data.efficiency}%</p>
              </div>
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold text-[#556158] uppercase">Current Load</span>
                <p className="text-2xl font-bold text-[#0d1e25] mt-0.5">{data.energy} <span className="text-xs font-normal">kW</span></p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#556158]">Diagnostics & Signals</h4>
              {data.alerts.map((a, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f4faff] border border-[#bec9be]/20 text-xs font-semibold text-[#0d1e25]">
                  <span className={`material-symbols-outlined text-base ${a.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {a.icon}
                  </span>
                  <span className="leading-tight">{a.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#bec9be]/20 space-y-2">
            <button 
              type="button"
              onClick={() => alert(`Dispatching maintenance crew to ${selectedBuilding}...`)}
              className="w-full py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">build</span>
              <span>Dispatch Maintenance Crew</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
