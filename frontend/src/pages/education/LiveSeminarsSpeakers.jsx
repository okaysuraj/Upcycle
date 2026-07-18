import React from 'react';

export default function LiveSeminarsSpeakers() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-gutter">
      {/* Seminar Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Video & Title */}
        <div className="lg:col-span-8 space-y-gutter">
          {/* Video Player Container */}
          <div className="relative aspect-video bg-black rounded-[32px] overflow-hidden shadow-lg border border-outline-variant/20 group">
            <img 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
              data-alt="Live Stream" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLBZayDgU3IjfKPGS-ctiu9NmUnQUIUY2Elt1lvX6uuiRPqX7d6MR6iXyRY98oE54oIryV4GXSXdR9019aeU98fbwhDQeO1YQs7ymyFJbb9vnr7Kj6t9gpZmwOyXRanbvmsxbbXXPVO81P85JLTMO7D4yBlA4W91uQDnXQHhRr30ckwQVTNhcBS7-CVSCmLfnwEu0k9giJ9WhixCTyB-dSH0BRL8TiRy1rrbZIoNgTlxaZbTVhZrTiBEzruP0McANiOk-ySr3QF90" 
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse shadow-md">
                <span className="w-2 h-2 bg-white rounded-full"></span> LIVE
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/20 shadow-md">
                <span className="material-symbols-outlined text-[16px]">group</span> 1.2k watching
              </span>
            </div>
            
            {/* Player Controls (Decorative) */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4 text-white">
                <button className="hover:text-primary transition-colors hover:scale-110 transform">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pause_circle</span>
                </button>
                <button className="hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">volume_up</span>
                </button>
                <span className="text-sm font-medium ml-2">14:52 / 1:00:00</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">closed_caption</span></button>
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span></button>
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">fullscreen</span></button>
              </div>
            </div>
            {/* Play Button Center (Decorative) */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-xl">
                   <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                </div>
             </div>
          </div>
          
          {/* Session Info */}
          <div className="bg-white p-6 md:p-8 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
              <div>
                <h2 className="font-display text-headline-md md:text-headline-lg font-bold text-primary mb-3 leading-tight">Sustainable Urban Metabolism: Integrating Circular Core Principles</h2>
                <div className="flex flex-wrap items-center gap-3 text-on-surface-variant font-label-md font-medium">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold border border-secondary/20">Campus Infrastructure</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-sm">Started at 10:00 AM</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1 text-sm">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span> Oct 24, 2024
                  </span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="bg-surface-container-lowest border border-outline-variant/50 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">share</span>
                </button>
                <button className="bg-surface-container-lowest border border-outline-variant/50 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">bookmark</span>
                </button>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-3xl leading-relaxed text-[15px]">
              Join Dr. Helena Vance as she explores the intersection of campus infrastructure and circular economy principles. This session focuses on the real-time monitoring of energy and water cycles to minimize waste and maximize resource efficiency across multi-building environments.
            </p>
          </div>
          
          {/* Speaker Profile Section (Bento Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Bio Card */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                <img 
                  className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-primary/20" 
                  data-alt="Speaker" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjx6s2djV82ZKFdd6azSHGNu_loxjh_bt6DJFVeXP7EwMHPiciwP_NgaSj7vQPKnsmc5J28dYuKhUfOJayuvqWQWnpiANkKrGgCGcXlFdZ5lewsBAQWkI_HZqfuOhk57zFJ41Z-IG-3QbO_N_7zLLe3v_Yjz-BT9KLw9VvWtKK1FHz7KthCBjECIUQMOI-bnqM1uP4POE6X9mZruTGUFt61UT50j_p26pHsSZ_jasEPjllv_gbI4whwqzSEFXQtQQX3GQcMXF57MM" 
                />
                <div>
                  <h3 className="font-display text-headline-sm font-bold text-primary mb-1">Dr. Helena Vance</h3>
                  <p className="font-label-md text-secondary font-bold">Director of Circular Infrastructure</p>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-8 text-[15px] leading-relaxed">
                Dr. Vance is a leading authority in urban sustainability with over 15 years of experience implementing campus-wide circularity programs. She has advised over 50 universities globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-primary text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>add</span> Connect
                </button>
                <button className="flex-1 border-2 border-outline-variant text-on-surface py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-surface-container-lowest hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-[20px]">mail</span> Message
                </button>
              </div>
            </div>
            
            {/* Portfolio/Past Sessions */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h4 className="font-label-md font-bold text-on-surface mb-5 uppercase tracking-widest text-xs">Recent Sessions</h4>
              <div className="space-y-4 flex-1">
                {/* Session 1 */}
                <div className="group cursor-pointer flex gap-4 p-3 rounded-xl hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant/30 transition-all">
                  <div className="w-24 h-16 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 relative shadow-sm">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM7apQqBgGkQvt6z0GGGyTt7YD2zL45auElXzRCMLvUXdGhFj0grb4SxR_gx3bOqRQb1M8YilYk2wO_0EaSw5N_y86y2IgFWOxy4nl2t2l0b4vJFzsoC5KXu9NJBdy-Qy3G0IeEAaExJrnenJWBsm5jQEhK5p5ZxUPxy9W6ksL-D-ktoFt-6fiDQVKqvYF-wTwK_AJZSa33gna93glf4Vf6geRjSQ_2l7EXf_K8eCGjOfxYyjQ7mtEmKwN7NG4_T_jFeyZAN2YXuY" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-[24px]">play_arrow</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 mb-1">Decarbonizing Older Campus Wings</p>
                    <p className="text-xs text-on-surface-variant font-medium">45:20 • 3.2k views</p>
                  </div>
                </div>
                
                {/* Session 2 */}
                <div className="group cursor-pointer flex gap-4 p-3 rounded-xl hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant/30 transition-all">
                  <div className="w-24 h-16 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 relative shadow-sm">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKRpjvyyFal38ELvMBRn6zHL0UWmQgn4m0OS5UEAj_qRRyLqMLeuQnQkmXqsRPF4YqC9YFftOxs0fHv-IQdZYZtKSHOnApQhBaUhFJSrsyGZQw8Q49uzkdSCbUDxCnx-hZmsHVRD5cNRwf0ceHYVx3k4LcG3OuWBiDwAlng5HgeiqWQJMVnaJuuDfofDfezIeHE_yHGW0YeUGo3HotZwKvjDJrJjjH8gTqwc3jpzbUXDmAQb2gRDCE9AXT5SuoEEC3bLB6e1ou_7M" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-[24px]">play_arrow</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 mb-1">Smart Water Networks</p>
                    <p className="text-xs text-on-surface-variant font-medium">1:02:15 • 2.8k views</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-primary font-bold text-sm hover:underline py-2">View Full Portfolio</button>
            </div>
          </div>
        </div>

        {/* Right Column: Q&A / Live Chat */}
        <div className="lg:col-span-4 h-[600px] lg:h-auto flex flex-col bg-white rounded-[32px] border border-outline-variant/30 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant/30 bg-surface-container-lowest flex justify-between items-center z-10">
            <h3 className="font-headline-sm font-bold text-on-surface">Live Q&A</h3>
            <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-1.5 border border-primary/20">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> Active
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-surface-container-lowest custom-scrollbar">
            {/* Chat Item 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm shrink-0">MK</div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm text-on-surface">Mark K.</span>
                  <span className="text-xs text-on-surface-variant font-medium">10:42 AM</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Will the slides be available for download after this session? Specifically interested in the sensor layout diagrams.</p>
              </div>
            </div>
            
            {/* Chat Item 2 (Host Reply) */}
            <div className="flex gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10 ml-6 relative">
               <div className="absolute -left-3 top-6 text-primary/20">
                  <span className="material-symbols-outlined text-2xl" style={{ transform: 'rotate(180deg)' }}>reply</span>
               </div>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm text-primary">Moderator</span>
                  <span className="text-xs text-on-surface-variant font-medium">10:43 AM</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Yes Mark, all materials including the high-res diagrams will be posted in the Resource Library by 2PM.</p>
              </div>
            </div>
            
            {/* Chat Item 3 */}
            <div className="flex gap-4">
              <img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLBZayDgU3IjfKPGS-ctiu9NmUnQUIUY2Elt1lvX6uuiRPqX7d6MR6iXyRY98oE54oIryV4GXSXdR9019aeU98fbwhDQeO1YQs7ymyFJbb9vnr7Kj6t9gpZmwOyXRanbvmsxbbXXPVO81P85JLTMO7D4yBlA4W91uQDnXQHhRr30ckwQVTNhcBS7-CVSCmLfnwEu0k9giJ9WhixCTyB-dSH0BRL8TiRy1rrbZIoNgTlxaZbTVhZrTiBEzruP0McANiOk-ySr3QF90" />
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm text-on-surface">Emily R.</span>
                  <span className="text-xs text-on-surface-variant font-medium">10:48 AM</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">How does the initial capital cost compare for retrofitting vs new builds when targeting LEED Platinum?</p>
                <div className="mt-2 flex gap-3">
                  <button className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[14px]">thumb_up</span> 14
                  </button>
                  <button className="text-xs text-primary font-bold hover:underline">Reply</button>
                </div>
              </div>
            </div>
            
            {/* Chat Item 4 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary font-bold text-sm shrink-0">JD</div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm text-on-surface">John Doe</span>
                  <span className="text-xs text-on-surface-variant font-medium">10:50 AM</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Fascinating point on the metabolic rate of older concrete structures.</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest z-10">
            <div className="relative">
              <input 
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-full py-3.5 pl-5 pr-14 focus:ring-2 focus:ring-primary focus:border-primary text-sm shadow-inner" 
                placeholder="Ask a question..." 
                type="text" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            <p className="text-center text-[10px] text-outline mt-3">Be respectful and professional in live chat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
