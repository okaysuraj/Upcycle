import React, { useState } from 'react';

export default function CreateOrganization() {
  const [orgType, setOrgType] = useState('Campus');
  const [capacity, setCapacity] = useState(1250);

  return (
    <div className="flex flex-col gap-md">
      <div className="mb-base">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Create Organization</h2>
        <p className="font-body-md text-body-md text-secondary">Establish your hub for professional environmental management.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Form */}
        <div className="lg:col-span-8 flex flex-col gap-md">
          <div className="bg-white p-md rounded-2xl border border-outline-variant/30 shadow-sm space-y-lg">
            {/* Org Name */}
            <div className="space-y-base">
              <label className="font-label-md text-label-md text-on-surface-variant block">Organization Name</label>
              <input className="w-full bg-surface-ice border border-outline-variant/50 rounded-xl px-md py-sm focus:border-primary focus:ring-primary/20 transition-all font-body-md" placeholder="e.g. Green Valley Municipal Waste Hub" type="text" />
            </div>

            {/* Org Type Grid */}
            <div className="space-y-base">
              <label className="font-label-md text-label-md text-on-surface-variant block">Organization Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
                {['Campus', 'Office', 'Residential'].map(type => (
                  <button 
                    key={type}
                    className={`p-md rounded-2xl border transition-all flex flex-col items-center gap-xs text-center ${orgType === type ? 'border-primary bg-primary-fixed/20' : 'border-outline-variant/30 bg-surface hover:border-primary/50'}`}
                    onClick={() => setOrgType(type)}
                  >
                    <span className="material-symbols-outlined text-primary text-4xl mb-xs">
                      {type === 'Campus' ? 'school' : type === 'Office' ? 'business' : 'house'}
                    </span>
                    <span className="font-label-md text-label-md font-bold">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location & Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-start">
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant block">Location</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
                  <input className="w-full bg-surface-ice border border-outline-variant/50 rounded-xl px-base py-sm pl-10 focus:border-primary focus:ring-primary/20 transition-all font-body-md" placeholder="Enter physical address..." type="text" />
                </div>
                <p className="text-[11px] text-secondary/70 italic mt-xs px-xs">Accurate location helps optimize collection logistics.</p>
              </div>
              {/* Map Preview */}
              <div className="h-32 rounded-2xl overflow-hidden border border-outline-variant/30 relative bg-surface-container flex items-center justify-center">
                 <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">map</span>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/50 to-transparent"></div>
                <div className="absolute bottom-2 right-2 px-sm py-1 bg-on-background/80 text-white rounded-full text-[10px] font-bold backdrop-blur-sm">PREVIEW</div>
              </div>
            </div>

            {/* Capacity Slider */}
            <div className="space-y-md">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant">Expected Capacity</label>
                <span className="font-bold text-primary bg-primary-fixed/30 px-sm py-1 rounded-full text-label-md">{capacity} Units</span>
              </div>
              <div className="relative py-2">
                <input 
                  className="w-full h-3 bg-secondary-container rounded-full appearance-none cursor-pointer" 
                  max="10000" min="100" step="100" type="range" 
                  value={capacity} onChange={e => setCapacity(e.target.value)}
                />
              </div>
              <div className="flex justify-between text-[10px] text-secondary font-bold uppercase tracking-wider">
                <span>Small Hub</span>
                <span>Regional Center</span>
                <span>Industrial Facility</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-primary text-on-primary py-md rounded-full font-bold text-body-lg hover:bg-primary-container hover:text-on-primary-container hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-sm">
              <span>Create Organization</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column: Info Panel */}
        <aside className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-white/70 backdrop-blur-md p-md rounded-2xl flex flex-col gap-sm relative overflow-hidden border border-outline-variant/30 shadow-sm">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed mb-xs">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background">Admin Console</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Once created, you will gain access to the Upcycle administrative suite, allowing for full oversight of your ecosystem.</p>
            <ul className="space-y-sm mt-md">
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-primary-container text-xl">check_circle</span>
                <span className="text-label-md text-secondary">Real-time emission tracking and impact reporting dashboard.</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-primary-container text-xl">check_circle</span>
                <span className="text-label-md text-secondary">Member management and dynamic role assignment.</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-primary-container text-xl">check_circle</span>
                <span className="text-label-md text-secondary">Custom logistics scheduling for local waste pick-ups.</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-primary-container text-xl">check_circle</span>
                <span className="text-label-md text-secondary">B2B Marketplace access for recycled raw materials.</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
