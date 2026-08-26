import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePickupRequest() {
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState('All Zones');
  const [selectedBins, setSelectedBins] = useState(['BIN-40291', 'BIN-40112']);

  const bins = [
    { id: 'BIN-40291', loc: 'Central Plaza A', zone: 'Central Plaza', level: 98, type: 'Plastic/Glass', cap: '120L' },
    { id: 'BIN-40315', loc: 'North Park Entrance', zone: 'North Campus', level: 87, type: 'Organic Waste', cap: '240L' },
    { id: 'BIN-40112', loc: 'West Side Lab 2', zone: 'West Wing', level: 92, type: 'Hazardous', cap: '60L' },
    { id: 'BIN-40544', loc: 'Library Main', zone: 'Central Plaza', level: 85, type: 'Paper/Cardboard', cap: '120L' },
    { id: 'BIN-40221', loc: 'Cafeteria Rear', zone: 'North Campus', level: 95, type: 'General Waste', cap: '240L' },
    { id: 'BIN-40677', loc: 'Sports Complex', zone: 'West Wing', level: 82, type: 'Plastic/Glass', cap: '120L' }
  ];

  const toggleBin = (id) => {
    setSelectedBins(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const filteredBins = bins.filter(b => selectedZone === 'All Zones' || b.zone === selectedZone);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Smart Logistics Dispatch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Create Pickup Request</h2>
          <p className="text-sm text-[#556158] mt-1">Select overflowing smart bins to optimize route and dispatch EV fleet.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Filters & Bin Grid (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-5">
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#bec9be]/30 flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-[#556158]">Filter Zone:</span>
              <div className="flex gap-1.5 flex-wrap">
                {['All Zones', 'North Campus', 'Central Plaza', 'West Wing'].map((zone) => (
                  <button 
                    key={zone}
                    type="button"
                    onClick={() => setSelectedZone(zone)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedZone === zone 
                        ? 'bg-[#00522d] text-white shadow-sm' 
                        : 'bg-[#f4faff] border border-[#bec9be]/40 text-[#556158] hover:bg-[#e7f6ff]'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>
            <span className="text-xs text-[#556158]">
              Selected: <b>{selectedBins.length} bins</b>
            </span>
          </div>

          {/* Bin Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredBins.map((bin) => {
              const isSelected = selectedBins.includes(bin.id);
              return (
                <div 
                  key={bin.id}
                  onClick={() => toggleBin(bin.id)}
                  className={`group relative p-5 rounded-[24px] cursor-pointer transition-all shadow-sm ${
                    isSelected 
                      ? 'bg-white border-2 border-[#00522d] shadow-md ring-4 ring-[#00522d]/10' 
                      : 'bg-white border border-[#bec9be]/40 hover:border-[#00522d]/50'
                  }`}
                >
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white transition-all ${
                    isSelected ? 'bg-[#00522d]' : 'border border-[#bec9be]/60 bg-transparent'
                  }`}>
                    {isSelected && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#dff1fb] flex items-center justify-center text-[#00522d]">
                      <span className="material-symbols-outlined text-2xl">delete</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-mono font-bold text-[#556158]">{bin.id}</p>
                      <h4 className="font-bold text-sm text-[#0d1e25]">{bin.loc}</h4>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-[#556158]">Fill Level</span>
                        <span className={bin.level > 90 ? 'text-[#ba1a1a]' : 'text-[#00522d]'}>
                          {bin.level}% Full
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#d9e6da] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${bin.level > 90 ? 'bg-[#ba1a1a]' : 'bg-[#00522d]'}`}
                          style={{ width: `${bin.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#bec9be]/20 text-[11px] text-[#556158]">
                      <span className="px-2 py-0.5 rounded-full bg-[#f4faff] font-semibold text-[#0d1e25] border border-[#bec9be]/30">
                        {bin.type}
                      </span>
                      <span>{bin.cap}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Route Optimization Summary Panel (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-5">
            <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Route Summary</h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold uppercase text-[#556158]">Total Selected Waste</span>
                <p className="text-2xl font-bold text-[#00522d] mt-0.5">{selectedBins.length * 85} kg</p>
              </div>

              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold uppercase text-[#556158]">Estimated Collection Time</span>
                <p className="text-2xl font-bold text-[#0d1e25] mt-0.5">{selectedBins.length * 15} Mins</p>
              </div>

              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold uppercase text-[#556158]">Assigned EV Truck</span>
                <p className="text-sm font-bold text-[#0d1e25] mt-0.5">Truck #02 (Fleet North)</p>
              </div>
            </div>

            <button 
              type="button"
              disabled={selectedBins.length === 0}
              onClick={() => {
                alert(`Dispatch requested for ${selectedBins.length} bins!`);
                navigate('/operations/waste');
              }}
              className="w-full py-3.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Confirm & Dispatch Pickup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
