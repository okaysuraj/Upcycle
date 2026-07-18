import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';

export default function AccountSettings() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || 'Alex Donovan',
    email: user?.email || 'alex.donovan@upcycle.admin',
    role: user?.role || 'Admin',
  });

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-primary mb-1">Account Settings</h2>
          <p className="text-secondary font-body-md">Manage your administrative credentials and security preferences.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Discard Changes</Button>
          <Button>Save Profile</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Primary Information & Security */}
        <div className="col-span-1 md:col-span-8 space-y-6">
          {/* Personal Info Card */}
          <Card className="overflow-hidden p-0 border border-[#c1c8c2]">
            <div className="px-6 py-4 border-b border-[#c1c8c2] bg-[#f3f4f5] flex items-center justify-between">
              <h3 className="text-xl font-bold text-on-surface">Personal Information</h3>
              <span className="px-2 py-1 bg-[#1b4332]/10 text-primary font-bold text-[10px] rounded uppercase tracking-widest">Verified Identity</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <Input 
                label="Full Name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <Input 
                label="Email Address" 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-secondary">Administrative Role</label>
                <div className="flex items-center gap-3 border border-[#c1c8c2] rounded-lg px-4 py-2 bg-[#f3f4f5] cursor-not-allowed">
                  <span className="material-symbols-outlined text-[18px] text-secondary">shield_person</span>
                  <span className="text-base text-on-surface">{formData.role}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-secondary">ID Number</label>
                <div className="flex items-center gap-3 border border-[#c1c8c2] rounded-lg px-4 py-2 bg-[#f3f4f5] cursor-not-allowed">
                  <span className="font-mono text-sm text-on-surface">#UC-4492</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Security Section */}
          <Card className="overflow-hidden p-0 border border-[#c1c8c2]">
            <div className="px-6 py-4 border-b border-[#c1c8c2] bg-[#f3f4f5]">
              <h3 className="text-xl font-bold text-on-surface">Security & Privacy</h3>
            </div>
            <div className="p-6 space-y-8">
              {/* Password Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#cce6d0] flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">key</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Password</p>
                    <p className="text-xs text-secondary">Last changed 4 months ago</p>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">Change Password</button>
              </div>
              <hr className="border-[#c1c8c2]" />
              
              {/* 2FA Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#cce6d0] flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Two-Factor Authentication (2FA)</p>
                    <p className="text-xs text-secondary">Adds an extra layer of security to your account.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#c1c8c2] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#012d1d]"></div>
                </label>
              </div>
              <hr className="border-[#c1c8c2]" />
              
              {/* Active Sessions */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-[20px]">devices</span>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-widest">Active Sessions</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#f3f4f5] border border-[#c1c8c2]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">smartphone</span>
                      <div>
                        <p className="text-sm font-bold text-on-surface">iPhone 15 Pro</p>
                        <p className="text-[10px] text-secondary uppercase tracking-wider">San Francisco, CA • Active Now</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-[#b1f0ce] text-[#002114] font-bold text-[10px] rounded">CURRENT</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#edeeef] border border-transparent">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">laptop_mac</span>
                      <div>
                        <p className="text-sm font-bold text-on-surface">MacBook Air M2</p>
                        <p className="text-[10px] text-secondary uppercase tracking-wider">Seattle, WA • 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-error font-bold text-[10px] uppercase hover:underline">Revoke</button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Ecosystems & Danger Zone */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          {/* Profile Card (Bento Style) */}
          <div className="relative overflow-hidden bg-primary p-6 rounded-xl text-white">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-white/20 mb-4 overflow-hidden bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <h4 className="text-xl font-bold">{formData.name}</h4>
              <p className="text-white/80 text-xs mb-4">Lead Systems Administrator</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase">Tier 1 Access</span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase">Internal</span>
              </div>
            </div>
          </div>

          {/* Linked Ecosystems */}
          <Card className="p-6 border border-[#c1c8c2]">
            <h3 className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-4">Linked Ecosystems</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-[#cce6d0]/30 border border-[#cce6d0] rounded-lg">
                <div className="w-10 h-10 rounded bg-[#cce6d0] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">cloud_sync</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-on-surface">Green-API Cloud</p>
                  <p className="text-xs text-secondary">Connected • Syncing Health</p>
                </div>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-[#c1c8c2] border-dashed rounded-lg opacity-60">
                <div className="w-10 h-10 rounded bg-[#edeeef] flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <p className="text-xs font-bold text-secondary">Connect New Ecosystem</p>
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-error-container/10 border border-error/20 p-6">
            <div className="flex items-center gap-2 mb-4 text-error">
              <span className="material-symbols-outlined text-[20px]">report</span>
              <h3 className="text-[10px] font-bold uppercase tracking-wider">Danger Zone</h3>
            </div>
            <p className="text-xs text-secondary mb-4 leading-relaxed">
              Once an account deactivation request is submitted, our system health monitors will begin a 7-day cooling-off period. Access will be limited.
            </p>
            <button 
              onClick={() => navigate('/deactivate')}
              className="w-full py-2 border border-error text-error text-sm font-bold rounded-lg hover:bg-error hover:text-white transition-all active:scale-95"
            >
              Request Account Deactivation
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
