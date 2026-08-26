import React from 'react';

export default function MaterialFlowTracker() {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Inter-Facility Supply Chain
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Material Flow Tracker</h1>
          <p className="text-sm text-[#556158] mt-1">Real-time resource routing and circular logistics across 8 municipal zones.</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3.5 py-1.5 bg-[#9cf6ba]/40 text-[#00522d] border border-[#9cf6ba] rounded-full font-bold text-xs flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
            Live Network Active
          </span>
        </div>
      </div>

      {/* Dashboard Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Large Scale Map Card (8 Columns) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden relative shadow-sm h-[520px]">
          <div className="absolute inset-0 z-0 bg-[#dff1fb]/60">
            <div 
              className="w-full h-full bg-cover bg-center grayscale-[0.2] opacity-80" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCAxjW1mBtwl6TZFZ17rGBx7tX9Hr93gTlBp4xdzaCNJ_2GQXBc9YUYBvHCIUX0l-VSn7gTK2I36toLPyknODxVtWrwi94wC0eStZLJ1_fqxbXfkBAsHMihOmh4DosZJor-D9aq5oFyFt-nI_Eib8xnaeFlvG0FG8wAIIf8vku5CAUTt2OWU-tqIMFytt3z-3oLiJ0Pn7a4SvnWjrX_U1e2D_Fh1_cf9ScUNFYXqUsaMxcKmOLLKHm6PWqXHDUKkGgUS7k1TfTgRI')" }}
            ></div>
            
            {/* Animated Route Overlays (SVG) */}
            <div className="absolute inset-0 pointer-events-none opacity-80">
              <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                <path 
                  className="text-[#00522d]" 
                  d="M100,100 Q250,50 400,200 T700,300" 
                  fill="transparent" 
                  stroke="currentColor" 
                  strokeDasharray="10,5" 
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path 
                  className="text-[#2eb872]" 
                  d="M400,200 Q500,400 300,500 T150,550" 
                  fill="transparent" 
                  stroke="currentColor" 
                  strokeDasharray="10,5" 
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="400" cy="200" r="7" fill="#00522d" className="animate-ping" />
                <circle cx="300" cy="500" r="7" fill="#2eb872" className="animate-ping" />
              </svg>
            </div>
          </div>
          
          {/* Map HUD */}
          <div className="absolute top-6 left-6 flex flex-col gap-4 z-10">
            <div className="bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl flex items-center gap-4 shadow-md border border-[#bec9be]/40">
              <div className="flex flex-col">
                <span className="font-bold text-[10px] text-[#556158] uppercase tracking-widest">Active Routes</span>
                <span className="text-xl font-bold text-[#00522d] leading-tight">12 Pathways</span>
              </div>
              <div className="h-8 w-[1px] bg-[#bec9be]/40 mx-1"></div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#0d1e25]">
                <span className="material-symbols-outlined text-[#00522d] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span>North Material Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Sidebar (4 Columns) */}
        <div className="col-span-12 lg:col-span-4 space-y-6 flex flex-col justify-between">
          {/* In Transit Card */}
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] flex items-center justify-center text-[#00522d]">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
              <span className="text-2xl font-bold text-[#00522d]">24 Batches</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0d1e25]">In Transit Active</h3>
              <p className="text-xs text-[#556158] mt-0.5">High-density polymer & organic feedstock routing</p>
            </div>
            <div className="w-full bg-[#d9e6da] h-2 rounded-full overflow-hidden">
              <div className="bg-[#00522d] h-full w-[65%] rounded-full"></div>
            </div>
          </div>

          {/* Diverted Volume Card */}
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#9cf6ba]/40 flex items-center justify-center text-[#00210f]">
                <span className="material-symbols-outlined text-2xl">recycling</span>
              </div>
              <span className="text-2xl font-bold text-[#00522d]">142.8 Tons</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0d1e25]">Feedstock Diverted</h3>
              <p className="text-xs text-[#556158] mt-0.5">Successfully redirected into local manufacturing</p>
            </div>
            <div className="w-full bg-[#d9e6da] h-2 rounded-full overflow-hidden">
              <div className="bg-[#2eb872] h-full w-[88%] rounded-full"></div>
            </div>
          </div>

          <div className="bg-[#00522d] text-white p-5 rounded-[24px] shadow-sm flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-[#9cf6ba]">hub</span>
            <p className="text-xs text-white/90 leading-tight font-semibold">
              AI Dynamic Dispatch adjusting routes for optimal carbon reduction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
