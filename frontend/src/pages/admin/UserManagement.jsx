import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function UserManagement() {
  const { authFetch } = useAuth();
  const [users, setUsers] = useState([
    { id: 1, name: 'Julian Sterling', email: 'julian.s@upcycle.admin', role: 'System Admin', status: 'Active', location: 'Main Site', initials: 'JS', bgColor: 'bg-[#dff1fb]', textColor: 'text-[#00522d]' },
    { id: 2, name: 'Elena Rodriguez', email: 'e.rodriguez@upcycle.admin', role: 'Moderator', status: 'Active', location: 'North Campus', initials: 'ER', bgColor: 'bg-[#9cf6ba]/40', textColor: 'text-[#00210f]' },
    { id: 3, name: 'Marcus Kross', email: 'm.kross@upcycle.admin', role: 'Logistics Lead', status: 'Suspended', location: 'Global Fleet', initials: 'MK', bgColor: 'bg-[#ffdad6]', textColor: 'text-[#ba1a1a]' },
    { id: 4, name: 'Sarah Liao', email: 's.liao@upcycle.admin', role: 'ESG Auditor', status: 'Pending', location: 'Main Site', initials: 'SL', bgColor: 'bg-[#dff1fb]', textColor: 'text-[#00522d]' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Identity & Access Management
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">System Users & Roles</h2>
          <p className="text-sm text-[#556158] mt-1">Manage workforce accounts, assign granular permissions, and audit authentication.</p>
        </div>
        <div className="flex items-center gap-2.5">
          <button 
            type="button"
            onClick={() => alert('Exporting user roster CSV...')}
            className="flex items-center gap-1.5 px-4 py-2 border border-[#bec9be]/40 text-[#0d1e25] font-bold rounded-full hover:bg-[#f4faff] text-xs shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Export CSV</span>
          </button>
          <button 
            type="button"
            onClick={() => alert('Creating new system user invite...')}
            className="flex items-center gap-1.5 px-5 py-2 bg-[#00522d] text-white font-bold rounded-full hover:bg-[#003d21] text-xs shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>Invite User</span>
          </button>
        </div>
      </div>

      {/* Bento Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#bec9be]/30 p-5 rounded-[24px] shadow-sm space-y-1">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#556158] uppercase">Total Accounts</span>
            <span className="material-symbols-outlined text-[#00522d]">group</span>
          </div>
          <p className="text-3xl font-bold text-[#00522d]">1,284</p>
          <p className="text-[11px] text-[#2eb872] font-bold">+12% from last month</p>
        </div>
        
        <div className="bg-white border border-[#bec9be]/30 p-5 rounded-[24px] shadow-sm space-y-1">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#556158] uppercase">Active Concurrent</span>
            <span className="material-symbols-outlined text-[#2eb872]">radio_button_checked</span>
          </div>
          <p className="text-3xl font-bold text-[#0d1e25]">342</p>
          <p className="text-[11px] text-[#556158]">70% authenticated today</p>
        </div>

        <div className="bg-white border border-[#bec9be]/30 p-5 rounded-[24px] shadow-sm space-y-1">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#556158] uppercase">Pending Review</span>
            <span className="material-symbols-outlined text-[#ba1a1a]">pending_actions</span>
          </div>
          <p className="text-3xl font-bold text-[#ba1a1a]">18</p>
          <p className="text-[11px] text-[#ba1a1a] font-bold">Requires verification</p>
        </div>

        <div className="bg-white border border-[#bec9be]/30 p-5 rounded-[24px] shadow-sm space-y-1">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#556158] uppercase">MFA Enrolled</span>
            <span className="material-symbols-outlined text-[#00522d]">security</span>
          </div>
          <p className="text-3xl font-bold text-[#00522d]">99.4%</p>
          <p className="text-[11px] text-[#2eb872] font-bold">2FA enforced system-wide</p>
        </div>
      </div>

      {/* Search & Users Table */}
      <div className="bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm space-y-4 p-6">
        <div className="flex justify-between items-center pb-2">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#556158] text-base">search</span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or role..."
              className="w-full pl-10 pr-4 py-2 bg-[#f4faff] border border-[#bec9be]/40 rounded-full text-xs font-semibold text-[#0d1e25] outline-none focus:ring-2 focus:ring-[#00522d]/20"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#f4faff] text-[#556158] font-bold border-y border-[#bec9be]/20">
                <th className="px-6 py-3.5 text-left uppercase">User Profile</th>
                <th className="px-6 py-3.5 text-left uppercase">Assigned Role</th>
                <th className="px-6 py-3.5 text-left uppercase">Sector Node</th>
                <th className="px-6 py-3.5 text-left uppercase">Status</th>
                <th className="px-6 py-3.5 text-right uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#bec9be]/20">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-[#f4faff] transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${u.bgColor} ${u.textColor} flex items-center justify-center font-bold text-xs shadow-sm`}>
                      {u.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0d1e25]">{u.name}</p>
                      <p className="text-[11px] text-[#556158]">{u.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-[#00522d]">{u.role}</td>
                  <td className="px-6 py-4 text-[#556158] font-semibold">{u.location}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      u.status === 'Active' ? 'bg-[#9cf6ba]/40 text-[#00210f]' :
                      u.status === 'Pending' ? 'bg-[#dff1fb] text-[#00522d]' : 'bg-[#ffdad6] text-[#ba1a1a]'
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      type="button" 
                      onClick={() => alert(`Editing permissions for ${u.name}...`)}
                      className="p-1.5 hover:bg-[#dff1fb] rounded-lg text-[#00522d] transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">tune</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
