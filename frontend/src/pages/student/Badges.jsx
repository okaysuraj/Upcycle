import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function Badges() {
  const { user, authFetch } = useAuth();
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        if (!user?.id) return;
        const res = await authFetch(`/gamification/badges/${user.id}`);
        if (res.ok) {
          const data = await res.json();
          setBadges(data);
        }
      } catch (err) {
        console.error("Error fetching badges", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBadges();
  }, [authFetch, user]);

  // Mock available badges for the UI presentation
  const availableBadges = [
    { name: 'Eco Starter', desc: 'Recycle 5 items', icon: 'local_florist', color: 'bg-emerald-100 text-emerald-700', earned: true },
    { name: 'Zero Waste Hero', desc: 'Log 0 waste for a week', icon: 'compost', color: 'bg-amber-100 text-amber-700', earned: true },
    { name: 'Community Leader', desc: 'Host 3 events', icon: 'groups', color: 'bg-purple-100 text-purple-700', earned: false, progress: 66 },
    { name: 'Energy Saver', desc: 'Reduce consumption 20%', icon: 'bolt', color: 'bg-blue-100 text-blue-700', earned: false, progress: 10 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">My Eco Badges</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Unlock achievements and level up your sustainability profile.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {availableBadges.map((badge, idx) => (
          <div key={idx} className={`relative bg-surface-container-lowest border rounded-3xl p-6 text-center shadow-sm transition-transform hover:-translate-y-1 ${
            badge.earned ? 'border-primary/50 ring-1 ring-primary/20' : 'border-outline-variant/30 opacity-70 grayscale'
          }`}>
            {badge.earned && (
               <div className="absolute top-4 right-4 text-primary">
                 <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
               </div>
            )}
            
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${badge.color}`}>
              <span className="material-symbols-outlined text-5xl">{badge.icon}</span>
            </div>
            
            <h3 className="font-bold text-lg text-on-surface">{badge.name}</h3>
            <p className="text-sm text-on-surface-variant mt-1">{badge.desc}</p>
            
            {!badge.earned && (
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span>{badge.progress}%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${badge.progress}%` }}></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-surface-container-low rounded-3xl p-8 mt-12 flex items-center justify-between">
        <div>
           <h3 className="text-title-lg font-bold text-on-surface">Want to earn more?</h3>
           <p className="text-on-surface-variant mt-1">Check out active challenges and community tasks.</p>
        </div>
        <Button>View Challenges</Button>
      </div>
    </div>
  );
}
