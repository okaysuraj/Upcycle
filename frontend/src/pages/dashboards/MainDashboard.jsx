import React from 'react';
import { Link } from 'react-router-dom';

export default function MainDashboard() {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Global Impact Stream Ticker */}
      <div className="bg-[#006d3e] text-white py-3 px-4 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-wider overflow-hidden whitespace-nowrap">
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-[18px] text-[#9cf6ba]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Oslo City just logged 500kg of organic waste
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-[18px] text-[#9cf6ba]" style={{ fontVariationSettings: "'FILL' 1" }}>
              park
            </span>
            1.2M Trees planted globally this month
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-[18px] text-[#9cf6ba]" style={{ fontVariationSettings: "'FILL' 1" }}>
              water_drop
            </span>
            Carbon sequestration up by 12% in sector B4
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-[18px] text-[#9cf6ba]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Berlin Initiative reached 10,000 members
          </span>
        </div>
      </div>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Large Sustainability Impact Card (8 Columns) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 p-6 sm:p-8 relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00522d] tracking-tight mb-1">
                  Sustainability Impact
                </h2>
                <p className="text-sm text-[#556158]">Real-time performance metrics for your district</p>
              </div>
              <button 
                onClick={() => alert('Downloading monthly impact report...')}
                className="bg-[#dff1fb] text-[#00522d] p-2.5 rounded-full hover:bg-[#9cf6ba] transition-colors cursor-pointer"
                title="Download Report"
              >
                <span className="material-symbols-outlined text-xl">download</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 rounded-full flex items-center justify-center relative shadow-sm border-[12px] border-[#006d3e] border-l-[#d9e6da] shrink-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0d1e25]">75%</div>
                    <div className="text-[11px] font-bold text-[#556158] uppercase tracking-wider">Goal</div>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#00522d] tracking-tight">1,240kg</span>
                    <span className="text-xs font-semibold text-[#556158]">Recycled this month</span>
                  </div>
                  <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00522d] w-[75%] rounded-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f4faff] p-4 rounded-2xl border border-[#bec9be]/30">
                  <span className="material-symbols-outlined text-[#00522d] text-2xl mb-1">co2</span>
                  <div className="text-2xl font-bold text-[#0d1e25]">45.2m³</div>
                  <div className="text-xs text-[#556158]">Carbon Reduced</div>
                </div>
                <div className="bg-[#f4faff] p-4 rounded-2xl border border-[#bec9be]/30">
                  <span className="material-symbols-outlined text-[#00522d] text-2xl mb-1">electric_bolt</span>
                  <div className="text-2xl font-bold text-[#0d1e25]">840 kWh</div>
                  <div className="text-xs text-[#556158]">Energy Saved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Grid (4 Columns) */}
        <section className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          <Link 
            to="/student/waste-logger"
            className="bg-[#00522d] text-white p-5 rounded-[24px] flex flex-col items-center justify-center gap-2 hover:bg-[#003d21] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md text-center"
          >
            <span className="material-symbols-outlined text-3xl">delete_sweep</span>
            <span className="text-sm font-bold">Log Waste</span>
          </Link>
          <Link 
            to="/operations/pickup-request/new"
            className="bg-[#d4e5ef] text-[#00522d] p-5 rounded-[24px] flex flex-col items-center justify-center gap-2 hover:bg-[#9cf6ba] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm text-center"
          >
            <span className="material-symbols-outlined text-3xl">local_shipping</span>
            <span className="text-sm font-bold">Pickup Request</span>
          </Link>
          <Link 
            to="/operations/map"
            className="bg-[#d4e5ef] text-[#00522d] p-5 rounded-[24px] flex flex-col items-center justify-center gap-2 hover:bg-[#9cf6ba] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm text-center"
          >
            <span className="material-symbols-outlined text-3xl">map</span>
            <span className="text-sm font-bold">Near Me</span>
          </Link>
          <Link 
            to="/community/leaderboard"
            className="bg-[#24502c] text-white p-5 rounded-[24px] flex flex-col items-center justify-center gap-2 hover:bg-[#1b3d22] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md text-center"
          >
            <span className="material-symbols-outlined text-3xl">redeem</span>
            <span className="text-sm font-bold">Rewards</span>
          </Link>
        </section>

        {/* Upcoming Events (Horizontal List) */}
        <section className="col-span-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Upcoming Community Events</h3>
            <Link to="/student/events" className="text-[#00522d] text-sm font-bold hover:underline flex items-center gap-1">
              <span>View All Events</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div 
              className="rounded-2xl p-4 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all border border-[#bec9be]/30"
              style={{
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="w-20 h-20 rounded-xl bg-[#00522d]/10 flex items-center justify-center text-[#00522d] shrink-0">
                <span className="material-symbols-outlined text-3xl">park</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="bg-[#2eb872]/20 text-[#00522d] px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 inline-block">
                  Next Week
                </span>
                <h4 className="text-sm font-bold text-[#0d1e25] truncate">Green Neighborhood Drive</h4>
                <p className="text-xs text-[#556158] flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[15px]">calendar_month</span> Oct 12, 2024
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="rounded-2xl p-4 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all border border-[#bec9be]/30"
              style={{
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="w-20 h-20 rounded-xl bg-[#2eb872]/15 flex items-center justify-center text-[#00522d] shrink-0">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="bg-[#00522d]/15 text-[#00522d] px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 inline-block">
                  Workshop
                </span>
                <h4 className="text-sm font-bold text-[#0d1e25] truncate">Upcycling 101 Masterclass</h4>
                <p className="text-xs text-[#556158] flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[15px]">calendar_month</span> Oct 15, 2024
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="rounded-2xl p-4 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-all border border-[#bec9be]/30"
              style={{
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="w-20 h-20 rounded-xl bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] shrink-0">
                <span className="material-symbols-outlined text-3xl">tour</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="bg-[#ffdad6] text-[#ba1a1a] px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 inline-block">
                  Limited Slots
                </span>
                <h4 className="text-sm font-bold text-[#0d1e25] truncate">Facility Tour & Audit</h4>
                <p className="text-xs text-[#556158] flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[15px]">calendar_month</span> Oct 20, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Table / Initiative Status (8 Columns) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm">
          <div className="p-5 sm:p-6 border-b border-[#bec9be]/30 flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#0d1e25] tracking-tight">Recent Logistics</h3>
            <button 
              onClick={() => alert('Exporting logistics table...')}
              className="text-[#00522d] text-xs font-bold hover:underline cursor-pointer"
            >
              Download Report
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#f4faff] text-[#556158]">
                <tr>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider">Reference</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider">Type</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider">Efficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bec9be]/20 text-sm">
                <tr className="hover:bg-[#f4faff] transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-[#0d1e25]">#UP-9421</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-[#0d1e25]">
                      <span className="material-symbols-outlined text-[#00522d] text-lg">recycling</span>
                      <span>Plastics</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="bg-[#2eb872]/20 text-[#00522d] px-3 py-1 rounded-full text-xs font-bold">
                      Processed
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="w-28 bg-[#d9e6da] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00522d] h-full w-[92%] rounded-full"></div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#f4faff] transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-[#0d1e25]">#UP-9425</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-[#0d1e25]">
                      <span className="material-symbols-outlined text-[#24502c] text-lg">compost</span>
                      <span>Organic</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="bg-[#9cf6ba] text-[#00210f] px-3 py-1 rounded-full text-xs font-bold">
                      In Transit
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="w-28 bg-[#d9e6da] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00522d] h-full w-[45%] rounded-full"></div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#f4faff] transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-[#0d1e25]">#UP-9428</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-[#0d1e25]">
                      <span className="material-symbols-outlined text-[#ba1a1a] text-lg">dangerous</span>
                      <span>Hazardous</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="bg-[#dff1fb] text-[#556158] px-3 py-1 rounded-full text-xs font-bold">
                      Pending
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="w-28 bg-[#d9e6da] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00522d] h-full w-[10%] rounded-full"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* District Goal Progress (4 Columns) */}
        <section className="col-span-12 lg:col-span-4 bg-white rounded-[28px] border border-[#bec9be]/30 p-6 flex flex-col shadow-sm">
          <h3 className="text-lg font-bold text-[#0d1e25] mb-5 tracking-tight">District Goals</h3>
          
          <div className="space-y-5 flex-1">
            <div>
              <div className="flex justify-between mb-1.5 text-xs font-bold">
                <span className="text-[#0d1e25]">Zero-Waste Target</span>
                <span className="text-[#00522d]">88%</span>
              </div>
              <div className="h-2.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-[#00522d] w-[88%] rounded-full transition-all"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5 text-xs font-bold">
                <span className="text-[#0d1e25]">Citizen Engagement</span>
                <span className="text-[#00522d]">62%</span>
              </div>
              <div className="h-2.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-[#2eb872] w-[62%] rounded-full transition-all"></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#9cf6ba]/30 border border-[#9cf6ba]">
            <p className="text-xs text-[#00210f] italic leading-relaxed">
              "Great job! Your district is among the top 5 in carbon reduction this quarter."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
