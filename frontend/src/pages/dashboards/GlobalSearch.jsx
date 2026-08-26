import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export default function GlobalSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || 'Recycling programs';
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('All Results');

  const categories = [
    { name: 'All Results', icon: 'all_inclusive' },
    { name: 'Campuses', icon: 'school' },
    { name: 'Events', icon: 'calendar_today' },
    { name: 'Community Posts', icon: 'chat_bubble' },
    { name: 'Marketplace', icon: 'storefront' },
  ];

  const allItems = [
    {
      id: 'item-1',
      type: 'Campuses',
      badge: 'Campus Focus',
      title: 'Green Valley Smart Campus',
      location: 'Zurich Municipal Hub',
      desc: 'An integrated waste-to-energy initiative that supports local municipal data tracking and zero-waste goals for institutional partners.',
      tags: ['Sustainability', 'Urban Farming'],
      meta: '42 Participants',
      actionText: 'Join Initiative',
      actionLink: '/operations/buildings',
      icon: 'nature_people',
      bgTone: 'bg-[#e7f6ff]/60',
      badgeColor: 'bg-[#00522d]',
    },
    {
      id: 'item-2',
      type: 'Marketplace',
      badge: 'Logistics & Supply',
      title: 'Nordic Circular Material Hub',
      location: 'Industrial Zone B',
      desc: 'High-capacity recycling network specialized in sorted polymers, post-consumer electronics, and composite recovery.',
      tags: ['Polymer Recycler', 'ISO 14001'],
      meta: '98% Match Score',
      actionText: 'View Marketplace',
      actionLink: '/marketplace',
      icon: 'recycling',
      bgTone: 'bg-[#d9e6da]/40',
      badgeColor: 'bg-[#2eb872]',
    },
    {
      id: 'item-3',
      type: 'Events',
      badge: 'Community Event',
      title: 'Campus Electronic Scrap Roundup',
      location: 'Main Quadrangle',
      desc: 'Annual university e-waste drive accepting laptops, batteries, circuit boards, and laboratory equipment.',
      tags: ['E-Waste', 'Volunteer Hours'],
      meta: '120 Attending',
      actionText: 'Register RSVP',
      actionLink: '/student/events',
      icon: 'event',
      bgTone: 'bg-[#ffdad6]/40',
      badgeColor: 'bg-[#ba1a1a]',
    },
    {
      id: 'item-4',
      type: 'Community Posts',
      badge: 'Student Voice',
      title: 'Zero-Waste Dorm Guide 2024',
      location: 'Green Living Club',
      desc: 'Student-curated best practices for composting in shared apartments and minimizing single-use packaging.',
      tags: ['Guide', 'Zero Waste'],
      meta: '48 Upvotes',
      actionText: 'Read Post',
      actionLink: '/community',
      icon: 'chat_bubble',
      bgTone: 'bg-[#dff1fb]/60',
      badgeColor: 'bg-[#006d3e]',
    }
  ];

  const filteredItems = allItems.filter(item => {
    const matchesCategory = activeCategory === 'All Results' || item.type === activeCategory;
    const matchesQuery = !query.trim() || 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full max-w-[1240px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Global Search Hero Section */}
      <section className="space-y-4">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Universal Discovery Engine
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0d1e25] tracking-tight">Global Search</h2>
          <p className="text-sm sm:text-base text-[#556158] mt-1">Explore the municipal ecosystem, programs, and sustainable resources.</p>
        </div>
        
        {/* Expanded Search Input & Filters */}
        <div className="space-y-4 pt-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-[#00522d]">
              <span className="material-symbols-outlined text-3xl">manage_search</span>
            </div>
            <input 
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchParams({ q: e.target.value });
              }}
              placeholder="What are you looking for? (e.g. bio-waste, solar, compost)" 
              type="text" 
              className="w-full pl-16 pr-6 py-4 sm:py-5 bg-white border-2 border-[#bec9be]/40 rounded-[28px] text-lg sm:text-xl font-bold text-[#0d1e25] focus:border-[#00522d] focus:ring-4 focus:ring-[#00522d]/10 transition-all outline-none shadow-sm" 
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button 
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                    isActive 
                      ? 'bg-[#00522d] text-white shadow-md' 
                      : 'bg-white text-[#556158] border border-[#bec9be]/40 hover:bg-[#e7f6ff]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Search Results Column (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#0d1e25] tracking-tight">
              {activeCategory === 'All Results' ? 'Recommended for You' : `${activeCategory} Results`}
            </h3>
            <span className="text-xs text-[#556158] font-semibold">
              Showing {filteredItems.length} match{filteredItems.length === 1 ? '' : 'es'}
            </span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-[24px] border border-[#bec9be]/30 shadow-sm space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#556158]">search_off</span>
              <h4 className="text-base font-bold text-[#0d1e25]">No matches found</h4>
              <p className="text-xs text-[#556158]">Try adjusting your search keywords or switching category filters.</p>
              <button 
                onClick={() => { setQuery(''); setActiveCategory('All Results'); }}
                className="px-4 py-2 bg-[#00522d] text-white rounded-full text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-[24px] border border-[#bec9be]/30 overflow-hidden flex flex-col sm:flex-row transition-all hover:shadow-md cursor-pointer shadow-sm group"
              >
                <div className={`sm:w-2/5 p-6 ${item.bgTone} flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#bec9be]/30`}>
                  <span className={`${item.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start`}>
                    {item.badge}
                  </span>
                  <div className="my-4">
                    <span className="material-symbols-outlined text-4xl text-[#00522d]">{item.icon}</span>
                  </div>
                  <span className="text-xs text-[#556158] font-bold">{item.location}</span>
                </div>
                
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-[#0d1e25] group-hover:text-[#00522d] transition-colors">
                        {item.title}
                      </h4>
                      <span className="material-symbols-outlined text-[#556158] text-xl">bookmark_border</span>
                    </div>
                    <p className="text-xs text-[#556158] mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="bg-[#d9e6da] text-[#00522d] text-[11px] font-bold px-2.5 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#bec9be]/20 pt-4">
                    <span className="text-xs font-semibold text-[#556158]">{item.meta}</span>
                    <Link 
                      to={item.actionLink} 
                      className="px-4 py-2 bg-[#dff1fb] text-[#00522d] rounded-full text-xs font-bold hover:bg-[#9cf6ba] transition-colors"
                    >
                      {item.actionText}
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar Trending & Direct Filters (4 Cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 shadow-sm space-y-4">
            <h4 className="text-base font-bold text-[#0d1e25] tracking-tight">Trending Searches</h4>
            <div className="flex flex-wrap gap-2">
              {['Smart Bins', 'Battery Dropoff', 'Zurich Cleanups', 'Compost Hubs', 'Solar Grants'].map((tag) => (
                <button 
                  key={tag}
                  type="button"
                  onClick={() => {
                    setQuery(tag);
                    setSearchParams({ q: tag });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#f4faff] border border-[#bec9be]/40 text-xs font-semibold text-[#0d1e25] hover:bg-[#dff1fb] cursor-pointer transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#00522d] text-white rounded-[24px] p-6 shadow-sm space-y-3">
            <span className="material-symbols-outlined text-3xl text-[#9cf6ba]">eco_care</span>
            <h4 className="text-lg font-bold tracking-tight">Can't find what you need?</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Connect with our municipal eco-concierge or submit a direct pickup and recycling request.
            </p>
            <Link 
              to="/operations/pickup-request/new"
              className="inline-block mt-2 px-4 py-2 bg-white text-[#00522d] rounded-full text-xs font-bold hover:bg-[#9cf6ba] transition-colors"
            >
              Request Custom Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
