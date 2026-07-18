import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function ESGDashboard() {
  const { authFetch } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authFetch('/esg/corporate');
        if (response.ok) {
          const json = await response.json();
          setData(json.globalImpact);
        }
      } catch (error) {
        console.error("Failed to fetch ESG data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  if (loading) {
    return <div className="p-8 text-center text-secondary">Loading ESG Data...</div>;
  }

  // Fallbacks if data fails
  const impact = data || {
    totalCarbonEmissions: 0,
    totalWaterGallons: 0,
    totalEnergyKwh: 0,
    totalWasteDivertedKg: 0
  };

  // Convert for display
  const energyGwh = (impact.totalEnergyKwh / 1000000).toFixed(2);
  const waterKl = (impact.totalWaterGallons * 3.78541 / 1000).toFixed(0);

  return (
    <>
      <div className="flex justify-between items-end mb-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">ESG Command Center</h2>
          <p className="text-body-lg text-on-surface-variant">Track your environmental, social, and governance metrics.</p>
        </div>
        <div className="flex gap-3">
          <Button icon="download">Generate Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* ESG Main Score */}
        <Card className="col-span-12 lg:col-span-5 p-8 flex flex-col items-center justify-center relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-success-container/10 text-primary px-3 py-1 rounded-full text-label-sm flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +2.4% MoM
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-8 w-full">Global ESG Score</h2>
          
          <div className="relative w-48 h-48 rounded-full border-[16px] border-primary-container flex items-center justify-center mb-8 shadow-sm">
             <div className="text-center">
                <span className="font-display text-[64px] leading-none text-primary font-bold">84</span>
                <p className="text-on-surface-variant font-label-md font-bold mt-1">Excellent</p>
             </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-6 w-full text-center border-t border-outline-variant/30 pt-6">
            <div>
              <p className="text-on-surface-variant text-label-sm uppercase font-bold">Env</p>
              <p className="font-headline-md text-primary font-bold">88</p>
            </div>
            <div>
              <p className="text-on-surface-variant text-label-sm uppercase font-bold">Social</p>
              <p className="font-headline-md text-primary font-bold">79</p>
            </div>
            <div>
              <p className="text-on-surface-variant text-label-sm uppercase font-bold">Gov</p>
              <p className="font-headline-md text-primary font-bold">85</p>
            </div>
          </div>
        </Card>

        {/* Metrics Grid */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Energy Card */}
          <Card className="p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-primary-container p-3 rounded-xl text-white">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <span className="text-error font-label-sm flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[16px]">warning</span> Alert: High Load
              </span>
            </div>
            <div className="mt-4">
              <p className="text-on-surface-variant font-label-md font-bold">Energy Consumption</p>
              <p className="font-display text-headline-lg font-bold text-on-surface">{energyGwh} <span className="text-headline-md font-normal">GWh</span></p>
            </div>
            <div className="mt-4 h-2 bg-secondary-container rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[72%]"></div>
            </div>
          </Card>

          {/* Water Card */}
          <Card className="p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-secondary-container p-3 rounded-xl text-on-secondary-container">
                <span className="material-symbols-outlined">opacity</span>
              </div>
              <span className="text-primary font-label-sm font-bold">Optimal</span>
            </div>
            <div className="mt-4">
              <p className="text-on-surface-variant font-label-md font-bold">Water Recovery</p>
              <p className="font-display text-headline-lg font-bold text-on-surface">{waterKl} <span className="text-headline-md font-normal">kL</span></p>
            </div>
            <div className="mt-4 h-2 bg-secondary-container rounded-full overflow-hidden">
              <div className="h-full bg-primary-container w-[88%]"></div>
            </div>
          </Card>

          {/* Waste Card */}
          <Card className="p-6 flex flex-col justify-between md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="bg-surface-variant p-3 rounded-xl text-on-surface-variant">
                <span className="material-symbols-outlined">delete_outline</span>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-md font-bold">Waste Diverted</p>
                <p className="font-display text-headline-md text-primary font-bold">{impact.totalWasteDivertedKg.toLocaleString()} <span className="text-label-md font-normal text-on-surface-variant">Kg</span></p>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <div className="h-2 bg-primary rounded-full flex-1"></div>
              <div className="h-2 bg-primary-container rounded-full flex-1"></div>
              <div className="h-2 bg-secondary-container rounded-full flex-[0.5]"></div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
