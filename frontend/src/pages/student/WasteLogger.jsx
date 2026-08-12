import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function WasteLogger() {
  const { authFetch } = useAuth();
  const [logs, setLogs] = useState([]);
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    category: 'PLASTIC',
    quantityKg: '',
    campusId: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [logsRes, campusRes] = await Promise.all([
          authFetch('/waste/logs'),
          authFetch('/campus')
        ]);
        
        if (logsRes.ok) setLogs(await logsRes.json());
        if (campusRes.ok) {
          const cData = await campusRes.json();
          setCampuses(cData);
          if (cData.length > 0) setFormData(prev => ({ ...prev, campusId: cData[0].id }));
        }
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await authFetch('/waste/logs', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const newLog = await res.json();
        setLogs([newLog, ...logs]);
        setFormData({ ...formData, quantityKg: '' }); // Reset quantity but keep category/campus
      }
    } catch (err) {
      console.error("Failed to log waste", err);
    } finally {
      setSubmitting(false);
    }
  };

  const categories = ['PLASTIC', 'PAPER', 'GLASS', 'METAL', 'ORGANIC', 'E_WASTE', 'GENERAL'];

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      <div>
        <h2 className="text-display-sm font-display-sm text-primary font-bold">Personal Waste Logger</h2>
        <p className="text-body-lg text-on-surface-variant mt-2">Track the waste you personally sort, recycle, or divert from landfills.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-title-lg text-on-surface mb-2">New Entry</h3>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-on-surface-variant">Campus</label>
              <select 
                className="bg-surface-container border border-outline-variant/50 rounded-xl p-3 focus:outline-none focus:border-primary"
                value={formData.campusId}
                onChange={e => setFormData({...formData, campusId: e.target.value})}
                required
              >
                <option value="">Select Campus...</option>
                {campuses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-on-surface-variant">Material Category</label>
              <select 
                className="bg-surface-container border border-outline-variant/50 rounded-xl p-3 focus:outline-none focus:border-primary"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-on-surface-variant">Quantity (kg)</label>
              <input 
                type="number" 
                step="0.1" 
                min="0.1"
                required
                className="bg-surface-container border border-outline-variant/50 rounded-xl p-3 focus:outline-none focus:border-primary"
                placeholder="e.g. 2.5"
                value={formData.quantityKg}
                onChange={e => setFormData({...formData, quantityKg: e.target.value})}
              />
            </div>

            <Button type="submit" disabled={submitting || !formData.campusId} className="w-full mt-4">
              {submitting ? 'Logging...' : 'Log Waste Entry'}
            </Button>
          </form>
          
          <div className="bg-primary-container text-on-primary-container rounded-3xl p-6">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">eco</span> Did you know?
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">Logging just 5kg of recycling earns you 50 EcoPoints. Diverting organic waste to compost earns a 2x point multiplier!</p>
          </div>
        </div>

        <div className="lg:col-span-2">
           <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-sm overflow-hidden h-full flex flex-col">
             <div className="px-6 py-5 border-b border-outline-variant/30">
               <h3 className="font-bold text-title-lg text-on-surface">Recent Logs</h3>
             </div>
             
             {loading ? (
               <div className="p-8 text-center text-on-surface-variant flex-1">Loading history...</div>
             ) : (
               <div className="divide-y divide-outline-variant/20 overflow-y-auto max-h-[600px] flex-1">
                 {logs.map(log => (
                   <div key={log.id} className="p-5 flex justify-between items-center hover:bg-surface-container-lowest/50 transition-colors">
                     <div className="flex gap-4 items-center">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${
                         log.category === 'PLASTIC' ? 'bg-blue-100 text-blue-700' :
                         log.category === 'PAPER' ? 'bg-amber-100 text-amber-700' :
                         log.category === 'ORGANIC' ? 'bg-emerald-100 text-emerald-700' :
                         'bg-surface-container-high text-on-surface-variant'
                       }`}>
                         {log.category.substring(0, 3)}
                       </div>
                       <div>
                         <p className="font-bold text-on-surface">{log.category}</p>
                         <p className="text-sm text-on-surface-variant">{new Date(log.date).toLocaleString()} • {log.campus?.name}</p>
                       </div>
                     </div>
                     <span className="font-black text-xl text-primary">{log.quantityKg} kg</span>
                   </div>
                 ))}
                 {logs.length === 0 && (
                   <div className="p-12 text-center text-on-surface-variant">
                     No waste logs found. Start tracking today!
                   </div>
                 )}
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
