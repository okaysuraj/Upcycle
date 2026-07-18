import React from 'react';

export default function MarketplaceModeration() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
        <div>
          <h2 className="font-display text-headline-md md:text-headline-lg font-bold text-primary">Moderation Command Center</h2>
          <p className="font-body-md text-on-surface-variant mt-1">Reviewing 24 flagged listings from the Resource Marketplace.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button className="px-5 py-2.5 bg-surface-container-lowest border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filters
          </button>
          <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-opacity flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Batch Approve
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Marketplace Mix (Data Visualization Component) */}
        <section className="lg:col-span-4 bg-white border border-outline-variant/30 rounded-[24px] p-6 flex flex-col gap-6 shadow-sm">
          <div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Marketplace Mix</h3>
            <p className="text-sm text-on-surface-variant font-medium">Live volume by category</p>
          </div>
          
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-on-surface">Textiles</span>
                <span className="font-mono text-primary">42%</span>
              </div>
              <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-primary w-[42%] rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-on-surface">Furniture</span>
                <span className="font-mono text-secondary">31%</span>
              </div>
              <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-secondary w-[31%] rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-on-surface">Metals</span>
                <span className="font-mono text-tertiary">18%</span>
              </div>
              <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-tertiary w-[18%] rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2 text-on-surface-variant opacity-70">
              <div className="flex justify-between text-sm font-bold">
                <span>Others</span>
                <span className="font-mono">9%</span>
              </div>
              <div className="h-2.5 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-outline-variant w-[9%] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-6 border-t border-outline-variant/30">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="font-display text-headline-lg font-bold text-on-surface leading-tight">1,204</p>
                <p className="text-sm font-medium text-on-surface-variant">Active Listings Today</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Queue (High Throughput Table) */}
        <section className="lg:col-span-8 bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden flex flex-col shadow-sm">
          <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-error text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <h3 className="font-display text-headline-sm font-bold text-primary">Urgent Queue</h3>
            </div>
            <span className="px-3 py-1 bg-error/10 text-error text-xs rounded-full font-bold uppercase tracking-wider border border-error/20">12 Critical</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-xs font-bold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
                  <th className="px-6 py-4">Listing Details</th>
                  <th className="px-6 py-4">Flag Reason</th>
                  <th className="px-6 py-4">Risk Score</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/30 shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Item" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCZzJKtIvo4CxcTCck1DxtsgNyFtwJ7PxInSOp40Ubi2c24uHOYpinhQlTcoQR8cZ35fNUxHrhcS8hu1i5Ov4NxYUJ6vHpC-j35ykXfLT-j8njSpcOplTef32mYJSATHiOkAJrcmiaw80HKc3gwqpZldUH5s_2Bw-BmaV_HhEUcim_IZX-czZj5s5iuFbr9MIND3b9IO9ChLbGyKARWeIbXW-vtEJOBkQye3rrZo3r1fUcob7YzgAoPzuCFlCzAlWWwjLPc6hvOrU" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-0.5">Vintage Teak Lounge</p>
                        <p className="text-xs font-medium text-on-surface-variant">Furniture • $4,500.00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-error/10 text-error border border-error/20">
                      <span className="material-symbols-outlined text-[14px]">block</span>
                      Prohibited Item
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                         <div className="h-full bg-error w-[90%] rounded-full"></div>
                      </div>
                      <span className="font-mono text-sm font-bold text-error">90</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex justify-end gap-2">
                        <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-success-container/20 hover:text-green-600 flex items-center justify-center transition-colors text-on-surface-variant">
                           <span className="material-symbols-outlined text-[18px]">check</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-error/10 text-error hover:bg-error/20 flex items-center justify-center transition-colors">
                           <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                     </div>
                  </td>
                </tr>
                
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/30 shrink-0 flex items-center justify-center text-outline-variant">
                        <span className="material-symbols-outlined">image_not_supported</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-0.5">Bulk Lab Chemicals</p>
                        <p className="text-xs font-medium text-on-surface-variant">Hazardous • Free</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-error/10 text-error border border-error/20">
                      <span className="material-symbols-outlined text-[14px]">warning</span>
                      Hazmat Alert
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                         <div className="h-full bg-error w-[98%] rounded-full"></div>
                      </div>
                      <span className="font-mono text-sm font-bold text-error">98</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex justify-end gap-2">
                        <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-success-container/20 hover:text-green-600 flex items-center justify-center transition-colors text-on-surface-variant">
                           <span className="material-symbols-outlined text-[18px]">check</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-error/10 text-error hover:bg-error/20 flex items-center justify-center transition-colors">
                           <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                     </div>
                  </td>
                </tr>
                
                 {/* Row 3 */}
                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/30 shrink-0">
                         <img className="w-full h-full object-cover grayscale" data-alt="Item" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxdYR727M_MrQ9A0DVrMnIIGSUU_KUUEy8DKf6QGeobtZXp1CiYRKyGfIV75Dm2LD0c1zge2m0RoFWTcDJi2wjVqqTZtLjdJCO2QYtdH28ZyBlcq-AdAw8yUPxiPH8EQwJTn8i-mhu-cxvsb72LFLYCTemTGNwsL96cnaf8skPg9K1FIff2TxTqvXZiT4VYlIT7wJ2dOhtjpXgR8LuzubAiJowV3LFjipWS_RcauFPpK--D59J9eFs913hBRgk959hdWP7A4KqjYk" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-0.5">Office Chairs (x50)</p>
                        <p className="text-xs font-medium text-on-surface-variant">Furniture • $10.00/ea</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">
                      <span className="material-symbols-outlined text-[14px]">report</span>
                      User Flagged
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                         <div className="h-full bg-yellow-500 w-[45%] rounded-full"></div>
                      </div>
                      <span className="font-mono text-sm font-bold text-yellow-600">45</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex justify-end gap-2">
                        <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-success-container/20 hover:text-green-600 flex items-center justify-center transition-colors text-on-surface-variant">
                           <span className="material-symbols-outlined text-[18px]">check</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-error/20 hover:text-error flex items-center justify-center transition-colors text-on-surface-variant">
                           <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                     </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest text-center">
             <button className="text-sm font-bold text-primary hover:underline">View All Flagged Items (21)</button>
          </div>
        </section>
      </div>
    </div>
  );
}
