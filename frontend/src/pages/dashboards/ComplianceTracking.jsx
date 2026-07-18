import React from 'react';

export default function ComplianceTracking() {
  const certifications = [
    { name: 'ISO 14001:2015', subtitle: 'Environmental Management System', issuer: 'BSI Group', renewal: 'Oct 24, 2024', status: 'Valid', statusStyle: 'bg-secondary-container text-on-secondary-container' },
    { name: 'LEED Platinum', subtitle: 'Campus Center Main Wing', issuer: 'USGBC', renewal: 'Aug 12, 2024', renewalClass: 'text-error-warm font-bold', status: 'Expiring Soon', statusStyle: 'bg-error-container text-on-error-container' },
    { name: 'Zero Waste Facility', subtitle: 'Infrastructure Hub', issuer: 'GBCI', renewal: 'Jan 05, 2025', status: 'Valid', statusStyle: 'bg-secondary-container text-on-secondary-container' },
    { name: 'Energy Star Rating', subtitle: 'Dormitory Complex A-D', issuer: 'EPA', renewal: 'Dec 15, 2024', status: 'Valid', statusStyle: 'bg-secondary-container text-on-secondary-container' }
  ];

  const reviewLog = [
    { title: 'LEED Audit Initiated', desc: 'External review by USGBC', time: '2 days ago', iconBg: 'bg-primary/10', iconColor: 'text-primary', icon: 'verified' },
    { title: 'Waste Report Uploaded', desc: 'Q2 data submitted to GBCI', time: '1 week ago', iconBg: 'bg-secondary-container/30', iconColor: 'text-secondary', icon: 'upload_file' },
    { title: 'Expiration Warning', desc: 'LEED renewal due in 45 days', time: '2 weeks ago', iconBg: 'bg-error-container', iconColor: 'text-error-warm', icon: 'warning' },
    { title: 'ISO Scope Extended', desc: 'Added 3 new buildings', time: '1 month ago', iconBg: 'bg-primary/10', iconColor: 'text-primary', icon: 'add_circle' }
  ];

  return (
    <div className="flex flex-col gap-md">
      {/* Header */}
      <div className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Compliance Tracking</h2>
        <p className="font-body-md text-body-md text-secondary">Monitoring institutional environmental standards and regulatory requirements.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg">
        <div className="bg-white rounded-[24px] border border-outline-variant/30 p-6 flex items-center gap-6 group hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <div>
            <p className="font-label-md text-secondary mb-1">Certifications</p>
            <h3 className="font-display text-headline-lg text-primary">12</h3>
            <p className="text-[11px] font-bold text-success-container mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> 2 New this quarter
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[24px] border border-error-container/30 bg-error-container/5 p-6 flex items-center gap-6 group hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-error-container/20 flex items-center justify-center text-error-warm transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>event_busy</span>
          </div>
          <div>
            <p className="font-label-md text-secondary mb-1">Audit Deadlines</p>
            <h3 className="font-display text-headline-lg text-error-warm">03</h3>
            <p className="text-[11px] font-bold text-error-warm mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">priority_high</span> Action required within 14 days
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[24px] border border-outline-variant/30 p-6 flex items-center gap-6 group hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-on-secondary-container transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>folder_zip</span>
          </div>
          <div>
            <p className="font-label-md text-secondary mb-1">Stored Documents</p>
            <h3 className="font-display text-headline-lg text-on-surface">84</h3>
            <p className="text-[11px] font-bold text-secondary mt-1">4.2 GB used of 50 GB</p>
          </div>
        </div>
      </div>

      {/* Certifications & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-lg items-start">
        {/* Active Certifications */}
        <div className="lg:col-span-8 bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
            <h3 className="font-headline-md text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">workspace_premium</span>
              Active Certifications
            </h3>
            <button className="text-primary font-label-md hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-4 text-left font-label-md text-secondary">Certification Name</th>
                  <th className="px-6 py-4 text-left font-label-md text-secondary">Issuer</th>
                  <th className="px-6 py-4 text-left font-label-md text-secondary">Renewal Date</th>
                  <th className="px-6 py-4 text-left font-label-md text-secondary">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {certifications.map((cert, i) => (
                  <tr key={i} className="hover:bg-surface-container-soft transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <p className="font-body-md font-bold text-on-surface">{cert.name}</p>
                      <p className="text-xs text-secondary">{cert.subtitle}</p>
                    </td>
                    <td className="px-6 py-4 font-body-md text-secondary">{cert.issuer}</td>
                    <td className={`px-6 py-4 font-body-md ${cert.renewalClass || 'text-on-surface'}`}>{cert.renewal}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 ${cert.statusStyle} rounded-full text-[11px] font-bold`}>{cert.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Review Log */}
        <div className="lg:col-span-4 bg-white rounded-[24px] border border-outline-variant/30 flex flex-col max-h-[480px]">
          <div className="p-6 border-b border-outline-variant/20">
            <h3 className="font-headline-md text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span>
              Review Log
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {reviewLog.map((log, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full ${log.iconBg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${log.iconColor} text-[18px]`}>{log.icon}</span>
                  </div>
                  {i < reviewLog.length - 1 && <div className="w-px h-full bg-outline-variant/30 mt-2"></div>}
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

      {/* Compliance Score */}
      <div className="bg-white rounded-[24px] border border-outline-variant/30 p-md">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-headline-md text-headline-md">Compliance Score Overview</h4>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">download</span> Export Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Environmental', score: 94, color: 'bg-primary' },
            { label: 'Health & Safety', score: 88, color: 'bg-tertiary' },
            { label: 'Energy Standards', score: 76, color: 'bg-secondary' },
            { label: 'Waste Management', score: 92, color: 'bg-success-container' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e7f6ff" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray={`${item.score * 2.51} 251`} className={`${item.color === 'bg-primary' ? 'text-primary' : item.color === 'bg-tertiary' ? 'text-tertiary' : item.color === 'bg-secondary' ? 'text-secondary' : 'text-success-container'}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-on-surface">{item.score}%</span>
                </div>
              </div>
              <p className="font-label-md text-label-md font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
