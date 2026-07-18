import React from 'react';
import Card from '../../components/ui/Card';

export default function AiInsights() {
  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-display text-primary leading-tight">AI Insights & Recommendations</h2>
          <p className="font-body-lg text-body-lg text-secondary">Smart optimization suggestions based on your campus data.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">bolt</span>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full h-min">High Impact</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">HVAC Optimization</h3>
          <p className="text-secondary text-sm flex-1 mb-6">
            Reduce energy consumption by 12% during off-peak hours in the Science Building by adjusting the baseline temperature.
          </p>
          <button className="w-full py-3 bg-primary text-white rounded-xl font-bold">Apply Suggestion</button>
        </Card>

        <Card className="flex flex-col">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-error-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-error">delete</span>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full h-min">High Impact</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">Waste Route Inefficiency</h3>
          <p className="text-secondary text-sm flex-1 mb-6">
            Bins in Zone C are being emptied when only 40% full. Optimizing the pickup schedule could save $1,200/month.
          </p>
          <button className="w-full py-3 bg-primary text-white rounded-xl font-bold">Reschedule Route</button>
        </Card>

        <Card className="flex flex-col">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">water_drop</span>
            </div>
            <span className="px-3 py-1 bg-surface-variant text-secondary text-xs font-bold rounded-full h-min">Medium Impact</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">Water Leak Detection</h3>
          <p className="text-secondary text-sm flex-1 mb-6">
            Anomalous water usage detected in Dormitory Block B between 2 AM and 5 AM over the last 3 days.
          </p>
          <button className="w-full py-3 border-2 border-primary text-primary rounded-xl font-bold">Create Work Order</button>
        </Card>
      </div>
    </>
  );
}
