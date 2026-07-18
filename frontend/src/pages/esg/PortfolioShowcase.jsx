import React from 'react';

export default function PortfolioShowcase() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Header & Action Row */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-headline-lg font-bold text-primary mb-2">Vendor Portfolio</h2>
          <p className="font-body-md text-on-surface-variant text-lg">Showcase of sustainable infrastructure projects and environmental impact metrics for Campus Hub Alpha.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-bold text-sm hover:bg-primary/5 transition-colors group shadow-sm shrink-0">
          <span className="material-symbols-outlined text-[20px] group-hover:-translate-y-0.5 transition-transform">download</span>
          Download PDF Resume
        </button>
      </header>

      {/* Metrics Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-6">
        {/* CO2 Metric */}
        <div className="lg:col-span-4 bg-primary text-white p-8 rounded-[32px] shadow-sm relative overflow-hidden flex flex-col justify-between h-[300px] md:h-[320px] group hover:shadow-md transition-shadow">
          <div className="z-10 relative">
            <span className="material-symbols-outlined text-[48px] opacity-80 group-hover:scale-110 transition-transform origin-left" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <p className="text-xs font-bold uppercase tracking-widest mt-6 opacity-70">Total CO2 Saved</p>
            <h3 className="font-display text-[56px] md:text-[64px] font-bold mt-1 leading-none tracking-tight">1,284<span className="text-2xl font-normal ml-2 opacity-80">tons</span></h3>
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md p-3 rounded-xl inline-flex items-center gap-2 self-start border border-white/20">
            <span className="material-symbols-outlined text-green-300 text-[18px]">trending_up</span>
            <span className="text-xs font-bold tracking-wider">UP 12% FROM Q3</span>
          </div>
          
          {/* Abstract Shader Pattern (Mocked with decorative div) */}
          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-green-400/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute left-[-20%] bottom-[-20%] w-48 h-48 bg-blue-400/20 blur-[60px] rounded-full"></div>
        </div>
        
        {/* Projects Completed */}
        <div className="lg:col-span-4 bg-white border border-outline-variant/30 p-8 rounded-[32px] shadow-sm flex flex-col justify-between h-[300px] md:h-[320px] hover:border-primary/30 transition-colors group">
          <div>
            <span className="material-symbols-outlined text-[48px] text-primary bg-primary/5 p-2 rounded-2xl group-hover:bg-primary/10 transition-colors">task_alt</span>
            <p className="text-xs font-bold uppercase tracking-widest mt-6 text-on-surface-variant">Projects Completed</p>
            <h3 className="font-display text-[56px] md:text-[64px] font-bold text-on-surface mt-1 leading-none tracking-tight">42</h3>
          </div>
          
          <div className="flex items-end gap-1.5 mt-auto relative">
             <div className="h-6 w-3 bg-primary/20 rounded-full"></div>
             <div className="h-10 w-3 bg-primary/30 rounded-full"></div>
             <div className="h-8 w-3 bg-primary/40 rounded-full"></div>
             <div className="h-14 w-3 bg-primary/60 rounded-full"></div>
             <div className="h-20 w-3 bg-primary/80 rounded-full"></div>
             <div className="h-12 w-3 bg-primary/50 rounded-full"></div>
             <div className="h-16 w-3 bg-primary rounded-full relative group-hover:animate-pulse">
                <div className="absolute -top-8 -translate-x-1/2 left-1/2 bg-surface-container-lowest border border-outline-variant/30 text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">98%</div>
             </div>
             
             <p className="text-xs font-bold text-on-surface-variant ml-auto bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">Consistency Score: 98%</p>
          </div>
        </div>
        
        {/* Community Impact */}
        <div className="lg:col-span-4 bg-white/60 backdrop-blur-xl border border-outline-variant/30 p-8 rounded-[32px] shadow-sm flex flex-col h-[300px] md:h-[320px] hover:border-primary/30 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <span className="material-symbols-outlined text-[40px] text-blue-600 bg-blue-50 p-3 rounded-2xl">groups</span>
              <p className="text-xs font-bold uppercase tracking-widest mt-6 text-blue-800">Community Reach</p>
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-200">Live Now</div>
          </div>
          <h3 className="font-display text-[48px] md:text-[56px] font-bold text-on-surface mt-2 leading-none tracking-tight">12.5k<span className="text-xl font-normal ml-2 text-on-surface-variant tracking-normal">Engaged</span></h3>
          <p className="text-sm text-on-surface-variant mt-3 font-medium leading-relaxed max-w-xs">Active participants across 14 campus sub-hubs utilizing shared resources.</p>
          
          <div className="mt-auto pt-5 border-t border-outline-variant/30 flex justify-between items-center">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" data-alt="Avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmiBzQ4KPZbTQdSn5IwwBWCNsMgw67clpbJdPNBvSur52d2j0CUXmpGalX_3mvAr9PefABwKgXYKQxByPdMJKdtdY0OhHkiDynr8zx8wwR-CsQOiW7zP8ksS-wKFrZDa8lZDmNT9tWKxU5lMBupAOkn9iGU_2VhCBJGXSwXD912CsiKsDCQBXmRw9UYR8eozmelCxUy8YETcg9oeR_jzQF-EUndMAUFH4efNodI06SgCQ8PK7utydxIq-FgAXe1feweyrWdqau4Vs" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" data-alt="Avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARCvmwR2gn-j2ka_-cRP0Yze5ZEo7_TZqORqHqntf7iR7v80iMefnr_PWXtLCB4oWiHRTxCyvBvKrudR_-R4ZPPI7o5vzXRdEoK7FhT5u66DjSowF4BinA8LTx8yz1NJZqwUcAgtlDHYC5cn0lcfLRcw2SqU_Jnk0XcSgysjTw-aXvwa4-AcZ1MVa7khv_xiiZJEnTMrnysQMr2KHLHUrsBXm2WKSKN8Ah814pURh61vAlrJ7v8Hed8vpxGt28H55EcYNLAmfvmGM" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-800 shadow-sm z-10">
                 +12
              </div>
            </div>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
               View Network <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">Completed Projects</h3>
          <div className="flex gap-2">
            <button className="p-2.5 bg-white border border-outline-variant/50 rounded-xl hover:bg-surface-container-lowest transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">filter_list</span>
            </button>
            <button className="p-2.5 bg-white border border-outline-variant/50 rounded-xl hover:bg-surface-container-lowest transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">sort</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Solar Farm Project */}
          <div className="flex flex-col lg:flex-row bg-white border border-outline-variant/30 rounded-[32px] overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="lg:w-[40%] relative h-[250px] lg:h-auto overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Solar Farm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1cLd1a-47zR7SPcv70DJR8F84odQ_XQd8G_uBLbxikX0EQivaw1kzvQ2r0969p_b_JaPyTrDZra7AAI0UuNhTRvAmNGVCf3HuDEWXKswnEUc7LnlfTIyBWfXNViKMCcZ2jME6E-u-Ogqc0_bL6pB4EsvcBD52bSSzPhoQIFfkyfwTXoDvBJZHG96btkMMiIbK_ZqHYKq66KL47eALQJegJA3TAgGbt-4xwn1YoMlCjtwyMEdf9fxQwSGYdy1J21c7hJ0L3iyw0J4" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-white/50 uppercase tracking-widest">
                  Renewable Energy
              </div>
            </div>
            
            <div className="lg:w-[60%] p-6 md:p-10 flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-2">Alpha Campus Solar Farm</h4>
                  <p className="text-sm font-medium text-on-surface-variant leading-relaxed max-w-xl">Implemented a 2.5MW solar array across five campus buildings, integrated with a smart grid management system for optimized distribution.</p>
                </div>
                <span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full text-[28px] shrink-0 border border-green-100">verified</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Efficiency</p>
                  <p className="font-display text-2xl font-bold text-primary">94.2%</p>
                </div>
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">ROI Period</p>
                  <p className="font-display text-2xl font-bold text-primary">4.2 Yrs</p>
                </div>
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute right-0 bottom-0 text-green-600/10 -mb-4 -mr-2"><span className="material-symbols-outlined text-[80px]">eco</span></div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 relative z-10">Carbon Offset</p>
                  <p className="font-display text-2xl font-bold text-primary relative z-10">450t/y</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Key Partners:</span>
                  <div className="flex gap-2">
                     <span className="bg-surface-container px-3 py-1 rounded-md text-xs font-bold text-on-surface border border-outline-variant/30">SunPower</span>
                     <span className="bg-surface-container px-3 py-1 rounded-md text-xs font-bold text-on-surface border border-outline-variant/30">GridLogic</span>
                  </div>
                </div>
                <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                   View Full Case Study <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
