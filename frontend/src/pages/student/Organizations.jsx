import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function Organizations() {
  const { authFetch } = useAuth();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await authFetch('/community/groups');
        if (res.ok) {
          const data = await res.json();
          setGroups(data);
        }
      } catch (err) {
        console.error("Error fetching organizations", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, [authFetch]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Student Organizations</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Join eco-clubs and campus sustainability groups.</p>
        </div>
        <Button icon="add_circle">Start a Group</Button>
      </div>

      <div className="flex gap-4 border-b border-outline-variant/30 overflow-x-auto scroll-hide">
        {['All Groups', 'My Memberships', 'Recommended'].map(tab => (
          <button 
            key={tab}
            className={`pb-4 px-4 font-bold whitespace-nowrap border-b-2 transition-colors ${
              tab === 'All Groups' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading organizations...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {groups.map(group => (
            <div key={group.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-32 bg-primary-container relative">
                {group.imageUrl ? (
                  <img src={group.imageUrl} alt={group.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="material-symbols-outlined text-[80px] text-primary">groups</span>
                  </div>
                )}
                <div className="absolute -bottom-6 left-6 w-16 h-16 bg-surface-container-lowest rounded-2xl border-4 border-surface shadow-sm flex items-center justify-center font-bold text-xl text-primary">
                  {group.name.charAt(0)}
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-1">
                <h3 className="font-bold text-title-lg text-on-surface mb-1">{group.name}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">{group.description}</p>
                
                <div className="flex justify-between items-center mt-auto border-t border-outline-variant/20 pt-4">
                  <span className="flex items-center gap-1 text-sm font-bold text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">person</span> {group._count?.members || 0} Members
                  </span>
                  <button className="text-primary font-bold hover:bg-primary-container px-4 py-2 rounded-xl transition-colors">Join</button>
                </div>
              </div>
            </div>
          ))}
          {groups.length === 0 && (
             <div className="col-span-full py-12 text-center text-on-surface-variant">
               No organizations found. Be the first to start one!
             </div>
          )}
        </div>
      )}
    </div>
  );
}
