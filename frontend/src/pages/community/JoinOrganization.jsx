import React from 'react';

export default function JoinOrganization() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full">
      {/* Hero Header */}
      <div className="mb-lg relative overflow-hidden rounded-[32px] p-8 md:p-12 bg-primary text-white shadow-lg">
        <div className="absolute inset-0 bg-primary/20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-display text-display-sm md:text-display-md mb-4 font-bold shadow-sm">Connect with your Impact Hub</h1>
          <p className="font-body-lg text-primary-container/90 text-lg">Join your organization to coordinate waste reduction, track collective impact, and earn rewards for your community.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main Grid: Suggested Organizations */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          
          {/* Card 1: Green Valley Campus */}
          <div className="sm:col-span-2 bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left w-full sm:w-auto">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform shadow-inner border border-secondary/20">
                <img className="w-14 h-14 object-contain" data-alt="Green Valley Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFmY7AnW_t53H91tfJ8DoC58k77rZluR-NBnTOuMiEqobHLWfOv-gaJZ5MdUGXlroJfU97cb9DfDIHh71YwyEhGVwjLteTi1Fw5Gc50BrFZsVEDd-sp1FTi6JnD6-AD3hl9SbdQHeYlLdFkIckLeKrMQjEnuRD8vf01EEvO5iwrA9IIWNgO6BVbAYLqQH5mKSrvDo-_9wHpqLcYGkAp_22j8BWp8G8xYmWaDLYtGLImHMaymLKY5aZsQpcPLNYYq1XSBccQYKA_f0" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="font-headline-md font-bold text-primary mb-2">Green Valley Campus</h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-on-surface-variant font-label-md">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  <span className="font-bold">2,450 active members</span>
                </div>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-primary text-white rounded-full px-10 py-3 font-bold hover:shadow-lg transition-all active:scale-95 text-lg">Join</button>
          </div>
          
          {/* Card 2: EcoCorp Solutions */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 flex flex-col gap-6 hover:shadow-md transition-all duration-300 group shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img className="w-10 h-10 object-contain" data-alt="EcoCorp Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr6I1N42iqFE6ZoE3Uha0reMEJKZ4hQLuQBa_9LbOvvXLkmxivIucMhR1AHnod_M3nv09kucfDo5cEEkyb8fmYUhCahCC6KVp7GMdQIZmhySkvR8JiakfHvzYrx2In3TvoO0MxlTNHzGdTy8-86HAiprcmiVJpCbS0n2HMbY10k8HJLA3lMf0n48yQwQT5KtpAMWi7kIcN1xC3lMfjJDYwNKEVZ4h_e_em_anCd9xZ1y-SzDIseJpnkj-c55JLGaqxGe8u6lxuc5g" />
            </div>
            <div>
              <h3 className="font-headline-sm font-bold text-on-surface mb-1">EcoCorp Solutions</h3>
              <p className="text-on-surface-variant text-sm font-bold">840 Members • Sustainability Team</p>
            </div>
            <button className="mt-auto w-full border-2 border-primary text-primary rounded-full py-2.5 font-bold hover:bg-primary hover:text-white transition-colors">Join</button>
          </div>
          
          {/* Card 3: Metropolitan State Uni */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 flex flex-col gap-6 hover:shadow-md transition-all duration-300 group shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-primary-container text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <img className="w-10 h-10 object-contain" data-alt="Metropolitan State Uni Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiJ0lOhmQoO1GJbzZ5mccPtXTOsqftj-uSOjR-Xj5kILb5nyEuFX1st4k8Bzy2FPFq0TF2MI3z1OG4ID5c4oCaM4ALi0Hp397N2lC7fIweQnDc6xbtoC8rIosjZL8gzI0289chKptU3Dkl-INPtBJpfUkGCDP8v5qd9rmM6PYJfC1qgD_huPsMhST5ti3JFVo3MrkTL94M-B3cIbQgcxYwO4xgDXo7hny38Hv_hUg2TLUQqpymrpOrzAxU_qBIz8a_2rnaw1p7sn8" />
            </div>
            <div>
              <h3 className="font-headline-sm font-bold text-on-surface mb-1">Metropolitan State Uni</h3>
              <p className="text-on-surface-variant text-sm font-bold">5,120 Members • Academic District</p>
            </div>
            <button className="mt-auto w-full border-2 border-primary text-primary rounded-full py-2.5 font-bold hover:bg-primary hover:text-white transition-colors">Join</button>
          </div>
          
          {/* Empty State / Discover More */}
          <div className="sm:col-span-2 bg-surface-container-lowest border-2 border-dashed border-outline-variant/50 rounded-[24px] p-10 flex flex-col items-center justify-center text-center shadow-sm mt-4">
            <span className="material-symbols-outlined text-[48px] text-outline mb-4">location_city</span>
            <h4 className="font-headline-md font-bold text-on-surface mb-2">Not seeing your local hub?</h4>
            <p className="font-body-md text-on-surface-variant max-w-md mb-6">Try searching for specific departments or browse the map to find organizations in your immediate vicinity.</p>
            <button className="flex items-center gap-2 text-primary font-bold hover:underline">
              Explore Map View
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="lg:col-span-4 space-y-gutter">
          {/* CTA Card */}
          <div className="bg-surface-container-high rounded-[24px] p-6 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h3 className="font-headline-sm font-bold text-primary mb-3">Can't find your organization?</h3>
              <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">If your campus or company isn't registered on Upcycle yet, you can start the movement today.</p>
              <button className="w-full bg-on-surface text-surface rounded-full py-3 font-bold hover:bg-primary hover:text-white transition-colors">Register New Org</button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-5">
              <span className="material-symbols-outlined text-[150px]">help_center</span>
            </div>
          </div>
          
          {/* Map/Location Quick View */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden shadow-sm">
            <div className="h-48 relative">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAX8cyMl35nSiQtV9E_aFuSo3vDGvyWboRD0M9keVT676iu6AY3WW5UXWEdurOTQvJKKdq9LhpqKEpQuWEajE0NqY3Q3lJon5xtEZUUew2ARAnAtGYenoAnkfSiC0ugyK1JnnsnzbuylOTN4VKlCuGVPlHB1klXpxJjqLYuncjPz1tK18xXaW5n-Of-Qv0werfKnbIAg-6qme-ZBTyoYGJrk6omSJ2MAZy6pA0mkI3qcJFnaspj44eoon_ZTmPhZmwpaIlBBPqOIyo')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-md">
                  <span className="material-symbols-outlined text-[14px]">my_location</span>
                  Nearby You
                </span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-label-md font-bold text-on-surface mb-2">Active hubs in your area</h4>
              <p className="text-on-surface-variant text-sm font-medium">We found 12 other smaller initiatives near your current location.</p>
            </div>
          </div>
          
          {/* Info/Impact Badge */}
          <div className="bg-white rounded-[24px] p-6 border border-primary/20 shadow-sm text-center lg:text-left">
             <span className="font-label-sm uppercase tracking-widest text-primary font-bold">Network Stats</span>
             <div className="text-display-sm font-display font-bold text-on-surface mt-2 mb-1">1.2M+</div>
             <p className="font-label-md text-on-surface-variant font-bold">Active eco-professionals worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
}
