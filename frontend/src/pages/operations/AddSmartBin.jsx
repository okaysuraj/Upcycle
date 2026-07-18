import React, { useState } from 'react';

export default function AddSmartBin() {
  const [isTesting, setIsTesting] = useState(false);
  
  const handleTestConnection = () => {
    setIsTesting(true);
    setTimeout(() => setIsTesting(false), 2000);
  };

  return (
    <div className="flex flex-col gap-md">
      {/* Top App Bar */}
      <div className="flex justify-between items-center mb-md">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-md text-headline-md text-primary">Add Smart Bin</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Form */}
        <div className="md:col-span-7 space-y-gutter">
          <section className="bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">app_registration</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md">Device Configuration</h3>
                <p className="font-body-md text-on-surface-variant">Register a new sensor-enabled unit to the network.</p>
              </div>
            </div>
            
            <form className="space-y-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <div className="space-y-1">
                  <label className="font-label-md text-on-surface-variant px-1" htmlFor="bin_id">Bin ID (Serial Number)</label>
                  <input className="w-full rounded-xl border border-outline-variant/50 bg-surface-ice focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all" id="bin_id" placeholder="SN-ECO-2024-XXXX" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-on-surface-variant px-1" htmlFor="waste_type">Waste Type</label>
                  <select className="w-full rounded-xl border border-outline-variant/50 bg-surface-ice focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all" id="waste_type">
                    <option>Organic/Compost</option>
                    <option>Recyclables (Mixed)</option>
                    <option>General Waste</option>
                    <option>Paper & Cardboard</option>
                    <option>Glass Only</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <div className="space-y-1">
                  <label className="font-label-md text-on-surface-variant px-1" htmlFor="location">Building / Zone</label>
                  <select className="w-full rounded-xl border border-outline-variant/50 bg-surface-ice focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all" id="location">
                    <option>Main Library Plaza</option>
                    <option>Engineering Hall A</option>
                    <option>Student Union South</option>
                    <option>Athletic Center Gate 4</option>
                    <option>Research Park East</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-on-surface-variant px-1" htmlFor="frequency">Collection Frequency</label>
                  <select className="w-full rounded-xl border border-outline-variant/50 bg-surface-ice focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all" id="frequency">
                    <option>Dynamic (On Fill)</option>
                    <option>Daily Morning</option>
                    <option>Twice Weekly</option>
                    <option>Weekly (Mondays)</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-base">
                <div className="flex items-center gap-2 p-4 bg-tertiary-container/10 rounded-xl border border-tertiary-container/20">
                  <span className="material-symbols-outlined text-tertiary">info</span>
                  <p className="font-label-md text-tertiary">Assigning this bin will automatically update the regional collection route.</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-md border-t border-outline-variant/20">
                <button className="px-6 py-2.5 rounded-full font-label-md border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">Discard</button>
                <button className="px-8 py-2.5 rounded-full font-label-md bg-primary text-on-primary shadow-lg hover:scale-[0.98] transition-transform" type="button">Register Bin</button>
              </div>
            </form>
          </section>
        </div>
        
        {/* Right Column: Technical Setup & Status */}
        <div className="md:col-span-5 space-y-gutter">
          {/* Technical Setup Glass Card */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-md border border-outline-variant/30 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-gutter">
                <h3 className="font-headline-md text-headline-md text-primary">Technical Sync</h3>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
                </span>
              </div>
              
              <div className="space-y-md">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">wifi</span>
                    <span className="font-body-md text-on-surface-variant">LoRaWAN Gateway</span>
                  </div>
                  <span className="font-label-sm px-2 py-0.5 rounded bg-success-container/20 text-primary font-bold">Active</span>
                </div>
                
                <div className="space-y-3">
                  <p className="font-label-md text-on-surface-variant">Sensor Calibration Signal</p>
                  <div className="h-2 w-full bg-secondary-container rounded-full overflow-hidden">
                    <div className={`h-full bg-primary transition-all duration-1000 ${isTesting ? 'w-[95%]' : 'w-2/3'}`}></div>
                  </div>
                  <div className="flex justify-between font-label-sm text-on-surface-variant">
                    <span>Syncing...</span>
                    <span>{isTesting ? '95%' : '68%'} Strength</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleTestConnection}
                  className="w-full py-4 rounded-xl font-label-md bg-white border border-primary text-primary flex items-center justify-center gap-3 hover:bg-primary/5 active:scale-95 transition-all"
                >
                  <span className={`material-symbols-outlined ${isTesting ? 'animate-spin' : ''}`}>
                    {isTesting ? 'sync' : 'settings_input_antenna'}
                  </span>
                  <span>{isTesting ? 'Testing...' : 'Test Connection'}</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
