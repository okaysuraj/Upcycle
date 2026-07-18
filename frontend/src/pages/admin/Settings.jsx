import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function Settings() {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Page Header */}
      <div className="mb-8 mt-4 flex flex-col gap-1">
        <h2 className="font-display-sm text-[30px] font-bold text-primary">Settings</h2>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl">Configure your administrative workspace, manage security protocols, and personalize your system interaction experience.</p>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Profile Hero Card */}
        <Card className="col-span-12 lg:col-span-8 p-8 flex flex-col md:flex-row items-start gap-8 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
            <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
          </div>
          
          <div className="relative">
            <div className="w-32 h-32 rounded-xl bg-surface-container-highest border-4 border-surface shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-[64px] text-outline-variant">person</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg border-2 border-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <span className="bg-secondary-container text-on-secondary-container text-label-sm font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">System Administrator</span>
              <h3 className="font-headline-md text-2xl font-bold text-primary">Elena Richardson</h3>
              <p className="font-data-mono text-sm text-on-surface-variant">Admin ID: 8829-XJ-UPCYCLE</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/30 pt-4">
              <div>
                <p className="font-label-sm text-xs text-on-surface-variant opacity-80 font-bold uppercase">Access Level</p>
                <p className="font-label-md text-sm font-bold text-primary">Level 4 (Global)</p>
              </div>
              <div>
                <p className="font-label-sm text-xs text-on-surface-variant opacity-80 font-bold uppercase">Last Sign-in</p>
                <p className="font-label-md text-sm font-bold text-primary">2h 14m ago</p>
              </div>
              <div>
                <p className="font-label-sm text-xs text-on-surface-variant opacity-80 font-bold uppercase">Session Health</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <p className="font-label-md text-sm font-bold text-primary">Protected</p>
                </div>
              </div>
            </div>
            
            <div className="mt-2">
              <Button icon="edit">Edit Public Profile</Button>
            </div>
          </div>
        </Card>

        {/* Stats Quick Look */}
        <Card className="col-span-12 lg:col-span-4 flex flex-col justify-between shadow-sm p-6">
          <div className="flex justify-between items-start">
            <h4 className="font-label-md text-sm font-bold text-primary">Action Logs</h4>
            <span className="material-symbols-outlined text-on-surface-variant">history</span>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-primary rounded-full"></div>
              <div>
                <p className="text-body-sm text-sm font-bold text-on-surface">Updated User Permissions</p>
                <p className="text-label-sm text-xs text-on-surface-variant opacity-80">12:45 PM today</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-secondary-container rounded-full"></div>
              <div>
                <p className="text-body-sm text-sm font-bold text-on-surface">Resolved Content Flag #1029</p>
                <p className="text-label-sm text-xs text-on-surface-variant opacity-80">Yesterday, 4:30 PM</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-primary font-label-md text-sm font-bold flex items-center gap-1 hover:underline">
            View All Logs <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </Card>

        {/* Navigable Tiles (Grid) */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-4">
          <Card className="p-6 flex flex-col gap-6 group hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-xl font-bold text-primary mb-1">Account</h4>
              <p className="font-body-sm text-sm text-on-surface-variant">Update personal details, professional ID, and contact.</p>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col gap-6 group hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">notifications_active</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-xl font-bold text-primary mb-1">Notifications</h4>
              <p className="font-body-sm text-sm text-on-surface-variant">Set alert thresholds for system failures and triggers.</p>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col gap-6 group hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">shield_lock</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-xl font-bold text-primary mb-1">Security</h4>
              <p className="font-body-sm text-sm text-on-surface-variant">Manage 2FA, view active sessions, and rotate API keys.</p>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col gap-6 group hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">tune</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-xl font-bold text-primary mb-1">Preferences</h4>
              <p className="font-body-sm text-sm text-on-surface-variant">Customize UI density, language, and dark mode.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
