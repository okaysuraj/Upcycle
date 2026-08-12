import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function VendorManagement() {
  const [vendors] = useState([
    { id: 'V-001', name: 'GreenWaste Solutions', type: 'Recycling', status: 'Active', sla: 98, contractEnd: '2027-05-15' },
    { id: 'V-002', name: 'City Compost Co.', type: 'Organic', status: 'Active', sla: 92, contractEnd: '2026-12-01' },
    { id: 'V-003', name: 'E-Scrap Industries', type: 'Electronic', status: 'Pending Review', sla: 0, contractEnd: 'N/A' },
    { id: 'V-004', name: 'Campus Haulers', type: 'General', status: 'At Risk', sla: 76, contractEnd: '2025-08-30' },
  ]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Vendor Management</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Oversee third-party waste contracts and evaluate SLA compliance.</p>
        </div>
        <div className="flex gap-3">
          <Button icon="contract" className="bg-surface-container text-on-surface hover:bg-surface-container-high">Contracts</Button>
          <Button icon="add_business">Onboard Vendor</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
         <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-3xl shadow-sm col-span-1 md:col-span-3">
           <h3 className="font-bold text-title-lg text-on-surface mb-4">SLA Compliance Overview</h3>
           <div className="flex items-center gap-8 h-24">
             <div className="flex-1 space-y-2">
               <div className="flex justify-between text-sm font-bold text-on-surface">
                 <span>Platform Average (92%)</span>
                 <span>Target (95%)</span>
               </div>
               <div className="w-full bg-surface-container-high rounded-full h-3 relative">
                 <div className="absolute top-0 bottom-0 left-0 bg-primary rounded-full" style={{ width: '92%' }}></div>
                 <div className="absolute top-0 bottom-0 w-1 bg-on-surface" style={{ left: '95%' }}></div>
               </div>
             </div>
             <div className="w-16 h-16 rounded-full border-4 border-error text-error flex items-center justify-center font-bold text-xl">1</div>
             <span className="text-sm font-bold text-on-surface-variant max-w-[100px]">Vendor at Risk</span>
           </div>
         </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-label-md uppercase border-b border-outline-variant/30">
              <th className="p-5 font-bold">Vendor Name</th>
              <th className="p-5 font-bold">Service Type</th>
              <th className="p-5 font-bold">Contract Status</th>
              <th className="p-5 font-bold">SLA Performance</th>
              <th className="p-5 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20">
            {vendors.map(vendor => (
              <tr key={vendor.id} className="hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                <td className="p-5">
                  <p className="font-bold text-on-surface">{vendor.name}</p>
                  <p className="text-sm text-on-surface-variant font-mono mt-1">{vendor.id}</p>
                </td>
                <td className="p-5 font-medium text-on-surface">{vendor.type}</td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    vendor.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                    vendor.status === 'At Risk' ? 'bg-error-container text-error' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {vendor.status}
                  </span>
                  <p className="text-xs text-on-surface-variant mt-2">Ends: {vendor.contractEnd}</p>
                </td>
                <td className="p-5">
                   {vendor.sla > 0 ? (
                     <div className="flex items-center gap-2">
                       <span className={`font-bold ${vendor.sla < 80 ? 'text-error' : 'text-primary'}`}>{vendor.sla}%</span>
                       <div className="w-24 bg-surface-container-high rounded-full h-1.5">
                         <div className={`h-1.5 rounded-full ${vendor.sla < 80 ? 'bg-error' : 'bg-primary'}`} style={{ width: `${vendor.sla}%` }}></div>
                       </div>
                     </div>
                   ) : <span className="text-sm text-on-surface-variant italic">No data</span>}
                </td>
                <td className="p-5 text-right">
                  <button className="text-primary font-bold hover:underline">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
