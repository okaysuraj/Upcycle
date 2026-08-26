import React from 'react';

export default function ComplianceTracking() {
  const certifications = [
    { name: 'ISO 14001:2015', subtitle: 'Environmental Management System', issuer: 'BSI Group', renewal: 'Oct 24, 2024', status: 'Active', statusStyle: 'bg-[#9cf6ba]/40 text-[#00522d]' },
    { name: 'LEED Platinum v4.1', subtitle: 'Campus Center Main Wing', issuer: 'USGBC', renewal: 'Aug 12, 2024', renewalClass: 'text-[#ba1a1a] font-bold', status: 'Renewal Due', statusStyle: 'bg-[#ffdad6] text-[#ba1a1a]' },
    { name: 'TRUE Zero Waste Facility', subtitle: 'Central Logistics & Sorting Hub', issuer: 'GBCI', renewal: 'Jan 05, 2025', status: 'Active', statusStyle: 'bg-[#9cf6ba]/40 text-[#00522d]' },
    { name: 'Energy Star Benchmark 92', subtitle: 'Residence Complex A-D', issuer: 'EPA', renewal: 'Dec 15, 2024', status: 'Active', statusStyle: 'bg-[#9cf6ba]/40 text-[#00522d]' }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Governance & Regulatory Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Compliance Tracking</h2>
          <p className="text-sm text-[#556158] mt-1">Monitoring institutional environmental standards, ISO protocols, and regulatory filings.</p>
        </div>
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => alert('Initiating compliance audit cycle...')}
            className="px-5 py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add_task</span>
            <span>Request ESG Audit</span>
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-[28px] border border-[#bec9be]/30 p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#dff1fb] flex items-center justify-center text-[#00522d] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#556158] uppercase tracking-wider">Active Certifications</p>
            <h3 className="text-3xl font-bold text-[#00522d] mt-0.5">12</h3>
            <p className="text-[11px] font-bold text-[#2eb872] mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> 2 Renewed this quarter
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[28px] border border-[#ffdad6] bg-[#fff8f8] p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>event_busy</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#556158] uppercase tracking-wider">Audits Due Soon</p>
            <h3 className="text-3xl font-bold text-[#ba1a1a] mt-0.5">01</h3>
            <p className="text-[11px] font-bold text-[#ba1a1a] mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">priority_high</span> Action required in 14 days
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[28px] border border-[#bec9be]/30 p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-[#dff1fb] flex items-center justify-center text-[#00522d] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>folder_zip</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#556158] uppercase tracking-wider">Archived Evidence</p>
            <h3 className="text-3xl font-bold text-[#0d1e25] mt-0.5">84 Docs</h3>
            <p className="text-[11px] font-semibold text-[#556158] mt-1">4.2 GB encrypted audit trail</p>
          </div>
        </div>
      </div>

      {/* Certifications Table (8 Cols) & Timeline (4 Cols) */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#bec9be]/20 flex justify-between items-center bg-[#f4faff]">
            <h3 className="text-lg font-bold text-[#0d1e25] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00522d]">workspace_premium</span>
              Active Standards & Accreditations
            </h3>
            <span className="text-xs text-[#556158] font-bold">4 Verified Entities</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#f4faff]/50 text-[#556158] font-bold border-b border-[#bec9be]/20">
                  <th className="px-6 py-3.5 text-left uppercase">Standard</th>
                  <th className="px-6 py-3.5 text-left uppercase">Auditing Body</th>
                  <th className="px-6 py-3.5 text-left uppercase">Renewal Target</th>
                  <th className="px-6 py-3.5 text-left uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bec9be]/20">
                {certifications.map((cert, i) => (
                  <tr key={i} className="hover:bg-[#f4faff] transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-sm text-[#0d1e25]">{cert.name}</p>
                      <p className="text-[11px] text-[#556158] mt-0.5">{cert.subtitle}</p>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#556158]">{cert.issuer}</td>
                    <td className={`px-6 py-4 font-semibold ${cert.renewalClass || 'text-[#0d1e25]'}`}>{cert.renewal}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 ${cert.statusStyle} rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                        {cert.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-[#0d1e25] pb-3 border-b border-[#bec9be]/20">Audit Trail History</h3>
          
          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00522d] mt-1 shrink-0"></span>
              <div>
                <h4 className="font-bold text-[#0d1e25]">LEED v4.1 Audit Scheduled</h4>
                <p className="text-[11px] text-[#556158] mt-0.5">External review scheduled with USGBC auditors for August 2024.</p>
                <span className="text-[10px] text-[#556158]">2 days ago</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2eb872] mt-1 shrink-0"></span>
              <div>
                <h4 className="font-bold text-[#0d1e25]">Q2 Waste Diversion Evidence Logged</h4>
                <p className="text-[11px] text-[#556158] mt-0.5">184.2 metric tons verified by GBCI smart bin records.</p>
                <span className="text-[10px] text-[#556158]">1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
