import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function Tasks() {
  const { authFetch } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await authFetch('/tasks');
        if (res.ok) {
          const data = await res.json();
          setTasks(data);
        }
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [authFetch]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Task Management</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Assign and monitor maintenance and collection tasks.</p>
        </div>
        <Button icon="add_task">New Task</Button>
      </div>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-label-md uppercase border-b border-outline-variant/30">
                <th className="p-5 font-bold">Title</th>
                <th className="p-5 font-bold">Type</th>
                <th className="p-5 font-bold">Assigned To</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {tasks.map(task => (
                <tr key={task.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-5">
                    <p className="font-bold text-on-surface">{task.title}</p>
                    <p className="text-sm text-on-surface-variant mt-1 line-clamp-1">{task.description}</p>
                  </td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-lg text-xs font-bold uppercase">{task.type}</span>
                  </td>
                  <td className="p-5 font-medium text-on-surface">{task.assignedTo?.name || 'Unassigned'}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      task.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' :
                      task.status === 'IN_PROGRESS' ? 'bg-secondary-container text-on-secondary-container' :
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <button className="text-primary font-bold text-sm hover:underline">View</button>
                  </td>
                </tr>
              ))}
              {tasks.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">No tasks found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
