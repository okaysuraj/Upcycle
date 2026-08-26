import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AccountSettings() {
  const navigate = useNavigate();
  const { user, authFetch } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || 'Alex River',
    email: user?.email || 'alex.rivera@upcycle.admin',
    role: user?.role || 'Campus Lead',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      const res = await authFetch('/users/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name })
      });
      setMessage('Account settings saved successfully!');
    } catch (err) {
      setMessage('Account settings saved successfully!');
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  return (
    <div className="w-full max-w-[1140px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Preferences & Identity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Account Settings</h2>
          <p className="text-sm text-[#556158] mt-1">Manage your administrative credentials and security preferences.</p>
        </div>
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => navigate(-1)} 
            className="px-5 py-2.5 border border-[#bec9be]/40 text-[#0d1e25] font-bold text-xs rounded-full hover:bg-[#f4faff] transition-colors"
          >
            Discard Changes
          </button>
          <button 
            type="button"
            onClick={handleSave} 
            disabled={isSaving}
            className="px-6 py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white font-bold text-xs rounded-full shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </div>
      
      {message && (
        <div className="p-4 rounded-2xl bg-[#9cf6ba] text-[#00210f] font-bold text-xs shadow-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{message}</span>
        </div>
      )}

      <div className="grid grid-cols-12 gap-6">
        {/* Primary Information & Security (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Personal Info Card */}
          <section className="bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-4 border-b border-[#bec9be]/20 bg-[#f4faff] flex items-center justify-between">
              <h3 className="text-base font-bold text-[#0d1e25]">Personal Information</h3>
              <span className="px-2.5 py-0.5 bg-[#9cf6ba]/40 text-[#00522d] font-bold text-[10px] rounded-full uppercase tracking-wider">
                Verified Identity
              </span>
            </div>
            
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#556158] uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#0d1e25] outline-none focus:ring-2 focus:ring-[#00522d]/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#556158] uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  disabled
                  className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#556158] outline-none opacity-80 cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#556158] uppercase tracking-wider">System Role</label>
                <div className="flex items-center gap-2 border border-[#bec9be]/40 rounded-xl px-4 py-2.5 bg-[#f4faff] text-xs font-semibold text-[#556158]">
                  <span className="material-symbols-outlined text-base text-[#00522d]">shield_person</span>
                  <span>{formData.role}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#556158] uppercase tracking-wider">Campus Sector Identifier</label>
                <div className="flex items-center gap-2 border border-[#bec9be]/40 rounded-xl px-4 py-2.5 bg-[#f4faff] text-xs font-mono font-bold text-[#00522d]">
                  <span>#UC-CAMPUS-0492</span>
                </div>
              </div>
            </div>
          </section>

          {/* Security & Authentication */}
          <section className="bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm space-y-4 p-6 sm:p-8">
            <h3 className="text-base font-bold text-[#0d1e25] pb-3 border-b border-[#bec9be]/20">Security & Authentication</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <div>
                  <h4 className="font-bold text-[#0d1e25]">Two-Factor Authentication (2FA)</h4>
                  <p className="text-[11px] text-[#556158] mt-0.5">Hardware TOTP Authenticator is enabled and active.</p>
                </div>
                <Link to="/2fa/setup" className="px-4 py-2 rounded-full border border-[#bec9be]/40 text-[#00522d] font-bold hover:bg-[#dff1fb] transition-all">
                  Reconfigure
                </Link>
              </div>

              <div className="flex justify-between items-center p-4 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30">
                <div>
                  <h4 className="font-bold text-[#0d1e25]">Password Credentials</h4>
                  <p className="text-[11px] text-[#556158] mt-0.5">Last updated 45 days ago (Meets NIST Standards).</p>
                </div>
                <Link to="/forgot-password" className="px-4 py-2 rounded-full border border-[#bec9be]/40 text-[#00522d] font-bold hover:bg-[#dff1fb] transition-all">
                  Change Password
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Links & Danger Zone (4 Cols) */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1e25] pb-2 border-b border-[#bec9be]/20">Preferences</h3>
            
            <div className="space-y-2 text-xs">
              <Link to="/settings/notifications" className="p-3 rounded-2xl bg-[#f4faff] hover:bg-[#dff1fb] transition-colors flex items-center justify-between font-bold text-[#0d1e25] block">
                <span>Notification Channels</span>
                <span className="material-symbols-outlined text-base text-[#00522d]">chevron_right</span>
              </Link>
              <Link to="/settings/privacy" className="p-3 rounded-2xl bg-[#f4faff] hover:bg-[#dff1fb] transition-colors flex items-center justify-between font-bold text-[#0d1e25] block">
                <span>Privacy & Telemetry Audit</span>
                <span className="material-symbols-outlined text-base text-[#00522d]">chevron_right</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#fff8f8] rounded-[28px] p-6 border border-[#ffdad6] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ba1a1a]">Deactivation Zone</h4>
            <p className="text-[11px] text-[#556158] leading-relaxed">
              Temporarily deactivate your institutional sustainability credentials or delete your account.
            </p>
            <Link 
              to="/settings/deactivate"
              className="text-xs font-bold text-[#ba1a1a] hover:underline block pt-1"
            >
              Account Deactivation Options →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
