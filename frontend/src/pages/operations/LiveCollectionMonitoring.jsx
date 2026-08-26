import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LiveCollectionMonitoring() {
  const { authFetch } = useAuth();
  const [bins, setBins] = useState([
    { id: 'TR-442', location: 'Science Block A', fillLevel: 98, category: 'PLASTIC', top: '25%', left: '33%' },
    { id: 'TR-108', location: 'Central Dining Court', fillLevel: 92, category: 'ORGANIC', top: '48%', left: '60%' },
    { id: 'TR-205', location: 'West Residence Hall', fillLevel: 45, category: 'PAPER', top: '65%', left: '28%' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const binsRes = await authFetch('/waste/bins');
        if (binsRes.ok) {
          const binsData = await binsRes.json();
          if (binsData && binsData.length > 0) {
            setBins(binsData.map((b, i) => ({
              id: b.id.substring(0, 6).toUpperCase(),
              location: b.location,
              fillLevel: b.fillLevel,
              category: b.category,
              top: `${20 + (i * 20) % 55}%`,
              left: `${25 + (i * 25) % 55}%`,
            })));
          }
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
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Real-Time Telemetry & Dispatch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Live Collection Monitoring</h1>
          <p className="text-sm text-[#556158] mt-1">Live tracking of municipal EV fleet positions and smart bin fill rates.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#9cf6ba]/40 text-[#00522d] font-bold text-xs gap-2 shadow-sm border border-[#9cf6ba]">
            <span className="w-2 h-2 bg-[#2eb872] rounded-full animate-pulse"></span>
            Telemetry Stream Live
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-220px)] min-h-[500px]">
        {/* Left Pane: Interactive Map (8 Cols) */}
        <section className="col-span-12 lg:col-span-8 relative rounded-[32px] overflow-hidden border border-[#bec9be]/40 shadow-sm bg-[#dff1fb]/60">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCAxjW1mBtwl6TZFZ17rGBx7tX9Hr93gTlBp4xdzaCNJ_2GQXBc9YUYBvHCIUX0l-VSn7gTK2I36toLPyknODxVtWrwi94wC0eStZLJ1_fqxbXfkBAsHMihOmh4DosZJor-D9aq5oFyFt-nI_Eib8xnaeFlvG0FG8wAIIf8vku5CAUTt2OWU-tqIMFytt3z-3oLiJ0Pn7a4SvnWjrX_U1e2D_Fh1_cf9ScUNFYXqUsaMxcKmOLLKHm6PWqXHDUKkGgUS7k1TfTgRI')" }}
          >
            {/* Map Floating Fleet Counter */}
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-md flex flex-col gap-2">
                <p className="text-[10px] font-bold text-[#00522d] uppercase tracking-wider">Active Municipal Fleet</p>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-2xl font-bold text-[#0d1e25]">14</span>
                    <p className="text-[10px] text-[#556158]">EV Trucks Active</p>
                  </div>
                  <div className="w-px h-8 bg-[#bec9be]/40"></div>
                  <div>
                    <span className="text-2xl font-bold text-[#2eb872]">02</span>
                    <p className="text-[10px] text-[#556158]">Standby Depots</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Bin Markers */}
            {bins.map((bin) => (
              <div 
                key={bin.id} 
                style={{ top: bin.top, left: bin.left }} 
                className="absolute z-20 cursor-pointer group animate-bounce"
              >
                <div className={`text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 ${
                  bin.fillLevel > 80 ? 'bg-[#ba1a1a]' : 'bg-[#00522d]'
                }`}>
                  <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>delete</span>
                  <span>{bin.fillLevel}% Full</span>
                </div>
                
                <div className="hidden group-hover:block absolute top-8 left-0 bg-white p-3 rounded-xl min-w-[140px] shadow-xl border border-[#bec9be]/40 z-30">
                  <p className="text-xs font-bold text-[#0d1e25]">Bin #{bin.id}</p>
                  <p className="text-[10px] text-[#556158]">{bin.location}</p>
                  <p className="text-[10px] text-[#00522d] font-bold uppercase mt-0.5">{bin.category}</p>
                </div>
              </div>
            ))}

            {/* Floating Truck Position Marker */}
            <div className="absolute bottom-1/3 right-1/4 z-20 cursor-pointer group">
              <div className="bg-[#00522d] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 ring-4 ring-[#9cf6ba]/60">
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                <span>EV-Truck 08 (Route Alpha)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Pane: Live Dispatch Feed (4 Cols) */}
        <section className="col-span-12 lg:col-span-4 bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-[#bec9be]/20 mb-4">
              <h3 className="text-xl font-bold text-[#0d1e25]">Active Route #R-209</h3>
              <span className="text-xs font-bold text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
                En Route
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30">
                <div className="w-8 h-8 rounded-xl bg-[#00522d] text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25]">North Science Complex Bins</h4>
                  <p className="text-[#556158] mt-0.5">Completed at 10:15 AM (140kg emptied)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#9cf6ba]/30 border border-[#9cf6ba]">
                <div className="w-8 h-8 rounded-xl bg-[#24502c] text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25]">Central Plaza North (Target)</h4>
                  <p className="text-[#00210f] mt-0.5">Estimated Arrival: 4 Mins • Sensor #TR-442</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 opacity-70">
                <div className="w-8 h-8 rounded-xl bg-[#bec9be]/50 text-[#556158] flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25]">East Quad Composting Hub</h4>
                  <p className="text-[#556158] mt-0.5">Scheduled for 11:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#bec9be]/20 space-y-2 mt-4">
            <button 
              type="button"
              onClick={() => alert('Direct radio link established with Truck-08!')}
              className="w-full py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">headset_mic</span>
              <span>Contact Driver (Radio Direct)</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
