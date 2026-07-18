import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function VolunteerDashboard() {
  const { user, authFetch } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // We would fetch actual stats here, for now using placeholder data matching the design
    setStats({
      plastic: 84,
      organic: 62,
      glass: 45,
      carbonOffset: 124
    });
  }, []);

  if (!stats) return null;

  return (
    <>
      {/* Hero Stats Bento */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Impact Chart */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-[24px] p-md relative overflow-hidden group shadow-sm">
          <div className="flex justify-between items-start mb-md">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Impact Analytics</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Your waste diversion metrics this month.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">+12.4%</span>
            </div>
          </div>
          
          {/* Custom Progress Visualization */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md">Plastic Diversion</span>
                <span className="font-label-md text-label-md text-primary">{stats.plastic}%</span>
              </div>
              <div className="h-[12px] w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${stats.plastic}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md">Organic Composting</span>
                <span className="font-label-md text-label-md text-primary">{stats.organic}%</span>
              </div>
              <div className="h-[12px] w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${stats.organic}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md">Glass Recycling</span>
                <span className="font-label-md text-label-md text-primary">{stats.glass}%</span>
              </div>
              <div className="h-[12px] w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${stats.glass}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carbon Offset Summary */}
        <div className="md:col-span-4 bg-primary text-on-primary rounded-[24px] p-md flex flex-col justify-between shadow-sm">
          <div className="space-y-2">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <h3 className="font-headline-md text-headline-md">Carbon Offset</h3>
            <p className="font-body-md text-body-md opacity-90">Equivalent to planting</p>
          </div>
          <div>
            <p className="text-[56px] font-bold leading-none mb-1">{stats.carbonOffset}</p>
            <p className="font-label-md text-label-md">Native trees this year</p>
          </div>
        </div>
      </section>

      {/* Task List & Marketplace Asymmetric Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        
        {/* Waste Management Tasks */}
        <div className="md:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-[24px] overflow-hidden shadow-sm">
          <div className="p-md border-b border-outline-variant/20 flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md">Management Tasks</h3>
            <button className="text-primary font-label-md text-label-md hover:underline">View All</button>
          </div>
          <ul className="divide-y divide-outline-variant/10">
            {[
              { id: 1, title: 'Verify Bulk Collection', location: 'Zone 4 • 2:00 PM today', icon: 'local_shipping', badge: 'URGENT', badgeColor: 'bg-error-container text-on-error-container' },
              { id: 2, title: 'Audit Composting Bins', location: 'Community Garden • Tomorrow', icon: 'inventory', badge: 'PENDING', badgeColor: 'bg-surface-variant text-on-surface-variant' },
              { id: 3, title: 'Quarterly Impact Report', location: 'Due in 3 days', icon: 'report' },
            ].map(task => (
              <li key={task.id} className="p-md hover:bg-surface-container-low transition-colors flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container">{task.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body-md text-body-md font-semibold">{task.title}</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">{task.location}</p>
                </div>
                {task.badge && (
                  <span className={`${task.badgeColor} px-2 py-0.5 rounded-md font-label-sm text-label-sm`}>
                    {task.badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Marketplace Highlights */}
        <div className="md:col-span-5 space-y-gutter">
          <div className="bg-surface-container-low rounded-[24px] p-md border border-primary/10 shadow-sm">
            <h3 className="font-headline-md text-headline-md mb-base">Marketplace</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Turn waste into community value.</p>
            
            <div className="space-y-base">
              {[
                { id: 1, title: 'Reclaimed Oak Pallets', desc: '24 units available', price: '1,200 Credits', img: 'https://images.unsplash.com/photo-1595180023614-23e59005ea65?w=500&auto=format&fit=crop' },
                { id: 2, title: 'Premium Bio-Compost', desc: '50kg bags • Zone 1', price: '450 Credits', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=500&auto=format&fit=crop' },
              ].map(item => (
                <div key={item.id} className="bg-white/70 backdrop-blur-[12px] border border-[#a5d6a7]/30 p-4 rounded-xl flex gap-4 hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={item.img} alt={item.title} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-label-md text-label-md font-bold">{item.title}</h5>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{item.desc}</p>
                    <div className="mt-2 flex items-center text-primary">
                      <span className="font-label-md text-label-md font-bold">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA/Promo */}
          <div className="bg-tertiary text-on-tertiary rounded-[24px] p-md relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h4 className="font-headline-md text-headline-md mb-xs">Join the Wave</h4>
              <p className="font-body-md text-body-md opacity-80 mb-md">Invite neighboring municipalities to earn triple impact points.</p>
              <button className="bg-white text-tertiary px-6 py-3 rounded-full font-label-md text-label-md font-bold hover:bg-opacity-90 transition-all">
                Invite Now
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-10 rotate-12">handshake</span>
          </div>
        </div>
        
      </section>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-20 md:bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>
    </>
  );
}
