import React from 'react';

export default function PickupAlerts() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-6">
      <header className="mb-4">
        <h1 className="font-display text-headline-lg font-bold text-on-surface mb-2">Active Pickup Alerts</h1>
        <p className="font-body-md text-on-surface-variant text-lg">Real-time logistics tracking for campus waste reduction.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Bento Hero Area: Map & Driver Info (8 Columns) */}
        <section className="lg:col-span-8 flex flex-col gap-gutter">
          {/* Map Container */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[32px] overflow-hidden shadow-sm border border-outline-variant/30 group">
            <div className="absolute inset-0 z-0 bg-surface-container-low transition-transform duration-1000 group-hover:scale-105">
                <img className="w-full h-full object-cover grayscale-[0.2]" data-alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7yte_Q_jgjwesHNpdzJGb502klng9sQll0krPu5WFB8ky9blHoR7bK9vdlVY0gzG10R9EKI7vkliVvjxhFw2BpF1LYQGdC-AZUE3zVV28myRxddXuQoVop09_U05IViXGqujrn_JR0bWLsKvq877lY62vbln-xd9X0N6kURndrRR18QdjQUMi38YZ5D4teyb5-EwFbgfhvttMcNDoL1nWv9TFtoRurADQeWTnPMNwZe8G2dGSq0cfQohc6Fch5MGpPRHpt1OPz7U" />
            </div>
            
            {/* ETA Floating Glass Card */}
            <div className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl flex flex-col items-center min-w-[140px] shadow-sm border border-white/40">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Arriving In</span>
              <span className="font-display text-[42px] leading-none text-primary font-bold">12</span>
              <span className="text-sm font-bold text-on-surface-variant mt-1 tracking-widest">MINUTES</span>
            </div>
            
             {/* Map Pins */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-10">
               <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute -top-2 -left-2"></div>
               <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center absolute border-2 border-white shadow-lg">
                  <span className="material-symbols-outlined text-[16px]">local_shipping</span>
               </div>
            </div>
             <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-10">
               <div className="w-6 h-6 bg-error text-white rounded-full flex items-center justify-center absolute border-2 border-white shadow-lg">
                  <span className="material-symbols-outlined text-[12px]">location_on</span>
               </div>
            </div>

            {/* Driver Profile Floating Card */}
            <div className="absolute bottom-6 left-6 z-10 bg-white/80 backdrop-blur-md p-3.5 rounded-[24px] flex items-center gap-4 w-[280px] shadow-sm border border-white/40">
              <img className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover" data-alt="Driver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiOAtRff-OBBEyZf9lfJbYsEWtzCjcChB91mkeTl1vYlH7d2wuMUcS5IFdfih5gSSwx1mkrlWS1JpwqMSJxo7chwo9SIhgfOx14MukLYgrQevQlNiNQbKJI6nr_b9vZTZ6TDibgaKzbTbPaW9Q3YjDKwUf4C400LBAQUehginNWNUe697mTmT6aqHOp6W_LsF85ZWiBapTe_eDhG5K6kVCxZSG-QtnuuubFymrJQ86fZP9TGeN76npmuqOAN5YITMFw_INaLMOMac" />
              <div>
                <p className="text-sm font-bold text-on-surface">Marcus Chen</p>
                <p className="text-xs text-on-surface-variant font-medium">Lead Logistics Pilot</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold text-on-surface">4.9</span>
                </div>
              </div>
              <button className="ml-auto w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:scale-95 transition-transform shadow-md">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </button>
            </div>
          </div>

          {/* Upcoming Schedule (Nested in Bento) */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-outline-variant/30 shadow-sm">
            <h3 className="font-display text-headline-sm font-bold text-on-surface mb-6">Upcoming Collections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
              {/* Organic Waste Card */}
              <div className="bg-green-50/50 border border-green-100 p-5 rounded-2xl hover:bg-green-50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-green-700 text-[32px] bg-green-100 p-2 rounded-xl group-hover:scale-110 transition-transform">compost</span>
                  <span className="bg-green-200 text-green-800 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Scheduled</span>
                </div>
                <p className="text-base font-bold text-on-surface mb-1">Organic Waste</p>
                <p className="text-sm text-on-surface-variant font-medium">Tomorrow, 09:00 AM</p>
              </div>
              
              {/* Mixed Paper Card */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-2xl hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-blue-600 text-[32px] bg-blue-50 p-2 rounded-xl group-hover:scale-110 transition-transform">news</span>
                  <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Processing</span>
                </div>
                <p className="text-base font-bold text-on-surface mb-1">Mixed Paper</p>
                <p className="text-sm text-on-surface-variant font-medium">Oct 14, 11:30 AM</p>
              </div>
              
              {/* E-Waste Card */}
              <div className="bg-red-50/50 border border-red-100 p-5 rounded-2xl hover:bg-red-50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-error text-[32px] bg-error/10 p-2 rounded-xl group-hover:scale-110 transition-transform">developer_board</span>
                  <span className="bg-error/20 text-error px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">High Priority</span>
                </div>
                <p className="text-base font-bold text-on-surface mb-1">E-Waste</p>
                <p className="text-sm text-error font-medium">Oct 16, 02:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar Bento: Timeline & Stats (4 Columns) */}
        <section className="lg:col-span-4 flex flex-col gap-gutter">
          {/* Pickup Journey Timeline */}
          <div className="bg-white p-8 rounded-[32px] border border-outline-variant/30 flex-1 shadow-sm flex flex-col">
            <h3 className="font-display text-headline-sm font-bold text-on-surface mb-8">Pickup Journey</h3>
            <div className="relative space-y-8 flex-1">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-8 w-0.5 bg-outline-variant/30"></div>
              
              {/* Timeline Items */}
              <div className="relative flex items-center gap-6">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 shadow-sm border-2 border-white shrink-0">
                  <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Request Confirmed</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">08:15 AM</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-6">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 shadow-sm border-2 border-white shrink-0">
                  <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Vehicle Dispatched</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">09:40 AM</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-6">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 shadow-sm border-2 border-white shrink-0">
                  <span className="material-symbols-outlined text-white text-[14px] animate-pulse">local_shipping</span>
                </div>
                <div className="bg-primary/5 p-3.5 rounded-xl border border-primary/20 flex-1">
                  <p className="text-sm font-bold text-primary">In Transit</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">Expected 10:15 AM</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-6 opacity-40">
                <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center z-10 border-2 border-white shrink-0"></div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Arrival & Loading</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">Pending</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-6 opacity-40">
                <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center z-10 border-2 border-white shrink-0"></div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Drop-off at Center</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">Pending</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-8 py-4 px-6 bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-full font-bold hover:bg-yellow-200 transition-all duration-300 group flex items-center justify-center gap-3 shadow-sm active:scale-95">
              <span>Request Priority</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
