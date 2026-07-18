import React from 'react';

export default function MilestoneTracking() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Header Section */}
      <section className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-3 inline-block">Active Project</span>
          <h1 className="font-display text-headline-lg font-bold text-on-surface">Milestone Tracking: Solar Grid Upcycle</h1>
          <p className="text-body-md text-on-surface-variant max-w-2xl mt-1">Real-time progress of the North Campus solar array decommissioning and component redistribution phase.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container text-primary rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-surface-container-high transition-colors font-bold text-sm shadow-sm">
            <span className="material-symbols-outlined text-[18px]">share</span>
            Share Portal
          </button>
          <button className="bg-primary text-white rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-primary/90 transition-all font-bold text-sm shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[18px]">cloud_download</span>
            Export Status
          </button>
        </div>
      </section>

      {/* Main Grid Layout (Bento Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Timeline (Left Column: 4/12) */}
        <div className="lg:col-span-4 bg-white rounded-[24px] border border-outline-variant/30 p-6 md:p-8 h-fit shadow-sm">
          <h3 className="font-display text-headline-sm font-bold text-on-surface mb-8">Project Journey</h3>
          
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary to-surface-variant rounded-full opacity-50"></div>
            
            {/* Milestone 1: Done */}
            <div className="relative mb-8 group cursor-pointer">
              <div className="absolute -left-[42px] top-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white z-10 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px]">check</span>
              </div>
              <div className="group-hover:translate-x-1 transition-transform">
                <span className="text-xs font-bold text-on-surface-variant mb-1 block">March 12, 2024</span>
                <h4 className="font-bold text-primary mb-1">Initial Site Assessment</h4>
                <p className="text-sm text-on-surface-variant">Feasibility study completed for North Campus Plot B.</p>
              </div>
            </div>
            
            {/* Milestone 2: Done */}
            <div className="relative mb-8 group cursor-pointer">
              <div className="absolute -left-[42px] top-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white z-10 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px]">check</span>
              </div>
              <div className="group-hover:translate-x-1 transition-transform">
                <span className="text-xs font-bold text-on-surface-variant mb-1 block">March 28, 2024</span>
                <h4 className="font-bold text-primary mb-1">Resource Cataloging</h4>
                <p className="text-sm text-on-surface-variant">42 PV panels and 3 inverters inventoried for upcycling.</p>
              </div>
            </div>
            
            {/* Milestone 3: Current */}
            <div className="relative mb-8">
              <div className="absolute -left-[42px] top-0 w-7 h-7 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary z-10 ring-4 ring-primary/20 shadow-sm">
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-ping"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full absolute"></div>
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 shadow-sm">
                <span className="text-xs text-primary font-bold tracking-widest mb-1 block">CURRENT PHASE</span>
                <h4 className="font-bold text-on-surface mb-1">Hardware Installation</h4>
                <p className="text-sm text-on-surface-variant">Re-deploying grid infrastructure to the Alpha Lab site.</p>
              </div>
            </div>
            
            {/* Milestone 4: Pending */}
            <div className="relative mb-8 opacity-60">
              <div className="absolute -left-[42px] top-0 w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant z-10 ring-4 ring-white border border-outline-variant/50">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
              </div>
              <div>
                <span className="text-xs font-bold text-on-surface-variant mb-1 block">Estimated: April 15</span>
                <h4 className="font-bold text-on-surface mb-1">System Calibration</h4>
                <p className="text-sm text-on-surface-variant">Energy efficiency testing and grid handshake.</p>
              </div>
            </div>
            
            {/* Milestone 5: Pending */}
            <div className="relative opacity-60">
              <div className="absolute -left-[42px] top-0 w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant z-10 ring-4 ring-white border border-outline-variant/50">
                <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
              </div>
              <div>
                <span className="text-xs font-bold text-on-surface-variant mb-1 block">Estimated: April 20</span>
                <h4 className="font-bold text-on-surface mb-1">Official Launch</h4>
                <p className="text-sm text-on-surface-variant">Ribbon cutting and campus-wide energy dashboard activation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expansion Panels & Details (Right Column: 8/12) */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          {/* Active Milestone Detailed Panel */}
          <div className="bg-white rounded-[24px] border border-outline-variant/30 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[28px]">construction</span>
                </div>
                <div>
                  <h3 className="font-display text-headline-sm font-bold text-on-surface">Hardware Installation</h3>
                  <p className="text-sm font-medium text-on-surface-variant">Sub-tasks tracking for current phase.</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="font-display text-headline-sm font-bold text-primary block">60%</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase">Completion</span>
              </div>
            </div>
            
            <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden mb-8 shadow-inner">
              <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant/30 transition-all cursor-pointer group">
                <input defaultChecked className="mt-1 w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant" type="checkbox" />
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface line-through opacity-70 group-hover:opacity-100 transition-opacity">Transport panels to Alpha Lab</h4>
                  <p className="text-sm text-on-surface-variant mt-1 line-through opacity-70 group-hover:opacity-100 transition-opacity">Logistics team handled 42 units.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <img className="w-full h-full object-cover rounded-full" data-alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlOCB4VjlN2Vb_v_xw_zZO3qH116TONwnuXXnvm3hp5QHCoGTU9J8sPVYn7ZHb4W-LJhox8B8nlHE5A4n7_QGgSmI_NLOT21tdFg7v4-vAudmZlL7laLC034J8hmgxmgpKrm0Pud_rQkRMRJBOLMUqhYpoa1_Ii1BnY8PiMm7cY4eSvK9JbuZG3m6sol_tfmd1Av7_JGp8dopoFFxQ89lAJ_1gL1wEzJ9Po_69sNlIR2XSLwG0Yq-oNEU9ycoIN_f-JfNRBqkCS3E" />
                </div>
              </label>
              
              <label className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 shadow-sm cursor-pointer group">
                <input className="mt-1 w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant" type="checkbox" />
                <div className="flex-1">
                  <h4 className="font-bold text-primary">Mounting bracket installation</h4>
                  <p className="text-sm text-on-surface-variant mt-1">Requires structural sign-off from engineering.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                  ENG
                </div>
              </label>
              
              <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant/30 transition-all cursor-pointer group">
                <input className="mt-1 w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant" type="checkbox" />
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface">Inverter rewiring</h4>
                  <p className="text-sm text-on-surface-variant mt-1">Scheduled for Thursday morning.</p>
                </div>
              </label>
            </div>
          </div>
          
          {/* Metrics & Impact Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white rounded-[24px] border border-outline-variant/30 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-green-600">recycling</span>
                <h4 className="font-bold text-on-surface">Resource Diverted</h4>
              </div>
              <div>
                <p className="font-display text-display-sm font-bold text-green-700 leading-tight">2.4<span className="text-xl">t</span></p>
                <p className="text-sm font-bold text-on-surface-variant mt-1">Est. electronic & metal waste saved.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-[24px] border border-outline-variant/30 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
               <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">savings</span>
                <h4 className="font-bold text-on-surface">Cost Offset</h4>
              </div>
              <div>
                <p className="font-display text-display-sm font-bold text-primary leading-tight">$18<span className="text-xl">k</span></p>
                <p className="text-sm font-bold text-on-surface-variant mt-1">Saved vs purchasing new grid.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
