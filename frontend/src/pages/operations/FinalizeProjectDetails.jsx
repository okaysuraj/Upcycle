import React, { useState } from 'react';

export default function FinalizeProjectDetails() {
  const [priority, setPriority] = useState('standard');

  return (
    <div className="flex flex-col gap-md pb-12">
      <header className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary">New Sustainability Project</h2>
      </header>

      {/* Layout Grid: 8:4 Bento Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
        {/* Left Column: Project Details (8 Cols) */}
        <div className="lg:col-span-8 space-y-md">
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-xl shadow-sm">
            <div className="flex items-center gap-sm mb-lg">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <div>
                <p className="font-label-sm uppercase tracking-widest text-outline font-bold">Section 01</p>
                <h3 className="font-headline-md font-bold text-on-surface">Core Project Identity</h3>
              </div>
            </div>
            
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
              <div className="sm:col-span-2">
                <label className="block font-label-md font-bold text-on-surface-variant mb-xs">Project Name</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-3 px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" placeholder="e.g. Solar Initiative Phase II" type="text" />
              </div>
              
              <div className="sm:col-span-1">
                <label className="block font-label-md font-bold text-on-surface-variant mb-xs">Project Lead</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-3 px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md cursor-pointer">
                    <option>Dr. Elena Rodriguez</option>
                    <option>Marcus Chen</option>
                    <option>Sarah Jenkins</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                </div>
              </div>
              
              <div className="sm:col-span-1">
                <label className="block font-label-md font-bold text-on-surface-variant mb-xs">Target Launch Date</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-3 px-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" type="date" />
              </div>
              
              <div className="sm:col-span-1">
                <label className="block font-label-md font-bold text-on-surface-variant mb-xs">Priority Status</label>
                <div className="flex gap-sm">
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="priority" value="critical" checked={priority === 'critical'} onChange={() => setPriority('critical')} className="sr-only peer" />
                    <div className="text-center py-2.5 rounded-xl border border-outline-variant/50 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all font-label-md font-bold">Critical</div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="priority" value="standard" checked={priority === 'standard'} onChange={() => setPriority('standard')} className="sr-only peer" />
                    <div className="text-center py-2.5 rounded-xl border border-outline-variant/50 peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all font-label-md font-bold">Standard</div>
                  </label>
                </div>
              </div>
              
              <div className="sm:col-span-1">
                <label className="block font-label-md font-bold text-on-surface-variant mb-xs">Budget Allocation</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">$</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-3 pl-8 pr-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" placeholder="50,000" type="number" />
                </div>
              </div>
            </form>
          </div>

          {/* Additional details section (example) */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-xl shadow-sm mt-md">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md font-bold text-on-surface">Supporting Documents</h3>
                <button className="text-primary font-bold hover:underline">Upload Files</button>
             </div>
             <div className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-lowest transition-colors">
                <span className="material-symbols-outlined text-4xl text-outline mb-2">cloud_upload</span>
                <p className="font-bold text-on-surface">Drag and drop files here</p>
                <p className="text-sm text-on-surface-variant mt-1">PDF, DOCX, or XLSX up to 50MB</p>
             </div>
          </div>
        </div>

        {/* Right Column: Impact Preview & Actions */}
        <div className="lg:col-span-4 flex flex-col gap-md">
          {/* Impact Preview */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-[24px] p-xl relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h4 className="font-headline-md font-bold text-primary mb-md">Projected Campus Impact</h4>
              <p className="text-on-surface-variant font-body-md mb-lg">Based on your current inputs, this project is estimated to contribute significantly to the university's 2030 Net-Zero strategy.</p>
              
              <div className="grid grid-cols-2 gap-lg mb-6">
                <div className="text-center bg-white p-4 rounded-xl border border-outline-variant/30 shadow-sm">
                  <p className="text-display-sm font-display font-bold text-primary">-12<span className="text-headline-md">%</span></p>
                  <p className="text-label-sm font-bold text-outline uppercase mt-1">Carbon Footprint</p>
                </div>
                <div className="text-center bg-white p-4 rounded-xl border border-outline-variant/30 shadow-sm">
                  <p className="text-display-sm font-display font-bold text-tertiary">450<span className="text-headline-md">MW</span></p>
                  <p className="text-label-sm font-bold text-outline uppercase mt-1">Clean Energy</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          {/* Action Card */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-xl shadow-sm">
            <h4 className="font-headline-sm font-bold text-on-surface mb-2">Ready to submit?</h4>
            <p className="text-body-md text-on-surface-variant mb-6">The project proposal will be routed to the sustainability committee for review.</p>
            <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2 mb-3">
              <span className="material-symbols-outlined">send</span>
              Submit Proposal
            </button>
            <button className="w-full border border-outline-variant/50 text-on-surface py-3 rounded-full font-bold hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">save</span>
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
