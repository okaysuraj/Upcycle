import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import campusOnboardingImg from '../../assets/campus_onboarding.jpg';

export default function WelcomeOnboarding() {
  const navigate = useNavigate();
  const [activeDot, setActiveDot] = useState(0);

  const slides = [
    {
      badge: 'Educational Initiative',
      titleHighlight: 'Campuses',
      titlePrefix: 'Greenifying',
      description: 'Transform educational spaces into thriving sustainable ecosystems with intelligent resource tracking and community-driven impact data.',
      impact: '+42% Sustainability'
    },
    {
      badge: 'Resource Analytics',
      titleHighlight: 'Municipal Waste',
      titlePrefix: 'Diverting',
      description: 'Harness automated IoT waste monitoring and logistics routing to maximize recovery rates and minimize landfill footprint.',
      impact: '1.2M+ Tons Saved'
    },
    {
      badge: 'Eco-Marketplace',
      titleHighlight: 'Materials',
      titlePrefix: 'Circulating',
      description: 'Connect with verified regional service providers and upcycling initiatives to transform discarded assets into value.',
      impact: '450+ Municipalities'
    }
  ];

  const currentSlide = slides[activeDot];

  const handleNext = () => {
    if (activeDot < slides.length - 1) {
      setActiveDot(activeDot + 1);
    } else {
      navigate('/login');
    }
  };

  const skip = () => {
    navigate('/login');
  };

  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-center relative font-['Hanken_Grotesk',sans-serif]">
      {/* Header Skip Bar */}
      <div className="w-full max-w-[1200px] flex justify-between items-center mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-[#00522d] rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
          </div>
          <span className="text-2xl font-bold text-[#00522d] tracking-tight">Upcycle</span>
        </div>
        <button 
          onClick={skip}
          className="text-sm font-semibold text-[#556158] hover:text-[#00522d] px-5 py-2 transition-colors rounded-full hover:bg-[#dff1fb]/60 cursor-pointer"
        >
          Skip
        </button>
      </div>

      {/* Main Bento Grid Canvas */}
      <div className="w-full max-w-[1200px] grid grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-start gap-5 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#9cf6ba] text-[#00210f] rounded-full">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="text-xs font-bold uppercase tracking-wider">{currentSlide.badge}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0d1e25] leading-[1.12] tracking-[-0.02em]">
            {currentSlide.titlePrefix} <br />
            <span className="text-[#00522d]">{currentSlide.titleHighlight}</span>
          </h1>
          
          <p className="text-base sm:text-lg text-[#556158] max-w-[440px] leading-relaxed">
            {currentSlide.description}
          </p>
          
          <div className="mt-4 flex items-center gap-4">
            <button 
              onClick={handleNext}
              className="bg-[#00522d] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#003d21] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>{activeDot === slides.length - 1 ? 'Get Started' : 'Continue'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <Link 
              to="/about"
              className="border border-[#bec9be]/40 text-[#0d1e25] px-6 py-4 rounded-full text-sm font-semibold hover:bg-white transition-colors"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
              }}
            >
              Learn More
            </Link>
          </div>
          
          {/* Navigation Dots */}
          <div className="mt-8 flex items-center gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveDot(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDot === idx ? 'w-8 bg-[#00522d]' : 'w-2.5 bg-[#bec9be]/60 hover:bg-[#bec9be]'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Right Illustration Column */}
        <div className="col-span-12 lg:col-span-7 relative h-[450px] sm:h-[520px] lg:h-[580px] flex items-center justify-center">
          {/* Floating Glass Panels for Depth */}
          <div 
            className="absolute -top-6 -right-6 w-56 h-56 rounded-[40px] -rotate-12 pointer-events-none hidden sm:block"
            style={{
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(165, 214, 167, 0.3)',
            }}
          />
          <div 
            className="absolute -bottom-10 -left-6 w-44 h-44 rounded-[32px] rotate-6 pointer-events-none hidden sm:block"
            style={{
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(165, 214, 167, 0.3)',
            }}
          />
          
          {/* Main Visual Anchor */}
          <div className="relative z-10 w-full h-full p-3 sm:p-4">
            <div className="w-full h-full rounded-[40px] sm:rounded-[48px] overflow-hidden shadow-2xl relative border-[6px] sm:border-[8px] border-white/60">
              <img 
                className="w-full h-full object-cover" 
                src={campusOnboardingImg} 
                alt="Futuristic sustainable university campus" 
              />
              
              {/* Glass Overlay Status Badge */}
              <div 
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 max-w-[260px] shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(165, 214, 167, 0.4)',
                }}
              >
                <div className="w-11 h-11 rounded-full bg-[#2eb872] flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-xl">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#556158] uppercase tracking-wider">Projected Impact</p>
                  <p className="text-base sm:text-lg font-bold text-[#00522d] tracking-tight">{currentSlide.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

