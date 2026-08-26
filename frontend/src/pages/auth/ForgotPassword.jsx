import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const auth = getAuth();
    
    try {
      await sendPasswordResetEmail(auth, email);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1200);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to send reset email.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[540px] font-['Hanken_Grotesk',sans-serif] animate-in fade-in zoom-in duration-500">
      {/* Branding Header */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="w-14 h-14 bg-[#00522d] rounded-2xl flex items-center justify-center shadow-lg mb-4">
          <span className="material-symbols-outlined text-white text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            eco
          </span>
        </div>
        <h1 className="text-4xl font-bold text-[#00522d] tracking-tight">Upcycle</h1>
        <p className="text-xs font-semibold text-[#556158] uppercase tracking-widest mt-1.5">
          Municipal Resource Management
        </p>
      </div>

      {/* The System Card */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-xl shadow-[#00522d]/5 border border-[#bec9be]/30">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold text-[#0d1e25] mb-2 tracking-tight">Forgot Password?</h2>
          <p className="text-base text-[#556158] leading-relaxed">
            Enter the email address associated with your coordinator account. We'll send a secure link to reset your credentials.
          </p>
        </header>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-[#ffdad6]/60 border border-[#ba1a1a]/30 text-[#93000a] text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#ba1a1a]">error</span>
            <span>{error}</span>
          </div>
        )}

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#3f4941] ml-1">
                Email Address
              </label>
              <div className="relative group flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-xl text-[#6f7a70] group-focus-within:text-[#00522d] transition-colors">
                  mail
                </span>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="coordination@city-gov.eco"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-[48px] pr-4 py-3.5 bg-[#e7f6ff]/40 border border-[#bec9be]/40 rounded-2xl focus:ring-4 focus:ring-[#00522d]/10 focus:border-[#00522d] focus:bg-white outline-none transition-all text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60"
                />
              </div>
            </div>

            {/* Action Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#00522d] text-white font-semibold text-base py-4 rounded-full hover:bg-[#003d21] hover:scale-[1.01] active:scale-[0.99] transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>Send Reset Link</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-5">
            <div className="p-5 bg-[#e7f6ff] border border-[#bec9be]/50 text-[#00522d] rounded-2xl text-center text-base">
              <span className="material-symbols-outlined text-3xl mb-2 block">mark_email_read</span>
              Check <strong className="text-[#0d1e25]">{email}</strong> for instructions to reset your password.
            </div>
            <button 
              onClick={() => { setSubmitted(false); setEmail(''); }}
              className="w-full py-3 px-6 rounded-full border border-[#00522d] text-[#00522d] font-semibold text-sm hover:bg-[#00522d]/5 transition-all cursor-pointer"
            >
              Send another link
            </button>
          </div>
        )}

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-[#bec9be]/20 flex flex-col items-center gap-4">
          <Link to="/login" className="group flex items-center gap-2 text-[#00522d] font-semibold text-sm transition-all hover:underline">
            <span className="material-symbols-outlined !text-[18px]">arrow_back</span>
            <span>Back to Login</span>
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div 
          className="rounded-2xl p-4 flex items-start gap-3 border border-[#bec9be]/30 shadow-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="bg-[#2eb872]/15 p-2 rounded-xl text-[#00522d]">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
          </div>
          <div>
            <p className="font-semibold text-xs text-[#0d1e25]">Secure Auth</p>
            <p className="text-[11px] text-[#556158] leading-tight">Industry standard TLS encryption</p>
          </div>
        </div>
        
        <div 
          className="rounded-2xl p-4 flex items-start gap-3 border border-[#bec9be]/30 shadow-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="bg-[#3c6842]/15 p-2 rounded-xl text-[#00522d]">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              support_agent
            </span>
          </div>
          <div>
            <p className="font-semibold text-xs text-[#0d1e25]">Support</p>
            <p className="text-[11px] text-[#556158] leading-tight">24/7 technical assistance available</p>
          </div>
        </div>
      </div>
    </div>
  );
}