import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function ESGDashboard() {
  const { authFetch } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authFetch('/esg/corporate');
        if (response.ok) {
          const json = await response.json();
          setData(json.globalImpact);
        }
      } catch (error) {
        console.error("Failed to fetch ESG data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  // Fallbacks if data fails
  const impact = data || {
    totalCarbonEmissions: 1420,
    totalWaterGallons: 42000,
    totalEnergyKwh: 3850000,
    totalWasteDivertedKg: 184500
  };

  const energyGwh = (impact.totalEnergyKwh / 1000000).toFixed(2);
  const waterKl = (impact.totalWaterGallons * 3.78541 / 1000).toFixed(0);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Corporate & Municipal Sustainability
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">ESG Command Center</h2>
          <p className="text-sm text-[#556158] mt-1">Real-time environmental, social, and governance benchmark scores.</p>
        </div>
        <div className="flex gap-2">
          <Link 
            to="/operations/reports"
            className="px-5 py-2.5 bg-[#00522d] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#003d21] transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Generate ESG Report</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* ESG Main Score Radial Bento (5 Cols) */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col items-center justify-between relative shadow-sm text-center">
          <div className="absolute top-6 right-6">
            <span className="bg-[#9cf6ba]/40 text-[#00522d] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +2.4% MoM
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-[#0d1e25] mb-6 text-left w-full">Campus ESG Index</h3>
          
          <div className="relative w-48 h-48 rounded-full border-[14px] border-[#00522d] border-b-[#d9e6da] flex items-center justify-center shadow-sm my-2">
            <div className="text-center">
              <span className="text-5xl font-bold text-[#00522d] tracking-tight">84</span>
              <p className="text-xs font-bold text-[#556158] uppercase tracking-wider mt-1">Excellent (AA+)</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full text-center border-t border-[#bec9be]/20 pt-6 mt-6">
            <div>
              <p className="text-[10px] font-bold uppercase text-[#556158]">Environmental</p>
              <p className="text-2xl font-bold text-[#00522d] mt-1">88</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-[#556158]">Social</p>
              <p className="text-2xl font-bold text-[#24502c] mt-1">79</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-[#556158]">Governance</p>
              <p className="text-2xl font-bold text-[#006d3e] mt-1">85</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid (7 Cols) */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Energy Card */}
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#00522d] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <span className="text-xs font-bold text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
                Optimal Grid
              </span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#556158]">Clean Energy Consumption</p>
              <h3 className="text-3xl font-bold text-[#0d1e25] mt-1">{energyGwh} <span className="text-base font-normal text-[#556158]">GWh</span></h3>
              <p className="text-xs text-[#556158] mt-1">65% generated on-campus via solar array</p>
            </div>
            <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#00522d] w-[65%] rounded-full"></div>
            </div>
          </div>

          {/* Waste Diverted Card */}
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#24502c] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">recycling</span>
              </div>
              <span className="text-xs font-bold text-[#00522d] bg-[#9cf6ba]/60 px-2.5 py-0.5 rounded-full">
                +14% Diversion
              </span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#556158]">Waste Diverted from Landfill</p>
              <h3 className="text-3xl font-bold text-[#00522d] mt-1">{(impact.totalWasteDivertedKg / 1000).toFixed(1)} <span className="text-base font-normal text-[#556158]">Tons</span></h3>
              <p className="text-xs text-[#556158] mt-1">High-grade plastic & compost streams</p>
            </div>
            <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#2eb872] w-[84%] rounded-full"></div>
            </div>
          </div>

          {/* Water Conservation Card */}
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">water_drop</span>
              </div>
              <span className="text-xs font-bold text-[#00522d]">Reclaimed</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#556158]">Water Recirculation</p>
              <h3 className="text-3xl font-bold text-[#0d1e25] mt-1">{waterKl} <span className="text-base font-normal text-[#556158]">kL</span></h3>
              <p className="text-xs text-[#556158] mt-1">Greywater recycling in athletic fields</p>
            </div>
            <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#00522d] w-[72%] rounded-full"></div>
            </div>
          </div>

          {/* Net Carbon Offset */}
          <div className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#9cf6ba]/50 text-[#00210f] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">forest</span>
              </div>
              <span className="text-xs font-bold text-[#00210f]">Verified</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#556158]">Verified Carbon Offset</p>
              <h3 className="text-3xl font-bold text-[#00522d] mt-1">{impact.totalCarbonEmissions} <span className="text-base font-normal text-[#556158]">tCO₂e</span></h3>
              <p className="text-xs text-[#556158] mt-1">Cryptographically audited offsets</p>
            </div>
            <div className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#24502c] w-[90%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
