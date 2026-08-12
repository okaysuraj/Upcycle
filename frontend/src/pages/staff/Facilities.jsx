import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function Facilities() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Facilities Management</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Manage campus buildings, zones, and floorplans</p>
        </div>
        <div className="flex gap-3">
          <Button icon="upload">Upload Floorplan</Button>
          <Button icon="add_business">New Facility</Button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-outline-variant/30 overflow-x-auto scroll-hide">
        {['Overview', 'Zoning', 'Floorplans', 'Energy Profiling'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-4 font-bold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm min-h-[500px] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-surface-variant opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="text-center relative z-10">
              <span className="material-symbols-outlined text-6xl text-primary/40 mb-4 block">domain</span>
              <h3 className="text-headline-sm font-bold text-on-surface">Interactive Map Not Rendered</h3>
              <p className="text-on-surface-variant">Select a facility from the sidebar to view its zoning plan.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-title-lg font-bold text-on-surface mb-2">Campus Buildings</h3>
          {[
            { name: 'Science Block A', zones: 12, status: 'Active', energy: 'High' },
            { name: 'Main Library', zones: 8, status: 'Active', energy: 'Medium' },
            { name: 'Dormitory East', zones: 45, status: 'Maintenance', energy: 'Low' },
          ].map((bldg, idx) => (
            <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{bldg.name}</h4>
                <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${
                  bldg.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-error-container text-error'
                }`}>{bldg.status}</span>
              </div>
              <div className="flex gap-4 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">grid_view</span> {bldg.zones} Zones</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">bolt</span> {bldg.energy} Usage</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
