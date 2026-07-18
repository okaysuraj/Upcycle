import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CampusDashboardAdmin() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-md relative">
      {/* Greeting & Summary Header */}
      <div className="mb-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Campus Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time sustainability and facility performance metrics.</p>
        </div>
        <div className="flex gap-sm">
          <div className="bg-surface-container px-md py-sm rounded-xl flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary">calendar_today</span>
            <span className="font-label-md text-label-md text-primary">October 2023</span>
          </div>
        </div>
      </div>

      {/* KPI Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
        {/* Total Waste */}
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between h-48 transition-all hover:shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">recycling</span>
            </div>
            <span className="text-success-container font-label-md text-label-md flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_down</span> 12%
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant">Total Waste</p>
            <h3 className="font-display text-display text-primary">1,248<span className="text-headline-md ml-xs">kg</span></h3>
          </div>
        </div>
        {/* Energy Offset */}
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between h-48 transition-all hover:shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-tertiary-container/20 rounded-xl flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <span className="text-success-container font-label-md text-label-md flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 8.4%
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant">Energy Offset</p>
            <h3 className="font-display text-display text-tertiary">42.5<span className="text-headline-md ml-xs">MWh</span></h3>
          </div>
        </div>
        {/* Water Saved */}
        <div className="bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between h-48 transition-all hover:shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <span className="text-success-container font-label-md text-label-md flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 5.2%
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant">Water Saved</p>
            <h3 className="font-display text-display text-on-surface">15.2<span className="text-headline-md ml-xs">kL</span></h3>
          </div>
        </div>
      </section>

      {/* Advanced Analytics & Tasks Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-md mb-lg">
        {/* Sustainability Progress Chart */}
        <div className="lg:col-span-8 bg-white p-md rounded-[24px] border border-outline-variant/30 min-h-[400px]">
          <div className="flex justify-between items-center mb-md">
            <h4 className="font-headline-md text-headline-md">Sustainability Progress</h4>
            <div className="flex gap-base">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="font-label-sm text-label-sm">Recycled</span>
              </div>
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 bg-tertiary rounded-full"></div>
                <span className="font-label-sm text-label-sm">Compost</span>
              </div>
            </div>
          </div>
          {/* Chart Mockup */}
          <div className="relative h-64 flex items-end justify-between px-md gap-md">
            <div className="absolute inset-0 flex flex-col justify-between py-xs pointer-events-none">
              <div className="border-t border-outline-variant/20 w-full h-0"></div>
              <div className="border-t border-outline-variant/20 w-full h-0"></div>
              <div className="border-t border-outline-variant/20 w-full h-0"></div>
              <div className="border-t border-outline-variant/10 w-full h-0"></div>
            </div>
            
            {/* Monthly Bars */}
            {[
              { month: 'MAY', r: '60%', c: '40%' },
              { month: 'JUN', r: '75%', c: '35%' },
              { month: 'JUL', r: '45%', c: '65%' },
              { month: 'AUG', r: '90%', c: '30%' },
              { month: 'SEP', r: '65%', c: '45%' },
              { month: 'OCT', r: '80%', c: '50%' }
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-xs h-full relative group">
                <div className="flex gap-1 justify-center items-end h-full">
                  <div className="w-4 bg-primary rounded-t-sm transition-all duration-500 hover:opacity-80" style={{ height: d.r }}></div>
                  <div className="w-4 bg-tertiary rounded-t-sm transition-all duration-500 hover:opacity-80" style={{ height: d.c }}></div>
                </div>
                <p className="text-center font-label-sm text-label-sm mt-2">{d.month}</p>
              </div>
            ))}
          </div>
          {/* Secondary Metrics Row */}
          <div className="mt-md pt-md border-t border-outline-variant/30 grid grid-cols-2 gap-md">
            <div className="flex items-center gap-sm">
              <div className="w-12 h-12 rounded-full border-4 border-primary-container border-t-primary flex items-center justify-center">
                <span className="font-label-md text-label-md">84%</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Efficiency Goal</p>
                <p className="font-label-md text-label-md font-bold">On Track</p>
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <div className="w-12 h-12 rounded-full border-4 border-secondary-container border-t-tertiary flex items-center justify-center">
                <span className="font-label-md text-label-md">62%</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Carbon Neutrality</p>
                <p className="font-label-md text-label-md font-bold">Improving</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Urgent Tasks */}
        <div className="lg:col-span-4 bg-white p-md rounded-[24px] border border-outline-variant/30 flex flex-col">
          <div className="flex justify-between items-center mb-md">
            <h4 className="font-headline-md text-headline-md">Urgent Tasks</h4>
            <span className="bg-error-container text-error-warm px-sm py-xs rounded-full font-label-sm text-label-sm">4 Alerts</span>
          </div>
          <div className="space-y-sm flex-1 overflow-y-auto pr-xs">
            {/* Task 1 */}
            <div className="p-sm bg-surface-container-low rounded-xl flex items-start gap-sm hover:bg-surface-container transition-all cursor-pointer">
              <div className="mt-1 w-8 h-8 rounded-full bg-error-container/50 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-lg">delete_sweep</span>
              </div>
              <div className="flex-1">
                <h5 className="font-label-md text-label-md font-bold text-on-surface">Waste Bin Full</h5>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Sector B, Science Block</p>
              </div>
              <span className="font-label-sm text-label-sm text-error">2m ago</span>
            </div>
            {/* Task 2 */}
            <div className="p-sm bg-surface-container-low rounded-xl flex items-start gap-sm hover:bg-surface-container transition-all cursor-pointer">
              <div className="mt-1 w-8 h-8 rounded-full bg-tertiary-container/50 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-lg">description</span>
              </div>
              <div className="flex-1">
                <h5 className="font-label-md text-label-md font-bold text-on-surface">Report Due</h5>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Monthly Sustainability</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">1h ago</span>
            </div>
            {/* Task 3 */}
            <div className="p-sm bg-surface-container-low rounded-xl flex items-start gap-sm hover:bg-surface-container transition-all cursor-pointer">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">sensors</span>
              </div>
              <div className="flex-1">
                <h5 className="font-label-md text-label-md font-bold text-on-surface">Sensor Offline</h5>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Water Main - Hall A</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">3h ago</span>
            </div>
            {/* Task 4 */}
            <div className="p-sm bg-surface-container-low rounded-xl flex items-start gap-sm hover:bg-surface-container transition-all cursor-pointer">
              <div className="mt-1 w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-lg">schedule</span>
              </div>
              <div className="flex-1">
                <h5 className="font-label-md text-label-md font-bold text-on-surface">Pickup Scheduled</h5>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Cardboard Recycling</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Tomorrow</span>
            </div>
          </div>
          <button className="w-full mt-md py-base font-label-md text-label-md text-primary hover:bg-primary-container/10 rounded-lg transition-all">View All Tasks</button>
        </div>
      </section>

      {/* Map & Community Glass Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-md items-stretch">
        {/* Campus Map Widget */}
        <div className="lg:col-span-8 bg-white p-md rounded-[24px] border border-outline-variant/30 h-[350px] relative overflow-hidden group">
          <div className="absolute top-md left-md z-10">
            <h4 className="font-headline-md text-headline-md drop-shadow-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">Campus Map</h4>
            <p className="font-label-md text-label-md text-on-surface-variant bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block mt-2">Real-time Node Status</p>
          </div>
          <div className="absolute inset-0 bg-surface-dim">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKhfdx-g-6gupsQQ0WFevXqeRmU4AnIGsahTP7E--QP2fE3Wtg3U2Lfe9ME7IhDRdX1Y4GjikmnZQW8ZHGglj0Vqoqc9vmUSJp_fy-WSqXMbyJguyHI7c2Wr6qphU9yyj7030r2V-2-WREdoyIfLu733xn23flFIhOAUKxyX9xf4y4_K5eXMJ7tm1gNaeIrAoGw2Gmjh2CLN1rUyAbaK4Myj64OPVUo-QlpjsuiH9G2iba-coldTJ0XszhJ-Iij-8evnvBHbM56Dk')" }}></div>
            {/* Pulsing Markers (Mockup) */}
            <div className="absolute top-[30%] left-[40%] w-6 h-6 bg-primary/40 rounded-full flex items-center justify-center animate-pulse cursor-pointer hover:scale-150 transition-transform">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="absolute top-[60%] left-[70%] w-6 h-6 bg-error/40 rounded-full flex items-center justify-center animate-pulse cursor-pointer hover:scale-150 transition-transform">
              <div className="w-2 h-2 bg-error rounded-full"></div>
            </div>
            <div className="absolute top-[20%] left-[15%] w-6 h-6 bg-primary/40 rounded-full flex items-center justify-center animate-pulse cursor-pointer hover:scale-150 transition-transform">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-md right-md flex gap-xs">
            <button className="bg-white p-2 rounded-full shadow-md text-primary material-symbols-outlined hover:bg-surface-container transition-colors">zoom_in</button>
            <button className="bg-white p-2 rounded-full shadow-md text-primary material-symbols-outlined hover:bg-surface-container transition-colors">zoom_out</button>
            <button className="bg-white p-2 rounded-full shadow-md text-primary material-symbols-outlined hover:bg-surface-container transition-colors">my_location</button>
          </div>
        </div>
        
        {/* Glass Secondary Card: Market/Community Insight */}
        <div className="lg:col-span-4 bg-white/70 backdrop-blur-md p-md rounded-[24px] border border-outline-variant/30 flex flex-col justify-between overflow-hidden relative shadow-sm">
          <div className="relative z-10">
            <span className="font-label-sm text-label-sm bg-tertiary-container/20 text-tertiary px-sm py-xs rounded-full mb-base inline-block">Eco Insight</span>
            <h4 className="font-headline-md text-headline-md text-tertiary mt-2">Community Impact</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mt-base">
              Your campus has prevented 2.4 tons of CO2 this month through efficient routing.
            </p>
          </div>
          <div className="relative z-10 mt-md">
            <div className="flex items-end gap-sm mb-xs">
              <span className="font-display text-display text-primary">+120</span>
              <span className="font-label-md text-label-md text-on-surface-variant mb-base">Trees Planted Equivalent</span>
            </div>
            <div className="w-full bg-secondary-container h-3 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[70%] rounded-full transition-all duration-1000"></div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
