import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['Plantation', 'Watering', 'Weeding', 'Harvesting', 'Pruning', 'Irrigation', 'Soil Preparation'];
const PRIORITIES = ['Low', 'Medium', 'High'];
const STATUSES = ['Pending', 'Assigned', 'In-Progress', 'Completed'];

const CATEGORY_ICONS = {
  Plantation: '🌱', Watering: '💧', Weeding: '🌿', Harvesting: '🌾',
  Pruning: '✂️', Irrigation: '🔧', 'Soil Preparation': '🌍',
};

function TaskCard({ task, onStatusChange, onAutoAssign, onDelete, canManage }) {
  const [statusLoading, setStatusLoading] = useState(false);

  const handleStatus = async (newStatus) => {
    setStatusLoading(true);
    await onStatusChange(task._id, newStatus);
    setStatusLoading(false);
  };

  const overdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'Completed';

  return (
    <div className={`glass-card task-card task-card-${task.priority.toLowerCase()}`}>
      {/* Top Row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.1rem' }}>{CATEGORY_ICONS[task.category] || '🌿'}</span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{task.title}</h4>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span>
            <span className={`badge badge-${task.status.toLowerCase().replace(' ', '-').replace('in-progress', 'in-progress')}`}>{task.status}</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', padding: '2px 8px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px' }}>{task.category}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {canManage && task.status === 'Pending' && (
            <button className="btn btn-gold btn-sm" style={{ whiteSpace: 'nowrap' }} onClick={() => onAutoAssign(task._id)}>
              ⚡ Auto-Assign
            </button>
          )}
          {canManage && (
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(task._id)} style={{ padding: '7px' }}>🗑</button>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '14px', lineHeight: '1.6' }}>
        {task.description}
      </p>

      {/* Meta Row */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '14px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
        {task.assigneeName && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            👤 <span style={{ color: 'var(--text-secondary)' }}>{task.assigneeName}</span>
          </span>
        )}
        {task.dueDate && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: overdue ? '#f87171' : 'var(--text-dim)' }}>
            📅 {overdue ? '⚠️ Overdue: ' : ''}{new Date(task.dueDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        )}
        {task.completedAt && (
          <span style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            ✅ Completed {new Date(task.completedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
          </span>
        )}
      </div>

      {/* Materials */}
      {task.materialsUsed?.length > 0 && (
        <div style={{ marginBottom: '14px' }}>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Materials</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {task.materialsUsed.map((m, i) => (
              <span key={i} style={{ fontSize: '0.72rem', padding: '3px 8px', background: 'rgba(0,232,122,0.08)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                {m.name} × {m.quantity}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Status Selector */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {STATUSES.map(s => (
          <button
            key={s}
            disabled={statusLoading || task.status === s}
            onClick={() => handleStatus(s)}
            style={{
              padding: '5px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600,
              cursor: task.status === s ? 'default' : 'pointer',
              background: task.status === s ? 'rgba(0,232,122,0.15)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${task.status === s ? 'rgba(0,232,122,0.3)' : 'var(--border-subtle)'}`,
              color: task.status === s ? 'var(--accent-primary)' : 'var(--text-dim)',
              transition: 'all 0.2s ease',
            }}
          >{s}</button>
        ))}
      </div>
    </div>
  );
}

function AutoAssignModal({ taskId, onClose, authFetch }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await authFetch(`/api/tasks/${taskId}/auto-assign`, { method: 'POST' });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally { setLoading(false); }
    })();
  }, [taskId, authFetch]);

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <div className="modal-title">⚡ Auto-Assignment Engine</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '4px' }}>Smart scoring based on skills, workload & availability</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {loading && <div className="loading-center"><div className="spinner" /><p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Running assignment engine...</p></div>}

        {error && (
          <div style={{ padding: '16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', color: '#fca5a5' }}>
            ⚠️ {error}
          </div>
        )}

        {result && (
          <div>
            {/* Winner */}
            <div style={{ padding: '20px', background: 'rgba(0,232,122,0.08)', border: '1px solid rgba(0,232,122,0.25)', borderRadius: '12px', marginBottom: '20px' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✅ Assigned To</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--gradient-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', color: '#050f0a' }}>
                  {result.assignedTo?.name?.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>{result.assignedTo?.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Score: <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{result.assignedTo?.totalScore?.toFixed(1)}</span> pts</p>
                </div>
              </div>
            </div>

            {/* Score Breakdown */}
            {result.assignedTo && (
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Score Breakdown</p>
                <div>
                  <div className="score-row">
                    <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>🎯 Matched Skills</span>
                    <span className="score-positive">+{result.assignedTo.skillScore}</span>
                  </div>
                  <div className="score-row">
                    <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>📋 Active Task Penalty ({result.assignedTo.activeTasks} × 3)</span>
                    <span className="score-negative">-{result.assignedTo.workloadPenalty}</span>
                  </div>
                  <div className="score-row">
                    <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>⏰ Availability ({result.assignedTo.availabilityHours}h × 0.5)</span>
                    <span className="score-positive">+{result.assignedTo.availabilityBonus}</span>
                  </div>
                  {result.assignedTo.roleBonus > 0 && (
                    <div className="score-row">
                      <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>⭐ Staff/Admin Bonus</span>
                      <span className="score-positive">+{result.assignedTo.roleBonus}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--border-glow)' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Final Score</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{result.assignedTo.totalScore?.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Other Candidates */}
            {result.allCandidates?.length > 1 && (
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>All Candidates</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {result.allCandidates.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', width: '20px' }}>#{i + 1}</span>
                        <span style={{ fontSize: '0.83rem', fontWeight: i === 0 ? 700 : 400, color: i === 0 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>{c.name}</span>
                        {i === 0 && <span style={{ fontSize: '0.65rem', background: 'rgba(0,232,122,0.15)', color: 'var(--accent-primary)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>BEST</span>}
                      </div>
                      <span style={{ fontWeight: 700, color: i === 0 ? 'var(--accent-primary)' : 'var(--text-dim)', fontFamily: 'var(--font-display)' }}>{c.totalScore?.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }} onClick={onClose}>
              ✅ Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function NewTaskModal({ onClose, authFetch, onCreated }) {
  const [form, setForm] = useState({
    title: '', description: '', category: 'Plantation', priority: 'Medium',
    dueDate: '', materialsUsed: [], notes: '',
  });
  const [materialInput, setMaterialInput] = useState({ name: '', quantity: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addMaterial = () => {
    if (!materialInput.name || !materialInput.quantity) return;
    setForm(f => ({ ...f, materialsUsed: [...f.materialsUsed, { name: materialInput.name, quantity: parseInt(materialInput.quantity) }] }));
    setMaterialInput({ name: '', quantity: '' });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authFetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ ...form, dueDate: form.dueDate || undefined }),
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
      <div className="modal-box" style={{ maxWidth: '560px' }}>
        <div className="modal-header">
          <div className="modal-title">🌱 Create New Task</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {error && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.83rem', marginBottom: '16px' }}>⚠️ {error}</div>}

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group">
            <label className="form-label">Task Title *</label>
            <input id="task-title" className="form-input" placeholder="e.g. Plant seasonal saplings in Block A" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea id="task-desc" className="form-textarea" placeholder="Detailed task instructions..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select id="task-category" className="form-select" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Priority</label>
              <select id="task-priority" className="form-select" value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}>
                {PRIORITIES.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input id="task-due" type="date" className="form-input" value={form.dueDate} onChange={e => setForm(f => ({ ...f, dueDate: e.target.value }))} />
            </div>
          </div>

          {/* Materials */}
          <div className="form-group">
            <label className="form-label">Materials Required</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input className="form-input" placeholder="Material name" value={materialInput.name} onChange={e => setMaterialInput(m => ({ ...m, name: e.target.value }))} style={{ flex: 2 }} />
              <input className="form-input" type="number" placeholder="Qty" value={materialInput.quantity} onChange={e => setMaterialInput(m => ({ ...m, quantity: e.target.value }))} style={{ flex: 1 }} min="1" />
              <button type="button" className="btn btn-outline btn-sm" onClick={addMaterial}>Add</button>
            </div>
            {form.materialsUsed.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                {form.materialsUsed.map((m, i) => (
                  <span key={i} style={{ padding: '3px 10px', background: 'rgba(0,232,122,0.1)', border: '1px solid var(--border-subtle)', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
                    onClick={() => setForm(f => ({ ...f, materialsUsed: f.materialsUsed.filter((_, j) => j !== i) }))}>
                    {m.name} × {m.quantity} ✕
                  </span>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button id="create-task-submit" type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <><div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} /> Creating...</> : '🌱 Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Tasks() {
  const { authFetch, user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [autoAssignTaskId, setAutoAssignTaskId] = useState(null);
  const [showNewTask, setShowNewTask] = useState(false);

  const canManage = user?.role === 'admin' || user?.role === 'staff';

  const loadTasks = useCallback(async () => {
    try {
      const res = await authFetch('/api/tasks');
      const data = await res.json();
      setTasks(Array.isArray(data) ? data : []);
    } catch { } finally { setLoading(false); }
  }, [authFetch]);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  const handleStatusChange = async (id, newStatus) => {
    const res = await authFetch(`/api/tasks/${id}`, { method: 'PUT', body: JSON.stringify({ status: newStatus }) });
    if (res.ok) {
      const updated = await res.json();
      setTasks(ts => ts.map(t => t._id === id ? updated : t));
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this task?')) return;
    const res = await authFetch(`/api/tasks/${id}`, { method: 'DELETE' });
    if (res.ok) setTasks(ts => ts.filter(t => t._id !== id));
  };

  const handleAutoAssignClose = () => {
    setAutoAssignTaskId(null);
    loadTasks();
  };

  const TABS = ['All', 'Pending', 'Assigned', 'In-Progress', 'Completed'];
  const filtered = activeTab === 'All' ? tasks : tasks.filter(t => t.status === activeTab);

  if (loading) return <div className="loading-center"><div className="spinner" /></div>;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="page-title">📋 Task Management</h1>
            <p className="page-subtitle">{tasks.length} total tasks · {tasks.filter(t => t.status === 'Pending').length} pending assignment</p>
          </div>
          {canManage && (
            <button id="new-task-btn" className="btn btn-primary" onClick={() => setShowNewTask(true)}>
              ＋ New Task
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '24px' }}>
        <div className="tabs">
          {TABS.map(tab => (
            <div key={tab} id={`tab-${tab.toLowerCase()}`} className={`tab-item ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
              <span style={{ marginLeft: '6px', fontSize: '0.65rem', background: 'rgba(0,0,0,0.3)', padding: '1px 5px', borderRadius: '999px' }}>
                {tab === 'All' ? tasks.length : tasks.filter(t => t.status === tab).length}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Task Grid */}
      {filtered.length === 0 ? (
        <div className="glass-card" style={{ padding: '64px' }}>
          <div className="empty-state">
            <div className="empty-state-icon">🌱</div>
            <h3 style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>No {activeTab !== 'All' ? activeTab : ''} Tasks</h3>
            <p className="empty-state-text">
              {activeTab === 'All' ? 'Create your first task to get started.' : `No tasks with "${activeTab}" status.`}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid-cols-2 stagger">
          {filtered.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onStatusChange={handleStatusChange}
              onAutoAssign={setAutoAssignTaskId}
              onDelete={handleDelete}
              canManage={canManage}
            />
          ))}
        </div>
      )}

      {/* Modals */}
      {autoAssignTaskId && (
        <AutoAssignModal
          taskId={autoAssignTaskId}
          onClose={handleAutoAssignClose}
          authFetch={authFetch}
        />
      )}
      {showNewTask && (
        <NewTaskModal
          onClose={() => setShowNewTask(false)}
          authFetch={authFetch}
          onCreated={(t) => setTasks(ts => [t, ...ts])}
        />
      )}
    </div>
  );
}
