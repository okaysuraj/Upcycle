import React from 'react';
import Button from '../../components/ui/Button';

export default function ComplianceAudits() {
  const audits = [
    { id: 'AUD-2026-Q3', title: 'Q3 Facility Safety & Waste Audit', date: '2026-09-30', status: 'Scheduled', score: null },
    { id: 'AUD-2026-Q2', title: 'Q2 E-Waste Compliance', date: '2026-06-15', status: 'Passed', score: 96 },
    { id: 'AUD-2026-Q1', title: 'Q1 Chemical Disposal Check', date: '2026-03-20', status: 'Passed w/ Findings', score: 82 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Compliance & Audits</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Track environmental compliance, regulatory audits, and facility inspections.</p>
        </div>
        <Button icon="fact_check">New Audit</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audits.map(audit => (
          <div key={audit.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                audit.status === 'Passed' ? 'bg-emerald-100 text-emerald-800' :
                audit.status === 'Passed w/ Findings' ? 'bg-amber-100 text-amber-800' :
                'bg-surface-container-high text-on-surface-variant'
              }`}>
                {audit.status}
              </span>
              <span className="text-xs font-mono font-bold text-on-surface-variant">{audit.id}</span>
            </div>
            
            <h3 className="font-bold text-title-lg text-on-surface mb-2">{audit.title}</h3>
            <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-6">
              <span className="material-symbols-outlined text-[16px]">event</span> {audit.date}
            </p>
            
            <div className="flex justify-between items-center border-t border-outline-variant/20 pt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-on-surface-variant font-bold uppercase tracking-wider">Score</span>
                <span className={`text-2xl font-black ${audit.score >= 90 ? 'text-emerald-600' : audit.score >= 80 ? 'text-amber-600' : 'text-on-surface-variant'}`}>
                  {audit.score || '--'}
                </span>
              </div>
              <button className="text-primary font-bold text-sm hover:underline">View Report</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-error-container text-on-error-container rounded-3xl p-8 flex items-center justify-between">
         <div>
           <h3 className="text-title-lg font-bold">Action Required: Expiring Certifications</h3>
           <p className="mt-1">3 staff members have Hazmat certifications expiring in &lt;30 days.</p>
         </div>
         <Button className="bg-error text-on-error hover:bg-error/90">Review Staff</Button>
      </div>
    </div>
  );
}
