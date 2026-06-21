import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

function AddPlantModal({ onClose, authFetch, onCreated }) {
  const [form, setForm] = useState({ name: '', location: '', plantedDate: '', status: 'Healthy' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authFetch('/api/horticulture/plants', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error adding plant');
      onCreated(data);
      onClose();
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <div className="modal-title">🌱 Add Plant</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        {error && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.83rem', marginBottom: '16px' }}>⚠️ {error}</div>}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="form-group">
            <label className="form-label">Plant Name *</label>
            <input className="form-input" placeholder="e.g. Tomatoes" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label className="form-label">Location</label>
            <input className="form-input" placeholder="e.g. Bed A, North Garden" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
          </div>
          <div className="form-group">
            <label className="form-label">Planted Date</label>
            <input className="form-input" type="date" value={form.plantedDate} onChange={e => setForm(f => ({ ...f, plantedDate: e.target.value }))} />
          </div>
          <div className="form-group">
            <label className="form-label">Initial Status</label>
            <select className="form-select" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
              <option>Healthy</option>
              <option>Needs Water</option>
              <option>Sick</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Adding...' : 'Add Plant'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function LogHarvestModal({ plant, onClose, authFetch, onLogged }) {
  const [form, setForm] = useState({ quantity: '', unit: 'kg', date: new Date().toISOString().split('T')[0] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authFetch(`/api/horticulture/plants/${plant.id}/harvest`, {
        method: 'POST',
        body: JSON.stringify({ ...form, quantity: parseFloat(form.quantity) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error logging harvest');
      onLogged(data);
      onClose();
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <div className="modal-title">🧺 Log Harvest for {plant.name}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        {error && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.83rem', marginBottom: '16px' }}>⚠️ {error}</div>}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label">Quantity *</label>
              <input className="form-input" type="number" step="0.1" min="0.1" placeholder="e.g. 5" value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="form-label">Unit</label>
              <select className="form-select" value={form.unit} onChange={e => setForm(f => ({ ...f, unit: e.target.value }))}>
                <option>kg</option>
                <option>lbs</option>
                <option>units</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Date *</label>
            <input className="form-input" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} required />
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Logging...' : 'Log Harvest'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Horticulture() {
  const { authFetch } = useAuth();
  const [plants, setPlants] = useState([]);
  const [harvests, setHarvests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPlantForHarvest, setSelectedPlantForHarvest] = useState(null);

  const loadData = useCallback(async () => {
    try {
      const [plantsRes, harvestsRes] = await Promise.all([
        authFetch('/api/horticulture/plants'),
        authFetch('/api/horticulture/harvests')
      ]);
      
      if (plantsRes.ok && harvestsRes.ok) {
        setPlants(await plantsRes.json());
        setHarvests(await harvestsRes.json());
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
            <h1 className="page-title">🌱 Horticulture & Gardens</h1>
            <p className="page-subtitle">Manage community plants and track harvest yields.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>＋ Add Plant</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Plants Section */}
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>Active Plants</h2>
          <div className="grid-cols-2 stagger">
            {plants.length === 0 ? (
              <div className="glass-card" style={{ padding: '32px', gridColumn: '1 / -1' }}>
                <p className="empty-state-text">No plants added yet.</p>
              </div>
            ) : (
              plants.map(plant => (
                <div key={plant.id} className="glass-card" style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 700 }}>{plant.name}</h3>
                    <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(0,232,122,0.1)', color: 'var(--accent-primary)' }}>
                      {plant.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                    📍 {plant.location || 'Unknown'} <br/>
                    🗓️ Planted: {plant.plantedDate ? new Date(plant.plantedDate).toLocaleDateString() : 'N/A'}
                  </div>
                  <button className="btn btn-ghost btn-sm" style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }} onClick={() => setSelectedPlantForHarvest(plant)}>
                    Log Harvest
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Harvests Section */}
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>Recent Harvests</h2>
          <div className="glass-card" style={{ padding: '16px' }}>
            {harvests.length === 0 ? (
              <p className="empty-state-text" style={{ padding: '20px 0' }}>No harvests logged yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {harvests.map(h => (
                  <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{h.plantName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{new Date(h.date).toLocaleDateString()}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>
                      {h.quantity} {h.unit}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showAddModal && (
        <AddPlantModal 
          onClose={() => setShowAddModal(false)}
          authFetch={authFetch}
          onCreated={(p) => setPlants(prev => [p, ...prev])}
        />
      )}

      {selectedPlantForHarvest && (
        <LogHarvestModal
          plant={selectedPlantForHarvest}
          onClose={() => setSelectedPlantForHarvest(null)}
          authFetch={authFetch}
          onLogged={(h) => {
            setHarvests(prev => [{...h, plantName: selectedPlantForHarvest.name}, ...prev]);
          }}
        />
      )}
    </div>
  );
}
