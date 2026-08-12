import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';

export default function Notifications() {
  const { authFetch } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, [authFetch]);

  const fetchNotifications = async () => {
    try {
      const res = await authFetch('/notifications');
      if (res.ok) {
        const data = await res.json();
        setNotifications(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      const res = await authFetch(`/notifications/${id}/read`, { method: 'PUT' });
      if (res.ok) {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const markAllAsRead = async () => {
    try {
      const res = await authFetch(`/notifications/mark-all-read`, { method: 'PUT' });
      if (res.ok) {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500 mt-2">Stay updated on your tasks, alerts, and community news.</p>
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-primary font-bold text-sm hover:bg-primary-container px-4 py-2 rounded-full transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      <Card className="shadow-sm border border-outline-variant/30 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-on-surface-variant">Loading notifications...</div>
        ) : notifications.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">notifications_paused</span>
            <p className="font-bold">You're all caught up!</p>
            <p className="text-sm mt-1">No new notifications.</p>
          </div>
        ) : (
          <div className="divide-y divide-outline-variant/20">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-4 md:p-6 flex gap-4 transition-colors ${notif.read ? 'bg-white opacity-70' : 'bg-[#f4faff] hover:bg-surface-container'}`}
                onClick={() => !notif.read && markAsRead(notif.id)}
              >
                <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${
                  notif.type === 'alert' ? 'bg-error-container text-error' :
                  notif.type === 'task' ? 'bg-tertiary-container text-tertiary' :
                  'bg-primary-container text-primary'
                }`}>
                  <span className="material-symbols-outlined">
                    {notif.type === 'alert' ? 'warning' : notif.type === 'task' ? 'assignment' : 'notifications'}
                  </span>
                </div>
                <div className="flex-1 cursor-pointer">
                  <p className={`text-base ${notif.read ? 'text-on-surface-variant' : 'text-on-surface font-bold'}`}>
                    {notif.message}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-2 font-bold">
                    {new Date(notif.createdAt).toLocaleString()}
                  </p>
                </div>
                {!notif.read && (
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 self-center"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
