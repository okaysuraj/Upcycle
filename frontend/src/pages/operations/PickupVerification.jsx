import React from 'react';

export default function PickupVerification() {
  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-8rem)]">
      {/* Top Navbar */}
      <header className="flex justify-between items-center pb-4 mb-4 border-b border-outline-variant/30 shrink-0">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="h-6 w-px bg-outline-variant/50 mx-2"></div>
          <div>
            <h2 className="font-display text-xl font-bold text-primary">Verification Flow</h2>
          </div>
        </div>
      </header>

      {/* Content Area: Split Pane Layout */}
      <div className="flex flex-col lg:flex-row gap-gutter flex-1 min-h-0 overflow-hidden">
        {/* Left Pane: Photo Proof Viewer */}
        <section className="lg:w-[60%] p-6 md:p-8 bg-white border border-outline-variant/30 rounded-3xl overflow-y-auto shadow-sm flex flex-col">
          <div className="flex flex-col h-full gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
              <div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-1">Photo Proof: Asset #UP-8842</h3>
                <p className="text-sm font-medium text-on-surface-variant">Captured: Oct 24, 2024 • 09:14 AM</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant shadow-sm transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </button>
                <button className="p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant shadow-sm transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
            </div>
            
            {/* Main Viewer */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-surface-container-lowest group shadow-inner border border-outline-variant/20 min-h-[300px]">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Main Proof" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN9EkYM04itpIkGo2YDWXLDbd2HVYDZh-ece0Vw3uTMAbJHni_ai4exOEXXgj4wyJoTlUO4HWiygXsbMX_9v0byTbEcPfjsdX4RgE1ahJTwh0Xqb00VrK0IBN0J-ihDfgWyCMxqyEjBoaqRIZDH8FCl1dQnQQNzB4M_UNwnE7Ds1Mo5hvQt4LKIZ2WXjlbOWSgP9JNQjmpOI0OA9zAqEvBstPrzZRlqICPl4v3UpUkGgDlQ11mtXXw_PCfZssZNkT3AmtUR7yrXKY" />
              
              {/* HUD Overlays */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg tracking-widest border border-white/20">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span> AI VERIFIED: EMPTY
                </span>
                <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg tracking-widest border border-white/20">
                  <span className="material-symbols-outlined text-[18px]">timer</span> 0.4s LATENCY
                </span>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white shadow-lg">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">Camera Metadata</p>
                  <p className="text-sm font-mono">Zebra TC57x • f/1.8 • ISO 100</p>
                </div>
                <div className="flex gap-3">
                  <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-black/60 transition-colors shadow-lg">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-black/60 transition-colors shadow-lg">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-4 h-24 shrink-0">
              <div className="rounded-xl overflow-hidden border-2 border-primary shadow-sm cursor-pointer relative">
                 <div className="absolute inset-0 border-2 border-primary rounded-xl z-10 pointer-events-none"></div>
                 <img className="w-full h-full object-cover" data-alt="Thumb 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjMyf-FjYDLuq4o0dH3ndT3cdn01-t9UGota8oNS-sPleNVl_Ttdlef13WSTQI9MfQWYtozr9JiiakKOuucU-1G-BAGUT5wHxnzFS9EfqsfFN1gTpxVewEYzi9OcAmThZnDmF_lmr86BFH-mxdd-6bQhlgqHKWir9mHci4HqH2VOgVDWrg422Wza8d5l0yQ-8jpkDE0MdAdxZwlRxST_Nkc5HjMnhbbbEs3aM6h-mh34_Qc_PSioFgXlw5pQmt-QzveFxM7b-mqos" />
              </div>
              <div className="rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer border border-outline-variant/30">
                 <img className="w-full h-full object-cover" data-alt="Thumb 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMdMsuYnACUZyT4uKI656X1nhlRWz48gZPMVDIDRPI9c2bexYa_gjfhMaQa9nVZaVc8GVPpl-kGnvZ4kYoVH0lAHzhhS93qDxI2b2eOYm4YAQcY5Q_yMWRGDjz-ZRM_pdoAQjmySru75SrD9-rwfdzrQ85nJcD3Meb6r2CkRnxdVCrD_yJzI0ZbvbJN99t3U8p_0Mf5WdXnrUU6m5eUVmks1ZCZYfcIBS3xU87GOrW8Vwsn3sA8gdWwZHEHcl50ENatBkQ_WNGHTc" />
              </div>
              <div className="rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer border border-outline-variant/30">
                 <img className="w-full h-full object-cover" data-alt="Thumb 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzUteQU-ng9v-BW-4A5I8EB56SfxJQR8EZnTVgPDaekO5s_h9UIFkANRj9cUTEMoPc1ie492OyB4TOZoUZv1mTl5xWgYTl8igzo_uPlqDQy7g6Gb0orln5ViotLaCJxGO1WU5BCZVmnCj-aedvlbzbDzBxHSiNkXmM7m7oEYPlbeVrvfBKqXqUzxwuL1P6zbX2h-WgdDz3Yw59llSqanLn5Ur7pYmNjdiYlWKLHEwIkKRCro6BTY4-s4zgWvl7zGtZatbtBM53QGU" />
              </div>
              <div className="rounded-xl overflow-hidden relative flex items-center justify-center bg-surface-container hover:bg-surface-container-high transition-colors border border-outline-variant/30 border-dashed cursor-pointer text-on-surface-variant hover:text-primary group">
                 <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_a_photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Pane: Metadata & Controls */}
        <aside className="lg:w-[40%] bg-white border border-outline-variant/30 rounded-3xl p-6 md:p-8 overflow-y-auto shadow-sm flex flex-col gap-8">
            {/* Verified Location Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Verified Location</h4>
                <span className="text-green-600 font-bold text-xs flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  GPS MATCH
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden h-48 relative border border-outline-variant/30 mb-4 group">
                 <div className="absolute inset-0 bg-cover bg-center grayscale-[0.2]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5IW8OORMySBAsnpo9hIhg9cclilcZdYHVOF9RNVR6_AneSOkxoKEsSk0mJcuvu1GNEARfl1t4oqWIQEq03ZnfDfL4Wm9bZYuw2He7YglRov37WoOAjEO2wt3ntO6ihcmG_u7X2V2tIAY3owoy-owulLPH19ucO3iGuuPLx4BqldQcsq_l_Z99WfIsGxY1244eHs3BGAhJoLpHcXK6uRSJQMk0ywn7D23V1GC1ulJX-ClsP4-feoEYHn3dqRX6mjY6Efb4o0j7Mo0')" }}></div>
                 {/* Pin */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
                     <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center absolute border-2 border-white shadow-lg">
                        <span className="material-symbols-outlined text-[12px]">location_on</span>
                     </div>
                 </div>
                 
                 <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono font-bold border border-white/50 shadow-sm text-on-surface">
                    40.7128° N, 74.0060° W
                 </div>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">home_pin</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">242 Greenhouse Blvd.</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">Sector 4 • Eco-Industrial Zone</p>
                </div>
              </div>
            </section>
            
            {/* Measurement Details */}
            <section className="flex-1">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Weight & Metrics</h4>
              <div className="space-y-3">
                 <div className="flex justify-between items-center p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
                    <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-primary text-[20px]">scale</span>
                       <span className="text-sm font-bold text-on-surface">Recorded Weight</span>
                    </div>
                    <span className="font-display font-bold text-xl text-primary">245 kg</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
                    <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-primary text-[20px]">category</span>
                       <span className="text-sm font-bold text-on-surface">Material Type</span>
                    </div>
                    <span className="font-bold text-sm text-on-surface bg-surface-container px-3 py-1 rounded-lg">Mixed Organics</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
                    <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                       <span className="text-sm font-bold text-on-surface">Service Time</span>
                    </div>
                    <span className="font-bold text-sm text-on-surface">4m 12s</span>
                 </div>
              </div>
            </section>
            
            {/* Action Buttons */}
            <section className="pt-4 border-t border-outline-variant/30 shrink-0">
               <div className="grid grid-cols-2 gap-4">
                  <button className="py-3.5 px-4 bg-white text-error border-2 border-error/20 hover:bg-error/5 hover:border-error/50 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                     <span className="material-symbols-outlined text-[18px]">flag</span>
                     Flag Issue
                  </button>
                  <button className="py-3.5 px-4 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-primary/90 active:scale-95 transition-all">
                     <span className="material-symbols-outlined text-[18px]">verified</span>
                     Approve Entry
                  </button>
               </div>
            </section>
        </aside>
      </div>
    </div>
  );
}
