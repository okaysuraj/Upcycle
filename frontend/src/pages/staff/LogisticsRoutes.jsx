import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function LogisticsRoutes() {
  const { authFetch } = useAuth();
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        const res = await authFetch('/waste/bins');
        if (res.ok) {
          const data = await res.json();
          setBins(data.sort((a, b) => b.fillLevel - a.fillLevel));
        }
      } catch (err) {
        console.error("Error fetching bins:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBins();
  }, [authFetch]);

  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Collection Routes</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Optimize smart bin pickup routes for your campus.</p>
        </div>
        <div className="flex gap-2">
          <Button icon="route">Auto-Generate Routes</Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
          <h3 className="text-headline-sm font-bold text-on-surface mb-4">Critical Bins (Ready for Pickup)</h3>
          
          {loading ? (
            <p className="text-on-surface-variant">Loading bins...</p>
          ) : (
            <div className="divide-y divide-outline-variant/20">
              {bins.filter(b => b.fillLevel > 75).map(bin => (
                <div key={bin.id} className="py-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-error">delete</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{bin.location} - {bin.category}</p>
                      <p className="text-sm text-on-surface-variant">Last emptied: {bin.lastEmptied ? new Date(bin.lastEmptied).toLocaleDateString() : 'Never'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-error">{bin.fillLevel}%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Fill Level</p>
                  </div>
                </div>
              ))}
              {bins.filter(b => b.fillLevel > 75).length === 0 && (
                <p className="text-on-surface-variant py-4">No critical bins at the moment.</p>
              )}
            </div>
          )}
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm">
            <h3 className="text-headline-sm font-bold mb-2">Active Vehicles</h3>
            <p className="text-5xl font-black mb-1">4</p>
            <p className="text-sm opacity-80">Currently on collection routes</p>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
             <h3 className="text-headline-sm font-bold text-on-surface mb-4">Route Efficiency</h3>
             <div className="space-y-4">
               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span>Fuel Saved</span>
                   <span className="font-bold text-primary">12%</span>
                 </div>
                 <div className="w-full bg-surface-container-high rounded-full h-2">
                   <div className="bg-primary h-2 rounded-full" style={{ width: '12%' }}></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span>On-Time Pickups</span>
                   <span className="font-bold text-primary">94%</span>
                 </div>
                 <div className="w-full bg-surface-container-high rounded-full h-2">
                   <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
