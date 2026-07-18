import React from 'react';

export default function GoalProgressTracking() {
  return (
    <div className="flex flex-col gap-md pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-4">
        <div>
          <h2 className="font-display text-headline-lg text-primary leading-tight font-bold">Sustainability Goals</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mt-2">Monitor your environmental impact objectives and track real-time progress toward a carbon-neutral campus.</p>
        </div>
        <div className="flex flex-wrap gap-sm">
          <select className="bg-white border border-outline-variant/30 rounded-full px-6 py-2.5 font-label-md font-bold text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none shadow-sm cursor-pointer">
            <option>All Categories</option>
            <option>Carbon Neutrality</option>
            <option>Waste Reduction</option>
            <option>Water Conservation</option>
          </select>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label-md font-bold hover:bg-secondary/20 transition-colors shadow-sm">
            Export Report
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main Analytics Forecast (Col 8) */}
        <section className="lg:col-span-8 bg-white border border-outline-variant/30 rounded-[24px] p-md shadow-sm relative overflow-hidden flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-md relative z-10 gap-4">
            <div>
              <h3 className="font-headline-md font-bold text-on-surface">Goal Forecasting</h3>
              <p className="font-label-md text-on-surface-variant">Projected Achievement vs. Target Timeline</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-primary rounded-full"></div>
                 <span className="font-label-sm font-bold text-on-surface">Current</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-secondary/40 rounded-full"></div>
                 <span className="font-label-sm font-bold text-on-surface">Projected</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 sm:px-4 relative z-10 flex-1">
            {/* Simple Visual Bar Chart Mockup */}
            <div className="w-full bg-surface-container-lowest h-full relative overflow-hidden rounded-xl border border-outline-variant/30">
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end p-2 sm:p-4 gap-2 sm:gap-6">
                <div className="flex-1 bg-primary/20 rounded-t-lg h-[40%] group relative">
                  <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity rounded-t-lg"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-sm font-bold text-on-surface-variant">Q1</div>
                </div>
                <div className="flex-1 bg-primary/20 rounded-t-lg h-[55%] group relative">
                  <div className="absolute inset-0 bg-primary opacity-50 group-hover:opacity-60 transition-opacity rounded-t-lg"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-sm font-bold text-on-surface-variant">Q2</div>
                </div>
                <div className="flex-1 bg-primary/20 rounded-t-lg h-[65%] group relative">
                  <div className="absolute inset-0 bg-primary opacity-70 group-hover:opacity-60 transition-opacity rounded-t-lg"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-sm font-bold text-on-surface-variant">Q3</div>
                </div>
                <div className="flex-1 bg-primary/20 rounded-t-lg h-[78%] group relative">
                  <div className="absolute inset-0 bg-primary opacity-90 group-hover:opacity-60 transition-opacity rounded-t-lg"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-sm font-bold text-on-surface-variant">Current</div>
                </div>
                <div className="flex-1 border-2 border-dashed border-primary/50 rounded-t-lg h-[92%] group relative bg-primary/5">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-sm font-bold text-primary">Target</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-md pt-md border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div className="flex items-center gap-2 text-green-600">
              <span className="material-symbols-outlined">check_circle</span>
              <span className="font-label-md font-bold">On track for 2025 Target</span>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-body-md font-bold text-primary block">+12.4%</span>
              <span className="font-label-sm text-on-surface-variant block">Efficiency Gain vs Last Year</span>
            </div>
          </div>
        </section>

        {/* Summary Status (Col 4) */}
        <section className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-primary text-white p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-center">
            <h4 className="font-label-md opacity-80 mb-4 font-bold">Total Carbon Offset</h4>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-display-sm font-display font-bold">1,284</span>
              <span className="font-headline-md opacity-80">Tons</span>
            </div>
            <div className="flex items-center gap-2 text-primary-container">
              <span className="material-symbols-outlined text-[20px]">trending_up</span>
              <span className="font-label-sm font-bold">8% increase this month</span>
            </div>
          </div>
          
          <div className="bg-white border border-outline-variant/30 p-6 rounded-[24px] shadow-sm flex-1 flex flex-col justify-center">
             <h4 className="font-label-md text-on-surface-variant font-bold mb-4">Milestone Progress</h4>
             <div className="space-y-4">
                <div>
                   <div className="flex justify-between font-label-sm font-bold mb-1">
                      <span className="text-on-surface">Campus Wide Recycling</span>
                      <span className="text-primary">85%</span>
                   </div>
                   <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[85%]"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between font-label-sm font-bold mb-1">
                      <span className="text-on-surface">Renewable Transition</span>
                      <span className="text-tertiary">42%</span>
                   </div>
                   <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full w-[42%]"></div>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
