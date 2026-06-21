import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

function LogMaterialModal({ onClose, authFetch, onLogged }) {
  const [form, setForm] = useState({ materialType: 'Plastic', quantity: '', unit: 'kg' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const MATERIAL_TYPES = ['Plastic', 'Glass', 'Paper', 'Metal', 'Organic Compost', 'E-Waste'];
  const UNITS = ['kg', 'lbs', 'units', 'bags'];

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authFetch('/api/recycling/log', {
        method: 'POST',
        body: JSON.stringify({ ...form, quantity: parseFloat(form.quantity) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error logging material');
      onLogged(data);
      onClose();
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <div className="modal-title">♻️ Log Material</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        {error && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.83rem', marginBottom: '16px' }}>⚠️ {error}</div>}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="form-group">
            <label className="form-label">Material Type</label>
            <select className="form-select" value={form.materialType} onChange={e => setForm(f => ({ ...f, materialType: e.target.value }))}>
              {MATERIAL_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label">Quantity *</label>
              <input className="form-input" type="number" step="0.1" min="0.1" placeholder="e.g. 5.5" value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="form-label">Unit</label>
              <select className="form-select" value={form.unit} onChange={e => setForm(f => ({ ...f, unit: e.target.value }))}>
                {UNITS.map(unit => <option key={unit} value={unit}>{unit}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Logging...' : 'Log Material'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Recycling() {
  const { authFetch } = useAuth();
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({ global: [], user: [] });
  const [loading, setLoading] = useState(true);
  const [showLogModal, setShowLogModal] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const [logsRes, statsRes] = await Promise.all([
        authFetch('/api/recycling/logs'),
        authFetch('/api/recycling/stats')
      ]);
      
      if (logsRes.ok && statsRes.ok) {
        setLogs(await logsRes.json());
        setStats(await statsRes.json());
      }
    } catch { } finally { setLoading(false); }
  }, [authFetch]);

  useEffect(() => { loadData(); }, [loadData]);

  if (loading) return <div className="loading-center"><div className="spinner" /></div>;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="page-title">♻️ Recycling Hub</h1>
            <p className="page-subtitle">Track your material contributions and community impact.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowLogModal(true)}>＋ Log Recycling</button>
        </div>
      </div>

      <div className="grid-cols-2 stagger" style={{ marginBottom: '24px' }}>
        <div className="glass-card stat-card stat-card-green">
          <div className="stat-icon stat-icon-green">🌍</div>
          <div className="stat-value">{stats.global.reduce((acc, curr) => acc + Number(curr.total_quantity), 0)}</div>
          <div className="stat-label">Total Community Units Recycled</div>
        </div>
        <div className="glass-card stat-card stat-card-blue">
          <div className="stat-icon stat-icon-blue">👤</div>
          <div className="stat-value">{stats.user.reduce((acc, curr) => acc + Number(curr.total_quantity), 0)}</div>
          <div className="stat-label">Your Contributions</div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '1.2rem', fontWeight: 600 }}>Recent Activity</h3>
        {logs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">♻️</div>
            <p className="empty-state-text">No recycling logged yet</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {logs.map(log => (
              <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{log.materialType}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>by {log.userName} on {new Date(log.date).toLocaleDateString()}</div>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  +{log.quantity} {log.unit}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showLogModal && (
        <LogMaterialModal 
          onClose={() => setShowLogModal(false)}
          authFetch={authFetch}
          onLogged={(newLog) => {
            // Optimistically add the new log with user's name
            setLogs(prev => [{ ...newLog, userName: 'You' }, ...prev]);
            loadData(); // Re-fetch stats in background
          }}
        />
      )}
    </div>
  );
}
