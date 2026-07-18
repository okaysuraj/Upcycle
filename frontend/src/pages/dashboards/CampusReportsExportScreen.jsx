import React, { useState } from 'react';

export default function CampusReportsExportScreen() {
  const [reportType, setReportType] = useState('monthly');
  const [exportFormat, setExportFormat] = useState('pdf');
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setDownloadReady(false);
    
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setDownloadReady(true);
      
      setTimeout(() => {
        setDownloadReady(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-md">
      {/* Header Section */}
      <div className="mb-xl">
        <h2 className="font-display text-display text-primary mb-2">Sustainability Reports</h2>
        <p className="font-body-lg text-body-lg text-secondary">Configure and export detailed environmental impact statements for campus operations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Report Configuration Column */}
        <div className="col-span-1 lg:col-span-7 space-y-gutter">
          {/* Report Type Selection */}
          <section className="bg-white p-md rounded-[24px] border border-outline-variant/30 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-container/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">category</span>
              </div>
              <h3 className="font-headline-md text-headline-md">1. Select Report Type</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label 
                className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-colors group ${reportType === 'monthly' ? 'bg-surface-container-low border-primary' : 'border-outline-variant/40 hover:bg-surface-container-low'}`}
                onClick={() => setReportType('monthly')}
              >
                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reportType === 'monthly' ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                  {reportType === 'monthly' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">eco</span>
                <span className="font-label-md text-label-md text-on-surface mb-1">Monthly Impact</span>
                <span className="text-xs text-secondary leading-tight">Carbon offset & waste reduction metrics.</span>
              </label>
              
              <label 
                className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-colors group ${reportType === 'annual' ? 'bg-surface-container-low border-primary' : 'border-outline-variant/40 hover:bg-surface-container-low'}`}
                onClick={() => setReportType('annual')}
              >
                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reportType === 'annual' ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                  {reportType === 'annual' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">trending_up</span>
                <span className="font-label-md text-label-md text-on-surface mb-1">Annual Progress</span>
                <span className="text-xs text-secondary leading-tight">Year-over-year sustainability benchmarking.</span>
              </label>

              <label 
                className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-colors group ${reportType === 'audit' ? 'bg-surface-container-low border-primary' : 'border-outline-variant/40 hover:bg-surface-container-low'}`}
                onClick={() => setReportType('audit')}
              >
                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reportType === 'audit' ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                  {reportType === 'audit' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">location_city</span>
                <span className="font-label-md text-label-md text-on-surface mb-1">Infrastruct. Audit</span>
                <span className="text-xs text-secondary leading-tight">Resource efficiency per campus building.</span>
              </label>
            </div>
          </section>

          {/* Configuration Options */}
          <section className="bg-white/70 backdrop-blur-md p-md rounded-[24px] shadow-sm relative overflow-hidden border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary-container/30 p-2 rounded-lg">
                <span className="material-symbols-outlined text-secondary">date_range</span>
              </div>
              <h3 className="font-headline-md text-headline-md">2. Parameters & Format</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-label-md text-label-md mb-3 text-on-surface">Date Range</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white p-2 border border-outline-variant/30 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">event</span>
                    <input className="bg-transparent border-none text-body-md w-full focus:ring-0 p-0 outline-none" type="date" defaultValue="2023-11-01" />
                  </div>
                  <span className="text-secondary text-xs font-bold">—</span>
                  <div className="flex-1 bg-white p-2 border border-outline-variant/30 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">event</span>
                    <input className="bg-transparent border-none text-body-md w-full focus:ring-0 p-0 outline-none" type="date" defaultValue="2023-11-30" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-label-md text-label-md mb-3 text-on-surface">Output Format</p>
                <div className="flex gap-2">
                  <button 
                    className={`flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${exportFormat === 'pdf' ? 'border-2 border-primary bg-primary/5 text-primary' : 'border border-outline-variant/40 hover:bg-white text-secondary'}`}
                    onClick={() => setExportFormat('pdf')}
                  >
                    <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                    <span className="font-label-sm text-label-sm mt-1">PDF</span>
                  </button>
                  <button 
                    className={`flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${exportFormat === 'csv' ? 'border-2 border-primary bg-primary/5 text-primary' : 'border border-outline-variant/40 hover:bg-white text-secondary'}`}
                    onClick={() => setExportFormat('csv')}
                  >
                    <span className="material-symbols-outlined text-xl">description</span>
                    <span className="font-label-sm text-label-sm mt-1">CSV</span>
                  </button>
                  <button 
                    className={`flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${exportFormat === 'xls' ? 'border-2 border-primary bg-primary/5 text-primary' : 'border border-outline-variant/40 hover:bg-white text-secondary'}`}
                    onClick={() => setExportFormat('xls')}
                  >
                    <span className="material-symbols-outlined text-xl">table_chart</span>
                    <span className="font-label-sm text-label-sm mt-1">XLS</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="mt-8 pt-6 border-t border-outline-variant/20">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-md text-label-md">Ready for export</span>
                <span className="font-label-md text-label-md text-primary">100% Data Validated</span>
              </div>
              <div className="w-full h-3 bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-success-container w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>

            <button 
              className={`mt-8 w-full py-4 rounded-full font-label-md text-lg flex items-center justify-center gap-3 shadow-lg transition-all ${isGenerating ? 'bg-secondary text-white cursor-not-allowed' : downloadReady ? 'bg-success-container text-white' : 'bg-primary text-on-primary hover:scale-[1.02] active:scale-95'}`}
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Processing Data...
                </>
              ) : downloadReady ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Download Ready
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">download</span>
                  Generate & Download Report
                </>
              )}
            </button>
          </section>
        </div>

        {/* History & Insights Column */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-gutter">
          {/* Report History */}
          <section className="bg-white p-md rounded-[24px] border border-outline-variant/30 shadow-sm flex-1 flex flex-col max-h-[600px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-container p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">history</span>
                </div>
                <h3 className="font-headline-md text-headline-md">Report History</h3>
              </div>
              <button className="text-primary font-label-md hover:underline">View All</button>
            </div>
            <div className="space-y-3 overflow-y-auto pr-2">
              <div className="p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-error-warm text-xl">picture_as_pdf</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-label-md">Oct_2023_Monthly_Impact.pdf</h4>
                  <p className="text-xs text-secondary italic">Nov 02, 2023 • 2.4 MB</p>
                </div>
                <button className="text-secondary hover:text-primary p-2">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-success-container/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-success-container text-xl">table_chart</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-label-md">Q3_Infrastructure_Metrics.xls</h4>
                  <p className="text-xs text-secondary italic">Oct 15, 2023 • 840 KB</p>
                </div>
                <button className="text-secondary hover:text-primary p-2">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-error-warm text-xl">picture_as_pdf</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-label-md">Annual_Goal_Projection_2024.pdf</h4>
                  <p className="text-xs text-secondary italic">Sept 28, 2023 • 5.1 MB</p>
                </div>
                <button className="text-secondary hover:text-primary p-2">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-colors flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-xl">description</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-label-md">Waste_Vendor_Audit_Log.csv</h4>
                  <p className="text-xs text-secondary italic">Aug 14, 2023 • 120 KB</p>
                </div>
                <button className="text-secondary hover:text-primary p-2">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </section>

          {/* Statistics Hook */}
          <section className="bg-white/70 backdrop-blur-md p-md rounded-[24px] relative overflow-hidden bg-primary h-48 flex items-center border border-outline-variant/30">
            <div className="absolute inset-0 z-0 opacity-20 bg-primary-fixed"></div>
            <div className="relative z-10 text-white">
              <p className="font-label-md text-label-md uppercase tracking-wider opacity-90 mb-2">YTD Carbon Offset</p>
              <h4 className="font-display text-4xl font-bold">1,284 Tons</h4>
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-on-primary-container text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">+12%</span>
                <span className="text-xs opacity-90">Improvement from last report</span>
              </div>
            </div>
            <div className="ml-auto relative z-10">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
