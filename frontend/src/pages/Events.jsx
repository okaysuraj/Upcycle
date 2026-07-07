import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Plus, CalendarCheck2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Events = () => {
  const { authFetch, user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await authFetch('/api/events');
        if (res.ok) setEvents(await res.json());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [authFetch]);

  if (loading) return <div className="p-8 text-gray-500">Loading Events...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sustainability Events</h2>
          <p className="text-gray-500 text-sm mt-1">Discover workshops, volunteering, and community events.</p>
        </div>
        {(user?.role === 'EVENT_ORGANIZER' || user?.role === 'PLATFORM_ADMIN') && (
          <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm">
            <Plus className="w-5 h-5 mr-2" />
            Create Event
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((evt) => (
          <div key={evt.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="p-6 flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg text-sm font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(evt.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm font-medium">
                  <Users className="w-4 h-4 mr-1.5" />
                  {evt._count?.registrations || 0} / {evt.maxVolunteers || '∞'}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {evt.title}
              </h3>
              
              <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                {evt.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mt-auto">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{evt.location}</span>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                View Details
              </button>
              <button className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                <CalendarCheck2 className="w-4 h-4 mr-2" />
                RSVP Now
              </button>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <div className="col-span-full py-16 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No Upcoming Events</h3>
            <p className="text-gray-500 mt-1">There are no events scheduled at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
