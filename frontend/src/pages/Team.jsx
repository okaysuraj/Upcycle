import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

const SKILL_COLORS = {
  Plantation: '#00e87a', Watering: '#3b82f6', Weeding: '#10b981',
  Harvesting: '#f59e0b', Pruning: '#8b5cf6', Irrigation: '#06b6d4', 'Soil Preparation': '#a16207',
};

function MemberCard({ member }) {
  const initials = member.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const taskPct = Math.min(100, ((member.activeTasks || 0) / 5) * 100);

  return (
    <div className="glass-card" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '120px', height: '120px',
        background: 'radial-gradient(circle, rgba(0,232,122,0.06) 0%, transparent 70%)',
        borderRadius: '50%', transform: 'translate(30%, -30%)', pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
        <div style={{
          width: 56, height: 56, borderRadius: '14px',
          background: member.role === 'staff' ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : member.role === 'admin' ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'var(--gradient-accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800,
          color: member.role === 'admin' ? '#f5f3ff' : '#050f0a',
          boxShadow: member.role === 'admin' ? '0 4px 16px rgba(139,92,246,0.3)' : '0 4px 16px var(--accent-glow)',
          flexShrink: 0,
        }}>{initials}</div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{member.name}</h4>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className={`badge badge-${member.role}`}>{member.role.charAt(0).toUpperCase() + member.role.slice(1)}</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{member.email}</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
        <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: (member.activeTasks || 0) > 3 ? '#f87171' : 'var(--accent-primary)' }}>{member.activeTasks || 0}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>Active Tasks</div>
        </div>
        <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#93c5fd' }}>{member.availabilityHours || 0}h</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>Available/wk</div>
        </div>
      </div>

      {/* Workload Bar */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 600 }}>Workload</span>
          <span style={{ fontSize: '0.72rem', color: taskPct > 80 ? '#f87171' : taskPct > 50 ? '#fcd34d' : 'var(--accent-primary)', fontWeight: 700 }}>
            {taskPct > 80 ? 'Overloaded' : taskPct > 50 ? 'Busy' : 'Available'}
          </span>
        </div>
        <div className="progress-bar-track" style={{ height: '8px' }}>
          <div className={`progress-bar-fill ${taskPct > 80 ? 'progress-danger' : taskPct > 50 ? 'progress-gold' : 'progress-green'}`} style={{ width: `${taskPct}%` }} />
        </div>
      </div>

      {/* Skills */}
      {member.skills?.length > 0 && (
        <div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Skills & Expertise</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {member.skills.map(skill => (
              <span key={skill} style={{
                padding: '4px 10px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 600,
                background: `${SKILL_COLORS[skill] || '#6b7280'}18`,
                border: `1px solid ${SKILL_COLORS[skill] || '#6b7280'}44`,
                color: SKILL_COLORS[skill] || '#9ca3af',
              }}>{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  const { authFetch } = useAuth();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  const load = useCallback(async () => {
    try {
      const res = await authFetch('/api/auth/all');
      const data = await res.json();
      setMembers(Array.isArray(data) ? data : []);
    } catch { } finally { setLoading(false); }
  }, [authFetch]);

  useEffect(() => { load(); }, [load]);

  const filtered = members.filter(m => filter === 'All' || m.role === filter.toLowerCase());

  const stats = {
    total: members.length,
    admins: members.filter(m => m.role === 'admin').length,
    staff: members.filter(m => m.role === 'staff').length,
    volunteers: members.filter(m => m.role === 'volunteer').length,
    busy: members.filter(m => (m.activeTasks || 0) > 0).length,
  };

  if (loading) return <div className="loading-center"><div className="spinner" /></div>;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">👥 Team Management</h1>
          <p className="page-subtitle">{stats.total} members · {stats.busy} currently active · {stats.volunteers} volunteers</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid-cols-4 stagger" style={{ marginBottom: '28px' }}>
        {[
          { label: 'Total Members', value: stats.total, icon: '👥', iconCls: 'stat-icon-blue', cardCls: 'stat-card-blue' },
          { label: 'Administrators', value: stats.admins, icon: '⭐', iconCls: 'stat-icon-red', cardCls: 'stat-card-red' },
          { label: 'Field Staff', value: stats.staff, icon: '👷', iconCls: 'stat-icon-gold', cardCls: 'stat-card-gold' },
          { label: 'Volunteers', value: stats.volunteers, icon: '🙋', iconCls: 'stat-icon-green', cardCls: 'stat-card-green' },
        ].map(({ label, value, icon, iconCls, cardCls }) => (
          <div key={label} className={`glass-card stat-card ${cardCls}`}>
            <div className={`stat-icon ${iconCls}`}>{icon}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div style={{ marginBottom: '24px' }}>
        <div className="tabs">
          {['All', 'Admin', 'Staff', 'Volunteer'].map(f => (
            <div key={f} className={`tab-item ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f}
              <span style={{ marginLeft: '6px', fontSize: '0.65rem', background: 'rgba(0,0,0,0.3)', padding: '1px 5px', borderRadius: '999px' }}>
                {f === 'All' ? stats.total : f === 'Admin' ? stats.admins : f === 'Staff' ? stats.staff : stats.volunteers}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      {filtered.length === 0 ? (
        <div className="glass-card" style={{ padding: '64px' }}>
          <div className="empty-state">
            <div className="empty-state-icon">👤</div>
            <p className="empty-state-text">No {filter !== 'All' ? filter : ''} members found</p>
          </div>
        </div>
      ) : (
        <div className="grid-cols-3 stagger">
          {filtered.map(m => <MemberCard key={m._id} member={m} />)}
        </div>
      )}
    </div>
  );
}
