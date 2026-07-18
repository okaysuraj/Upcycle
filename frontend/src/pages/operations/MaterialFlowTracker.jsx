import React from 'react';

export default function MaterialFlowTracker() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
        <div>
          <h1 className="font-display text-headline-lg font-bold text-on-surface leading-tight">Material Flow Tracker</h1>
          <p className="font-body-md text-on-surface-variant mt-1">Real-time resource routing across 8 campus zones</p>
        </div>
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            Live Network Active
          </span>
        </div>
      </div>

      {/* Dashboard Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Large Scale Map Card (8 Columns) */}
        <div className="lg:col-span-8 bg-surface-container rounded-[24px] border border-outline-variant/30 overflow-hidden relative group min-h-[500px] lg:h-[600px] shadow-sm">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center grayscale-[0.3] opacity-90" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCAxjW1mBtwl6TZFZ17rGBx7tX9Hr93gTlBp4xdzaCNJ_2GQXBc9YUYBvHCIUX0l-VSn7gTK2I36toLPyknODxVtWrwi94wC0eStZLJ1_fqxbXfkBAsHMihOmh4DosZJor-D9aq5oFyFt-nI_Eib8xnaeFlvG0FG8wAIIf8vku5CAUTt2OWU-tqIMFytt3z-3oLiJ0Pn7a4SvnWjrX_U1e2D_Fh1_cf9ScUNFYXqUsaMxcKmOLLKHm6PWqXHDUKkGgUS7k1TfTgRI')" }}
            ></div>
            
            {/* Animated Route Overlays (SVG) */}
            <div className="absolute inset-0 pointer-events-none opacity-80">
              <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                <path 
                  className="text-primary animate-[dash_20s_linear_infinite]" 
                  d="M100,100 Q250,50 400,200 T700,300" 
                  fill="transparent" 
                  stroke="currentColor" 
                  strokeDasharray="10,5" 
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path 
                  className="text-secondary animate-[dash_15s_linear_infinite]" 
                  d="M400,200 Q500,400 300,500 T150,550" 
                  fill="transparent" 
                  stroke="currentColor" 
                  strokeDasharray="10,5" 
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="400" cy="200" r="8" fill="currentColor" className="text-primary animate-pulse" />
                <circle cx="300" cy="500" r="8" fill="currentColor" className="text-secondary animate-pulse" />
              </svg>
            </div>
          </div>
          
          {/* Map HUD */}
          <div className="absolute top-6 left-6 flex flex-col gap-4 z-10">
            <div className="bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl flex items-center gap-5 shadow-lg border border-white/20">
              <div className="flex flex-col">
                <span className="font-bold text-xs text-on-surface-variant uppercase tracking-widest mb-1">Active Routes</span>
                <span className="font-display text-headline-sm font-bold text-primary leading-tight">12 Pathways</span>
              </div>
              <div className="h-10 w-[1px] bg-outline-variant/40 mx-2"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-bold text-sm text-on-surface">North Hub</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 z-10">
            <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl space-y-2 shadow-lg border border-white/20 flex flex-col">
              <button className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface-variant border border-outline-variant/30">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface-variant border border-outline-variant/30">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <button className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>
        </div>

        {/* Status Sidebar (4 Columns) */}
        <div className="lg:col-span-4 space-y-6 flex flex-col">
          {/* In Transit Card */}
          <div className="flex-1 bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
              </div>
              <span className="text-primary font-bold text-headline-sm">24</span>
            </div>
            <h3 className="font-display text-headline-sm font-bold mb-3">In Transit</h3>
            <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden mb-4 shadow-inner">
              <div className="bg-primary h-full w-[65%] rounded-full transition-all duration-1000"></div>
            </div>
            <p className="font-bold text-xs text-on-surface-variant">Estimated arrival for next batch: 12 mins</p>
          </div>
          
          {/* Awaiting Pickup Card */}
          <div className="flex-1 bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <span className="material-symbols-outlined text-yellow-600 text-[28px]">pending_actions</span>
              </div>
              <span className="text-yellow-600 font-bold text-headline-sm">08</span>
            </div>
            <h3 className="font-display text-headline-sm font-bold mb-3">Awaiting Pickup</h3>
            <div className="flex gap-1.5 h-2">
              <div className="h-full flex-1 bg-yellow-500 rounded-full"></div>
              <div className="h-full flex-1 bg-yellow-500 rounded-full"></div>
              <div className="h-full flex-1 bg-surface-variant rounded-full"></div>
              <div className="h-full flex-1 bg-surface-variant rounded-full"></div>
            </div>
            <p className="font-bold text-xs text-on-surface-variant mt-4">Priority items detected in Zone 4 (Labs)</p>
          </div>
          
          {/* Arrived Card */}
          <div className="flex-1 bg-white p-6 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <span className="material-symbols-outlined text-green-600 text-[28px]">inventory_2</span>
              </div>
              <span className="text-green-600 font-bold text-headline-sm">42</span>
            </div>
            <h3 className="font-display text-headline-sm font-bold mb-1">Processed Today</h3>
            <p className="text-sm font-bold text-on-surface-variant">Total Volume: 1.8 Tons</p>
          </div>
        </div>
      </div>
    </div>
  );
}
