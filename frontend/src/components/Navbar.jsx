import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

const NAV_ITEMS = [
  { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
  { id: 'tasks', icon: '📋', label: 'Tasks' },
  { id: 'inventory', icon: '📦', label: 'Inventory' },
  { id: 'team', icon: '👥', label: 'Team' },
  { id: 'events', icon: '🗓️', label: 'Events' },
  { id: 'recycling', icon: '♻️', label: 'Recycling' },
  { id: 'horticulture', icon: '🌱', label: 'Horticulture' },
];

export default function Navbar({ currentPage, onNavigate, onNotifications }) {
  const { user, logout, authFetch } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);
  const initials = user?.name?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';

  const fetchUnread = useCallback(async () => {
    try {
      const res = await authFetch('/api/notifications/unread-count');
      if (res.ok) {
        const data = await res.json();
        setUnreadCount(data.count || 0);
      }
    } catch { }
  }, [authFetch]);

  useEffect(() => {
    fetchUnread();
    const interval = setInterval(fetchUnread, 15000); // poll every 15s
    return () => clearInterval(interval);
  }, [fetchUnread]);

  return (
    <nav className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🌿</div>
        <div>
          <div className="sidebar-logo-text">Upcycle</div>
          <div className="sidebar-logo-sub">Horticulture System</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        <div className="sidebar-section-label">Navigation</div>
        {NAV_ITEMS.map(item => (
          <div
            key={item.id}
            id={`nav-${item.id}`}
            className={`sidebar-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="sidebar-item-icon">{item.icon}</span>
            <span>{item.label}</span>
            {item.id === 'tasks' && unreadCount > 0 && (
              <span style={{
                marginLeft: 'auto', background: 'var(--danger)',
                borderRadius: '999px', fontSize: '0.65rem', fontWeight: 700,
                padding: '2px 6px', color: 'white', minWidth: '18px', textAlign: 'center',
              }}>{unreadCount > 9 ? '9+' : unreadCount}</span>
            )}
          </div>
        ))}

        <div className="sidebar-section-label" style={{ marginTop: '16px' }}>System</div>
        <div id="nav-notifications" className="sidebar-item" onClick={onNotifications} style={{ position: 'relative' }}>
          <span className="sidebar-item-icon">🔔</span>
          <span>Notifications</span>
          {unreadCount > 0 && (
            <span style={{
              marginLeft: 'auto', background: 'var(--accent-primary)',
              borderRadius: '999px', fontSize: '0.65rem', fontWeight: 700,
              padding: '2px 6px', color: '#050f0a', minWidth: '18px', textAlign: 'center',
            }}>{unreadCount > 9 ? '9+' : unreadCount}</span>
          )}
        </div>
      </div>

      {/* User Profile */}
      <div className="sidebar-user">
        <div className="sidebar-avatar">{initials}</div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="sidebar-user-name" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.name}</div>
          <div className="sidebar-user-role" style={{ textTransform: 'capitalize' }}>{user?.role}</div>
        </div>
        <button
          id="logout-btn"
          onClick={logout}
          title="Logout"
          style={{
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: '8px', color: '#f87171', padding: '6px', cursor: 'pointer',
            fontSize: '0.9rem', transition: 'all 0.2s ease', flexShrink: 0,
          }}
          onMouseEnter={e => { e.target.style.background = 'rgba(239,68,68,0.2)'; }}
          onMouseLeave={e => { e.target.style.background = 'rgba(239,68,68,0.1)'; }}
        >⏻</button>
      </div>
    </nav>
  );
}
