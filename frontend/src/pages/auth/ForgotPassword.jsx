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
      }, 1500); // Simulate network delay for UX
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to send reset email.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f4faff] min-h-screen flex items-center justify-center p-6 relative w-full overflow-hidden">
      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-[1440px] flex justify-center">
        {/* Focused Reset Card */}
        <div className="w-full max-w-[540px] animate-in fade-in zoom-in duration-700">
          
          {/* Branding Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-16 h-16 bg-[#006d3e] rounded-2xl flex items-center justify-center shadow-lg mb-6">
              <span className="material-symbols-outlined text-white !text-[32px]">eco</span>
            </div>
            <h1 className="font-display text-5xl font-bold text-primary tracking-tight">Upcycle</h1>
            <p className="font-bold text-sm text-secondary uppercase tracking-widest mt-2">Municipal Resource Management</p>
          </div>

          {/* The System Card */}
          <div className="bg-white rounded-[32px] p-10 shadow-xl shadow-primary/5 border border-[#bec9be]/30">
            <header className="mb-10">
              <h2 className="font-display text-4xl font-bold text-on-surface mb-2">Forgot Password?</h2>
              <p className="text-base text-on-surface-variant">
                Enter the email address associated with your coordinator account. We'll send a secure link to reset your credentials.
              </p>
            </header>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-error font-bold text-sm">{error}</p>}
                
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-on-surface ml-2">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-[#6f7a70] group-focus-within:text-primary transition-colors">mail</span>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="coordination@city-gov.eco"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-[52px] pr-6 py-4 bg-[#f3f4f5] border border-[#bec9be]/40 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-body-md text-on-surface placeholder:text-[#6f7a70]"
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold text-xl py-4 rounded-full hover:bg-[#006d3e] transition-all hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">sync</span>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                 <div className="mt-6 p-6 bg-[#80d99f]/20 text-[#00210f] rounded-xl text-center font-bold text-base animate-bounce">
                    Check <strong>{email}</strong> for instructions.
                 </div>
                 <button 
                    onClick={() => { setSubmitted(false); setEmail(''); }}
                    className="w-full py-4 rounded-full border border-primary text-primary font-bold hover:bg-primary/5 transition-all"
                 >
                    Send another link
                 </button>
              </div>
            )}

            {/* Footer Links */}
            <div className="mt-10 pt-8 border-t border-[#bec9be]/20 flex flex-col items-center gap-6">
              <Link to="/login" className="group flex items-center gap-2 text-primary font-bold text-sm transition-all hover:underline">
                <span className="material-symbols-outlined !text-[18px]">arrow_back</span>
                <span>Back to Login</span>
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-[#2eb872]/10 p-2 rounded-xl">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <div>
                <p className="font-bold text-sm text-on-surface">Secure Auth</p>
                <p className="text-[11px] text-on-surface-variant leading-tight font-bold">Industry standard TLS encryption</p>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-[#3c6842]/10 p-2 rounded-xl">
                <span className="material-symbols-outlined text-[#24502c]" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              </div>
              <div>
                <p className="font-bold text-sm text-on-surface">Support</p>
                <p className="text-[11px] text-on-surface-variant leading-tight font-bold">24/7 technical assistance available</p>
              </div>
            </div>
          </div>

          {/* Footer Compliance */}
          <footer className="mt-16 text-center">
            <p className="text-xs font-bold text-[#6f7a70] uppercase tracking-tighter">
              © 2024 Upcycle Systems • Municipal Data Protection Policy Applied
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}