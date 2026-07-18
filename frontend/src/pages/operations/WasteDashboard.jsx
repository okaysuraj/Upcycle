import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function WasteDashboard() {
  const { authFetch } = useAuth();
  const [wasteData, setWasteData] = useState({
    totalDailyWasteKg: 0,
    recyclingRate: 0,
    criticalBins: [],
    totalBins: 0,
  });
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await authFetch('/waste/stats');
        if (statsRes.ok) {
          const stats = await statsRes.json();
          setWasteData(stats);
        }

        const logsRes = await authFetch('/waste/logs');
        if (logsRes.ok) {
          const logsData = await logsRes.json();
          setLogs(logsData.slice(0, 5)); // Just take top 5 recent logs for dashboard
        }
      } catch (err) {
        console.error("Error fetching waste data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  if (loading) {
    return <div className="p-8 text-center text-on-surface-variant font-bold">Loading dashboard...</div>;
  }

  return (
    <>
      {/* Page Title and Quick Stats */}
      <div className="flex justify-between items-end mb-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Operational Command Center</h2>
          <p className="text-body-lg text-on-surface-variant">Real-time waste stream optimization & fleet oversight.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-high px-4 py-2 rounded-xl flex items-center gap-3 shadow-sm">
            <span className="text-label-sm text-secondary uppercase font-bold">Total Bins</span>
            <span className="font-headline-md text-primary">{wasteData.totalBins}</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* KPI 1: Daily Waste */}
        <Card className="col-span-12 md:col-span-3 p-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center">
              <span className="material-symbols-outlined">delete_sweep</span>
            </div>
            <span className="text-success-container flex items-center text-label-sm font-bold">
              <span className="material-symbols-outlined text-sm">trending_up</span> --
            </span>
          </div>
          <div className="mt-md">
            <p className="text-label-md text-on-surface-variant">Total Daily Waste</p>
            <h3 className="text-[32px] font-bold text-on-surface">{wasteData.totalDailyWasteKg.toFixed(1)} <span className="text-body-md font-normal">kg</span></h3>
          </div>
        </Card>

        {/* KPI 2: Recycling Rate */}
        <Card className="col-span-12 md:col-span-3 p-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center">
              <span className="material-symbols-outlined">recycling</span>
            </div>
            <span className="text-success-container flex items-center text-label-sm font-bold">
              <span className="material-symbols-outlined text-sm">trending_up</span> --
            </span>
          </div>
          <div className="mt-md">
            <p className="text-label-md text-on-surface-variant">Recycling Rate</p>
            <h3 className="text-[32px] font-bold text-on-surface">{wasteData.recyclingRate} <span className="text-body-md font-normal">%</span></h3>
          </div>
        </Card>

        {/* Alert Panel: Bins at Capacity */}
        <Card className="col-span-12 md:col-span-6 p-md bg-error-container/20 border-error/20 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full -mr-16 -mt-16"></div>
          <div className="flex justify-between items-center mb-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-error text-white flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <h4 className="font-headline-md text-on-error-container font-bold">Critical Capacity Warning ({wasteData.criticalBins.length})</h4>
            </div>
            <button className="text-label-sm font-bold text-error underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {wasteData.criticalBins.length > 0 ? wasteData.criticalBins.slice(0,2).map(bin => (
              <div key={bin.id} className="bg-white/80 backdrop-blur-md p-sm flex items-center gap-4 rounded-xl shadow-sm border border-outline-variant/30">
                <div className="w-2 h-12 bg-error rounded-full"></div>
                <div>
                  <p className="font-bold text-on-surface">Location: {bin.location}</p>
                  <p className="text-label-sm text-on-surface-variant">Bin {bin.id.substring(0,4)} &gt; {bin.fillLevel}% Capacity</p>
                </div>
              </div>
            )) : (
              <div className="col-span-2 text-on-surface-variant italic">No critical bins at the moment.</div>
            )}
          </div>
        </Card>

        {/* Log Book Table Section */}
        <Card className="col-span-12 overflow-hidden p-0 flex flex-col">
          <div className="p-md border-b border-outline-variant/30 flex justify-between items-center">
            <div>
              <h4 className="font-headline-md text-on-surface">Operational Log Book</h4>
              <p className="text-label-sm text-on-surface-variant">Comprehensive history of bin status and collection activity.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" icon="filter_list">Filter</Button>
              <Button variant="outline" icon="download">Export CSV</Button>
            </div>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-md py-4 text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Timestamp</th>
                <th className="px-md py-4 text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">User</th>
                <th className="px-md py-4 text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Category</th>
                <th className="px-md py-4 text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Quantity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-surface-ice transition-colors">
                  <td className="px-md py-4 text-body-md">{new Date(log.date).toLocaleString()}</td>
                  <td className="px-md py-4 font-bold text-primary">{log.user?.name || 'Unknown'}</td>
                  <td className="px-md py-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-label-sm font-bold">{log.category}</span>
                  </td>
                  <td className="px-md py-4 font-bold text-on-surface">{log.quantityKg} kg</td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-md py-4 text-center text-on-surface-variant">No logs found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
