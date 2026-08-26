import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorDashboard() {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header / Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Supplier & Logistics Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1e25] tracking-tight">Vendor Dashboard</h2>
          <p className="text-sm text-[#556158] mt-1">
            Welcome back, Partner. Your material diversion volume is up 14% this month.
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => alert('Exporting monthly supply report...')}
            className="px-4 py-2.5 border border-[#bec9be]/50 rounded-full text-xs font-bold text-[#0d1e25] hover:bg-white bg-[#f4faff] transition-colors cursor-pointer shadow-sm"
          >
            Export Report
          </button>
          <Link 
            to="/marketplace/items/new"
            className="px-5 py-2.5 bg-[#00522d] text-white rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#003d21] transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>New Listing / Bid</span>
          </Link>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Revenue Bar Chart (Main Action) - 8 Cols */}
        <section className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">Total Volume & Revenue</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-3xl font-bold text-[#00522d]">$42,850.00</span>
                <span className="bg-[#2eb872]/20 text-[#00522d] px-2.5 py-0.5 rounded-full text-xs font-bold">
                  +12.4% vs last cycle
                </span>
              </div>
            </div>
            <select className="bg-[#e7f6ff] border border-[#bec9be]/40 rounded-xl text-xs font-bold py-2 px-3 text-[#0d1e25] focus:outline-none">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Simulated Bar Chart */}
          <div className="flex items-end justify-between gap-3 h-56 pt-6 px-2 border-b border-[#bec9be]/30">
            {[
              { month: 'Jan', height: 'h-28', val: '$28k' },
              { month: 'Feb', height: 'h-36', val: '$34k' },
              { month: 'Mar', height: 'h-32', val: '$31k' },
              { month: 'Apr', height: 'h-44', val: '$42k' },
              { month: 'May', height: 'h-40', val: '$39k' },
              { month: 'Jun', height: 'h-52', active: true, val: '$48k' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <span className="text-[10px] font-bold text-[#556158] opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.val}
                </span>
                <div className={`w-full max-w-[48px] rounded-t-xl transition-all duration-300 ${bar.height} ${bar.active ? 'bg-[#00522d]' : 'bg-[#dff1fb] group-hover:bg-[#9cf6ba]'}`}></div>
                <span className="text-xs font-semibold text-[#556158]">{bar.month}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick KPI Cards (4 Cols) */}
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#00522d] text-white rounded-[28px] p-6 flex flex-col justify-between shadow-md flex-1 relative overflow-hidden">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9cf6ba]">Material Flow</span>
              <h3 className="text-4xl font-bold mt-1 text-white tracking-tight">184.2 Tons</h3>
              <p className="text-xs text-white/80 mt-1">Diverted from municipal landfills</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-[#9cf6ba] font-bold">18 Partner Hubs</span>
              <span className="text-white/80">Active Contracts</span>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between flex-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#556158]">Verification Status</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="material-symbols-outlined text-[#2eb872] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="text-lg font-bold text-[#0d1e25]">Tier 1 Certified Vendor</span>
              </div>
              <p className="text-xs text-[#556158] mt-1">KYC documentation verified by Zurich Municipal Council.</p>
            </div>
            <Link 
              to="/kyc-verification" 
              className="text-xs font-bold text-[#00522d] hover:underline mt-3 block"
            >
              View KYC Documentation →
            </Link>
          </div>
        </section>

        {/* Active Orders & Logistics (12 Cols) */}
        <section className="col-span-12 bg-white rounded-[28px] border border-[#bec9be]/30 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#bec9be]/30 flex justify-between items-center bg-[#f4faff]">
            <h3 className="text-lg font-bold text-[#0d1e25] tracking-tight">Active Supply Orders & Collections</h3>
            <Link to="/marketplace" className="text-xs font-bold text-[#00522d] hover:underline">
              View All Listings
            </Link>
          </div>

          <div className="divide-y divide-[#bec9be]/20 text-sm">
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f4faff]/60 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-2xl">local_shipping</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25] text-base">Order #8821 - Premium Bio-Compost</h4>
                  <p className="text-xs text-[#556158]">Buyer: University Green Campus • 12.5 Metric Tons</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#d9e6da] text-[#00522d] text-xs font-bold rounded-full">
                  In Transit
                </span>
                <Link 
                  to="/operations/live-collection" 
                  className="px-4 py-2 bg-[#00522d] text-white rounded-xl text-xs font-bold hover:bg-[#003d21]"
                >
                  Track Dispatch
                </Link>
              </div>
            </div>

            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f4faff]/60 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] text-[#00522d] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1e25] text-base">Order #8822 - Reclaimed Oak Pallets</h4>
                  <p className="text-xs text-[#556158]">Buyer: City Park District • 450 Units</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#9cf6ba] text-[#00210f] text-xs font-bold rounded-full">
                  Processing
                </span>
                <Link 
                  to="/marketplace/contracts/8822" 
                  className="px-4 py-2 border border-[#00522d] text-[#00522d] rounded-xl text-xs font-bold hover:bg-[#00522d]/5"
                >
                  View Contract
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
