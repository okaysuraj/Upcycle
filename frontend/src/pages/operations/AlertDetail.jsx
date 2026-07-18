import React from 'react';

export default function AlertDetail() {
  return (
    <div className="flex flex-col gap-md">
      {/* Critical Priority Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-gutter">
        <div className="flex flex-col gap-xs">
          <div className="flex items-center gap-sm">
            <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>priority_high</span>
              CRITICAL PRIORITY
            </span>
            <span className="text-on-surface-variant font-label-md text-label-md">Alert #ALT-9042</span>
          </div>
          <h1 className="font-display text-display-sm text-on-surface leading-tight">Smart Bin #402 Overflow</h1>
        </div>
        <div className="flex gap-sm">
          <button className="bg-surface-container-highest text-on-surface-variant px-6 py-3 rounded-full font-label-md text-label-md flex items-center gap-sm hover:bg-surface-variant transition-all font-bold">
            <span className="material-symbols-outlined">share</span>
            Forward
          </button>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md flex items-center gap-sm shadow-lg hover:bg-primary-container transition-all font-bold">
            <span className="material-symbols-outlined">assignment_ind</span>
            Assign to Me
          </button>
        </div>
      </div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Detailed Info & Data */}
        <div className="lg:col-span-7 flex flex-col gap-gutter">
          {/* Alert Status Card */}
          <div className="bg-white border border-outline-variant/30 p-md rounded-[24px] shadow-sm">
            <h3 className="font-headline-md text-headline-md mb-md flex items-center gap-sm text-on-surface">
              <span className="material-symbols-outlined text-primary">sensors</span>
              Live Telemetry
            </h3>
            <div className="space-y-lg">
              <div>
                <div className="flex justify-between mb-sm">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Current Capacity</span>
                  <span className="font-headline-md text-headline-md text-error font-bold">98%</span>
                </div>
                <div className="h-4 w-full bg-secondary-container rounded-full overflow-hidden">
                  <div className="h-full bg-error transition-all duration-1000 ease-out" style={{ width: '98%' }}></div>
                </div>
                <p className="mt-2 font-label-sm text-label-sm text-on-surface-variant italic">Critical threshold (90%) exceeded at 08:42 AM</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Temperature</p>
                  <p className="font-headline-md text-headline-md text-primary font-bold">24.2°C</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Methane Level</p>
                  <p className="font-headline-md text-headline-md text-primary font-bold">Low</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Battery</p>
                  <p className="font-headline-md text-headline-md text-primary font-bold">87%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Site Logs Card */}
          <div className="bg-white border border-outline-variant/30 p-md rounded-[24px] flex-1 shadow-sm">
            <div className="flex justify-between items-center mb-md">
              <h3 className="font-headline-md text-headline-md text-on-surface">Site Logs</h3>
              <button className="text-primary font-label-md text-label-md hover:underline font-bold">Download CSV</button>
            </div>
            <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
              <div className="flex gap-md pb-4 border-b border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 w-20 font-bold">10:15 AM</span>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">Sensor Self-Test Completed</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">No mechanical issues detected. Recalibration scheduled.</p>
                </div>
              </div>
              <div className="flex gap-md pb-4 border-b border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 w-20 font-bold">09:30 AM</span>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-error">Overflow Alert Triggered</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Capacity jumped from 82% to 98% within 15 minutes.</p>
                </div>
              </div>
              <div className="flex gap-md pb-4 border-b border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 w-20 font-bold">Yesterday</span>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">Routine Collection</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Waste cleared by Campus Logistics Team A.</p>
                </div>
              </div>
              <div className="flex gap-md pb-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 w-20 font-bold">Oct 24</span>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">Maintenance Visit</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Ultrasonic sensor cleaned and verified.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map & Actions */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
          {/* Large Interactive Map Placeholder */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-1 rounded-[24px] overflow-hidden border border-outline-variant/30 shadow-md bg-surface-container-low flex items-center justify-center min-h-[300px]">
             <span className="material-symbols-outlined text-6xl text-outline-variant">map</span>
             <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/50 to-transparent"></div>
             
             {/* Map Overlays */}
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg flex flex-col gap-2">
                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-md"><span className="material-symbols-outlined text-sm">add</span></button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-md"><span className="material-symbols-outlined text-sm">remove</span></button>
             </div>
             
             {/* Alert Marker */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-error/20 rounded-full flex items-center justify-center animate-ping absolute -inset-2"></div>
                <div className="w-8 h-8 bg-error text-white rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-error/50">
                   <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded-md shadow-md text-xs font-bold whitespace-nowrap">
                  North Plaza Bin 402
                </div>
             </div>
          </div>

          {/* Action Panel */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 shadow-sm p-md">
            <h4 className="font-label-md font-bold text-on-surface mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 rounded-xl border border-outline-variant/30 hover:border-primary hover:bg-surface-container-low transition-colors group">
                 <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">local_shipping</span>
                   <span className="font-bold text-on-surface">Dispatch Urgent Truck</span>
                 </div>
                 <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl border border-outline-variant/30 hover:border-primary hover:bg-surface-container-low transition-colors group">
                 <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">build</span>
                   <span className="font-bold text-on-surface">Request Maintenance</span>
                 </div>
                 <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl border border-outline-variant/30 hover:border-error hover:bg-error-container/10 transition-colors group">
                 <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-error group-hover:scale-110 transition-transform">block</span>
                   <span className="font-bold text-error">Mark Bin as Out-of-Service</span>
                 </div>
                 <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
