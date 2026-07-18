import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function AdminDashboard() {
  const { authFetch } = useAuth();
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
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
    fetchHealth();
  }, [authFetch]);

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">System Health</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Real-time infrastructure oversight and administrative queue.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" icon="download">Export Report</Button>
          <Button icon="refresh">Force Refresh</Button>
        </div>
      </div>

      {/* Summary Bento Grid */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Metrics Cards */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[80px]">groups</span>
          </div>
          <div>
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">Active Users</span>
            <div className="text-display-sm font-display-sm text-primary mt-1">
              {healthData?.stats?.userCount?.toLocaleString() || '...'}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-label-md font-label-md">+4.2% vs last 24h</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[80px]">pending_actions</span>
          </div>
          <div>
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">Pending Approvals</span>
            <div className="text-display-sm font-display-sm text-primary mt-1">156</div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-error">
            <span className="material-symbols-outlined text-[16px]">priority_high</span>
            <span className="text-label-md font-label-md">
              {healthData?.stats?.errorLogs || 0} Critical items
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[80px]">payments</span>
          </div>
          <div>
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">Campuses Supported</span>
            <div className="text-display-sm font-display-sm text-primary mt-1">
              {healthData?.stats?.campusCount || '...'}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[16px]">bar_chart</span>
            <span className="text-label-md font-label-md">On track for daily target</span>
          </div>
        </div>

        {/* Priority Actions */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col shadow-sm">
          <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
            <h3 className="text-headline-sm font-headline-sm text-primary">Priority Actions</h3>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-error-container text-on-error-container text-label-sm font-label-sm rounded uppercase">High Risk</span>
            </div>
          </div>
          <div className="p-0 flex-1">
            <div className="divide-y divide-outline-variant/20">
              <div className="p-4 hover:bg-surface-container transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-error-container">warning</span>
                  </div>
                  <div>
                    <p className="text-body-md font-body-md font-semibold">Stripe Webhook Latency Alert</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Response times exceeded 3000ms in EU-West-1</p>
                  </div>
                </div>
                <button className="text-label-md font-label-md text-primary font-bold hover:underline">Investigate</button>
              </div>
              <div className="p-4 hover:bg-surface-container transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">verified_user</span>
                  </div>
                  <div>
                    <p className="text-body-md font-body-md font-semibold">Merchant KYB Review Required</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">14 High-volume sellers pending identity verification</p>
                  </div>
                </div>
                <button className="text-label-md font-label-md text-primary font-bold hover:underline">Batch Process</button>
              </div>
              <div className="p-4 hover:bg-surface-container transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">database</span>
                  </div>
                  <div>
                    <p className="text-body-md font-body-md font-semibold">Inventory Sync Anomaly</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Desync detected in 'Global Home' category across 4 regions</p>
                  </div>
                </div>
                <button className="text-label-md font-label-md text-primary font-bold hover:underline">Sync Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Status Monitor Component */}
        <div className={`col-span-12 lg:col-span-4 ${healthData?.status === 'OK' ? 'bg-primary' : 'bg-error'} text-white rounded-xl p-6 flex flex-col shadow-sm`}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-headline-sm font-headline-sm">Operational Health</h3>
              <p className="text-body-sm opacity-70">Infrastructure & Microservices</p>
            </div>
            <div className={`w-3 h-3 rounded-full ${healthData?.status === 'OK' ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <div className="flex justify-between text-label-sm opacity-80">
                <span>API GATEWAY</span>
                <span>{healthData?.status === 'OK' ? '99.98%' : '85.20%'}</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: healthData?.status === 'OK' ? '99%' : '85%' }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-label-sm opacity-80">
                <span>DB READ REPLICAS</span>
                <span>99.42%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: '95%' }}></div>
              </div>
            </div>
            {healthData?.uptime && (
              <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-80">
                Uptime: {Math.floor(healthData.uptime / 3600)}h {Math.floor((healthData.uptime % 3600) / 60)}m
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
