import React, { useState, useEffect } from 'react';
import { Building2, Search, Plus, MapPin, Activity, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Campuses = () => {
  const { authFetch } = useAuth();
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const res = await authFetch('/api/campuses');
        if (res.ok) {
          const data = await res.json();
          setCampuses(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCampuses();
  }, [authFetch]);

  if (loading) return <div className="p-8 text-gray-500">Loading Campuses...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search campuses..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm">
          <Plus className="w-5 h-5 mr-2" />
          Onboard Campus
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campuses.map((campus) => (
          <div key={campus.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-32 bg-gradient-to-r from-emerald-500 to-teal-500 relative">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white flex items-center shadow-sm">
                <Activity className="w-4 h-4 mr-1.5" />
                <span className="font-semibold">{campus.sustainabilityScore}/100</span>
              </div>
            </div>
            
            <div className="p-6 relative">
              <div className="absolute -top-10 left-6 w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-3xl font-bold text-emerald-600">
                {campus.name.charAt(0)}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  {campus.name}
                  {campus.sustainabilityScore > 80 && (
                    <ShieldCheck className="w-5 h-5 text-blue-500 ml-2" />
                  )}
                </h3>
                
                {campus.location && (
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" /> {campus.location}
                  </p>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center divide-x divide-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{campus._count?.users || 0}</p>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{campus._count?.bins || 0}</p>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Smart Bins</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{campus._count?.events || 0}</p>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">Events</p>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-2.5 bg-gray-50 hover:bg-emerald-50 text-emerald-700 font-medium rounded-lg transition-colors border border-gray-100 hover:border-emerald-200">
                  Manage Analytics
                </button>
              </div>
            </div>
          </div>
        ))}

        {campuses.length === 0 && (
          <div className="col-span-full py-12 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No campuses yet</h3>
            <p className="text-gray-500 mt-1">Get started by onboarding your first campus to the platform.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Campuses;
