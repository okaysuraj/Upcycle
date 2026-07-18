import React, { useState } from 'react';

const scheduleData = {
  days: ['SUN 11', 'MON 12', 'TUE 13', 'WED 14', 'THU 15', 'FRI 16', 'SAT 17'],
  events: {
    1: [{ route: 'Route A-1', location: 'Central Hub', driver: 'Marcus Chen', time: '08:00 - 11:30', type: 'central', color: 'border-l-success-container', badge: 'bg-success-container/10 text-on-tertiary-fixed-variant' }],
    2: [{ route: 'Route B-4', location: 'West Dorms', driver: 'Sarah Miller', time: '10:00 - 14:00', type: 'residential', color: 'border-l-tertiary', badge: 'bg-tertiary/10 text-tertiary' }],
    3: [
      { route: 'Hazard', location: 'Science Lab', driver: 'Pete Ross', time: '09:30 - 11:00', type: 'hazmat', color: 'border-l-error', badge: 'bg-error/10 text-error-warm' },
      { route: 'Route A-2', location: 'Library North', driver: 'Marcus Chen', time: '13:00 - 16:30', type: 'central', color: 'border-l-success-container', badge: 'bg-success-container/10 text-on-tertiary-fixed-variant' }
    ],
    5: [{ route: 'Route B-5', location: 'Faculty Club', driver: 'Sarah Miller', time: '08:00 - 10:00', type: 'residential', color: 'border-l-tertiary', badge: 'bg-tertiary/10 text-tertiary' }]
  }
};

export default function CollectionSchedule() {
  const [viewMode, setViewMode] = useState('weekly');

  return (
    <div className="flex flex-col gap-md">
      {/* Header */}
      <header className="mb-md flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
            <span>Logistics</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">Collection Schedule</span>
          </nav>
          <h1 className="font-headline-lg text-on-surface">Collection Schedule</h1>
          <p className="text-body-md text-on-surface-variant max-w-2xl">Manage and optimize collection routes for the central and residential campus zones.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex bg-surface-container-high rounded-full p-1">
            <button className={`px-6 py-2 rounded-full font-label-md transition-colors ${viewMode === 'weekly' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-white/50'}`} onClick={() => setViewMode('weekly')}>Weekly</button>
            <button className={`px-6 py-2 rounded-full font-label-md transition-colors ${viewMode === 'monthly' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-white/50'}`} onClick={() => setViewMode('monthly')}>Monthly</button>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-primary-container transition-all active:scale-95">
            <span className="material-symbols-outlined">add</span>
            <span className="font-label-md">New Route</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Calendar Section */}
        <div className="col-span-12 xl:col-span-9">
          <div className="bg-white rounded-[24px] border border-outline-variant/30 shadow-sm overflow-hidden">
            {/* Calendar Header */}
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-ice/30">
              <div className="flex items-center gap-4">
                <h2 className="font-headline-md text-on-surface">September 11 – 17, 2023</h2>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-surface-container rounded-md"><span className="material-symbols-outlined">chevron_left</span></button>
                  <button className="p-1 hover:bg-surface-container rounded-md"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-success-container"></span><span className="text-label-sm text-on-surface-variant">Central Zone</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-tertiary"></span><span className="text-label-sm text-on-surface-variant">Residential</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-error"></span><span className="text-label-sm text-on-surface-variant">HazMat</span></div>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {/* Day Headers */}
              {scheduleData.days.map((day, i) => (
                <div key={i} className={`p-4 text-center border-r border-outline-variant/20 last:border-r-0 font-label-sm ${i === 3 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  {day}
                </div>
              ))}
              {/* Day Contents */}
              {scheduleData.days.map((_, dayIndex) => (
                <div key={dayIndex} className={`min-h-[400px] p-2 border-r border-t border-outline-variant/20 last:border-r-0 flex flex-col gap-2 ${dayIndex === 3 ? 'bg-surface-container-lowest ring-1 ring-primary/20' : 'bg-white'}`}>
                  {scheduleData.events[dayIndex]?.map((evt, evtIdx) => (
                    <div key={evtIdx} className={`bg-white/70 backdrop-blur-sm p-3 rounded-xl border-l-4 ${evt.color} border border-outline-variant/20 transition-transform hover:scale-[1.02] cursor-pointer`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className={`${evt.badge} text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider`}>{evt.route}</span>
                        <span className="material-symbols-outlined text-outline text-[16px]">more_vert</span>
                      </div>
                      <h4 className="text-label-md font-bold mb-1">{evt.location}</h4>
                      <p className="text-[11px] text-on-surface-variant mb-2">Driver: {evt.driver}</p>
                      <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {evt.time}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Management UI */}
        <div className="col-span-12 xl:col-span-3 flex flex-col gap-gutter">
          {/* Pending Tasks */}
          <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm flex flex-col max-h-[500px]">
            <h3 className="font-headline-md text-on-surface mb-4 flex items-center justify-between">
              Pending
              <span className="bg-surface-container-highest text-primary text-label-sm px-3 py-1 rounded-full">3</span>
            </h3>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {[
                { title: 'Overflow: Engineering B', time: 'Reported 2h ago', priority: 'high' },
                { title: 'Weekly: South Campus', time: 'Due Friday', priority: 'medium' },
                { title: 'Event: Career Fair Cleanup', time: 'Next Monday', priority: 'low' }
              ].map((task, i) => (
                <div key={i} className="bg-surface-ice p-4 rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-bold">UNASSIGNED</span>
                  </div>
                  <h4 className="text-label-md font-bold">{task.title}</h4>
                  <p className="text-[11px] text-on-surface-variant mt-1">{task.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fleet Status */}
          <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm">
            <h3 className="font-headline-md text-on-surface mb-4">Fleet Status</h3>
            <div className="space-y-4">
              {[
                { vehicle: 'EV-01 (Compact)', status: 'In Transit', statusColor: 'bg-success-container text-white', driver: 'Marcus Chen' },
                { vehicle: 'EV-02 (Flatbed)', status: 'Available', statusColor: 'bg-primary-container text-on-primary-container', driver: 'Unassigned' },
                { vehicle: 'HZ-01 (Sealed)', status: 'Maintenance', statusColor: 'bg-error-container text-error-warm', driver: 'Pete Ross' }
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-ice border border-outline-variant/10">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-label-md font-bold">{v.vehicle}</h4>
                    <p className="text-[11px] text-on-surface-variant">{v.driver}</p>
                  </div>
                  <span className={`${v.statusColor} text-[10px] px-2 py-1 rounded-full font-bold`}>{v.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
