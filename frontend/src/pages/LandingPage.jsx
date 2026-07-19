import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Globe, Zap, Users, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-ice text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary-container/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-tertiary-container/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] bg-secondary-container/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary text-on-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <Leaf size={24} className="animate-pulse-slow" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-on-surface">Upcycle</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold text-on-surface/80 hover:text-primary transition-colors">
            Log in
          </Link>
          <Link to="/register" className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-on-primary bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-outline-variant/50 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
          <span className="text-sm font-medium text-on-surface-variant">The future of campus sustainability</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-on-surface mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Transform waste into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">
             valuable resources.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          A revolutionary platform connecting students, staff, and vendors to build a zero-waste, fully circular campus ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link to="/register" className="group flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95">
            Join the Movement
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/marketplace" className="group flex items-center gap-2 px-8 py-4 bg-surface text-on-surface border border-outline-variant/50 rounded-full font-bold text-lg transition-all hover:bg-surface-variant hover:border-outline active:scale-95">
            Explore Marketplace
          </Link>
        </div>
      </main>

      {/* Features Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Recycle, title: 'Smart Waste Tracking', desc: 'Monitor campus bins in real-time and optimize collection routes.' },
            { icon: Globe, title: 'Eco-Marketplace', desc: 'Buy, sell, and trade upcycled goods and sustainable services.' },
            { icon: Zap, title: 'Gamified Impact', desc: 'Earn badges and rewards for your daily sustainable actions.' }
          ].map((feature, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-surface/40 border border-outline-variant/30 backdrop-blur-sm hover:bg-surface hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
