import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function ImpactAnalytics() {
  const { user, authFetch } = useAuth();
  const [profile, setProfile] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [meRes, leadRes] = await Promise.all([
          authFetch('/auth/me'),
          authFetch('/gamification/leaderboard')
        ]);
        
        if (meRes.ok) setProfile(await meRes.json());
        if (leadRes.ok) setLeaderboard(await leadRes.json());
      } catch (err) {
        console.error("Error fetching impact data", err);
      }
    };
    fetchData();
  }, [authFetch]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">My Impact</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Track your sustainability contributions and eco-footprint.</p>
        </div>
        <Button icon="share">Share Impact</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-sm col-span-1 md:col-span-2 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
             <span className="material-symbols-outlined text-[200px]">public</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-headline-sm font-bold mb-8">Lifetime Contributions</h3>
            <div className="flex gap-12">
              <div>
                <p className="text-sm opacity-80 uppercase tracking-wider mb-1">Eco Points</p>
                <p className="text-5xl font-black">{profile?.points || user?.points || 0}</p>
              </div>
              <div>
                <p className="text-sm opacity-80 uppercase tracking-wider mb-1">Waste Diverted</p>
                <p className="text-5xl font-black">42 <span className="text-2xl">kg</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-4xl">emoji_events</span>
          </div>
          <h3 className="text-title-lg font-bold text-on-surface mb-1">Campus Rank</h3>
          <p className="text-display-sm font-black text-secondary">
            #{leaderboard.findIndex(u => u.id === user?.id) !== -1 ? leaderboard.findIndex(u => u.id === user?.id) + 1 : '--'}
          </p>
          <p className="text-sm text-on-surface-variant mt-2">Top 10% this month!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
          <h3 className="text-title-lg font-bold text-on-surface mb-6">Recent Activities</h3>
          <div className="space-y-6">
            {[
              { title: 'Campus Clean-up', points: '+50', date: '2 days ago', icon: 'volunteer_activism' },
              { title: 'Recycled Electronics', points: '+120', date: '1 week ago', icon: 'recycling' },
              { title: 'Attended Sustainability Seminar', points: '+30', date: '2 weeks ago', icon: 'school' }
            ].map((act, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">{act.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{act.title}</p>
                    <p className="text-sm text-on-surface-variant">{act.date}</p>
                  </div>
                </div>
                <span className="font-bold text-emerald-600">{act.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-title-lg font-bold text-on-surface">Top 5 Leaderboard</h3>
             <a href="/community/leaderboard" className="text-primary font-bold text-sm hover:underline">View All</a>
           </div>
           <div className="space-y-4">
             {leaderboard.slice(0, 5).map((lUser, idx) => (
               <div key={lUser.id} className={`flex justify-between items-center p-4 rounded-xl ${
                 lUser.id === user?.id ? 'bg-primary-container text-on-primary-container' : 'hover:bg-surface-container-low transition-colors'
               }`}>
                 <div className="flex items-center gap-4">
                   <span className="font-black text-xl opacity-50 w-6 text-center">{idx + 1}</span>
                   <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold">
                     {lUser.name?.charAt(0) || 'U'}
                   </div>
                   <p className="font-bold">{lUser.name}</p>
                 </div>
                 <span className="font-bold">{lUser.points} pts</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
