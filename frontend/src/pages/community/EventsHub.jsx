import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function EventsHub() {
  const { authFetch } = useAuth();
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await authFetch('/events');
        if (res.ok) {
          const data = await res.json();
          setEvents(data.events || []);
          setStats(data.stats || null);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [authFetch]);

  const handleRSVP = async (eventId) => {
    try {
      const res = await authFetch(`/events/${eventId}/rsvp`, {
        method: 'POST'
      });
      if (res.ok) {
        alert("Successfully registered for event!");
      } else {
        const error = await res.json();
        alert(`Failed: ${error.message}`);
      }
    } catch (err) {
      console.error("Error RSVPing:", err);
    }
  };

  return (
    <div className="flex flex-col gap-md pb-12">
      {/* Hero Featured Summit */}
      <section className="mb-10 relative overflow-hidden rounded-[32px] h-[420px] shadow-lg group">
        <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwu-VGsQqa8p2P2rPo32zOHtHlbGTB2wV8HS3qL2BTHOwyST80KrKN3B6mjMsEYC02oDcJ1KDA105YdnXLaq1qvov_ZzXryFTNXEDYexUK8-1kz05Mn-lCiP4nQPJJBHOYXy6K0mH-uvIkCirLx8trNnFtX2zLwtRu-___MZzyclFA_U8hdkMPP-6_OGBXbY19-wuD-eW0WjuBC2ly5AIVJ9sfaRS-AYGa2clWEZ5Ia1fxZY8t-bi2ZxM-SVG9q_oEarssNGsOyMg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-on-primary">
          <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-md w-fit mb-4 font-bold">FEATURED SUMMIT</span>
          <h2 className="font-display text-display-md md:text-display-lg max-w-2xl mb-4 font-bold text-white">Sustainable Urban Waste 2024</h2>
          <p className="font-body-lg max-w-xl mb-8 opacity-90 text-white">Join global leaders and campus innovators for a 3-day deep dive into circular economy practices and urban waste reduction strategies.</p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-white text-primary hover:bg-surface-variant transition-colors px-8 py-3 rounded-full font-label-md flex items-center gap-2 font-bold shadow-md">
              <span className="material-symbols-outlined">confirmation_number</span>
              Register Now
            </button>
            <button className="border-2 border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3 rounded-full font-label-md font-bold">
              View Agenda
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Category Browser */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-headline-md font-bold text-on-surface">Browse by Category</h3>
            <button className="text-primary font-label-md hover:underline font-bold">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            <div className="bg-white border border-outline-variant/30 flex-shrink-0 w-44 p-6 rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:bg-primary/5 transition-colors group shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">school</span>
              </div>
              <span className="font-label-md text-on-surface font-bold">Seminars</span>
            </div>
            <div className="bg-white border border-outline-variant/30 flex-shrink-0 w-44 p-6 rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:bg-primary/5 transition-colors group shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">construction</span>
              </div>
              <span className="font-label-md text-on-surface font-bold">Workshops</span>
            </div>
            <div className="bg-white border border-outline-variant/30 flex-shrink-0 w-44 p-6 rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:bg-primary/5 transition-colors group shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">verified</span>
              </div>
              <span className="font-label-md text-on-surface font-bold">Certifications</span>
            </div>
            <div className="bg-white border border-outline-variant/30 flex-shrink-0 w-44 p-6 rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:bg-primary/5 transition-colors group shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">volunteer_activism</span>
              </div>
              <span className="font-label-md text-on-surface font-bold">Volunteering</span>
            </div>
          </div>
        </div>

        {/* Host CTA */}
        <div className="lg:col-span-4">
          <div className="bg-primary h-full rounded-[32px] p-8 flex flex-col justify-between text-on-primary relative overflow-hidden shadow-lg min-h-[250px]">
            <div className="relative z-10">
              <h3 className="font-display text-headline-md mb-2 font-bold text-white">Host Your Own Event</h3>
              <p className="font-body-md opacity-80 mb-6 text-white">Empower the campus community with your sustainability initiative. We provide the tools.</p>
            </div>
            <button className="relative z-10 w-full bg-white text-primary rounded-full py-4 font-label-md flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors font-bold shadow-md">
              <span className="material-symbols-outlined">add</span>
              Create Event
            </button>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Events Filter Bar */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h3 className="font-display text-headline-md font-bold text-on-surface">Upcoming Sustainability Events</h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 border border-outline-variant/30 text-label-md cursor-pointer hover:bg-surface-variant/20 shadow-sm font-bold text-on-surface-variant">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              Date: All Time
            </div>
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 border border-outline-variant/30 text-label-md cursor-pointer hover:bg-surface-variant/20 shadow-sm font-bold text-on-surface-variant">
              <span className="material-symbols-outlined text-base">filter_list</span>
              Type: All
            </div>
          </div>
        </div>

        {/* Event Grid */}
        {loading ? (
          <div className="text-center py-10 text-on-surface-variant">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center py-10 text-on-surface-variant">No upcoming events found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={event.id || index} className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                <div className="h-48 bg-surface-container relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[64px] text-outline opacity-20">event</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-bold text-on-surface uppercase tracking-wider">{event.campus?.name || 'Local'}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <div className="bg-primary/10 rounded-xl p-3 flex flex-col items-center justify-center min-w-[60px] text-primary shadow-sm border border-primary/20">
                      <span className="text-sm font-bold uppercase">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                      <span className="font-display text-2xl font-bold">{new Date(event.date).getDate()}</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm font-bold text-on-surface leading-tight mb-1">{event.title}</h4>
                      <p className="font-body-md text-on-surface-variant">{event.location}</p>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6 flex-1 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 text-sm text-on-surface-variant font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">group</span>
                        <span>{event._count?.registrations || 0} / {event.maxAttendees || 'Unlimited'} Attending</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[8px] font-bold">AJ</div>
                        <div className="w-6 h-6 rounded-full bg-tertiary/20 border-2 border-white flex items-center justify-center text-[8px] font-bold">MR</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRSVP(event.id)}
                      className="w-full bg-surface-container-high hover:bg-primary hover:text-white text-on-surface transition-colors py-3 rounded-full font-bold font-label-md"
                    >
                      RSVP Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
