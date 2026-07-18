import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function VendorDashboard() {
  return (
    <>
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Partner Dashboard</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Manage your marketplace listings and incoming orders.</p>
        </div>
        <div className="flex gap-2">
          <Button icon="add">New Listing</Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Stats */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col shadow-sm p-md">
           <h3 className="text-headline-sm font-headline-sm text-primary mb-4">Active Orders</h3>
           
           <div className="divide-y divide-outline-variant/20">
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-body-md font-body-md font-semibold">Order #8821 - Premium Bio-Compost</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Buyer: University Green Campus</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm rounded-full">In Transit</span>
              </div>
              
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">inventory_2</span>
                  </div>
                  <div>
                    <p className="text-body-md font-body-md font-semibold">Order #8822 - Reclaimed Oak Pallets</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Buyer: City Park District</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-primary-container text-on-primary-container text-label-sm rounded-full">Processing</span>
              </div>
           </div>
        </div>
        
        {/* Right column */}
        <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-headline-sm font-headline-sm">Total Revenue</h3>
              <p className="text-body-sm opacity-70">This Month</p>
            </div>
          </div>
          <div>
            <p className="text-[48px] font-bold leading-none mb-1">12,450</p>
            <p className="font-label-md text-label-md text-primary-fixed">Credits Earned</p>
          </div>
        </div>
      </div>
    </>
  );
}
