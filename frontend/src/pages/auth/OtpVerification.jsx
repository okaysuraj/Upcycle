import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const inputsRef = useRef([]);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (isNaN(val)) return;
    
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Auto focus next input
    if (val && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length === 6) {
      setIsVerifying(true);
      // Simulate verification
      setTimeout(() => {
        setIsVerifying(false);
        navigate('/'); // On success
      }, 1000);
    }
  };

  const handleResend = () => {
    if (timeLeft <= 0) {
      alert('A new verification code has been dispatched to your primary email address.');
      setTimeLeft(120);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="bg-[#f4faff] min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-body-md text-on-surface">
      {/* Background Atmospheric Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#24502c]/5 rounded-full blur-[120px] -ml-72 -mb-72"></div>
      </div>

      <main className="relative z-10 w-full max-w-[1440px] px-5 flex flex-col items-center">
        {/* Branding Header */}
        <div className="mb-10 flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 animate-bounce">
            <span className="material-symbols-outlined text-white text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-primary tracking-tight">Upcycle</h1>
          <div className="flex items-center space-x-2 bg-[#d9e6da] px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-[#5b675e] text-sm">verified_user</span>
            <span className="text-xs font-bold text-[#5b675e] uppercase">Secure Access</span>
          </div>
        </div>

        {/* Verification Card */}
        <div className="w-full max-w-[520px] bg-white rounded-[32px] p-8 md:p-16 border border-[#bec9be]/30 shadow-xl shadow-[#0d1e25]/5">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-4xl font-bold text-on-surface">Verification Code</h2>
              <p className="text-base text-on-surface-variant max-w-[320px] mx-auto">
                Enter the 6-digit code sent to your email. This ensures your account remains protected.
              </p>
            </div>

            {/* OTP Input Grid */}
            <div className="grid grid-cols-6 gap-3 w-full py-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  placeholder="•"
                  className="w-full aspect-square text-center font-display text-2xl font-bold text-primary bg-[#dff1fb] border-2 border-transparent rounded-2xl transition-all outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,82,45,0.1)]"
                />
              ))}
            </div>

            {/* Security Assurance */}
            <div className="flex items-center space-x-3 text-on-surface-variant/60 text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              <span>End-to-end encrypted session</span>
            </div>

            {/* Action Button */}
            <button 
              onClick={handleVerify}
              disabled={isVerifying || otp.join('').length < 6}
              className="w-full bg-primary text-white font-bold text-sm py-4 px-10 rounded-full shadow-lg shadow-primary/20 hover:bg-[#006d3e] transition-all active:scale-[0.98] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isVerifying ? 'Verifying...' : 'Verify Account'}</span>
              {!isVerifying && <span className="material-symbols-outlined">arrow_forward</span>}
            </button>

            {/* Resend & Timer */}
            <div className="pt-3 w-full">
              <div className="flex flex-col items-center space-y-2">
                <p className="text-sm font-bold text-on-surface-variant">Didn't receive the code?</p>
                <button 
                  onClick={handleResend}
                  disabled={timeLeft > 0}
                  className={`text-sm font-bold text-primary transition-all ${timeLeft > 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:underline'}`}
                >
                  {timeLeft > 0 ? (
                    <>Resend code in <span className="font-bold">{timeDisplay}</span></>
                  ) : (
                    'Resend code now'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Security Features (Glass Bento Style) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[900px]">
          <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-3xl p-6 flex items-start space-x-6">
            <div className="p-2 bg-[#d9e6da] rounded-xl text-[#5b675e]">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <div>
              <h4 className="text-sm text-on-surface font-bold">Encrypted</h4>
              <p className="text-xs text-on-surface-variant font-bold">Your data is secured with AES-256 encryption.</p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-3xl p-6 flex items-start space-x-6">
            <div className="p-2 bg-[#d9e6da] rounded-xl text-[#5b675e]">
              <span className="material-symbols-outlined">devices</span>
            </div>
            <div>
              <h4 className="text-sm text-on-surface font-bold">New Login</h4>
              <p className="text-xs text-on-surface-variant font-bold">Accessing from San Francisco, US (Chrome)</p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-[#a5d6a7]/30 rounded-3xl p-6 flex items-start space-x-6">
            <div className="p-2 bg-[#d9e6da] rounded-xl text-[#5b675e]">
              <span className="material-symbols-outlined">help</span>
            </div>
            <div>
              <h4 className="text-sm text-on-surface font-bold">Support</h4>
              <p className="text-xs text-on-surface-variant font-bold">Having trouble? Contact our eco-help desk.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-on-surface-variant opacity-60">
          <p className="text-xs font-bold tracking-widest uppercase">© 2024 Upcycle Municipal Systems</p>
        </footer>
      </main>
    </div>
  );
}
