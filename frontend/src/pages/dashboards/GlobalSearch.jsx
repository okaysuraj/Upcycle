import React from 'react';

export default function GlobalSearch() {
  return (
    <div className="flex flex-col gap-md pb-12 max-w-[1200px] mx-auto w-full">
      {/* Global Search Hero Section */}
      <section className="mb-lg">
        <h2 className="font-display text-display-md font-bold text-on-surface mb-2">Global Search</h2>
        <p className="font-body-lg text-on-surface-variant mb-8">Explore the municipal ecosystem and find sustainable resources.</p>
        
        {/* Expanded Search Input & Filters */}
        <div className="flex flex-col gap-md">
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-primary text-3xl">manage_search</span>
            </div>
            <input 
              className="w-full pl-20 pr-6 py-5 bg-white border-2 border-primary/20 rounded-[32px] font-display text-headline-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface shadow-sm" 
              placeholder="What are you looking for?" 
              type="text" 
              defaultValue="Recycling programs" 
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-5 py-2 rounded-full bg-primary text-on-primary font-bold text-label-md flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">all_inclusive</span>
              All Results
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-lowest transition-colors font-bold text-label-md flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">school</span>
              Campuses
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-lowest transition-colors font-bold text-label-md flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Events
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-lowest transition-colors font-bold text-label-md flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Community Posts
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-lowest transition-colors font-bold text-label-md flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main Search Results Column */}
        <div className="lg:col-span-8 flex flex-col gap-md">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md font-bold text-on-surface">Recommended for You</h3>
            <button className="text-primary font-bold hover:underline">View all recommendations</button>
          </div>
          
          {/* Large Result Card 1 */}
          <div className="group bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col sm:flex-row transition-all hover:shadow-md cursor-pointer shadow-sm">
            <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
              <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Campus garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2IgnscAZ8CqKtQMuvKEQO2TAbREzHYNQc-2qA-dva68rHn8FgNqA1SZtrkFkCDtFSTjRWZUDjk2y765QPNPEguuH4ISvzmuS3Dpe-6s_tx99bFpegCnFS1tJCZgCG5dgjA6xI-X757cnH0XRaSZDR-NsQH7SJ5G4cwlrn4G5Z7e3azoNZ60zl8dsoDAvIby-93lwO-gAsu38lrVZSa6z6GZMpiL0rB_LsB2i_wYDFf1KTrfE4rGndkEhpjd5tpvgBr97uFDRmN8Y" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 backdrop-blur-sm text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Campus Focus</span>
              </div>
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">Green Valley Smart Campus</h4>
                  <button className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">bookmark_border</span>
                  </button>
                </div>
                <p className="text-body-md text-on-surface-variant mb-4">An integrated waste-to-energy initiative that supports local municipal data tracking and zero-waste goals for corporate partners.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary-container/50 text-secondary-fixed-dim text-xs font-bold px-2 py-1 rounded-lg">Sustainability</span>
                  <span className="bg-secondary-container/50 text-secondary-fixed-dim text-xs font-bold px-2 py-1 rounded-lg">Urban Farming</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-outline-variant/30 pt-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-variant flex items-center justify-center text-[10px]">AD</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-container flex items-center justify-center text-[10px]">KL</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-tertiary-container flex items-center justify-center text-[10px]">MB</div>
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant">42 participants</span>
                </div>
                <button className="bg-primary-container text-primary font-bold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">Join Initiative</button>
              </div>
            </div>
          </div>
          
          {/* Large Result Card 2 */}
          <div className="group bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col sm:flex-row transition-all hover:shadow-md cursor-pointer shadow-sm">
            <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
              <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Recycling facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2QMsMNJT5HugsH5bXkAVcMpfb0u_yD-y8GaylDmsaVmyg2RrjANfww8-7OgcaGIFeuivl1XfimS7vwEWtf18ZypNUZFLUDau9u3rkIul415BYBGzMf1sVwCqtLe8YWcUplokMTw78pyn7wtDgvCvJ_K3cTv8fZ7j34zZ5DtdpOwxN-iAyicll27V2D4cIRs8Lp3QxiD4ph4w312ORExsLgVLyhCEkaBIqgI5OkPTMdxQlMMsJ5WVsNW3z-oJmBiAlfw_cVUbRGEU" />
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Marketplace</span>
              </div>
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline-md font-bold text-on-surface group-hover:text-tertiary transition-colors">Industrial Composting Unit X4</h4>
                  <button className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">bookmark_border</span>
                  </button>
                </div>
                <p className="text-body-md text-on-surface-variant mb-4">High-capacity aerobic composting machine suitable for campus cafeterias and local municipal organic waste processing.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-surface-variant/50 text-on-surface-variant text-xs font-bold px-2 py-1 rounded-lg">Equipment</span>
                  <span className="bg-surface-variant/50 text-on-surface-variant text-xs font-bold px-2 py-1 rounded-lg">Available Now</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-outline-variant/30 pt-4 gap-4">
                <div>
                   <p className="font-bold text-tertiary text-lg">$12,500</p>
                   <p className="text-[10px] text-on-surface-variant">Est. value</p>
                </div>
                <button className="bg-tertiary text-white font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">Request Quote</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-md">
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 shadow-sm">
            <h3 className="font-headline-sm font-bold text-on-surface mb-4">Top Categories</h3>
            <div className="space-y-2">
               <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                  <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">recycling</span>
                     <span className="font-bold text-on-surface">Waste Management</span>
                  </div>
                  <span className="bg-surface-variant/50 text-xs font-bold px-2 py-1 rounded-full">1,204</span>
               </button>
               <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                  <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">solar_power</span>
                     <span className="font-bold text-on-surface">Renewable Energy</span>
                  </div>
                  <span className="bg-surface-variant/50 text-xs font-bold px-2 py-1 rounded-full">856</span>
               </button>
               <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                  <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-secondary-fixed-dim group-hover:scale-110 transition-transform">water_drop</span>
                     <span className="font-bold text-on-surface">Water Conservation</span>
                  </div>
                  <span className="bg-surface-variant/50 text-xs font-bold px-2 py-1 rounded-full">432</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
