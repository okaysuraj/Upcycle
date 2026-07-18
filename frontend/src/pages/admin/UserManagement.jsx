import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import { authFetch } from '../../utils/authFetch';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch users from backend (assuming we have an admin endpoint)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // In a real app we would have an admin endpoint to fetch users
        // For now, simulating some mock data or basic fetching structure
        // const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/admin/users`);
        // const data = await res.json();
        
        // Mock data to match UI
        const data = [
          { id: 1, name: 'Julian Sterling', email: 'julian.s@upcycle.admin', role: 'Admin', status: 'Active', location: 'Main Site', initials: 'JS', bgColor: 'bg-[#c1ecd4]', textColor: 'text-[#002114]' },
          { id: 2, name: 'Elena Rodriguez', email: 'e.rodriguez@upcycle.admin', role: 'Moderator', status: 'Active', location: 'North Campus', initials: '', bgColor: 'bg-[#e7e8e9]', textColor: 'text-[#414844]' },
          { id: 3, name: 'Marcus Kross', email: 'm.kross@upcycle.admin', role: 'Auditor', status: 'Suspended', location: 'Global', initials: 'MK', bgColor: 'bg-[#ffdad6]', textColor: 'text-[#93000a]' },
          { id: 4, name: 'Sarah Liao', email: 's.liao@upcycle.admin', role: 'Moderator', status: 'Pending', location: 'Main Site', initials: 'SL', bgColor: 'bg-[#b1f0ce]', textColor: 'text-[#002114]' },
        ];
        
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Page Header & Actions */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs text-on-surface-variant mb-2">
            <span className="hover:underline cursor-pointer">Admin</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">User Management</span>
          </nav>
          <h2 className="font-display text-3xl font-bold text-primary">System Users</h2>
          <p className="text-sm text-on-surface-variant mt-1">Manage permissions, roles, and account statuses for the internal workforce.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary font-semibold rounded hover:bg-primary/5 transition-colors text-xs">
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded hover:opacity-90 transition-opacity text-xs">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Bento Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-[#c1c8c2] p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-on-surface-variant tracking-wider">Total Users</p>
            <span className="material-symbols-outlined text-primary">group</span>
          </div>
          <p className="text-3xl font-display font-bold text-primary">1,284</p>
          <p className="text-[11px] text-[#75b393] mt-1 flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +12% from last month
          </p>
        </div>
        
        <div className="bg-white border border-[#c1c8c2] p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-on-surface-variant tracking-wider">Active Now</p>
            <span className="material-symbols-outlined text-[#4c6452]">radio_button_checked</span>
          </div>
          <p className="text-3xl font-display font-bold text-primary">342</p>
          <div className="h-1 w-full bg-[#e7e8e9] rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-[#75b393] w-[70%]"></div>
          </div>
        </div>

        <div className="bg-white border border-[#c1c8c2] p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-on-surface-variant tracking-wider">Pending Approval</p>
            <span className="material-symbols-outlined text-[#ba1a1a]">pending_actions</span>
          </div>
          <p className="text-3xl font-display font-bold text-primary">18</p>
          <p className="text-[11px] text-[#ba1a1a] mt-1 flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-[14px]">priority_high</span>
            Requires immediate action
          </p>
        </div>

        <div className="bg-white border border-[#c1c8c2] p-4 rounded-xl overflow-hidden relative shadow-sm">
          <div className="relative z-10">
            <p className="text-xs font-bold text-on-surface-variant tracking-wider">System Reliability</p>
            <p className="text-3xl font-display font-bold text-primary mt-2">99.9%</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#f3f4f5] p-3 mb-1 border border-[#c1c8c2] rounded-t-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-[300px]">
          <div className="flex items-center gap-2 w-64 bg-white border border-[#c1c8c2] rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/20">
             <span className="material-symbols-outlined text-on-surface-variant">search</span>
             <input 
                type="text" 
                placeholder="Search users..." 
                className="bg-transparent border-none outline-none text-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#c1c8c2] rounded-lg text-sm">
            <span className="text-on-surface-variant font-medium">Role:</span>
            <select className="border-none bg-transparent outline-none p-0 text-primary font-bold pr-6 text-sm">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Moderator</option>
              <option>Auditor</option>
            </select>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#c1c8c2] rounded-lg text-sm">
            <span className="text-on-surface-variant font-medium">Status:</span>
            <select className="border-none bg-transparent outline-none p-0 text-primary font-bold pr-6 text-sm">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Suspended</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-[#c1c8c2] rounded-b-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-[#f3f4f5] border-b border-[#c1c8c2]">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="rounded-sm border-[#717973] text-primary focus:ring-primary" />
                </th>
                <th className="px-4 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider">User Profile</th>
                <th className="px-4 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Role</th>
                <th className="px-4 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Location</th>
                <th className="px-4 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c1c8c2]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#edeeef] transition-colors group">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded-sm border-[#717973] text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${user.bgColor} ${user.textColor} flex items-center justify-center font-bold text-xs`}>
                        {user.initials ? user.initials : <span className="material-symbols-outlined text-[20px]">person</span>}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">{user.name}</p>
                        <p className="text-xs text-on-surface-variant">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-bold text-primary">{user.role}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      user.status === 'Active' ? 'bg-[#cce6d0] text-[#354c3b]' :
                      user.status === 'Suspended' ? 'bg-[#ffdad6] text-[#93000a]' :
                      'bg-[#e1e3e4] text-[#414844]'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">location_on</span>
                      {user.location}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-4 py-8 text-center text-on-surface-variant">
                    No users found matching "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 bg-[#f3f4f5] border-t border-[#c1c8c2] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-on-surface-variant">
            <span>Showing 1-{filteredUsers.length} of 1,284 users</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 border border-[#c1c8c2] rounded hover:bg-white transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-xs font-bold">2</button>
            <span className="px-2">...</span>
            <button className="p-1 border border-[#c1c8c2] rounded hover:bg-white transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
