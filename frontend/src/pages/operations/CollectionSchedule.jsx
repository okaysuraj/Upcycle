import React, { useState } from 'react';

const scheduleData = {
  days: ['SUN 11', 'MON 12', 'TUE 13', 'WED 14', 'THU 15', 'FRI 16', 'SAT 17'],
  events: {
    1: [{ route: 'Route A-1', location: 'Central Hub', driver: 'Marcus Chen', time: '08:00 - 11:30', type: 'central', color: 'border-l-[#00522d]', badge: 'bg-[#9cf6ba] text-[#00210f]' }],
    2: [{ route: 'Route B-4', location: 'West Dorms', driver: 'Sarah Miller', time: '10:00 - 14:00', type: 'residential', color: 'border-l-[#24502c]', badge: 'bg-[#d9e6da] text-[#00522d]' }],
    3: [
      { route: 'HazMat 02', location: 'Science Lab', driver: 'Pete Ross', time: '09:30 - 11:00', type: 'hazmat', color: 'border-l-[#ba1a1a]', badge: 'bg-[#ffdad6] text-[#ba1a1a]' },
      { route: 'Route A-2', location: 'Library North', driver: 'Marcus Chen', time: '13:00 - 16:30', type: 'central', color: 'border-l-[#00522d]', badge: 'bg-[#9cf6ba] text-[#00210f]' }
    ],
    5: [{ route: 'Route B-5', location: 'Faculty Club', driver: 'Sarah Miller', time: '08:00 - 10:00', type: 'residential', color: 'border-l-[#24502c]', badge: 'bg-[#d9e6da] text-[#00522d]' }]
  }
};

export default function CollectionSchedule() {
  const [viewMode, setViewMode] = useState('weekly');

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Fleet Dispatch & Scheduling
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Collection Schedule</h1>
          <p className="text-sm text-[#556158] mt-1 max-w-2xl">Manage and optimize collection routes for central, residential, and lab zones.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white rounded-full p-1 border border-[#bec9be]/40 shadow-sm">
            <button 
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'weekly' ? 'bg-[#00522d] text-white shadow-sm' : 'text-[#556158] hover:bg-[#e7f6ff]'
              }`} 
              onClick={() => setViewMode('weekly')}
            >
              Weekly
            </button>
            <button 
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'monthly' ? 'bg-[#00522d] text-white shadow-sm' : 'text-[#556158] hover:bg-[#e7f6ff]'
              }`} 
              onClick={() => setViewMode('monthly')}
            >
              Monthly
            </button>
          </div>
          <button 
            type="button"
            onClick={() => alert('Creating new dispatch route...')}
            className="bg-[#00522d] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-[#003d21] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>New Route</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Calendar Section (9 Cols) */}
        <div className="col-span-12 xl:col-span-9">
          <div className="bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm overflow-hidden">
            {/* Calendar Header */}
            <div className="p-6 border-b border-[#bec9be]/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#f4faff]">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-[#0d1e25]">September 11 – 17, 2024</h2>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-white rounded-lg border border-[#bec9be]/40 text-[#556158]"><span className="material-symbols-outlined text-base">chevron_left</span></button>
                  <button className="p-1 hover:bg-white rounded-lg border border-[#bec9be]/40 text-[#556158]"><span className="material-symbols-outlined text-base">chevron_right</span></button>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#00522d]"></span><span className="text-[#556158]">Central Zone</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#24502c]"></span><span className="text-[#556158]">Residential</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]"></span><span className="text-[#556158]">HazMat</span></div>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 divide-x divide-[#bec9be]/20 text-xs">
              {/* Day Headers */}
              {scheduleData.days.map((day, i) => (
                <div key={i} className={`p-3 text-center border-b border-[#bec9be]/20 font-bold ${i === 3 ? 'text-[#00522d] bg-[#dff1fb]/40' : 'text-[#556158] bg-[#f4faff]/30'}`}>
                  {day}
                </div>
              ))}
              {/* Day Contents */}
              {scheduleData.days.map((_, dayIndex) => (
                <div key={dayIndex} className={`min-h-[340px] p-2 flex flex-col gap-2 ${dayIndex === 3 ? 'bg-[#dff1fb]/20' : 'bg-white'}`}>
                  {scheduleData.events[dayIndex]?.map((evt, evtIdx) => (
                    <div key={evtIdx} className={`bg-white p-3 rounded-2xl border-l-4 ${evt.color} border border-[#bec9be]/30 shadow-sm transition-transform hover:scale-[1.02] cursor-pointer`}>
                      <div className="flex justify-between items-start mb-1.5">
                        <span className={`${evt.badge} text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider`}>{evt.route}</span>
                        <span className="material-symbols-outlined text-[#556158] text-[14px]">more_vert</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#0d1e25] mb-0.5">{evt.location}</h4>
                      <p className="text-[10px] text-[#556158] mb-1.5">Driver: {evt.driver}</p>
                      <div className="flex items-center gap-1 text-[10px] text-[#556158]">
                        <span className="material-symbols-outlined text-[13px]">schedule</span>
                        <span>{evt.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Fleet Operations Summary (3 Cols) */}
        <div className="col-span-12 xl:col-span-3 space-y-6">
          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1e25]">Fleet Utilization</h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#0d1e25]">Active EV Trucks</span>
                  <span className="text-[#00522d]">6 / 8 Active</span>
                </div>
                <div className="h-1.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00522d] w-[75%]"></div>
                </div>
              </div>

              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#0d1e25]">On-Time Rate</span>
                  <span className="text-[#00522d]">98.4%</span>
                </div>
                <div className="h-1.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <div className="h-full bg-[#2eb872] w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#00522d] text-white rounded-[28px] p-6 shadow-sm space-y-2">
            <span className="material-symbols-outlined text-3xl text-[#9cf6ba]">electric_rickshaw</span>
            <h4 className="text-base font-bold tracking-tight">Zero-Emission Routes</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              All 14 collection routes currently operating with 100% electrified municipal fleet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
