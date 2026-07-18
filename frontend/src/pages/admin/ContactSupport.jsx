import React, { useState } from 'react';

export default function ContactSupport() {
  const [category, setCategory] = useState('System Performance');

  return (
    <div className="flex flex-col gap-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-md">
        <div>
          <h2 className="font-display text-display text-primary mb-1">Support Hub</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl">Connect with the system reliability team. For non-critical inquiries, use the email form or live chat. For system outages, utilize the priority hotline.</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-white border border-outline-variant/30 rounded-xl shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-md text-primary font-bold">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Urgent Failure Hotline */}
        <div className="lg:col-span-4 bg-primary-container text-white shadow-sm rounded-[24px] p-6 flex flex-col justify-between relative overflow-hidden group min-h-[300px]">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[32px] text-primary-fixed">emergency_home</span>
              <span className="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">Critical Priority</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white mb-2">Urgent System Failure</h3>
            <p className="font-body-md text-on-primary-container mb-6 opacity-90">Only for total infrastructure outages, security breaches, or site-wide downtime requiring immediate response.</p>
          </div>
          <div className="relative z-10">
            <div className="text-[10px] font-label-sm text-on-primary-container uppercase tracking-widest mb-1">Internal Hotline</div>
            <div className="text-[28px] font-bold text-white tracking-tighter">1-800-UPC-YCLE</div>
            <div className="mt-4 flex gap-2">
              <button className="bg-white text-primary font-label-md px-6 py-2 rounded-full font-bold hover:bg-primary-fixed transition-colors active:scale-95">Call Now</button>
              <button className="border border-white/20 text-white font-label-md px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Notify CTO</button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[200px]">support_agent</span>
          </div>
        </div>

        {/* Email Support Form */}
        <div className="lg:col-span-8 bg-white/70 backdrop-blur-md rounded-[24px] border border-outline-variant/30 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[28px]">mail</span>
              <h3 className="font-headline-md text-headline-md">Email Support Request</h3>
            </div>
            <span className="font-label-md text-on-surface-variant">Est. response: <span className="font-bold text-primary">2-4 Hours</span></span>
          </div>
          <form className="space-y-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-label-md text-on-surface-variant">Ticket Category</label>
                <select 
                  className="w-full bg-white border border-outline-variant/30 rounded-xl p-3 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option>System Performance</option>
                  <option>Account & Permissions</option>
                  <option>Inventory Reconciliation</option>
                  <option>Moderation Tool Bug</option>
                  <option>Feature Request</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-label-md text-on-surface-variant">Admin ID (System Auto-fill)</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-3 text-body-md cursor-not-allowed" readOnly type="text" defaultValue="ADM-7742-PX" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-label-md text-on-surface-variant">Subject Heading</label>
              <input className="w-full bg-white border border-outline-variant/30 rounded-xl p-3 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder="Brief summary of the issue..." type="text" />
            </div>
            <div className="space-y-2 flex-1">
              <label className="block font-label-md text-on-surface-variant">Detailed Description</label>
              <textarea className="w-full bg-white border border-outline-variant/30 rounded-xl p-3 text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none" placeholder="Describe the steps to reproduce, expected results, and actual results..." rows={6}></textarea>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <button type="button" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md">
                  <span className="material-symbols-outlined text-[20px]">attach_file</span> Attach Logs
                </button>
                <button type="button" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md">
                  <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span> Screenshots
                </button>
              </div>
              <button className="bg-primary text-white px-10 py-3 rounded-full font-bold font-label-md hover:opacity-90 transition-all active:scale-95 shadow-sm" type="submit">
                Submit Ticket
              </button>
            </div>
          </form>
        </div>

        {/* Live Chat Status */}
        <div className="lg:col-span-4 bg-white/70 backdrop-blur-md rounded-[24px] border border-outline-variant/30 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[28px]">chat</span>
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary border-4 border-white rounded-full"></span>
            </div>
            <div>
              <h4 className="font-label-md font-bold text-primary">Online Live Chat</h4>
              <p className="text-body-md text-on-surface-variant">3 agents available now</p>
            </div>
          </div>
          <button className="border border-primary text-primary font-label-md px-4 py-2 rounded-full hover:bg-primary/5 transition-colors font-bold">Start Chat</button>
        </div>

        {/* FAQ Section */}
        <div className="lg:col-span-8 bg-white rounded-[24px] border border-outline-variant/30 p-6">
          <h3 className="font-headline-md text-headline-md mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'How do I reset my admin credentials?', a: 'Navigate to Settings > Security > Reset Credentials and follow the two-factor verification process.' },
              { q: 'What SLA does support follow?', a: 'Critical issues: 30 min response. High: 2 hours. Standard: 4-8 hours. Low priority: 24 hours.' },
              { q: 'Can I escalate a ticket?', a: 'Yes, use the escalation button on any open ticket or contact your assigned account manager directly.' }
            ].map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-ice border border-outline-variant/10 hover:border-primary/20 transition-colors cursor-pointer">
                <h4 className="font-label-md font-bold text-on-surface mb-2">{faq.q}</h4>
                <p className="text-body-md text-on-surface-variant">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
