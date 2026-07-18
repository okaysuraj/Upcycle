import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { authFetch } from '../../utils/authFetch';

export default function KycVerification() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  
  const [formData, setFormData] = useState({
    registrationNumber: '',
    issuingAuthority: '',
    documentsUrl: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return alert('Please agree to the certification');
    setIsSubmitting(true);

    try {
      // Mock document URL since we don't have real file upload in place yet
      const docs = formData.documentsUrl.length > 0 ? formData.documentsUrl : ['mock-doc-url.pdf'];
      
      await authFetch(`${import.meta.env.VITE_API_URL}/api/users/kyc`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documentsUrl: docs
        })
      });

      setIsSubmitting(false);
      navigate('/');
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto p-8 relative">
      {/* Header & Progress Bar */}
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-on-background mb-2">Vendor Verification</h2>
        <p className="text-lg text-on-surface-variant mb-10">Complete your professional profile to join our global eco-marketplace.</p>
        
        <div className="max-w-2xl mx-auto flex items-center justify-between relative px-2">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#cce6d0] -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-0 w-1/2 h-[2px] bg-primary -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
              <span className="material-symbols-outlined text-[20px]">check</span>
            </div>
            <span className="mt-2 text-xs font-bold text-primary">Basic Info</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm ring-4 ring-[#9cf6ba]">
              2
            </div>
            <span className="mt-2 text-xs font-bold text-primary">KYC Docs</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#cce6d0] text-[#506856] flex items-center justify-center font-bold text-sm">
              3
            </div>
            <span className="mt-2 text-xs font-bold text-secondary">Review</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* KYC Form Section */}
        <section className="col-span-1 md:col-span-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Identity Proof Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#f4faff] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">fingerprint</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">Identity Proof</h3>
              </div>
              <div className="border-2 border-dashed border-[#bec9be]/50 rounded-xl p-10 flex flex-col items-center justify-center bg-[#f4faff] hover:bg-[#dff1fb] transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-5xl text-[#6f7a70] mb-2 group-hover:text-primary transition-colors">upload_file</span>
                <p className="font-bold text-sm text-on-surface mb-1">Drop your Passport or National ID here</p>
                <p className="text-xs text-on-surface-variant">Max size 10MB. Formats: PDF, PNG, JPG</p>
                <button type="button" className="mt-6 px-10 py-2 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary/5">Select Files</button>
              </div>
            </Card>

            {/* Business Certificate Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#f4faff] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">badge</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">Business Certificate</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <Input 
                  label="Registration Number" 
                  placeholder="e.g. REG-2024-8891" 
                  value={formData.registrationNumber}
                  onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
                />
                <Input 
                  label="Issuing Authority" 
                  placeholder="e.g. Municipal Governance" 
                  value={formData.issuingAuthority}
                  onChange={(e) => setFormData({...formData, issuingAuthority: e.target.value})}
                />
              </div>
            </Card>

            {/* Sustainability Portfolio (Glassmorphism Card) */}
            <Card className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-on-surface">Sustainability Portfolio</h3>
                  <span className="text-xs font-bold text-primary uppercase">Optional</span>
                </div>
              </div>
              <p className="text-base text-on-surface-variant mb-6">
                Showcase your environmental impact to stand out to municipal clients. Attach previous case studies, waste reduction reports, or eco-certifications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-3 rounded-xl border border-[rgba(165,214,167,0.3)] flex items-center gap-3 hover:bg-white/40 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-secondary">add_circle</span>
                  <span className="text-sm font-bold">Add Case Study</span>
                </div>
                <div className="p-3 rounded-xl border border-[rgba(165,214,167,0.3)] flex items-center gap-3 hover:bg-white/40 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-secondary">link</span>
                  <span className="text-sm font-bold">External Link</span>
                </div>
              </div>
            </Card>

            {/* Certification & CTA */}
            <div className="pt-6">
              <label className={`flex items-start gap-6 cursor-pointer group mb-10 transition-colors ${agreed ? 'bg-primary/5 rounded-xl p-4' : ''}`}>
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-[#6f7a70] text-primary focus:ring-primary/20 cursor-pointer" 
                  />
                </div>
                <span className="text-base text-on-surface-variant group-hover:text-on-surface transition-colors">
                  I hereby certify that the information provided is accurate and all documents uploaded are original and legally binding. I understand that misrepresentation will result in permanent exclusion from the Upcycle platform.
                </span>
              </label>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 px-16 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                      Submitting...
                    </>
                  ) : (
                    'Submit for Review'
                  )}
                </button>
                <button type="button" className="px-16 py-4 bg-[#cce6d0] text-[#506856] rounded-full font-bold text-lg hover:bg-[#cee9d3] transition-colors w-full md:w-auto">
                  Save Draft
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Sidebar Info */}
        <aside className="col-span-1 md:col-span-4 space-y-6">
          <Card className="sticky top-24 p-6">
            <h4 className="font-display text-2xl font-bold text-on-surface mb-6">Why verify?</h4>
            <div className="space-y-10">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#2eb872] mt-1">verified</span>
                <div>
                  <p className="font-bold text-sm">Trusted Status</p>
                  <p className="text-xs text-on-surface-variant">Verified vendors receive a priority badge and appear first in search results for local councils.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#2eb872] mt-1">payments</span>
                <div>
                  <p className="font-bold text-sm">Faster Payments</p>
                  <p className="text-xs text-on-surface-variant">Automatic invoicing and escrow releases are only available to fully verified consultants.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#2eb872] mt-1">insights</span>
                <div>
                  <p className="font-bold text-sm">Impact Analytics</p>
                  <p className="text-xs text-on-surface-variant">Unlock detailed dashboards showing exactly how much CO2 your initiatives have saved.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 rounded-2xl bg-[#dff1fb] border border-primary/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                <span className="text-xs font-bold text-primary uppercase">Current Queue</span>
              </div>
              <p className="text-base text-[#00522d]">Review takes approximately <span className="font-bold">48 hours</span>. Our team manually checks all legal certificates.</p>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
