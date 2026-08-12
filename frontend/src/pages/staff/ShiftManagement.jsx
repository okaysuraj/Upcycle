import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function ShiftManagement() {
  const [shifts] = useState([
    { id: 1, name: 'Morning Waste Collection', time: '06:00 AM - 02:00 PM', assigned: 'Marcus T.', status: 'In Progress', type: 'Collection' },
    { id: 2, name: 'Campus Grounds Cleaning', time: '07:30 AM - 03:30 PM', assigned: 'Sarah W.', status: 'Upcoming', type: 'Maintenance' },
    { id: 3, name: 'Bin Sensor Maintenance', time: '10:00 AM - 12:00 PM', assigned: 'Unassigned', status: 'Pending', type: 'IoT' },
    { id: 4, name: 'Evening Event Cleanup', time: '06:00 PM - 10:00 PM', assigned: 'John D.', status: 'Upcoming', type: 'Events' },
  ]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Shift Schedule</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Coordinate daily maintenance and collection shifts.</p>
        </div>
        <div className="flex gap-2">
          <Button icon="calendar_month" className="bg-surface-container text-on-surface hover:bg-surface-container-high">Calendar View</Button>
          <Button icon="add">Assign Shift</Button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm overflow-hidden relative">
        <h3 className="text-title-lg font-bold text-on-surface mb-6">Today's Timeline</h3>
        
        <div className="relative pl-6 border-l-2 border-outline-variant/30 space-y-8">
          {shifts.map(shift => (
            <div key={shift.id} className="relative">
              <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-surface-container-lowest ${
                shift.status === 'In Progress' ? 'bg-primary animate-pulse' :
                shift.status === 'Upcoming' ? 'bg-secondary' : 'bg-outline-variant'
              }`}></div>
              
              <div className="bg-surface-container border border-outline-variant/20 rounded-2xl p-5 hover:border-primary/40 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
                  <h4 className="font-bold text-lg text-on-surface">{shift.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    shift.status === 'In Progress' ? 'bg-primary-container text-on-primary-container' :
                    shift.status === 'Pending' ? 'bg-error-container text-error' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {shift.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
                  <span className="flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[18px]">schedule</span> {shift.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">person</span> {shift.assigned}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">label</span> {shift.type}
                  </span>
                </div>
                
                {shift.assigned === 'Unassigned' && (
                  <button className="mt-4 text-sm font-bold text-primary hover:underline">Click to assign staff</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
