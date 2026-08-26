import React from 'react';

export default function AchievementsBadges() {
  const badges = [
    { title: 'Zero Waste Hero', level: 'Level 3', desc: 'Diverted over 500kg of recyclable polymers and compostables from municipal landfills.', icon: 'recycling', color: 'bg-[#dff1fb] text-[#00522d]' },
    { title: 'Solar Advocate', level: 'Level 2', desc: 'Participated in campus rooftop microgrid optimization and reduced peak dorm draw.', icon: 'solar_power', color: 'bg-[#9cf6ba]/40 text-[#00210f]' },
    { title: 'Circular Champion', level: 'Level 4', desc: 'Completed 25+ successful item exchanges in the resource reuse marketplace.', icon: 'sync', color: 'bg-[#dff1fb] text-[#00522d]' },
    { title: 'Compost Maestro', level: 'Level 1', desc: 'Logged 50kg of food scrap contributions at East Quad Composting Station.', icon: 'compost', color: 'bg-[#9cf6ba]/40 text-[#00210f]' }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Verified Climate Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Sustainability Portfolio</h2>
          <p className="text-sm text-[#556158] mt-1">Official certifications and milestones awarded for verified ecological impact.</p>
        </div>
        <button 
          type="button"
          onClick={() => alert('Showcase link copied to clipboard!')}
          className="bg-[#00522d] text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-[#003d21] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">share</span>
          <span>Share Showcase</span>
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Elite Milestone Highlight Card (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#00522d] via-[#006d3e] to-[#2eb872] rounded-[32px] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-lg min-h-[380px]">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-end pr-8">
            <span className="material-symbols-outlined text-[260px]">eco</span>
          </div>
          
          <div className="relative z-10 space-y-3">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 inline-flex items-center gap-2 border border-white/30 text-xs font-bold">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span>Highest Municipal Honor</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Net-Zero Pioneer 2024</h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-lg leading-relaxed">
              Awarded for achieving 100% renewable energy procurement and zero-landfill diversion across campus for 12 consecutive months.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-wrap gap-8 items-end pt-6 border-t border-white/20">
            <div>
              <span className="text-[10px] uppercase font-bold text-white/70">Impact Score</span>
              <p className="text-3xl font-bold">94.8</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-white/70">Carbon Offset</span>
              <p className="text-3xl font-bold">1,240 <span className="text-xs font-normal">tCO₂e</span></p>
            </div>
            <button 
              type="button"
              onClick={() => alert('Certificate verified via SHA-256 on blockchain.')}
              className="ml-auto bg-white text-[#00522d] px-6 py-3 rounded-full text-xs font-bold hover:bg-[#e7f6ff] transition-colors shadow-md cursor-pointer"
            >
              View Verified Credential
            </button>
          </div>
        </div>

        {/* Recent Milestones Timeline (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[32px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
          <h4 className="text-lg font-bold text-[#0d1e25] flex items-center gap-2 pb-3 border-b border-[#bec9be]/20">
            <span className="material-symbols-outlined text-[#00522d]">history</span>
            <span>Recent Milestones</span>
          </h4>

          <div className="space-y-4 text-xs">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#9cf6ba]/60 flex items-center justify-center text-[#00210f] shrink-0 font-bold">
                <span className="material-symbols-outlined text-base">check</span>
              </div>
              <div>
                <p className="text-[10px] text-[#556158]">Yesterday, 14:20</p>
                <p className="font-bold text-[#0d1e25]">Unlocked "Waste Warrior"</p>
                <p className="text-[#556158] mt-0.5">Reduced landfill contribution by 40% in Block A.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#dff1fb] flex items-center justify-center text-[#00522d] shrink-0 font-bold">
                <span className="material-symbols-outlined text-base">water_drop</span>
              </div>
              <div>
                <p className="text-[10px] text-[#556158]">3 Oct 2024</p>
                <p className="font-bold text-[#0d1e25]">H2O Hero Award</p>
                <p className="text-[#556158] mt-0.5">Installed 50 smart leak sensors campus-wide.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#dff1fb] flex items-center justify-center text-[#00522d] shrink-0 font-bold">
                <span className="material-symbols-outlined text-base">electric_car</span>
              </div>
              <div>
                <p className="text-[10px] text-[#556158]">28 Sep 2024</p>
                <p className="font-bold text-[#0d1e25]">EV Fleet Transition Phase 1</p>
                <p className="text-[#556158] mt-0.5">Fleet transition passed 25% milestone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#0d1e25]">Earned Eco-Badges</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => (
            <div key={idx} className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-2xl ${b.color} flex items-center justify-center shadow-sm`}>
                  <span className="material-symbols-outlined text-2xl">{b.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
                  {b.level}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#0d1e25]">{b.title}</h4>
              <p className="text-xs text-[#556158] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
