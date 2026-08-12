import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function Fleet() {
  const [vehicles] = useState([
    { id: 'V-001', type: 'Electric Compactor', status: 'Active', driver: 'Marcus T.', battery: 82 },
    { id: 'V-002', type: 'Recycling Truck', status: 'Maintenance', driver: 'Unassigned', battery: 100 },
    { id: 'V-003', type: 'Electric Cargo Bike', status: 'Active', driver: 'Sarah W.', battery: 45 },
    { id: 'V-004', type: 'Electric Compactor', status: 'Charging', driver: 'John D.', battery: 12 },
  ]);

  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Fleet Management</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Manage collection vehicles, maintenance schedules, and EV charging.</p>
        </div>
        <div className="flex gap-2">
          <Button icon="add">Add Vehicle</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {vehicles.map(v => (
          <div key={v.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm flex flex-col justify-between">
             <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                </div>
                <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-full ${
                  v.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                  v.status === 'Maintenance' ? 'bg-error-container text-error' :
                  'bg-secondary-container text-on-secondary-container'
                }`}>
                  {v.status}
                </span>
             </div>
             <div>
               <h3 className="font-bold text-on-surface text-lg">{v.id}</h3>
               <p className="text-sm text-on-surface-variant">{v.type}</p>
             </div>
             <div className="mt-4 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-sm">
               <span className="text-on-surface-variant">Driver: {v.driver}</span>
               <span className="flex items-center gap-1 font-bold">
                 <span className="material-symbols-outlined text-[16px] text-primary">battery_charging_full</span>
                 {v.battery}%
               </span>
             </div>
          </div>
        ))}
      </div>
    </>
  );
}
