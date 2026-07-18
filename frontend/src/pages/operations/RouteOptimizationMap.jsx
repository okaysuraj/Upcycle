import React from 'react';

export default function RouteOptimizationMap() {
  return (
    <div className="flex flex-col flex-1 pb-12 w-full mx-auto max-w-[1440px] space-y-6">
      {/* Route Header Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm flex items-center justify-between group hover:border-primary/40 transition-colors">
          <div>
            <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-2">Estimated Duration</p>
            <h3 className="text-on-surface font-display text-2xl font-bold">1h 42m</h3>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-[24px]">schedule</span>
          </div>
        </div>
        
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm flex items-center justify-between group hover:border-primary/40 transition-colors">
          <div>
            <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-2">Stops Count</p>
            <h3 className="text-on-surface font-display text-2xl font-bold">14 Bins</h3>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-[24px]">pin_drop</span>
          </div>
        </div>
        
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm flex items-center justify-between group hover:border-primary/40 transition-colors">
          <div>
            <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-2">Fuel Saved</p>
            <h3 className="text-green-600 font-display text-2xl font-bold">24%</h3>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-[24px]">energy_savings_leaf</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Area: Bento Layout */}
      <div className="flex flex-col lg:flex-row gap-gutter flex-1 min-h-[600px]">
        {/* Map View (Large) */}
        <div className="lg:w-[65%] xl:w-[70%] bg-white rounded-[32px] border border-outline-variant/30 shadow-sm overflow-hidden relative flex flex-col group">
          <div className="absolute inset-0 z-0 bg-surface-container-low transition-transform duration-1000 group-hover:scale-105">
             <img className="w-full h-full object-cover grayscale-[0.1]" data-alt="Route Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByM16O3izUVpBxiUCn5sbe_23qaAwWF8DDeqUZaVik7rBbL-NtN0JIJkDqhCZ-KZCisC5xdwuFx3U-4LqLbQybH924zu6xHeFGO9wyRZLNtMf23epihfx13CVMSAH6tL30grlTHXDD46EFZ4gcrF5uaTSSP7mrYb4L8iEDx3C4iHnZjT4P0Y-ZH1obt-xFs2kL9R_ok3X0V82pXATw8lejx840KzSjE5ueYKVd2jPjGcsDU5XayWmeotRMUj-8Y76lFr-5tfKwihk" />
          </div>
          
          {/* Floating Map Controls */}
          <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">
            <button className="w-12 h-12 bg-white/90 backdrop-blur-md shadow-lg border border-outline-variant/20 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white transition-all active:scale-95">
              <span className="material-symbols-outlined text-[24px]">add</span>
            </button>
            <button className="w-12 h-12 bg-white/90 backdrop-blur-md shadow-lg border border-outline-variant/20 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white transition-all active:scale-95">
              <span className="material-symbols-outlined text-[24px]">remove</span>
            </button>
          </div>
          
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-outline-variant/20 z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-error shadow-sm border border-white"></span>
              <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Full Bins (Critical)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary shadow-sm border border-white"></span>
              <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Optimized Route</span>
            </div>
          </div>
          
          {/* Map Overlay UI: Active Route Detail */}
          <div className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-80 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 z-10">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h4 className="font-display text-xl font-bold text-on-surface mb-1">Route Alpha-4</h4>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">North Quad Sector</p>
              </div>
              <span className="bg-primary text-white text-[10px] px-3 py-1.5 rounded-md uppercase tracking-widest font-bold shadow-sm">Best Path</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 text-green-700 flex items-center justify-center text-sm font-bold shadow-sm">1</div>
                <div className="flex-1 h-1 bg-surface-container rounded-full overflow-hidden">
                   <div className="w-full h-full bg-primary rounded-full"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 text-green-700 flex items-center justify-center text-sm font-bold shadow-sm">14</div>
              </div>
              
              <p className="text-sm font-medium text-on-surface-variant leading-relaxed p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30">
                Starting from <b className="text-on-surface">Central Depot</b>, concluding at <b className="text-on-surface">Transfer Station B</b>.
              </p>
              
              <button className="w-full py-3.5 bg-primary text-white rounded-full font-bold text-sm shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined text-[20px]">send</span>
                 Dispatch to Crew
              </button>
            </div>
          </div>
        </div>

        {/* Logistics List & Analytics (Right Sidebar) */}
        <div className="lg:w-[35%] xl:w-[30%] flex flex-col gap-gutter">
          {/* Stats Sidebar */}
          <div className="bg-white rounded-[32px] p-6 md:p-8 border border-outline-variant/30 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-display text-xl font-bold text-on-surface">Efficiency Gains</h4>
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl text-[24px]">auto_graph</span>
            </div>
            
            <div className="space-y-8 flex-1">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Fuel Efficiency Target</span>
                  <span className="text-xl font-bold text-primary font-display leading-none">92%</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden shadow-inner border border-outline-variant/10">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Time Saved vs Standard</span>
                  <span className="text-xl font-bold text-on-surface font-display leading-none">22 mins</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden shadow-inner border border-outline-variant/10">
                  <div className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out delay-300" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl">
                 <h5 className="text-sm font-bold text-on-surface mb-3">Algorithm Confidence</h5>
                 <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-600">verified</span>
                    <p className="text-xs font-medium text-on-surface-variant leading-relaxed">
                       Route calculated based on live traffic, historical fill rates, and weather conditions.
                    </p>
                 </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-4 bg-surface-container-lowest text-primary border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
               <span className="material-symbols-outlined text-[20px]">refresh</span>
               Recalculate Route
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
