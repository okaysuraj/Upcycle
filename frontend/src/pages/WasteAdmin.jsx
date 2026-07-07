import React, { useState, useEffect } from 'react';
import { Trash2, AlertTriangle, CheckCircle2, RefreshCw, Filter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const WasteAdmin = () => {
  const { authFetch } = useAuth();
  const [bins, setBins] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [binsRes, statsRes] = await Promise.all([
          authFetch('/api/waste/bins'),
          authFetch('/api/waste/stats')
        ]);
        
        if (binsRes.ok) setBins(await binsRes.json());
        if (statsRes.ok) setStats(await statsRes.json());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  if (loading) return <div className="p-8 text-gray-500">Loading Waste Data...</div>;

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Trash2 className="w-5 h-5 mr-2 text-emerald-600" />
          Waste Collection Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(stat => (
            <div key={stat.category} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.category}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.totalKg.toLocaleString()} kg</p>
            </div>
          ))}
          {stats.length === 0 && (
            <div className="col-span-4 p-4 text-center text-gray-500 bg-white border border-gray-100 rounded-lg">
              No waste logs collected yet.
            </div>
          )}
        </div>
      </div>

      {/* Smart Bins Live Map (List) */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2 text-emerald-600" />
            Live Smart Bin Status
          </h2>
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-emerald-600">
            <Filter className="w-4 h-4 mr-1" />
            Filter by Status
          </button>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Location / Campus</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Fill Level</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bins.map(bin => {
                const isFull = bin.fillLevel >= 90;
                const isWarning = bin.fillLevel >= 75 && !isFull;
                return (
                  <tr key={bin.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{bin.location}</p>
                      <p className="text-xs text-gray-500">{bin.campus?.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {bin.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-3 max-w-[100px]">
                          <div 
                            className={`h-2.5 rounded-full ${
                              isFull ? 'bg-red-500' : isWarning ? 'bg-amber-500' : 'bg-emerald-500'
                            }`} 
                            style={{ width: `${bin.fillLevel}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${
                          isFull ? 'text-red-600' : isWarning ? 'text-amber-600' : 'text-emerald-600'
                        }`}>
                          {bin.fillLevel.toFixed(1)}%
                        </span>
                        {isFull && <AlertTriangle className="w-4 h-4 text-red-500 ml-2" />}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-md transition-colors">
                        Schedule Pickup
                      </button>
                    </td>
                  </tr>
                );
              })}
              
              {bins.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No Smart Bins registered in the system.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WasteAdmin;
