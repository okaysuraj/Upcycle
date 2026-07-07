import React, { useState, useEffect } from 'react';
import { ShoppingBag, Plus, Search, Tag, DollarSign, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Inventory = () => {
  const { authFetch, user } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await authFetch('/api/marketplace');
        if (res.ok) setListings(await res.json());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, [authFetch]);

  if (loading) return <div className="p-8 text-gray-500">Loading Marketplace...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search green products & services..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          />
        </div>
        {(user?.role === 'VENDOR' || user?.role === 'PLATFORM_ADMIN') && (
          <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm">
            <Plus className="w-5 h-5 mr-2" />
            Add Listing
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="h-48 bg-gray-100 relative">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 uppercase tracking-wide">
                {item.category}
              </div>
              {item.isService && (
                <div className="absolute top-4 right-4 bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                  Service
                </div>
              )}
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center text-lg font-bold text-gray-900">
                  <DollarSign className="w-5 h-5 text-emerald-600 mr-0.5" />
                  {item.price.toFixed(2)}
                </div>
                
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {listings.length === 0 && (
          <div className="col-span-full py-16 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Marketplace is empty</h3>
            <p className="text-gray-500 mt-1">Check back soon for new green products and services.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
