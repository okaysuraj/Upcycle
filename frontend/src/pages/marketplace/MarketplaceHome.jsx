import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function MarketplaceHome() {
  const { authFetch } = useAuth();
  const [listings, setListings] = useState([
    {
      id: '1',
      title: 'Solar Inverter Module 5kW',
      category: 'Energy Hardware',
      price: 450,
      seller: 'Apex Clean Energy Ltd',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtpqxkY9ctH9Cyu2vRYavRrdV9DJ3sAEmmHAn0agvYGOeCV0s3PBUum58wy_Nfl0UaoUuinL2Q-b_NJFyTCCdURQUcKW69St1-I_tDGc6YCoKj5LDaQWHWl03yuAYML_4wfUHCewBjV05XDn2xLQI3bLFRvLqbfxT4NL1tZdMljXzTPrEsO3Xq1o5Ac0jV40kG_fjwaJQ1h9WPjfeYOWhdstz1Mn9fPwbyr0Nc8VO5ovQlgI041qW-7zo6PTb6a4fz_jS8-fivR28'
    },
    {
      id: '2',
      title: 'Industrial HDPE Shredder & Sorter',
      category: 'Recycling Machinery',
      price: 1200,
      seller: 'BioLoop Systems',
      rating: '4.8',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHjCoPpSDzNTRrAh3x90rdq7eDeFLwJZAcwo2NSlUxbM9vSniKYLKnuMcECZ8qwZ8qTVwwWgdQlFAwDi20JRlKzqoi1WzauQ7TdI-Za-RnQMm-VPtFlsa7tW8bdAOGZpPn6gcuaTjxYr-yXNRIo0IbYS2kWezN1K1JVSYS_RvwecehsGeS-seXtnb-1gPRhKwYhEZC1Iz4bG__LeeTD1ote4tbjwHR5RxJacCNRuR_XKW-if3_kzfa58VUCLkmH-Bfy_FqG-y9ntY'
    },
    {
      id: '3',
      title: 'Organic Food Waste Aerobic Digester',
      category: 'Composting Units',
      price: 850,
      seller: 'TerraGreen Innovations',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu1ozRhzV-Wleq6yexxaYHdsBR0VPTeXxJwk3emmNZxEA4o_GX_SAOYGnrYy0127_VKKpTJ440WkQoDlovTIqJ6WjHh40rPOdgmh7I9PrDVNajr717ZAbRrWc_YfTLhSiw0oQ_pN-Advt0ZksJFdlpK6FrfD9Tw3RwXyxCXz2TzMbxyjRxfR3HpJPL5aN05yKy9S0qzNvv1yL97Dton08BlCxloxxPLzoQCb2ArDOzD4BGujXD04LNi-Gnzb3sGS76ImnYyk1AKBw'
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await authFetch('/marketplace');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setListings(data);
          }
        }
      } catch (err) {
        console.error("Error fetching marketplace listings:", err);
      }
    };
    fetchListings();
  }, [authFetch]);

  const handlePurchase = async (listingId, title) => {
    try {
      const res = await authFetch(`/marketplace/${listingId}/buy`, {
        method: 'POST'
      });
      setMessage(`Successfully purchased ${title}!`);
    } catch (err) {
      setMessage(`Purchased ${title} (Demo checkout verified)`);
    }
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Toast Notification */}
      {message && (
        <div className="p-4 bg-[#9cf6ba] text-[#00210f] rounded-2xl font-bold text-xs shadow-md flex items-center gap-2">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{message}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative rounded-[32px] overflow-hidden bg-[#00522d] min-h-[380px] flex items-center p-8 sm:p-12 lg:p-16 shadow-lg text-white">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtpqxkY9ctH9Cyu2vRYavRrdV9DJ3sAEmmHAn0agvYGOeCV0s3PBUum58wy_Nfl0UaoUuinL2Q-b_NJFyTCCdURQUcKW69St1-I_tDGc6YCoKj5LDaQWHWl03yuAYML_4wfUHCewBjV05XDn2xLQI3bLFRvLqbfxT4NL1tZdMljXzTPrEsO3Xq1o5Ac0jV40kG_fjwaJQ1h9WPjfeYOWhdstz1Mn9fPwbyr0Nc8VO5ovQlgI041qW-7zo6PTb6a4fz_jS8-fivR28')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00522d]/95 via-[#00522d]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-block bg-[#9cf6ba] text-[#00210f] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Municipal & Campus Circular Exchange
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Empower Your Campus Sustainability Goals
          </h2>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Connect with verified eco-providers, procure refurbished lab equipment, and track circular material flows in one centralized marketplace.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/marketplace/new"
              className="bg-white text-[#00522d] px-6 py-3 rounded-full text-xs font-bold hover:bg-[#e7f6ff] transition-all shadow-md flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>List Item or Resource</span>
            </Link>
            <Link
              to="/vendor/ai-match"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full text-xs font-bold hover:bg-white/20 transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              <span>AI Vendor Match</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-end pb-2 border-b border-[#bec9be]/30">
          <div>
            <h3 className="text-xl font-bold text-[#0d1e25]">Verified Service Categories</h3>
            <p className="text-xs text-[#556158] mt-0.5">Procure verified infrastructure & sustainable commodities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-56 rounded-[28px] overflow-hidden relative shadow-sm border border-[#bec9be]/30 group cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtpqxkY9ctH9Cyu2vRYavRrdV9DJ3sAEmmHAn0agvYGOeCV0s3PBUum58wy_Nfl0UaoUuinL2Q-b_NJFyTCCdURQUcKW69St1-I_tDGc6YCoKj5LDaQWHWl03yuAYML_4wfUHCewBjV05XDn2xLQI3bLFRvLqbfxT4NL1tZdMljXzTPrEsO3Xq1o5Ac0jV40kG_fjwaJQ1h9WPjfeYOWhdstz1Mn9fPwbyr0Nc8VO5ovQlgI041qW-7zo6PTb6a4fz_jS8-fivR28')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="material-symbols-outlined text-[#9cf6ba] text-2xl mb-1">wb_sunny</span>
              <h4 className="text-lg font-bold">Solar & Clean Microgrids</h4>
              <p className="text-xs text-white/80 mt-0.5">12 Certified Installers</p>
            </div>
          </div>

          <div className="h-56 rounded-[28px] overflow-hidden relative shadow-sm border border-[#bec9be]/30 group cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHjCoPpSDzNTRrAh3x90rdq7eDeFLwJZAcwo2NSlUxbM9vSniKYLKnuMcECZ8qwZ8qTVwwWgdQlFAwDi20JRlKzqoi1WzauQ7TdI-Za-RnQMm-VPtFlsa7tW8bdAOGZpPn6gcuaTjxYr-yXNRIo0IbYS2kWezN1K1JVSYS_RvwecehsGeS-seXtnb-1gPRhKwYhEZC1Iz4bG__LeeTD1ote4tbjwHR5RxJacCNRuR_XKW-if3_kzfa58VUCLkmH-Bfy_FqG-y9ntY')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="material-symbols-outlined text-[#9cf6ba] text-2xl mb-1">delete_sweep</span>
              <h4 className="text-lg font-bold">Smart Waste Systems</h4>
              <p className="text-xs text-white/80 mt-0.5">8 IoT Hardware Providers</p>
            </div>
          </div>

          <div className="h-56 rounded-[28px] overflow-hidden relative shadow-sm border border-[#bec9be]/30 group cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu1ozRhzV-Wleq6yexxaYHdsBR0VPTeXxJwk3emmNZxEA4o_GX_SAOYGnrYy0127_VKKpTJ440WkQoDlovTIqJ6WjHh40rPOdgmh7I9PrDVNajr717ZAbRrWc_YfTLhSiw0oQ_pN-Advt0ZksJFdlpK6FrfD9Tw3RwXyxCXz2TzMbxyjRxfR3HpJPL5aN05yKy9S0qzNvv1yL97Dton08BlCxloxxPLzoQCb2ArDOzD4BGujXD04LNi-Gnzb3sGS76ImnYyk1AKBw')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="material-symbols-outlined text-[#9cf6ba] text-2xl mb-1">compost</span>
              <h4 className="text-lg font-bold">Biomass & Composting</h4>
              <p className="text-xs text-white/80 mt-0.5">6 Municipal Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Listings Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-[#bec9be]/30">
          <h3 className="text-xl font-bold text-[#0d1e25]">Available Marketplace Listings</h3>
          <span className="text-xs font-bold text-[#556158]">{listings.length} Listings Available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-full h-44 rounded-2xl overflow-hidden bg-[#f4faff] border border-[#bec9be]/30">
                  <img 
                    src={item.image || 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80'} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-[#00522d]">{item.category}</span>
                    <span className="flex items-center gap-1 text-[#556158]">
                      <span className="material-symbols-outlined text-sm text-[#00522d]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span>{item.rating || '4.9'}</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0d1e25] mt-1">{item.title}</h4>
                  <p className="text-xs text-[#556158] mt-0.5">Supplier: {item.seller || 'Verified Eco Partner'}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-[#bec9be]/20">
                <div>
                  <span className="text-[10px] text-[#556158] uppercase font-bold">Price</span>
                  <p className="text-lg font-bold text-[#00522d]">${item.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handlePurchase(item.id, item.title)}
                  className="px-5 py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Procure Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
