import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeOnboarding() {
  const navigate = useNavigate();
  const [activeDot, setActiveDot] = useState(0);

  const handleNext = () => {
    if (activeDot < 2) {
      setActiveDot(activeDot + 1);
    } else {
      navigate('/login');
    }
  };

  const skip = () => {
    navigate('/login');
  };

  return (
    <div className="bg-[#f4faff] min-h-screen font-body-md text-on-surface overflow-hidden relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[32px]">eco</span>
          <span className="font-display text-2xl font-bold text-primary tracking-tight">Upcycle</span>
        </div>
        <button 
          onClick={skip}
          className="text-sm font-bold text-on-surface-variant hover:text-primary px-6 py-3 transition-colors rounded-full hover:bg-white"
        >
          Skip
        </button>
      </header>

      {/* Main Content */}
      <main className="h-screen w-full flex flex-col items-center justify-center relative px-5 max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start gap-6 z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#9cf6ba] text-[#00210f] rounded-full">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-xs font-bold uppercase tracking-widest">Educational Initiative</span>
            </div>
            
            <h1 className="font-display text-6xl font-bold text-on-background leading-tight">
              Greenifying <br/><span className="text-primary">Campuses</span>
            </h1>
            
            <p className="text-lg text-[#556158] max-w-[440px]">
              Transform educational spaces into thriving sustainable ecosystems with intelligent resource tracking and community-driven impact data.
            </p>
            
            <div className="mt-10 flex items-center gap-6">
              <button 
                onClick={handleNext}
                className="bg-primary text-white px-10 py-4 rounded-full text-sm font-bold hover:scale-[1.02] transition-transform shadow-lg flex items-center gap-2"
              >
                {activeDot === 2 ? 'Get Started' : 'Next'}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <button className="border border-[#bec9be]/30 text-on-surface px-10 py-4 rounded-full text-sm font-bold hover:bg-white/50 transition-colors bg-white/70 backdrop-blur-md">
                Learn More
              </button>
            </div>
            
            {/* Navigation Dots */}
            <div className="mt-16 flex gap-2">
              {[0, 1, 2].map((idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveDot(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDot === idx ? 'w-6 bg-primary' : 'w-2 bg-[#717973]/40 hover:bg-[#717973]'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right Illustration Column */}
          <div className="col-span-1 md:col-span-7 relative h-[600px] flex items-center justify-center hidden md:flex">
            {/* Floating Glass Panels for Depth */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/70 backdrop-blur-xl border border-[#a5d6a7]/30 rounded-[40px] -rotate-12 animate-pulse" />
            <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-white/70 backdrop-blur-xl border border-[#a5d6a7]/30 rounded-[32px] rotate-6 animate-pulse delay-700" />
            
            {/* Main Visual Anchor */}
            <div className="relative z-10 w-full h-full p-6">
              <div className="w-full h-full rounded-[48px] overflow-hidden shadow-2xl relative border-[8px] border-white/50 bg-[#e7f6ff] flex items-center justify-center">
                 {/* Placeholder for the image in the mockup */}
                 <span className="material-symbols-outlined text-9xl text-primary opacity-20">nature_people</span>
                
                {/* Glass Overlay Status Badge */}
                <div className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-xl border border-[#a5d6a7]/30 p-6 rounded-xl flex items-center gap-6 max-w-[240px]">
                  <div className="w-12 h-12 rounded-full bg-[#2eb872] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#556158] uppercase">Projected Impact</p>
                    <p className="text-2xl font-bold text-primary">+42% Sustainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
