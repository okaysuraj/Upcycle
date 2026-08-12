import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function IoTSensors() {
  const { authFetch } = useAuth();
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        const res = await authFetch('/waste/bins');
        if (res.ok) {
          const data = await res.json();
          setBins(data);
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
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Smart Sensors Dashboard</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Live telemetry from campus-wide IoT devices</p>
        </div>
        <Button icon="add_circle">Deploy Sensor</Button>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-48 bg-surface-container-high rounded-xl"></div>
          <div className="h-48 bg-surface-container-high rounded-xl"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bins.map(bin => (
            <div key={bin.id} className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              {bin.fillLevel > 90 && (
                <div className="absolute top-0 right-0 bg-error text-on-error text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 z-10">
                  <span className="material-symbols-outlined text-[14px]">warning</span> Critical
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  bin.category === 'RECYCLING' ? 'bg-secondary-container text-secondary' :
                  bin.category === 'ORGANIC' ? 'bg-tertiary-container text-tertiary' :
                  'bg-surface-container-high text-on-surface-variant'
                }`}>
                  <span className="material-symbols-outlined text-3xl">
                    {bin.category === 'RECYCLING' ? 'recycling' : bin.category === 'ORGANIC' ? 'compost' : 'delete'}
                  </span>
                </div>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-on-surface mb-1">{bin.location}</h3>
                <p className="text-sm text-on-surface-variant uppercase tracking-wider mb-6">{bin.category} • {bin.campus?.name}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Fill Level</span>
                    <span className={`font-bold ${bin.fillLevel > 80 ? 'text-error' : 'text-primary'}`}>{bin.fillLevel}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${bin.fillLevel > 80 ? 'bg-error' : 'bg-primary'}`} 
                      style={{ width: `${bin.fillLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
