import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LiveCollectionMonitoring() {
  const { authFetch } = useAuth();
  const [bins, setBins] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [binsRes, logsRes] = await Promise.all([
          authFetch('/waste/bins'),
          authFetch('/waste/logs')
        ]);
        if (binsRes.ok) {
          const binsData = await binsRes.json();
          setBins(binsData);
        }
        if (logsRes.ok) {
          const logsData = await logsRes.json();
          setLogs(logsData);
        }
      } catch (err) {
        console.error("Error fetching waste data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  return (
    <div className="flex flex-col lg:flex-row gap-gutter h-[calc(100vh-100px)] w-full pb-4">
      {/* Left Pane: Interactive Map */}
      <section className="flex-1 relative rounded-[32px] overflow-hidden bg-surface-container border border-outline-variant/30 shadow-sm min-h-[400px]">
        {/* Map Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCAxjW1mBtwl6TZFZ17rGBx7tX9Hr93gTlBp4xdzaCNJ_2GQXBc9YUYBvHCIUX0l-VSn7gTK2I36toLPyknODxVtWrwi94wC0eStZLJ1_fqxbXfkBAsHMihOmh4DosZJor-D9aq5oFyFt-nI_Eib8xnaeFlvG0FG8wAIIf8vku5CAUTt2OWU-tqIMFytt3z-3oLiJ0Pn7a4SvnWjrX_U1e2D_Fh1_cf9ScUNFYXqUsaMxcKmOLLKHm6PWqXHDUKkGgUS7k1TfTgRI')" }}
          ></div>
        </div>
        
        {/* Map Overlays */}
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-4">
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl flex flex-col gap-3 shadow-md border border-white/20">
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Active Fleet</p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-display-sm font-bold text-on-surface leading-tight">14</span>
                <span className="text-xs text-on-surface-variant font-medium">Trucks On-road</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/50"></div>
              <div className="flex flex-col">
                <span className="text-display-sm font-bold text-green-600 leading-tight">02</span>
                <span className="text-xs text-on-surface-variant font-medium">Standby</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bin Status Floating Markers (Rendered dynamically) */}
        {bins.map((bin, index) => {
          // Calculate arbitrary position for visual mock
          const top = `${20 + (index * 15) % 60}%`;
          const left = `${30 + (index * 20) % 50}%`;
          
          return (
            <div key={bin.id} style={{ top, left }} className="absolute z-10 animate-bounce cursor-pointer group">
              <div className={`text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20 ${bin.fillLevel > 80 ? 'bg-error' : 'bg-primary'}`}>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>delete</span> 
                {bin.fillLevel}% Full
              </div>
              <div className="hidden group-hover:block absolute top-10 left-0 bg-white p-3 rounded-xl min-w-[140px] shadow-xl border border-outline-variant/20 z-20">
                <p className="text-sm font-bold text-on-surface">Bin #{bin.id.substring(0,6)}</p>
                <p className="text-xs text-on-surface-variant mt-1">{bin.location}</p>
                <p className="text-xs text-on-surface-variant mt-1 capitalize">{bin.category} Waste</p>
              </div>
            </div>
          );
        })}
        
        {/* Map Controls */}
        <div className="absolute bottom-6 left-6 z-10 flex gap-2">
          <button className="w-12 h-12 bg-white/90 backdrop-blur-md flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-md border border-white/20">
            <span className="material-symbols-outlined">add</span>
          </button>
          <button className="w-12 h-12 bg-white/90 backdrop-blur-md flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-md border border-white/20">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <button className="w-12 h-12 bg-white/90 backdrop-blur-md flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-md border border-white/20 ml-2">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>
      </section>

      {/* Right Pane: Route and Feed */}
      <section className="w-full lg:w-96 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar shrink-0">
        {/* Current Route Card */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-headline-sm font-bold text-on-surface">Current Route</h2>
            <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-lg">#R-209</span>
          </div>
          
          <div className="space-y-6 relative ml-2">
            {/* Vertical line for route */}
            <div className="absolute left-[11px] top-4 w-0.5 h-[calc(100%-40px)] bg-surface-variant"></div>
            
            {/* Mock Route Stops */}
            <div className="relative pl-10 flex gap-4 group cursor-pointer">
              <div className="absolute left-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-[14px]">check</span>
              </div>
              <div className="group-hover:translate-x-1 transition-transform">
                <p className="text-sm font-bold text-on-surface">Administrative Hub</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Collected: 450kg • 08:30 AM</p>
              </div>
            </div>
            
            <div className="relative pl-10 flex gap-4 group cursor-pointer">
              <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary/20 z-10">
                <span className="material-symbols-outlined text-white text-[14px] animate-pulse">local_shipping</span>
              </div>
              <div className="w-full group-hover:translate-x-1 transition-transform">
                <p className="text-sm font-bold text-primary">Library Courtyard</p>
                <p className="text-xs text-primary font-bold italic mt-0.5">In Progress • Eta 4m</p>
                <div className="mt-3 w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 transition-all duration-1000 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="relative pl-10 flex gap-4 opacity-60 group cursor-pointer hover:opacity-100 transition-opacity">
              <div className="absolute left-0 w-6 h-6 rounded-full bg-surface-variant border border-outline-variant/50 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-on-surface-variant"></div>
              </div>
              <div className="group-hover:translate-x-1 transition-transform">
                <p className="text-sm font-bold text-on-surface">Student Housing (West)</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Next Stop • Est. 09:15 AM</p>
              </div>
            </div>
          </div>
          
          <button className="mt-8 w-full py-3 bg-secondary/10 text-secondary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/20 transition-colors">
            <span className="material-symbols-outlined">map</span>
            View Full Schedule
          </button>
        </div>

        {/* Driver Feed / Logs Card */}
        <div className="bg-white flex-1 rounded-[24px] p-6 border border-outline-variant/30 shadow-sm flex flex-col min-h-[300px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-headline-sm font-bold text-on-surface">Driver & System Feed</h2>
            <div className="flex items-center gap-2">
               <span className="text-xs font-bold text-green-600">Live</span>
               <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <p className="text-center text-on-surface-variant text-sm py-4">Loading feed...</p>
            ) : logs.length === 0 ? (
              <p className="text-center text-on-surface-variant text-sm py-4">No recent activity.</p>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/30 transition-colors cursor-pointer shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-sm text-on-surface">{log.user?.name || 'System'}</span>
                      <span className="text-xs text-on-surface-variant">{new Date(log.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                   </div>
                   <p className="text-sm text-on-surface-variant">Logged {log.weightKg}kg of {log.wasteType.toLowerCase()} waste at {log.campus?.name}.</p>
                   {log.notes && (
                     <p className="text-xs text-on-surface-variant mt-2 italic flex items-center gap-1">
                       <span className="material-symbols-outlined text-[14px]">edit_note</span> {log.notes}
                     </p>
                   )}
                </div>
              ))
            )}
            
            {/* Persistent System Alert Mock */}
            <div className="p-4 rounded-2xl bg-error/5 border border-error/20 hover:border-error/40 transition-colors cursor-pointer shadow-sm mt-4">
               <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-sm text-error flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">warning</span> System Alert</span>
                  <span className="text-xs text-error/70">5m ago</span>
               </div>
               <p className="text-sm text-error/90">Anomaly detected: Rapid fill rate at Science Block A.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
