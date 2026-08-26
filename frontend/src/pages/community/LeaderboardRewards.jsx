import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function LeaderboardRewards() {
  const { authFetch, user } = useAuth();
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Elena Rostova', department: 'Environmental Science', points: 3420, avatar: 'ER', badge: 'Campus Legend' },
    { rank: 2, name: 'Marcus Chen', department: 'Computer Science', points: 2890, avatar: 'MC', badge: 'Zero Waste Hero' },
    { rank: 3, name: 'Aaliyah Patel', department: 'Architecture', points: 2450, avatar: 'AP', badge: 'Energy Champion' },
    { rank: 4, name: 'Alex Rivera (You)', department: 'Sustainability Lead', points: 1240, avatar: 'AR', badge: 'Eco-Advocate' },
    { rank: 5, name: 'David Kim', department: 'Civil Engineering', points: 1180, avatar: 'DK', badge: 'Compost Master' }
  ]);
  const [rewards, setRewards] = useState([
    { id: '1', name: 'Campus Coffee Reusable Cup', cost: 300, stock: 'Available', icon: 'local_cafe' },
    { id: '2', name: 'Solar Phone Powerbank', cost: 800, stock: '12 Left', icon: 'solar_power' },
    { id: '3', name: 'Annual Green Commute Pass', cost: 1500, stock: '5 Left', icon: 'directions_bus' }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGamificationData = async () => {
      try {
        const [leaderboardRes, rewardsRes] = await Promise.all([
          authFetch('/gamification/leaderboard'),
          authFetch('/gamification/rewards')
        ]);
        
        if (leaderboardRes.ok) {
          const lData = await leaderboardRes.json();
          if (lData && lData.length > 0) {
            setLeaderboard(lData.map((u, i) => ({
              rank: i + 1,
              name: u.name || 'Student Member',
              department: u.department || 'Campus Community',
              points: u.points || 0,
              avatar: (u.name || 'Eco').substring(0, 2).toUpperCase(),
              badge: i === 0 ? 'Campus Legend' : i === 1 ? 'Zero Waste Hero' : 'Eco-Advocate'
            })));
          }
        }
        if (rewardsRes.ok) {
          const rData = await rewardsRes.json();
          if (rData && rData.length > 0) {
            setRewards(rData);
          }
        }
      } catch (err) {
        console.error("Failed to fetch gamification data:", err);
      }
    };
    fetchGamificationData();
  }, [authFetch]);

  const handleRedeem = (rewardName, cost) => {
    alert(`Successfully redeemed "${rewardName}" for ${cost} Eco-Points! Check your email for pickup instructions.`);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Campus Climate Gamification
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Leaderboard & Eco-Rewards</h1>
          <p className="text-sm text-[#556158] mt-1">Earn points for waste sorting, composting, and zero-emission transit.</p>
        </div>
      </div>

      {/* Top Status Bento */}
      <div className="grid grid-cols-12 gap-6">
        {/* User Rank Card (5 Cols) */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-[#dff1fb] text-[#00522d] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Your Campus Rank
              </span>
              <h2 className="text-4xl font-bold text-[#0d1e25] mt-3">Rank #4</h2>
              <p className="text-xs text-[#556158] mt-1">1,240 Eco-Points Balance</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#00522d] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-[#556158]">Next Tier: Eco-Legend</span>
              <span className="text-[#00522d]">1,240 / 2,000 pts</span>
            </div>
            <div className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#00522d] rounded-full" style={{ width: '62%' }}></div>
            </div>
            <p className="text-[11px] text-[#556158] italic pt-1">
              Top 5% contributor in central campus this month.
            </p>
          </div>
        </div>

        {/* Impact Highlights (7 Cols) */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9cf6ba]/40 text-[#00210f] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">eco</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#556158] uppercase tracking-wider">Total Avoided Carbon</p>
              <h3 className="text-3xl font-bold text-[#00522d] mt-1">42.8 kg</h3>
              <p className="text-xs text-[#2eb872] font-bold mt-1">+12.4% vs last month</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">redeem</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#556158] uppercase tracking-wider">Rewards Claimed</p>
              <h3 className="text-3xl font-bold text-[#0d1e25] mt-1">6 Rewards</h3>
              <p className="text-xs text-[#556158] font-bold mt-1">2 vouchers ready for pickup</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Leaderboard Table (8 Cols) & Rewards Store (4 Cols) */}
      <div className="grid grid-cols-12 gap-6">
        {/* Leaderboard Table (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#bec9be]/20 flex justify-between items-center bg-[#f4faff]">
            <h3 className="text-lg font-bold text-[#0d1e25] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00522d]">trophy</span>
              Top Campus Climate Advocates
            </h3>
            <span className="text-xs font-bold text-[#00522d] bg-[#dff1fb] px-3 py-1 rounded-full">
              October 2024 Cycle
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#f4faff]/50 text-[#556158] font-bold border-b border-[#bec9be]/20">
                  <th className="px-6 py-3.5 text-left uppercase">Rank & Name</th>
                  <th className="px-6 py-3.5 text-left uppercase">Department</th>
                  <th className="px-6 py-3.5 text-left uppercase">Achievement Badge</th>
                  <th className="px-6 py-3.5 text-right uppercase">Eco-Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bec9be]/20">
                {leaderboard.map((userRow) => (
                  <tr 
                    key={userRow.rank} 
                    className={`hover:bg-[#f4faff] transition-colors ${
                      userRow.rank === 4 ? 'bg-[#dff1fb]/30 font-bold' : ''
                    }`}
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        userRow.rank === 1 ? 'bg-[#00522d] text-white' :
                        userRow.rank === 2 ? 'bg-[#24502c] text-white' :
                        userRow.rank === 3 ? 'bg-[#2eb872] text-[#00210f]' : 'text-[#556158]'
                      }`}>
                        {userRow.rank}
                      </span>
                      <div>
                        <p className="font-bold text-sm text-[#0d1e25]">{userRow.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#556158] font-semibold">{userRow.department}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#f4faff] border border-[#bec9be]/40 text-[#00522d] text-[10px] font-bold">
                        {userRow.badge}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-sm text-[#00522d]">
                      {userRow.points.toLocaleString()} pts
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eco Rewards Store (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-5">
          <div className="flex justify-between items-center pb-3 border-b border-[#bec9be]/20">
            <h3 className="text-lg font-bold text-[#0d1e25]">Rewards Store</h3>
            <span className="text-xs text-[#00522d] font-bold">1,240 Pts Avail</span>
          </div>

          <div className="space-y-4 text-xs">
            {rewards.map((rew) => (
              <div key={rew.id} className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#bec9be]/40 flex items-center justify-center text-[#00522d] shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-xl">{rew.icon || 'redeem'}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0d1e25]">{rew.name}</h4>
                    <p className="text-[11px] text-[#556158] mt-0.5">{rew.cost} pts • {rew.stock || 'In Stock'}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRedeem(rew.name, rew.cost)}
                  className="w-full py-2 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  Redeem Reward ({rew.cost} pts)
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
