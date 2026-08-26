import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotificationSettings() {
  const [masterAlerts, setMasterAlerts] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            System Alerts & Routing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Notification Settings</h2>
          <p className="text-sm text-[#556158] mt-1">Configure real-time telemetry dispatch, weekly digests, and critical incident alerts.</p>
        </div>
      </div>

      {/* Global Toggle Banner */}
      <div className="bg-white border border-[#bec9be]/30 p-6 rounded-[28px] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#dff1fb] rounded-2xl flex items-center justify-center text-[#00522d] shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-2xl">notifications_active</span>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0d1e25]">Master System Alert Switch</h3>
            <p className="text-xs text-[#556158] mt-0.5">Globally toggle automated notification dispatch across all connected devices.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMasterAlerts(!masterAlerts)}
          className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 cursor-pointer ${
            masterAlerts ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
          }`}
        >
          <div className={`w-6 h-6 rounded-full bg-white transition-transform duration-200 ${
            masterAlerts ? 'translate-x-6' : 'translate-x-0'
          }`}></div>
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Notification Channels (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white border border-[#bec9be]/30 rounded-[28px] overflow-hidden shadow-sm">
            <div className="bg-[#f4faff] px-6 py-4 border-b border-[#bec9be]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#556158]">Active Notification Channels</h4>
            </div>
            
            <div className="divide-y divide-[#bec9be]/20 text-xs">
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00522d] text-xl">phonelink_ring</span>
                  <div>
                    <h5 className="font-bold text-sm text-[#0d1e25]">Desktop & Browser Push</h5>
                    <p className="text-[11px] text-[#556158]">Immediate alerts while active in the Upcycle operations suite.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPushEnabled(!pushEnabled)}
                  className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                    pushEnabled ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    pushEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00522d] text-xl">mark_email_read</span>
                  <div>
                    <h5 className="font-bold text-sm text-[#0d1e25]">Weekly ESG & Impact Digest</h5>
                    <p className="text-[11px] text-[#556158]">Delivered every Monday morning to registered institutional email.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEmailEnabled(!emailEnabled)}
                  className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                    emailEnabled ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    emailEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00522d] text-xl">sms</span>
                  <div>
                    <h5 className="font-bold text-sm text-[#0d1e25]">Critical SMS & Bin Overflow Pagers</h5>
                    <p className="text-[11px] text-[#556158]">Direct SMS broadcast when smart bins reach 90%+ volume capacity.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSmsEnabled(!smsEnabled)}
                  className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                    smsEnabled ? 'bg-[#00522d]' : 'bg-[#bec9be]/50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    smsEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Hours & Delivery Policy (4 Cols) */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1e25] pb-2 border-b border-[#bec9be]/20">Quiet Hours</h3>
            <p className="text-xs text-[#556158] leading-relaxed">
              Mute non-critical notifications outside campus operating hours (20:00 - 07:00).
            </p>
            <div className="p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30 text-xs font-bold text-[#00522d] flex items-center gap-2">
              <span className="material-symbols-outlined text-base">bedtime</span>
              <span>Enabled: 8:00 PM – 7:00 AM</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
