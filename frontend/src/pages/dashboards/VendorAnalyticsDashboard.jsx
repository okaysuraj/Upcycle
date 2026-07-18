import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function VendorAnalyticsDashboard() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-end mb-lg">
        <div>
          <p className="font-label-md text-primary uppercase tracking-widest mb-1">Analytics Overview</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Vendor Insights Engine</h2>
        </div>
        <div className="flex items-center gap-sm">
          <div className="flex items-center bg-surface-container-high rounded-full px-4 py-2 border border-outline-variant/30">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">calendar_today</span>
            <span className="font-label-md text-label-md">Last 30 Days</span>
          </div>
          <button className="bg-surface-container-highest p-2 rounded-full hover:bg-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Key Metric: Revenue Growth Trend (Large Card) */}
        <Card className="col-span-12 lg:col-span-8 p-md flex flex-col h-[420px]">
          <div className="flex justify-between items-start mb-md">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Revenue Growth & Trend</h3>
              <p className="font-body-md text-on-surface-variant">Aggregate performance of procurement cycles</p>
            </div>
            <div className="text-right">
              <span className="font-display text-[32px] text-primary">$124,500.00</span>
              <div className="flex items-center justify-end text-success-container font-label-md">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+12.4% vs last month</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative mt-4">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 240">
              <line stroke="#d4e5ef" strokeWidth="1" x1="0" x2="800" y1="240" y2="240"></line>
              <line stroke="#d4e5ef" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="180" y2="180"></line>
              <line stroke="#d4e5ef" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="120" y2="120"></line>
              <line stroke="#d4e5ef" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="60" y2="60"></line>
              <path d="M0 240 L0 180 C100 160, 200 190, 300 120 C400 50, 500 100, 600 40 C700 10, 800 30 L800 240 Z" fill="url(#chartGradient)" opacity="0.1"></path>
              <path className="stroke-primary" d="M0 180 C100 160, 200 190, 300 120 C400 50, 500 100, 600 40 C700 10, 800 30" fill="none" strokeWidth="3"></path>
              <circle cx="300" cy="120" fill="#00522d" r="4"></circle>
              <circle cx="600" cy="40" fill="#00522d" r="4"></circle>
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00522d"></stop>
                  <stop offset="100%" stopColor="#ffffff"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-sm pt-4">
            <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
          </div>
        </Card>

        {/* Lead Conversion Rate (Square Card) */}
        <Card className="col-span-12 lg:col-span-4 p-md flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-sm">
              <h3 className="font-headline-md text-headline-md">Lead Conversion</h3>
              <span className="material-symbols-outlined text-primary">groups_3</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[48px] text-on-surface">68%</span>
              <span className="text-success-container font-label-md">+5%</span>
            </div>
            <p className="font-body-md text-on-surface-variant mt-2">Conversion efficiency from marketplace inquiries to closed procurement deals.</p>
          </div>
          <div className="mt-lg">
            <div className="flex justify-between mb-2">
              <span className="font-label-md text-label-md">Target: 75%</span>
              <span className="font-label-md text-label-md">9 Days Left</span>
            </div>
            <div className="w-full h-3 bg-secondary-container rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
            </div>
          </div>
        </Card>

        {/* Customer Satisfaction Gauge */}
        <Card className="col-span-12 lg:col-span-4 p-md bg-white/70 backdrop-blur-md flex flex-col items-center justify-center text-center">
          <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">Customer Satisfaction</h3>
          <div className="relative w-48 h-24 mb-4 overflow-hidden">
            <div className="absolute inset-0 w-48 h-48 rounded-full border-[12px] border-surface-container-highest"></div>
            <div className="absolute inset-0 w-48 h-48 rounded-full border-[12px] border-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', transform: 'rotate(162deg)' }}></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="font-display text-headline-lg">4.8</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">OUT OF 5.0</span>
            </div>
          </div>
          <p className="font-body-md text-on-surface-variant px-4">Vendors score highly on response time and item accuracy.</p>
          <div className="flex gap-1 mt-4">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0.5" }}>star</span>
          </div>
        </Card>

        {/* Recent Leads Table */}
        <Card className="col-span-12 lg:col-span-8 p-0 flex flex-col overflow-hidden">
          <div className="p-md flex justify-between items-center border-b border-outline-variant/30">
            <h3 className="font-headline-md text-headline-md">Recent Marketplace Leads</h3>
            <button className="text-primary font-label-md hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-md py-4 font-label-md text-on-surface-variant">Organization</th>
                  <th className="px-md py-4 font-label-md text-on-surface-variant">Project Category</th>
                  <th className="px-md py-4 font-label-md text-on-surface-variant">Value Est.</th>
                  <th className="px-md py-4 font-label-md text-on-surface-variant">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-dim flex items-center justify-center font-bold text-xs">U</div>
                      <span className="font-body-md font-medium">Unity Hospital Labs</span>
                    </div>
                  </td>
                  <td className="px-md py-4 font-body-md">Medical Equipment</td>
                  <td className="px-md py-4 font-body-md font-bold">$12,400</td>
                  <td className="px-md py-4">
                    <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm">Active Negotiation</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-tertiary-fixed flex items-center justify-center font-bold text-xs">A</div>
                      <span className="font-body-md font-medium">Alpha Biotech Inc</span>
                    </div>
                  </td>
                  <td className="px-md py-4 font-body-md">Industrial Glassware</td>
                  <td className="px-md py-4 font-body-md font-bold">$4,200</td>
                  <td className="px-md py-4">
                    <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-label-sm">New Lead</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary-fixed flex items-center justify-center font-bold text-xs">G</div>
                      <span className="font-body-md font-medium">Greenways Logistics</span>
                    </div>
                  </td>
                  <td className="px-md py-4 font-body-md">Refurbished Furniture</td>
                  <td className="px-md py-4 font-body-md font-bold">$2,100</td>
                  <td className="px-md py-4">
                    <span className="bg-success-container text-white px-3 py-1 rounded-full text-label-sm font-label-sm">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
