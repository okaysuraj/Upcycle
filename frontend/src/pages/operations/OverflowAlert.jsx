import React from 'react';

export default function OverflowAlert() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-6">
      {/* Alert Banner */}
      <section className="animate-[pulse-red_2s_cubic-bezier(0.4,0,0.6,1)_infinite] origin-center">
        <style>
          {`
            @keyframes pulse-red {
              0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 218, 214, 0.7); }
              50% { opacity: 0.95; transform: scale(1.01); box-shadow: 0 0 20px 10px rgba(255, 218, 214, 0); }
            }
          `}
        </style>
        <div className="bg-red-50 text-red-900 p-6 md:p-8 rounded-[32px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-red-200 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply pointer-events-none"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-[32px] font-display font-bold leading-tight tracking-tight mb-1 text-red-700">Critical Fill Alert</h2>
              <p className="text-base md:text-lg opacity-90 font-medium">Sensor ID: UP-9928-X reported 104% capacity at 09:42 AM.</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shrink-0 border border-red-200 shadow-sm relative z-10">
            <span className="font-bold text-red-700 text-lg uppercase tracking-wider">Priority 1</span>
          </div>
        </div>
      </section>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Map and Metadata */}
        <div className="lg:col-span-8 space-y-gutter flex flex-col">
          {/* Map Component */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden min-h-[400px] lg:h-[500px] relative shadow-sm">
            <div className="w-full h-full bg-surface-container">
              <img className="w-full h-full object-cover grayscale-[0.2]" data-alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7yte_Q_jgjwesHNpdzJGb502klng9sQll0krPu5WFB8ky9blHoR7bK9vdlVY0gzG10R9EKI7vkliVvjxhFw2BpF1LYQGdC-AZUE3zVV28myRxddXuQoVop09_U05IViXGqujrn_JR0bWLsKvq877lY62vbln-xd9X0N6kURndrRR18QdjQUMi38YZ5D4teyb5-EwFbgfhvttMcNDoL1nWv9TFtoRurADQeWTnPMNwZe8G2dGSq0cfQohc6Fch5MGpPRHpt1OPz7U" />
            </div>
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold text-primary shadow-md border border-white/20">
                <span className="material-symbols-outlined text-[18px]">my_location</span>
                Sector 7G: West Municipal Park
              </div>
            </div>
            {/* Pulsing Beacon on Map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8">
               <div className="w-full h-full bg-error rounded-full animate-ping absolute opacity-75"></div>
               <div className="w-4 h-4 bg-error rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-lg"></div>
            </div>
            <div className="absolute bottom-6 right-6">
              <button className="bg-white p-3.5 rounded-full shadow-lg text-primary hover:bg-surface-container-lowest transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined">zoom_in_map</span>
              </button>
            </div>
          </div>
          
          {/* Bin Identifier Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Identifier</p>
              <p className="font-display text-xl font-bold text-primary">BIN-449-ALPHA</p>
              <div className="mt-5 flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full w-fit">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-xs font-bold uppercase">Sensors Online</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Waste Type</p>
              <p className="font-display text-xl font-bold text-primary">Mixed Recycling</p>
              <div className="mt-5 w-full bg-surface-container h-2.5 rounded-full overflow-hidden shadow-inner">
                <div className="bg-primary h-full w-[100%] rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="absolute inset-0 bg-error/5"></div>
              <div className="relative z-10">
                 <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Last Collection</p>
                 <p className="font-display text-xl font-bold text-primary">22h 14m ago</p>
                 <p className="text-sm text-error mt-4 font-bold bg-error/10 px-3 py-1.5 rounded-full w-fit flex items-center gap-1 border border-error/20">
                   <span className="material-symbols-outlined text-[16px]">schedule</span>
                   +6h vs Schedule
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Action Panel & Live Feed */}
        <div className="lg:col-span-4 space-y-gutter flex flex-col">
          {/* Dispatch Action Card */}
          <div className="bg-white border border-outline-variant/30 p-8 rounded-[32px] flex flex-col items-center text-center shadow-sm">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100 shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl">local_shipping</span>
            </div>
            <h3 className="font-display text-headline-sm font-bold mb-3 text-on-surface">Immediate Pickup</h3>
            <p className="text-sm font-medium text-on-surface-variant mb-8 px-2 leading-relaxed">Redirect Unit 04-B (2.4 miles away) for emergency clearance. Estimated arrival: 12 mins.</p>
            
            <button className="w-full bg-primary text-white py-5 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all mb-4">
              Dispatch Unit 04-B
            </button>
            <button className="w-full py-4 rounded-full border-2 border-outline-variant/50 text-sm font-bold text-on-surface-variant hover:bg-surface-container-lowest hover:border-primary/50 hover:text-primary transition-all">
              Assign to Next Route
            </button>
          </div>
          
          {/* Visual Confirmation (Glass Card) */}
          <div className="bg-white border border-outline-variant/30 p-6 rounded-[24px] overflow-hidden relative shadow-sm flex-1 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                <span className="w-2.5 h-2.5 bg-error rounded-full animate-pulse shadow-sm"></span>
                Live Camera Feed
              </span>
              <span className="text-xs font-bold text-on-surface-variant">CAM-WEST-09</span>
            </div>
            
            <div className="aspect-video bg-black rounded-2xl overflow-hidden relative mb-5 shadow-inner border border-outline-variant/20">
              <img className="w-full h-full object-cover opacity-80" data-alt="Camera Feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm-AAVwK1CpSnyoQ0gDInBcvVulWRRoH9Kdn77RdpTgDxma6aYdR6UcMTd73469bUBSxD1-DwLFPLneC_HPTGE5veUK736RpC4Gy4ZvPIMTwHkfRm_FUouircrPL_P9JHzpQMocLRchaP6-VUJ94OYBGZ9ld7lDBmm1XhApZJ17gB1rrAa2vqJHjkcuz7PDEviNy_V2ry4pcHDQN6EI0ODWQ6l6vL7idWIXxgbYgreWW1rW_8Q2JJ129CEvAkL1G6K5w0rWnHxleA" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-xs tracking-widest font-bold border border-white/20 shadow-xl">
                   104% OVERFLOW DETECTED
                </div>
              </div>
              {/* Scan line effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10 animate-[scan_3s_linear_infinite]"></div>
              <style>{`@keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(1000%); } }`}</style>
            </div>
            
            <div className="space-y-3 mt-auto">
              <div className="flex justify-between items-center bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/20">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Estimated Weight</span>
                <span className="font-bold text-on-surface">412 kg</span>
              </div>
              <div className="flex justify-between items-center bg-error/5 p-3 rounded-xl border border-error/20">
                <span className="text-xs font-bold text-error uppercase tracking-wider">Obstruction Level</span>
                <span className="font-bold text-error">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
