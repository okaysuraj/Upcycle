import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function WasteDashboard() {
  const { authFetch } = useAuth();
  const [wasteData, setWasteData] = useState({
    totalDailyWasteKg: 142.8,
    recyclingRate: 64.2,
    criticalBins: [
      { id: 'BIN-104', location: 'Building A - North Annex', fillLevel: 96, category: 'PLASTIC' },
      { id: 'BIN-208', location: 'Dining Hall Courtyard', fillLevel: 92, category: 'ORGANIC' },
    ],
    totalBins: 48,
  });
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await authFetch('/waste/stats');
        if (statsRes.ok) {
          const stats = await statsRes.json();
          setWasteData(prev => ({
            ...prev,
            ...stats,
            totalDailyWasteKg: stats.totalDailyWasteKg || 142.8,
            recyclingRate: stats.recyclingRate || 64.2,
          }));
        }

        const logsRes = await authFetch('/waste/logs');
        if (logsRes.ok) {
          const logsData = await logsRes.json();
          setLogs(logsData.slice(0, 5));
        }
      } catch (err) {
        console.error("Error fetching waste data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Page Title and Quick Stats */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Operations & Fleet Oversight
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Operational Command Center</h2>
          <p className="text-sm text-[#556158] mt-1">Real-time waste stream telemetry, smart bin sensors & dispatch.</p>
        </div>
        <div className="flex gap-2.5">
          <Link 
            to="/operations/smart-bins/new"
            className="px-4 py-2.5 border border-[#bec9be]/50 bg-white hover:bg-[#e7f6ff] text-[#0d1e25] text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add_box</span>
            <span>Add Smart Bin</span>
          </Link>
          <Link 
            to="/operations/pickup-request/new"
            className="px-4 py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            <span>Dispatch Pickup</span>
          </Link>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* KPI 1: Daily Waste */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-[24px] p-6 border border-[#bec9be]/30 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#00522d] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-2xl">delete_sweep</span>
            </div>
            <span className="bg-[#2eb872]/20 text-[#00522d] px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> 12%
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#556158]">Total Daily Waste</p>
            <h3 className="text-3xl font-bold text-[#0d1e25] mt-0.5">
              {Number(wasteData.totalDailyWasteKg).toFixed(1)} <span className="text-sm font-normal text-[#556158]">Tons</span>
            </h3>
          </div>
        </div>

        {/* KPI 2: Recycling Rate */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-[24px] p-6 border border-[#bec9be]/30 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#00522d] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-2xl">recycling</span>
            </div>
            <span className="bg-[#2eb872]/20 text-[#00522d] px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +4.8%
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#556158]">Diversion & Recycling Rate</p>
            <h3 className="text-3xl font-bold text-[#00522d] mt-0.5">
              {wasteData.recyclingRate}% <span className="text-sm font-normal text-[#556158]">of gross</span>
            </h3>
          </div>
        </div>

        {/* Alert Panel: Bins at Capacity (6 Cols) */}
        <div className="col-span-12 lg:col-span-6 bg-white rounded-[24px] p-6 border border-[#bec9be]/30 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <div>
                <h4 className="font-bold text-[#0d1e25] text-base">Critical Capacity Alerts</h4>
                <p className="text-xs text-[#556158]">{wasteData.criticalBins?.length || 2} bins exceeding 90% threshold</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-bold rounded-full uppercase tracking-wider">
              Immediate Action
            </span>
          </div>

          <div className="space-y-3">
            {wasteData.criticalBins?.map((bin, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#f4faff] border border-[#bec9be]/30">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#ba1a1a]">{bin.id}</span>
                  <span className="text-xs text-[#0d1e25] font-semibold">{bin.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#ba1a1a]">{bin.fillLevel}% Full</span>
                  <Link to="/operations/pickup-request/new" className="px-3 py-1 bg-[#00522d] text-white rounded-lg text-[11px] font-bold hover:bg-[#003d21]">
                    Empty
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Material Stream Telemetry (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Recent Waste Telemetry Logs</h3>
              <p className="text-xs text-[#556158]">Automatic real-time weight sensor logging from connected municipal bins</p>
            </div>
            <Link to="/student/waste-logger" className="text-xs font-bold text-[#00522d] hover:underline">
              Manual Entry →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#f4faff] text-[#556158] text-xs">
                <tr>
                  <th className="px-4 py-3 font-bold uppercase">Timestamp</th>
                  <th className="px-4 py-3 font-bold uppercase">Stream Type</th>
                  <th className="px-4 py-3 font-bold uppercase">Net Weight</th>
                  <th className="px-4 py-3 font-bold uppercase">Logged By</th>
                  <th className="px-4 py-3 font-bold uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bec9be]/20 text-xs sm:text-sm">
                <tr className="hover:bg-[#f4faff]/60 transition-colors">
                  <td className="px-4 py-3 text-[#556158] font-mono">10:42 AM</td>
                  <td className="px-4 py-3 font-bold text-[#0d1e25]">Plastics & Polymers</td>
                  <td className="px-4 py-3 font-bold text-[#00522d]">42.5 kg</td>
                  <td className="px-4 py-3 text-[#556158]">Smart Sensor #04</td>
                  <td className="px-4 py-3">
                    <span className="bg-[#9cf6ba] text-[#00210f] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                      Verified
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#f4faff]/60 transition-colors">
                  <td className="px-4 py-3 text-[#556158] font-mono">09:15 AM</td>
                  <td className="px-4 py-3 font-bold text-[#0d1e25]">Bio & Compost</td>
                  <td className="px-4 py-3 font-bold text-[#24502c]">88.2 kg</td>
                  <td className="px-4 py-3 text-[#556158]">Cafeteria Staff</td>
                  <td className="px-4 py-3">
                    <span className="bg-[#9cf6ba] text-[#00210f] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                      Verified
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#f4faff]/60 transition-colors">
                  <td className="px-4 py-3 text-[#556158] font-mono">08:05 AM</td>
                  <td className="px-4 py-3 font-bold text-[#0d1e25]">Cardboard / Fibers</td>
                  <td className="px-4 py-3 font-bold text-[#00522d]">120.0 kg</td>
                  <td className="px-4 py-3 text-[#556158]">Facility Fleet</td>
                  <td className="px-4 py-3">
                    <span className="bg-[#dff1fb] text-[#556158] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet & Logistics Dispatch Summary (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-[#0d1e25] tracking-tight mb-4">Logistics & Route Status</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30">
                <div className="flex items-center justify-between mb-1 text-xs font-bold">
                  <span className="text-[#0d1e25]">Route Alpha (Campus North)</span>
                  <span className="text-[#00522d]">85% Complete</span>
                </div>
                <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00522d] w-[85%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-[#556158] mt-2">Driver: Marcus V. • Truck #02</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30">
                <div className="flex items-center justify-between mb-1 text-xs font-bold">
                  <span className="text-[#0d1e25]">Route Beta (South Labs)</span>
                  <span className="text-[#2eb872]">40% Complete</span>
                </div>
                <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <div className="h-full bg-[#2eb872] w-[40%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-[#556158] mt-2">Driver: Elena R. • Truck #05</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#bec9be]/20">
            <Link 
              to="/operations/route-optimization" 
              className="w-full py-2.5 bg-[#00522d] text-white rounded-full text-xs font-bold hover:bg-[#003d21] flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">route</span>
              <span>Open AI Route Optimizer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
