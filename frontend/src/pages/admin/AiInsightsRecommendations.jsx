import React from 'react';

export default function AiInsightsRecommendations() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Page Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-4">
        <div>
          <h2 className="font-display text-display-sm text-primary leading-tight">AI Insights</h2>
          <p className="font-body-lg text-on-surface-variant mt-2 max-w-2xl">Leverage real-time campus data to optimize resource allocation, reduce waste, and meet sustainability milestones with precision.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-high px-4 py-2 rounded-xl flex items-center gap-2 border border-outline-variant/30 shadow-sm">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="font-label-md font-bold text-on-surface">AI Optimization Active</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter">
        {/* Main Recommendations Column */}
        <div className="xl:col-span-8 space-y-gutter">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline-md text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              Proactive Recommendations
            </h3>
            <span className="text-label-sm text-primary font-bold tracking-widest uppercase">3 New</span>
          </div>

          {/* Recommendation Card 1: Solar Film */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 p-gutter shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex flex-col md:flex-row gap-gutter">
              <div className="w-full md:w-48 h-40 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0">
                 <span className="material-symbols-outlined text-6xl text-primary/50 group-hover:scale-110 transition-transform">wb_sunny</span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Apply Solar-Control Film to South Wing</h4>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">Energy Efficiency</span>
                      <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-bold">High Confidence</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-headline-md text-primary font-bold">$12.4k</p>
                    <p className="font-label-sm text-on-surface-variant">Est. Annual Saving</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-label-sm text-on-surface-variant">ROI Estimate</p>
                    <p className="font-label-md font-bold text-on-surface">14 Months</p>
                  </div>
                  <div className="border-l-2 border-success-container pl-3">
                    <p className="text-label-sm text-on-surface-variant">Carbon Impact</p>
                    <p className="font-label-md font-bold text-on-surface">-4.2 tons/yr</p>
                  </div>
                  <div className="flex sm:justify-end items-end">
                    <button className="w-full sm:w-auto bg-primary text-on-primary rounded-full px-6 py-2 font-label-md flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity">
                      Implement Now
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation Card 2: Bin Collection */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 p-gutter shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex flex-col md:flex-row gap-gutter">
              <div className="w-full md:w-48 h-40 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0">
                 <span className="material-symbols-outlined text-6xl text-primary/50 group-hover:scale-110 transition-transform">route</span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Optimize Bin Collection Schedules</h4>
                    <div className="flex gap-2 mt-2">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">Operations</span>
                      <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-bold">Dynamic Route</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-headline-md text-primary font-bold">$8.2k</p>
                    <p className="font-label-sm text-on-surface-variant">Est. Fuel Savings</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-label-sm text-on-surface-variant">Efficiency Gain</p>
                    <p className="font-label-md font-bold text-on-surface">+22% Speed</p>
                  </div>
                  <div className="border-l-2 border-success-container pl-3">
                    <p className="text-label-sm text-on-surface-variant">Carbon Impact</p>
                    <p className="font-label-md font-bold text-on-surface">-1.8 tons/yr</p>
                  </div>
                  <div className="flex sm:justify-end items-end">
                    <button className="w-full sm:w-auto bg-primary text-on-primary rounded-full px-6 py-2 font-label-md flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity">
                      Review Routes
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Predictive Analytics */}
        <div className="xl:col-span-4 space-y-gutter mt-8 xl:mt-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline-md text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">trending_up</span>
              Forecasts
            </h3>
          </div>

          {/* Alert Card */}
          <div className="bg-error-container/20 border border-error-container/50 rounded-xl p-4 flex gap-4 items-start shadow-sm">
            <div className="p-2 bg-error text-white rounded-full mt-1">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <div>
              <h5 className="font-label-md font-bold text-on-surface">Peak Demand Warning</h5>
              <p className="text-body-sm text-on-surface-variant mt-1">AI models predict a 15% surge in campus energy usage this Thursday due to a forecasted heatwave combined with major events.</p>
              <button className="mt-3 text-primary font-bold text-label-sm hover:underline">View Load Shedding Plan</button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-outline-variant/30 rounded-xl p-4 text-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-2">savings</span>
              <p className="font-display text-headline-sm font-bold text-on-surface">18%</p>
              <p className="text-label-sm text-on-surface-variant">Waste Reduction Potential</p>
            </div>
            <div className="bg-white border border-outline-variant/30 rounded-xl p-4 text-center shadow-sm">
              <span className="material-symbols-outlined text-tertiary mb-2">water_drop</span>
              <p className="font-display text-headline-sm font-bold text-on-surface">1.2M</p>
              <p className="text-label-sm text-on-surface-variant">Gallons Saved YTD</p>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-on-surface mb-2">AI Confidence Score</h4>
            <div className="flex items-center justify-between mb-1">
              <span className="text-label-sm text-on-surface-variant">System Reliability</span>
              <span className="font-bold text-primary">94.2%</span>
            </div>
            <div className="w-full bg-outline-variant/30 h-2 rounded-full overflow-hidden">
               <div className="bg-primary h-full w-[94.2%]"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 text-center">Based on 1.4M data points analyzed in the last 24h.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
