import React, { useState } from 'react';
import Card from '../../components/ui/Card';

export default function EnergyUsageDashboard() {
  const [energyData] = useState({
    realtimeWattage: 42.8,
    solarContribution: 65,
    solarKw: 28.2,
    gridKw: 14.6,
    efficiency: 92,
    peakMitigation: 12,
    carbonSaved: 1.2,
    costAvoided: 420
  });

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-display text-primary leading-tight">Energy Hub</h2>
          <p className="font-body-lg text-body-lg text-secondary">Real-time load balancing and historical grid performance.</p>
        </div>
        <div className="flex gap-3">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-success-container/10 text-primary font-bold text-label-md gap-2">
            <span className="w-2 h-2 bg-success-container rounded-full pulse"></span>
            Grid Optimal
          </span>
          <button className="bg-surface-container-high px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all">
            <span className="material-symbols-outlined text-sm">calendar_month</span> Last 24 Hours
          </button>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Real-time Chart (Span 8) */}
        <Card className="col-span-12 lg:col-span-8 p-md flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Real-time Wattage</h3>
              <p className="text-label-md font-label-md text-secondary">Live demand vs. generation capacity</p>
            </div>
            <div className="text-right">
              <span className="text-display font-display text-primary leading-none">{energyData.realtimeWattage}<span className="text-headline-md">kW</span></span>
              <p className="text-label-sm font-label-sm text-secondary">+2.4% from avg</p>
            </div>
          </div>
          <div className="h-64 w-full bg-surface-ice rounded-xl relative flex items-end px-4 pb-4 gap-2">
            <div className="flex-1 bg-primary-container/20 rounded-t-lg h-2/3 transition-all duration-1000"></div>
            <div className="flex-1 bg-primary-container/30 rounded-t-lg h-1/2"></div>
            <div className="flex-1 bg-primary-container/40 rounded-t-lg h-3/4"></div>
            <div className="flex-1 bg-primary-container/60 rounded-t-lg h-2/3"></div>
            <div className="flex-1 bg-primary-container/80 rounded-t-lg h-5/6"></div>
            <div className="flex-1 bg-primary-container rounded-t-lg h-full relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface-ice px-2 py-1 rounded text-xs font-bold whitespace-nowrap">Current Peak</div>
            </div>
            <div className="flex-1 bg-primary-container/80 rounded-t-lg h-4/5"></div>
            <div className="flex-1 bg-primary-container/50 rounded-t-lg h-2/3"></div>
            <div className="flex-1 bg-primary-container/30 rounded-t-lg h-1/2"></div>
            <div className="flex-1 bg-primary-container/20 rounded-t-lg h-1/3"></div>
          </div>
          <div className="flex justify-between mt-6 pt-6 border-t border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-label-sm font-label-sm text-secondary">Active Load</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-tertiary-fixed"></span>
              <span class="text-label-sm font-label-sm text-secondary">Solar Contribution</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-surface-dim"></span>
              <span className="text-label-sm font-label-sm text-secondary">Projected Baseline</span>
            </div>
          </div>
        </Card>

        {/* Energy Sources Breakdown (Span 4) */}
        <Card className="col-span-12 lg:col-span-4 p-md flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Energy Mix</h3>
            <p className="text-label-md font-label-md text-secondary">Current supply distribution</p>
          </div>
          <div className="relative w-48 h-48 mx-auto my-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="none" r="15.915" stroke="#d4e5ef" strokeWidth="5"></circle>
              <circle cx="18" cy="18" fill="none" r="15.915" stroke="#24502c" strokeDasharray="65 35" strokeWidth="5"></circle>
              <circle cx="18" cy="18" fill="none" r="15.915" stroke="#006d3e" strokeDasharray="25 75" strokeDashoffset="-65" strokeWidth="5"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-headline-md font-display leading-none">{energyData.solarContribution}%</span>
              <span className="text-[10px] uppercase font-bold text-secondary">Solar</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                </div>
                <span className="font-label-md text-label-md">Solar Array</span>
              </div>
              <span className="font-bold">{energyData.solarKw} kW</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-sm">grid_view</span>
                </div>
                <span className="font-label-md text-label-md">Municipal Grid</span>
              </div>
              <span className="font-bold">{energyData.gridKw} kW</span>
            </div>
          </div>
        </Card>

        {/* Historical Trends (Span 7) */}
        <Card className="col-span-12 lg:col-span-7 p-md relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md text-on-surface">Usage Efficiency</h3>
            <div className="flex bg-surface-container-high p-1 rounded-full text-xs">
              <button className="px-3 py-1 bg-surface-container-lowest rounded-full font-bold">Week</button>
              <button className="px-3 py-1 text-secondary">Month</button>
              <button className="px-3 py-1 text-secondary">Year</button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-label-sm font-label-sm">
                <span className="text-secondary">Mon - Wed Efficiency</span>
                <span className="text-primary font-bold">{energyData.efficiency}% Optimal</span>
              </div>
              <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${energyData.efficiency}%` }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-label-sm font-label-sm">
                <span className="text-secondary">Peak Load Mitigation</span>
                <span className="text-primary font-bold">{energyData.peakMitigation}% Reduced</span>
              </div>
              <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary-container rounded-full" style={{ width: `${energyData.peakMitigation * 6.5}%` }}></div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <div className="flex-1 bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-outline-variant/30">
              <p className="text-label-sm font-label-sm text-secondary uppercase mb-1">Carbon Saved</p>
              <p className="text-headline-md font-display text-primary">{energyData.carbonSaved} <span className="text-sm font-bold">Tons</span></p>
            </div>
            <div className="flex-1 bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-outline-variant/30">
              <p className="text-label-sm font-label-sm text-secondary uppercase mb-1">Cost Avoided</p>
              <p className="text-headline-md font-display text-primary">${energyData.costAvoided} <span className="text-sm font-bold">USD</span></p>
            </div>
          </div>
        </Card>

        {/* Peak Load Suggestions (Span 5) */}
        <Card className="col-span-12 lg:col-span-5 bg-primary p-md text-on-primary relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary-fixed">lightbulb</span>
              <h3 className="font-headline-md text-headline-md text-white">Peak Reduction</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-primary-container/30 border border-on-primary-container/20 rounded-2xl p-4 hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-label-md text-white">HVAC Duty Cycling</span>
                  <span className="bg-success-container text-primary px-2 py-0.5 rounded text-[10px] font-extrabold uppercase">High Impact</span>
                </div>
                <p className="text-body-md font-body-md text-white/80">Shift Zone B cooling cycle to 14:00 to avoid grid surge.</p>
              </div>
              <div className="bg-primary-container/30 border border-on-primary-container/20 rounded-2xl p-4 hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-label-md text-white">Charging Optimization</span>
                  <span className="bg-secondary text-white px-2 py-0.5 rounded text-[10px] font-extrabold uppercase">Medium</span>
                </div>
                <p className="text-body-md font-body-md text-white/80">EV stations at North Lot can be throttled to 70% capacity.</p>
              </div>
              <button className="w-full mt-4 py-3 bg-primary-fixed text-on-primary-fixed font-bold rounded-full hover:bg-white transition-colors">
                Automate Recommendations
              </button>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Detailed Grid View (Secondary Area) */}
      <Card className="mt-8 bg-surface-container-low p-8 border border-outline-variant/20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline-md text-headline-md text-primary">Department Breakdown</h3>
          <button className="text-primary font-bold text-label-md flex items-center gap-1 hover:underline">
            View Full Audit <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-outline-variant/30">
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">factory</span>
              </div>
              <span className="text-on-surface-variant font-bold">12.4 kW</span>
            </div>
            <h4 className="font-bold text-label-md mb-1">Industrial Labs</h4>
            <div className="w-full bg-surface-dim h-1 rounded-full mb-3">
              <div className="bg-primary w-2/3 h-full rounded-full"></div>
            </div>
            <p className="text-xs text-secondary">Operating at 68% load capacity</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-outline-variant/30">
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <span className="text-on-surface-variant font-bold">8.1 kW</span>
            </div>
            <h4 className="font-bold text-label-md mb-1">Admin Blocks</h4>
            <div className="w-full bg-surface-dim h-1 rounded-full mb-3">
              <div className="bg-primary w-1/2 h-full rounded-full"></div>
            </div>
            <p className="text-xs text-secondary">Operating at 42% load capacity</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-outline-variant/30">
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">home</span>
              </div>
              <span className="text-on-surface-variant font-bold">15.3 kW</span>
            </div>
            <h4 className="font-bold text-label-md mb-1">Housing Complex</h4>
            <div className="w-full bg-surface-dim h-1 rounded-full mb-3">
              <div className="bg-error w-[85%] h-full rounded-full"></div>
            </div>
            <p className="text-xs text-error font-bold">High usage alert detected</p>
          </div>
        </div>
      </Card>
    </>
  );
}
