import React, { useState } from 'react';

export default function CampusReports() {
  const [selectedReport, setSelectedReport] = useState('impact');
  const [exportFormat, setExportFormat] = useState('pdf');

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Governance & ESG Auditing
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Sustainability Reports & Audits</h1>
          <p className="text-sm text-[#556158] mt-1">Generate verified carbon offset certificates and waste diversion logs.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Generator & Parameters (8 Cols) */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm relative overflow-hidden space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1e25] tracking-tight">Select Report Model</h2>
              <p className="text-xs text-[#556158] mt-1">
                Choose a specialized reporting model to aggregate IoT and logistical telemetry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Report Card: Impact */}
              <div 
                className={`p-5 rounded-[24px] cursor-pointer transition-all border group ${
                  selectedReport === 'impact' 
                    ? 'ring-2 ring-[#00522d] bg-[#dff1fb]/40 border-transparent shadow-sm' 
                    : 'border-[#bec9be]/30 bg-white hover:border-[#00522d]/40'
                }`}
                onClick={() => setSelectedReport('impact')}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00522d] flex items-center justify-center text-white mb-3 shadow-sm">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
                <h3 className="text-sm font-bold text-[#0d1e25] mb-1">Impact Report</h3>
                <p className="text-xs text-[#556158]">Detailed carbon and diversion offset metrics.</p>
              </div>
              
              {/* Report Card: Progress */}
              <div 
                className={`p-5 rounded-[24px] cursor-pointer transition-all border group ${
                  selectedReport === 'progress' 
                    ? 'ring-2 ring-[#00522d] bg-[#dff1fb]/40 border-transparent shadow-sm' 
                    : 'border-[#bec9be]/30 bg-white hover:border-[#00522d]/40'
                }`}
                onClick={() => setSelectedReport('progress')}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#24502c] flex items-center justify-center text-white mb-3 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="text-sm font-bold text-[#0d1e25] mb-1">Progress Report</h3>
                <p className="text-xs text-[#556158]">Year-to-date trajectory vs. municipal targets.</p>
              </div>
              
              {/* Report Card: Audit */}
              <div 
                className={`p-5 rounded-[24px] cursor-pointer transition-all border group ${
                  selectedReport === 'audit' 
                    ? 'ring-2 ring-[#00522d] bg-[#dff1fb]/40 border-transparent shadow-sm' 
                    : 'border-[#bec9be]/30 bg-white hover:border-[#00522d]/40'
                }`}
                onClick={() => setSelectedReport('audit')}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2eb872] flex items-center justify-center text-[#00210f] mb-3 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <h3 className="text-sm font-bold text-[#0d1e25] mb-1">Compliance Audit</h3>
                <p className="text-xs text-[#556158]">ISO 14001 and municipal legal audits.</p>
              </div>
            </div>
          </div>
          
          {/* Parameters Panel */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#bec9be]/20">
              <span className="material-symbols-outlined text-[#00522d] text-2xl">tune</span>
              <h2 className="text-xl font-bold text-[#0d1e25]">Report Parameters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" defaultValue="2024-01-01" className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-3 py-2 text-xs font-semibold text-[#0d1e25] outline-none" />
                  <input type="date" defaultValue="2024-09-30" className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-3 py-2 text-xs font-semibold text-[#0d1e25] outline-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Campus Sector</label>
                <select className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#0d1e25] outline-none">
                  <option>All Campus Sectors (Aggregated)</option>
                  <option>North Science Complex (Sector 4)</option>
                  <option>Central Dining & Residence (Sector 1)</option>
                  <option>Engineering Laboratories (Sector 2)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#556158]">Export Format</label>
                <div className="flex gap-2">
                  {['PDF Certificate', 'CSV Raw Telemetry', 'JSON Bundle'].map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setExportFormat(fmt)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        exportFormat === fmt 
                          ? 'bg-[#00522d] text-white shadow-sm' 
                          : 'bg-[#f4faff] border border-[#bec9be]/40 text-[#556158] hover:bg-[#e7f6ff]'
                      }`}
                    >
                      {fmt.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => alert('Generating and exporting report...')}
                  className="w-full py-3 bg-[#00522d] hover:bg-[#003d21] text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Export {selectedReport.toUpperCase()} Report</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Historical Archive (4 Cols) */}
        <section className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#0d1e25]">Archived Exports</h3>
            
            <div className="divide-y divide-[#bec9be]/20 text-xs">
              <div className="py-3 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-[#0d1e25]">Q2-2024-Impact.pdf</h4>
                  <p className="text-[10px] text-[#556158]">Generated July 1, 2024 • 4.2 MB</p>
                </div>
                <button className="p-1.5 rounded-lg bg-[#f4faff] text-[#00522d] hover:bg-[#dff1fb]"><span className="material-symbols-outlined text-base">download</span></button>
              </div>

              <div className="py-3 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-[#0d1e25]">Q1-2024-Audit-Log.csv</h4>
                  <p className="text-[10px] text-[#556158]">Generated April 2, 2024 • 1.8 MB</p>
                </div>
                <button className="p-1.5 rounded-lg bg-[#f4faff] text-[#00522d] hover:bg-[#dff1fb]"><span className="material-symbols-outlined text-base">download</span></button>
              </div>
            </div>
          </div>

          <div className="bg-[#00522d] text-white rounded-[28px] p-6 shadow-sm space-y-2">
            <span className="material-symbols-outlined text-3xl text-[#9cf6ba]">policy</span>
            <h4 className="text-base font-bold tracking-tight">Cryptographic Verification</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              All generated PDFs contain SHA-256 digital watermark signatures for audit integrity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
