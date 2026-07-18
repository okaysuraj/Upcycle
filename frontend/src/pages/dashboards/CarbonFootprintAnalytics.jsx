import React from 'react';

export default function CarbonFootprintAnalytics() {
  return (
    <div className="flex flex-col gap-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-md">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-md text-headline-md text-primary">Carbon Footprint Analytics</h2>
          <div className="h-6 w-px bg-outline-variant/50"></div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">FY 2024</span>
            <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Live Monitoring
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">file_download</span>
          <span className="font-label-md text-label-md">Export Data</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* CO2e Output Chart */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[24px] border border-outline-variant/30 p-gutter flex flex-col gap-4 min-h-[420px] relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total CO2e Output</p>
              <h3 className="font-display text-display text-primary leading-tight">1,248.5 <span className="text-headline-md">tonnes</span></h3>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          {/* Chart Area */}
          <div className="flex-1 w-full bg-surface-ice rounded-xl relative mt-4 border border-outline-variant/10">
            <div className="absolute inset-0 p-4">
              <div className="h-full w-full flex flex-col justify-between opacity-20">
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-primary border-dashed"></div>
              </div>
              <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#006d3e" stopOpacity="0.3"></stop>
                    <stop offset="100%" stopColor="#006d3e" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,250 Q100,200 200,220 T400,150 T600,180 T800,100 V300 H0 Z" fill="url(#chartGradient)"></path>
                <path d="M0,250 Q100,200 200,220 T400,150 T600,180 T800,100" fill="none" stroke="#006d3e" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              {/* Tooltip */}
              <div className="absolute top-1/4 right-1/4 bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg rounded-xl border border-outline-variant/20 animate-pulse">
                <p className="font-label-sm text-label-sm text-on-surface-variant">Current Usage</p>
                <p className="font-headline-md text-headline-md text-primary">84.2 kg/h</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="font-label-md text-label-md text-on-surface-variant">Industrial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-tertiary"></span>
              <span className="font-label-md text-label-md text-on-surface-variant">Fleet</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary-fixed"></span>
              <span className="font-label-md text-label-md text-on-surface-variant">Direct Energy</span>
            </div>
          </div>
        </div>

        {/* GHG Protocol Scopes */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[24px] border border-outline-variant/30 p-gutter flex flex-col gap-6">
          <h4 className="font-headline-md text-headline-md text-primary">GHG Protocol Scopes</h4>
          <div className="space-y-6">
            {[
              { scope: 'Scope 1', label: 'Direct Emissions', value: '245 tCO2e', width: '35%', color: 'bg-primary', desc: 'On-site fuel combustion, fleet vehicles.' },
              { scope: 'Scope 2', label: 'Energy Indirect', value: '512 tCO2e', width: '65%', color: 'bg-tertiary', desc: 'Purchased electricity, steam, and cooling.' },
              { scope: 'Scope 3', label: 'Value Chain', value: '491 tCO2e', width: '55%', color: 'bg-primary-fixed-dim', desc: 'Suppliers, travel, waste disposal.' }
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase">{s.scope}</span>
                    <p className="font-body-md text-body-md text-on-surface font-semibold">{s.label}</p>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant">{s.value}</span>
                </div>
                <div className="w-full h-3 bg-secondary-container rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full`} style={{ width: s.width }}></div>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-outline-variant/30">
            <button className="w-full py-3 rounded-xl border border-outline text-on-surface font-label-md text-label-md hover:bg-surface-variant/20 transition-all">
              View Detailed Audit
            </button>
          </div>
        </div>

        {/* Path to Net Zero Timeline */}
        <div className="col-span-12 bg-white rounded-[24px] border border-outline-variant/30 p-gutter">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-headline-md text-headline-md text-primary">Path to Net Zero</h4>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 font-label-md text-label-md"><span className="w-3 h-3 rounded-full bg-primary"></span> Target</span>
              <span className="flex items-center gap-2 font-label-md text-label-md"><span className="w-3 h-3 rounded-full bg-outline"></span> Projection</span>
            </div>
          </div>
          <div className="relative py-10 px-4">
            <div className="absolute top-[60%] left-0 w-full h-1 bg-surface-variant/50"></div>
            <div className="grid grid-cols-5 relative">
              {[
                { year: '2022', label: 'Baseline Audit', completed: true },
                { year: '2023', label: 'Renewable Shift', completed: true },
                { year: 'Current', label: 'Fleet Electrification', active: true },
                { year: '2028', label: 'Supply Chain Opt.', future: true },
                { year: '2030', label: 'Net Zero Milestone', future: true, icon: 'flag' }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col items-center gap-4 ${step.future ? 'opacity-50' : ''}`}>
                  <div className={`${step.active ? 'w-16 h-16 -mt-2 border-4 border-surface shadow-xl bg-primary-container text-on-primary-container' : step.completed ? 'w-12 h-12 bg-primary text-on-primary shadow-lg' : 'w-12 h-12 bg-surface-variant text-on-surface-variant border-2 border-outline-variant'} rounded-full flex items-center justify-center relative z-10`}>
                    <span className="material-symbols-outlined" style={step.active ? { fontVariationSettings: "'FILL' 1" } : {}}>
                      {step.completed ? 'check' : step.active ? 'eco' : step.icon || 'calendar_today'}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className={`font-label-md text-label-md font-bold ${step.active ? 'text-primary font-extrabold' : step.completed ? 'text-primary' : ''}`}>{step.year}</p>
                    <p className={`font-label-sm text-label-sm ${step.active ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Offset Projects */}
        <div className="col-span-12 lg:col-span-9">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h4 className="font-headline-md text-headline-md text-primary">Active Offset Projects</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Portfolio of certified environmental investments</p>
            </div>
            <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:underline">
              Explore Marketplace <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Reforestation', tagColor: 'bg-tertiary-container/20 text-tertiary', title: 'Amazon Basin Restoration', desc: 'Protecting 5,000 hectares of primary rainforest.', offset: '42.5k Offset', verified: '82% Verified', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXdcvDSrh1fFg5fliOvU0SC45O3vpkkn4S2iS5EzLuTCMXE3ZsmcmiMKhgh8buTZDUiEXyn93H2ipNKMwPPJCKX0gCvhZ-OR2yenu-obktBDyEPjISPnI-dWtuzdP9WkGlJWanJxSKLdBdArpuwo56S9ETCJzIOHxM54sxjdRxoLHHZ0QrO51cznlGHTLldOSRCZczJG90tKtgKAUY6fotcsntIdw4a70lONZuw_egv5R4jaFIXChEgSjQa7C8_pXRWwdrsnuMHH4' },
              { tag: 'Wind Energy', tagColor: 'bg-primary-container/20 text-primary', title: 'Nordic Wind Cluster', desc: 'Adding 150MW to the grid annually.', offset: '12.8k Offset', verified: '95% Verified', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuSdxaPfzWs0fYHin2lEjLfrQ2i17OCKgI2Y-N4nsPG2emLh2PHBRf33b-cgKee561a3rWrVaNE32rA12AoZCKumTatcNNf_qJyFfEurN4_Mk7MATnV66-94rbNY7dwtTmyohVMKpLNSy6lAxFhRSKDyo5YdweBt5rIWWvaa36XYf8RqV1Ik1B_H7VXRWVKWafsdsQOq3Jnc1uMq6tW8WDCB2b6qvpp58YwK_djVVYNmKE8FDeygXSJSuNes75qDR2JSsDIMMTGcA' },
              { tag: 'Soil Carbon', tagColor: 'bg-secondary-container/50 text-secondary', title: 'Regenerative Plains', desc: 'Carbon sequestration through topsoil health.', offset: '8.4k Offset', verified: '64% Verified', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEcltcgKD-9tuPGn-_xfm9XATfD0VttBgIMvA0ATikszDtVLpNYtqbt8CH6dm05aUCw3vlk9GuUDW05Tx_N2AJj7kZ5ksmK8EAQYl8n8f_OT_7YL__wClz1fsFCsIq9sog8zH_bNYANYbgVhR5bhkYGyIaEU6sWXxuUsGasYSyPC9w23ykHHL8k79FmyttFkzaQQwoZgWMsH0xeum7Xf5ssNa4UQSgUMgBgoGKkRPf6pRoesD8WtlcOQ7e9gza0EgsGjS7TKC4eJw' }
            ].map((project, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-md border border-outline-variant/30 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url('${project.img}')` }}></div>
                <div className="p-4">
                  <span className={`px-2 py-1 rounded ${project.tagColor} font-label-sm text-label-sm mb-2 inline-block`}>{project.tag}</span>
                  <h5 className="font-body-md text-body-md font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h5>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">{project.desc}</p>
                  <div className="flex justify-between items-center text-label-sm">
                    <span className="font-bold text-primary">{project.offset}</span>
                    <span className="text-on-surface-variant">{project.verified}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log Sidebar */}
        <div className="col-span-12 lg:col-span-3 bg-white rounded-[24px] border border-outline-variant/30 p-gutter flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">history</span>
            <h4 className="font-headline-md text-headline-md text-primary">Activity Log</h4>
          </div>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2">
            {[
              { icon: 'verified', iconBg: 'bg-primary-container/20', iconColor: 'text-primary', title: 'Scope 1 Verified', desc: 'Verified by CarbonTrust Int.', time: '2 hours ago' },
              { icon: 'warning', iconBg: 'bg-error-container', iconColor: 'text-error-warm', title: 'Fleet Leak Detected', desc: 'High methane reading in Depot 4.', time: '5 hours ago' },
              { icon: 'upload_file', iconBg: 'bg-tertiary-container/20', iconColor: 'text-tertiary', title: 'Report Submitted', desc: 'Q3 Carbon Report uploaded.', time: '1 day ago' }
            ].map((log, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full ${log.iconBg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${log.iconColor} text-[18px]`}>{log.icon}</span>
                  </div>
                  {i < 2 && <div className="w-px h-full bg-outline-variant/30 mt-2"></div>}
                </div>
                <div>
                  <p className="font-label-md text-label-md font-bold">{log.title}</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{log.desc}</p>
                  <p className="font-label-sm text-label-sm text-outline mt-1 italic">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
