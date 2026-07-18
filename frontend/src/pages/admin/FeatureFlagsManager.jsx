import React, { useState } from 'react';

export default function FeatureFlagsManager() {
  const [flags, setFlags] = useState([
    {
      id: 'V2_CHECKOUT_FLOW',
      description: 'Enables the multi-step recycling cart checkout system.',
      tag: 'UI-Refactor',
      updated: '2h ago',
      dev: true,
      stg: true,
      prod: false,
      ownerInitials: 'EK',
      ownerTeam: 'Engineering-Core',
    },
    {
      id: 'AI_MATCHING_ENGINE',
      description: 'Replaces deterministic logic with ML-based vendor suggestions.',
      tag: 'Backend-ML',
      updated: '1d ago',
      dev: true,
      stg: false,
      prod: false,
      ownerInitials: 'JR',
      ownerTeam: 'Data-Science',
    },
    {
      id: 'DARK_MODE_THEME',
      description: 'Global toggle for the eco-professional dark mode variant.',
      tag: 'Design-Sys',
      updated: '3w ago',
      dev: true,
      stg: true,
      prod: true,
      ownerInitials: 'LD',
      ownerTeam: 'Design-Ops',
    }
  ]);

  const toggleFlag = (id, env) => {
    setFlags(flags.map(f => {
      if (f.id === id) {
        return { ...f, [env]: !f[env] };
      }
      return f;
    }));
  };

  return (
    <div className="flex flex-col gap-md">
      {/* Page Header & Stats Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-gutter">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-on-surface-variant mb-1">
            <span className="text-label-md font-label-md">System Health</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-label-md font-label-md text-primary font-bold">Feature Flags</span>
          </div>
          <h2 className="text-display-sm font-display font-bold text-primary">Feature Management</h2>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">Manage system toggles, user segmentation, and environment-specific logic. Real-time propagation across DEV, STG, and PRD instances.</p>
        </div>
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          <div className="bg-white border border-outline-variant/30 shadow-sm p-4 rounded-[24px] flex flex-col justify-between">
            <span className="text-label-sm text-on-surface-variant uppercase font-bold">Active Flags</span>
            <div className="flex items-end justify-between mt-2">
              <span className="text-headline-lg font-bold text-primary">42</span>
              <span className="text-label-sm text-tertiary font-bold bg-tertiary-container/30 px-2 py-1 rounded-full">+3 this week</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant/30 shadow-sm p-4 rounded-[24px] flex flex-col justify-between">
            <span className="text-label-sm text-on-surface-variant uppercase font-bold">Global Status</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-4 h-4 bg-primary rounded-full animate-pulse"></span>
              <span className="text-headline-md font-bold text-on-surface">Stable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Bar & Filters */}
      <div className="bg-white border border-outline-variant/30 shadow-sm p-3 rounded-2xl mb-gutter flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button className="bg-primary text-on-primary px-4 py-2 rounded-full text-label-md font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create New Flag
          </button>
          <div className="h-8 w-px bg-outline-variant/30 mx-2"></div>
          <button className="flex items-center gap-2 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-xl text-label-md transition-colors font-bold">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            All Environments
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-xl text-label-md transition-colors font-bold">
            <span className="material-symbols-outlined text-[20px]">person</span>
            Owned by Me
          </button>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-1">
          <button className="px-4 py-1.5 bg-primary/10 rounded-lg text-label-sm font-bold text-primary">List</button>
          <button className="px-4 py-1.5 text-label-sm font-bold text-on-surface-variant hover:text-on-surface">Grid</button>
        </div>
      </div>

      {/* Feature Flags Data Table */}
      <div className="bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/30">
                <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Feature Flag & Meta</th>
                <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase text-center">Development</th>
                <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase text-center">Staging</th>
                <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase text-center">Production</th>
                <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase">Owner / Team</th>
                <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {flags.map((flag) => (
                <tr key={flag.id} className="hover:bg-surface-container-lowest/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-label-lg font-mono font-bold text-primary">{flag.id}</span>
                      <span className="text-body-sm text-on-surface-variant mt-1">{flag.description}</span>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="bg-secondary-container/30 text-secondary border border-secondary/20 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{flag.tag}</span>
                        <span className="text-label-sm text-on-surface-variant/60">Updated {flag.updated}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center align-middle">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={flag.dev} onChange={() => toggleFlag(flag.id, 'dev')} />
                      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </td>
                  <td className="px-6 py-5 text-center align-middle">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={flag.stg} onChange={() => toggleFlag(flag.id, 'stg')} />
                      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </td>
                  <td className="px-6 py-5 text-center align-middle">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={flag.prod} onChange={() => toggleFlag(flag.id, 'prod')} />
                      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </td>
                  <td className="px-6 py-5 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                        {flag.ownerInitials}
                      </div>
                      <span className="text-body-sm font-bold text-on-surface">{flag.ownerTeam}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right align-middle">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 rounded-full">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
