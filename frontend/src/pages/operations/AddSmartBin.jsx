import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddSmartBin() {
  const navigate = useNavigate();
  const [isTesting, setIsTesting] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);
  
  const handleTestConnection = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setTestSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Top App Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            IoT Sensor Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Add Smart Bin</h2>
          <p className="text-sm text-[#556158] mt-1">Register and provision telemetry sensors to the municipal fleet network.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Form (7 Cols) */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <section className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#bec9be]/20">
              <div className="w-10 h-10 rounded-xl bg-[#dff1fb] flex items-center justify-center text-[#00522d]">
                <span className="material-symbols-outlined text-2xl">app_registration</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d1e25]">Device Configuration</h3>
                <p className="text-xs text-[#556158]">Register serial ID and allocate to physical campus sector.</p>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Smart bin successfully provisioned!'); navigate('/operations/waste'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#556158]" htmlFor="bin_id">Bin ID (Serial Number)</label>
                  <input 
                    className="w-full rounded-xl border border-[#bec9be]/40 bg-[#f4faff] focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] px-4 py-2.5 text-sm font-semibold text-[#0d1e25] outline-none" 
                    id="bin_id" 
                    placeholder="SN-ECO-2024-XXXX" 
                    defaultValue="SN-ECO-2024-0492"
                    type="text" 
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#556158]" htmlFor="waste_type">Waste Type</label>
                  <select className="w-full rounded-xl border border-[#bec9be]/40 bg-[#f4faff] focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] px-4 py-2.5 text-sm font-semibold text-[#0d1e25] outline-none" id="waste_type">
                    <option>Organic / Bio-Compost</option>
                    <option>Plastics & Polymers</option>
                    <option>Paper & Cardboard</option>
                    <option>Glass Recycling</option>
                    <option>Hazardous / Electronic</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#556158]" htmlFor="location">Building / Zone</label>
                  <select className="w-full rounded-xl border border-[#bec9be]/40 bg-[#f4faff] focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] px-4 py-2.5 text-sm font-semibold text-[#0d1e25] outline-none" id="location">
                    <option>Main Library Plaza (Sector 1)</option>
                    <option>Engineering Hall A (Sector 4)</option>
                    <option>Student Union South (Sector 2)</option>
                    <option>Athletic Center Gate 4 (Sector 3)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#556158]" htmlFor="frequency">Collection Threshold</label>
                  <select className="w-full rounded-xl border border-[#bec9be]/40 bg-[#f4faff] focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] px-4 py-2.5 text-sm font-semibold text-[#0d1e25] outline-none" id="frequency">
                    <option>Auto-Dispatch at 85% Fill</option>
                    <option>Auto-Dispatch at 90% Fill</option>
                    <option>Daily Scheduled Routine</option>
                  </select>
                </div>
              </div>
              
              <div className="p-3.5 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#00522d] text-lg">info</span>
                <p className="text-xs text-[#556158]">Assigning this bin will automatically integrate into the automated fleet dispatch optimizer.</p>
              </div>
              
              <div className="flex justify-end gap-2.5 pt-4 border-t border-[#bec9be]/20">
                <button 
                  type="button" 
                  onClick={() => navigate(-1)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold border border-[#bec9be]/50 text-[#0d1e25] hover:bg-[#e7f6ff] transition-colors"
                >
                  Discard
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#00522d] text-white shadow-md hover:bg-[#003d21] transition-all cursor-pointer"
                >
                  Register Smart Bin
                </button>
              </div>
            </form>
          </section>
        </div>
        
        {/* Right Column: Technical Setup & Status (5 Cols) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <section className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#bec9be]/20">
              <h3 className="text-xl font-bold text-[#0d1e25]">Sensor Connectivity</h3>
              <span className="flex h-2.5 w-2.5 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${testSuccess ? 'bg-[#2eb872]' : 'bg-[#ba1a1a]'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${testSuccess ? 'bg-[#2eb872]' : 'bg-[#ba1a1a]'}`}></span>
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 flex justify-between items-center text-xs font-bold">
                <span className="text-[#556158]">LoRaWAN Protocol</span>
                <span className="text-[#00522d]">EU868 (Connected)</span>
              </div>
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 flex justify-between items-center text-xs font-bold">
                <span className="text-[#556158]">Ultrasonic Fill Sensor</span>
                <span className="text-[#00522d]">Calibrated (±1cm)</span>
              </div>
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 flex justify-between items-center text-xs font-bold">
                <span className="text-[#556158]">Optical Sensor / Camera</span>
                <span className="text-[#00522d]">Active (AI Stream)</span>
              </div>
            </div>

            <button 
              type="button"
              onClick={handleTestConnection}
              disabled={isTesting}
              className="w-full py-2.5 bg-[#dff1fb] hover:bg-[#9cf6ba] text-[#00522d] rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className={`material-symbols-outlined text-[16px] ${isTesting ? 'animate-spin' : ''}`}>
                {isTesting ? 'sync' : 'network_check'}
              </span>
              <span>{isTesting ? 'Testing Packet Sync...' : (testSuccess ? 'Signal Optimal (100%)' : 'Test IoT Connection')}</span>
            </button>
          </section>

          <section className="bg-[#00522d] text-white rounded-[28px] p-6 shadow-sm space-y-2">
            <span className="material-symbols-outlined text-3xl text-[#9cf6ba]">battery_charging_full</span>
            <h4 className="text-base font-bold tracking-tight">Solar Self-Harvesting</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Equipped with a 5W micro-photovoltaic cell providing 5+ years of continuous off-grid telemetry.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
