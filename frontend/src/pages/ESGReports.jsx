import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Download, ShieldCheck, Target, Leaf } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ESGReports = () => {
  const { authFetch, user } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchESG = async () => {
      try {
        const res = await authFetch('/api/esg/corporate');
        if (res.ok) setData(await res.json());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchESG();
  }, [authFetch]);

  if (loading) return <div className="p-8 text-gray-500">Generating ESG Insights...</div>;

  const impact = data?.globalImpact || {
    totalCampuses: 0, totalUsers: 0, totalEvents: 0, totalWasteDivertedKg: 0, estimatedCarbonOffsetKg: 0
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-emerald-600" />
            Corporate ESG Reporting
          </h2>
          <p className="text-gray-500 text-sm mt-1">Aggregated sustainability impact across all active campuses.</p>
        </div>
        
        <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm">
          <Download className="w-5 h-5 mr-2" />
          Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Leaf className="w-16 h-16 text-emerald-600" />
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Carbon Offset</p>
          <div className="mt-4 flex items-baseline text-4xl font-extrabold text-emerald-600">
            {impact.estimatedCarbonOffsetKg.toLocaleString()}
            <span className="ml-1 text-xl font-medium text-gray-500">kg CO₂</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-16 h-16 text-blue-600" />
          </div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Waste Diverted</p>
          <div className="mt-4 flex items-baseline text-4xl font-extrabold text-blue-600">
            {impact.totalWasteDivertedKg.toLocaleString()}
            <span className="ml-1 text-xl font-medium text-gray-500">kg</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Active Campuses</p>
          <div className="mt-4 flex items-baseline text-4xl font-extrabold text-gray-900">
            {impact.totalCampuses}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Community Events</p>
          <div className="mt-4 flex items-baseline text-4xl font-extrabold text-gray-900">
            {impact.totalEvents}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-20">
          <ShieldCheck className="w-64 h-64 -mt-10 -mr-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold">AI Sustainability Insights</h3>
          </div>
          <p className="text-emerald-50 text-lg leading-relaxed mb-6">
            "Based on historical data aggregation, implementing composting programs across 3 additional campuses could increase the total network carbon offset by 14% this quarter."
          </p>
          <button className="bg-white text-emerald-900 px-5 py-2.5 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
            Generate Strategy Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESGReports;
