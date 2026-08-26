import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacySettings() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [shareImpact, setShareImpact] = useState(true);
  const [activityFeed, setActivityFeed] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Data Governance & Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Privacy & Data Sharing</h2>
          <p className="text-sm text-[#556158] mt-1">Control your profile visibility, audit trail disclosures, and regional benchmarking telemetry.</p>
        </div>
        <button 
          type="button"
          onClick={handleSave} 
          className="px-6 py-2.5 bg-[#00522d] text-white text-xs font-bold rounded-full shadow-md hover:bg-[#003d21] transition-all cursor-pointer"
        >
          {saved ? 'Protocol Saved!' : 'Save Protocol'}
        </button>
      </div>

      {saved && (
        <div className="p-4 rounded-2xl bg-[#9cf6ba] text-[#00210f] font-bold text-xs shadow-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>Privacy preferences updated successfully across all campus nodes.</span>
        </div>
      )}

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Visibility Controls (7 Cols) */}
        <div className="col-span-12 lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-[#bec9be]/20">
            <h3 className="text-lg font-bold text-[#0d1e25]">Visibility Controls</h3>
            <span className="text-[10px] font-bold text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
              SHA-256 Encrypted
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#bec9be]/40 flex items-center justify-center text-[#00522d] shadow-sm">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </div>
                <div>
                  <p className="font-bold text-[#0d1e25]">Campus Leaderboard Visibility</p>
                  <p className="text-[11px] text-[#556158]">Display your profile name and earned points on campus leaderboards.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setProfileVisible(!profileVisible)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                  profileVisible ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  profileVisible ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#bec9be]/40 flex items-center justify-center text-[#00522d] shadow-sm">
                  <span className="material-symbols-outlined text-xl">analytics</span>
                </div>
                <div>
                  <p className="font-bold text-[#0d1e25]">Anonymized Municipal Telemetry</p>
                  <p className="text-[11px] text-[#556158]">Contribute aggregated diversion metrics to municipal benchmarks.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShareImpact(!shareImpact)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                  shareImpact ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  shareImpact ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#bec9be]/40 flex items-center justify-center text-[#00522d] shadow-sm">
                  <span className="material-symbols-outlined text-xl">dynamic_feed</span>
                </div>
                <div>
                  <p className="font-bold text-[#0d1e25]">Public Social Feed Broadcasts</p>
                  <p className="text-[11px] text-[#556158]">Automatically post milestone badges to the campus community feed.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActivityFeed(!activityFeed)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                  activityFeed ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  activityFeed ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Security & Audit Policies (5 Cols) */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#0d1e25] pb-2 border-b border-[#bec9be]/20">Audit Trail Integrity</h3>
            <p className="text-xs text-[#556158] leading-relaxed">
              In compliance with ISO 14001 certification requirements, all waste weight entries and logistics manifests maintain tamper-evident immutable audit trails.
            </p>
            <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 text-xs space-y-1">
              <span className="font-bold text-[#00522d]">Data Retention Period</span>
              <p className="text-[11px] text-[#556158]">Operational telemetry retained for 36 months under standard academic archive license.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#bec9be]/20">
            <Link 
              to="/terms"
              className="text-xs font-bold text-[#00522d] hover:underline flex items-center gap-1"
            >
              <span>View Full Privacy Policy & Compliance Charter</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
