import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { authFetch } = useAuth();
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHealth = async () => {
    try {
      setLoading(true);
      const res = await authFetch('/admin/system-health');
      if (res.ok) {
        const data = await res.json();
        setHealthData(data);
      }
    } catch (err) {
      console.error("Error fetching system health:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Infrastructure & Operations Control
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">System Health</h2>
          <p className="text-sm text-[#556158] mt-1">Real-time infrastructure oversight, logs, and administrative queue.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => alert('Exporting admin report...')}
            className="px-4 py-2.5 border border-[#bec9be]/50 rounded-xl text-xs font-bold text-[#0d1e25] flex items-center gap-2 bg-white hover:bg-[#e7f6ff] transition-colors cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Export Report</span>
          </button>
          <button 
            onClick={fetchHealth}
            className="px-4 py-2.5 bg-[#00522d] text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#003d21] transition-all cursor-pointer shadow-sm"
          >
            <span className={`material-symbols-outlined text-[18px] ${loading ? 'animate-spin' : ''}`}>refresh</span>
            <span>Force Refresh</span>
          </button>
        </div>
      </div>

      {/* Summary Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Metric 1 */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-[#bec9be]/30 p-6 rounded-[24px] flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[80px] text-[#00522d]">groups</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Active Users</span>
            <div className="text-3xl sm:text-4xl font-bold text-[#00522d] mt-1 tracking-tight">
              {healthData?.stats?.userCount?.toLocaleString() || '12,842'}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#00522d]">
            <span className="material-symbols-outlined text-base">trending_up</span>
            <span>+4.2% vs last 24h</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-[#bec9be]/30 p-6 rounded-[24px] flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[80px] text-[#ba1a1a]">pending_actions</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Pending Approvals</span>
            <div className="text-3xl sm:text-4xl font-bold text-[#ba1a1a] mt-1 tracking-tight">
              {healthData?.stats?.pendingKyc || '156'}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#ba1a1a]">
            <span className="material-symbols-outlined text-base">priority_high</span>
            <span>{healthData?.stats?.errorLogs || 12} Critical KYC/RFP reviews</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-[#bec9be]/30 p-6 rounded-[24px] flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[80px] text-[#00522d]">corporate_fare</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Campuses Connected</span>
            <div className="text-3xl sm:text-4xl font-bold text-[#00522d] mt-1 tracking-tight">
              {healthData?.stats?.campusCount || '48'}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#00522d]">
            <span className="material-symbols-outlined text-base">domain_verification</span>
            <span>100% telemetry online</span>
          </div>
        </div>

        {/* Priority Action Table (8 Columns) */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-[#bec9be]/30 rounded-[24px] overflow-hidden flex flex-col shadow-sm">
          <div className="p-5 border-b border-[#bec9be]/30 flex justify-between items-center bg-[#f4faff]">
            <h3 className="text-base font-bold text-[#00522d] tracking-tight">Priority Queue & Action Items</h3>
            <span className="px-2.5 py-1 bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-bold rounded-full uppercase tracking-wider">
              Urgent Attention
            </span>
          </div>
          <div className="divide-y divide-[#bec9be]/20 text-sm">
            <div className="p-4 flex items-center justify-between hover:bg-[#f4faff]/60 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-lg">warning</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25] text-sm">Zurich District 4 Smart Bin Sensor Alert</h4>
                  <p className="text-xs text-[#556158]">Capacity at 98% for over 3 hours • Zone B</p>
                </div>
              </div>
              <Link 
                to="/staff/sensors" 
                className="px-3 py-1.5 bg-[#00522d] text-white rounded-lg text-xs font-bold hover:bg-[#003d21]"
              >
                Dispatch
              </Link>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-[#f4faff]/60 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-lg">badge</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25] text-sm">Vendor KYC Verification Batch</h4>
                  <p className="text-xs text-[#556158]">4 new recycling suppliers awaiting legal license verification</p>
                </div>
              </div>
              <Link 
                to="/admin/marketplace-moderation" 
                className="px-3 py-1.5 border border-[#00522d] text-[#00522d] rounded-lg text-xs font-bold hover:bg-[#00522d]/5"
              >
                Review
              </Link>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-[#f4faff]/60 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d9e6da] text-[#00522d] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-lg">monitoring</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25] text-sm">Monthly ESG Compliance Audit Sync</h4>
                  <p className="text-xs text-[#556158]">Automated quarterly report generated for municipal board</p>
                </div>
              </div>
              <Link 
                to="/sustainability/reports/monthly" 
                className="px-3 py-1.5 border border-[#bec9be]/60 text-[#0d1e25] rounded-lg text-xs font-bold hover:bg-white"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Server & DB Status (4 Columns) */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-[#bec9be]/30 rounded-[24px] p-6 flex flex-col shadow-sm">
          <h3 className="text-base font-bold text-[#0d1e25] mb-4 tracking-tight">Database & Microservices</h3>
          
          <div className="space-y-4 flex-1">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f4faff] border border-[#bec9be]/30">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2eb872] animate-pulse"></span>
                <span className="text-xs font-bold text-[#0d1e25]">PostgreSQL Cluster</span>
              </div>
              <span className="text-[11px] font-bold text-[#00522d]">Healthy (14ms)</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f4faff] border border-[#bec9be]/30">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2eb872] animate-pulse"></span>
                <span className="text-xs font-bold text-[#0d1e25]">IoT Telemetry Gateway</span>
              </div>
              <span className="text-[11px] font-bold text-[#00522d]">Connected (99.9%)</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f4faff] border border-[#bec9be]/30">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2eb872] animate-pulse"></span>
                <span className="text-xs font-bold text-[#0d1e25]">AI Optimizer Engine</span>
              </div>
              <span className="text-[11px] font-bold text-[#00522d]">Active (Model v2.4)</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#bec9be]/20 text-center">
            <Link to="/operations/smart-bins" className="text-xs font-bold text-[#00522d] hover:underline">
              View Complete System Diagnostics →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
