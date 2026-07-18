import React from 'react';

export default function EnergyPerformanceDashboard() {
  return (
    <div className="flex flex-col gap-md">
      {/* Header / Top Bar */}
      <div className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Energy Performance</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time optimization and consumption audit</p>
        </div>
        <div className="flex items-center gap-gutter">
          <div className="flex gap-2 p-1 bg-surface-container-low rounded-full border border-outline-variant/30 hidden md:flex">
            <button className="px-4 py-1.5 rounded-full text-label-sm font-label-sm bg-white text-primary shadow-sm border border-outline-variant/20">Real-time</button>
            <button className="px-4 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface-variant hover:bg-white/50 transition-all">Last 24h</button>
            <button className="px-4 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface-variant hover:bg-white/50 transition-all">Monthly</button>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main Solar Array & North Ridge Wind (Featured Cards) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Main Solar Array */}
          <div className="relative overflow-hidden group p-gutter bg-white rounded-[24px] border border-outline-variant/30 flex flex-col justify-between h-[240px] shadow-sm hover:border-primary/40 transition-all">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
            <div className="z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-primary p-2 bg-primary-container/30 rounded-lg">wb_sunny</span>
                <span className="text-label-sm font-label-sm text-success-container flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +12.4%
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Main Solar Array</h3>
              <p className="text-on-surface-variant font-label-md text-label-md">Engineering Quad - Sector 7</p>
            </div>
            <div className="z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-[40px] font-bold text-primary">8.42</span>
                <span className="text-headline-md font-display text-on-surface-variant">MW</span>
              </div>
              <div className="w-full bg-secondary-container h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-primary h-full w-[84%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* North Ridge Wind */}
          <div className="relative overflow-hidden group p-gutter bg-white rounded-[24px] border border-outline-variant/30 flex flex-col justify-between h-[240px] shadow-sm hover:border-tertiary/40 transition-all">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all"></div>
            <div className="z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-tertiary p-2 bg-tertiary-container/30 rounded-lg">air</span>
                <span className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">table</span> Stable
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">North Ridge Wind</h3>
              <p className="text-on-surface-variant font-label-md text-label-md">Upper Campus Perimeter</p>
            </div>
            <div className="z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-[40px] font-bold text-tertiary">14.1</span>
                <span className="text-headline-md font-display text-on-surface-variant">MW</span>
              </div>
              <div className="w-full bg-secondary-container h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-tertiary h-full w-[62%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Source Matrix (Circular Chart Card) */}
        <div className="lg:col-span-4 bg-white/70 backdrop-blur-md border border-outline-variant/30 p-gutter rounded-[24px] flex flex-col items-center justify-between shadow-sm">
          <div className="w-full">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-gutter">Energy Source Matrix</h3>
          </div>
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* SVG Circular Chart Placeholder */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeDasharray="45, 100" strokeWidth="6"></path>
              <path className="text-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-45" strokeWidth="6"></path>
              <path className="text-outline-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeDasharray="30, 100" strokeDashoffset="-70" strokeWidth="6"></path>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-label-sm font-label-sm text-on-surface-variant">Clean Energy</span>
              <span className="text-headline-md font-bold text-primary">70%</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-2 mt-4">
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Solar</p>
              <p className="text-label-md text-primary font-bold">45%</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Wind</p>
              <p className="text-label-md text-tertiary font-bold">25%</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Grid</p>
              <p className="text-label-md text-outline font-bold">30%</p>
            </div>
          </div>
        </div>

        {/* 24h Consumption vs Baseline (Interactive Chart) */}
        <div className="lg:col-span-8 p-gutter bg-white rounded-[24px] border border-outline-variant/30 h-[400px] flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-lg">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Consumption Trends</h3>
              <div className="flex gap-4 mt-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error-container"></div>
                  <span className="text-label-sm text-on-surface-variant">Actual Load (MWh)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-outline-variant border border-outline border-dashed"></div>
                  <span className="text-label-sm text-on-surface-variant">Baseline Target</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-primary font-label-md hover:bg-surface-container px-3 py-1.5 rounded-full transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span> Export
            </button>
          </div>
          {/* Chart Placeholder */}
          <div className="flex-1 relative border-l border-b border-outline-variant/30 mt-4 mx-4">
             {/* Y-axis labels */}
             <div className="absolute -left-10 top-0 text-[10px] text-on-surface-variant">100</div>
             <div className="absolute -left-8 top-1/4 text-[10px] text-on-surface-variant">75</div>
             <div className="absolute -left-8 top-2/4 text-[10px] text-on-surface-variant">50</div>
             <div className="absolute -left-8 top-3/4 text-[10px] text-on-surface-variant">25</div>
             
             {/* Chart Data visualization */}
             <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-4 pb-2">
                {[45, 30, 20, 15, 25, 40, 60, 85, 95, 80, 70, 50].map((val, i) => (
                  <div key={i} className="w-[6%] bg-primary rounded-t-sm relative group" style={{ height: `${val}%` }}>
                     <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded">
                       {val}MWh
                     </div>
                  </div>
                ))}
             </div>
             
             {/* Baseline Line */}
             <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-outline-variant/50"></div>
          </div>
          {/* X-axis labels */}
          <div className="flex justify-between mt-2 mx-4 text-[10px] text-on-surface-variant font-bold">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* System Health / Anomalies */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-white rounded-[24px] border border-outline-variant/30 p-gutter flex-1 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-headline-md text-on-surface">Grid Anomalies</h3>
              <span className="bg-error-container text-on-error-container font-bold text-label-sm px-2 py-0.5 rounded-full">2 Active</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-error-container/20 border border-error-container/50 hover:bg-error-container/30 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error text-[18px]">warning</span>
                    <span className="font-bold text-label-md text-on-surface">Voltage Drop</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">10m ago</span>
                </div>
                <p className="text-body-sm text-on-surface-variant">Sector 4 Substation reporting 5% undervoltage. Investigation required.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-variant/20 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error-warm text-[18px]">bolt</span>
                    <span className="font-bold text-label-md text-on-surface">Spike Detected</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">1h ago</span>
                </div>
                <p className="text-body-sm text-on-surface-variant">HVAC Lab B triggered unusual load (+20% baseline). Auto-curtailment engaged.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
