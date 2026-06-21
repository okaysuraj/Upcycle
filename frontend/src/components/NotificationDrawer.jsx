import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

const TYPE_STYLES = {
  task_assigned: { icon: '📋', color: '#93c5fd', bg: 'rgba(59,130,246,0.12)', label: 'Assignment' },
  task_completed: { icon: '✅', color: '#6ee7b7', bg: 'rgba(0,232,122,0.08)', label: 'Completed' },
  task_updated: { icon: '🔄', color: '#a5b4fc', bg: 'rgba(139,92,246,0.1)', label: 'Updated' },
  stock_low: { icon: '⚠️', color: '#fcd34d', bg: 'rgba(245,158,11,0.1)', label: 'Stock Alert' },
  system: { icon: '🌿', color: 'var(--accent-primary)', bg: 'rgba(0,232,122,0.08)', label: 'System' },
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function NotificationDrawer({ onClose }) {
  const { authFetch } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  const load = useCallback(async () => {
    try {
      const res = await authFetch('/api/notifications');
      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : []);
    } catch { } finally { setLoading(false); }
  }, [authFetch]);

  useEffect(() => { load(); }, [load]);

  const markRead = async (id) => {
    await authFetch(`/api/notifications/${id}/read`, { method: 'PUT' });
    setNotifications(ns => ns.map(n => n._id === id ? { ...n, read: true } : n));
  };

  const markAllRead = async () => {
    await authFetch('/api/notifications/mark-all-read', { method: 'PUT' });
    setNotifications(ns => ns.map(n => ({ ...n, read: true })));
  };

  const filtered = notifications.filter(n => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return !n.read;
    return n.type.includes(filter.toLowerCase().replace(' ', '_'));
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 199, backdropFilter: 'blur(2px)' }} />

      <div className="notif-drawer">
        {/* Header */}
        <div className="notif-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>
                🔔 Notifications
                {unreadCount > 0 && (
                  <span style={{
                    marginLeft: '10px', background: 'var(--accent-primary)', color: '#050f0a',
                    fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '999px',
                  }}>{unreadCount}</span>
                )}
              </h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>{notifications.length} total notifications</p>
            </div>
            <button id="close-notifications" className="modal-close" onClick={onClose}>✕</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="tabs" style={{ width: 'auto' }}>
              {['All', 'Unread', 'Assignment', 'Stock Alert'].map(f => (
                <div key={f} className={`tab-item ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)} style={{ padding: '6px 10px', fontSize: '0.75rem' }}>
                  {f}
                </div>
              ))}
            </div>
            {unreadCount > 0 && (
              <button id="mark-all-read" className="btn btn-ghost btn-sm" onClick={markAllRead} style={{ fontSize: '0.72rem' }}>
                Mark all read
              </button>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="notif-drawer-body">
          {loading ? (
            <div className="loading-center" style={{ minHeight: '200px' }}>
              <div className="spinner" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-state" style={{ paddingTop: '40px' }}>
              <div className="empty-state-icon">🔔</div>
              <p style={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '4px' }}>All caught up!</p>
              <p className="empty-state-text">No notifications here.</p>
            </div>
          ) : (
            <div>
              {filtered.map(n => {
                const style = TYPE_STYLES[n.type] || TYPE_STYLES.system;
                return (
                  <div
                    key={n._id}
                    id={`notif-${n._id}`}
                    className={`notif-item ${!n.read ? 'unread' : ''}`}
                    onClick={() => !n.read && markRead(n._id)}
                    style={{ background: !n.read ? style.bg : 'transparent' }}
                  >
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '10px', flexShrink: 0,
                        background: style.bg, border: `1px solid ${style.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                      }}>{style.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: style.color }}>
                            {style.label}
                          </span>
                          <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>{timeAgo(n.createdAt)}</span>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{n.message}</p>
                        {!n.read && (
                          <p style={{ fontSize: '0.68rem', color: 'var(--accent-primary)', marginTop: '4px' }}>Click to mark as read</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
