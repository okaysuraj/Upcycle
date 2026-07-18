import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function MainDashboard() {
  return (
    <div className="max-w-[1440px] mx-auto space-y-md">
      {/* Global Impact Stream Ticker */}
      <div className="bg-primary-container text-on-primary-container py-base overflow-hidden -mx-container-padding px-container-padding mb-md rounded-xl">
        <div className="flex gap-xl text-label-sm font-bold uppercase tracking-wider overflow-hidden whitespace-nowrap animate-[ticker_30s_linear_infinite]">
          <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">verified</span> Oslo City just logged 500kg of organic waste</span>
          <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">park</span> 1.2M Trees planted globally this month</span>
          <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">water_drop</span> Carbon sequestration up by 12% in sector B4</span>
          <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">verified</span> Berlin Initiative reached 10,000 members</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Large Sustainability Impact Card */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 p-md relative overflow-hidden group shadow-sm">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-md">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-xs">Sustainability Impact</h2>
                <p className="font-body-md text-body-md text-secondary">Real-time performance metrics for your district</p>
              </div>
              <button className="bg-surface-container-soft text-primary p-base rounded-full hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
              <div className="flex items-center gap-md">
                <div className="w-32 h-32 rounded-full flex items-center justify-center relative shadow-sm border-[12px] border-[#006d3e] border-l-[#d9e6da]">
                  <div className="text-center">
                    <div className="font-display text-headline-md text-on-surface">75%</div>
                    <div className="text-label-sm text-secondary uppercase">Goal</div>
                  </div>
                </div>
                <div className="space-y-sm flex-1">
                  <div className="flex flex-col">
                    <span className="font-display text-headline-lg text-primary">1,240kg</span>
                    <span className="font-label-md text-label-md text-secondary">Recycled this month</span>
                  </div>
                  <div className="h-2 w-full bg-secondary-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%] transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-surface-ice p-md rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-sm">co2</span>
                  <div className="font-display text-headline-md">45.2m³</div>
                  <div className="font-label-sm text-label-sm text-secondary">Carbon Reduced</div>
                </div>
                <div className="bg-surface-ice p-md rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-sm">electric_bolt</span>
                  <div className="font-display text-headline-md">840 kWh</div>
                  <div className="font-label-sm text-label-sm text-secondary">Energy Saved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Grid */}
        <section className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-gutter">
          <button className="bg-primary text-on-primary p-md rounded-[24px] flex flex-col items-center justify-center gap-sm hover:scale-[1.02] transition-transform shadow-md">
            <span className="material-symbols-outlined text-[32px]">delete_sweep</span>
            <span className="font-label-md text-label-md font-bold">Log Waste</span>
          </button>
          <button className="bg-surface-container-highest text-primary p-md rounded-[24px] flex flex-col items-center justify-center gap-sm hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-[32px]">local_shipping</span>
            <span className="font-label-md text-label-md font-bold">Pickup Request</span>
          </button>
          <button className="bg-surface-container-highest text-primary p-md rounded-[24px] flex flex-col items-center justify-center gap-sm hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-[32px]">map</span>
            <span className="font-label-md text-label-md font-bold">Near Me</span>
          </button>
          <button className="bg-tertiary text-on-tertiary p-md rounded-[24px] flex flex-col items-center justify-center gap-sm hover:scale-[1.02] transition-transform shadow-md">
            <span className="material-symbols-outlined text-[32px]">redeem</span>
            <span className="font-label-md text-label-md font-bold">Rewards</span>
          </button>
        </section>

        {/* Upcoming Events */}
        <section className="col-span-12">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-headline-md text-headline-md text-on-background">Upcoming Community Events</h3>
            <a className="text-primary font-label-md text-label-md hover:underline" href="#">View All Events</a>
          </div>
          <div className="flex gap-md overflow-x-auto pb-sm scrollbar-hide no-scrollbar">
            {/* Card 1 */}
            <div className="min-w-[340px] bg-white/70 backdrop-blur-[12px] border border-[#bec9be]/30 rounded-xl p-sm flex items-center gap-sm group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVJUEaQ7nxljY_06YShyAAE44J_rT7k0fuCPplwIW0-02roOgl5Tip1pIDlV1R9nRabLXGa60oJA5ZPlHHdxwkzk7YGoVXukmWcMCrURYfzucORXV0tcECini9Zd9EKwIWxMNMlWB3B1z0JngqQ6v6j80t9b8fEimIIrFts55fb1uHPAQOFu3c4ItJSF1MWKVPnK5Ab4ExGwI2KaMenQ-VEzUiY3S2xrG-YYvw880f2AL6SpI3Gp_fXegnQ-U59s1o_H1qD2n-0zk" alt="Event" />
              </div>
              <div className="flex-grow">
                <div className="bg-success-container/20 text-primary px-xs py-[2px] rounded inline-block text-[10px] font-bold uppercase mb-xs">Next Week</div>
                <h4 className="font-label-md text-label-md font-bold text-on-surface line-clamp-1">Green Neighborhood Drive</h4>
                <p className="text-label-sm text-secondary flex items-center gap-xs mt-xs">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span> Oct 12, 2023
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="min-w-[340px] bg-white/70 backdrop-blur-[12px] border border-[#bec9be]/30 rounded-xl p-sm flex items-center gap-sm group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfT8rYC1BXbTlMO4rDUFL-0hal2vsPWcTU0S3pXq4FOTdBu0r7DAQ0uAecArFOfGvzmoak9mXwQeVC7ayGnU1mnkRIvUOMtz_FS2hIKP-3aWtoMXV3GCiocNzDuXGZxnhIhG8HN9Tsse8QUETVSlEoDYOsmvQCXszAkHRFKGXCyYqmwlVzbb_RjYx8iFQ9gCAqli81QbBgeRtZ7akkSkB2DLiF9hThwz35vxcqyNnikZpEYYoZMYPrsmy_Q7QqURv_f-BTSS79Ew" alt="Event" />
              </div>
              <div className="flex-grow">
                <div className="bg-primary-container/20 text-primary px-xs py-[2px] rounded inline-block text-[10px] font-bold uppercase mb-xs">Workshop</div>
                <h4 className="font-label-md text-label-md font-bold text-on-surface line-clamp-1">Upcycling 101 Masterclass</h4>
                <p className="text-label-sm text-secondary flex items-center gap-xs mt-xs">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span> Oct 15, 2023
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[340px] bg-white/70 backdrop-blur-[12px] border border-[#bec9be]/30 rounded-xl p-sm flex items-center gap-sm group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc-rone6C8lAamWnabjyG-Iav-lp0AAKNlsfDas6lZSt81E8oejvUEwB229uHmEh5aOd5q_h-j9EeeOazJBK15LCwA6Nax7FLYzniZPO_Udxrep30xiBHXUA8WSn03rysOUUuTD4FPAlsYRJHR7zs4j-eizFuXFdK0igg6T-TZCpqpo6HaOiJaqHhnjOW9zX4Jzljirygf2VW25QEesA_RgHprgjluSLjnj_D6hPSiIOfOSOatcYCfqqaW5382N5plXTdPH_HAnkU" alt="Event" />
              </div>
              <div className="flex-grow">
                <div className="bg-error-container text-error px-xs py-[2px] rounded inline-block text-[10px] font-bold uppercase mb-xs">Limited Slots</div>
                <h4 className="font-label-md text-label-md font-bold text-on-surface line-clamp-1">Facility Tour &amp; Audit</h4>
                <p className="text-label-sm text-secondary flex items-center gap-xs mt-xs">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span> Oct 20, 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Table / Initiative Status */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 overflow-hidden shadow-sm">
          <div className="p-md border-b border-outline-variant/30 flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-on-background">Recent Logistics</h3>
            <button className="text-primary font-label-md text-label-md hover:underline">Download Report</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-ice text-secondary border-b border-outline-variant/30">
                <tr>
                  <th className="px-md py-sm font-label-sm text-label-sm uppercase tracking-wider">Reference</th>
                  <th className="px-md py-sm font-label-sm text-label-sm uppercase tracking-wider">Type</th>
                  <th className="px-md py-sm font-label-sm text-label-sm uppercase tracking-wider">Status</th>
                  <th className="px-md py-sm font-label-sm text-label-sm uppercase tracking-wider">Efficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-ice transition-colors">
                  <td className="px-md py-md font-label-md text-label-md text-on-background">#UP-9421</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-primary">recycling</span> Plastics
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <span className="bg-success-container/20 text-primary px-sm py-[4px] rounded-full text-label-sm font-bold">Processed</span>
                  </td>
                  <td className="px-md py-md">
                    <div className="w-24 bg-secondary-container h-1.5 rounded-full">
                      <div className="bg-primary h-full w-[92%] rounded-full"></div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-ice transition-colors">
                  <td className="px-md py-md font-label-md text-label-md text-on-background">#UP-9425</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-tertiary">compost</span> Organic
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <span className="bg-primary-fixed text-on-primary-fixed px-sm py-[4px] rounded-full text-label-sm font-bold">Transit</span>
                  </td>
                  <td className="px-md py-md">
                    <div className="w-24 bg-secondary-container h-1.5 rounded-full">
                      <div className="bg-primary h-full w-[45%] rounded-full"></div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-ice transition-colors">
                  <td className="px-md py-md font-label-md text-label-md text-on-background">#UP-9428</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-error">dangerous</span> Hazardous
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <span className="bg-surface-container text-on-surface-variant px-sm py-[4px] rounded-full text-label-sm font-bold">Pending</span>
                  </td>
                  <td className="px-md py-md">
                    <div className="w-24 bg-secondary-container h-1.5 rounded-full">
                      <div className="bg-primary h-full w-[0%] rounded-full"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* District Goal Progress */}
        <section className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 p-md flex flex-col shadow-sm">
          <h3 className="font-headline-md text-headline-md text-on-background mb-md">District Goals</h3>
          <div className="space-y-lg flex-grow">
            <div>
              <div className="flex justify-between mb-xs">
                <span className="font-label-md text-label-md text-on-surface">Zero-Waste Target</span>
                <span className="font-label-md text-label-md text-primary font-bold">88%</span>
              </div>
              <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[88%] transition-all duration-700"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-xs">
                <span className="font-label-md text-label-md text-on-surface">Citizen Engagement</span>
                <span className="font-label-md text-label-md text-primary font-bold">62%</span>
              </div>
              <div className="h-3 w-full bg-secondary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary-fixed-dim w-[62%] transition-all duration-700"></div>
              </div>
            </div>
          </div>
          <div className="mt-xl p-md rounded-xl bg-primary-fixed/30 border border-primary-fixed">
            <p className="font-body-md text-body-md text-[#00522d] italic">
              "Great job! Your district is among the top 5 in carbon reduction this quarter."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
