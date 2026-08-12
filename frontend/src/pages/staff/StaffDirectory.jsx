import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function StaffDirectory() {
  const { authFetch } = useAuth();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await authFetch('/auth/volunteers'); // Fetches all non-platform admin users
        if (res.ok) {
          const data = await res.json();
          setStaff(data);
        }
      } catch (err) {
        console.error("Error fetching staff directory", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStaff();
  }, [authFetch]);

  const filteredStaff = staff.filter(s => 
    s.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Workforce Directory</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Manage maintenance staff, volunteers, and vendors.</p>
        </div>
        <Button icon="person_add">Invite Member</Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-3 text-on-surface-variant">search</span>
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <Button icon="filter_list" className="bg-surface-container-low text-on-surface hover:bg-surface-container">Filter</Button>
      </div>

      {loading ? (
        <p>Loading directory...</p>
      ) : (
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-label-md uppercase border-b border-outline-variant/30">
                <th className="p-5 font-bold">Member</th>
                <th className="p-5 font-bold">Role</th>
                <th className="p-5 font-bold">Skills</th>
                <th className="p-5 font-bold">Availability</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredStaff.map(member => (
                <tr key={member.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                        {member.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{member.name}</p>
                        <p className="text-sm text-on-surface-variant">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      member.role === 'STAFF' ? 'bg-secondary-container text-on-secondary-container' : 
                      member.role === 'VENDOR' ? 'bg-tertiary-container text-on-tertiary-container' : 
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {member.role || 'VOLUNTEER'}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-wrap gap-1">
                      {member.skills && member.skills.length > 0 ? member.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-surface-container border border-outline-variant/30 rounded-md text-xs">{skill}</span>
                      )) : <span className="text-on-surface-variant text-sm italic">None listed</span>}
                    </div>
                  </td>
                  <td className="p-5 text-sm font-medium text-on-surface-variant">
                    {member.availabilityHours} hrs/wk
                  </td>
                  <td className="p-5 text-right">
                    <button className="text-on-surface-variant hover:text-primary transition-colors p-2">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredStaff.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">No members found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
