import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authFetch } from '../../utils/authFetch';

export default function KycVerification() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [uploadedFile, setUploadedFile] = useState('certificate_final.pdf');
  const [idFileUploaded, setIdFileUploaded] = useState(false);
  
  const [formData, setFormData] = useState({
    registrationNumber: 'REG-2024-8891',
    issuingAuthority: 'Municipal Governance Authority',
    documentsUrl: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return alert('Please certify the accuracy of your documents before submitting.');
    setIsSubmitting(true);

    try {
      const docs = formData.documentsUrl.length > 0 ? formData.documentsUrl : ['mock-kyc-cert.pdf'];
      
      await authFetch(`${import.meta.env.VITE_API_URL}/api/users/kyc`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationNumber: formData.registrationNumber,
          issuingAuthority: formData.issuingAuthority,
          documentsUrl: docs
        })
      });

      setIsSubmitting(false);
      navigate('/vendor');
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      navigate('/vendor');
    }
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto py-8 px-4 sm:px-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header & Progress Bar */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[40px] font-bold text-[#0d1e25] mb-2 tracking-tight">
          Vendor Verification
        </h2>
        <p className="text-base sm:text-lg text-[#556158] mb-8 max-w-xl mx-auto">
          Complete your professional profile to join our global eco-marketplace.
        </p>
        
        <div className="max-w-xl mx-auto flex items-center justify-between relative px-4">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-[#bec9be]/40 -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-8 w-1/2 h-[2px] bg-[#00522d] -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#00522d] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              <span className="material-symbols-outlined text-[18px]">check</span>
            </div>
            <span className="mt-2 text-xs font-bold text-[#00522d]">Basic Info</span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#00522d] text-white flex items-center justify-center font-bold text-sm ring-4 ring-[#9cf6ba] shadow-sm">
              2
            </div>
            <span className="mt-2 text-xs font-bold text-[#00522d]">KYC Docs</span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#dff1fb] text-[#556158] flex items-center justify-center font-bold text-sm border border-[#bec9be]/40">
              3
            </div>
            <span className="mt-2 text-xs font-bold text-[#556158]">Review</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* KYC Form Section (Span 12 / 8) */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Identity Proof Card */}
            <div className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center text-[#00522d]">
                  <span className="material-symbols-outlined text-xl">fingerprint</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0d1e25] tracking-tight">Identity Proof</h3>
              </div>

              <div 
                onClick={() => setIdFileUploaded(true)}
                className="border-2 border-dashed border-[#bec9be]/60 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center bg-[#f4faff] hover:bg-[#dff1fb]/50 transition-colors cursor-pointer group text-center"
              >
                <span className="material-symbols-outlined text-5xl text-[#6f7a70] mb-3 group-hover:text-[#00522d] transition-colors">
                  {idFileUploaded ? 'task_alt' : 'upload_file'}
                </span>
                <p className="font-bold text-base text-[#0d1e25] mb-1">
                  {idFileUploaded ? 'National_ID_Verified.pdf Attached' : 'Drop your Passport or National ID here'}
                </p>
                <p className="text-xs text-[#556158]">Max size 10MB. Formats: PDF, PNG, JPG</p>
                <button 
                  type="button" 
                  className="mt-5 px-6 py-2 rounded-full border border-[#00522d] text-[#00522d] font-bold text-xs hover:bg-[#00522d]/5 transition-colors cursor-pointer"
                >
                  {idFileUploaded ? 'Change File' : 'Select Files'}
                </button>
              </div>
            </div>

            {/* Business Certificate Card */}
            <div className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center text-[#00522d]">
                  <span className="material-symbols-outlined text-xl">badge</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0d1e25] tracking-tight">Business Certificate</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3f4941] block ml-1">Registration Number</label>
                  <input
                    type="text"
                    required
                    value={formData.registrationNumber}
                    onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                    placeholder="e.g. REG-2024-8891"
                    className="w-full px-4 py-3 bg-[#e7f6ff]/40 border border-[#bec9be]/50 rounded-xl text-sm text-[#0d1e25] focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3f4941] block ml-1">Issuing Authority</label>
                  <input
                    type="text"
                    required
                    value={formData.issuingAuthority}
                    onChange={(e) => setFormData({ ...formData, issuingAuthority: e.target.value })}
                    placeholder="e.g. Municipal Governance"
                    className="w-full px-4 py-3 bg-[#e7f6ff]/40 border border-[#bec9be]/50 rounded-xl text-sm text-[#0d1e25] focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {uploadedFile && (
                <div className="p-3.5 bg-[#e7f6ff]/50 rounded-xl border border-[#bec9be]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#556158]">description</span>
                    <div>
                      <p className="text-sm font-bold text-[#0d1e25]">{uploadedFile}</p>
                      <p className="text-xs text-[#556158]">1.2 MB • Uploaded 2m ago</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setUploadedFile(null)}
                    className="text-[#ba1a1a] p-1.5 hover:bg-[#ffdad6] rounded-full transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              )}
            </div>

            {/* Sustainability Portfolio (Glassmorphism Card) */}
            <div 
              className="rounded-[24px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00522d]/10 flex items-center justify-center text-[#00522d]">
                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0d1e25] tracking-tight">Sustainability Portfolio</h3>
                    <span className="text-xs font-bold text-[#00522d] uppercase">Optional</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#556158] mb-5 leading-relaxed">
                Showcase your environmental impact to stand out to municipal clients. Attach previous case studies, waste reduction reports, or eco-certifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-[#bec9be]/40 flex items-center gap-3 bg-white/60 hover:bg-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[#00522d]">add_circle</span>
                  <span className="text-sm font-semibold text-[#0d1e25]">Add Case Study</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#bec9be]/40 flex items-center gap-3 bg-white/60 hover:bg-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[#00522d]">link</span>
                  <span className="text-sm font-semibold text-[#0d1e25]">External Link</span>
                </div>
              </div>
            </div>

            {/* Certification & CTA */}
            <div className="p-2 space-y-5">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-[#bec9be] text-[#00522d] focus:ring-[#00522d]/20 transition-all cursor-pointer accent-[#00522d]"
                />
                <span className="text-xs sm:text-sm text-[#556158] group-hover:text-[#0d1e25] leading-relaxed transition-colors">
                  I hereby certify that the information provided is accurate and all documents uploaded are original and legally binding. I understand that misrepresentation will result in permanent exclusion from the Upcycle platform.
                </span>
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-4 px-8 bg-[#00522d] text-white rounded-full font-bold text-base shadow-lg hover:bg-[#003d21] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <span>Submit for Review</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => alert('Draft saved successfully.')}
                  className="w-full sm:w-auto py-4 px-8 bg-[#dff1fb] text-[#00522d] rounded-full font-bold text-base hover:bg-[#d4e5ef] transition-colors cursor-pointer"
                >
                  Save Draft
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Sidebar Info (Span 12 / 4) */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          {/* Why Verify Card */}
          <div className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 sm:p-8 shadow-sm space-y-6 sticky top-6">
            <h4 className="text-xl font-bold text-[#0d1e25] tracking-tight">Why verify?</h4>
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2eb872] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <div>
                  <p className="font-bold text-sm text-[#0d1e25]">Trusted Status</p>
                  <p className="text-xs text-[#556158] leading-relaxed">
                    Verified vendors receive a priority badge and appear first in search results for local councils.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2eb872] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  payments
                </span>
                <div>
                  <p className="font-bold text-sm text-[#0d1e25]">Faster Payments</p>
                  <p className="text-xs text-[#556158] leading-relaxed">
                    Automatic invoicing and escrow releases are only available to fully verified consultants.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2eb872] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  insights
                </span>
                <div>
                  <p className="font-bold text-sm text-[#0d1e25]">Impact Analytics</p>
                  <p className="text-xs text-[#556158] leading-relaxed">
                    Unlock detailed dashboards showing exactly how much CO2 your initiatives have saved.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#dff1fb]/60 border border-[#00522d]/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#00522d] text-[18px]">info</span>
                <span className="text-xs font-bold text-[#00522d] uppercase">Current Queue</span>
              </div>
              <p className="text-xs text-[#3f4941] leading-relaxed">
                Review takes approximately <strong className="text-[#0d1e25]">48 hours</strong>. Our team manually checks all legal certificates.
              </p>
            </div>

            {/* Help Widget */}
            <div className="p-4 rounded-2xl bg-[#00522d] text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">support_agent</span>
              </div>
              <div>
                <p className="font-bold text-sm">Need assistance?</p>
                <p className="text-xs text-[#9cf6ba]">Chat with our compliance team.</p>
              </div>
              <Link to="/support" className="ml-auto w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
