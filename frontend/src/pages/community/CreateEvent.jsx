import React, { useState } from 'react';
import Card from '../../components/ui/Card';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    maxAttendees: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ title: '', date: '', time: '', location: '', description: '', maxAttendees: '' });
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#2d382d] tracking-tight">Create Community Event</h1>
          <p className="text-[#6d766b] mt-1 text-lg">Organize cleanups, workshops, and sustainability drives.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-6">
            <Card className="overflow-hidden">
               <div className="p-8 border-b border-[#dce0d9]/50 bg-gradient-to-r from-green-50/50 to-transparent">
                  <h2 className="text-xl font-bold text-[#2d382d] mb-1">Event Details</h2>
                  <p className="text-sm text-[#6d766b]">Provide clear information to attract volunteers.</p>
               </div>
               
               <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  {success && (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3 mb-6">
                       <span className="material-symbols-outlined text-green-600">check_circle</span>
                       <div>
                         <p className="font-bold">Event Published!</p>
                         <p className="text-sm">Your event is now live in the community hub.</p>
                       </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-[#2d382d] mb-2">Event Title</label>
                    <input 
                      type="text" 
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full border-2 border-[#dce0d9] rounded-xl p-3.5 bg-[#f6f7f2] focus:bg-white focus:border-[#4f7942] outline-none transition-colors" 
                      placeholder="e.g., Spring Campus Cleanup" 
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#2d382d] mb-2">Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border-2 border-[#dce0d9] rounded-xl p-3.5 bg-[#f6f7f2] focus:bg-white focus:border-[#4f7942] outline-none transition-colors" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2d382d] mb-2">Time</label>
                      <input 
                        type="time" 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border-2 border-[#dce0d9] rounded-xl p-3.5 bg-[#f6f7f2] focus:bg-white focus:border-[#4f7942] outline-none transition-colors" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#2d382d] mb-2">Location</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-gray-400">location_on</span>
                      <input 
                        type="text" 
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border-2 border-[#dce0d9] rounded-xl p-3.5 pl-11 bg-[#f6f7f2] focus:bg-white focus:border-[#4f7942] outline-none transition-colors" 
                        placeholder="e.g., Main Quad, Building A" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2d382d] mb-2">Description</label>
                    <textarea 
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border-2 border-[#dce0d9] rounded-xl p-3.5 bg-[#f6f7f2] focus:bg-white focus:border-[#4f7942] outline-none transition-colors" 
                      placeholder="Describe what volunteers will be doing..." 
                      required
                    ></textarea>
                  </div>
                  
                  <hr className="border-[#dce0d9]/50" />
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#2d382d] mb-2">Maximum Attendees (Optional)</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-gray-400">groups</span>
                      <input 
                        type="number" 
                        name="maxAttendees"
                        value={formData.maxAttendees}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border-2 border-[#dce0d9] rounded-xl p-3.5 pl-11 bg-[#f6f7f2] focus:bg-white focus:border-[#4f7942] outline-none transition-colors" 
                        placeholder="Leave empty for unlimited" 
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-3">
                    <button type="button" className="px-6 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="bg-[#4f7942] hover:bg-[#3d5d33] text-white py-3 px-8 rounded-xl font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      {loading ? (
                        <>
                           <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                           Publishing...
                        </>
                      ) : (
                        <>
                           Publish Event
                           <span className="material-symbols-outlined text-sm">send</span>
                        </>
                      )}
                    </button>
                  </div>
               </form>
            </Card>
         </div>

         <div className="space-y-6">
            <Card>
              <div className="p-6 border-b border-[#dce0d9]/50">
                 <h3 className="font-bold text-[#2d382d] text-lg">Event Cover Image</h3>
              </div>
              <div className="p-6 flex flex-col items-center justify-center">
                 <div className="w-full h-40 bg-[#f6f7f2] border-2 border-dashed border-[#dce0d9] rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#eaf0e9] transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#4f7942]">add_photo_alternate</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">Click to upload</span>
                 </div>
                 <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                   Recommended size: 1200x630px. Max file size: 5MB.
                 </p>
              </div>
            </Card>

            <Card className="bg-[#4f7942] text-white shadow-lg overflow-hidden relative">
               <div className="absolute -right-10 -bottom-10 opacity-10">
                 <span className="material-symbols-outlined" style={{ fontSize: '150px' }}>psychology</span>
               </div>
               <div className="p-6 relative z-10">
                 <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                   <span className="material-symbols-outlined text-[#a5d6a7]">tips_and_updates</span>
                   Pro Tips
                 </h3>
                 <ul className="text-sm space-y-3 mt-4 text-green-50">
                   <li className="flex gap-2">
                     <span className="text-[#a5d6a7]">•</span>
                     Be specific about the location to help volunteers find you easily.
                   </li>
                   <li className="flex gap-2">
                     <span className="text-[#a5d6a7]">•</span>
                     Adding a cover image increases RSVP rates by up to 40%.
                   </li>
                   <li className="flex gap-2">
                     <span className="text-[#a5d6a7]">•</span>
                     Share the event in group chats after publishing!
                   </li>
                 </ul>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
