import React from 'react';

export default function NotificationSettings() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Header & Breadcrumbs */}
      <div className="space-y-2 mb-2">
        <nav className="flex items-center gap-2 text-on-surface-variant text-sm font-bold">
          <span className="hover:text-primary transition-colors cursor-pointer">Settings</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Notification Preferences</span>
        </nav>
        <h2 className="font-display text-headline-md md:text-headline-lg font-bold text-primary">Notification Settings</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">Configure how the system communicates critical updates, moderation tasks, and marketplace events to your administrative account.</p>
      </div>

      {/* Global Toggle Banner */}
      <div className="bg-white border border-outline-variant/30 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-primary shrink-0 border border-green-100">
            <span className="material-symbols-outlined text-[28px]">notifications_active</span>
          </div>
          <div>
            <h3 className="font-display text-headline-sm font-bold text-primary mb-1">Master Alert Switch</h3>
            <p className="text-sm font-medium text-on-surface-variant">Globally enable or disable all notification channels for this admin profile.</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer shrink-0 self-start md:self-auto">
          <input defaultChecked className="sr-only peer" type="checkbox" />
          <div className="w-14 h-7 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
        </label>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Channel Management (Push, Email, SMS) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-surface-container-lowest px-6 py-4 border-b border-outline-variant/30">
              <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Notification Channels</h4>
            </div>
            <div className="divide-y divide-outline-variant/30">
              {/* Push */}
              <div className="p-6 flex items-start justify-between group hover:bg-surface-container-lowest transition-colors cursor-pointer">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary mt-1 text-[22px]">phonelink_ring</span>
                  <div>
                    <p className="text-base font-bold text-primary mb-1">Desktop & Browser Push</p>
                    <p className="text-sm text-on-surface-variant font-medium">Real-time alerts delivered via browser API while the dashboard is active.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                </label>
              </div>

              {/* Email */}
              <div className="p-6 flex items-start justify-between group hover:bg-surface-container-lowest transition-colors cursor-pointer">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary mt-1 text-[22px]">alternate_email</span>
                  <div>
                    <p className="text-base font-bold text-primary mb-1">Email Digests & Alerts</p>
                    <p className="text-sm text-on-surface-variant font-medium">Summaries and high-priority reports sent to admin@upcycle-system.com.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                </label>
              </div>

              {/* SMS */}
              <div className="p-6 flex items-start justify-between group hover:bg-surface-container-lowest transition-colors cursor-pointer">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary mt-1 text-[22px]">sms</span>
                  <div>
                    <p className="text-base font-bold text-primary mb-1">Critical SMS Notifications</p>
                    <p className="text-sm text-on-surface-variant font-medium">Direct mobile alerts for system failures or emergency security breaches.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                </label>
              </div>
            </div>
          </div>

           {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Platform Activity */}
             <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                   <span className="material-symbols-outlined">analytics</span>
                 </div>
                 <h4 className="font-bold text-on-surface">Platform Activity</h4>
               </div>
               
               <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Daily Summary Reports</span>
                  <input defaultChecked className="w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant/50" type="checkbox" />
               </label>
               <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">New User Registrations</span>
                  <input className="w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant/50" type="checkbox" />
               </label>
               <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">System Milestone Achievements</span>
                  <input defaultChecked className="w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant/50" type="checkbox" />
               </label>
             </div>
             
             {/* Operations & Security */}
             <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-error/10 text-error rounded-lg">
                   <span className="material-symbols-outlined">security</span>
                 </div>
                 <h4 className="font-bold text-on-surface">Operations & Security</h4>
               </div>
               
               <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Critical System Errors</span>
                  <input defaultChecked disabled className="w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant/50 opacity-50 cursor-not-allowed" type="checkbox" />
               </label>
               <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Flagged Marketplace Items</span>
                  <input defaultChecked className="w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant/50" type="checkbox" />
               </label>
               <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Abnormal Usage Patterns</span>
                  <input defaultChecked className="w-5 h-5 text-primary focus:ring-primary rounded border-outline-variant/50" type="checkbox" />
               </label>
             </div>
          </div>
        </div>
        
        {/* Do Not Disturb (DND) & Summary */}
        <div className="lg:col-span-4 space-y-6 flex flex-col">
          <div className="bg-primary-container text-on-primary-container p-6 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-125 duration-700"></div>
            
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="material-symbols-outlined text-[28px]">do_not_disturb_on</span>
              <h4 className="font-display text-headline-sm font-bold">Quiet Hours</h4>
            </div>
            <p className="text-sm font-medium opacity-90 mb-6 relative z-10">Automatically mute non-critical notifications during selected hours.</p>
            
            <div className="space-y-4 relative z-10">
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">Enable Quiet Hours</span>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-white/10"></div>
                  </label>
               </div>
               
               <div className="grid grid-cols-2 gap-3">
                  <div>
                     <label className="block text-xs font-bold opacity-80 mb-1">Start Time</label>
                     <input className="w-full bg-white/20 border border-white/20 rounded-lg p-2 text-white font-bold text-sm focus:ring-2 focus:ring-white/50 outline-none placeholder-white/50" defaultValue="22:00" type="time" />
                  </div>
                  <div>
                     <label className="block text-xs font-bold opacity-80 mb-1">End Time</label>
                     <input className="w-full bg-white/20 border border-white/20 rounded-lg p-2 text-white font-bold text-sm focus:ring-2 focus:ring-white/50 outline-none placeholder-white/50" defaultValue="07:00" type="time" />
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-white border border-outline-variant/30 p-6 rounded-2xl shadow-sm flex-1 flex flex-col justify-between hover:shadow-md transition-shadow">
             <div>
                <h4 className="font-bold text-on-surface mb-2">Notification Summary</h4>
                <p className="text-sm font-medium text-on-surface-variant mb-6">You've received <strong className="text-primary">142</strong> notifications this week.</p>
             </div>
             
             <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                   <span className="text-on-surface-variant font-medium">Marketplace Activity</span>
                   <span className="font-bold text-primary">68%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-[68%] rounded-full"></div>
                </div>
                
                 <div className="flex items-center justify-between text-sm pt-2">
                   <span className="text-on-surface-variant font-medium">System Alerts</span>
                   <span className="font-bold text-error">21%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                   <div className="h-full bg-error w-[21%] rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Save Actions */}
      <div className="flex justify-end gap-4 border-t border-outline-variant/30 pt-6 mt-8">
         <button className="px-6 py-2.5 rounded-full font-bold text-on-surface-variant hover:bg-surface-container-lowest transition-colors border border-transparent hover:border-outline-variant/30">
            Discard Changes
         </button>
         <button className="px-8 py-2.5 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary/90 active:scale-95 transition-all">
            Save Preferences
         </button>
      </div>
    </div>
  );
}
