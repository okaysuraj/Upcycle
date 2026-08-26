import React from 'react';
import { Link } from 'react-router-dom';

export default function MatchSuggestions() {
  const matches = [
    {
      id: '1',
      title: 'Industrial Oak Planks & Timber',
      desc: 'Salvaged from North Wing renovation. Premium grade architectural structural timber.',
      match: 96,
      distance: '2.4 miles away',
      time: 'Added 2h ago',
      buyer: 'Verde Urban Woodworks',
      buyerNeed: 'Seeking 5+ tons for local furniture project',
      carbonOffset: '3.4 tCO₂e avoided',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOhwFt1ok86kQRidIap3J6Y_R6NQCk5Br8UEJhhS8iQyZs3XvCXTOlgpfEaJ2llJGsmjVMZUkcL25bcA48VYy8sTLBwV33C9_Neft4GlzrcmytWsipcHpQ58_6ANTe9uHWFs7phgcPXnGYobtu5pacOznjMLPQjxIxRVC_wN8CEflRsws417xXKX_U086y9NCd_ejbnM91xSStaYvwtBjtTl2BRIa_ATzLBedm_bmx_PYysTd2yJVEXIIJrTc6MWJ2iqk7pjCT-nk'
    },
    {
      id: '2',
      title: 'Refurbished Laboratory Spectrophotometer',
      desc: 'Tested and calibrated UV-Vis spectrophotometer ready for research deployment.',
      match: 92,
      distance: '0.8 miles away',
      time: 'Added 4h ago',
      buyer: 'Department of Chemistry',
      buyerNeed: 'Undergrad analytical laboratory program',
      carbonOffset: '1.2 tCO₂e avoided',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu1ozRhzV-Wleq6yexxaYHdsBR0VPTeXxJwk3emmNZxEA4o_GX_SAOYGnrYy0127_VKKpTJ440WkQoDlovTIqJ6WjHh40rPOdgmh7I9PrDVNajr717ZAbRrWc_YfTLhSiw0oQ_pN-Advt0ZksJFdlpK6FrfD9Tw3RwXyxCXz2TzMbxyjRxfR3HpJPL5aN05yKy9S0qzNvv1yL97Dton08BlCxloxxPLzoQCb2ArDOzD4BGujXD04LNi-Gnzb3sGS76ImnYyk1AKBw'
    }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Hero Section: Global Match Score */}
      <section className="relative overflow-hidden rounded-[32px] bg-[#00522d] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#9cf6ba]/30 text-[#9cf6ba] rounded-full border border-[#9cf6ba]/40 text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span>Upcycle AI Match Optimizer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Intelligent Synergy Engine</h2>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Our algorithm has identified high-priority synergies between your campus surplus inventory and regional industrial demand.
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col items-center mt-6 md:mt-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full flex flex-col items-center justify-center w-40 h-40 shadow-xl">
            <span className="text-4xl font-bold leading-none">89%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mt-1">Global Synergy</span>
          </div>
        </div>
      </section>

      {/* Matches Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-[#bec9be]/30">
          <h3 className="text-xl font-bold text-[#0d1e25]">Recommended Circular Matches</h3>
          <span className="text-xs font-bold text-[#00522d]">2 High-Synergy Opportunities</span>
        </div>

        <div className="space-y-6">
          {matches.map((m) => (
            <article key={m.id} className="bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all">
              <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden bg-[#f4faff] shrink-0">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-bold text-[#00522d]">
                  <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
                  <span>Verified Match</span>
                </div>
              </div>
              
              <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-[#0d1e25]">{m.title}</h4>
                      <p className="text-xs text-[#556158] mt-1">{m.desc}</p>
                    </div>
                    <div className="bg-[#9cf6ba]/40 text-[#00210f] border border-[#9cf6ba] rounded-2xl px-3 py-2 flex flex-col items-center shrink-0">
                      <span className="text-xl font-bold">{m.match}%</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Match</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1 my-3 text-xs">
                    <p className="font-bold text-[#00522d]">Recommended Buyer: {m.buyer}</p>
                    <p className="text-[11px] text-[#556158]">{m.buyerNeed} • <b>{m.carbonOffset}</b></p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#bec9be]/20">
                  <div className="text-xs text-[#556158]">
                    <span>{m.distance} • {m.time}</span>
                  </div>
                  <Link
                    to="/marketplace/match-recommendation"
                    className="px-6 py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Inspect Match</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
