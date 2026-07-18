import React from 'react';

export default function ConnectedOrganizations() {
  return (
    <div className="flex flex-col gap-md">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-display text-headline-lg text-on-background mb-base">Connected Organizations</h2>
          <p className="font-body-lg text-on-surface-variant">Manage your environmental ecosystem and collaboration networks.</p>
        </div>
        <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-bold flex items-center gap-base hover:bg-primary hover:text-on-primary transition-all shadow-md">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-label-md text-label-md">Find New Organizations</span>
        </button>
      </div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Featured Admin Org (Larger Card) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm relative overflow-hidden group">
          <div className="flex flex-col md:flex-row gap-lg h-full">
            <div className="w-full md:w-1/3 rounded-xl bg-surface-container flex items-center justify-center min-h-[200px]">
               <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">domain</span>
            </div>
            <div className="flex-1 flex flex-col justify-between py-base">
              <div>
                <div className="flex justify-between items-start mb-base">
                  <h3 className="font-display text-headline-md text-on-background">Green Valley Campus</h3>
                  <span className="bg-primary-fixed text-on-primary-fixed px-sm py-xs rounded-full font-label-sm text-label-sm uppercase tracking-wider">Admin</span>
                </div>
                <p className="text-on-surface-variant font-body-md line-clamp-2 mb-md">
                  Strategic municipal partner for large-scale waste-to-energy initiatives and regional composting logistics.
                </p>
                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="bg-surface-variant text-on-surface-variant px-base py-xs rounded-lg text-label-sm font-label-sm">Municipal</span>
                  <span className="bg-surface-variant text-on-surface-variant px-base py-xs rounded-lg text-label-sm font-label-sm">Operations</span>
                  <span className="bg-surface-variant text-on-surface-variant px-base py-xs rounded-lg text-label-sm font-label-sm">High Impact</span>
                </div>
              </div>
              <div className="flex gap-sm mt-4">
                <button className="flex-1 bg-primary text-on-primary py-sm rounded-full font-bold font-label-md text-label-md hover:shadow-lg transition-all">Manage</button>
                <button className="flex-1 bg-secondary-container text-on-secondary-container py-sm rounded-full font-bold font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all">View Stats</button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined">chat_bubble</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics / Glass Card */}
        <div className="col-span-12 lg:col-span-4 bg-white/70 backdrop-blur-md rounded-[24px] p-md flex flex-col justify-center relative overflow-hidden border border-outline-variant/30 shadow-sm">
          <div className="relative z-10 p-4">
            <span className="material-symbols-outlined text-primary text-headline-lg mb-base" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
            <h4 className="font-display text-headline-md text-on-background mb-xs">Network Value</h4>
            <p className="text-on-surface-variant text-label-md mb-md">Aggregate impact across connected orgs</p>
            <div className="space-y-md">
              <div>
                <div className="flex justify-between text-label-sm mb-xs">
                  <span>Carbon Offset</span>
                  <span className="text-primary font-bold">84%</span>
                </div>
                <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[84%] transition-all duration-1000"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-label-sm mb-xs">
                  <span>Member Engagement</span>
                  <span className="text-primary font-bold">62%</span>
                </div>
                <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[62%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* EcoCorp Card */}
        <div className="col-span-12 md:col-span-6 bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm group">
          <div className="flex gap-md items-start mb-md">
            <div className="w-16 h-16 rounded-2xl bg-surface-variant flex items-center justify-center flex-shrink-0">
               <span className="material-symbols-outlined text-on-surface-variant">corporate_fare</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-headline-md text-on-background">EcoCorp Solutions</h3>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full text-label-sm font-label-sm">Member</span>
              </div>
              <p className="text-on-surface-variant text-label-md mt-xs">Consultancy & Waste Audit Services</p>
            </div>
          </div>
          <div className="flex gap-base mt-4">
            <button className="flex-1 border border-outline text-on-surface-variant py-sm rounded-full font-bold text-label-md hover:bg-surface-container transition-all">View Stats</button>
            <button className="flex-1 bg-primary text-on-primary py-sm rounded-full font-bold text-label-md flex items-center justify-center gap-xs hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-sm">chat_bubble</span>
              Join Group Chat
            </button>
          </div>
        </div>

        {/* Metro Heights Hub Card */}
        <div className="col-span-12 md:col-span-6 bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm group">
          <div className="flex gap-md items-start mb-md">
            <div className="w-16 h-16 rounded-2xl bg-surface-variant flex items-center justify-center flex-shrink-0">
               <span className="material-symbols-outlined text-on-surface-variant">home</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-headline-md text-on-background">Metro Heights Hub</h3>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-sm py-xs rounded-full text-label-sm font-label-sm">Volunteer</span>
              </div>
              <p className="text-on-surface-variant text-label-md mt-xs">Local Community Composting Network</p>
            </div>
          </div>
          <div className="flex gap-base mt-4">
            <button className="flex-1 border border-outline text-on-surface-variant py-sm rounded-full font-bold text-label-md hover:bg-surface-container transition-all">View Stats</button>
            <button className="flex-1 bg-primary text-on-primary py-sm rounded-full font-bold text-label-md flex items-center justify-center gap-xs hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-sm">chat_bubble</span>
              Join Group Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
