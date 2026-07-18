import React, { useState } from 'react';
import Card from '../../components/ui/Card';

export default function NotificationsCenter() {
  const [notifications] = useState([
    { id: 1, type: 'alert', title: 'High Energy Load', desc: 'Housing Complex exceeded baseline by 15%', time: '10 mins ago', read: false },
    { id: 2, type: 'info', title: 'Waste Pickup Scheduled', desc: 'Vendor confirmed pickup at Science Hall', time: '2 hours ago', read: false },
    { id: 3, type: 'success', title: 'Goal Reached', desc: 'Solar array hit 100kW generation milestone', time: 'Yesterday', read: true }
  ]);

  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-display text-primary leading-tight">Notifications Center</h2>
          <p className="font-body-lg text-body-lg text-secondary">Manage system alerts and updates.</p>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
          <div className="flex gap-4">
            <button className="font-bold text-primary border-b-2 border-primary pb-1">All</button>
            <button className="text-secondary hover:text-primary">Unread</button>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">Mark all as read</button>
        </div>
        <div className="divide-y divide-outline-variant/20">
          {notifications.map(n => (
            <div key={n.id} className={`p-4 flex gap-4 ${n.read ? 'bg-white' : 'bg-surface-ice'}`}>
              <div className="pt-1">
                {n.type === 'alert' && <span className="material-symbols-outlined text-error">warning</span>}
                {n.type === 'info' && <span className="material-symbols-outlined text-primary">info</span>}
                {n.type === 'success' && <span className="material-symbols-outlined text-success-container">check_circle</span>}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className={`font-bold ${n.read ? 'text-on-surface-variant' : 'text-on-surface'}`}>{n.title}</h4>
                  <span className="text-xs text-secondary">{n.time}</span>
                </div>
                <p className="text-sm text-secondary mt-1">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
