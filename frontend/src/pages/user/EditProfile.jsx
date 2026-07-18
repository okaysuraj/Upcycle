import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';
import { authFetch } from '../../utils/authFetch';

export default function EditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.name || 'Alex Riverdale',
    email: user?.email || 'alex.r@citygov.org',
    phone: '+1 (555) 024-9981',
    position: 'Lead Coordinator',
    pickupAddress: '742 Evergreen Terrace, Sector 4, Metro City',
    buildingType: 'Commercial Office',
    accessStart: '08:00',
    accessEnd: '18:00',
    sustainabilityTrack: 'Zero Waste Champion'
  });

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await authFetch(`${import.meta.env.VITE_API_URL}/api/users/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          // email can't easily change in Firebase without re-auth, so we might just sync it if possible
          roleMetadata: {
            phone: formData.phone,
            position: formData.position,
            pickupAddress: formData.pickupAddress,
            buildingType: formData.buildingType,
            accessHours: `${formData.accessStart} to ${formData.accessEnd}`,
            sustainabilityTrack: formData.sustainabilityTrack
          }
        })
      });
      // Mock save effect
      setTimeout(() => {
        setIsSaving(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto p-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-on-surface-variant">
        <a className="text-sm font-bold hover:text-primary transition-colors" href="#">Dashboard</a>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <a className="text-sm font-bold hover:text-primary transition-colors" href="#">Profile</a>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-sm font-bold text-primary">Edit Profile</span>
      </nav>

      <header className="mb-10">
        <h2 className="font-display text-3xl font-bold text-on-background mb-2">Personal Preferences</h2>
        <p className="text-lg text-secondary">Manage your eco-coordinator identity and pickup logistics.</p>
      </header>

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Column: Identity & Bio */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
          <Card className="flex flex-col items-center text-center shadow-sm">
            <div className="relative mb-6 group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#9cf6ba] shadow-lg bg-gray-200 flex items-center justify-center">
                 <span className="material-symbols-outlined text-4xl text-gray-400">person</span>
              </div>
              <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">edit</span>
                <input type="file" id="avatar-upload" className="hidden" accept="image/*" />
              </label>
            </div>
            <h3 className="font-display text-2xl font-bold text-on-surface">{formData.name}</h3>
            <p className="text-sm font-bold text-secondary">Sustainability Coordinator</p>
            
            <div className="w-full mt-6 pt-6 border-t border-[#bec9be]/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-on-surface-variant">Profile Completion</span>
                <span className="text-xs font-bold text-primary">85%</span>
              </div>
              <div className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </Card>

          {/* Glass Card: Sustainability Track */}
          <Card className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30">
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Sustainability Track</h4>
            <div className="space-y-3">
              {[
                { title: 'Zero Waste Champion', desc: 'Focus on circular economy and composting' },
                { title: 'Energy Minimizer', desc: 'Focus on grid efficiency and solar integration' },
                { title: 'Community Greener', desc: 'Focus on urban gardens and biodiversity' }
              ].map(track => (
                <label key={track.title} className={`flex items-center gap-6 p-3 rounded-xl border cursor-pointer transition-colors ${formData.sustainabilityTrack === track.title ? 'border-primary/20 bg-primary/5' : 'border-[#bec9be]/30 hover:bg-[#dff1fb]'}`}>
                  <input 
                    type="radio" 
                    name="goal" 
                    value={track.title}
                    checked={formData.sustainabilityTrack === track.title}
                    onChange={(e) => setFormData({...formData, sustainabilityTrack: e.target.value})}
                    className="w-4 h-4 text-primary focus:ring-primary/20" 
                  />
                  <div>
                    <span className="text-sm font-bold block">{track.title}</span>
                    <span className="text-[10px] text-on-surface-variant font-bold">{track.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Form Fields */}
        <div className="col-span-1 md:col-span-8">
          <Card className="space-y-10 shadow-sm">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-display text-2xl font-bold text-on-surface border-b border-[#bec9be]/20 pb-2 mb-6">General Information</h3>
              </div>
              <Input 
                label="Full Name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <Input 
                label="Email Address" 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
              <Input 
                label="Phone Number" 
                type="tel" 
                value={formData.phone} 
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
              />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant ml-3">Position</label>
                <select 
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  className="w-full bg-[#f4faff] border border-[#bec9be]/40 px-6 py-3 rounded-xl text-base focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                >
                  <option>Lead Coordinator</option>
                  <option>Field Officer</option>
                  <option>Data Analyst</option>
                </select>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-6 pt-2">
              <h3 className="font-display text-2xl font-bold text-on-surface border-b border-[#bec9be]/20 pb-2">Pickup Logistics</h3>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface-variant ml-3">Primary Pickup Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
                  <input 
                    type="text" 
                    value={formData.pickupAddress}
                    onChange={(e) => setFormData({...formData, pickupAddress: e.target.value})}
                    className="w-full bg-[#f4faff] border border-[#bec9be]/40 pl-12 pr-6 py-3 rounded-xl text-base focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-on-surface-variant ml-3">Building Type</label>
                  <select 
                    value={formData.buildingType}
                    onChange={(e) => setFormData({...formData, buildingType: e.target.value})}
                    className="w-full bg-[#f4faff] border border-[#bec9be]/40 px-6 py-3 rounded-xl text-base focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  >
                    <option>Commercial Office</option>
                    <option>Industrial Facility</option>
                    <option>Residential Complex</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-on-surface-variant ml-3">Access Hours</label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="time" 
                      value={formData.accessStart}
                      onChange={(e) => setFormData({...formData, accessStart: e.target.value})}
                      className="flex-1 bg-[#f4faff] border border-[#bec9be]/40 px-6 py-3 rounded-xl text-base focus:border-primary transition-all outline-none" 
                    />
                    <span className="text-on-surface-variant">to</span>
                    <input 
                      type="time" 
                      value={formData.accessEnd}
                      onChange={(e) => setFormData({...formData, accessEnd: e.target.value})}
                      className="flex-1 bg-[#f4faff] border border-[#bec9be]/40 px-6 py-3 rounded-xl text-base focus:border-primary transition-all outline-none" 
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="pt-10 flex items-center justify-end gap-6 border-t border-[#bec9be]/20">
              <button 
                type="button" 
                onClick={() => navigate(-1)}
                className="px-10 py-3 rounded-full text-sm font-bold text-on-surface-variant hover:bg-[#dff1fb] transition-colors"
              >
                Discard
              </button>
              <button 
                type="submit" 
                disabled={isSaving}
                className={`px-10 py-3 ${isSaving ? 'bg-[#2eb872] text-[#00522d]' : 'bg-primary text-white'} rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2`}
              >
                {isSaving ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
}
