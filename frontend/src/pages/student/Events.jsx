import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function Events() {
  const { authFetch } = useAuth();
  const navigate = useNavigate();
  const [eventsData, setEventsData] = useState({ events: [], stats: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await authFetch('/events');
        if (res.ok) {
          const data = await res.json();
          setEventsData(data);
        }
      } catch (err) {
        console.error("Error fetching events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [authFetch]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Community Events</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Discover and join sustainability initiatives across campus.</p>
        </div>
      </div>

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-primary-container text-on-primary-container p-6 rounded-3xl shadow-sm">
            <p className="text-sm uppercase tracking-wider font-bold opacity-80 mb-1">Total Volunteers</p>
            <p className="text-4xl font-black">{eventsData.stats?.totalVolunteers || 0}</p>
          </div>
          <div className="bg-secondary-container text-on-secondary-container p-6 rounded-3xl shadow-sm">
            <p className="text-sm uppercase tracking-wider font-bold opacity-80 mb-1">Hours Logged</p>
            <p className="text-4xl font-black">{eventsData.stats?.hoursLogged || 0}</p>
          </div>
          <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-3xl shadow-sm">
            <p className="text-sm uppercase tracking-wider font-bold opacity-80 mb-1">Upcoming Events</p>
            <p className="text-4xl font-black">{eventsData.stats?.upcomingEvents || eventsData.events.length}</p>
          </div>
        </div>
      )}

      {loading ? (
        <p>Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.events.map(event => (
            <div key={event.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-48 bg-surface-container-high relative overflow-hidden flex items-center justify-center">
                 {/* Placeholder for event image */}
                 <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 group-hover:scale-110 transition-transform">event</span>
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full">
                   {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-title-lg text-on-surface mb-2 line-clamp-1">{event.title}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">{event.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-on-surface-variant mb-6">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> {event.location || 'TBA'}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">group</span> {event._count?.registrations || 0}/{event.maxAttendees || '∞'}</span>
                </div>
                
                <Button className="w-full" onClick={() => navigate(`/student/events/${event.id}`, { state: { event } })}>
                  View Details & RSVP
                </Button>
              </div>
            </div>
          ))}
          {eventsData.events.length === 0 && (
             <div className="col-span-full py-12 text-center text-on-surface-variant">
               No upcoming events. Check back later!
             </div>
          )}
        </div>
      )}
    </div>
  );
}
