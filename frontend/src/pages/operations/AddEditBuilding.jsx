import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddEditBuilding() {
  const navigate = useNavigate();
  const [zones, setZones] = useState([
    { id: 1, name: 'HVAC Control Zone 01', location: 'Level 1 - Labs & Cleanrooms', icon: 'bolt', color: 'bg-blue-100 text-blue-700' },
    { id: 2, name: 'Smart Lighting Grid A', location: 'Levels 1-4 - Common Areas', icon: 'lightbulb', color: 'bg-amber-100 text-amber-700' },
    { id: 3, name: 'Hydraulic Pressure Node', location: 'Basement - Main Line Inlet', icon: 'opacity', color: 'bg-cyan-100 text-cyan-700' }
  ]);

  return (
    <div className="flex flex-col gap-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-md">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary font-label-md">
            <span className="material-symbols-outlined text-[18px]">domain</span>
            <span className="uppercase tracking-widest">Campus Infrastructure</span>
          </div>
          <h1 className="font-display text-display text-primary">Building Configuration</h1>
          <p className="text-on-surface-variant font-body-md max-w-xl">
            Configure structural details, occupancy limits, and internal zoning for high-efficiency resource allocation and sustainability tracking.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-full border border-outline text-on-surface-variant font-label-md hover:bg-surface-variant transition-all"
          >
            Discard Changes
          </button>
          <button className="px-8 py-2 rounded-full bg-primary text-on-primary font-label-md shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">save</span>
            Save Building
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        
        {/* COLUMN LEFT: Main Metrics & General Info (Spans 8) */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
          
          {/* Efficiency Score Projection Card */}
          <section className="bg-primary-container text-on-primary-container rounded-[24px] p-lg flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="flex flex-col gap-4 z-10">
              <div>
                <h2 className="font-label-sm uppercase tracking-widest opacity-80">Efficiency Score Projection</h2>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-display text-[64px] leading-none">84</span>
                  <span className="font-headline-md opacity-70">/100</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-label-md">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  <span>+12% Improvement</span>
                </div>
                <p className="text-label-md max-w-[300px] opacity-80">Based on proposed zonal definitions and insulation updates.</p>
              </div>
            </div>
            
            {/* Visual Indicator Circle */}
            <div className="relative w-40 h-40 flex items-center justify-center z-10 mr-8 hidden sm:flex">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="opacity-20" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-on-primary-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="70" strokeWidth="12" style={{ transition: 'stroke-dashoffset 1s ease-out' }}></circle>
              </svg>
              <span className="absolute material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            
            {/* Atmospheric Background Gradient */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
          </section>

          {/* General Information Form */}
          <section className="bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 p-lg shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">info</span>
              <h3 className="font-headline-md">General Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-on-surface-variant">Building Name</label>
                <input 
                  className="w-full bg-surface-bright border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary text-body-md transition-all" 
                  type="text" 
                  defaultValue="Science & Research Wing B" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant">Building ID</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-body-md opacity-60" 
                  disabled 
                  type="text" 
                  defaultValue="SRW-402-B" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-on-surface-variant">Max Occupancy</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-bright border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary text-body-md transition-all pl-12" 
                    type="number" 
                    defaultValue="1200" 
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined">group</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-on-surface-variant">Total Square Feet</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-bright border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary text-body-md transition-all pl-12" 
                    type="text" 
                    defaultValue="45000" 
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined">straighten</span>
                </div>
              </div>
            </div>
          </section>

          {/* Zonal Definition Section */}
          <section className="bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 p-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">layers</span>
                <h3 className="font-headline-md">Zonal Definition</h3>
              </div>
              <button className="flex items-center gap-2 text-primary font-label-md px-4 py-2 hover:bg-primary/5 rounded-full border border-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Add Zone
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              {zones.map((zone) => (
                <div key={zone.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-all gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${zone.color}`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{zone.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-on-surface font-bold">{zone.name}</h4>
                      <p className="text-label-sm text-on-surface-variant mt-1">{zone.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end sm:self-auto">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">edit</span></button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined">delete</span></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMN RIGHT: File Upload & Preview (Spans 4) */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
          
          {/* Floor Plans Upload Area */}
          <section className="bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 p-lg shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">architecture</span>
              <h3 className="font-headline-md">Floor Plans</h3>
            </div>
            
            <div className="flex-1 flex flex-col gap-gutter">
              {/* Drag & Drop Zone */}
              <div className="border-2 border-dashed border-outline-variant/50 rounded-[20px] p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group bg-surface-bright">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">Drag & drop files here</p>
                  <p className="text-label-sm text-on-surface-variant mt-1">CAD, PDF, or High-Res JPG (Max 50MB)</p>
                </div>
                <button className="px-6 py-2 rounded-full border border-primary text-primary font-label-md hover:bg-primary hover:text-white transition-all">
                  Browse Files
                </button>
                <input type="file" className="hidden" />
              </div>

              {/* Uploaded Files List */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center justify-between p-3 bg-surface-container/30 border border-primary-container/10 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <div className="overflow-hidden">
                      <p className="text-label-md truncate w-32 font-bold">ground_floor_v2.pdf</p>
                      <p className="text-[10px] text-on-surface-variant">4.2 MB • Uploaded</p>
                    </div>
                  </div>
                  <button className="p-1 text-on-surface-variant hover:text-error"><span className="material-symbols-outlined text-[18px]">close</span></button>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container/30 border border-primary-container/10 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <div className="overflow-hidden">
                      <p className="text-label-md truncate w-32 font-bold">rooftop_solar_map.pdf</p>
                      <p className="text-[10px] text-on-surface-variant">1.8 MB • Uploaded</p>
                    </div>
                  </div>
                  <button className="p-1 text-on-surface-variant hover:text-error"><span className="material-symbols-outlined text-[18px]">close</span></button>
                </div>
              </div>

              {/* Preview Placeholder */}
              <div className="mt-auto pt-lg">
                <div className="rounded-2xl overflow-hidden aspect-video border border-outline-variant relative group">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9XKzSeTGpPgd_7kQnKOVXiYy-emBKjl84Ew__Pzk0WTqw0-HrwP9ys7lKbpMtRmJ9gkJz_fBWW13lnk2Xrrhpo2c5x7IR0uZ0zOhTNnJCyQNu-Ect__QTsFvnyZSJR2OlI9O_hK_19w7IUqiodmllN2MoshpAaj1akGJBlQpBPhudRsnFMR-AvzBLbu9anlNRQV-jN0fcbbbCvd5AdmbbAobEw-HNPN7Q5P62Kn5kJ0LANuw5kIbe1rs8f09QE2xI-BZCzJTie6A" 
                    alt="Floor plan" 
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-zoom-in">
                    <span className="text-white font-label-md bg-black/40 px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="material-symbols-outlined">zoom_in</span> View Preview
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
