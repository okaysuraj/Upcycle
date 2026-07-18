import React from 'react';

export default function ActivityHistory() {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex justify-between items-end mb-lg">
        <div>
          <p className="text-label-md text-primary font-bold uppercase tracking-wider mb-2">My Journey</p>
          <h2 className="font-display text-display-sm text-on-surface leading-tight">Impact History</h2>
        </div>
        <div className="flex gap-base">
          <button className="flex items-center gap-2 px-md py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md hover:bg-secondary-fixed transition-colors">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Filter
          </button>
          <button className="flex items-center gap-2 px-md py-2 bg-surface-container-highest text-on-surface-variant rounded-full font-label-md hover:bg-outline-variant/30 transition-colors">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Export CSV
          </button>
        </div>
      </div>

      {/* Dashboard Metrics Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-xl">
        <div className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-outline-variant/30 shadow-sm rounded-[24px] p-md flex items-center justify-between overflow-hidden relative">
          <div className="z-10">
            <h3 className="font-headline-md text-on-surface mb-base">Milestone Achievement</h3>
            <p className="text-body-md text-on-surface-variant max-w-md mb-md">
              You've reached <span className="font-bold text-primary">Level 12: Soil Steward</span>. Only 250 XP remaining to unlock the Green Roof certification initiative.
            </p>
            <div className="w-full bg-secondary-container rounded-full h-3 max-w-sm mb-base">
              <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
            </div>
            <p className="text-label-sm text-secondary">750 / 1000 XP Earned</p>
          </div>
          <div className="w-48 h-48 relative z-0 hidden sm:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[80px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 bg-primary text-on-primary rounded-[24px] p-md flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-sm font-bold">+12% vs last month</span>
          </div>
          <div>
            <h4 className="text-label-md opacity-80 mb-xs">Total Impact Points</h4>
            <p className="text-display font-display leading-none">4,820</p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-gutter relative ml-2 md:ml-0">
        {/* Timeline Connector Line */}
        <div className="absolute left-10 md:left-24 top-0 bottom-0 w-px bg-outline-variant/30 z-0"></div>

        {/* Activity Items */}
        {/* Item 1 */}
        <div className="relative z-10 flex gap-md items-start group">
          <div className="hidden md:block w-20 pt-2 text-right">
            <p className="text-label-md font-bold text-on-surface">Oct 24</p>
            <p className="text-label-sm text-secondary">09:15 AM</p>
          </div>
          <div className="w-12 h-12 bg-white border border-outline-variant/30 rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary-fixed group-hover:border-primary transition-colors flex-shrink-0">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed">recycling</span>
          </div>
          <div className="flex-1 bg-white border border-outline-variant/30 rounded-[24px] p-md hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-sm gap-2">
              <div>
                <div className="md:hidden mb-1">
                  <span className="text-label-sm font-bold text-on-surface">Oct 24, 09:15 AM</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Logged 5kg Plastic</h4>
                <p className="text-body-md text-on-surface-variant">Verified drop-off at Municipal Recycling Hub B-4. Materials categorized as HDPE and PET.</p>
              </div>
              <div className="bg-primary-container/10 border border-primary-container/30 text-primary px-4 py-2 rounded-full font-bold text-label-md flex items-center gap-1 self-start whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                +150 XP
              </div>
            </div>
            <div className="flex gap-base flex-wrap">
              <span className="px-3 py-1 bg-surface-container rounded-lg text-label-sm text-secondary">#plastic-free</span>
              <span className="px-3 py-1 bg-surface-container rounded-lg text-label-sm text-secondary">#verified</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative z-10 flex gap-md items-start group">
          <div className="hidden md:block w-20 pt-2 text-right">
            <p className="text-label-md font-bold text-on-surface">Oct 22</p>
            <p className="text-label-sm text-secondary">02:30 PM</p>
          </div>
          <div className="w-12 h-12 bg-white border border-outline-variant/30 rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary-fixed group-hover:border-primary transition-colors flex-shrink-0">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed">school</span>
          </div>
          <div className="flex-1 bg-white/70 backdrop-blur-md border border-outline-variant/30 rounded-[24px] p-md hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-sm gap-2">
              <div>
                <div className="md:hidden mb-1">
                  <span className="text-label-sm font-bold text-on-surface">Oct 22, 02:30 PM</span>
                </div>
                <h4 className="font-headline-md text-on-surface">Attended Composting Seminar</h4>
                <p className="text-body-md text-on-surface-variant">60-minute masterclass on anaerobic digestion for residential high-density urban environments.</p>
              </div>
              <div className="bg-primary-container/10 border border-primary-container/30 text-primary px-4 py-2 rounded-full font-bold text-label-md flex items-center gap-1 self-start whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                +300 XP
              </div>
            </div>
            <div className="flex items-center gap-3 p-base bg-white/50 rounded-xl border border-outline-variant/20 mt-4">
              <span className="material-symbols-outlined text-tertiary">card_membership</span>
              <span className="text-label-md font-bold text-on-surface">Certificate of Completion Added</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
