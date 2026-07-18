import React, { useState } from 'react';

export default function CampusReports() {
  const [selectedReport, setSelectedReport] = useState('impact');
  const [exportFormat, setExportFormat] = useState('pdf');

  return (
    <div className="flex flex-col gap-md">
      {/* Top Header */}
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto mb-lg">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md text-primary font-bold">Carbon Offset Performance</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Hero Report Selection (Column 8) */}
        <section className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
          <div className="bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-gutter">Generate Report</h2>
              <p className="text-body-md text-on-surface-variant max-w-2xl mb-lg">Select a report type to begin analyzing your campus sustainability goals and carbon footprint impact across all departments.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Report Card: Impact */}
                <div 
                  className={`p-6 rounded-[24px] cursor-pointer hover:shadow-md transition-all border group active:scale-[0.98] ${selectedReport === 'impact' ? 'ring-2 ring-primary bg-primary-fixed/10 border-transparent' : 'border-outline-variant/30 bg-surface-container-high/40'}`}
                  onClick={() => setSelectedReport('impact')}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  </div>
                  <h3 className="font-label-md text-label-md font-bold mb-1">Impact Report</h3>
                  <p className="text-label-sm text-on-surface-variant">Detailed environmental offset data.</p>
                </div>
                
                {/* Report Card: Progress */}
                <div 
                  className={`p-6 rounded-[24px] cursor-pointer hover:shadow-md transition-all border group active:scale-[0.98] ${selectedReport === 'progress' ? 'ring-2 ring-primary bg-primary-fixed/10 border-transparent' : 'border-outline-variant/30 bg-surface-container-high/40'}`}
                  onClick={() => setSelectedReport('progress')}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <h3 className="font-label-md text-label-md font-bold mb-1">Progress Report</h3>
                  <p className="text-label-sm text-on-surface-variant">Year-to-date goal trajectory.</p>
                </div>
                
                {/* Report Card: Audit */}
                <div 
                  className={`p-6 rounded-[24px] cursor-pointer hover:shadow-md transition-all border group active:scale-[0.98] ${selectedReport === 'audit' ? 'ring-2 ring-primary bg-primary-fixed/10 border-transparent' : 'border-outline-variant/30 bg-surface-container-high/40'}`}
                  onClick={() => setSelectedReport('audit')}
                >
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <h3 className="font-label-md text-label-md font-bold mb-1">Audit Log</h3>
                  <p className="text-label-sm text-on-surface-variant">Compliance and verification data.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Parameters Panel (Bento) */}
          <div className="bg-white rounded-[24px] p-md border border-outline-variant/30 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">tune</span>
              <h2 className="font-headline-md text-headline-md">Report Parameters</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {/* Date Pickers & Selection */}
              <div className="space-y-6">
                <label className="block">
                  <span className="text-label-md font-bold block mb-2">Reporting Period</span>
                  <div className="flex items-center gap-gutter">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">calendar_today</span>
                      <input className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-body-md focus:ring-2 focus:ring-primary" type="date" />
                    </div>
                    <span className="text-on-surface-variant">to</span>
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">calendar_today</span>
                      <input className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-body-md focus:ring-2 focus:ring-primary" type="date" />
                    </div>
                  </div>
                </label>
                <label className="block">
                  <span className="text-label-md font-bold block mb-2">Campus Sector</span>
                  <select className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-body-md focus:ring-2 focus:ring-primary appearance-none">
                    <option>All Sectors</option>
                    <option>Academic Buildings</option>
                    <option>Residential Halls</option>
                    <option>Recreational Facilities</option>
                    <option>Transportation & Logistics</option>
                  </select>
                </label>
              </div>
              
              {/* Export Settings */}
              <div className="space-y-6">
                <div>
                  <span className="text-label-md font-bold block mb-3">Export Format</span>
                  <div className="grid grid-cols-2 gap-gutter">
                    <label 
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-colors ${exportFormat === 'pdf' ? 'border-primary bg-primary-fixed/20' : 'border-outline-variant/30 bg-surface-container-low hover:bg-surface-container'}`}
                      onClick={() => setExportFormat('pdf')}
                    >
                      <input type="radio" name="format" value="pdf" className="hidden" readOnly checked={exportFormat === 'pdf'} />
                      <span className={`material-symbols-outlined ${exportFormat === 'pdf' ? 'text-primary' : 'text-on-surface-variant'}`}>picture_as_pdf</span>
                      <span className="font-label-md text-label-md">PDF Document</span>
                    </label>
                    <label 
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-colors ${exportFormat === 'csv' ? 'border-primary bg-primary-fixed/20' : 'border-outline-variant/30 bg-surface-container-low hover:bg-surface-container'}`}
                      onClick={() => setExportFormat('csv')}
                    >
                      <input type="radio" name="format" value="csv" className="hidden" readOnly checked={exportFormat === 'csv'} />
                      <span className={`material-symbols-outlined ${exportFormat === 'csv' ? 'text-primary' : 'text-on-surface-variant'}`}>csv</span>
                      <span className="font-label-md text-label-md">CSV Spreadsheet</span>
                    </label>
                  </div>
                </div>
                <div className="pt-2">
                  <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:shadow-lg active:scale-95">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <span>Compile & Generate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reports (Column 4) */}
        <aside className="col-span-12 lg:col-span-4 bg-white rounded-[24px] border border-outline-variant/30 shadow-sm flex flex-col min-h-[500px]">
          <div className="p-md border-b border-outline-variant/20 flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md">Recent Reports</h2>
            <span className="text-label-sm font-bold text-primary cursor-pointer hover:underline">View All</span>
          </div>
          <div className="flex-1 overflow-y-auto p-gutter space-y-4">
            {/* Recent Item 1 */}
            <div className="p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-error-container/20 text-error-warm flex items-center justify-center">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-bold line-clamp-1">Q3_Carbon_Audit_2023.pdf</h4>
                    <p className="text-label-sm text-on-surface-variant">Generated 2h ago • 4.2 MB</p>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-surface-variant transition-colors group-hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-2 py-0.5 rounded-full bg-success-container/10 text-primary text-[10px] font-bold uppercase tracking-wider">Completed</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Audit</span>
              </div>
            </div>
            
            {/* Recent Item 2 */}
            <div className="p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">csv</span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-bold line-clamp-1">Campus_Water_Impact_Dataset.csv</h4>
                    <p className="text-label-sm text-on-surface-variant">Generated yesterday • 12.8 MB</p>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-surface-variant transition-colors group-hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-2 py-0.5 rounded-full bg-success-container/10 text-primary text-[10px] font-bold uppercase tracking-wider">Completed</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Impact</span>
              </div>
            </div>
            
            {/* Recent Item 3 */}
            <div className="p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 group opacity-70">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-error-container/20 text-error-warm flex items-center justify-center">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-bold line-clamp-1">Sustainability_Milestones_V2.pdf</h4>
                    <p className="text-label-sm text-on-surface-variant">Generated 3 days ago • 8.1 MB</p>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-surface-variant transition-colors group-hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Archived</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Progress</span>
              </div>
            </div>
          </div>
          
          {/* Visual Quick Insight */}
          <div className="p-md bg-surface-ice m-gutter rounded-[20px] border border-outline-variant/20 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2">Storage Status</p>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-headline-md">72%</span>
                <span className="text-label-sm text-on-surface-variant">1.4 GB / 2 GB</span>
              </div>
              <div className="w-full h-2 bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[72%] rounded-full"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
