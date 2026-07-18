import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function ContentModeration() {
  const { authFetch } = useAuth();
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQueue();
  }, [authFetch]);

  const fetchQueue = async () => {
    try {
      const res = await authFetch('/admin/moderation-queue');
      if (res.ok) {
        const data = await res.json();
        setQueue(data);
      }
    } catch (err) {
      console.error("Error fetching moderation queue:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, status, actionType) => {
    try {
      const res = await authFetch(`/admin/moderation/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ status, action: actionType })
      });
      if (res.ok) {
        // Remove from UI queue
        setQueue(queue.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error("Error executing moderation action:", err);
    }
  };

  return (
    <div className="flex flex-col gap-md h-full">
      {/* Header Actions */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
            <span className="hover:text-primary cursor-pointer">MODERATION</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-bold">AUDIT PANEL</span>
          </nav>
          <h1 className="text-display-sm font-display-sm text-primary">Content Audit Panel</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-primary text-primary text-label-md font-label-md rounded hover:bg-primary-fixed transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">filter_list</span> Advanced Filters
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary text-label-md font-label-md rounded flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">verified_user</span> Apply Batch Actions
          </button>
        </div>
      </div>

      {/* Moderation Dashboard Grid */}
      <div className="grid grid-cols-12 gap-gutter flex-1">
        {/* Audit Feed (The Main Column) */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          {/* Stats Overview Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white border border-outline-variant/30 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 bg-error-container text-on-error-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined">emergency_home</span>
              </div>
              <div>
                <span className="text-label-sm text-on-surface-variant block uppercase tracking-tighter">Critical Priority</span>
                <span className="text-headline-md font-headline-md text-on-surface">{queue.length > 0 ? 1 : 0}</span>
              </div>
            </div>
            <div className="bg-white border border-outline-variant/30 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <span className="text-label-sm text-on-surface-variant block uppercase tracking-tighter">Avg. Response Time</span>
                <span className="text-headline-md font-headline-md text-on-surface">1.2h</span>
              </div>
            </div>
            <div className="bg-white border border-outline-variant/30 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded flex items-center justify-center">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <span className="text-label-sm text-on-surface-variant block uppercase tracking-tighter">Resolved (24h)</span>
                <span className="text-headline-md font-headline-md text-on-surface">142</span>
              </div>
            </div>
          </div>

          {/* Active Reports */}
          {loading ? (
            <p className="text-secondary text-center py-8">Loading moderation queue...</p>
          ) : queue.length === 0 ? (
            <div className="bg-white border border-outline-variant/30 rounded-lg p-12 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-4">task_alt</span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Queue is empty</h3>
              <p>Great job! All pending reports have been resolved.</p>
            </div>
          ) : (
            queue.map((item) => (
              <div key={item.id} className="bg-white border border-outline-variant/30 rounded-lg overflow-hidden transition-all hover:shadow-sm">
                <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-error-container text-on-error-container text-label-sm font-label-sm rounded uppercase">{item.category || 'General Report'}</span>
                    <span className="text-label-sm text-on-surface-variant">Reported by <span className="font-bold">{item.reportedBy?.name || 'Anonymous'}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant">flag</span>
                    <span className="text-label-sm font-label-sm">1 Report</span>
                  </div>
                </div>
                <div className="p-6 flex gap-6">
                  <div className="w-32 h-32 flex-shrink-0 bg-surface-container rounded flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">image</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-headline-sm font-headline-sm text-primary">Report ID: {item.id.substring(0,8)}</h3>
                      <div className="flex gap-2">
                        <button className="p-2 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">zoom_in</span></button>
                      </div>
                    </div>
                    <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                      "{item.reason || 'No description provided.'}"
                    </p>
                    <div className="flex items-center gap-4 text-label-sm">
                      {item.postId && (
                        <div className="flex items-center gap-1 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px]">post_add</span>
                          <span>Linked Post: {item.postId.substring(0,8)}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-error-warm">
                        <span className="material-symbols-outlined text-[16px]">warning</span>
                        <span>Requires human review</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Moderation Action Bar */}
                <div className="bg-surface-container-lowest border-t border-outline-variant/10 p-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleAction(item.id, 'RESOLVED', 'IGNORE')}
                      className="px-4 py-2 border border-outline text-on-surface text-label-md font-label-md rounded hover:bg-surface-variant transition-colors"
                    >
                      Dismiss Report
                    </button>
                    <button className="px-4 py-2 border border-outline text-on-surface text-label-md font-label-md rounded hover:bg-surface-variant transition-colors">Request More Info</button>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-error text-white text-label-md font-label-md rounded hover:bg-error/90 transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">gavel</span> Penalize User
                    </button>
                    <button 
                      onClick={() => handleAction(item.id, 'RESOLVED', 'DELETE_POST')}
                      className="px-4 py-2 bg-primary text-on-primary text-label-md font-label-md rounded hover:bg-primary-container hover:text-on-primary-container transition-colors"
                    >
                      Resolve & Remove Content
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Sidebar: AI Insights & Quick Actions */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          {/* System Alerts */}
          <div className="bg-white border border-outline-variant/30 rounded-lg p-4">
            <h3 className="text-label-lg font-bold text-on-surface flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              AI Moderation Alerts
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-surface-container-low rounded border-l-2 border-error-warm">
                <p className="text-label-md font-bold text-on-surface mb-1">Spam Pattern Detected</p>
                <p className="text-label-sm text-on-surface-variant">Multiple identical marketplace listings from IPs in Region B. Auto-quarantine engaged.</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded border-l-2 border-primary">
                <p className="text-label-md font-bold text-on-surface mb-1">Automated Resolution</p>
                <p className="text-label-sm text-on-surface-variant">34 minor profanity infractions auto-resolved in the last hour via Chat Filter v2.</p>
              </div>
            </div>
            <button className="w-full mt-4 text-center text-primary text-label-md font-bold hover:underline">View All AI Logs</button>
          </div>
          
          {/* Quick Filters */}
          <div className="bg-white border border-outline-variant/30 rounded-lg p-4">
            <h3 className="text-label-lg font-bold text-on-surface mb-4">Quick Filters</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-label-sm hover:bg-primary hover:text-on-primary transition-colors">Harassment (12)</button>
              <button className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-label-sm hover:bg-primary hover:text-on-primary transition-colors">Spam (45)</button>
              <button className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-label-sm hover:bg-primary hover:text-on-primary transition-colors">Fraud (3)</button>
              <button className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-label-sm hover:bg-primary hover:text-on-primary transition-colors">NSFW (1)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
