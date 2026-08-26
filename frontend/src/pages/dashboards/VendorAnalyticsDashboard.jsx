import React from 'react';

export default function VendorAnalyticsDashboard() {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Performance Analytics & Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Vendor Insights Engine</h2>
          <p className="text-sm text-[#556158] mt-1">Real-time procurement velocity, lead conversions, and satisfaction scores.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-full px-4 py-2 border border-[#bec9be]/40 text-xs font-bold text-[#0d1e25] shadow-sm">
            <span className="material-symbols-outlined text-[#556158] text-base mr-2">calendar_today</span>
            <span>Last 30 Days</span>
          </div>
          <button 
            onClick={() => alert('Downloading CSV insights...')}
            className="bg-white p-2.5 rounded-full border border-[#bec9be]/40 hover:bg-[#e7f6ff] transition-colors cursor-pointer shadow-sm text-[#00522d]"
            title="Download CSV"
          >
            <span className="material-symbols-outlined text-lg">download</span>
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Key Metric: Revenue Growth Trend (Large Card) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Revenue Growth & Trend</h3>
              <p className="text-xs text-[#556158]">Aggregate performance of procurement cycles</p>
            </div>
            <div className="sm:text-right">
              <span className="text-3xl font-bold text-[#00522d] tracking-tight">$124,500.00</span>
              <div className="flex items-center sm:justify-end gap-1 text-[#00522d] text-xs font-bold mt-0.5">
                <span className="material-symbols-outlined text-base text-[#2eb872]">trending_up</span>
                <span>+12.4% vs last month</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative mt-4 h-56">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 240">
              <line stroke="#d4e5ef" strokeWidth="1" x1="0" x2="800" y1="240" y2="240"></line>
              <line stroke="#d4e5ef" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="180" y2="180"></line>
              <line stroke="#d4e5ef" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="120" y2="120"></line>
              <line stroke="#d4e5ef" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="60" y2="60"></line>
              
              <path 
                d="M0 240 L0 180 C100 160, 200 190, 300 120 C400 50, 500 100, 600 40 C700 10, 800 30 L800 240 Z" 
                fill="url(#chartGradient)" 
                opacity="0.25"
              ></path>
              
              <path 
                d="M0 180 C100 160, 200 190, 300 120 C400 50, 500 100, 600 40 C700 10, 800 30" 
                fill="none" 
                stroke="#00522d" 
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
              
              <circle cx="300" cy="120" fill="#00522d" r="5"></circle>
              <circle cx="600" cy="40" fill="#00522d" r="5"></circle>
              
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#9cf6ba"></stop>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="flex justify-between text-[#556158] text-xs font-semibold pt-4 border-t border-[#bec9be]/20">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </section>

        {/* Lead Conversion Rate (Square Card) */}
        <section className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Lead Conversion</h3>
              <span className="material-symbols-outlined text-[#00522d] text-2xl">groups_3</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-5xl font-bold text-[#00522d]">68%</span>
              <span className="text-[#00522d] text-xs font-bold bg-[#9cf6ba]/60 px-2 py-0.5 rounded-md">+5%</span>
            </div>
            <p className="text-xs text-[#556158] mt-3 leading-relaxed">
              Conversion efficiency from marketplace inquiries to executed municipal procurement contracts.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-[#bec9be]/20">
            <div className="flex justify-between mb-2 text-xs font-bold">
              <span className="text-[#0d1e25]">Target: 75%</span>
              <span className="text-[#00522d]">9 Days Left</span>
            </div>
            <div className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden">
              <div className="h-full bg-[#00522d] rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
            </div>
          </div>
        </section>

        {/* Customer Satisfaction Card */}
        <section className="col-span-12 lg:col-span-4 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-xs font-bold text-[#00522d] uppercase tracking-wider mb-4">Partner Satisfaction</h3>
          <div className="relative w-44 h-24 mb-3 overflow-hidden flex items-end justify-center">
            <div className="w-40 h-40 rounded-full border-[14px] border-[#dff1fb] border-b-transparent border-r-[#00522d] border-t-[#00522d] border-l-[#00522d] rotate-[45deg]"></div>
            <div className="absolute bottom-0 flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0d1e25]">4.8</span>
              <span className="text-[10px] font-bold text-[#556158] uppercase">OUT OF 5.0</span>
            </div>
          </div>
          <p className="text-xs text-[#556158] max-w-xs leading-relaxed mt-2">
            Vendors score highest on material quality assurance and on-time pickup dispatch.
          </p>
        </section>

        {/* Material Recovery Breakdown (8 Cols) */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Material Stream Breakdown</h3>
            <span className="text-xs font-bold text-[#00522d]">Current Quarter</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30">
              <span className="text-xs font-bold text-[#556158]">Thermoplastics</span>
              <p className="text-2xl font-bold text-[#00522d] mt-1">94.2 Tons</p>
              <div className="h-1.5 w-full bg-[#d9e6da] rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-[#00522d] w-[78%]"></div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30">
              <span className="text-xs font-bold text-[#556158]">Bio-Waste / Organics</span>
              <p className="text-2xl font-bold text-[#24502c] mt-1">62.8 Tons</p>
              <div className="h-1.5 w-full bg-[#d9e6da] rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-[#24502c] w-[55%]"></div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30">
              <span className="text-xs font-bold text-[#556158]">Electronic Scrap</span>
              <p className="text-2xl font-bold text-[#0d1e25] mt-1">27.2 Tons</p>
              <div className="h-1.5 w-full bg-[#d9e6da] rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-[#2eb872] w-[30%]"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
