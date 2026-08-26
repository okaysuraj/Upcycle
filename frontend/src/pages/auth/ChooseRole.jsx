import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      if (selectedRole === 'Admin') navigate('/admin');
      else if (selectedRole === 'Vendor') navigate('/vendor');
      else if (selectedRole === 'Staff') navigate('/staff/facilities');
      else navigate('/student');
    }
  };

  return (
    <div className="w-full max-w-[1440px] px-6 lg:px-[80px] py-10 flex flex-col items-center font-['Hanken_Grotesk',sans-serif]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-3">
          <div className="w-12 h-12 bg-[#00522d] rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
          </div>
        </div>
        <h1 className="text-4xl lg:text-[48px] font-bold text-[#0d1e25] mb-3 tracking-[-0.02em]">
          Welcome to Upcycle
        </h1>
        <p className="text-lg text-[#556158] max-w-2xl mx-auto leading-relaxed">
          Please select your professional capacity to customize your municipal dashboard and environmental impact tools.
        </p>
      </div>

      {/* Roles Grid (Bento Style Selection) */}
      <div className="grid grid-cols-12 gap-5 w-full max-w-6xl mb-12">
        {roles.map((role) => {
          const isActive = selectedRole === role.id;
          return (
            <div 
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`col-span-12 ${role.span} border rounded-[24px] p-6 sm:p-7 cursor-pointer flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isActive 
                  ? 'bg-[#9cf6ba]/60 border-[#00522d] shadow-md shadow-[#00522d]/10' 
                  : 'bg-white border-[#bec9be]/40 shadow-sm hover:border-[#00522d]/40'
              }`}
            >
              <div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  isActive ? 'bg-[#00522d] text-white shadow-sm' : 'bg-[#dff1fb] text-[#00522d]'
                }`}
              >
                <span 
                  className="material-symbols-outlined text-2xl" 
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {role.icon}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-[#0d1e25] mb-2 tracking-tight">
                {role.title}
              </h3>
              <p className="text-base text-[#556158] leading-relaxed">
                {role.description}
              </p>
              <div className={`absolute top-5 right-5 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-[#00522d] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Action */}
      <div className="w-full flex flex-col items-center">
        <button 
          onClick={handleContinue}
          disabled={!selectedRole}
          className="bg-[#00522d] hover:bg-[#003d21] disabled:bg-[#bec9be] disabled:cursor-not-allowed text-white font-semibold text-base py-4 px-12 rounded-full shadow-lg transition-all duration-300 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
        >
          <span>Continue to Dashboard</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
        <p className="mt-4 text-xs font-medium text-[#556158]">
          Not sure which one to pick?{' '}
          <Link to="/support" className="text-[#00522d] hover:underline font-bold">
            Contact support
          </Link>
        </p>
      </div>

      {/* Side Visual Floating Badges */}
      <div className="hidden 2xl:block fixed bottom-12 right-12 w-72 h-44 rounded-[24px] p-2 shadow-lg rotate-3 z-0 pointer-events-none"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(165, 214, 167, 0.3)',
        }}
      >
        <div className="w-full h-full bg-[#e7f6ff] rounded-[18px] flex flex-col items-center justify-center text-center p-4">
          <div className="w-10 h-10 bg-[#2eb872]/20 rounded-full flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-[#00522d] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              forest
            </span>
          </div>
          <p className="font-bold text-sm text-[#00522d]">Over 14.5k tons diverted</p>
          <p className="text-xs text-[#556158] mt-0.5">Municipal Real-time Data</p>
        </div>
      </div>

      <div className="hidden 2xl:block fixed bottom-[160px] left-12 w-64 h-32 rounded-[24px] p-2 shadow-lg -rotate-6 z-0 pointer-events-none"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(165, 214, 167, 0.3)',
        }}
      >
        <div className="w-full h-full bg-[#dff1fb]/60 rounded-[18px] flex items-center p-3 gap-3">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#00522d] text-white flex items-center justify-center border-2 border-[#9cf6ba]">
            <span className="material-symbols-outlined text-lg">support_agent</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[#0d1e25]">Need assistance?</p>
            <p className="text-xs text-[#556158]">Eco-Guide AI is online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

