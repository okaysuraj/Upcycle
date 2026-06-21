import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

function CreateEventModal({ onClose, authFetch, onCreated }) {
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '', maxVolunteers: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authFetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ ...form, maxVolunteers: form.maxVolunteers ? parseInt(form.maxVolunteers) : null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error creating event');
      onCreated(data);
      onClose();
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: '500px' }}>
        <div className="modal-header">
          <div className="modal-title">🗓️ Create Green Event</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        {error && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.83rem', marginBottom: '16px' }}>⚠️ {error}</div>}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="form-group">
            <label className="form-label">Event Title *</label>
            <input className="form-input" placeholder="e.g. Park Cleanup" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea className="form-input" placeholder="What will volunteers be doing?" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required rows={3} />
          </div>
          <div className="form-group">
            <label className="form-label">Date & Time *</label>
            <input className="form-input" type="datetime-local" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label">Location *</label>
              <input className="form-input" placeholder="e.g. Central Park" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="form-label">Max Volunteers</label>
              <input className="form-input" type="number" min="1" placeholder="Leave empty for unlimited" value={form.maxVolunteers} onChange={e => setForm(f => ({ ...f, maxVolunteers: e.target.value }))} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Creating...' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Events() {
  const { authFetch, user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const canManage = user?.role === 'admin' || user?.role === 'coordinator';

  const loadEvents = useCallback(async () => {
    try {
      const res = await authFetch('/api/events');
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
      }
    } catch { } finally { setLoading(false); }
  }, [authFetch]);

  useEffect(() => { loadEvents(); }, [loadEvents]);

  const handleRSVP = async (id) => {
    try {
      const res = await authFetch(`/api/events/${id}/rsvp`, { method: 'POST' });
      if (res.ok) {
        // Optionally reload or visually update state
        alert('RSVP Successful!');
      } else {
        const errorData = await res.json();
        alert(errorData.message || 'Error RSVPing');
      }
    } catch (err) {
      alert('Error RSVPing');
    }
  };

  if (loading) return <div className="loading-center"><div className="spinner" /></div>;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="page-title">🗓️ Green Events</h1>
            <p className="page-subtitle">Join upcoming volunteer opportunities and make an impact.</p>
          </div>
          {canManage && (
            <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>＋ Create Event</button>
          )}
        </div>
      </div>

      <div className="grid-cols-2 stagger">
        {events.length === 0 ? (
          <div className="glass-card" style={{ padding: '64px', gridColumn: '1 / -1' }}>
            <div className="empty-state">
              <div className="empty-state-icon">🗓️</div>
              <p className="empty-state-text">No upcoming events found</p>
            </div>
          </div>
        ) : (
          events.map(event => (
            <div key={event.id} className="glass-card" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{event.title}</h3>
                <span style={{ padding: '4px 8px', borderRadius: '4px', background: 'rgba(0,232,122,0.1)', color: 'var(--accent-primary)', fontSize: '0.8rem' }}>
                  {event.status}
                </span>
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '16px' }}>{event.description}</p>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                <div>📍 {event.location}</div>
                <div>🕒 {new Date(event.date).toLocaleDateString()}</div>
                <div>👥 Max: {event.maxVolunteers || 'Unlimited'}</div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => handleRSVP(event.id)}>
                RSVP Now
              </button>
            </div>
          ))
        )}
      </div>

      {showAddModal && (
        <CreateEventModal 
          onClose={() => setShowAddModal(false)} 
          authFetch={authFetch} 
          onCreated={(newEvent) => setEvents(prev => [...prev, newEvent].sort((a,b) => new Date(a.date) - new Date(b.date)))}
        />
      )}
    </div>
  );
}
