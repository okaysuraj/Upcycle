import React, { useState } from 'react';
import Card from '../../components/ui/Card';

export default function PrivacySettings() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [shareImpact, setShareImpact] = useState(true);
  const [activityFeed, setActivityFeed] = useState(false);
  const [dataAnalytics, setDataAnalytics] = useState(true);

  const [marketing, setMarketing] = useState('essential');

  const handleSave = () => {
    // Save logic
    console.log('Saved settings');
  };

  return (
    <div className="p-6 max-w-[1440px] mx-auto min-h-screen">
      {/* Breadcrumbs & Header */}
      <div className="space-y-1 mb-8">
        <nav className="flex items-center gap-2 text-on-surface-variant">
          <span className="font-bold text-xs">Settings</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="font-bold text-xs text-primary">Privacy & Security</span>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Privacy Settings</h2>
            <p className="text-sm text-on-surface-variant max-w-xl mt-1">Configure how the system handles administrative data, audit trails, and data sharing protocols for the Upcycle ecosystem.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-primary text-primary text-sm font-bold rounded-lg hover:bg-primary/5 transition-colors">Discard Changes</button>
            <button onClick={handleSave} className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:opacity-90 transition-opacity">Save Protocol</button>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Profile Visibility Section (5 cols) */}
        <section className="col-span-1 md:col-span-5 bg-white border border-[#c1c8c2] rounded-xl p-6 flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#cce6d0] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <h3 className="font-display text-xl font-bold">Profile Visibility</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={profileVisible} onChange={() => setProfileVisible(!profileVisible)} className="sr-only peer" />
                <div className={`w-11 h-6 rounded-full peer transition-colors ${profileVisible ? 'bg-primary' : 'bg-[#e1e3e4]'}`}></div>
                <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${profileVisible ? 'translate-x-5' : ''}`}></div>
              </label>
            </div>
            <p className="text-sm text-on-surface-variant">Control if your administrator profile and active sessions are visible to other system oversight members.</p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#f3f4f5] rounded-lg">
                <span className="text-xs font-bold">Show Online Status</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-primary bg-white border-[#717973] rounded focus:ring-primary/20" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f3f4f5] rounded-lg">
                <span className="text-xs font-bold">Audit Trail Attribution</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-primary bg-white border-[#717973] rounded focus:ring-primary/20" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-[#0e5138] bg-[#b1f0ce]/30 px-3 py-1.5 rounded-full w-fit">
            <span className="material-symbols-outlined text-[14px]">info</span>
            Public visibility is recommended for Level 4+
          </div>
        </section>

        {/* Data Sharing Section (7 cols) */}
        <section className="col-span-1 md:col-span-7 bg-white border border-[#c1c8c2] rounded-xl p-6 space-y-6 hover:border-primary/30 transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#bdefbf] flex items-center justify-center text-[#24502c]">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h3 className="font-display text-xl font-bold">Data Sharing & Analytics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-[#c1c8c2] rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary">Diagnostic Logs</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-primary bg-white border-[#717973] rounded focus:ring-primary/20" />
              </div>
              <p className="text-xs text-on-surface-variant">Send anonymized system performance data to Upcycle Core developers.</p>
            </div>
            <div className="p-4 border border-[#c1c8c2] rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary">Usage Statistics</span>
                <input type="checkbox" className="w-4 h-4 text-primary bg-white border-[#717973] rounded focus:ring-primary/20" />
              </div>
              <p className="text-xs text-on-surface-variant">Collect data on administrative workflow efficiency to optimize the UI.</p>
            </div>
          </div>
          
          <div className="p-4 bg-[#f3f4f5] rounded-xl border border-dashed border-[#c1c8c2]">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-[20px]">security</span>
              <span className="text-xs font-bold text-primary">Encryption Protocol</span>
            </div>
            <p className="text-xs text-on-surface-variant mb-4">All outgoing data is hashed using SHA-256 and transmitted via TLS 1.3 with Perfect Forward Secrecy.</p>
            <button className="text-primary text-xs font-bold hover:underline flex items-center gap-1">
              Review Technical Documentation
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </button>
          </div>
        </section>

        {/* Marketing Intelligence */}
        <section className="col-span-1 md:col-span-4 bg-white border border-[#c1c8c2] rounded-xl p-6 space-y-4 hover:border-primary/30 transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#006d3e] flex items-center justify-center text-white">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h3 className="font-display text-xl font-bold">Marketing Intelligence</h3>
          </div>
          <p className="text-sm text-on-surface-variant">Receive updates regarding new administrative tools, system patches, and sustainability reports.</p>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 hover:bg-[#f3f4f5] rounded-lg cursor-pointer transition-colors">
              <input type="radio" name="marketing" value="essential" checked={marketing === 'essential'} onChange={() => setMarketing('essential')} className="text-primary focus:ring-primary/20" />
              <div>
                <p className="text-xs font-bold">Essential Only</p>
                <p className="text-[11px] text-on-surface-variant">System-critical updates and security patches.</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 hover:bg-[#f3f4f5] rounded-lg cursor-pointer transition-colors">
              <input type="radio" name="marketing" value="standard" checked={marketing === 'standard'} onChange={() => setMarketing('standard')} className="text-primary focus:ring-primary/20" />
              <div>
                <p className="text-xs font-bold">Standard Updates</p>
                <p className="text-[11px] text-on-surface-variant">New feature highlights and monthly summaries.</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 hover:bg-[#f3f4f5] rounded-lg cursor-pointer transition-colors">
              <input type="radio" name="marketing" value="full" checked={marketing === 'full'} onChange={() => setMarketing('full')} className="text-primary focus:ring-primary/20" />
              <div>
                <p className="text-xs font-bold">Full Insights</p>
                <p className="text-[11px] text-on-surface-variant">Detailed research, beta invites, and reports.</p>
              </div>
            </label>
          </div>
        </section>

        {/* Your Data Rights Section */}
        <section className="col-span-1 md:col-span-8 relative overflow-hidden bg-[#1b4332] rounded-xl p-8 text-white flex flex-col justify-between shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[40px] text-[#9cf6ba]">account_balance</span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight">Your Data Rights</h3>
                <p className="text-base text-[#9cf6ba]/80 mt-1">Full transparency over your administrative footprint.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <h4 className="text-xs font-bold mb-1 text-[#9cf6ba]">Access & Portability</h4>
                <p className="text-xs opacity-80">Download a complete machine-readable archive of all activity logs and profile data associated with this account.</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <h4 className="text-xs font-bold mb-1 text-[#9cf6ba]">Right to Erasure</h4>
                <p className="text-xs opacity-80">Request the permanent removal of your non-audit administrative records from the Upcycle production environment.</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold text-sm rounded-lg shadow-lg hover:bg-[#9cf6ba] transition-colors">
              <span className="material-symbols-outlined">download</span>
              Export Data Archive
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#ffdad6]" style={{ fontVariationSettings: "'FILL' 1" }}>delete_forever</span>
              Delete Profile
            </button>
          </div>
        </section>
        
        {/* Status Summary Section */}
        <section className="col-span-1 md:col-span-12 bg-[#edeeef] border border-[#c1c8c2] rounded-xl p-4 flex flex-wrap items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <span className="text-xs font-bold">Privacy Compliance: GDPR/CCPA Compliant</span>
            </div>
            <div className="h-4 w-px bg-[#c1c8c2]"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#414844]">update</span>
              <span className="text-xs font-bold text-[#414844]">Last security audit: 4 days ago</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-[#414844]">Session ID: <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#c1c8c2]/50 text-[10px]">UP-772-AD-99X</span></span>
            <button className="p-2 hover:bg-[#e7e8e9] rounded-full transition-colors text-[#414844]">
              <span className="material-symbols-outlined text-[20px]">print</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
