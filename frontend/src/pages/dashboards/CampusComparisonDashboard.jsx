import React from 'react';

export default function CampusComparisonDashboard() {
  return (
    <div className="flex flex-col gap-md relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Campus Comparison</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Deep dive into facility metrics. Compare efficiency rankings and resource optimization across the North, East, and Central zones.</p>
        </div>
        <div className="flex items-center gap-sm">
          <button className="px-6 py-2.5 bg-surface-container rounded-full text-primary font-bold flex items-center gap-2 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">filter_list</span> Filter Zones
          </button>
          <button className="px-6 py-2.5 bg-primary text-on-primary rounded-full font-bold flex items-center gap-2 shadow-lg hover:opacity-90 transition-all">
            <span className="material-symbols-outlined">download</span> Export Report
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Comparison Chart: Waste Diversion */}
        <div className="md:col-span-8 bg-white rounded-[24px] border border-outline-variant/30 p-md shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-md">
            <div className="flex items-center gap-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">delete_sweep</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Waste Diversion Rate (%)</h3>
                <p className="text-label-md text-on-surface-variant">Quarterly performance by zone</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-label-sm font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Recycle</span>
              <span className="flex items-center gap-1 text-label-sm font-bold text-tertiary"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Compost</span>
            </div>
          </div>
          
          {/* Side-by-Side Bar Chart Construction */}
          <div className="flex-1 flex items-end gap-md md:gap-xl h-[300px] border-b border-outline-variant/30 pt-lg px-md pb-4">
            {/* North Campus */}
            <div className="flex-1 flex flex-col items-center gap-base h-full justify-end">
              <div className="w-full flex gap-1 justify-center h-full items-end">
                <div className="w-8 md:w-12 bg-primary rounded-t-lg transition-all duration-700 hover:opacity-80 relative" style={{ height: '65%' }}>
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-xs text-primary">65%</div>
                </div>
                <div className="w-8 md:w-12 bg-tertiary rounded-t-lg transition-all duration-700 hover:opacity-80" style={{ height: '25%' }}></div>
              </div>
              <span className="font-label-md text-on-surface mt-2">North</span>
            </div>
            {/* East Campus */}
            <div className="flex-1 flex flex-col items-center gap-base h-full justify-end">
              <div className="w-full flex gap-1 justify-center h-full items-end">
                <div className="w-8 md:w-12 bg-primary rounded-t-lg transition-all duration-700 hover:opacity-80 relative" style={{ height: '48%' }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-xs text-primary">48%</div>
                </div>
                <div className="w-8 md:w-12 bg-tertiary rounded-t-lg transition-all duration-700 hover:opacity-80" style={{ height: '15%' }}></div>
              </div>
              <span className="font-label-md text-on-surface mt-2">East</span>
            </div>
            {/* Central Campus */}
            <div className="flex-1 flex flex-col items-center gap-base h-full justify-end">
              <div className="w-full flex gap-1 justify-center h-full items-end">
                <div className="w-8 md:w-12 bg-primary rounded-t-lg transition-all duration-700 hover:opacity-80 relative" style={{ height: '82%' }}>
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-xs text-primary">82%</div>
                </div>
                <div className="w-8 md:w-12 bg-tertiary rounded-t-lg transition-all duration-700 hover:opacity-80" style={{ height: '40%' }}></div>
              </div>
              <span className="font-label-md text-on-surface mt-2">Central</span>
            </div>
            {/* South Campus */}
            <div className="flex-1 flex flex-col items-center gap-base h-full justify-end">
              <div className="w-full flex gap-1 justify-center h-full items-end">
                <div className="w-8 md:w-12 bg-primary rounded-t-lg transition-all duration-700 hover:opacity-80 relative" style={{ height: '55%' }}>
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-xs text-primary">55%</div>
                </div>
                <div className="w-8 md:w-12 bg-tertiary rounded-t-lg transition-all duration-700 hover:opacity-80" style={{ height: '20%' }}></div>
              </div>
              <span className="font-label-md text-on-surface mt-2">South</span>
            </div>
          </div>
        </div>

        {/* Leaderboard: Top Performance */}
        <div className="md:col-span-4 bg-white rounded-[24px] border border-outline-variant/30 p-md shadow-sm">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Top Performing Areas</h3>
          <div className="space-y-base overflow-y-auto max-h-[360px] custom-scroll">
            {/* Item 1 */}
            <div className="flex items-center p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary mr-3">1</div>
              <div className="flex-1">
                <div className="font-label-md font-bold text-on-surface">Main Admin Hub</div>
                <div className="text-label-sm text-on-surface-variant">Central Campus</div>
              </div>
              <div className="text-right">
                <div className="text-primary font-bold text-label-md">94.2%</div>
                <div className="text-[10px] text-success-container flex items-center justify-end"><span className="material-symbols-outlined text-xs">trending_up</span> 2.4%</div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-center p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container mr-3">2</div>
              <div className="flex-1">
                <div className="font-label-md font-bold text-on-surface">Library West</div>
                <div className="text-label-sm text-on-surface-variant">North Campus</div>
              </div>
              <div className="text-right">
                <div className="text-primary font-bold text-label-md">91.8%</div>
                <div className="text-[10px] text-success-container flex items-center justify-end"><span className="material-symbols-outlined text-xs">trending_up</span> 0.8%</div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-center p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container mr-3">3</div>
              <div className="flex-1">
                <div className="font-label-md font-bold text-on-surface">Engineering D-Wing</div>
                <div className="text-label-sm text-on-surface-variant">Central Campus</div>
              </div>
              <div className="text-right">
                <div className="text-primary font-bold text-label-md">88.5%</div>
                <div className="text-[10px] text-error flex items-center justify-end"><span className="material-symbols-outlined text-xs">trending_down</span> 1.2%</div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="flex items-center p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant mr-3">4</div>
              <div className="flex-1">
                <div className="font-label-md font-bold text-on-surface">Student Commons</div>
                <div className="text-label-sm text-on-surface-variant">South Campus</div>
              </div>
              <div className="text-right">
                <div className="text-primary font-bold text-label-md">84.0%</div>
                <div className="text-[10px] text-success-container flex items-center justify-end"><span className="material-symbols-outlined text-xs">trending_up</span> 4.5%</div>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-primary font-bold text-label-md hover:bg-surface-container-high rounded-lg transition-colors">View All Areas</button>
        </div>

        {/* Resource Consumption Comparison (Glass Card Style) */}
        <div className="md:col-span-7 bg-white/70 backdrop-blur-md rounded-[24px] border border-outline-variant/30 p-md shadow-lg mt-4">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Resource Optimization</h3>
          <div className="space-y-md">
            {/* Electricity */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="flex items-center gap-2 font-label-md font-bold text-on-surface"><span className="material-symbols-outlined text-primary">bolt</span> Electricity Consumption</span>
                <span className="text-label-md text-on-surface-variant">Avg. 1,240 kWh</span>
              </div>
              <div className="relative h-6 bg-secondary-container rounded-full overflow-hidden flex">
                <div className="h-full bg-primary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '45%' }}>CENTRAL</div>
                <div className="h-full bg-tertiary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '35%' }}>NORTH</div>
                <div className="h-full bg-secondary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '20%' }}>SOUTH</div>
              </div>
            </div>
            {/* Water */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="flex items-center gap-2 font-label-md font-bold text-on-surface"><span className="material-symbols-outlined text-primary">water_drop</span> Water Usage</span>
                <span className="text-label-md text-on-surface-variant">Avg. 4,500 Gal</span>
              </div>
              <div className="relative h-6 bg-secondary-container rounded-full overflow-hidden flex">
                <div className="h-full bg-primary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '30%' }}>CENTRAL</div>
                <div className="h-full bg-tertiary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '50%' }}>NORTH</div>
                <div className="h-full bg-secondary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '20%' }}>SOUTH</div>
              </div>
            </div>
            {/* Emissions */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="flex items-center gap-2 font-label-md font-bold text-on-surface"><span className="material-symbols-outlined text-primary">co2</span> Carbon Emissions</span>
                <span className="text-label-md text-on-surface-variant">Target: -12%</span>
              </div>
              <div className="relative h-6 bg-secondary-container rounded-full overflow-hidden flex">
                <div className="h-full bg-primary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '25%' }}>CENTRAL</div>
                <div className="h-full bg-tertiary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '25%' }}>NORTH</div>
                <div className="h-full bg-secondary flex items-center px-4 text-[10px] text-white font-bold transition-all duration-1000" style={{ width: '50%' }}>SOUTH</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Snapshot Visual */}
        <div className="md:col-span-5 relative rounded-[24px] overflow-hidden min-h-[300px] mt-4">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYGknj-5TpRqIEPO9Dh6hWZ2ZHewGxGQowyun5-7ETF92BA5yuUgiEvoZNZYUpx7NghsdBgxn6IHuHxRs06HxeMT2MYgzUQ_jNabUl4AXAq3F_COOolEtgx6FQ9oxBJLY04y69kfD-6zDUymiNgcOnd_r9tbv9hlKvH_GXT1sIcj8JEgQ8UOShgbgNp_pquEyRhexvxSW-zOHt6Lym3xhhZcf20619vPLicLlSs3kwhJLSzNgDN-7MQlwUGQVzvgHg19c834s_oxE" alt="Eco Campus" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 p-md z-20">
            <span className="inline-block px-3 py-1 bg-tertiary text-on-tertiary rounded-full text-label-sm mb-base">Featured Zone</span>
            <h4 className="text-white font-headline-md text-headline-md mb-xs">Sustainability Oasis</h4>
            <p className="text-white font-body-md text-body-md opacity-90">Central Campus phase 4 achieves net-zero waste milestones.</p>
          </div>
        </div>
      </div>

      {/* Footer Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mt-xl">
        <div className="p-md bg-white border border-outline-variant/30 rounded-xl">
          <div className="text-on-surface-variant text-label-md mb-xs">Diversion Avg</div>
          <div className="font-display text-headline-lg text-primary">74.8%</div>
          <div className="text-success-container font-bold text-label-sm">+3.2% vs Prev Year</div>
        </div>
        <div className="p-md bg-white border border-outline-variant/30 rounded-xl">
          <div className="text-on-surface-variant text-label-md mb-xs">Collection Load</div>
          <div className="font-display text-headline-lg text-primary">2.4T</div>
          <div className="text-on-surface-variant font-bold text-label-sm">Daily System Median</div>
        </div>
        <div className="p-md bg-white border border-outline-variant/30 rounded-xl">
          <div className="text-on-surface-variant text-label-md mb-xs">Active Modules</div>
          <div className="font-display text-headline-lg text-primary">14</div>
          <div className="text-success-container font-bold text-label-sm">2 Pending Sync</div>
        </div>
        <div className="p-md bg-white border border-outline-variant/30 rounded-xl">
          <div className="text-on-surface-variant text-label-md mb-xs">Eco Credits</div>
          <div className="font-display text-headline-lg text-primary">852</div>
          <div className="text-primary font-bold text-label-sm">Municipal Tier 1</div>
        </div>
      </div>
    </div>
  );
}
