import React from 'react';

export default function CreatePickupRequest() {
  return (
    <div className="flex flex-col gap-md">
      {/* Breadcrumbs & Header */}
      <div className="mb-md flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
            <span>Logistics</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">New Pickup Request</span>
          </div>
          <h2 className="font-display text-headline-lg text-on-surface">Create Pickup Request</h2>
          <p className="font-body-md text-on-surface-variant">Select overflowing bins to optimize collection routes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-surface-container-high rounded-full p-1">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-label-md font-bold shadow-md transition-all active:scale-95">Grid View</button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant text-label-md hover:bg-surface-variant transition-all">Map View</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Filters & Bin Grid */}
        <div className="lg:col-span-8 space-y-gutter">
          {/* Filters Bar */}
          <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-label-md font-bold text-on-surface-variant">Filter by Zone:</span>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-1.5 rounded-full border border-primary bg-primary-container/20 text-primary text-label-sm font-bold">All Zones</button>
                <button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-sm hover:border-primary hover:text-primary transition-colors">North Campus</button>
                <button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-sm hover:border-primary hover:text-primary transition-colors">Central Plaza</button>
                <button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-sm hover:border-primary hover:text-primary transition-colors">West Wing</button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-label-sm text-on-surface-variant hidden md:block">Showing: <b>24 overflowing bins</b></span>
              <button className="p-2 rounded-full hover:bg-surface-variant">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>

          {/* Bin Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {/* Bin Card (Selected State) */}
            <div className="group relative bg-white p-5 rounded-[24px] border-2 border-primary shadow-lg ring-4 ring-primary/5 cursor-pointer transition-all hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">delete</span>
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant">BIN-40291</p>
                  <h4 className="font-bold text-on-surface">Central Plaza A</h4>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-label-sm mb-1">
                    <span className="text-on-surface-variant">Fill Level</span>
                    <span className="text-error font-bold">98% Full</span>
                  </div>
                  <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-error rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">Plastic/Glass</span>
                  <span className="text-label-sm font-medium">120L Cap.</span>
                </div>
              </div>
            </div>

            {/* Bin Card (Standard State) */}
            {[
              { id: 'BIN-40315', loc: 'North Park Entrance', level: 87, type: 'Organic Waste', cap: '240L' },
              { id: 'BIN-40112', loc: 'West Side Lab 2', level: 92, type: 'Hazardous', cap: '60L' },
              { id: 'BIN-40544', loc: 'Library Main', level: 85, type: 'Paper/Cardboard', cap: '120L' },
              { id: 'BIN-40221', loc: 'Cafeteria Rear', level: 95, type: 'General Waste', cap: '240L' },
              { id: 'BIN-40677', loc: 'Sports Complex', level: 82, type: 'Plastic/Glass', cap: '120L' }
            ].map((bin, i) => (
              <div key={i} className="group bg-white p-5 rounded-[24px] border border-outline-variant/30 cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl">delete</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">{bin.id}</p>
                    <h4 className="font-bold text-on-surface">{bin.loc}</h4>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-label-sm mb-1">
                      <span className="text-on-surface-variant">Fill Level</span>
                      <span className="text-error-warm font-bold">{bin.level}% Full</span>
                    </div>
                    <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-error-warm rounded-full" style={{ width: `${bin.level}%` }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="px-3 py-1 rounded-full bg-surface-container text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">{bin.type}</span>
                    <span className="text-label-sm font-medium">{bin.cap} Cap.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Route Panel */}
        <aside className="lg:col-span-4 flex flex-col gap-gutter h-[calc(100vh-120px)] sticky top-[90px]">
          <div className="bg-white rounded-[24px] border border-outline-variant/30 shadow-sm flex flex-col h-full overflow-hidden">
            <div className="p-6 border-b border-outline-variant/20 bg-surface-ice">
              <h3 className="font-headline-sm text-primary mb-1">Current Selection</h3>
              <p className="text-label-md text-on-surface-variant">1 Bin Selected • Est. Route 0.4km</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Selected Bin List Item */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest border border-primary/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">drag_indicator</span>
                  <div>
                    <p className="font-bold text-label-md text-on-surface">BIN-40291</p>
                    <p className="text-label-sm text-on-surface-variant">Central Plaza A • Plastic</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-error-container hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              
              <div className="p-4 border-2 border-dashed border-outline-variant/40 rounded-xl text-center">
                <p className="text-label-md text-on-surface-variant">Select more bins to optimize route.</p>
              </div>
            </div>
            
            <div className="p-6 border-t border-outline-variant/20 bg-surface-container-lowest space-y-4">
              <div className="flex justify-between items-center text-label-md">
                <span className="text-on-surface-variant">Total Estimated Volume</span>
                <span className="font-bold text-on-surface">118 Liters</span>
              </div>
              <div className="flex justify-between items-center text-label-md">
                <span className="text-on-surface-variant">Priority Level</span>
                <span className="font-bold text-error bg-error-container/30 px-2 py-0.5 rounded">High (98% Full)</span>
              </div>
              <button className="w-full py-4 rounded-full bg-primary text-on-primary font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mt-4">
                <span className="material-symbols-outlined">route</span>
                Dispatch Route (1 Bin)
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
