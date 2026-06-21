import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const CATEGORY_ICONS = {
  Plantation: '🌱', Watering: '💧', Weeding: '🌿', Harvesting: '🌾',
  Pruning: '✂️', Irrigation: '🔧', 'Soil Preparation': '🌍',
};

function StatCard({ icon, iconClass, label, value, colorClass, trend }) {
  return (
    <div className={`glass-card stat-card ${colorClass}`}>
      <div className={`stat-icon ${iconClass}`}>{icon}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {trend && <div style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', marginTop: '6px' }}>{trend}</div>}
    </div>
  );
}

function MiniDonutChart({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#00e87a'];
  let cumulative = 0;
  const size = 120;
  const r = 44;
  const cx = size / 2, cy = size / 2;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {total === 0 ? (
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={16} />
        ) : data.map((d, i) => {
          if (d.value === 0) return null;
          const pct = d.value / total;
          const startAngle = cumulative * 2 * Math.PI - Math.PI / 2;
          cumulative += pct;
          const endAngle = cumulative * 2 * Math.PI - Math.PI / 2;
          const x1 = cx + r * Math.cos(startAngle);
          const y1 = cy + r * Math.sin(startAngle);
          const x2 = cx + r * Math.cos(endAngle);
          const y2 = cy + r * Math.sin(endAngle);
          const largeArc = pct > 0.5 ? 1 : 0;
          return (
            <path key={i}
              d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={colors[i]}
              opacity={0.85}
            />
          );
        })}
        <circle cx={cx} cy={cy} r={28} fill="var(--bg-color)" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="var(--text-primary)" fontSize="14" fontWeight="bold">{total}</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--text-dim)" fontSize="7">TASKS</text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: colors[i], flexShrink: 0 }} />
            <span style={{ color: 'var(--text-dim)' }}>{d.label}</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600, marginLeft: 'auto' }}>{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceMeter({ resource }) {
  const pct = Math.min(100, Math.round((resource.quantity / (resource.threshold * 4)) * 100));
  const isLow = resource.quantity <= resource.threshold;
  const isCritical = resource.quantity <= resource.threshold * 0.5;
  const colorClass = isCritical ? 'progress-danger' : isLow ? 'progress-gold' : 'progress-green';
  const textColor = isCritical ? '#f87171' : isLow ? '#fcd34d' : 'var(--accent-primary)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.1rem' }}>{resource.icon}</span>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{resource.name}</span>
          {isLow && <span style={{ fontSize: '0.65rem', background: isCritical ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)', color: isCritical ? '#f87171' : '#fcd34d', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>{isCritical ? 'CRITICAL' : 'LOW'}</span>}
        </div>
        <span style={{ fontSize: '0.78rem', color: textColor, fontWeight: 700 }}>{resource.quantity} {resource.unit}</span>
      </div>
      <div className="progress-bar-track">
        <div className={`progress-bar-fill ${colorClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function Dashboard({ onNavigate }) {
  const { authFetch, user } = useAuth();
  const [stats, setStats] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [resources, setResources] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [statsRes, tasksRes, resourcesRes, volRes] = await Promise.all([
          authFetch('/api/tasks/stats'),
          authFetch('/api/tasks?status=All'),
          authFetch('/api/resources'),
          authFetch('/api/auth/volunteers'),
        ]);
        const [s, t, r, v] = await Promise.all([statsRes.json(), tasksRes.json(), resourcesRes.json(), volRes.json()]);
        setStats(s);
        setTasks(Array.isArray(t) ? t : []);
        setResources(Array.isArray(r) ? r : []);
        setVolunteers(Array.isArray(v) ? v : []);
      } catch { } finally { setLoading(false); }
    };
    load();
  }, [authFetch]);

  if (loading) return <div className="loading-center"><div className="spinner" /><p style={{ color: 'var(--text-dim)' }}>Loading dashboard...</p></div>;

  const urgentTasks = tasks.filter(t => t.priority === 'High' && t.status !== 'Completed').slice(0, 3);
  const lowStockResources = resources.filter(r => r.quantity <= r.threshold).slice(0, 5);
  const donutData = [
    { label: 'High Priority', value: stats?.highPriority || 0 },
    { label: 'In Progress', value: stats?.inProgress || 0 },
    { label: 'Assigned', value: stats?.assigned || 0 },
    { label: 'Completed', value: stats?.completed || 0 },
  ];
  const activeVolunteers = volunteers.filter(v => (v.activeTasks || 0) > 0);

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="page-title">🌿 Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 17 ? 'Afternoon' : 'Evening'}, {user?.name?.split(' ')[0]}!</h1>
            <p className="page-subtitle">Here's your upcycle overview — {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <button className="btn btn-primary" onClick={() => onNavigate('tasks')}>
            ＋ New Task
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid-cols-4 stagger" style={{ marginBottom: '28px' }}>
        <StatCard icon="📋" iconClass="stat-icon-blue" label="Total Tasks" value={stats?.total || 0} colorClass="stat-card-blue" trend={`${stats?.pending || 0} Pending`} />
        <StatCard icon="✅" iconClass="stat-icon-green" label="Completed" value={stats?.completed || 0} colorClass="stat-card-green" trend={`${stats?.inProgress || 0} In Progress`} />
        <StatCard icon="👥" iconClass="stat-icon-gold" label="Active Volunteers" value={activeVolunteers.length} colorClass="stat-card-gold" trend={`of ${volunteers.length} total`} />
        <StatCard icon="⚠️" iconClass="stat-icon-red" label="Urgent Tasks" value={stats?.highPriority || 0} colorClass="stat-card-red" trend="Needs attention" />
      </div>

      {/* Main Content Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Task Status Chart */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Task Status Overview</h3>
          <MiniDonutChart data={donutData} />
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { label: 'Pending', val: stats?.pending || 0, cls: 'badge-pending' },
              { label: 'Assigned', val: stats?.assigned || 0, cls: 'badge-assigned' },
              { label: 'In Progress', val: stats?.inProgress || 0, cls: 'badge-in-progress' },
              { label: 'Completed', val: stats?.completed || 0, cls: 'badge-completed' },
            ].map(({ label, val, cls }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.6)', borderRadius: '10px' }}>
                <span className={`badge ${cls}`}>{label}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Health */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>Resource Health</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => onNavigate('inventory')}>View All →</button>
          </div>
          {resources.length === 0 ? (
            <div className="empty-state"><div className="empty-state-icon">📦</div><p className="empty-state-text">No resources found</p></div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {resources.slice(0, 6).map(r => <ResourceMeter key={r._id} resource={r} />)}
            </div>
          )}
          {lowStockResources.length > 0 && (
            <div style={{
              marginTop: '20px', padding: '12px 16px', borderRadius: '10px',
              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            }}>
              <p style={{ color: '#fcd34d', fontSize: '0.82rem', fontWeight: 600 }}>
                ⚠️ {lowStockResources.length} resource{lowStockResources.length > 1 ? 's' : ''} below threshold
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Urgent Tasks */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>🔴 Urgent Actions</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => onNavigate('tasks')}>View All →</button>
          </div>
          {urgentTasks.length === 0 ? (
            <div className="empty-state" style={{ padding: '32px' }}>
              <div className="empty-state-icon">✅</div>
              <p className="empty-state-text">No urgent tasks! Great work.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {urgentTasks.map(t => (
                <div key={t._id} className={`glass-card task-card task-card-high`} style={{ cursor: 'pointer' }} onClick={() => onNavigate('tasks')}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span>{CATEGORY_ICONS[t.category] || '🌿'}</span>
                        <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>{t.title}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span className={`badge badge-${t.status.toLowerCase().replace(' ', '-').replace('-', '-')}`}>{t.status}</span>
                        {t.assigneeName && <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>👤 {t.assigneeName}</span>}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
                      {t.dueDate ? `Due ${new Date(t.dueDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}` : '—'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Active Team */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>👥 Active Team</h3>
            <button className="btn btn-ghost btn-sm" onClick={() => onNavigate('team')}>View All →</button>
          </div>
          {volunteers.length === 0 ? (
            <div className="empty-state" style={{ padding: '32px' }}>
              <div className="empty-state-icon">👤</div>
              <p className="empty-state-text">No team members found.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {volunteers.slice(0, 5).map(v => {
                const initials = v.name.split(' ').map(w => w[0]).join('').slice(0, 2);
                const taskPct = Math.min(100, (v.activeTasks / 5) * 100);
                return (
                  <div key={v._id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.6)' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'var(--gradient-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', fontWeight: 700, color: '#050f0a', flexShrink: 0,
                    }}>{initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.83rem', fontWeight: 600 }}>{v.name}</span>
                        <span className={`badge badge-${v.role}`}>{v.role}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                        <div className="progress-bar-track" style={{ flex: 1, height: 4 }}>
                          <div className={`progress-bar-fill ${taskPct > 80 ? 'progress-danger' : taskPct > 50 ? 'progress-gold' : 'progress-green'}`} style={{ width: `${taskPct}%` }} />
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>{v.activeTasks} tasks</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
