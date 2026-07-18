import React from 'react';

export default function AiVendorMatchRecommendation() {
  return (
    <div className="flex flex-col gap-md">
      <header className="mb-lg">
        <div className="flex items-center gap-2 text-on-surface-variant mb-2">
          <span className="font-label-sm">MATCH FINDER</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="font-label-sm">AI RECOMMENDATION</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary">Intelligent Resource Match</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Based on logistics, priority level, and campus proximity, we've identified the optimal recipient for your bulk lab equipment donation.</p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Primary Recommendation */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          {/* Match Score & Main Entity */}
          <section className="bg-white/70 backdrop-blur-md rounded-[24px] border border-outline-variant/30 p-lg shadow-md flex flex-col md:flex-row items-center gap-xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" fill="transparent" r="70" stroke="#d9e6da" strokeWidth="12"></circle>
                  <circle className="transition-all duration-1000" cx="80" cy="80" fill="transparent" r="70" stroke="#00522d" strokeDasharray="440" strokeDashoffset="8.8" strokeLinecap="round" strokeWidth="12"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-[42px] font-bold text-primary leading-none">98%</span>
                  <span className="font-label-sm text-primary uppercase tracking-widest">Match</span>
                </div>
              </div>
              <div className="mt-4 px-4 py-1 bg-success-container text-primary rounded-full font-label-sm font-bold">EXCEPTIONAL</div>
            </div>
            
            <div className="relative z-10 flex-1 w-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Department of Biological Sciences</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="font-label-md">North Campus Hub (0.4 miles away)</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">
                  <span className="font-label-sm text-on-surface-variant block mb-1">URGENCY LEVEL</span>
                  <div className="flex items-center gap-2 text-error font-bold">
                    <span className="material-symbols-outlined text-[18px]">priority_high</span>
                    <span>Critical (Course Start)</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">
                  <span className="font-label-sm text-on-surface-variant block mb-1">LOGISTICS COST</span>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined text-[18px]">savings</span>
                    <span>Est. $0 (Internal Transfer)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Insight Panel */}
          <section className="bg-white rounded-[24px] border border-outline-variant/30 shadow-sm p-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">AI Logistical Insight</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-body-md text-body-md text-on-surface-variant">Upcycle Intelligence predicts a <strong className="text-primary">14.2kg carbon reduction</strong> by choosing this recipient over the secondary candidate due to localized delivery infrastructure already scheduled for Tuesday.</p>
                <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between text-label-sm">
                  <span className="text-on-surface-variant">CO2 Efficiency Rank</span>
                  <span className="text-primary font-bold">Top 5% of all campus matches</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-container">check_circle</span>
                  <span className="font-label-md text-on-surface">Compatible loading dock verified</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-container">check_circle</span>
                  <span className="font-label-md text-on-surface">Storage capacity confirmed</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-success-container">check_circle</span>
                  <span className="font-label-md text-on-surface">Recipient ready within 48h</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Alternatives & Action Panel */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          {/* Action Card */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 shadow-sm p-lg">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Ready to Proceed?</h3>
            <p className="text-body-md text-on-surface-variant mb-6">Initiate the transfer protocol and notify both logistics and the receiving department.</p>
            <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 mb-3">
              <span className="material-symbols-outlined">send</span>
              Confirm Match
            </button>
            <button className="w-full bg-surface-container-low text-primary py-3 rounded-full font-bold border border-primary/30 hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">chat</span>
              Message Coordinator
            </button>
          </div>

          {/* Secondary Recommendations */}
          <div className="bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 p-lg shadow-sm">
            <h4 className="font-label-md text-on-surface-variant uppercase tracking-wider font-bold mb-4">Secondary Options</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors border border-transparent hover:border-outline-variant/30">
                <div className="w-12 h-12 rounded-full border-4 border-outline-variant/50 flex items-center justify-center">
                  <span className="font-bold text-label-md">84%</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-label-md text-on-surface">Engineering Dept</h5>
                  <p className="text-label-sm text-on-surface-variant">Logistics Cost: $45</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors border border-transparent hover:border-outline-variant/30">
                <div className="w-12 h-12 rounded-full border-4 border-outline-variant/50 flex items-center justify-center">
                  <span className="font-bold text-label-md">72%</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-label-md text-on-surface">Community College Labs</h5>
                  <p className="text-label-sm text-on-surface-variant">Logistics Cost: $120</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 text-primary font-label-sm font-bold uppercase tracking-wider hover:underline">View All 12 Matches</button>
          </div>
        </div>
      </div>
    </div>
  );
}
