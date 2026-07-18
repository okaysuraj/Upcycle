import React from 'react';

export default function PaymentEscrowManagement() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Header & Top Stats */}
      <section className="mb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div>
            <h2 className="font-display text-headline-lg font-bold text-primary leading-tight">Payment Escrow</h2>
            <p className="font-body-md text-on-surface-variant mt-2 text-lg">Secure fund management for the Campus Circularity Grant #8821</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="px-5 py-2.5 bg-white border border-outline-variant/50 rounded-full font-bold text-sm text-on-surface hover:bg-surface-container-lowest transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter View
            </button>
            <button className="px-6 py-2.5 bg-green-100 text-green-800 border border-green-200 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm hover:bg-green-200 transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Report
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid - Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Large Status Card */}
        <div className="lg:col-span-8 bg-white rounded-[24px] p-8 md:p-12 border border-outline-variant/30 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-md transition-shadow group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-5 transition-opacity duration-500">
            <span className="material-symbols-outlined text-[180px]">security</span>
          </div>
          <div className="relative z-10">
            <span className="px-4 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Active Escrow
            </span>
            <h3 className="font-display text-headline-md md:text-display-sm font-bold text-on-surface mt-6 mb-2">Funds Held in Escrow</h3>
            <p className="font-body-md text-on-surface-variant max-w-md font-medium leading-relaxed">Resources are verified and locked by the Upcycle Smart Contract until milestone fulfillment.</p>
          </div>
          <div className="mt-12 relative z-10">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-[48px] md:text-[64px] font-bold text-primary tracking-tight leading-none">$42,850<span className="text-[32px] text-primary/70">.00</span></span>
              <span className="font-bold text-xl text-on-surface-variant">USD</span>
            </div>
            <div className="w-full h-3.5 bg-surface-container rounded-full overflow-hidden shadow-inner mb-3">
              <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden" style={{ width: '65%' }}>
                 <div className="absolute inset-0 bg-white/20 w-full transform -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-on-surface-variant">Released: $14,150.00</span>
              <span className="text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded-lg">Progress: 65%</span>
            </div>
          </div>
        </div>
        
        {/* Milestone Panel */}
        <div className="lg:col-span-4 bg-white/60 backdrop-blur-md border border-outline-variant/30 rounded-[24px] p-6 md:p-8 flex flex-col shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-display text-headline-sm font-bold text-primary">Next Release</h4>
            <span className="material-symbols-outlined text-primary text-[28px] bg-primary/10 p-2 rounded-xl">event_available</span>
          </div>
          
          <div className="space-y-6 flex-1">
            <div className="p-5 bg-white rounded-2xl border border-outline-variant/30 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 pl-2">Milestone 3</p>
              <p className="font-display text-xl font-bold text-on-surface mb-4 pl-2">Bio-Digester Installation</p>
              <div className="flex justify-between items-center pl-2">
                <span className="font-display text-2xl font-bold text-primary">$8,500.00</span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-lg text-xs font-bold border border-outline-variant/30">DUE MAY 12</span>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 flex items-start gap-3">
               <span className="material-symbols-outlined text-on-surface-variant text-[20px]">info</span>
               <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                   Awaiting <strong>"Physical Verification"</strong> signature from Facilities Department to unlock funds.
               </p>
            </div>
          </div>
          
          <button className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg mt-8 shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all active:scale-95">
             Release Funds
          </button>
        </div>
      </div>

      {/* Middle Section: Transaction History & Audit Trail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Transaction Table (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden shadow-sm">
          <div className="p-6 md:p-8 border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest">
            <h3 className="font-display text-headline-sm font-bold text-on-surface">Transaction History</h3>
            <div className="relative w-full sm:w-auto">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input 
                className="w-full sm:w-64 bg-surface-container-lowest border border-outline-variant/50 rounded-full pl-11 pr-4 py-2.5 text-sm font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-inner" 
                placeholder="Search hash..." 
                type="text"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-lowest text-on-surface-variant border-b border-outline-variant/30">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Contract Entity</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                 {/* Row 1 */}
                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 px-3 py-1.5 rounded-full w-fit">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Released
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-on-surface text-sm">North Campus Dev</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Milestone 2 - Grading</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-on-surface text-sm">Apr 14, 2024</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">14:32 PST</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-bold text-primary text-sm">$4,200.00</p>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">0x7F...3B9A</span>
                        <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                           <span className="material-symbols-outlined text-[16px]">content_copy</span>
                        </button>
                     </div>
                  </td>
                </tr>
                
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 px-3 py-1.5 rounded-full w-fit">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Released
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-on-surface text-sm">Eco Solutions LLC</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Milestone 1 - Planning</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-on-surface text-sm">Mar 01, 2024</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">09:15 PST</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-bold text-primary text-sm">$9,950.00</p>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">0x2A...8C1F</span>
                        <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                           <span className="material-symbols-outlined text-[16px]">content_copy</span>
                        </button>
                     </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest text-center">
             <button className="text-sm font-bold text-primary hover:underline">View All Transactions (12)</button>
          </div>
        </div>
        
        {/* Verification Requirements */}
        <div className="lg:col-span-4 bg-white rounded-[24px] border border-outline-variant/30 p-6 md:p-8 shadow-sm">
           <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">verified_user</span>
              <h3 className="font-display text-headline-sm font-bold text-on-surface">Release Requirements</h3>
           </div>
           
           <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-green-200 bg-green-50/50">
                 <span className="material-symbols-outlined text-green-600 mt-0.5">check_circle</span>
                 <div>
                    <h4 className="font-bold text-on-surface text-sm">Vendor Identity Verification</h4>
                    <p className="text-xs text-on-surface-variant font-medium mt-1">KYC completed and approved on Jan 15, 2024.</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border border-green-200 bg-green-50/50">
                 <span className="material-symbols-outlined text-green-600 mt-0.5">check_circle</span>
                 <div>
                    <h4 className="font-bold text-on-surface text-sm">Initial Funding Deposit</h4>
                    <p className="text-xs text-on-surface-variant font-medium mt-1">Full amount secured in smart contract wallet.</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border border-outline-variant/50 bg-surface-container-lowest">
                 <span className="material-symbols-outlined text-on-surface-variant mt-0.5">pending</span>
                 <div>
                    <h4 className="font-bold text-on-surface text-sm">Multi-Sig Approval</h4>
                    <p className="text-xs text-on-surface-variant font-medium mt-1">Requires 2/3 admin signatures for next release.</p>
                    <div className="flex gap-2 mt-3">
                       <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 border border-green-200 text-xs font-bold tooltip" title="Approved: Admin_Root">R</div>
                       <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant border border-outline-variant/30 text-xs font-bold shadow-inner">?</div>
                       <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant border border-outline-variant/30 text-xs font-bold shadow-inner">?</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
