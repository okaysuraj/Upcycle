import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function ChooseRole() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'Student',
      title: 'Student',
      icon: 'school',
      description: 'Focus on learning municipal waste cycles and participating in local campus green initiatives.',
      span: 'md:col-span-4'
    },
    {
      id: 'Admin',
      title: 'Admin',
      icon: 'admin_panel_settings',
      description: 'High-level oversight of waste management systems, data reporting, and urban policy execution.',
      span: 'md:col-span-4'
    },
    {
      id: 'Vendor',
      title: 'Vendor',
      icon: 'storefront',
      description: 'Manage supply chain resources, logistics, and partner-integrated recycling inventories.',
      span: 'md:col-span-4'
    },
    {
      id: 'Staff',
      title: 'Staff',
      icon: 'badge',
      description: 'Day-to-day operational management of upcycling facilities, maintenance schedules, and personnel workflows.',
      span: 'md:col-span-6'
    },
    {
      id: 'Consultant',
      title: 'Consultant',
      icon: 'query_stats',
      description: 'Provide expert analysis on sustainability metrics, environmental impact audits, and strategic optimization.',
      span: 'md:col-span-6'
    }
  ];

  const handleContinue = () => {
    if (selectedRole) {
      // In a real app, update the user's role on the backend here
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4faff] flex flex-col items-center justify-center relative overflow-x-hidden">
      <main className="max-w-[1440px] w-full px-5 py-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <h1 className="font-display text-5xl font-bold text-[#0d1e25] mb-2">Welcome to Upcycle</h1>
          <p className="font-body-lg text-lg text-secondary max-w-2xl mx-auto">
            Please select your professional capacity to customize your municipal dashboard and environmental impact tools.
          </p>
        </div>

        {/* Roles Grid (Bento Style Selection) */}
        <div className="grid grid-cols-12 gap-4 w-full max-w-6xl mb-16">
          {roles.map(role => {
            const isActive = selectedRole === role.id;
            return (
              <div 
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`col-span-12 ${role.span} border border-[#bec9be]/30 rounded-3xl p-6 cursor-pointer flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isActive ? 'bg-[#9cf6ba] border-[#00522d]' : 'bg-white'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${isActive ? 'bg-[#00522d] text-white' : 'bg-[#d4e5ef] text-primary'}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{role.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0d1e25] mb-1">{role.title}</h3>
                <p className="font-body-md text-base text-[#3f4941]">{role.description}</p>
                <div className={`absolute top-4 right-4 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="w-full flex flex-col items-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedRole}
            className="rounded-full px-16 py-3 shadow-lg flex items-center gap-2"
          >
            Continue to Dashboard
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Button>
          <p className="mt-4 text-xs font-bold text-secondary">
            Not sure which one to pick? <a className="text-primary hover:underline" href="#">Contact support</a>
          </p>
        </div>
      </main>

      {/* Side Illustrations */}
      <div className="hidden lg:block fixed bottom-10 right-10 w-72 h-48 bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-3xl p-2 shadow-lg rotate-3 z-10">
        <div className="w-full h-full bg-[#e7f6ff] rounded-[16px] flex flex-col items-center justify-center text-center p-2">
          <div className="w-12 h-12 bg-[#2eb872]/20 rounded-full flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span>
          </div>
          <p className="font-bold text-sm text-primary">Over 14.5k tons diverted</p>
          <p className="text-xs font-bold text-[#3f4941]">Municipal Real-time Data</p>
        </div>
      </div>

      <div className="hidden lg:block fixed bottom-[180px] left-10 w-64 h-32 bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-3xl p-2 shadow-lg -rotate-6 z-10">
        <div className="w-full h-full bg-[#d9e6da]/30 rounded-[16px] flex items-center p-2 gap-2">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-[#9cf6ba] flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">support_agent</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#0d1e25]">Need assistance?</p>
            <p className="text-xs font-bold text-secondary">Eco-Guide AI is online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
