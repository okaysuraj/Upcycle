import React, { useState } from 'react';

export default function AddWasteEntry() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setStep(2);
  };

  const handleNext = () => {
    setStep(3);
  };

  return (
    <div className="flex flex-col gap-md">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-4 text-on-surface-variant">
        <a className="text-label-md hover:text-primary transition-colors" href="#">Logistics</a>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <a className="text-label-md hover:text-primary transition-colors" href="#">Waste Tracking</a>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-label-md font-bold text-primary">Add Waste Entry</span>
      </nav>

      {/* Flow Container */}
      <div className="max-w-4xl mx-auto w-full">
        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-12 relative px-4">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-surface-variant -z-10"></div>
          <div 
            className="absolute top-1/2 left-4 h-0.5 bg-primary transition-all duration-500 -z-10" 
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
          
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-background transition-colors duration-500 ${step >= num ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                {step > num ? <span className="material-symbols-outlined text-sm">check</span> : num}
              </div>
              <span className={`text-label-sm font-bold ${step >= num ? 'text-primary' : 'text-on-surface-variant'}`}>
                {num === 1 ? 'Category' : num === 2 ? 'Details' : 'Confirmation'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[32px] p-lg border border-outline-variant/30 shadow-sm min-h-[500px] flex flex-col">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div className="flex-1 animate-fade-in">
              <div className="mb-8">
                <h2 className="font-display font-bold text-headline-lg text-on-surface">Select Waste Category</h2>
                <p className="text-body-md text-on-surface-variant">Choose the primary material type for this entry to ensure correct processing and reporting.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
                {[
                  { name: 'Plastic', icon: 'recycling', desc: 'PET, HDPE, PVC' },
                  { name: 'Glass', icon: 'wine_bar', desc: 'Clear, Green, Amber' },
                  { name: 'Paper', icon: 'description', desc: 'Cardboard, Mixed' },
                  { name: 'Organic', icon: 'compost', desc: 'Food Waste, Green' },
                  { name: 'Metal', icon: 'precision_manufacturing', desc: 'Aluminium, Steel' },
                  { name: 'Other', icon: 'category', desc: 'Hazardous, E-waste' }
                ].map((cat) => (
                  <button 
                    key={cat.name}
                    onClick={() => handleCategorySelect(cat.name)}
                    className="flex flex-col items-center justify-center p-xl rounded-[24px] border-2 border-outline-variant/30 hover:border-primary hover:bg-surface-container-low transition-all group"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-[32px]">{cat.icon}</span>
                    </div>
                    <span className="font-display font-bold text-body-lg text-on-surface">{cat.name}</span>
                    <span className="text-label-sm text-on-surface-variant mt-1">{cat.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="flex-1 animate-fade-in flex flex-col">
              <div className="mb-8">
                <h2 className="font-display font-bold text-headline-lg text-on-surface flex items-center gap-4">
                  <button onClick={() => setStep(1)} className="hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  </button>
                  Entry Details
                </h2>
                <p className="text-body-md text-on-surface-variant ml-12">Provide specific measurements and source information for the <span className="font-bold text-primary">{category}</span> waste.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-gutter ml-12 flex-1">
                <div className="col-span-1 space-y-2">
                  <label className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Weight (kg)</label>
                  <input className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/30 focus:ring-2 focus:ring-primary focus:border-primary font-display text-body-lg" placeholder="0.00" type="number" />
                </div>
                <div className="col-span-1 space-y-2">
                  <label className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Source Facility</label>
                  <select className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/30 focus:ring-2 focus:ring-primary focus:border-primary font-display text-body-lg">
                    <option>Central District Hub</option>
                    <option>North Industrial Complex</option>
                    <option>Eastside Sorting Yard</option>
                  </select>
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Arrival Timestamp</label>
                  <input className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/30 focus:ring-2 focus:ring-primary focus:border-primary font-display text-body-lg" type="datetime-local" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Notes (Optional)</label>
                  <textarea className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/30 focus:ring-2 focus:ring-primary focus:border-primary font-display text-body-md" placeholder="Any specific details regarding quality or contaminants..." rows="3"></textarea>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-end">
                 <button onClick={handleNext} className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-md hover:opacity-90 active:scale-95 transition-all">
                    Submit Entry
                 </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="flex-1 animate-fade-in flex flex-col items-center justify-center text-center py-12">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h2 className="font-display font-bold text-headline-lg text-on-surface mb-2">Entry Recorded Successfully</h2>
              <p className="text-body-lg text-on-surface-variant max-w-md mb-8">
                Your entry for <span className="font-bold">{category}</span> waste has been logged in the system and inventory updated.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors font-bold">
                  Log Another Entry
                </button>
                <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary shadow-md hover:opacity-90 transition-opacity font-bold">
                  View Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
