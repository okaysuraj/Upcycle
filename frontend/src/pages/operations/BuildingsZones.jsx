import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function BuildingsZones() {
  const navigate = useNavigate();
  const { authFetch } = useAuth();
  const [filter, setFilter] = useState('All');
  const [buildings, setBuildings] = useState([
    {
      id: 'b-1',
      name: 'North Science Complex',
      location: 'Sector 4, Main Campus',
      status: 'Operational',
      zones: 14,
      efficiency: 96.4,
      smartBins: 28,
      leadTechnician: 'Dr. Sarah Keller',
    },
    {
      id: 'b-2',
      name: 'Eco-Engineering Hub',
      location: 'Sector 2, South Quad',
      status: 'Operational',
      zones: 8,
      efficiency: 92.1,
      smartBins: 16,
      leadTechnician: 'Marcus Vance',
    },
    {
      id: 'b-3',
      name: 'Central Dining Facility',
      location: 'Central Plaza',
      status: 'Maintenance',
      zones: 6,
      efficiency: 74.5,
      smartBins: 22,
      leadTechnician: 'Elena Rostova',
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const res = await authFetch('/campuses');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mappedBuildings = data.map((campus) => ({
              id: campus.id,
              name: campus.name,
              location: campus.location || 'Municipal District Campus',
              status: campus.sustainabilityScore > 75 ? 'Operational' : 'Maintenance',
              zones: campus._count?.users || 12,
              efficiency: campus.sustainabilityScore || 88.5,
              smartBins: campus._count?.smartBins || 18,
              leadTechnician: 'Campus Coordinator',
            }));
            setBuildings(mappedBuildings);
          }
        }
      } catch (err) {
        console.error("Failed to fetch campuses", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBuildings();
  }, [authFetch]);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Campus Infrastructure & Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Campus Infrastructure</h2>
          <p className="text-sm text-[#556158] mt-1">Manage buildings, monitor telemetry, and coordinate zero-waste zones.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Filter Chips */}
          <div className="flex gap-1.5 bg-white p-1 rounded-full border border-[#bec9be]/40 shadow-sm">
            {['All', 'Operational', 'Maintenance'].map((f) => (
              <button 
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === f 
                    ? 'bg-[#00522d] text-white shadow-sm' 
                    : 'text-[#556158] hover:bg-[#e7f6ff]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <Link 
            to="/operations/buildings/add"
            className="px-4 py-2 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span>Add Building</span>
          </Link>
        </div>
      </div>

      {/* Dashboard Stats (Bento Style) */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm flex flex-col justify-center relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00522d] mb-1 block">Global Performance</span>
              <h3 className="text-4xl font-bold text-[#0d1e25] tracking-tight">94.2%</h3>
              <p className="text-xs text-[#556158] mt-1">Campus wide telemetry active and in sync</p>
            </div>
            <div className="text-right">
              <span className="flex items-center justify-end gap-1 text-[#2eb872] font-bold text-sm">
                <span className="material-symbols-outlined text-base">trending_up</span> +2.4%
              </span>
              <p className="text-xs text-[#556158]">vs. last quarter</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Active Facilities</span>
            <h3 className="text-3xl font-bold text-[#00522d] mt-1 tracking-tight">24 Buildings</h3>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs font-semibold text-[#556158] mb-1">
              <span>Coverage Target</span>
              <span>80%</span>
            </div>
            <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#00522d] w-4/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Building Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buildings.filter(b => filter === 'All' || b.status === filter).map(b => (
          <div 
            key={b.id} 
            className="bg-white border border-[#bec9be]/30 rounded-[28px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-2xl">corporate_fare</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  b.status === 'Operational' ? 'bg-[#9cf6ba] text-[#00210f]' : 'bg-[#ffdad6] text-[#ba1a1a]'
                }`}>
                  {b.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#0d1e25] group-hover:text-[#00522d] transition-colors">
                {b.name}
              </h4>
              <p className="text-xs text-[#556158] mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                {b.location}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#bec9be]/20">
                <div className="p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
                  <span className="text-[10px] font-bold uppercase text-[#556158]">Active Zones</span>
                  <p className="text-base font-bold text-[#0d1e25] mt-0.5">{b.zones} Zones</p>
                </div>
                <div className="p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
                  <span className="text-[10px] font-bold uppercase text-[#556158]">Efficiency</span>
                  <p className="text-base font-bold text-[#00522d] mt-0.5">{b.efficiency}%</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#bec9be]/20 flex items-center justify-between">
              <span className="text-xs text-[#556158] font-medium">{b.smartBins} Connected Bins</span>
              <Link 
                to={`/operations/buildings/list`}
                className="text-xs font-bold text-[#00522d] hover:underline flex items-center gap-0.5"
              >
                <span>View Details</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
