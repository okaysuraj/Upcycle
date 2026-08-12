import React from 'react';
import Button from '../../components/ui/Button';

export default function FleetMap() {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Live Fleet Map</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Real-time GPS tracking of active collection vehicles.</p>
        </div>
        <div className="flex gap-2">
          <Button icon="refresh">Refresh Feed</Button>
        </div>
      </div>

      <div className="flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-xl relative overflow-hidden shadow-sm group">
        {/* Placeholder for an actual map */}
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=university+campus&zoom=15&size=1000x800&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:landscape|element:geometry|color:0xe8ecd4')] bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Map Overlay Controls */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-outline-variant/20 max-w-xs">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">sensors</span>
            Live Telemetry
          </h3>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <p className="font-bold text-sm">V-001 (Electric Compactor)</p>
                <p className="text-xs text-on-surface-variant">Moving - 15 km/h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div>
                <p className="font-bold text-sm">V-003 (Cargo Bike)</p>
                <p className="text-xs text-on-surface-variant">Stationary - Science Bldg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
