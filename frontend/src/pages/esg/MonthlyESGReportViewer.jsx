import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function MonthlyESGReportViewer() {
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

  if (loading) {
    return <div className="p-8 text-center text-secondary">Loading Report...</div>;
  }

  // Fallbacks if data fails
  const impact = data || {
    totalCarbonEmissions: 0,
    totalWaterGallons: 0,
    totalEnergyKwh: 0,
    totalWasteDivertedKg: 0,
    estimatedCarbonOffsetKg: 0
  };

  const carbonOffsetPct = impact.estimatedCarbonOffsetKg ? ((impact.estimatedCarbonOffsetKg / 1000) * 100).toFixed(1) : '0.0';
  const energyMwh = (impact.totalEnergyKwh / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 });
  const waterLiters = (impact.totalWaterGallons * 3.78541).toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-12">
      {/* Header Summary Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
             <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full">Reports</span>
             <span className="text-on-surface-variant text-sm font-bold">/</span>
             <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full">2024</span>
             <span className="text-on-surface-variant text-sm font-bold">/</span>
             <span className="font-bold text-sm text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Corporate</span>
          </div>
          <h2 className="font-display text-display-sm md:text-display-md font-bold text-primary leading-tight">Corporate Report</h2>
          <p className="font-body-lg text-on-surface-variant mt-4 text-lg">Executive summary of global sustainability performance, resource circularity, and infrastructure progression.</p>
        </div>
        
        <div className="bg-primary px-8 py-6 rounded-3xl text-white min-w-[280px] shadow-xl flex flex-col items-center text-center">
          <span className="font-bold text-xs uppercase tracking-widest opacity-90 mb-2">Total Carbon Offset</span>
          <div className="font-display text-[40px] font-bold leading-none">{impact.estimatedCarbonOffsetKg.toLocaleString()} kg</div>
          <span className="font-bold text-sm mt-3 flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-[16px]">trending_up</span> +{carbonOffsetPct}% Efficiency
          </span>
        </div>
      </section>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Circular Flow Analysis (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-[24px] p-6 md:p-8 border border-outline-variant/30 relative overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-10 gap-4">
            <div>
              <h3 className="font-display text-headline-sm font-bold text-on-surface">Circular Flow Analysis</h3>
              <p className="text-sm font-medium text-on-surface-variant mt-1">Material Lifecycle Tracking</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs border border-secondary/20">Inbound</span>
              <span className="px-4 py-1.5 rounded-full bg-surface-variant/50 text-on-surface-variant font-bold text-xs border border-outline-variant/30">Recirculated</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full transform -rotate-90 text-green-500" viewBox="0 0 36 36">
                   <path className="text-surface-container" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                   <path className="text-green-500 transition-all duration-1000 ease-out" strokeDasharray="88, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 </svg>
                 <span className="text-2xl font-display font-bold text-on-surface">88%</span>
              </div>
              <h4 className="font-bold text-on-surface mt-4">Recovery</h4>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full transform -rotate-90 text-primary" viewBox="0 0 36 36">
                   <path className="text-surface-container" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                   <path className="text-primary transition-all duration-1000 ease-out" strokeDasharray="62, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 </svg>
                 <span className="text-2xl font-display font-bold text-on-surface">62%</span>
              </div>
              <h4 className="font-bold text-on-surface mt-4">Reclamation</h4>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full transform -rotate-90 text-tertiary" viewBox="0 0 36 36">
                   <path className="text-surface-container" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                   <path className="text-tertiary transition-all duration-1000 ease-out" strokeDasharray="95, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 </svg>
                 <span className="text-2xl font-display font-bold text-on-surface">95%</span>
              </div>
              <h4 className="font-bold text-on-surface mt-4">Diversion</h4>
            </div>
          </div>
        </div>
        
        {/* Secondary Metrics (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-blue-50/50 p-6 rounded-[24px] flex-1 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-blue-600 text-3xl">water_drop</span>
              <span className="text-blue-700 font-bold text-sm bg-blue-100 px-3 py-1 rounded-full">Optimal</span>
            </div>
            <h4 className="font-bold text-xs text-blue-800 uppercase tracking-wider mb-2">Water Conservation</h4>
            <div className="text-[32px] font-bold text-on-surface leading-tight">{waterLiters} <span className="text-xl">L</span></div>
            <p className="text-sm font-medium text-on-surface-variant mt-1">Saved through greywater recycling</p>
          </div>
          
          <div className="bg-yellow-50/50 p-6 rounded-[24px] flex-1 border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-yellow-600 text-3xl">solar_power</span>
              <span className="text-yellow-700 font-bold text-sm bg-yellow-100 px-3 py-1 rounded-full">Optimal</span>
            </div>
            <h4 className="font-bold text-xs text-yellow-800 uppercase tracking-wider mb-2">Energy Harvest</h4>
            <div className="text-[32px] font-bold text-on-surface leading-tight">{energyMwh} <span className="text-xl">MWh</span></div>
            <p className="text-sm font-medium text-on-surface-variant mt-1">Peak performance across campuses</p>
          </div>
        </div>
      </div>

      {/* Featured Strategic Milestones */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h3 className="font-display text-headline-sm md:text-headline-md font-bold text-on-surface">Strategic Milestones: 2025 Vision</h3>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline bg-primary/5 px-4 py-2 rounded-full">
            View Vision Roadmap <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Architectural Render 1 */}
          <div className="group relative rounded-[32px] overflow-hidden aspect-[16/9] shadow-md transition-transform hover:shadow-xl hover:-translate-y-1 duration-300">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARovW4ZdsspEm34TCn_n9F52CEI9M7DQJDw29Homk3H85Zn_yWfv5KZGzI6UXbsIu8mt8bD5h-V-pah0O3sp20bcxHeUtBN9Zyx2_K5TsCUHspD56rp8yR0FuQLoqypdFilvJsibd3gelTfv3G8M8Kx5zFhhRC01jkIRyskXtN0VShq60f-J-YcUSi0l6gzcdauF9uv5xL6hGE8Vvy01hDBGatRCVRIxx9neUYmCLtPMe9JNBz_qiA6F-AuyxaFU0MVNVaDOIWCm4" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-widest w-fit mb-3">Infrastructure Alpha</span>
              <h4 className="text-white font-display text-headline-sm font-bold mb-2">Integrated Eco-Hub Completion</h4>
              <p className="text-white/80 text-sm font-medium leading-relaxed max-w-md">Phase 1 structural assembly concluded. Internal climate systems scheduled for Q4 optimization.</p>
            </div>
          </div>
          
           {/* Architectural Render 2 */}
          <div className="group relative rounded-[32px] overflow-hidden aspect-[16/9] shadow-md transition-transform hover:shadow-xl hover:-translate-y-1 duration-300">
            <div className="w-full h-full bg-surface-container flex items-center justify-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLBZayDgU3IjfKPGS-ctiu9NmUnQUIUY2Elt1lvX6uuiRPqX7d6MR6iXyRY98oE54oIryV4GXSXdR9019aeU98fbwhDQeO1YQs7ymyFJbb9vnr7Kj6t9gpZmwOyXRanbvmsxbbXXPVO81P85JLTMO7D4yBlA4W91uQDnXQHhRr30ckwQVTNhcBS7-CVSCmLfnwEu0k9giJ9WhixCTyB-dSH0BRL8TiRy1rrbZIoNgTlxaZbTVhZrTiBEzruP0McANiOk-ySr3QF90')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-widest w-fit mb-3">Community Pillar</span>
              <h4 className="text-white font-display text-headline-sm font-bold mb-2">Launch of Zero-Waste Curriculum</h4>
              <p className="text-white/80 text-sm font-medium leading-relaxed max-w-md">Over 4,500 students enrolled in the new mandatory sustainability modules across all faculties.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
