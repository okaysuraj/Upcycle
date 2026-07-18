import React, { useState } from 'react';

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Upcycle Admin?',
      answer: 'Upcycle Admin is a high-performance centralized control plane designed for overseeing environmental data systems and material recovery facilities. It provides real-time monitoring of inventory flow, user management, and automated moderation for system alerts. The platform balances high-density data visualization with an eco-conscious design language to ensure operational clarity and systemic reliability.'
    },
    {
      question: 'How do I access the System Health dashboard?',
      answer: 'Administrators can access the System Health dashboard via the primary sidebar navigation. This section contains real-time telemetry from all connected material nodes, including sparklines for throughput metrics and critical error logs. For advanced diagnostics, you can toggle "Expert View" in the top-right corner of the health screen.'
    }
  ];

  const securityFaqs = [
    {
      question: 'What are the MFA requirements for administrators?',
      answer: 'Multi-Factor Authentication (MFA) is mandatory for all accounts with "System Admin" or "Superuser" privileges. Supported methods include Time-based One-Time Passwords (TOTP) and Hardware Security Keys (FIDO2).'
    }
  ];

  return (
    <div className="flex flex-col gap-md">
      {/* Hero Header Section */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm rounded-full mb-4 uppercase tracking-widest font-bold">
          Knowledge Base
        </div>
        <h2 className="font-display text-headline-lg text-primary mb-4 font-bold">Support & Documentation</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Comprehensive resources for system administrators. Find answers to common technical queries, operational workflows, and security protocols.
        </p>
      </section>

      {/* Search & Contact Bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-12 p-6 bg-white border border-outline-variant/30 rounded-[24px] shadow-sm">
        <div className="flex-1 min-w-[300px]">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 font-bold">Need specific help?</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Our support team is available 24/7 for critical incidents.</p>
        </div>
        <button className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md">
          <span className="material-symbols-outlined text-[18px]">support_agent</span>
          Contact System Support
        </button>
      </div>

      {/* FAQ Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Category Navigation */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-2">
            <p className="font-label-sm text-outline uppercase tracking-widest px-2 mb-4 font-bold text-on-surface-variant">Categories</p>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-secondary-container text-on-secondary-container font-bold transition-all flex items-center justify-between group">
              <span>General</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all flex items-center justify-between group">
              <span>Security</span>
              <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all flex items-center justify-between group">
              <span>Billing</span>
              <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </button>
            
            <div className="mt-12 p-4 bg-white border border-outline-variant/30 rounded-xl shadow-sm">
              <p className="font-label-md text-on-surface font-bold mb-2">Resource Links</p>
              <ul className="space-y-3 text-primary font-body-sm font-bold">
                <li className="flex items-center gap-2 hover:underline cursor-pointer"><span className="material-symbols-outlined text-[16px]">menu_book</span> API Documentation</li>
                <li className="flex items-center gap-2 hover:underline cursor-pointer"><span className="material-symbols-outlined text-[16px]">terminal</span> CLI Guidelines</li>
                <li className="flex items-center gap-2 hover:underline cursor-pointer"><span className="material-symbols-outlined text-[16px]">verified_user</span> Compliance Portal</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Accordion Content */}
        <div className="lg:col-span-9 space-y-16">
          {/* General Section */}
          <section id="general" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/30 pb-4">
              <span className="material-symbols-outlined text-primary text-3xl">info</span>
              <h3 className="font-headline-md font-bold text-primary">General</h3>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden transition-all hover:border-primary/50 shadow-sm">
                  <button 
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-headline-sm font-bold text-on-surface">{faq.question}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-6 font-body-md text-on-surface-variant">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/30 pb-4">
              <span className="material-symbols-outlined text-primary text-3xl">security</span>
              <h3 className="font-headline-md font-bold text-primary">Security</h3>
            </div>
            
            <div className="space-y-4">
              {securityFaqs.map((faq, index) => (
                <div key={`sec-${index}`} className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden transition-all hover:border-primary/50 shadow-sm">
                  <button 
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => toggleFaq(`sec-${index}`)}
                  >
                    <span className="font-headline-sm font-bold text-on-surface">{faq.question}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${activeFaq === `sec-${index}` ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {activeFaq === `sec-${index}` && (
                    <div className="px-6 pb-6 font-body-md text-on-surface-variant">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
