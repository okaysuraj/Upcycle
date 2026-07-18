import React from 'react';

export default function MatchSuggestions() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Hero Section: Global Match Score */}
      <section className="relative overflow-hidden rounded-[32px] bg-primary px-8 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxdYR727M_MrQ9A0DVrMnIIGSUU_KUUEy8DKf6QGeobtZXp1CiYRKyGfIV75Dm2LD0c1zge2m0RoFWTcDJi2wjVqqTZtLjdJCO2QYtdH28ZyBlcq-AdAw8yUPxiPH8EQwJTn8i-mhu-cxvsb72LFLYCTemTGNwsL96cnaf8skPg9K1FIff2TxTqvXZiT4VYlIT7wJ2dOhtjpXgR8LuzubAiJowV3LFjipWS_RcauFPpK--D59J9eFs913hBRgk959hdWP7A4KqjYk')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 backdrop-blur-md text-green-100 rounded-full mb-6 border border-green-400/30">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="font-bold text-xs uppercase tracking-widest">Optimized Hub</span>
          </div>
          <h2 className="font-display text-headline-lg md:text-display-sm font-bold mb-4 leading-tight">Match Suggestions</h2>
          <p className="font-body-lg text-primary-container/90 text-lg">Our algorithm has identified high-priority synergies between your campus waste and regional industrial demand. Act now to maximize circularity.</p>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-full flex flex-col items-center justify-center w-56 h-56 shadow-2xl animate-[pulse_4s_ease-in-out_infinite]">
            <span className="font-display text-6xl font-bold leading-none mb-2">89%</span>
            <span className="font-bold text-xs opacity-80 uppercase tracking-widest text-center">Global Score</span>
          </div>
          
          <div className="mt-8 flex gap-8">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-green-300">12</p>
              <p className="font-bold text-xs opacity-70 uppercase tracking-wider mt-1">New Leads</p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-green-300">4.2t</p>
              <p className="font-bold text-xs opacity-70 uppercase tracking-wider mt-1">Est. Diverted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid Header */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 py-2">
        <div className="flex flex-wrap gap-3">
          <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-sm hover:bg-primary/90 transition-colors">
            All Matches
          </button>
          <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full font-bold text-sm hover:bg-surface-variant transition-colors border border-outline-variant/30">
            High Priority
          </button>
          <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full font-bold text-sm hover:bg-surface-variant transition-colors border border-outline-variant/30">
            Nearby Only
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm text-on-surface-variant">Sort by:</span>
          <select className="bg-surface-container-lowest border border-outline-variant/50 font-bold text-sm text-primary focus:ring-2 focus:ring-primary rounded-lg px-3 py-2 cursor-pointer shadow-sm outline-none">
            <option>Highest Match %</option>
            <option>Newest Added</option>
            <option>Distance</option>
          </select>
        </div>
      </section>

      {/* Bento Grid of Matches */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Match Card 1 (Large - Focus) */}
        <article className="lg:col-span-8 group bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col md:flex-row h-full transition-all hover:shadow-lg hover:border-primary/30">
          <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden shrink-0">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Timber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOhwFt1ok86kQRidIap3J6Y_R6NQCk5Br8UEJhhS8iQyZs3XvCXTOlgpfEaJ2llJGsmjVMZUkcL25bcA48VYy8sTLBwV33C9_Neft4GlzrcmytWsipcHpQ58_6ANTe9uHWFs7phgcPXnGYobtu5pacOznjMLPQjxIxRVC_wN8CEflRsws417xXKX_U086y9NCd_ejbnM91xSStaYvwtBjtTl2BRIa_ATzLBedm_bmx_PYysTd2yJVEXIIJrTc6MWJ2iqk7pjCT-nk" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-bold text-xs text-primary uppercase tracking-wider">Live Match</span>
            </div>
          </div>
          
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                  <h3 className="font-display text-headline-sm font-bold text-on-surface mb-2">Industrial Oak Planks</h3>
                  <p className="font-body-md text-on-surface-variant">Salvaged from North Wing renovation. Premium grade structural timber.</p>
                </div>
                <div className="bg-green-50 text-green-700 border border-green-200 rounded-2xl px-4 py-3 flex flex-col items-center shrink-0">
                  <span className="font-display text-headline-sm font-bold">96%</span>
                  <span className="font-bold text-[10px] opacity-80 uppercase tracking-widest mt-1">Match</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span>2.4 miles away</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span>Added 2h ago</span>
                </div>
              </div>
              
              <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl mb-6">
                <p className="font-bold text-sm text-primary mb-1">Recommended Buyer:</p>
                <div className="flex items-center justify-between">
                   <p className="text-on-surface font-medium text-sm">Local Carpentry Guild</p>
                   <span className="text-primary font-bold text-sm">Est. $1,200</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-primary text-white py-3 rounded-full font-bold shadow-md hover:bg-primary/90 transition-colors">
                Initiate Contact
              </button>
              <button className="w-12 h-12 border-2 border-outline-variant/50 text-on-surface-variant rounded-full flex items-center justify-center hover:bg-surface-container-lowest hover:border-primary transition-all">
                <span className="material-symbols-outlined">bookmark_border</span>
              </button>
            </div>
          </div>
        </article>
        
        {/* Match Card 2 (Small - Stacked) */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
           {/* Sub-Card 1 */}
           <article className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow group cursor-pointer">
              <div className="p-5 flex gap-4 border-b border-outline-variant/30">
                 <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0">
                     <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <span className="material-symbols-outlined text-3xl">water_drop</span>
                     </div>
                 </div>
                 <div>
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Greywater System Parts</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Plumbing & Filtration</p>
                    <div className="mt-2 flex items-center gap-2 text-xs font-bold text-green-600">
                       <span className="material-symbols-outlined text-[14px]">auto_graph</span> 88% Match
                    </div>
                 </div>
              </div>
              <div className="px-5 py-3 bg-surface-container-lowest mt-auto flex justify-between items-center">
                 <span className="text-xs font-bold text-on-surface-variant">Regional Ag-Tech</span>
                 <button className="text-xs font-bold text-primary hover:underline">Review Lead</button>
              </div>
           </article>
           
           {/* Sub-Card 2 */}
           <article className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow group cursor-pointer">
              <div className="p-5 flex gap-4 border-b border-outline-variant/30">
                 <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0">
                     <div className="w-full h-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                        <span className="material-symbols-outlined text-3xl">desktop_mac</span>
                     </div>
                 </div>
                 <div>
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">E-Waste: Lab Monitors</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Electronics (30 units)</p>
                    <div className="mt-2 flex items-center gap-2 text-xs font-bold text-green-600">
                       <span className="material-symbols-outlined text-[14px]">auto_graph</span> 82% Match
                    </div>
                 </div>
              </div>
              <div className="px-5 py-3 bg-surface-container-lowest mt-auto flex justify-between items-center">
                 <span className="text-xs font-bold text-on-surface-variant">E-Recycle Corp</span>
                 <button className="text-xs font-bold text-primary hover:underline">Review Lead</button>
              </div>
           </article>
        </div>
      </section>
    </div>
  );
}
