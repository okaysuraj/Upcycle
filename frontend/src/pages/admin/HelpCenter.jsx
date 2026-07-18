import React from 'react';

export default function HelpCenter() {
  return (
    <div className="flex flex-col pb-12 w-full">
      {/* Hero Section */}
      <section className="mb-12 relative rounded-3xl overflow-hidden h-64 bg-primary flex flex-col items-center justify-center text-center p-8 shadow-md">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-container/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-2xl w-full">
          <h2 className="font-display text-display-sm text-white mb-6 font-bold shadow-sm">How can we help you today?</h2>
          <div className="relative group mx-auto max-w-xl">
            <input 
              className="w-full h-14 bg-white/90 backdrop-blur-sm border-none rounded-2xl pl-14 pr-24 text-body-lg focus:ring-4 focus:ring-secondary/50 transition-all shadow-lg text-on-surface outline-none" 
              placeholder="Search for guides, troubleshooting, or API docs..." 
              type="text" 
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-lg text-xs font-bold tracking-wider">DOCS</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center text-white/90 font-label-md">
            <span className="font-bold">Popular:</span>
            <a className="hover:text-white hover:underline transition-colors cursor-pointer">API Keys</a>
            <a className="hover:text-white hover:underline transition-colors cursor-pointer">Role Management</a>
            <a className="hover:text-white hover:underline transition-colors cursor-pointer">Audit Logs</a>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12">
        {/* Large Main Category */}
        <div className="md:col-span-8 bg-white border border-outline-variant/30 rounded-[24px] p-8 flex flex-col shadow-sm">
          <div className="flex flex-col sm:flex-row items-start justify-between mb-8 gap-4">
            <div>
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
              <h3 className="font-headline-lg font-bold text-primary">Getting Started</h3>
              <p className="text-on-surface-variant font-body-md mt-2 max-w-md">Everything you need to set up your administrative environment, from initial configuration to team onboarding.</p>
            </div>
            <button className="border-2 border-outline-variant/50 px-6 py-2.5 font-bold text-on-surface-variant rounded-full hover:bg-surface-container-lowest transition-colors flex-shrink-0">
              View All 24 Articles
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            <a className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
              <div className="bg-primary/10 p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">play_circle</span>
              </div>
              <span className="font-bold text-on-surface group-hover:text-primary transition-colors">Platform Overview</span>
            </a>
            <a className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group">
              <div className="bg-primary/10 p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">shield_person</span>
              </div>
              <span className="font-bold text-on-surface group-hover:text-primary transition-colors">Account Security</span>
            </a>
          </div>
        </div>

        {/* Dashboard Insights */}
        <div className="md:col-span-4 bg-surface-container-lowest border-2 border-dashed border-outline-variant/50 rounded-[24px] p-6 flex flex-col relative overflow-hidden">
          <div className="mb-6 relative z-10">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl">dashboard_customize</span>
            </div>
            <h3 className="font-headline-sm font-bold text-primary">Using the Dashboard</h3>
            <p className="text-on-surface-variant font-body-sm mt-2">Mastering advanced monitoring and real-time visualization tools.</p>
          </div>
          <ul className="space-y-4 mt-2 relative z-10">
            <li className="flex items-center gap-3 text-body-md font-bold text-on-surface-variant hover:text-primary cursor-pointer group">
              <span className="material-symbols-outlined text-sm text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
              Customizing Layouts
            </li>
            <li className="flex items-center gap-3 text-body-md font-bold text-on-surface-variant hover:text-primary cursor-pointer group">
              <span className="material-symbols-outlined text-sm text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
              Filtering Core Metrics
            </li>
            <li className="flex items-center gap-3 text-body-md font-bold text-on-surface-variant hover:text-primary cursor-pointer group">
              <span className="material-symbols-outlined text-sm text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
              Exporting View Presets
            </li>
          </ul>
          <div className="mt-auto pt-8 relative z-10">
            <div className="h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-primary rounded-full"></div>
            </div>
            <p className="text-xs font-bold text-on-surface-variant mt-3 uppercase tracking-wider">Onboarding Progress: 66%</p>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-5">
             <span className="material-symbols-outlined text-[150px]">help_center</span>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="md:col-span-6 bg-white border border-outline-variant/30 rounded-[24px] p-6 sm:p-8 flex items-center gap-6 shadow-sm group hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-error/10 text-error rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-4xl">build</span>
          </div>
          <div>
            <h3 className="font-headline-sm font-bold text-primary mb-2">Troubleshooting</h3>
            <p className="text-on-surface-variant font-body-sm mb-4">Resolve common technical issues and system errors quickly.</p>
            <a className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse issues <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Developer Resources */}
        <div className="md:col-span-6 bg-white border border-outline-variant/30 rounded-[24px] p-6 sm:p-8 flex items-center gap-6 shadow-sm group hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-primary-container text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-4xl">code</span>
          </div>
          <div>
            <h3 className="font-headline-sm font-bold text-primary mb-2">Developer Portal</h3>
            <p className="text-on-surface-variant font-body-sm mb-4">API documentation, webhooks, and integration guides for systems.</p>
            <a className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              View API Docs <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
