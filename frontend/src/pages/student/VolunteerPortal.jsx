import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function VolunteerPortal() {
  const [shifts] = useState([
    { id: 1, role: 'Sorting Assistant', date: 'Oct 15, 2026', time: '10:00 AM - 01:00 PM', location: 'Main Recycling Hub', hours: 3, status: 'Upcoming' },
    { id: 2, role: 'Event Cleanup Crew', date: 'Oct 02, 2026', time: '07:00 PM - 09:30 PM', location: 'Student Union', hours: 2.5, status: 'Completed' },
  ]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Volunteer Portal</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Manage your shifts, log hours, and view opportunities.</p>
        </div>
        <Button icon="search">Find Opportunities</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-primary-container text-on-primary-container p-6 rounded-3xl shadow-sm">
          <p className="text-sm uppercase tracking-wider font-bold opacity-80 mb-1">Total Hours Logged</p>
          <p className="text-4xl font-black">24.5</p>
        </div>
        <div className="bg-secondary-container text-on-secondary-container p-6 rounded-3xl shadow-sm">
          <p className="text-sm uppercase tracking-wider font-bold opacity-80 mb-1">Shifts Completed</p>
          <p className="text-4xl font-black">8</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-3xl shadow-sm flex items-center justify-between">
           <div>
             <p className="text-sm uppercase tracking-wider font-bold text-on-surface-variant mb-1">Next Milestone</p>
             <p className="text-xl font-bold text-on-surface">30 Hours Badge</p>
           </div>
           <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent flex items-center justify-center text-primary font-bold text-sm transform -rotate-45">
             <span className="transform rotate-45">82%</span>
           </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant/30 bg-surface-container-low/50">
          <h3 className="font-bold text-title-lg text-on-surface">My Schedule & History</h3>
        </div>
        <div className="divide-y divide-outline-variant/20">
          {shifts.map(shift => (
            <div key={shift.id} className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-surface-container-lowest/50 transition-colors">
              <div>
                 <div className="flex items-center gap-3 mb-1">
                   <h4 className="font-bold text-lg text-on-surface">{shift.role}</h4>
                   <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                     shift.status === 'Upcoming' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface-variant'
                   }`}>
                     {shift.status}
                   </span>
                 </div>
                 <p className="text-sm text-on-surface-variant flex flex-wrap gap-4">
                   <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {shift.date}</span>
                   <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> {shift.time}</span>
                   <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> {shift.location}</span>
                 </p>
              </div>
              
              <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2">
                 <span className="font-bold text-on-surface-variant">{shift.hours} hrs</span>
                 {shift.status === 'Upcoming' ? (
                   <button className="text-error font-bold text-sm hover:underline">Cancel Shift</button>
                 ) : (
                   <button className="text-primary font-bold text-sm hover:underline">Leave Feedback</button>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
