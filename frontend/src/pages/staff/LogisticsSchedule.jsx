import React from 'react';
import Button from '../../components/ui/Button';

export default function LogisticsSchedule() {
  const schedule = [
    { time: '06:00 AM', route: 'North Campus Loop', vehicle: 'V-001', status: 'Completed' },
    { time: '08:30 AM', route: 'Science Buildings', vehicle: 'V-003', status: 'In Progress' },
    { time: '11:00 AM', route: 'Dining Halls', vehicle: 'V-004', status: 'Scheduled' },
    { time: '02:00 PM', route: 'Dorms (East)', vehicle: 'V-001', status: 'Scheduled' },
    { time: '04:30 PM', route: 'Main Library & Arts', vehicle: 'V-002', status: 'Scheduled' },
  ];

  return (
    <>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Logistics Schedule</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Daily collection timelines and route assignments.</p>
        </div>
        <div className="flex gap-2">
          <Button icon="add">New Schedule</Button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-label-md uppercase border-b border-outline-variant/30">
                <th className="p-4 font-bold">Time</th>
                <th className="p-4 font-bold">Route Name</th>
                <th className="p-4 font-bold">Assigned Vehicle</th>
                <th className="p-4 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {schedule.map((s, i) => (
                <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-4 font-bold text-on-surface">{s.time}</td>
                  <td className="p-4 text-on-surface-variant">{s.route}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-lg text-sm font-bold">{s.vehicle}</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      s.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                      s.status === 'In Progress' ? 'bg-secondary-container text-on-secondary-container' :
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
