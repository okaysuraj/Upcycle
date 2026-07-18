import React, { useState } from 'react';

export default function ExportPdfReport() {
  const [selectedModules, setSelectedModules] = useState({
    waste: true,
    energy: true,
    water: true,
    carbon: false,
    community: true,
    fiscal: false,
  });

  const toggleModule = (module) => {
    setSelectedModules(prev => ({ ...prev, [module]: !prev[module] }));
  };

  const selectAll = () => {
    setSelectedModules({
      waste: true,
      energy: true,
      water: true,
      carbon: true,
      community: true,
      fiscal: true,
    });
  };

  return (
    <div className="flex flex-col gap-md pb-12">
      <header className="mb-lg">
        <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
          <span className="font-label-md">Reports</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="font-label-md text-primary font-bold">Export PDF Report</span>
        </nav>
        <h2 className="font-display text-headline-lg font-bold text-on-surface">Report Configuration</h2>
        <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl">Tailor your campus sustainability report by selecting specific modules, date ranges, and export formats for a professional stakeholder presentation.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Settings Panel */}
        <section className="lg:col-span-7 flex flex-col gap-gutter">
          {/* Date Range Picker Card */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-md shadow-sm">
            <div className="flex items-center gap-3 mb-gutter">
              <div className="bg-secondary-container p-2 rounded-xl text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <h3 className="font-headline-md font-bold text-on-surface">Reporting Period</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="flex flex-col gap-2">
                <label className="font-label-md font-bold text-on-surface-variant ml-1">Start Date</label>
                <div className="relative">
                  <input className="w-full h-12 bg-surface-container-lowest rounded-xl border border-outline-variant/30 px-4 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="date" defaultValue="2023-01-01" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md font-bold text-on-surface-variant ml-1">End Date</label>
                <div className="relative">
                  <input className="w-full h-12 bg-surface-container-lowest rounded-xl border border-outline-variant/30 px-4 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="date" defaultValue="2023-12-31" />
                </div>
              </div>
            </div>
          </div>

          {/* Modules Selection Card (Icon Grid) */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-md shadow-sm">
            <div className="flex items-center justify-between mb-gutter">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-container p-2 rounded-xl text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">view_module</span>
                </div>
                <h3 className="font-headline-md font-bold text-on-surface">Modules to Include</h3>
              </div>
              <button onClick={selectAll} className="text-primary font-bold font-label-md hover:underline">Select All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Module Items */}
              {[
                { id: 'waste', icon: 'delete_outline', label: 'Waste' },
                { id: 'energy', icon: 'bolt', label: 'Energy' },
                { id: 'water', icon: 'opacity', label: 'Water' },
                { id: 'carbon', icon: 'co2', label: 'Carbon' },
                { id: 'community', icon: 'groups', label: 'Community' },
                { id: 'fiscal', icon: 'payments', label: 'Fiscal' },
              ].map((mod) => (
                <div key={mod.id} onClick={() => toggleModule(mod.id)} className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all group ${selectedModules[mod.id] ? 'bg-primary/5 border-primary shadow-sm' : 'bg-surface-container-lowest border-outline-variant/30 hover:border-primary/50'}`}>
                  <div className={`p-3 rounded-xl transition-colors flex items-center justify-center ${selectedModules[mod.id] ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant group-hover:bg-primary-container/50'}`}>
                    <span className="material-symbols-outlined">{mod.icon}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className={`font-label-md font-bold ${selectedModules[mod.id] ? 'text-primary' : 'text-on-surface'}`}>{mod.label}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${selectedModules[mod.id] ? 'bg-primary border-primary text-white' : 'border-outline-variant'}`}>
                    {selectedModules[mod.id] && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export Format Card */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-md shadow-sm">
            <div className="flex items-center gap-3 mb-gutter">
              <div className="bg-secondary-container p-2 rounded-xl text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">file_present</span>
              </div>
              <h3 className="font-headline-md font-bold text-on-surface">File Format</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-lg">
              <label className="flex items-start gap-3 cursor-pointer group flex-1 p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
                <input defaultChecked className="mt-1 w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="format" type="radio" value="pdf" />
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Portable Document Format (PDF)</span>
                  <span className="text-xs text-on-surface-variant mt-1">Best for presentations and formal archiving.</span>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group flex-1 p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
                <input className="mt-1 w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="format" type="radio" value="excel" />
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Excel Worksheet (XLSX)</span>
                  <span className="text-xs text-on-surface-variant mt-1">Recommended for data manipulation and pivot tables.</span>
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* Right Column: Preview & Action (5 Columns) */}
        <section className="lg:col-span-5 flex flex-col gap-gutter">
          {/* Live Preview Card */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-[24px] p-md flex flex-col flex-1 shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="font-headline-sm font-bold text-on-surface">Report Preview</h3>
              <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-xs font-bold">Auto-updates</span>
            </div>
            
            {/* Mock Document */}
            <div className="bg-white rounded-xl shadow-md border border-outline-variant/20 flex-1 relative z-10 p-6 flex flex-col gap-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg leading-tight">EcoCampus Hub</h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Sustainability Report</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-on-surface text-sm">2023 Annual</p>
                  <p className="text-[10px] text-on-surface-variant">Confidential</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 bg-surface-container rounded-full w-3/4"></div>
                <div className="h-4 bg-surface-container rounded-full w-full"></div>
                <div className="h-4 bg-surface-container rounded-full w-5/6"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="h-24 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/40 text-4xl">bar_chart</span>
                </div>
                <div className="h-24 bg-tertiary/5 border border-tertiary/20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary/40 text-4xl">pie_chart</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-outline-variant/20 flex justify-between text-[10px] text-on-surface-variant">
                <span>Generated automatically by Upcycle Core</span>
                <span>Page 1 of 12</span>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent z-0"></div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-label-md flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined">download</span>
            Generate & Download
          </button>
        </section>
      </div>
    </div>
  );
}
