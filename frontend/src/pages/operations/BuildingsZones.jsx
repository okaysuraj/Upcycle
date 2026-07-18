import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuildingsZones() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const buildings = [
    {
      id: 'CL-01',
      name: 'Central Library',
      location: 'North Campus',
      status: 'Operational',
      statusColor: 'bg-success-container',
      zones: 12,
      efficiency: 96,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Qtvu5cspEwUfqAMF5spgzLexDk6jAnToK75hmZRAZpzMeREUwKVh80YD1g8kAVF4oF8QHlF5jfK9uNgA43FLcZqDhmnVneZYiMrh9O0K3sv-PU8_RsQan0LvZ9iZ8rtk14ZiDZxpKbM2GOzzAyoZJN0eKMAzscxVZvMuHfxlYRnkQxw9PJLByxepU0xCQhdRmhokRUTjEEMLZ1cwPV1K5kgsxUmlHm9JzogOh8FaZMo6T2d_Pzgo3fes1B1m5o3_hXNujKStouY'
    },
    {
      id: 'EH-04',
      name: 'Engineering Hub',
      location: 'West Complex',
      status: 'Operational',
      statusColor: 'bg-success-container',
      zones: 28,
      efficiency: 89,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx8KpPzVubPdy3BGecyJl8YyEHPlrSn3PpfvKdxhFISkEG6OUFSdN9PiP0eUnFxLpHAEK13TsQu-lpmSZFZbZy73MGFZoGcZyV9a8wQkSzB3VSloyBJboIg_FZVkeWJF6NV5YqCAg_g7fDTeDN30L6gwED2bMlxhOsYleSvpAUzdW6j2qeP4LVW_PVt8jJut5inM2lpKH3CTZaukbmDXlq82h4WSQBpgVpHSght-aF06nfv9k-feuURs2fIPHfY-UPbGO3XmkBiJ0'
    },
    {
      id: 'SC-02',
      name: 'Student Center',
      location: 'Central Plaza',
      status: 'Maintenance',
      statusColor: 'bg-error',
      zones: 18,
      efficiency: 72,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAzzTHEmRT8Qlwyz8OiOd2s68R2BUjOSjQshn_xI6YfdPNZ4-J-TyP42x36FvtkzB7czejDv9uY2DyVt4mFBO-ddINlGAz9-pon4yfMvvP0OvIPa9HbuAvi-mE5uRO5y_0J8faUZy3L-bcwq89CGD_RKHdp-7hJ05ZEZWilWEz_erj83hy3uvfX8c9dcDA96Hs7tYgNqP6ksqHs3f6UwvTOyTj-f0i1vRb64dAwNaz_1pqQlRNu3Z1_QJa6CdEZ8wlqBK5U3tI420'
    },
    {
      id: 'IL-09',
      name: 'Innovation Lab',
      location: 'South Sector',
      status: 'Operational',
      statusColor: 'bg-success-container',
      zones: 8,
      efficiency: 98,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC904ji_gbgayge2nKoDJNbMG4vyg1FeVhw-VDGoSItMjZEBrMIhWHOUVDqXpEKBgSieItZRHf2pzBTW-MvB9dXDyJigxpzVfBtIUn6mGUxBLAe0KsJ_4lo-cexqDH5h35AP2oZJmHccKfTRrXyfzm7GCXDPeSxMUj3nUcAHnEZ_tkhfE7pVXOjexxNr9wrNGCXFux6QJ1qRlhUEpbCoXX__G9vfJCiGsqHvr2-StRPlVcOKN8gdUnAc3DXOJVAs1qMuYUem89NFAs'
    }
  ];

  return (
    <div className="flex flex-col gap-lg">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
        <div>
          <h2 className="font-display text-headline-lg text-on-surface mb-2">Campus Infrastructure</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage buildings, monitor efficiency, and coordinate maintenance across zones.</p>
        </div>
        
        {/* Filter Chips */}
        <div className="flex gap-2">
          {['All', 'Operational', 'Maintenance'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-label-md text-label-md transition-colors ${
                filter === f 
                  ? 'bg-primary text-on-primary shadow-sm' 
                  : 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-12 gap-gutter mb-lg">
        <div className="col-span-12 md:col-span-8 bg-white/70 backdrop-blur-[10px] border border-[#bec9be]/30 rounded-xl p-gutter flex flex-col justify-center relative overflow-hidden h-40">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-1 block">Global Performance</span>
              <h3 className="font-display text-display text-on-surface">94.2%</h3>
            </div>
            <div className="text-right">
              <span className="flex items-center justify-end gap-1 text-[#2eb872] font-bold font-label-md">
                <span className="material-symbols-outlined text-[18px]">trending_up</span> +2.4%
              </span>
              <p className="font-label-sm text-label-sm text-on-surface-variant">vs. last month</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-white border border-[#bec9be]/30 rounded-[24px] p-gutter flex flex-col justify-center border-l-4 border-l-primary shadow-sm hover:-translate-y-1 transition-transform">
          <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 block">Total Buildings</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">24 Active</h3>
          <div className="mt-2 h-1 w-full bg-secondary-container rounded-full overflow-hidden">
            <div className="h-full bg-primary w-4/5 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Building Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        
        {buildings.filter(b => filter === 'All' || b.status === filter).map(b => (
          <div key={b.id} className="bg-white border border-[#bec9be]/30 rounded-[24px] overflow-hidden group shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
            <div className="h-48 w-full relative">
              <img className="w-full h-full object-cover" src={b.img} alt={b.name} />
              <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center gap-1 ${b.status === 'Maintenance' ? 'bg-error-container/90 text-on-error-container' : 'text-on-surface'}`}>
                <span className={`w-2 h-2 rounded-full ${b.statusColor}`}></span>
                <span className="font-label-sm text-label-sm">{b.status}</span>
              </div>
            </div>
            <div className="p-gutter">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">{b.name}</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">{b.location} • ID: {b.id}</p>
                </div>
                <button className="p-2 rounded-full hover:bg-surface-variant/30 text-on-surface-variant">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">Total Zones</span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">{b.zones} Zones</span>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-md text-label-md text-on-surface-variant">Efficiency</span>
                    <span className={`font-label-md text-label-md font-bold ${b.efficiency < 80 ? 'text-error' : 'text-primary'}`}>{b.efficiency}%</span>
                  </div>
                  <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${b.efficiency < 80 ? 'bg-error' : 'bg-primary'}`} style={{ width: `${b.efficiency}%` }}></div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate(`/operations/buildings/edit/${b.id}`)}
                className="w-full mt-6 py-2 border border-outline-variant/30 rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}

        {/* Empty State/Add Building Card */}
        <div 
          onClick={() => navigate('/operations/buildings/add')}
          className="bg-white border-dashed border-2 border-outline-variant rounded-[24px] flex flex-col items-center justify-center p-gutter min-h-[400px] hover:bg-surface-container transition-colors group cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">add_business</span>
          </div>
          <h4 className="font-headline-md text-headline-md text-on-surface text-center">Add New Building</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-center mt-2 max-w-[200px]">Expand your campus infrastructure network.</p>
        </div>

      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/operations/buildings/add')}
        className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all z-50 group"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
        <span className="absolute right-full mr-4 bg-on-surface text-surface px-3 py-1 rounded-lg text-sm font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Add Building</span>
      </button>

    </div>
  );
}
