import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LeaderboardRewards() {
  const { authFetch, user } = useAuth();
  const [leaderboard, setLeaderboard] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGamificationData = async () => {
      try {
        const [leaderboardRes, rewardsRes] = await Promise.all([
          authFetch('/gamification/leaderboard'),
          authFetch('/gamification/rewards')
        ]);
        
        if (leaderboardRes.ok) {
          const lData = await leaderboardRes.json();
          setLeaderboard(lData);
        }
        if (rewardsRes.ok) {
          const rData = await rewardsRes.json();
          setRewards(rData);
        }
      } catch (err) {
        console.error("Failed to fetch gamification data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGamificationData();
  }, [authFetch]);

  const handleRedeem = async (rewardId) => {
    try {
      const res = await authFetch('/gamification/redeem', {
        method: 'POST',
        body: JSON.stringify({ rewardId })
      });
      if (res.ok) {
        alert("Reward redeemed successfully!");
        // Optimistically reload page or update user state
        window.location.reload();
      } else {
        const error = await res.json();
        alert(`Failed: ${error.message}`);
      }
    } catch (err) {
      console.error("Failed to redeem reward:", err);
    }
  };

  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-10">
      {/* Top Section: Status & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* User Status Card (Bento Style) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-white to-surface-container-low border border-outline-variant/30 rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <span className="bg-secondary-container text-secondary px-3 py-1 rounded-full font-label-sm uppercase tracking-widest font-bold">Your Status</span>
              <h2 className="font-display text-display-sm text-primary mt-3 font-bold">Points: {user?.points || 0}</h2>
            </div>
            <div className="bg-primary-container text-primary h-14 w-14 rounded-full flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
          </div>
          
          <div className="mt-auto relative z-10">
            <div className="flex justify-between items-end mb-2">
              <p className="font-label-md text-on-surface-variant font-bold">Next Milestone: <span className="font-bold text-primary">Eco-Guardian</span></p>
              <p className="font-label-md text-primary font-bold">{user?.points || 0} / 1000 pts</p>
            </div>
            <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${Math.min(((user?.points || 0) / 1000) * 100, 100)}%` }}></div>
            </div>
            <p className="text-label-sm text-on-surface-variant mt-4 italic flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-[16px]">info</span>
              Keep contributing to unlock exclusive rewards.
            </p>
          </div>
        </div>
        
        {/* Summary Metrics */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          <div className="bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-[24px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-tertiary/10 text-tertiary rounded-xl">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <p className="font-label-md font-bold text-on-surface-variant">Total Impact</p>
            </div>
            <div>
              <p className="font-display text-headline-lg font-bold text-on-surface">{user?.points || 0} <span className="text-label-md font-normal text-on-surface-variant">pts</span></p>
              <p className="text-label-sm text-green-600 flex items-center gap-1 mt-1 font-bold">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> Top 10% on campus
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-[24px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <p className="font-label-md font-bold text-on-surface-variant">Redeemable</p>
            </div>
            <div>
              <p className="font-display text-headline-lg font-bold text-on-surface">{user?.points || 0} <span className="text-label-md font-normal text-on-surface-variant">credits</span></p>
              <button className="mt-4 text-primary font-bold font-label-md flex items-center gap-1 hover:underline group">
                Browse Store <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Section: Leaderboard & Store */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: Impact Ranking Table */}
        <section className="lg:col-span-8 bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden shadow-sm flex flex-col h-full">
          <div className="p-6 md:p-8 border-b border-outline-variant/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="font-display text-headline-md font-bold text-on-surface">Impact Ranking</h3>
              <p className="text-label-md text-on-surface-variant mt-1">Top contributors across the university ecosystem</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest text-on-surface-variant font-label-sm border-b border-outline-variant/30">
                  <th className="p-4 font-bold pl-8">Rank</th>
                  <th className="p-4 font-bold">User</th>
                  <th className="p-4 font-bold">Role</th>
                  <th className="p-4 font-bold text-right pr-8">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {loading ? (
                  <tr><td colSpan="4" className="text-center p-8 text-on-surface-variant">Loading leaderboard...</td></tr>
                ) : leaderboard.length === 0 ? (
                  <tr><td colSpan="4" className="text-center p-8 text-on-surface-variant">No rankings available yet.</td></tr>
                ) : (
                  leaderboard.map((u, index) => (
                    <tr key={u.id} className="hover:bg-primary/5 transition-colors group cursor-pointer">
                      <td className="p-4 pl-8">
                        {index === 0 ? (
                          <span className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold text-sm">1</span>
                        ) : index === 1 ? (
                          <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm">2</span>
                        ) : index === 2 ? (
                          <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">3</span>
                        ) : (
                          <span className="w-8 h-8 flex items-center justify-center font-bold text-sm text-on-surface-variant">{index + 1}</span>
                        )}
                      </td>
                      <td className="p-4 font-bold text-on-surface">{u.name || 'Anonymous'}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-surface-variant text-on-surface rounded text-xs font-bold">{u.role}</span>
                      </td>
                      <td className="p-4 text-right pr-8">
                        <span className="font-bold text-primary">{u.points || 0}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Right: Rewards Store Highlights */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm font-bold text-on-surface">Rewards Store</h3>
              <span className="material-symbols-outlined text-outline">storefront</span>
            </div>
            
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-4 text-on-surface-variant">Loading rewards...</div>
              ) : rewards.length === 0 ? (
                <div className="text-center py-4 text-on-surface-variant">No rewards available.</div>
              ) : (
                rewards.map((reward) => (
                  <div key={reward.id} className={`border border-outline-variant/30 rounded-2xl p-4 transition-colors flex gap-4 ${user?.points >= reward.pointsCost ? 'hover:border-primary/50 hover:bg-primary/5 cursor-pointer group' : 'bg-surface-container-lowest opacity-60'}`}>
                    <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-2xl">redeem</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-bold text-on-surface text-sm">{reward.name}</h4>
                      <p className="text-xs text-on-surface-variant mb-2 truncate">{reward.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-primary font-bold text-sm">{reward.pointsCost} pts</span>
                        {user?.points >= reward.pointsCost ? (
                          <button onClick={() => handleRedeem(reward.id)} className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Redeem</button>
                        ) : (
                          <span className="material-symbols-outlined text-outline text-[16px]">lock</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
