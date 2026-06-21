import { useEffect } from 'react';

export default function Landing({ onNavigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fbfbfc] text-[#2d382d] min-h-screen font-sans selection:bg-[#4f7942] selection:text-white">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-6 md:px-16 py-6 sticky top-0 bg-[#fbfbfc]/90 backdrop-blur-md z-50 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-3 text-[#4f7942]">
          <span className="material-symbols-outlined text-3xl">eco</span>
          <span className="text-2xl font-bold tracking-tight text-[#2d382d]">Upcycle</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-[#4b5563]">
          <a href="#" className="hover:text-[#4f7942] transition-colors">Horticulture</a>
          <a href="#" className="hover:text-[#4f7942] transition-colors">Recycling</a>
          <a href="#" className="hover:text-[#4f7942] transition-colors">Green Events</a>
        </div>
        <div>
          <button onClick={() => onNavigate()} className="px-6 py-2.5 bg-[#4f7942] text-white font-medium rounded-full hover:bg-[#3e5f34] transition-colors shadow-sm">
            Get Started
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-6xl px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col items-start animate-fade opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#1f2937]">
              Cultivate a greener <span className="text-[#4f7942]">tomorrow.</span>
            </h1>
            <p className="text-lg text-[#4b5563] leading-relaxed mb-10 max-w-lg">
              Your all-in-one platform for community horticulture, recycling management, and volunteering for local green events.
            </p>
            <div className="flex gap-4">
              <button onClick={() => onNavigate()} className="px-8 py-3.5 bg-[#4f7942] text-white font-semibold rounded-full hover:bg-[#3e5f34] transition-colors shadow-md">
                Join the Movement
              </button>
              <button className="px-8 py-3.5 bg-white border border-[#d1d5db] text-[#4b5563] font-semibold rounded-full hover:border-[#4f7942] hover:text-[#4f7942] transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1416879598056-0cbb04922e69?q=80&w=2000&auto=format&fit=crop" alt="Community Garden" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-white py-24 border-y border-[#e5e7eb]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 animate-fade opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">Everything you need to make an impact</h2>
              <p className="text-[#4b5563] max-w-2xl mx-auto">Manage resources, track environmental impact, and connect with volunteers seamlessly.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: 'Horticulture Management', icon: 'local_florist', desc: 'Track community gardens, manage plant health, and log harvest yields to monitor agricultural success.' },
                { title: 'Recycling Hub', icon: 'recycling', desc: 'Log your material contributions, track global community stats, and build a sustainable zero-waste ecosystem.' },
                { title: 'Green Events', icon: 'event', desc: 'Discover local cleanups and planting drives. Register as a volunteer with one click and make a difference.' }
              ].map((feature, i) => (
                <div key={i} className="bg-[#f9fafb] p-8 rounded-2xl border border-[#f3f4f6] hover:border-[#4f7942]/30 hover:shadow-lg transition-all duration-300 animate-fade opacity-0 translate-y-8" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 bg-[#4f7942]/10 text-[#4f7942] rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-3">{feature.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full max-w-4xl px-6 md:px-12 py-24 text-center animate-fade opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl font-bold text-[#1f2937] mb-6">Ready to grow with us?</h2>
          <p className="text-[#4b5563] mb-10 text-lg">Join hundreds of volunteers and eco-warriors making our communities cleaner and greener.</p>
          <button onClick={() => onNavigate()} className="px-10 py-4 bg-[#4f7942] text-white font-semibold text-lg rounded-full hover:bg-[#3e5f34] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create an Account
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-[#e5e7eb] py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-[#6b7280]">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="material-symbols-outlined text-[#4f7942]">eco</span>
          <span className="font-semibold text-[#1f2937]">Upcycle 2026</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#4f7942] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#4f7942] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#4f7942] transition-colors">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
