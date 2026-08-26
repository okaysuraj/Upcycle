import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddEditBuilding() {
  const navigate = useNavigate();
  const [zones, setZones] = useState([
    { id: 1, name: 'HVAC Control Zone 01', location: 'Level 1 - Labs & Cleanrooms', icon: 'bolt', color: 'bg-blue-100 text-blue-700' },
    { id: 2, name: 'Smart Lighting Grid A', location: 'Levels 1-4 - Common Areas', icon: 'lightbulb', color: 'bg-amber-100 text-amber-700' },
    { id: 3, name: 'Hydraulic Pressure Node', location: 'Basement - Main Line Inlet', icon: 'opacity', color: 'bg-cyan-100 text-cyan-700' }
  ]);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Facility Blueprint & Operations
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Building Configuration</h1>
          <p className="text-sm text-[#556158] mt-1 max-w-2xl">
            Configure structural details, sensor nodes, and internal zoning for high-efficiency resource tracking.
          </p>
        </div>
        <div className="flex gap-2.5">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-full border border-[#bec9be]/50 text-xs font-bold text-[#0d1e25] hover:bg-[#e7f6ff] transition-all cursor-pointer shadow-sm"
          >
            Discard
          </button>
          <button 
            type="button"
            onClick={() => {
              alert('Building configuration saved successfully!');
              navigate('/operations/buildings');
            }}
            className="px-6 py-2.5 rounded-full bg-[#00522d] text-white text-xs font-bold shadow-md hover:bg-[#003d21] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Save Building</span>
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Form & Score Projection (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Efficiency Score Projection Card */}
          <section className="bg-[#00522d] text-white rounded-[28px] p-6 sm:p-8 flex items-center justify-between shadow-md relative overflow-hidden">
            <div className="space-y-3 z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9cf6ba]">Efficiency Score Projection</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold leading-none tracking-tight">84</span>
                <span className="text-lg opacity-80">/100</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-[#9cf6ba] text-[#00210f] px-2.5 py-0.5 rounded-full font-bold">
                  +12% Improvement
                </span>
                <span className="text-white/80">Based on active smart bin density and LED automation.</span>
              </div>
            </div>

            <div className="relative w-28 h-28 hidden sm:flex items-center justify-center z-10 shrink-0">
              <span className="material-symbols-outlined text-6xl text-[#9cf6ba]" style={{ fontVariationSettings: "'FILL' 1" }}>
                energy_savings_leaf
              </span>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 pointer-events-none"></div>
          </section>

          {/* General Information Form */}
          <section className="bg-white rounded-[28px] border border-[#bec9be]/30 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#bec9be]/20">
              <span className="material-symbols-outlined text-[#00522d] text-2xl">info</span>
              <h3 className="text-xl font-bold text-[#0d1e25]">General Building Specs</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Building Name</label>
                <input 
                  type="text" 
                  defaultValue="Science & Research Wing B" 
                  className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0d1e25] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d]" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Building ID</label>
                <input 
                  type="text" 
                  disabled 
                  defaultValue="SRW-402-B" 
                  className="w-full bg-[#f4faff] border border-[#bec9be]/30 rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-[#556158] opacity-75" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Gross Floor Area (m²)</label>
                <input 
                  type="number" 
                  defaultValue="14200" 
                  className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0d1e25] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d]" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Primary Use Category</label>
                <select className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0d1e25] focus:bg-white focus:outline-none">
                  <option>Laboratory & Cleanroom</option>
                  <option>Classroom & Lecture Hall</option>
                  <option>Administrative Office</option>
                  <option>Dining & Food Hall</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Max Design Occupancy</label>
                <input 
                  type="number" 
                  defaultValue="1250" 
                  className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0d1e25] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d]" 
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Internal Zoning & Sensors (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <section className="bg-white rounded-[28px] border border-[#bec9be]/30 p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-[#bec9be]/20">
              <h3 className="text-lg font-bold text-[#0d1e25]">Zonal Partitioning</h3>
              <span className="text-xs font-bold text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
                {zones.length} Zones
              </span>
            </div>

            <div className="space-y-3">
              {zones.map((z) => (
                <div key={z.id} className="p-3.5 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#bec9be]/40 text-[#00522d] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-lg">{z.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#0d1e25] truncate">{z.name}</h4>
                    <p className="text-[11px] text-[#556158] truncate">{z.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              type="button"
              onClick={() => {
                const newId = zones.length + 1;
                setZones([...zones, { id: newId, name: `Sub-Zone 0${newId}`, location: `Level ${newId} East Wing`, icon: 'domain', color: 'bg-green-100' }]);
              }}
              className="w-full py-2.5 border-2 border-dashed border-[#bec9be]/60 hover:border-[#00522d] text-[#00522d] text-xs font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              <span>Add Sub-Zone</span>
            </button>
          </section>

          <section className="bg-[#f4faff] rounded-[28px] border border-[#bec9be]/30 p-6 shadow-sm space-y-3">
            <span className="material-symbols-outlined text-3xl text-[#00522d]">verified_user</span>
            <h4 className="text-base font-bold text-[#0d1e25]">LEED v4.1 Compliance Ready</h4>
            <p className="text-xs text-[#556158] leading-relaxed">
              Zonal sub-metering automatically exports to municipal carbon accounting workflows.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
