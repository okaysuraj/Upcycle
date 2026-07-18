import React from 'react';

export default function RolePermissionsManager() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2">
        <div>
          <h1 className="font-display text-headline-lg font-bold text-primary mb-2">Access Management</h1>
          <p className="text-body-md text-on-surface-variant max-w-2xl text-lg">Configure granular system permissions, manage user roles, and monitor authentication distribution across the corporate hierarchy.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button className="px-5 py-2.5 bg-white border-2 border-primary/20 text-primary font-bold text-sm rounded-full flex items-center gap-2 hover:bg-primary/5 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Audit Log
          </button>
          <button className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-full flex items-center gap-2 hover:bg-primary/90 active:scale-95 transition-all shadow-md">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create New Role
          </button>
        </div>
      </div>

      {/* Role Distribution Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Summary Stats */}
        <div className="lg:col-span-3 bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total Personnel</span>
            <h2 className="font-display text-display-sm md:text-display font-bold text-primary mt-2">1,284</h2>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-on-surface-variant">Active Sessions</span>
              <span className="font-mono text-primary">82</span>
            </div>
            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        {/* Role Cards */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Admin */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center border border-green-100 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">admin_panel_settings</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-surface-container-low px-2 py-1 rounded text-on-surface-variant border border-outline-variant/20">42 Active</span>
            </div>
            <div>
               <h3 className="font-display text-xl font-bold text-primary mb-1">Admin</h3>
               <p className="text-xs text-on-surface-variant font-medium leading-relaxed">Full system override and global policy control.</p>
            </div>
          </div>
          
          {/* Vendor */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">storefront</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-surface-container-low px-2 py-1 rounded text-on-surface-variant border border-outline-variant/20">512 Active</span>
            </div>
            <div>
               <h3 className="font-display text-xl font-bold text-primary mb-1">Vendor</h3>
               <p className="text-xs text-on-surface-variant font-medium leading-relaxed">Inventory management and transaction rights.</p>
            </div>
          </div>
          
          {/* Moderator */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center border border-purple-100 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">fact_check</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-surface-container-low px-2 py-1 rounded text-on-surface-variant border border-outline-variant/20">128 Active</span>
            </div>
            <div>
               <h3 className="font-display text-xl font-bold text-primary mb-1">Mod</h3>
               <p className="text-xs text-on-surface-variant font-medium leading-relaxed">Content review and user dispute resolution.</p>
            </div>
          </div>
          
          {/* Guest */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-surface-container text-on-surface-variant rounded-xl flex items-center justify-center border border-outline-variant/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">person</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-surface-container-low px-2 py-1 rounded text-on-surface-variant border border-outline-variant/20">602 Active</span>
            </div>
            <div>
               <h3 className="font-display text-xl font-bold text-primary mb-1">Guest</h3>
               <p className="text-xs text-on-surface-variant font-medium leading-relaxed">Read-only access to public directories.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Permission Configuration Panel */}
      <div className="bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden shadow-sm flex flex-col">
        <div className="px-6 md:px-8 py-5 md:py-6 bg-surface-container-lowest border-b border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-xl font-bold text-primary">Granular Permissions</h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full uppercase tracking-wider">Editing: Vendor</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/20">
              <span className="material-symbols-outlined text-[16px]">history</span>
              Last changed 2h ago
            </div>
            <button className="text-primary text-sm font-bold hover:underline">Reset to Default</button>
          </div>
        </div>
        
        {/* Configuration Table */}
        <div className="overflow-x-auto">
           <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-lowest border-b border-outline-variant/30 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                 <tr>
                    <th className="px-6 md:px-8 py-4">Module / Resource</th>
                    <th className="px-6 md:px-8 py-4 text-center">View</th>
                    <th className="px-6 md:px-8 py-4 text-center">Create</th>
                    <th className="px-6 md:px-8 py-4 text-center">Edit</th>
                    <th className="px-6 md:px-8 py-4 text-center">Delete</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                 {/* Row 1 */}
                 <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-6 md:px-8 py-4">
                       <p className="font-bold text-on-surface text-sm mb-1">Marketplace Listings</p>
                       <p className="text-xs text-on-surface-variant font-medium">Manage own product inventory and pricing.</p>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                 </tr>
                 
                 {/* Row 2 */}
                 <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-6 md:px-8 py-4">
                       <p className="font-bold text-on-surface text-sm mb-1">Financial Transactions</p>
                       <p className="text-xs text-on-surface-variant font-medium">Access escrow and payout history.</p>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer opacity-50">
                          <input disabled className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer border border-outline-variant/30 cursor-not-allowed"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer opacity-50">
                          <input disabled className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer border border-outline-variant/30 cursor-not-allowed"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer opacity-50">
                          <input disabled className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer border border-outline-variant/30 cursor-not-allowed"></div>
                       </label>
                    </td>
                 </tr>
                 
                 {/* Row 3 */}
                 <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-6 md:px-8 py-4">
                       <p className="font-bold text-on-surface text-sm mb-1">User Profiles (Global)</p>
                       <p className="text-xs text-on-surface-variant font-medium">View other vendor or admin profiles.</p>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                    <td className="px-6 md:px-8 py-4 text-center">
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox" />
                          <div className="w-11 h-6 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/30"></div>
                       </label>
                    </td>
                 </tr>
              </tbody>
           </table>
        </div>
        
        {/* Footer Actions */}
        <div className="px-6 md:px-8 py-5 bg-surface-container-lowest border-t border-outline-variant/30 flex justify-end gap-4 mt-auto">
           <button className="px-6 py-2.5 rounded-full font-bold text-on-surface-variant hover:bg-surface-container border border-transparent hover:border-outline-variant/30 transition-colors text-sm">
              Discard Changes
           </button>
           <button className="px-8 py-2.5 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary/90 active:scale-95 transition-all text-sm">
              Save Policy
           </button>
        </div>
      </div>
    </div>
  );
}
