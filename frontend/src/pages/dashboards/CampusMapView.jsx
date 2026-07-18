import React, { useState, useEffect } from 'react';

const buildings = {
  'Tech Hub A': {
    type: 'Innovation Center',
    occupancy: 412,
    energy: 45.2,
    efficiency: 98,
    alerts: [
      { icon: 'check_circle', color: 'text-success-container', text: 'Optimal cooling cycles maintained' },
      { icon: 'history', color: 'text-secondary', text: 'Scheduled maintenance in 4 days' }
    ]
  },
  'Library West': {
    type: 'Academic Facility',
    occupancy: 856,
    energy: 68.1,
    efficiency: 72,
    alerts: [
      { icon: 'warning', color: 'text-tertiary', text: 'Occupancy threshold exceeded (85%)' },
      { icon: 'air', color: 'text-tertiary', text: 'CO2 levels slightly elevated in Reading Room' }
    ]
  },
  'Athletics Complex': {
    type: 'Sports & Recreation',
    occupancy: 120,
    energy: 112.5,
    efficiency: 44,
    alerts: [
      { icon: 'error', color: 'text-error-warm', text: 'Critical: HVAC Compressor Failure' },
      { icon: 'water_drop', color: 'text-secondary', text: 'Plumbing leak detected in Sector 4' }
    ]
  }
};

export default function CampusMapView() {
  const [selectedBuilding, setSelectedBuilding] = useState('Tech Hub A');
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSidebar(true), 100);
  }, []);

  const data = buildings[selectedBuilding];

  return (
    <div className="flex-1 relative h-[calc(100vh-64px)] -m-4 md:-m-6 lg:-m-8 overflow-hidden rounded-2xl">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 bg-surface-container-soft">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1D2TV9EGSwDFkh8NI5BWiNGDFV21BuzONkN3zEJICIP1EY4MjzTY6B3kPaQz6fIoiPUsHrtI6KXBlzLPQ6gmydPt2z6ns_bZCTZR9lH7EOpvchWYGDxrOrG-0SRdqxKJ_Iozu89PK6jpiLQ2U-pXjcUuHSJsU8brTLbypYGk5nOmnI8QreBVgaz2VqACDZMKCb1_SwzJ3JVX5Ksc8L-_XuBTAJvnYKbh8tCwliPlovzyIEcfiKjmABBsWcsZjTLb6QVhHWTqhgO0')" }}></div>
          
          {/* Building Interaction Markers */}
          {/* High Efficiency Marker */}
          <div className="absolute top-1/4 left-1/3 cursor-pointer group" onClick={() => setSelectedBuilding('Tech Hub A')}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${selectedBuilding === 'Tech Hub A' ? 'bg-primary text-white scale-110' : 'bg-success-container text-white animate-pulse'}`}>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-2 rounded-xl shadow-xl border border-outline-variant/30 min-w-[150px] pointer-events-none z-10">
              <p className="font-bold text-primary text-label-md">Tech Hub A</p>
              <p className="text-xs text-secondary">Efficiency: 98%</p>
            </div>
          </div>
          
          {/* Medium Alert Marker */}
          <div className="absolute top-1/2 left-2/3 cursor-pointer group" onClick={() => setSelectedBuilding('Library West')}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${selectedBuilding === 'Library West' ? 'bg-primary text-white scale-110' : 'bg-tertiary text-white animate-pulse'}`}>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-2 rounded-xl shadow-xl border border-outline-variant/30 min-w-[150px] pointer-events-none z-10">
              <p className="font-bold text-primary text-label-md">Library West</p>
              <p className="text-xs text-secondary">Alert: High Occupancy</p>
            </div>
          </div>
          
          {/* Critical Marker */}
          <div className="absolute bottom-1/4 left-1/2 cursor-pointer group" onClick={() => setSelectedBuilding('Athletics Complex')}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${selectedBuilding === 'Athletics Complex' ? 'bg-primary text-white scale-110' : 'bg-error-warm text-white animate-pulse'}`}>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-2 rounded-xl shadow-xl border border-outline-variant/30 min-w-[150px] pointer-events-none z-10">
              <p className="font-bold text-primary text-label-md">Athletics Complex</p>
              <p className="text-xs text-secondary">Crit: HVAC Malfunction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Sidebar Overlay */}
      <aside className={`absolute right-6 top-6 bottom-6 w-[400px] flex flex-col gap-4 pointer-events-none transition-all duration-500 ${showSidebar ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
        {/* Main Building Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-[24px] p-6 shadow-sm border border-outline-variant/30 pointer-events-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary">{selectedBuilding}</h2>
              <p className="text-label-md text-secondary">{data.type}</p>
            </div>
            <span className="material-symbols-outlined text-primary-container p-2 bg-white rounded-full shadow-sm">domain</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/50 p-4 rounded-xl border border-outline-variant/20">
              <p className="text-xs text-secondary mb-1">Occupancy</p>
              <div className="flex items-end gap-1">
                <span className="text-headline-md font-bold text-on-surface">{data.occupancy}</span>
                <span className="text-xs text-secondary pb-1">people</span>
              </div>
            </div>
            <div className="bg-white/50 p-4 rounded-xl border border-outline-variant/20">
              <p className="text-xs text-secondary mb-1">Energy Use</p>
              <div className="flex items-end gap-1">
                <span className="text-headline-md font-bold text-primary">{data.energy}</span>
                <span className="text-xs text-secondary pb-1">kW/h</span>
              </div>
            </div>
          </div>
          {/* Efficiency Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-label-md font-medium text-on-surface">Efficiency Status</span>
              <span className="text-label-md font-bold text-primary">{data.efficiency}%</span>
            </div>
            <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${data.efficiency}%` }}></div>
            </div>
          </div>
          {/* Active Alerts */}
          <div className="space-y-2">
            <h4 className="text-label-sm font-bold text-secondary uppercase tracking-widest">Active Alerts</h4>
            <div className="space-y-2">
              {data.alerts.map((alert, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/40 rounded-lg border border-outline-variant/10">
                  <span className={`material-symbols-outlined ${alert.color}`}>{alert.icon}</span>
                  <p className="text-body-md text-on-surface">{alert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-[24px] border border-outline-variant/30 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary mb-2">water_drop</span>
            <p className="text-xs text-secondary">Water Reuse</p>
            <p className="text-label-md font-bold text-on-surface">1,240L</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-[24px] border border-outline-variant/30 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-2">co2</span>
            <p className="text-xs text-secondary">Carbon Offset</p>
            <p className="text-label-md font-bold text-on-surface">12.4t</p>
          </div>
        </div>

        {/* Live Feed */}
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-[24px] border border-outline-variant/30 pointer-events-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              <span className="text-label-sm font-bold text-on-surface">Campus-Wide Live Feed</span>
            </div>
            <button className="text-primary text-label-md font-bold">View All</button>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">solar_power</span>
              </div>
              <div>
                <p className="text-label-md font-bold text-on-surface">Peak Solar Production</p>
                <p className="text-xs text-secondary">10 mins ago • Grid stability normal</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Map Controls */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2 pointer-events-auto">
        <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">remove</span>
        </button>
        <button className="w-12 h-12 bg-primary text-white rounded-xl shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity mt-2">
          <span className="material-symbols-outlined">layers</span>
        </button>
      </div>
    </div>
  );
}
