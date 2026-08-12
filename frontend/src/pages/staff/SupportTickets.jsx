import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function SupportTickets() {
  const { authFetch } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Active');

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await authFetch('/admin/moderation-queue');
      if (res.ok) {
        setTickets(await res.json());
      }
    } catch (err) {
      console.error("Error fetching tickets", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [authFetch]);

  const handleAction = async (id, status, action) => {
    try {
      const res = await authFetch(`/admin/moderation/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ status, action })
      });
      if (res.ok) {
        fetchTickets(); // Refresh list
      }
    } catch (err) {
      console.error("Failed to update ticket", err);
    }
  };

  const filteredTickets = tickets.filter(t => 
    activeTab === 'Active' ? t.status === 'PENDING' : 
    activeTab === 'Resolved' ? t.status === 'RESOLVED' : true
  );

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Support & Moderation</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Manage user reports, content moderation, and system incidents.</p>
        </div>
        <Button icon="refresh" onClick={fetchTickets}>Refresh Queue</Button>
      </div>

      <div className="flex gap-4 border-b border-outline-variant/30">
        {['Active', 'Resolved', 'All Tickets'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-4 font-bold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading queue...</p>
      ) : (
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-label-md uppercase border-b border-outline-variant/30">
                <th className="p-5 font-bold">Ticket ID</th>
                <th className="p-5 font-bold">Content / Description</th>
                <th className="p-5 font-bold">Reported By</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredTickets.map(ticket => (
                <tr key={ticket.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-5 text-sm font-mono text-on-surface-variant">{ticket.id.substring(0, 8)}...</td>
                  <td className="p-5">
                    <p className="font-bold text-on-surface">{ticket.post?.title || 'User Report'}</p>
                    <p className="text-sm text-error mt-1">{ticket.reason || 'Flagged Content'}</p>
                  </td>
                  <td className="p-5 font-medium text-on-surface">{ticket.reportedBy?.name || 'Anonymous'}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      ticket.status === 'RESOLVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-error-container text-error'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-5 text-right space-x-2">
                    {ticket.status === 'PENDING' && (
                      <>
                        <button onClick={() => handleAction(ticket.id, 'RESOLVED', 'IGNORE')} className="text-on-surface-variant hover:text-primary font-bold text-sm px-3 py-1 rounded bg-surface-container-high">Dismiss</button>
                        <button onClick={() => handleAction(ticket.id, 'RESOLVED', 'DELETE_POST')} className="text-error hover:bg-error-container font-bold text-sm px-3 py-1 rounded border border-error/30">Delete Content</button>
                      </>
                    )}
                    {ticket.status === 'RESOLVED' && (
                      <span className="text-on-surface-variant text-sm italic">Closed</span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredTickets.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">No tickets in this view.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
