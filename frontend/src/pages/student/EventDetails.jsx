import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

export default function EventDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { authFetch } = useAuth();
  
  const [event, setEvent] = useState(state?.event || null);
  const [registrations, setRegistrations] = useState([]);
  const [rsvpStatus, setRsvpStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    // If we didn't get the event via routing state, we would fetch it here.
    // Since there's no GET /api/events/:id, we rely on state for now, 
    // but we CAN fetch the registrations.
    const fetchRegistrations = async () => {
      try {
        const res = await authFetch(`/events/${id}/registrations`);
        if (res.ok) {
          setRegistrations(await res.json());
        }
      } catch (err) {
        console.error("Failed to fetch registrations", err);
      }
    };
    if (id) fetchRegistrations();
  }, [id, authFetch]);

  const handleRsvp = async () => {
    setRsvpStatus('loading');
    try {
      const res = await authFetch(`/events/${id}/rsvp`, { method: 'POST' });
      if (res.ok) {
        setRsvpStatus('success');
      } else {
        setRsvpStatus('error');
      }
    } catch (err) {
      setRsvpStatus('error');
    }
  };

  if (!event) return <div className="p-8">Event not found.</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Events
      </button>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm">
        <div className="h-64 bg-primary-container relative">
           <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <span className="material-symbols-outlined text-[120px] text-primary">volunteer_activism</span>
           </div>
        </div>
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
            <div>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Sustainability Event</span>
              <h1 className="text-display-sm font-bold text-on-surface mb-2">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {new Date(event.date).toLocaleDateString()}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> {event.location || 'TBA'}</span>
              </div>
            </div>
            
            {rsvpStatus === 'success' ? (
              <div className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span> You're going!
              </div>
            ) : (
              <Button onClick={handleRsvp} disabled={rsvpStatus === 'loading'} className="px-8 py-3 text-lg">
                {rsvpStatus === 'loading' ? 'Processing...' : 'RSVP Now'}
              </Button>
            )}
          </div>

          <div className="prose prose-on-surface max-w-none">
            <h3 className="text-title-lg font-bold mb-2">About this Event</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 whitespace-pre-wrap">{event.description}</p>
          </div>
          
          <div className="border-t border-outline-variant/30 pt-8 mt-8">
            <h3 className="text-title-lg font-bold mb-4">Attendees ({registrations.length})</h3>
            <div className="flex flex-wrap gap-2">
              {registrations.map(reg => (
                <div key={reg.id} className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center font-bold text-xs shadow-sm" title={reg.user?.name}>
                  {reg.user?.name?.charAt(0) || 'U'}
                </div>
              ))}
              {registrations.length === 0 && <span className="text-sm text-on-surface-variant">Be the first to register!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
