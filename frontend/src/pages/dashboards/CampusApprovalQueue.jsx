import React from 'react';

export default function CampusApprovalQueue() {
  return (
    <div className="flex flex-col gap-gutter">
      {/* Breadcrumbs & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <nav className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant mb-2">
            <span>MODERATION</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-primary">CAMPUS APPROVALS</span>
          </nav>
          <h2 className="text-display-sm font-display-sm text-primary">Approval Queue</h2>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-outline text-primary font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter Queue
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Bento Layout Main Content */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Queue List (Main Panel) */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          {/* Queue Card 1 */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-sm transition-shadow group">
            <div className="p-5 border-b border-outline-variant flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">forest</span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-primary">Oakwood Green Campus</h3>
                  <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    Portland, OR • Submitted 4 hours ago
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant rounded-full text-label-sm font-label-sm uppercase tracking-wider">
                High Priority
              </span>
            </div>
            
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Assets Column */}
              <div className="space-y-3">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter">Submitted Assets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant rounded group/item cursor-pointer hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">map</span>
                    <span className="text-body-sm flex-1 truncate">Site_Map_V2.pdf</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] opacity-0 group-hover/item:opacity-100">visibility</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant rounded group/item cursor-pointer hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">security</span>
                    <span className="text-body-sm flex-1 truncate">Safety_Audit_2023.pdf</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] opacity-0 group-hover/item:opacity-100">visibility</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant rounded group/item cursor-pointer hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">eco</span>
                    <span className="text-body-sm flex-1 truncate">Sustainability_Plan.docx</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] opacity-0 group-hover/item:opacity-100">visibility</span>
                  </li>
                </ul>
              </div>
              
              {/* Compliance Column */}
              <div className="space-y-3">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter">Compliance Checklist</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-1">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary/20" />
                    <span className="text-body-sm">Legal entity verified</span>
                  </label>
                  <label className="flex items-center gap-3 p-1">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary/20" />
                    <span className="text-body-sm">Zoning permits valid</span>
                  </label>
                  <label className="flex items-center gap-3 p-1">
                    <input type="checkbox" className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary/20" />
                    <span className="text-body-sm">EPA certification check</span>
                  </label>
                </div>
              </div>
              
              {/* Map View Column */}
              <div className="space-y-3">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter">Location Map</h4>
                <div className="relative h-24 w-full rounded-lg overflow-hidden border border-outline-variant bg-surface-variant">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXNpgFgC-6aX0bU-zn11xvcYBt5dry3NrUhePFYjyfehs9KwhpBSSUp3O12vUSvixIlfLRZCYb9nPPJ_WYZNNaivRMSfk2ZxBvdVrWd2yOzr7s5wYRY7WlrzeJNJFMpmt2038XeYDhAFnMJg7xZ-4s18u7C433VKnF3l3qh99_gfExr2w05dikX9E_7TfIGU1Omr1ginvT9opxf1OdYVVHE-zQ4lVyW-H5WzvwzQbwaIqXxECkZ7XutibR1vVTbWh2ZfCyXQvyjCk')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-5 py-4 bg-surface-container-low flex justify-end gap-3">
              <button className="px-4 py-1.5 text-error font-label-md text-label-md hover:bg-error-container/50 rounded transition-colors">Flag for Review</button>
              <button className="px-6 py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-opacity">Approve Registration</button>
            </div>
          </section>

          {/* Queue Card 2 */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-sm transition-shadow opacity-90 group">
            <div className="p-5 border-b border-outline-variant flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[28px]">water_drop</span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-primary">Harbor Eco-Center</h3>
                  <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    Seattle, WA • Submitted 2 days ago
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm font-label-sm uppercase tracking-wider">
                Standard Review
              </span>
            </div>
            
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter">Submitted Assets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant rounded group/item cursor-pointer hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">assignment</span>
                    <span className="text-body-sm flex-1 truncate">Facility_Blueprint_A1.pdf</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant rounded group/item cursor-pointer hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">shield</span>
                    <span className="text-body-sm flex-1 truncate">Compliance_Doc_Final.pdf</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter">Compliance Checklist</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-1">
                    <input type="checkbox" className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary/20" />
                    <span className="text-body-sm">Legal entity verified</span>
                  </label>
                  <label className="flex items-center gap-3 p-1">
                    <input type="checkbox" className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary/20" />
                    <span className="text-body-sm">Zoning permits valid</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter">Location Map</h4>
                <div className="relative h-24 w-full rounded-lg overflow-hidden border border-outline-variant bg-surface-variant">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpdNJX-iPzhHtpzHGdSacN0HuQhXTZve7xWB4HNmHE5gWGB2D3Mw7j1vFFd0WR86WZC14uErSkp50KIV8D2DGmP-PG1xrywBbRtkyJcNU1kqHCVqGyVJkDaSE2YTn-EFm3567cqcZ1TKxDDhAG9uIy0b4IfSVJWXduTw1YaGfgyFFcJNw6Yy3-d9lTbsOfgjs8eQfU0CwE-f9T8u8FtzEF9W8GkGABzZ8z310V1_Ezd02Ok7r96I1zwTYV2Gl0HS-NL9wPbNS5hPs')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-5 py-4 bg-surface-container-low flex justify-end gap-3">
              <button className="px-4 py-1.5 text-error font-label-md text-label-md hover:bg-error-container/50 rounded transition-colors">Flag</button>
              <button className="px-6 py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-opacity">Approve</button>
            </div>
          </section>
        </div>

        {/* Statistics & Side Info (Right Panel) */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          {/* Summary Stats Card */}
          <div className="bg-primary text-on-primary p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-label-md font-label-md uppercase tracking-widest opacity-80 mb-4">Queue Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-display-sm font-display-sm">14</p>
                  <p className="text-body-sm opacity-70">Pending Approvals</p>
                </div>
                <div>
                  <p className="text-display-sm font-display-sm">03</p>
                  <p className="text-body-sm opacity-70">High Priority</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-body-sm mb-2">
                  <span>Weekly Capacity</span>
                  <span>84%</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full">
                  <div className="bg-[#a5d0b9] h-full rounded-full" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Health Monitoring Card */}
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl">
            <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter mb-4">System Processing Health</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">speed</span>
                  </div>
                  <span className="text-body-md">AI Document Pre-Check</span>
                </div>
                <span className="text-label-md font-label-md text-primary">Active</span>
              </div>
              <div className="h-10 flex items-end gap-1">
                {/* Mock Sparkline */}
                {[40, 60, 55, 80, 70, 90, 95, 40, 60, 55].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-primary' : 'bg-primary/20'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant text-center">Data processing latency: 124ms</p>
            </div>
          </div>
          
          {/* Recent Activity Card */}
          <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl">
            <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-tighter mb-4">Recent Queue Actions</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <div className="text-body-sm">
                  <span className="font-semibold text-primary">Sarah K.</span> approved <span className="underline">Evergreen Hub</span>
                  <p className="text-[11px] text-on-surface-variant mt-1">12 mins ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-error flex-shrink-0"></div>
                <div className="text-body-sm">
                  <span className="font-semibold text-primary">System</span> flagged <span className="underline">Blue Reef Facility</span> for missing safety audit
                  <p className="text-[11px] text-on-surface-variant mt-1">45 mins ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-tertiary flex-shrink-0"></div>
                <div className="text-body-sm">
                  <span className="font-semibold text-primary">Marcus V.</span> updated compliance checklist for <span className="underline">Solaris Park</span>
                  <p className="text-[11px] text-on-surface-variant mt-1">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
