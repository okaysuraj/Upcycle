import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function AccountDeactivation() {
  const navigate = useNavigate();
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleDeactivate = async () => {
    setIsDeactivating(true);
    // await authFetch('/users/deactivate', { method: 'DELETE' });
    setTimeout(() => {
      // Mock logout for now, assuming auth context handles it
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-10">
      {/* Hero Section */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-error-container text-error mb-2">
          <span className="material-symbols-outlined text-[40px]">person_off</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-on-background">We're sorry to see you go</h2>
        <p className="font-body-lg text-lg text-secondary max-w-xl mx-auto">
          Deactivating your account is a big step. Before you leave, we wanted to share the incredible progress you've made in our community.
        </p>
      </div>

      {/* Bento Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Total Footprint */}
        <Card className="col-span-12 md:col-span-7 flex flex-col justify-between overflow-hidden relative group p-6">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Total Footprint Reduced</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-display text-5xl font-bold text-primary">1,248</span>
              <span className="text-xl font-bold text-on-surface-variant">kg</span>
            </div>
            <p className="text-base text-secondary mt-2">That's equivalent to planting approximately 62 mature trees this year.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'opsz' 48" }}>forest</span>
          </div>
        </Card>

        {/* Active Logs */}
        <div className="col-span-12 md:col-span-5 bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-[#9cf6ba] rounded-full flex items-center justify-center text-[#00210f] mb-2">
            <span className="material-symbols-outlined text-3xl">inventory</span>
          </div>
          <h4 className="font-display text-2xl font-bold text-on-surface">420 Active Logs</h4>
          <p className="text-sm font-bold text-secondary mt-1">Community data contributions</p>
        </div>

        {/* Communities Helped */}
        <Card className="col-span-12 flex flex-col md:flex-row items-center gap-10 p-6">
          <div className="flex-1 space-y-3">
            <h4 className="text-2xl font-bold text-on-surface">Communities You've Empowered</h4>
            <p className="text-base text-secondary">Your contributions directly helped 8 municipal zones reach their zero-waste targets last quarter.</p>
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#d9ebf5] flex items-center justify-center text-[10px] font-bold">Z-1</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#d9ebf5] flex items-center justify-center text-[10px] font-bold">Z-4</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#d9ebf5] flex items-center justify-center text-[10px] font-bold">M-9</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#d9ebf5] flex items-center justify-center text-[10px] font-bold text-primary">+5</div>
            </div>
          </div>
          <div className="w-full md:w-64 h-32 rounded-xl overflow-hidden relative bg-gray-200">
             <div className="absolute inset-0 bg-primary/20 backdrop-overlay flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">map</span>
             </div>
          </div>
        </Card>
      </div>

      {/* What happens next */}
      <Card className="bg-surface-container-lowest p-10 space-y-6">
        <h3 className="text-2xl font-bold text-on-surface">What happens next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-6 items-start">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#d9ebf5] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant">visibility_off</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Profile Hidden</p>
              <p className="text-base text-secondary">Your public profile and municipal achievements will no longer be visible to other members.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#d9ebf5] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant">notifications_off</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Notifications Stop</p>
              <p className="text-base text-secondary">We will stop sending all municipal updates, impact reports, and community digests.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#d9ebf5] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant">history</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Data Retention</p>
              <p className="text-base text-secondary">We keep your data for 30 days in case you change your mind. After that, it is permanently scrubbed.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="mt-1 w-10 h-10 rounded-lg bg-[#d9ebf5] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant">assignment_late</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Initiative Handover</p>
              <p className="text-base text-secondary">Any ongoing initiatives will be assigned to 'Community General' to prevent project stalls.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Footer */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
        <button className="px-10 py-2 bg-[#d9ebf5] text-on-surface font-bold text-sm rounded-full hover:bg-[#cbdde7] transition-colors w-full md:w-auto">
          Pause Account
        </button>
        <button 
          onClick={handleDeactivate}
          disabled={isDeactivating}
          className="px-10 py-2 bg-error text-on-error font-bold text-sm rounded-full shadow-lg hover:bg-[#ba1a1a]/90 transition-transform active:scale-95 w-full md:w-auto"
        >
          {isDeactivating ? 'Deactivating...' : 'Deactivate My Account'}
        </button>
        <button 
          onClick={() => navigate('/settings')}
          className="px-10 py-2 text-primary font-bold text-sm hover:bg-primary/5 rounded-full transition-colors w-full md:w-auto"
        >
          Wait, I want to stay
        </button>
      </div>
      <p className="text-center text-xs font-bold text-secondary pt-6">
        Questions about your data? Contact our <a className="underline hover:text-primary" href="#">Data Protection Officer</a>.
      </p>
    </div>
  );
}
