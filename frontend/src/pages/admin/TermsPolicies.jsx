import React, { useState } from 'react';
import Card from '../../components/ui/Card';

export default function TermsPolicies() {
  const [activeFilter, setActiveFilter] = useState('All Documents');

  const documents = [
    {
      id: 1,
      title: 'Terms of Service',
      status: 'Active',
      version: 'v4.2.0',
      updated: 'Updated 2 days ago',
      dept: 'Legal Dept.',
      icon: 'description',
      statLabel: 'Adoption Rate',
      statValue: '98.4%',
      statColor: 'text-primary'
    },
    {
      id: 2,
      title: 'Privacy Policy',
      status: 'Active',
      version: 'v3.1.5',
      updated: 'Updated Sept 12, 2023',
      dept: 'GDPR/CCPA Compliant',
      icon: 'policy',
      statLabel: 'Data Retention',
      statValue: '24 Months',
      statColor: 'text-primary'
    },
    {
      id: 3,
      title: 'Cookie Policy',
      status: 'Active',
      version: 'v2.0.1',
      updated: 'Updated Aug 05, 2023',
      dept: '',
      icon: 'cookie',
      statLabel: 'Consent Ratio',
      statValue: '72.1% Opt-in',
      statColor: 'text-primary'
    },
    {
      id: 4,
      title: 'Community Guidelines',
      status: 'Active',
      version: 'v5.0.0',
      updated: 'Updated Oct 20, 2023',
      dept: 'Mod-Sync Enabled',
      icon: 'groups_3',
      statLabel: 'Reports/Month',
      statValue: '-12% (Decrease)',
      statColor: 'text-[#ba1a1a]'
    }
  ];

  return (
    <div className="p-6 max-w-[1440px] mx-auto bg-[#f8f9fa] min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <nav className="flex items-center gap-2 text-[#414844] text-xs font-bold mb-2">
            <span className="hover:text-primary transition-colors cursor-pointer">Settings</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#191c1d]">Terms & Policies</span>
          </nav>
          <h2 className="font-display text-3xl font-bold text-primary mb-2">Official Documentation Portal</h2>
          <p className="text-sm text-[#414844] max-w-2xl">
            Review and manage legal frameworks governing the Upcycle platform. All documents are synchronized with the central legal registry and reflect current compliance statuses.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-[#cce6d0] px-4 py-3 rounded-xl flex items-center gap-3 border border-primary/10">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div>
              <p className="text-[10px] text-[#092012] font-bold opacity-70 uppercase tracking-widest">Compliance Status</p>
              <p className="text-xs text-[#092012] font-bold">System Fully Compliant</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-bold hover:opacity-90 active:scale-95 transition-all shadow-sm">
            <span className="material-symbols-outlined">download</span>
            Bulk PDF Archive
          </button>
        </div>
      </div>

      {/* Bento Grid / Documents View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Filter Bar */}
        <div className="col-span-1 md:col-span-12 flex flex-wrap items-center justify-between bg-[#f8f9fa] border border-[#c1c8c2] p-2 rounded-lg mb-4">
          <div className="flex items-center gap-2">
            {['All Documents', 'Internal', 'External'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                  activeFilter === filter ? 'bg-[#e7e8e9] text-primary' : 'text-[#414844] hover:bg-[#f3f4f5]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 px-4">
            <span className="text-[10px] font-bold text-[#414844] uppercase">Last audit: Oct 24, 2023</span>
            <button className="text-[#414844] hover:text-primary">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>

        {/* Documents List Container */}
        <div className="col-span-1 md:col-span-12 space-y-4">
          {documents.map(doc => (
            <Card key={doc.id} className="p-6 bg-white/80 backdrop-blur-md border border-[#e9ecef] shadow-none hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shrink-0">
                  <span className="material-symbols-outlined text-3xl">{doc.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-xl font-bold text-[#191c1d]">{doc.title}</h3>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                      {doc.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-[#414844] text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">person</span> {doc.version}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span> {doc.updated}
                    </span>
                    {doc.dept && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">shield</span> {doc.dept}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div className="hidden lg:block text-right mr-4">
                  <p className="text-[10px] font-bold text-[#414844] uppercase">{doc.statLabel}</p>
                  <p className={`text-sm font-bold ${doc.statColor}`}>{doc.statValue}</p>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold text-xs group-hover:underline">
                  Read Document
                  <span className="material-symbols-outlined">open_in_new</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e7e8e9] text-[#414844]">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Side Bento Widgets */}
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          
          <div className="bg-white border border-[#c1c8c2] p-5 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#cce6d0]/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">update</span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#191c1d]">Upcoming Changes</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="text-sm text-[#191c1d] font-bold">User Privacy Update</p>
                  <p className="text-xs text-[#414844]">Scheduled for Nov 15th implementation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 opacity-60">
                <div className="w-2 h-2 rounded-full bg-[#c1c8c2] mt-2"></div>
                <div>
                  <p className="text-sm text-[#191c1d] font-bold">Merchant API Terms</p>
                  <p className="text-xs text-[#414844]">Currently under legal review.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#1b4332] text-white p-5 rounded-xl flex flex-col justify-between overflow-hidden relative shadow-sm">
            <div className="relative z-10">
              <h4 className="font-display text-xl font-bold mb-2">Legal Help Desk</h4>
              <p className="text-xs opacity-80 mb-6">Need clarification on a specific policy or regulatory requirement?</p>
              <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#cce6d0] transition-colors">
                Contact Counsel
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[120px] opacity-10 rotate-12">account_balance</span>
          </div>

          <div className="bg-white border border-[#c1c8c2] p-5 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display text-xl font-bold text-[#191c1d]">Audit Trail</h4>
              <span className="material-symbols-outlined text-[#717973]">history</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-[#c1c8c2]/30">
                <span className="text-xs text-[#414844]">Compliance Scan</span>
                <span className="text-[10px] font-bold text-primary">PASSED</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#c1c8c2]/30">
                <span className="text-xs text-[#414844]">SSL Cert Renewal</span>
                <span className="text-[10px] font-bold text-primary">COMPLETE</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-[#414844]">Log Rotation</span>
                <span className="text-[10px] font-bold text-primary">AUTO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
