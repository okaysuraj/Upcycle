import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function EventsHub() {
  const { authFetch } = useAuth();
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Zero Waste Campus Summit',
      date: 'Oct 24, 2024 • 10:00 AM',
      location: 'Grand Hall Auditorium',
      category: 'Seminars',
      rsvps: 142,
      tag: 'Keynote'
    },
    {
      id: '2',
      title: 'Solar Microgrid Hands-on Workshop',
      date: 'Nov 02, 2024 • 2:00 PM',
      location: 'Engineering Lab B',
      category: 'Workshops',
      rsvps: 48,
      tag: 'Hands-on'
    },
    {
      id: '3',
      title: 'Fall Campus Creek Cleanup',
      date: 'Nov 10, 2024 • 9:00 AM',
      location: 'North Ecological Preserve',
      category: 'Volunteering',
      rsvps: 86,
      tag: 'Outdoor'
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await authFetch('/events');
        if (res.ok) {
          const data = await res.json();
          if (data && data.events && data.events.length > 0) {
            setEvents(data.events);
          }
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, [authFetch]);

  const handleRSVP = (id) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, rsvps: e.rsvps + 1, userRsvp: true } : e));
    alert('RSVP confirmed! Added to your schedule.');
  };

  const filteredEvents = events.filter(e => selectedCategory === 'All' || e.category === selectedCategory);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Hero Featured Summit */}
      <section className="relative overflow-hidden rounded-[32px] min-h-[380px] shadow-lg group bg-[#00522d]">
        <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwu-VGsQqa8p2P2rPo32zOHtHlbGTB2wV8HS3qL2BTHOwyST80KrKN3B6mjMsEYC02oDcJ1KDA105YdnXLaq1qvov_ZzXryFTNXEDYexUK8-1kz05Mn-lCiP4nQPJJBHOYXy6K0mH-uvIkCirLx8trNnFtX2zLwtRu-___MZzyclFA_U8hdkMPP-6_OGBXbY19-wuD-eW0WjuBC2ly5AIVJ9sfaRS-AYGa2clWEZ5Ia1fxZY8t-bi2ZxM-SVG9q_oEarssNGsOyMg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00522d]/95 via-[#00522d]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-white max-w-2xl space-y-4">
          <span className="bg-[#9cf6ba] text-[#00210f] px-3.5 py-1 rounded-full text-xs font-bold w-fit tracking-wider uppercase">
            FEATURED CLIMATE SUMMIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Sustainable Urban Waste 2024
          </h2>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Join municipal leaders, circular startup founders, and student researchers for a 3-day deep dive into urban waste reduction.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button 
              type="button"
              onClick={() => alert('Registered for Sustainable Urban Waste 2024!')}
              className="bg-white text-[#00522d] hover:bg-[#e7f6ff] px-6 py-3 rounded-full text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">confirmation_number</span>
              <span>Register Attendance</span>
            </button>
            <Link
              to="/events/1"
              className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-full text-xs font-bold transition-all"
            >
              View Full Agenda
            </Link>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-[#0d1e25]">Browse Campus Events</h3>
          <span className="text-xs font-bold text-[#556158]">{filteredEvents.length} Events Found</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {['All', 'Seminars', 'Workshops', 'Volunteering', 'Certifications'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#00522d] text-white shadow-sm' 
                  : 'bg-white border border-[#bec9be]/40 text-[#556158] hover:bg-[#f4faff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => (
          <div key={evt.id} className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-2.5">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-2.5 py-1 rounded-full">
                  {evt.category}
                </span>
                <span className="text-[11px] font-bold text-[#556158]">{evt.rsvps} Attending</span>
              </div>
              <h4 className="text-lg font-bold text-[#0d1e25] leading-snug">{evt.title}</h4>
              <div className="space-y-1 text-xs text-[#556158]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-[#00522d]">schedule</span>
                  <span>{evt.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-[#00522d]">location_on</span>
                  <span>{evt.location}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-3 border-t border-[#bec9be]/20">
              <button
                type="button"
                onClick={() => handleRSVP(evt.id)}
                className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                  evt.userRsvp 
                    ? 'bg-[#9cf6ba]/50 text-[#00210f]' 
                    : 'bg-[#00522d] text-white hover:bg-[#003d21]'
                }`}
              >
                {evt.userRsvp ? 'RSVP Confirmed' : 'RSVP Now'}
              </button>
              <Link
                to={`/events/${evt.id}`}
                className="px-4 py-2.5 rounded-full border border-[#bec9be]/40 text-xs font-bold text-[#0d1e25] hover:bg-[#f4faff]"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
