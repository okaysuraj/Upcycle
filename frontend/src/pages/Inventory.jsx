import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

function ResourceCard({ resource, onRestock, onConsume, canManage }) {
  const [restockAmt, setRestockAmt] = useState('');
  const [consumeAmt, setConsumeAmt] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const pct = Math.min(100, Math.round((resource.quantity / (resource.threshold * 4)) * 100));
  const isLow = resource.quantity <= resource.threshold;
  const isCritical = resource.quantity <= resource.threshold * 0.5;
  const colorClass = isCritical ? 'progress-danger' : isLow ? 'progress-gold' : 'progress-green';
  const statusLabel = isCritical ? 'CRITICAL' : isLow ? 'LOW STOCK' : 'HEALTHY';
  const statusColor = isCritical ? '#f87171' : isLow ? '#fcd34d' : '#6ee7b7';
  const statusBg = isCritical ? 'rgba(239,68,68,0.12)' : isLow ? 'rgba(245,158,11,0.12)' : 'rgba(0,232,122,0.08)';

  const handleRestock = async () => {
    if (!restockAmt || isNaN(restockAmt)) return;
    setActionLoading(true);
    await onRestock(resource._id, parseInt(restockAmt));
    setRestockAmt('');
    setActionLoading(false);
    setShowActions(false);
  };

  const handleConsume = async () => {
    if (!consumeAmt || isNaN(consumeAmt)) return;
    setActionLoading(true);
    await onConsume(resource._id, parseInt(consumeAmt));
    setConsumeAmt('');
    setActionLoading(false);
    setShowActions(false);
  };

  return (
    <div className="glass-card" style={{ padding: '22px', position: 'relative', overflow: 'hidden' }}>
      {/* Status glow */}
      {isCritical && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(239,68,68,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 46, height: 46, borderRadius: '12px',
            background: isCritical ? 'rgba(239,68,68,0.15)' : isLow ? 'rgba(245,158,11,0.15)' : 'rgba(0,232,122,0.1)',
            border: `1px solid ${isCritical ? 'rgba(239,68,68,0.3)' : isLow ? 'rgba(245,158,11,0.25)' : 'var(--border-subtle)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
          }}>{resource.icon || '📦'}</div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{resource.name}</h4>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>{resource.category}</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: statusColor }}>{resource.quantity}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{resource.unit}</div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Stock Level</span>
          <span style={{ fontSize: '0.72rem', color: statusColor, fontWeight: 600 }}>{pct}%</span>
        </div>
        <div className="progress-bar-track" style={{ height: '10px' }}>
          <div className={`progress-bar-fill ${colorClass}`} style={{ width: `${pct}%` }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Threshold: {resource.threshold} {resource.unit}</span>
          <span style={{ fontSize: '0.68rem', padding: '2px 7px', borderRadius: '4px', background: statusBg, color: statusColor, fontWeight: 700 }}>{statusLabel}</span>
        </div>
      </div>

      {/* Actions */}
      {canManage && (
        <div>
          {!showActions ? (
            <button className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setShowActions(true)}>
              Manage Stock
            </button>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input
                  className="form-input" type="number" placeholder="Amount" min="1"
                  value={restockAmt} onChange={e => setRestockAmt(e.target.value)}
                  style={{ fontSize: '0.8rem', padding: '7px 10px' }}
                />
                <button className="btn btn-primary btn-sm" onClick={handleRestock} disabled={actionLoading} style={{ whiteSpace: 'nowrap' }}>
                  ＋ Restock
                </button>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input
                  className="form-input" type="number" placeholder="Amount" min="1"
                  value={consumeAmt} onChange={e => setConsumeAmt(e.target.value)}
                  style={{ fontSize: '0.8rem', padding: '7px 10px' }}
                />
                <button className="btn btn-danger btn-sm" onClick={handleConsume} disabled={actionLoading} style={{ whiteSpace: 'nowrap' }}>
                  − Consume
                </button>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowActions(false)} style={{ justifyContent: 'center' }}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AddResourceModal({ onClose, authFetch, onCreated }) {
  const [form, setForm] = useState({ name: '', quantity: '', unit: 'units', threshold: '', category: 'Materials', icon: '📦' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ICONS = ['📦', '🌱', '🧪', '🪵', '💧', '✂️', '🪣', '🔧', '🧤', '🧺', '🌍', '🚿'];
  const CATEGORIES = ['Plants', 'Chemicals', 'Materials', 'Tools', 'Equipment', 'Safety', 'Utilities'];

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authFetch('/api/resources', {
        method: 'POST',
        body: JSON.stringify({ ...form, quantity: parseInt(form.quantity), threshold: parseInt(form.threshold) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      onCreated(data);
      onClose();
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: '500px' }}>
        <div className="modal-header">
          <div className="modal-title">📦 Add Resource</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        {error && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.83rem', marginBottom: '16px' }}>⚠️ {error}</div>}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="form-group">
            <label className="form-label">Resource Name *</label>
            <input id="res-name" className="form-input" placeholder="e.g. Pruning Shears" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label">Quantity *</label>
              <input id="res-qty" className="form-input" type="number" min="0" placeholder="50" value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="form-label">Unit *</label>
              <input id="res-unit" className="form-input" placeholder="units / kg / liters" value={form.unit} onChange={e => setForm(f => ({ ...f, unit: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="form-label">Low-Stock Threshold *</label>
              <input id="res-threshold" className="form-input" type="number" min="1" placeholder="10" value={form.threshold} onChange={e => setForm(f => ({ ...f, threshold: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select id="res-category" className="form-select" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Icon</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {ICONS.map(icon => (
                <button key={icon} type="button" onClick={() => setForm(f => ({ ...f, icon }))}
                  style={{ width: 36, height: 36, borderRadius: '8px', background: form.icon === icon ? 'rgba(0,232,122,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${form.icon === icon ? 'var(--border-glow)' : 'var(--border-subtle)'}`, fontSize: '1.2rem', cursor: 'pointer' }}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button id="add-resource-submit" type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Adding...' : '📦 Add Resource'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Inventory() {
  const { authFetch, user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const canManage = user?.role === 'admin' || user?.role === 'staff';

  const loadResources = useCallback(async () => {
    try {
      const res = await authFetch('/api/resources');
      const data = await res.json();
      setResources(Array.isArray(data) ? data : []);
    } catch { } finally { setLoading(false); }
  }, [authFetch]);

  useEffect(() => { loadResources(); }, [loadResources]);

  const handleRestock = async (id, amount) => {
    const res = await authFetch(`/api/resources/${id}/restock`, { method: 'POST', body: JSON.stringify({ amount }) });
    if (res.ok) { const updated = await res.json(); setResources(rs => rs.map(r => r._id === id ? updated : r)); }
  };

  const handleConsume = async (id, amount) => {
    const res = await authFetch(`/api/resources/${id}/consume`, { method: 'POST', body: JSON.stringify({ amount }) });
    if (res.ok) { const updated = await res.json(); setResources(rs => rs.map(r => r._id === id ? updated : r)); }
  };

  const FILTERS = ['All', 'Healthy', 'Low Stock', 'Critical'];
  const filtered = resources.filter(r => {
    if (filter === 'Healthy') return r.quantity > r.threshold;
    if (filter === 'Low Stock') return r.quantity <= r.threshold && r.quantity > r.threshold * 0.5;
    if (filter === 'Critical') return r.quantity <= r.threshold * 0.5;
    return true;
  });

  const stats = {
    total: resources.length,
    healthy: resources.filter(r => r.quantity > r.threshold).length,
    low: resources.filter(r => r.quantity <= r.threshold && r.quantity > r.threshold * 0.5).length,
    critical: resources.filter(r => r.quantity <= r.threshold * 0.5).length,
  };

  if (loading) return <div className="loading-center"><div className="spinner" /></div>;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="page-title">📦 Resource Inventory</h1>
            <p className="page-subtitle">{resources.length} resources tracked · {stats.critical} critical · {stats.low} low stock</p>
          </div>
          {canManage && <button id="add-resource-btn" className="btn btn-primary" onClick={() => setShowAddModal(true)}>＋ Add Resource</button>}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid-cols-4 stagger" style={{ marginBottom: '28px' }}>
        {[
          { label: 'Total Resources', value: stats.total, icon: '📦', iconCls: 'stat-icon-blue', cardCls: 'stat-card-blue' },
          { label: 'Healthy Stock', value: stats.healthy, icon: '✅', iconCls: 'stat-icon-green', cardCls: 'stat-card-green' },
          { label: 'Low Stock', value: stats.low, icon: '⚠️', iconCls: 'stat-icon-gold', cardCls: 'stat-card-gold' },
          { label: 'Critical', value: stats.critical, icon: '🚨', iconCls: 'stat-icon-red', cardCls: 'stat-card-red' },
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
          {FILTERS.map(f => (
            <div key={f} className={`tab-item ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f}
              <span style={{ marginLeft: '6px', fontSize: '0.65rem', background: 'rgba(0,0,0,0.3)', padding: '1px 5px', borderRadius: '999px' }}>
                {f === 'All' ? resources.length : f === 'Healthy' ? stats.healthy : f === 'Low Stock' ? stats.low : stats.critical}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Grid */}
      {filtered.length === 0 ? (
        <div className="glass-card" style={{ padding: '64px' }}>
          <div className="empty-state">
            <div className="empty-state-icon">📦</div>
            <p className="empty-state-text">No resources in this category</p>
          </div>
        </div>
      ) : (
        <div className="grid-cols-3 stagger">
          {filtered.map(r => (
            <ResourceCard key={r._id} resource={r} onRestock={handleRestock} onConsume={handleConsume} canManage={canManage} />
          ))}
        </div>
      )}

      {showAddModal && (
        <AddResourceModal
          onClose={() => setShowAddModal(false)}
          authFetch={authFetch}
          onCreated={(r) => setResources(rs => [r, ...rs])}
        />
      )}
    </div>
  );
}
