import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AiVendorMatchRecommendation() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#556158] mb-1">
            <Link to="/marketplace" className="hover:text-[#00522d]">MARKETPLACE</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00522d] font-bold">AI RECOMMENDATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Intelligent Resource Match</h1>
          <p className="text-sm text-[#556158] mt-1">Based on telemetry, priority level, and campus proximity, we've identified the optimal recipient for your bulk donation.</p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Primary Recommendation (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Match Score & Main Entity */}
          <section className="bg-white rounded-[28px] border border-[#bec9be]/30 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="72" cy="72" fill="transparent" r="60" stroke="#d9e6da" strokeWidth="10"></circle>
                  <circle cx="72" cy="72" fill="transparent" r="60" stroke="#00522d" strokeDasharray="376" strokeDashoffset="7.5" strokeLinecap="round" strokeWidth="10"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-[#00522d] leading-none">98%</span>
                  <span className="text-[10px] font-bold text-[#556158] uppercase tracking-wider mt-0.5">Match</span>
                </div>
              </div>
              <div className="mt-3 px-3 py-1 bg-[#9cf6ba]/40 text-[#00210f] border border-[#9cf6ba] rounded-full text-[10px] font-bold">
                EXCEPTIONAL FIT
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0d1e25]">Department of Biological Sciences</h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#556158] mt-1">
                    <span className="material-symbols-outlined text-sm text-[#00522d]">location_on</span>
                    <span>North Campus Science Block (0.4 miles away)</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] flex items-center justify-center text-[#00522d] shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">biotech</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f4faff] p-3 rounded-2xl border border-[#bec9be]/30">
                  <span className="text-[10px] font-bold text-[#556158] uppercase">Urgency Level</span>
                  <div className="flex items-center gap-1.5 text-[#ba1a1a] font-bold text-xs mt-1">
                    <span className="material-symbols-outlined text-sm">priority_high</span>
                    <span>High (Term Research)</span>
                  </div>
                </div>
                <div className="bg-[#f4faff] p-3 rounded-2xl border border-[#bec9be]/30">
                  <span className="text-[10px] font-bold text-[#556158] uppercase">Transit Overhead</span>
                  <div className="flex items-center gap-1.5 text-[#00522d] font-bold text-xs mt-1">
                    <span className="material-symbols-outlined text-sm">electric_rickshaw</span>
                    <span>$0 (Campus EV Route)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Insight Panel */}
          <section className="bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#bec9be]/20">
              <div className="w-10 h-10 rounded-xl bg-[#00522d] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0d1e25]">AI Logistical Insight</h4>
                <p className="text-xs text-[#556158]">Generated by Upcycle Neural Routing Engine</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <p className="text-[#556158] leading-relaxed">
                  Upcycle Intelligence predicts a <strong className="text-[#00522d]">14.2kg carbon reduction</strong> by choosing this recipient over secondary candidates due to localized delivery infrastructure already scheduled for Tuesday morning.
                </p>
                <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00522d] w-[85%] rounded-full"></div>
                </div>
                <p className="text-[10px] font-bold text-[#00522d]">CO₂ Efficiency: Top 5% of all campus matches</p>
              </div>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#f4faff] border border-[#bec9be]/20">
                  <span className="material-symbols-outlined text-[#2eb872] text-base">check_circle</span>
                  <span className="font-semibold text-[#0d1e25]">Compatible loading dock verified</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#f4faff] border border-[#bec9be]/20">
                  <span className="material-symbols-outlined text-[#2eb872] text-base">check_circle</span>
                  <span className="font-semibold text-[#0d1e25]">Biological storage capacity confirmed</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Action Sidebar (4 Cols) */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#0d1e25] pb-2 border-b border-[#bec9be]/20">Transfer Protocol</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold uppercase text-[#556158]">Scheduled Dispatch</span>
                <p className="font-bold text-[#0d1e25] mt-0.5">Tuesday, Oct 22 • 09:30 AM</p>
              </div>
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <span className="text-[10px] font-bold uppercase text-[#556158]">Handling Team</span>
                <p className="font-bold text-[#0d1e25] mt-0.5">North Quad Eco-Logistics Crew</p>
              </div>
            </div>

            <button 
              type="button"
              onClick={() => {
                alert('Transfer confirmed! Dispatch team notified.');
                navigate('/marketplace');
              }}
              className="w-full py-3.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span>Accept & Confirm Transfer</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
