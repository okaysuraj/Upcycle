import React, { useState } from 'react';

export default function ContractDetails() {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="flex gap-md h-full w-full">
      {/* Sidebar: Key Terms & Status */}
      <div className="w-[380px] flex flex-col gap-md overflow-y-auto pr-2">
        {/* Key Terms Bento Card */}
        <section className="bg-white rounded-[24px] border border-outline-variant/30 p-md space-y-md">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md text-primary">Key Terms</h2>
            <span className="material-symbols-outlined text-secondary-fixed-dim">gavel</span>
          </div>
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant/20">
              <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Total Value</p>
              <p className="font-headline-md text-headline-md text-on-surface mt-1">$42,500.00</p>
            </div>
            <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant/20">
              <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Duration</p>
              <p className="font-headline-md text-headline-md text-on-surface mt-1">24 Months</p>
            </div>
            <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant/20 col-span-2">
              <div className="flex justify-between mb-2">
                <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Recovery Rate Target</p>
                <p className="text-label-sm font-label-sm text-primary">85% Required</p>
              </div>
              <div className="w-full h-3 bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          <div className="space-y-sm">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              <span className="text-body-md font-body-md">Effective: Jan 01, 2024</span>
            </div>
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>update</span>
              <span className="text-body-md font-body-md">Renewal: Dec 31, 2025</span>
            </div>
          </div>
        </section>

        {/* Signing Status Glass Card */}
        <section className="bg-white/70 backdrop-blur-md rounded-[12px] p-md space-y-md border border-outline-variant/30">
          <h2 className="font-headline-md text-headline-md text-primary">Signing Status</h2>
          <div className="space-y-md">
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-success-container text-white rounded-full p-0.5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-label-md font-label-md text-on-surface">Alex Rivera</p>
                <p className="text-label-sm font-label-sm text-outline">Campus Hub Alpha</p>
              </div>
              <p className="text-label-sm font-label-sm text-primary bg-primary-fixed-dim/20 px-2 py-0.5 rounded">Signed</p>
            </div>
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-success-container text-white rounded-full p-0.5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-label-md font-label-md text-on-surface">Dr. Sarah Jenkins</p>
                <p className="text-label-sm font-label-sm text-outline">Sustainability Office</p>
              </div>
              <p className="text-label-sm font-label-sm text-primary bg-primary-fixed-dim/20 px-2 py-0.5 rounded">Signed</p>
            </div>
            <div className="flex items-center gap-md opacity-60">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">person</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-surface-dim text-on-surface rounded-full p-0.5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px]">schedule</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-label-md font-label-md text-on-surface">External Auditor</p>
                <p className="text-label-sm font-label-sm text-outline">Econ-Logistics Ltd</p>
              </div>
              <p className="text-label-sm font-label-sm text-outline bg-surface-variant/50 px-2 py-0.5 rounded">Pending</p>
            </div>
          </div>
        </section>

        {/* Audit Trail */}
        <section className="bg-white rounded-[24px] border border-outline-variant/30 p-md flex-1">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-headline-md text-headline-md text-primary">Audit Trail</h2>
            <button className="text-primary text-label-md hover:underline transition-all">View All</button>
          </div>
          <div className="relative space-y-md before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-on-primary-container text-[14px]">edit_note</span>
              </div>
              <p className="text-label-md font-label-md text-on-surface">Contract Revision v2.4</p>
              <p className="text-label-sm font-label-sm text-outline">Today, 09:45 AM by Alex Rivera</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-on-surface-variant text-[14px]">visibility</span>
              </div>
              <p className="text-label-md font-label-md text-on-surface">Viewed by Compliance</p>
              <p className="text-label-sm font-label-sm text-outline">Yesterday, 14:20 PM</p>
            </div>
          </div>
        </section>
      </div>

      {/* Main Document Viewer */}
      <div className="flex-1 bg-white rounded-[24px] border border-outline-variant/30 shadow-sm flex flex-col overflow-hidden">
        <div className="border-b border-outline-variant/20 p-md flex justify-between items-center bg-surface-ice">
          <div className="flex gap-sm">
            <button className={`px-4 py-2 font-label-md rounded-full transition-colors ${activeTab === 'details' ? 'bg-white shadow-sm font-bold' : 'text-on-surface-variant hover:bg-surface-variant/50'}`} onClick={() => setActiveTab('details')}>Document</button>
            <button className={`px-4 py-2 font-label-md rounded-full transition-colors ${activeTab === 'comments' ? 'bg-white shadow-sm font-bold' : 'text-on-surface-variant hover:bg-surface-variant/50'}`} onClick={() => setActiveTab('comments')}>Comments (3)</button>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">print</span>
            </button>
            <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">download</span>
            </button>
            <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-full hover:shadow-lg transition-all active:scale-95 ml-2">Sign Document</button>
          </div>
        </div>
        
        {/* Document Content */}
        <div className="flex-1 p-lg overflow-y-auto bg-[#F8F9F8]">
          <div className="max-w-3xl mx-auto bg-white p-[60px] shadow-sm border border-outline-variant/20 min-h-full">
            <h1 className="font-display text-[28px] text-center mb-10 pb-4 border-b-2 border-primary/20">Master Services Agreement<br/><span className="text-headline-md text-on-surface-variant">Waste Management & Recovery Logistics</span></h1>
            
            <div className="space-y-8 font-body-md text-on-surface leading-relaxed">
              <p>This Master Services Agreement ("Agreement") is entered into as of January 01, 2024 ("Effective Date") by and between EcoCorp Solutions ("Provider") and Campus Hub Alpha ("Client").</p>
              
              <div>
                <h3 className="font-headline-sm font-bold mb-2">1. Scope of Services</h3>
                <p>Provider agrees to deliver comprehensive waste management, sorting, and recovery logistics across all designated Client facilities. This includes weekly collection, processing of recyclables, and secure disposal of hazardous materials in compliance with local environmental regulations.</p>
              </div>

              <div>
                <h3 className="font-headline-sm font-bold mb-2">2. Performance Targets (KPIs)</h3>
                <p>Provider commits to a minimum material recovery rate of <span className="bg-primary/20 font-bold px-1 rounded cursor-pointer group relative">85% <span className="absolute hidden group-hover:block w-48 bg-inverse-surface text-inverse-on-surface text-xs p-2 rounded -top-10 left-1/2 -translate-x-1/2 z-10">Target increased from 80% (v2.3)</span></span> of total waste volume collected. Failure to meet this target for three consecutive months will result in a 5% fee reduction for the subsequent quarter.</p>
              </div>

              <div>
                <h3 className="font-headline-sm font-bold mb-2">3. Compensation and Payment Terms</h3>
                <p>Client shall pay Provider a fixed monthly fee of $1,770.83, totaling $42,500.00 over the 24-month duration. Payments are due net 30 days from receipt of a valid invoice.</p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-outline-variant/30 flex justify-between">
                <div className="w-64">
                  <p className="font-bold mb-8">Provider: EcoCorp Solutions</p>
                  <div className="border-b border-on-surface mb-2 h-10"></div>
                  <p className="text-label-sm text-outline">Signature / Date</p>
                </div>
                <div className="w-64">
                  <p className="font-bold mb-8">Client: Campus Hub Alpha</p>
                  <div className="border-b border-on-surface mb-2 h-10 flex items-end">
                    <span className="font-signature text-primary text-2xl -mb-1">Alex Rivera</span>
                  </div>
                  <p className="text-label-sm text-outline">Signature / Date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
