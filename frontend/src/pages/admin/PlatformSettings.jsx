import React from 'react';

export default function PlatformSettings() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="mb-2">
        <h2 className="font-display text-headline-lg font-bold text-primary mb-2">System Settings</h2>
        <p className="font-body-md text-on-surface-variant text-lg">Configure global platform parameters, visual identity, and security protocols.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Brand Asset Management (8 Columns) */}
        <section className="lg:col-span-8 bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl text-[24px]">palette</span>
              <h3 className="font-display text-headline-sm font-bold text-on-surface">Brand Identity</h3>
            </div>
            <button className="text-sm font-bold text-primary hover:underline px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">Edit Assets</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Upload */}
            <div className="md:col-span-1 space-y-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Primary Logo</label>
              <div className="aspect-square bg-surface-container-lowest rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-surface-container-low transition-colors group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-outline-variant/20 p-2 mb-4 group-hover:scale-105 transition-transform">
                   <img className="w-full h-full object-contain opacity-90 group-hover:opacity-100" data-alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaq4GYll4FMOZtufCsoUYRv3fQq9nm4nZsHBKzj5jXqj91ZKT8oQOokLAJVdrZcDDaObn8WEqcxD3L8nuxXJHJ5ylHS--B49G_jBa90kafJGVC2INfohkYAtKx4co0Z39IwHYqLRv_JV3TbcrxSp9rfiGu3tHRhv3f81Uubt1P6UMnyRevpwGTFoS8d7Q-aLbHfgfVImqpUcWlgRykUys9O-FuOKYNwaT46Kj_H7Qf4NCeCBDqkaDZTIkkVy5FKWcWaumt4uimnqA" />
                </div>
                <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">SVG, PNG up to 5MB</span>
              </div>
            </div>
            
            {/* Color Palette */}
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">System Palette</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Palette Item 1 */}
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl flex items-center justify-between hover:shadow-sm transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#012d1d] shadow-inner border border-black/10"></div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Primary</p>
                      <p className="font-mono text-xs text-on-surface-variant uppercase mt-0.5">#012D1D</p>
                    </div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                </div>
                
                {/* Palette Item 2 */}
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl flex items-center justify-between hover:shadow-sm transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c1ecd4] shadow-inner border border-black/10"></div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Secondary</p>
                      <p className="font-mono text-xs text-on-surface-variant uppercase mt-0.5">#C1ECD4</p>
                    </div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                </div>
                
                {/* Palette Item 3 */}
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl flex items-center justify-between hover:shadow-sm transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ba1a1a] shadow-inner border border-black/10"></div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Error</p>
                      <p className="font-mono text-xs text-on-surface-variant uppercase mt-0.5">#BA1A1A</p>
                    </div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                </div>
                
                {/* Palette Item 4 */}
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl flex items-center justify-between hover:shadow-sm transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#f8f9fa] shadow-inner border border-outline-variant/50"></div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Surface</p>
                      <p className="font-mono text-xs text-on-surface-variant uppercase mt-0.5">#F8F9FA</p>
                    </div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-outline-variant/30">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Typography Stack</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Display & Headlines</p>
                <p className="font-display text-xl font-bold text-on-surface">Hanken Grotesk</p>
                <div className="text-3xl font-display font-bold mt-2 opacity-50">Aa</div>
              </div>
              <div className="p-5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Body & Labels</p>
                <p className="text-base font-bold text-on-surface font-sans">Inter / JetBrains Mono</p>
                <div className="text-3xl font-sans mt-2 opacity-50 font-medium">Aa</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Policies (4 Columns) */}
        <section className="lg:col-span-4 bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-error bg-error/10 p-2 rounded-xl text-[24px]">security</span>
            <h3 className="font-display text-headline-sm font-bold text-on-surface">Security</h3>
          </div>
          
          <div className="space-y-6 flex-1">
            {/* 2FA Toggle */}
            <div className="flex items-start justify-between group p-3 hover:bg-surface-container-lowest rounded-xl transition-colors cursor-pointer border border-transparent hover:border-outline-variant/20">
               <div>
                  <h4 className="text-sm font-bold text-on-surface mb-1">Enforce 2FA</h4>
                  <p className="text-xs font-medium text-on-surface-variant">Require two-factor auth for all staff.</p>
               </div>
               <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                </label>
            </div>
            
            {/* Session Timeout */}
            <div className="flex items-start justify-between group p-3 hover:bg-surface-container-lowest rounded-xl transition-colors cursor-pointer border border-transparent hover:border-outline-variant/20">
               <div>
                  <h4 className="text-sm font-bold text-on-surface mb-1">Session Timeout</h4>
                  <p className="text-xs font-medium text-on-surface-variant">Auto-logout after inactivity.</p>
               </div>
               <select className="bg-surface-container border border-outline-variant/30 text-on-surface text-sm font-bold rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none">
                  <option>15 mins</option>
                  <option selected>30 mins</option>
                  <option>1 hour</option>
               </select>
            </div>
            
            {/* Data Retention */}
            <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl mt-4">
               <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Compliance</h4>
               <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                     <span className="font-medium text-on-surface-variant">Log Retention</span>
                     <span className="font-bold text-on-surface">90 Days</span>
                  </div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                     <div className="bg-primary h-full rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                     <span className="font-medium text-on-surface-variant">Data Export</span>
                     <span className="font-bold text-on-surface">Enabled</span>
                  </div>
               </div>
            </div>
          </div>
          
          <button className="w-full mt-6 py-3.5 bg-surface-container-lowest border-2 border-outline-variant/30 text-on-surface font-bold rounded-xl hover:bg-surface-container hover:border-primary/30 transition-all text-sm">
             Advanced Security Settings
          </button>
        </section>
        
        {/* Integrations (Full Width / Grid) */}
        <section className="lg:col-span-12 bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 shadow-sm">
           <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-2 rounded-xl text-[24px]">api</span>
              <h3 className="font-display text-headline-sm font-bold text-on-surface">Active Integrations</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Maps API */}
              <div className="p-5 border border-outline-variant/30 rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4 border border-green-100">
                    <span className="material-symbols-outlined text-[24px]">map</span>
                 </div>
                 <h4 className="text-base font-bold text-on-surface mb-1">Geospatial Routing</h4>
                 <p className="text-sm text-on-surface-variant mb-6 font-medium">Mapbox API for logistics and pickup verification.</p>
                 <div className="mt-auto w-full flex items-center justify-between border-t border-outline-variant/20 pt-4">
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Connected
                    </span>
                    <button className="text-sm font-bold text-on-surface-variant hover:text-primary">Configure</button>
                 </div>
              </div>
              
              {/* Payment Gateway */}
              <div className="p-5 border border-outline-variant/30 rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                 </div>
                 <h4 className="text-base font-bold text-on-surface mb-1">Stripe Escrow</h4>
                 <p className="text-sm text-on-surface-variant mb-6 font-medium">Payment processing for marketplace and grants.</p>
                 <div className="mt-auto w-full flex items-center justify-between border-t border-outline-variant/20 pt-4">
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Connected
                    </span>
                    <button className="text-sm font-bold text-on-surface-variant hover:text-primary">Configure</button>
                 </div>
              </div>
              
              {/* ERP Sync */}
              <div className="p-5 border border-outline-variant/30 border-dashed rounded-2xl flex flex-col items-start justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-center group cursor-pointer">
                 <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant mx-auto mb-4 group-hover:scale-110 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-[24px]">add</span>
                 </div>
                 <h4 className="text-base font-bold text-on-surface mb-1 w-full">Add Integration</h4>
                 <p className="text-sm text-on-surface-variant font-medium w-full">Connect CRM, ERP, or custom webhooks.</p>
              </div>
           </div>
        </section>
      </div>
      
       {/* Save Actions */}
      <div className="flex justify-end gap-4 border-t border-outline-variant/30 pt-6">
         <button className="px-6 py-2.5 rounded-full font-bold text-on-surface-variant hover:bg-surface-container-lowest transition-colors border border-transparent hover:border-outline-variant/30 text-sm">
            Cancel Changes
         </button>
         <button className="px-8 py-2.5 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary/90 active:scale-95 transition-all text-sm flex items-center gap-2">
            Save Settings
         </button>
      </div>
    </div>
  );
}
