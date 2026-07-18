import React from 'react';

export default function DisputeResolutionCenter() {
  return (
    <div className="flex flex-col gap-md h-full w-full">
      {/* Case Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-label-sm font-label-sm bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded uppercase tracking-wider">Dispute Open</span>
            <span className="text-label-sm font-label-sm text-on-surface-variant">Case ID: #CRT-992-04X</span>
          </div>
          <h2 className="text-display-sm font-display-sm text-primary">Dispute: Refurbished Laptop Pro-X</h2>
          <p className="text-body-md text-on-surface-variant mt-1">Claim: Item not as described (Hardware defects reported by Buyer)</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface-variant font-label-md rounded hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px]">flag</span> Escalate
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-label-md rounded hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span> Finalize Verdict
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-gutter flex-1">
        {/* Communication Log (Left Column) */}
        <div className="col-span-12 lg:col-span-7 bg-white border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col h-[700px] shadow-sm">
          <div className="px-6 py-4 border-b border-outline-variant/20 bg-surface-container-low flex justify-between items-center">
            <h3 className="text-headline-sm font-headline-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">forum</span> Communication Log
            </h3>
            <span className="text-label-sm font-label-sm text-on-surface-variant italic hidden sm:block">Transcripts recorded for legal review</span>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Message: Buyer */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-outline-variant/30 mt-1 bg-surface-variant flex items-center justify-center flex-shrink-0">
                 <span className="material-symbols-outlined text-on-surface-variant">person</span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-on-surface">Alex Thompson (Buyer)</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">10:24 AM</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg rounded-tl-none border border-outline-variant/30 max-w-[90%]">
                  <p className="text-body-md">The laptop arrived with significant screen flickering that wasn't mentioned in the listing. I've attached a video in the evidence vault. I cannot use this for my work.</p>
                </div>
              </div>
            </div>

            {/* Message: Seller */}
            <div className="flex gap-4 flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold text-label-md mt-1 flex-shrink-0">EC</div>
              <div className="flex-1 flex flex-col items-end">
                <div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
                  <span className="font-bold text-on-surface">EcoElectronics (Seller)</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">11:15 AM</span>
                </div>
                <div className="bg-secondary-container p-4 rounded-lg rounded-tr-none border border-outline-variant/30 max-w-[90%] text-right">
                  <p className="text-body-md">Every unit is stress-tested before shipping. The screen was perfect when it left our facility. This must have occurred during shipping or through improper handling by the buyer.</p>
                </div>
              </div>
            </div>

            {/* System Note */}
            <div className="flex justify-center">
              <div className="bg-surface-container-high px-4 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest border border-outline-variant/30">
                Administrative Intervention Requested
              </div>
            </div>

            {/* Message: Admin */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mt-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">shield_person</span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-primary">Admin (Sarah_K)</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">01:30 PM</span>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg rounded-tl-none border border-primary/20 max-w-[90%]">
                  <p className="text-body-md">Reviewing shipping documents now. Seller, please confirm if the package was insured for internal component damage. Buyer, please clarify if the outer box showed signs of impact.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-outline-variant/20 bg-surface">
            <div className="relative">
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 pr-24 focus:ring-1 focus:ring-primary focus:border-primary resize-none h-24 text-body-md" placeholder="Type an administrative message..."></textarea>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <button className="bg-primary text-on-primary px-4 py-1.5 rounded font-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">send</span> Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Evidence (Right Column) */}
        <div className="col-span-12 lg:col-span-5 space-y-gutter">
          {/* Dispute Info */}
          <div className="bg-white border border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <h3 className="text-headline-sm font-headline-sm text-on-surface mb-4">Transaction Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Item ID</span>
                <span className="font-bold">#ITM-88902</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Total Amount</span>
                <span className="font-bold text-primary">$450.00 (Held in Escrow)</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Dispute Date</span>
                <span className="font-bold">Oct 12, 2024</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Resolution Deadline</span>
                <span className="font-bold text-error-warm">Oct 19, 2024</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2 border border-outline text-primary font-label-md rounded hover:bg-surface-variant/50 transition-colors">View Original Listing</button>
          </div>

          {/* Evidence Vault */}
          <div className="bg-white border border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">Evidence Vault</h3>
              <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-label-sm font-bold">3 Files</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-outline-variant/20 cursor-pointer hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 bg-error-container text-on-error-container rounded flex items-center justify-center">
                  <span className="material-symbols-outlined">videocam</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-label-md">screen_flicker_proof.mp4</p>
                  <p className="text-label-sm text-on-surface-variant">Uploaded by Buyer • 12MB</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">download</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-outline-variant/20 cursor-pointer hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
                  <span className="material-symbols-outlined">image</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-label-md">box_condition_arrival.jpg</p>
                  <p className="text-label-sm text-on-surface-variant">Uploaded by Buyer • 2.4MB</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">download</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-outline-variant/20 cursor-pointer hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 bg-tertiary-container text-on-tertiary-container rounded flex items-center justify-center">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-label-md">fedex_shipping_receipt.pdf</p>
                  <p className="text-label-sm text-on-surface-variant">Uploaded by Seller • 1.1MB</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
