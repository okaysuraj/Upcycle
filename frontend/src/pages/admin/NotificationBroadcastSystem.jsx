import React from 'react';

export default function NotificationBroadcastSystem() {
  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
        <div>
          <h2 className="font-display text-headline-lg font-bold text-primary leading-tight">Notification Center</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Broadcast critical updates and system milestones to the Upcycle community.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button className="px-5 py-2.5 bg-white border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">save</span>
            Save Draft
          </button>
          <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 active:scale-95 transition-all flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">send</span>
            Send Broadcast
          </button>
        </div>
      </div>

      {/* Bento Layout Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Composer Panel */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Message Composition */}
          <div className="bg-white border border-outline-variant/30 rounded-[24px] p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <span className="material-symbols-outlined text-[20px]">edit_note</span>
              </div>
              <h3 className="font-display text-headline-sm font-bold text-on-surface">Compose Message</h3>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Broadcast Subject</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-inner" 
                  placeholder="e.g. Upcoming System Maintenance" 
                  type="text" 
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Target Audience</label>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                    All Users
                  </button>
                  <button className="px-4 py-2 bg-white border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-lowest rounded-full text-sm font-bold flex items-center gap-2 shadow-sm transition-all">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    Europe
                  </button>
                  <button className="px-4 py-2 bg-white border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-lowest rounded-full text-sm font-bold flex items-center gap-2 shadow-sm transition-all">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    Power Users
                  </button>
                  <button className="px-4 py-2 bg-surface-container-lowest border-2 border-dashed border-primary/40 text-primary hover:bg-primary/5 rounded-full text-sm font-bold flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add Segment
                  </button>
                </div>
              </div>
              
              <div className="border border-outline-variant/50 rounded-xl overflow-hidden shadow-sm flex flex-col">
                {/* Rich Text Toolbar */}
                <div className="bg-surface-container p-2 border-b border-outline-variant/50 flex flex-wrap items-center gap-1">
                  <button className="p-2 hover:bg-white rounded-lg text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
                  <button className="p-2 hover:bg-white rounded-lg text-on-surface-variant transition-colors"><span class="material-symbols-outlined text-[20px]">format_italic</span></button>
                  <button className="p-2 hover:bg-white rounded-lg text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
                  <div className="w-px h-6 bg-outline-variant/40 mx-2"></div>
                  <button className="p-2 hover:bg-white rounded-lg text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">link</span></button>
                  <button className="p-2 hover:bg-white rounded-lg text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">image</span></button>
                  <button className="p-2 hover:bg-white rounded-lg text-on-surface-variant transition-colors ml-auto"><span className="material-symbols-outlined text-[20px]">code</span></button>
                </div>
                <textarea 
                  className="w-full p-5 text-on-surface bg-white border-none focus:ring-0 resize-none min-h-[300px] outline-none" 
                  placeholder="Write your message here... Use {first_name} for personalization." 
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual Preview (Bento Item) */}
        <div className="lg:col-span-4 flex flex-col">
           <div className="bg-primary/5 border border-primary/20 rounded-[24px] p-6 relative overflow-hidden group h-full shadow-sm">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
             
             <div className="relative z-10 h-full flex flex-col">
               <div className="flex items-center gap-2 mb-8">
                  <span className="material-symbols-outlined text-primary text-[20px]">smartphone</span>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Live Preview</h4>
               </div>
               
               <div className="max-w-[300px] w-full mx-auto bg-white rounded-[2rem] border-[8px] border-surface-container-highest p-4 shadow-2xl flex-1 flex flex-col">
                 <div className="w-12 h-1.5 bg-surface-container-highest rounded-full mx-auto mb-6"></div>
                 
                 <div className="flex items-start gap-3 bg-surface-container-low p-4 rounded-2xl mb-4 border border-outline-variant/30 shadow-sm relative group/notif cursor-pointer hover:border-primary/40 transition-colors">
                   <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover/notif:scale-110 transition-transform">
                     <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                   </div>
                   <div className="overflow-hidden">
                     <p className="text-sm font-bold text-primary mb-0.5 truncate">Upcycle Milestone!</p>
                     <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">You've helped divert 50kg of plastic from landfills this month. Check out your new badges...</p>
                   </div>
                   <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full"></div>
                 </div>
                 
                 {/* Skeleton Content */}
                 <div className="flex flex-col gap-3 mt-2 px-2 opacity-50">
                   <div className="h-4 bg-surface-container rounded-lg w-3/4"></div>
                   <div className="h-4 bg-surface-container rounded-lg w-full"></div>
                   <div className="h-4 bg-surface-container rounded-lg w-5/6"></div>
                 </div>
                 
                 <div className="mt-auto flex justify-center pt-8">
                   <div className="w-12 h-12 rounded-full bg-surface-container-high"></div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
