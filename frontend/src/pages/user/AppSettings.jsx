import React, { useState } from 'react';

export default function AppSettings() {
  const [biometric, setBiometric] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [milestones, setMilestones] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="flex flex-col gap-md">
      <div className="mb-lg">
        <h2 className="font-display font-bold text-headline-lg text-on-surface">App Settings</h2>
        <p className="font-body-md text-on-surface-variant">Manage your account preferences and security protocols.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Column 1: Profile Summary & Privacy */}
        <div className="lg:col-span-7 flex flex-col gap-gutter">
          {/* Profile Summary Card */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-md flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-md text-center sm:text-left">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-surface-container object-cover bg-primary-container text-on-primary-container flex items-center justify-center font-display text-2xl font-bold">
                  JR
                </div>
                <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-1 rounded-full shadow-lg border-2 border-white hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Julian Rivers</h3>
                <p className="font-body-md text-on-surface-variant">j.rivers@citycoord.gov</p>
                <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">Premium Account</span>
                  <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">HQ Access</span>
                </div>
              </div>
            </div>
            <button className="w-full sm:w-auto px-md py-2 border border-outline text-primary rounded-full font-label-md text-label-md hover:bg-primary/5 transition-colors font-bold">
              View Profile
            </button>
          </div>

          {/* Privacy & Security Bento */}
          <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-md border border-outline-variant/30 shadow-sm">
            <div className="flex items-center gap-2 mb-md text-primary">
              <span className="material-symbols-outlined">shield</span>
              <h4 className="font-headline-md text-[20px]">Privacy & Security</h4>
            </div>
            <div className="space-y-4">
              {/* Security Row */}
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md font-bold text-on-surface">Account Password</p>
                    <p className="text-xs text-on-surface-variant">Last updated 3 months ago</p>
                  </div>
                </div>
                <button className="text-primary font-label-md text-label-md group-hover:underline font-bold">Change</button>
              </div>
              {/* Biometric Toggle */}
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined">fingerprint</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md font-bold text-on-surface">Biometric Login</p>
                    <p className="text-xs text-on-surface-variant">Use FaceID or Fingerprint to unlock</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={biometric} onChange={() => setBiometric(!biometric)} />
                  <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-md border border-outline-variant/30 shadow-sm mt-2">
            <div className="flex items-center gap-2 mb-md text-primary">
              <span className="material-symbols-outlined">language</span>
              <h4 className="font-headline-md text-[20px]">Region & Language</h4>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="font-label-sm font-bold text-on-surface-variant px-1">Language</label>
                <select className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                  <option>English (US)</option>
                  <option>Spanish (ES)</option>
                  <option>French (FR)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Notifications & Preferences */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
          {/* Notification Preferences */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-md shadow-sm h-full">
            <div className="flex items-center gap-2 mb-md text-tertiary">
              <span className="material-symbols-outlined">notifications_active</span>
              <h4 className="font-headline-md text-[20px]">Notifications</h4>
            </div>
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="max-w-[80%]">
                  <p className="font-label-md text-label-md font-bold text-on-surface">Reminders</p>
                  <p className="text-sm text-on-surface-variant">Daily alerts for scheduled waste pickups and reports.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={reminders} onChange={() => setReminders(!reminders)} />
                  <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-start justify-between">
                <div className="max-w-[80%]">
                  <p className="font-label-md text-label-md font-bold text-on-surface">Impact Milestones</p>
                  <p className="text-sm text-on-surface-variant">Get notified when your city hits a recycling target.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={milestones} onChange={() => setMilestones(!milestones)} />
                  <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-start justify-between">
                <div className="max-w-[80%]">
                  <p className="font-label-md text-label-md font-bold text-on-surface">Marketing & Offers</p>
                  <p className="text-sm text-on-surface-variant">Occasional emails about new features.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={marketing} onChange={() => setMarketing(!marketing)} />
                  <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="pt-4 border-t border-outline-variant/30 mt-4">
                <button className="text-error font-bold font-label-md hover:underline w-full text-left">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
