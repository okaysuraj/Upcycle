import React from 'react';

export default function AchievementsBadges() {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex justify-between items-end mb-lg">
        <div>
          <span className="font-label-sm text-primary uppercase tracking-widest">Global impact</span>
          <h2 className="font-display text-display-sm text-primary">Sustainability Portfolio</h2>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
          <span className="material-symbols-outlined">share</span>
          Share Showcase
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Elite Milestone Highlight Card */}
        <div className="lg:col-span-8 bg-gradient-to-br from-[#00522d] to-[#2eb872] rounded-[24px] p-lg text-on-primary relative overflow-hidden flex flex-col justify-between shadow-lg h-[400px]">
          {/* Atmospheric Background Overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] absolute -right-20 -top-20">eco</span>
          </div>
          
          <div className="relative z-10">
            <div className="bg-on-primary/20 backdrop-blur-md rounded-full px-4 py-1 inline-flex items-center gap-2 mb-md border border-white/30">
              <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span className="font-label-md">Highest Honor</span>
            </div>
            <h3 className="font-display text-headline-lg mb-2">Net-Zero Pioneer 2024</h3>
            <p className="font-body-lg text-primary-fixed max-w-lg mb-lg">Awarded for achieving 100% renewable energy procurement across all campus facilities for 12 consecutive months.</p>
          </div>
          
          <div className="relative z-10 flex flex-wrap gap-lg items-end">
            <div className="flex flex-col">
              <span className="font-label-sm uppercase opacity-70">Impact Score</span>
              <span className="font-display text-headline-lg">94.8</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm uppercase opacity-70">Carbon Offset</span>
              <span className="font-display text-headline-lg">1,240<small className="text-label-md">t</small></span>
            </div>
            <button className="ml-auto bg-on-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary-fixed transition-colors">
              View Certification
            </button>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="lg:col-span-4 bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm flex flex-col h-[400px]">
          <h4 className="font-headline-md mb-base flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-primary">history</span>
            Recent Milestones
          </h4>
          <div className="flex-grow space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            {/* Timeline Item 1 */}
            <div className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-success-container flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-white text-[18px]">check</span>
                </div>
                <div className="w-0.5 h-full bg-outline-variant/30 mt-1"></div>
              </div>
              <div className="pb-4">
                <p className="font-label-sm text-on-surface-variant">Yesterday, 14:20</p>
                <p className="font-label-md font-bold text-on-surface">Unlocked "Waste Warrior"</p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">Reduced landfill contribution by 40% in Block A.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-on-primary-container text-[18px]">water_drop</span>
                </div>
                <div className="w-0.5 h-full bg-outline-variant/30 mt-1"></div>
              </div>
              <div className="pb-4">
                <p className="font-label-sm text-on-surface-variant">3 Oct 2024</p>
                <p className="font-label-md font-bold text-on-surface">H2O Hero Award</p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">Installed 50 smart leak sensors campus-wide.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-on-secondary-container text-[18px]">electric_car</span>
                </div>
              </div>
              <div className="pb-4">
                <p className="font-label-sm text-on-surface-variant">28 Sep 2024</p>
                <p className="font-label-md font-bold text-on-surface">EV Adopter Phase 1</p>
                <p className="font-body-md text-on-surface-variant text-sm mt-1">Fleet transition passed 25% milestone.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Badge Grid Section */}
        <div className="lg:col-span-12 mt-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-lg text-on-surface">Earned Badges</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full border border-primary text-primary font-bold text-label-md bg-primary/5">All (12)</button>
              <button className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md hover:bg-surface-variant/50 transition-colors">Energy</button>
              <button className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md hover:bg-surface-variant/50 transition-colors">Waste</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Badge 1 */}
            <div className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
              <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl text-on-primary-container">psychology</span>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary text-on-primary rounded-full text-xs flex items-center justify-center font-bold border-2 border-white">L3</div>
              </div>
              <h4 className="font-bold text-on-surface mb-1">Eco-Minded</h4>
              <p className="text-xs text-on-surface-variant">Top 10% in quizzes</p>
            </div>
            
            {/* Badge 2 */}
            <div className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
              <div className="w-20 h-20 bg-tertiary-container rounded-full flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container">park</span>
              </div>
              <h4 className="font-bold text-on-surface mb-1">Tree Hugger</h4>
              <p className="text-xs text-on-surface-variant">Planted 50 trees</p>
            </div>
            
            {/* Locked Badge */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center text-center opacity-70 cursor-not-allowed">
              <div className="w-20 h-20 bg-surface-variant rounded-full flex items-center justify-center mb-4 relative grayscale">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">bolt</span>
                <div className="absolute inset-0 bg-surface-container-low/50 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface text-xl">lock</span>
                </div>
              </div>
              <h4 className="font-bold text-on-surface mb-1">Energy Czar</h4>
              <p className="text-xs text-on-surface-variant">80% to unlock</p>
              <div className="w-full bg-outline-variant/30 h-1.5 rounded-full mt-3">
                <div className="bg-primary h-full w-[80%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
