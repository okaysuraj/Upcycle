import React from 'react';

export default function GroupDetail() {
  return (
    <div className="flex flex-col pb-12 w-full">
      {/* Group Header Section */}
      <section className="mb-lg">
        <div className="relative w-full rounded-[32px] overflow-hidden bg-primary-container min-h-[360px] flex flex-col justify-end p-6 md:p-10 shadow-md">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMDpd13Z5hVgwR3lDk_exwsi2xzzu1ALDs3-vx9C9acN87FpNUOgdUPhI-pIqFr2taiXoJp1DTeFXcK6rz8n2mUEVStdLAfe_NNhGKHtuUK-R-enCrYjFfLQ-Y6PiaQpd-ZIwEKFOzLnS0j6mNfcKoXjSBBtEkYEVBPhw5YI8VixDNkklTNFeP8cR2VXIDQkweDtl-1X21oTVpBIcKMwAY_FZgT90lZgJZcbW9ekRYcP2cH_FLN-QxB30y6GUvVBvXOl5KEM3-NWQ')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full font-label-sm font-bold uppercase tracking-wider shadow-sm">Premium Collective</span>
                <span className="text-primary-container flex items-center gap-1 font-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Verified Group
                </span>
              </div>
              <h2 className="font-display text-display-sm md:text-display-md text-white mb-4 font-bold shadow-sm">The Green Loop Collective</h2>
              <p className="font-body-lg text-primary-container max-w-2xl text-shadow">
                Empowering our campus to close the circle on resource waste. We focus on circular economy initiatives, community composting, and upcycling workshops to redefine our footprint.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col lg:items-end gap-6">
              <div className="p-6 rounded-[24px] w-full lg:w-auto text-center border border-white/20 bg-white/10 backdrop-blur-md shadow-inner">
                <p className="font-label-md text-primary-container uppercase tracking-widest mb-1 font-bold">Impact Tracked</p>
                <h3 className="font-display text-headline-lg font-bold text-white">12.4t</h3>
                <p className="font-body-sm text-white/80">Carbon Offset This Semester</p>
              </div>
              <div className="flex gap-3 w-full lg:w-auto">
                <button className="flex-1 lg:flex-none bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">group_add</span>
                  Join Group
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-colors shadow-sm">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Layout Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-md">
        {/* Left Column: Discussions & Events (8 Columns) */}
        <div className="lg:col-span-8 space-y-md">
          {/* Discussion Thread Card */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 border border-outline-variant/30 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline-md font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">forum</span>
                Community Discussions
              </h3>
              <button className="text-primary font-bold font-label-md flex items-center gap-1 hover:underline">
                Start New Topic
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Post 1 */}
              <div className="group border-b border-outline-variant/30 pb-6 last:border-0">
                <div className="flex gap-4">
                  <img className="h-12 w-12 rounded-full object-cover shadow-sm" data-alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa5Y7n3ULJHXEChklFnBlTMrVGrhrMU8aqtWOMPmmGBOn7wtnFtn0rfwBokKxP0U45nGbp8t5tKermJnloN_4xvIwgcx_yLSFt5qyjud6YxEwIooxeXCHnlGx8t2GyJV_2BGW_ppqLwxEI1-BuK7JqKN4M4ifsHBcLeQdpqFnZD0WnNOLgvbpYlz3hwecG40fr6IQCwxeD-tDgmQ7gIIx3nB9iF-nhsajrDeosqLoZ3XHyqjM7G1tX8GkyyUW245NtlLbJYK24ZIE" />
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                      <div>
                        <h4 className="font-label-md text-on-surface font-bold">Sarah Chen <span className="text-on-surface-variant font-normal ml-2">Admin • 2h ago</span></h4>
                        <h5 className="font-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors cursor-pointer mt-1">Reducing lab waste: New initiative starting next week?</h5>
                      </div>
                      <span className="bg-surface-container text-primary px-3 py-1 rounded-full text-label-sm font-bold">Sustainability</span>
                    </div>
                    <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">
                      Hi team! We've been analyzing the chemical engineering waste streams and think there's a huge opportunity for reagent sharing. Who's in to help pilot this?
                    </p>
                    <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-bold">
                        <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                        <span className="font-label-md">24</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-bold">
                        <span className="material-symbols-outlined text-[20px]">comment</span>
                        <span className="font-label-md">12 Comments</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-bold">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                        <span className="font-label-md">340 Views</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Post 2 */}
              <div className="group border-b border-outline-variant/30 pb-6 last:border-0">
                 <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold shadow-sm">MJ</div>
                    <div className="flex-1">
                       <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                          <div>
                             <h4 className="font-label-md text-on-surface font-bold">Mark Johnson <span className="text-on-surface-variant font-normal ml-2">Member • 1d ago</span></h4>
                             <h5 className="font-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors cursor-pointer mt-1">Has anyone tried the new smart bins in the library?</h5>
                          </div>
                          <span className="bg-surface-container text-primary px-3 py-1 rounded-full text-label-sm font-bold">Technology</span>
                       </div>
                       <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">
                          Just noticed they installed those new AI-sorting bins on the 3rd floor. Pretty cool how they categorize compostables.
                       </p>
                       <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                          <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-bold">
                             <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                             <span className="font-label-md">8</span>
                          </button>
                          <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-bold">
                             <span className="material-symbols-outlined text-[20px]">comment</span>
                             <span className="font-label-md">3 Comments</span>
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Group Info & Members (4 Columns) */}
        <div className="lg:col-span-4 space-y-md">
          {/* About Group */}
          <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm">
            <h3 className="font-headline-sm font-bold text-on-surface mb-4">About the Collective</h3>
            <p className="text-body-md text-on-surface-variant mb-6">A dedicated space for students, faculty, and local businesses to collaborate on circular economy projects.</p>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <span className="font-bold text-on-surface">Main Campus & Online</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">public</span>
                  <span className="font-bold text-on-surface">Public Group</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">group</span>
                  <span className="font-bold text-on-surface">1,204 Members</span>
               </div>
            </div>
          </div>
          
          {/* Admins */}
          <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm">
             <h3 className="font-headline-sm font-bold text-on-surface mb-4">Group Admins</h3>
             <div className="flex items-center gap-4 mb-4">
                <img className="h-10 w-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa5Y7n3ULJHXEChklFnBlTMrVGrhrMU8aqtWOMPmmGBOn7wtnFtn0rfwBokKxP0U45nGbp8t5tKermJnloN_4xvIwgcx_yLSFt5qyjud6YxEwIooxeXCHnlGx8t2GyJV_2BGW_ppqLwxEI1-BuK7JqKN4M4ifsHBcLeQdpqFnZD0WnNOLgvbpYlz3hwecG40fr6IQCwxeD-tDgmQ7gIIx3nB9iF-nhsajrDeosqLoZ3XHyqjM7G1tX8GkyyUW245NtlLbJYK24ZIE" alt="Admin" />
                <div>
                   <p className="font-bold text-on-surface">Sarah Chen</p>
                   <p className="text-xs text-on-surface-variant">Lead Coordinator</p>
                </div>
             </div>
             <button className="w-full py-2 border border-outline-variant/50 rounded-full font-bold text-primary hover:bg-primary/5 transition-colors">
                Contact Admins
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
