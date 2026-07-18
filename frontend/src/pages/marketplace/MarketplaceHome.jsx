import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function MarketplaceHome() {
  const { authFetch } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await authFetch('/marketplace');
        if (res.ok) {
          const data = await res.json();
          setListings(data);
        }
      } catch (err) {
        console.error("Error fetching marketplace listings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, [authFetch]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative mb-xl rounded-[32px] overflow-hidden bg-primary-container min-h-[400px] flex items-center shadow-md">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
        </div>
        <div className="relative z-10 p-xl max-w-2xl">
          <h2 className="font-display text-[48px] font-bold text-white mb-md leading-tight">Empower Your Campus Sustainability Goals</h2>
          <p className="font-body-lg text-white/90 mb-lg">Connect with verified eco-providers, manage campus energy solutions, and track your environmental footprint in one centralized marketplace.</p>
          <div className="flex gap-4">
            <button className="bg-primary text-white font-label-md px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-bold">Explore Providers</button>
            <button className="bg-white/10 backdrop-blur-md text-white font-label-md px-8 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-all font-bold">View Impact Report</button>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="mb-xl">
        <div className="flex justify-between items-end mb-md">
          <div>
            <h3 className="font-headline-lg text-[32px] font-bold text-primary">Service Categories</h3>
            <p className="font-body-md text-on-surface-variant">Browse solutions by infrastructure type</p>
          </div>
          <button className="text-primary font-label-md flex items-center gap-1 hover:underline transition-all font-bold">
            View All Categories <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-12 gap-gutter">
          {/* Solar */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer">
            <div className="h-64 rounded-3xl overflow-hidden relative shadow-sm border border-outline-variant/30 hover:shadow-md transition-all bg-surface-container-highest">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 text-white z-20">
                <span className="material-symbols-outlined text-[#80d99f] mb-2">wb_sunny</span>
                <h4 className="font-headline-md text-2xl font-bold">Solar Solutions</h4>
                <p className="font-label-sm opacity-80 mt-1">12 Verified Providers</p>
              </div>
            </div>
          </div>
          
          {/* Waste */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8 group cursor-pointer">
            <div className="h-64 rounded-3xl overflow-hidden relative shadow-sm border border-outline-variant/30 hover:shadow-md transition-all bg-surface-container-highest">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 text-white z-20">
                <span className="material-symbols-outlined text-[#80d99f] mb-2">delete_sweep</span>
                <h4 className="font-headline-md text-2xl font-bold">Smart Waste Management</h4>
                <p className="font-label-sm opacity-80 mt-1">8 Tech Solutions available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="mb-xl">
        <div className="flex justify-between items-end mb-md">
          <div>
            <h3 className="font-headline-lg text-[32px] font-bold text-primary">Live Marketplace Listings</h3>
            <p className="font-body-md text-on-surface-variant">Real-time offerings from vendors</p>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center text-on-surface-variant py-8">Loading listings...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {listings.map(listing => (
              <Card key={listing.id} className="p-md flex flex-col gap-md hover:shadow-lg transition-shadow group">
                <div className="h-48 rounded-2xl overflow-hidden bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-outline-variant">{listing.isService ? 'handyman' : 'inventory_2'}</span>
                </div>
                <div className="mt-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-headline-md text-xl font-bold text-on-surface">{listing.title}</h5>
                    <span className="bg-success-container/20 text-primary px-3 py-1 rounded-full font-label-sm font-bold">
                      ${listing.price}
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-4 flex-grow">{listing.description}</p>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-surface-container px-2 py-1 rounded-md text-on-surface-variant">{listing.category}</span>
                    <span className="text-xs bg-surface-container px-2 py-1 rounded-md text-on-surface-variant">by {listing.vendor?.name}</span>
                  </div>
                  
                  <Button className="w-full" variant="outline">Purchase / Quote</Button>
                </div>
              </Card>
            ))}
            {listings.length === 0 && (
              <div className="col-span-3 text-center py-8 text-on-surface-variant italic">No listings available right now.</div>
            )}
          </div>
        )}
      </section>
    </>
  );
}
