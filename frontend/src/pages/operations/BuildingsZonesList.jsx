import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuildingsZonesList() {
  const navigate = useNavigate();

  const buildings = [
    {
      id: 'BLD-0042',
      name: 'The Evergreen Commons',
      type: 'Academic',
      zones: 14,
      efficiency: 94,
      status: 'Operational',
      statusColor: 'text-primary bg-success-container/10 border-primary/20',
      icon: 'school'
    },
    {
      id: 'BLD-0089',
      name: 'Bio-Innovation Lab',
      type: 'Research',
      zones: 32,
      efficiency: 72,
      status: 'Operational',
      statusColor: 'text-tertiary bg-tertiary-container/10 border-tertiary/20',
      icon: 'science'
    },
    {
      id: 'BLD-0104',
      name: 'North Wing Refectory',
      type: 'Utility/Food',
      zones: 8,
      efficiency: 45,
      status: 'Maintenance',
      statusColor: 'text-error-warm bg-error-container border-error-warm/20',
      icon: 'lunch_dining'
    },
    {
      id: 'BLD-0211',
      name: 'Sustainability Pavillion',
      type: 'Public Space',
      zones: 21,
      efficiency: 88,
      status: 'Operational',
      statusColor: 'text-primary bg-success-container/10 border-primary/20',
      icon: 'stadium'
    }
  ];

  return (
    <div className="flex flex-col gap-md relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-display text-primary leading-tight">Infrastructure</h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl">
            Manage and monitor campus building performance, zoning certifications, and real-time efficiency metrics.
          </p>
        </div>
        <button 
          onClick={() => navigate('/operations/buildings/add')}
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add_business</span>
          Add Building
        </button>
      </div>

      {/* Bento Grid - Stats Quick View */}
      <div className="grid grid-cols-12 gap-gutter mb-4">
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-primary-container/20 text-primary rounded-xl material-symbols-outlined">apartment</span>
            <span className="text-success-container font-bold text-label-sm">+4.2%</span>
          </div>
          <div>
            <p className="text-secondary font-label-md text-label-md">Total Buildings</p>
            <p className="text-primary font-headline-lg text-headline-lg">248</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-tertiary-container/20 text-tertiary rounded-xl material-symbols-outlined">eco</span>
            <span className="text-primary font-bold text-label-sm">Active</span>
          </div>
          <div>
            <p className="text-secondary font-label-md text-label-md">Avg. Efficiency</p>
            <p className="text-tertiary font-headline-lg text-headline-lg">82.4%</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-error-container/20 text-error-warm rounded-xl material-symbols-outlined">report_problem</span>
            <span className="text-error-warm font-bold text-label-sm">3 Alerts</span>
          </div>
          <div>
            <p className="text-secondary font-label-md text-label-md">Zones Pending Audit</p>
            <p className="text-error-warm font-headline-lg text-headline-lg">12</p>
          </div>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 shadow-sm overflow-hidden">
        {/* Table Controls */}
        <div className="p-6 border-b border-outline-variant/20 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-headline-md text-headline-md text-on-surface">Campus Directory</h3>
            <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-label-sm font-bold">ALL SITES</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-surface-container-low rounded-lg p-1">
              <button 
                onClick={() => navigate('/operations/buildings/list')}
                className="px-4 py-2 bg-white shadow-sm rounded-md text-primary font-bold text-label-md"
              >
                List View
              </button>
              <button 
                onClick={() => navigate('/operations/buildings')}
                className="px-4 py-2 text-secondary font-medium text-label-md hover:bg-white/50 transition-colors"
              >
                Grid View
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-secondary hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              <span className="font-label-md text-label-md">Filters</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-secondary hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="font-label-md text-label-md">Export</span>
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 font-label-md text-label-md text-secondary uppercase tracking-wider">Building Name</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary uppercase tracking-wider">Zones</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary uppercase tracking-wider">Efficiency Rating</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {buildings.map(b => (
                <tr key={b.id} className="hover:bg-primary-container/5 transition-colors group cursor-pointer" onClick={() => navigate(`/operations/buildings/edit/${b.id}`)}>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{b.icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{b.name}</p>
                        <p className="text-label-sm text-secondary">ID: {b.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-body-md text-body-md text-on-surface-variant">{b.type}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-body-md text-body-md font-medium">{b.zones} Zones</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-full max-w-[120px] space-y-1">
                      <div className={`flex justify-between text-label-sm font-bold ${b.efficiency < 80 ? 'text-error' : 'text-primary'}`}>
                        <span>{b.efficiency}%</span>
                        <span>{b.efficiency >= 80 ? 'Optimal' : (b.efficiency > 50 ? 'Steady' : 'Low')}</span>
                      </div>
                      <div className="h-2 w-full bg-secondary-container rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${b.efficiency < 80 ? 'bg-error' : 'bg-primary'}`} style={{ width: `${b.efficiency}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 border rounded-full text-label-sm font-bold ${b.statusColor}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer/Pagination */}
        <div className="p-6 border-t border-outline-variant/20 flex items-center justify-between">
          <p className="font-label-md text-label-md text-secondary">Showing <span className="font-bold text-on-surface">4</span> of <span className="font-bold text-on-surface">248</span> buildings</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center font-bold text-label-md">1</button>
            <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors font-medium text-label-md">2</button>
            <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors font-medium text-label-md">3</button>
            <button className="w-10 h-10 border border-outline-variant rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Contextual Information Card */}
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-[24px] relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-outline-variant/30 mt-4">
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container/20 text-tertiary rounded-full text-label-sm font-bold">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            NEW COMPLIANCE STANDARDS
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary">Optimize your campus energy footprint.</h3>
          <p className="font-body-md text-body-md text-secondary leading-relaxed max-w-2xl">
            The 2024 Green Campus Initiative requires all academic buildings to achieve a minimum efficiency rating of 75%. Buildings currently under-performing have been flagged for maintenance review.
          </p>
          <div className="flex gap-4 pt-2">
            <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold text-label-md hover:opacity-90 transition-opacity">View Requirements</button>
            <button className="px-6 py-2 border border-primary/30 text-primary rounded-full font-bold text-label-md hover:bg-primary/5 transition-colors">Download Audit Guide</button>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbuYkSu-jqdWt9txE2LxVWDAe5A-Uw6r24PHyY2HpIcYGeRU7V0FEU0VjONvheRVstIKSfzm510khh-P8DLw5jrRIM3Xv74fxwM8PgQWS4T-j2LMd-rqkMrwFojQoh5TIkKM_N_OnHBUMUbW2_qPd_udhUdQDsvNScRm3QHlw61mpVL6-J73uPWWNlpijJEILKdrcMmbs4frBpLM8bsUwccxamzNolmnL0eQRkyMP0qMsTJ6NmTJ5LU-6XcTj6tEpSEKOA6Lwx5KY" alt="Building energy maps" />
        </div>
      </div>
    </div>
  );
}
