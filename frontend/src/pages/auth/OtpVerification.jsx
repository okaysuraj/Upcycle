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
    if (val && !/^\d+$/.test(val)) return;
    
    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
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
      setTimeout(() => {
        setIsVerifying(false);
        navigate('/student');
      }, 1000);
    }
  };

  const handleResend = () => {
    if (timeLeft <= 0) {
      alert('A new verification code has been sent to your registered email.');
      setTimeLeft(120);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center font-['Hanken_Grotesk',sans-serif]">
      {/* Branding Header */}
      <div className="mb-8 flex flex-col items-center space-y-2 text-center">
        <div className="w-14 h-14 bg-[#00522d] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00522d]/20 mb-1">
          <span className="material-symbols-outlined text-white text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            eco
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#00522d] tracking-tight">Upcycle</h1>
        <div className="flex items-center gap-1.5 bg-[#d9e6da] px-3 py-1 rounded-full">
          <span className="material-symbols-outlined text-[#556158] text-xs">verified_user</span>
          <span className="text-[11px] font-bold text-[#556158] uppercase tracking-wider">Secure Access</span>
        </div>
      </div>

      {/* Verification Card */}
      <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 sm:p-12 border border-[#bec9be]/30 shadow-xl shadow-[#0d1e25]/5">
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1e25] tracking-tight">Verification Code</h2>
            <p className="text-sm text-[#556158] max-w-[320px] mx-auto leading-relaxed">
              Enter the 6-digit code sent to your email. This ensures your account remains protected.
            </p>
          </div>

          {/* OTP Input Grid */}
          <div className="grid grid-cols-6 gap-2.5 sm:gap-3 w-full py-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder="•"
                className="w-full aspect-square text-center font-bold text-xl sm:text-2xl text-[#00522d] bg-[#dff1fb]/60 border-2 border-transparent rounded-2xl transition-all outline-none focus:border-[#00522d] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,82,45,0.1)]"
              />
            ))}
          </div>

          {/* Security Assurance */}
          <div className="flex items-center gap-2 text-[#556158] text-xs font-medium">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>End-to-end encrypted session</span>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleVerify}
            disabled={isVerifying || otp.join('').length < 6}
            className="w-full bg-[#00522d] text-white font-semibold text-sm py-4 px-8 rounded-full shadow-lg hover:bg-[#003d21] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isVerifying ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>Verify Account</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>

          {/* Resend & Timer */}
          <div className="pt-2 w-full">
            <div className="flex flex-col items-center space-y-1">
              <p className="text-xs text-[#556158]">Didn't receive the code?</p>
              <button 
                onClick={handleResend}
                disabled={timeLeft > 0}
                className={`text-xs font-bold text-[#00522d] transition-all ${
                  timeLeft > 0 ? 'opacity-60 cursor-not-allowed' : 'opacity-100 hover:underline cursor-pointer'
                }`}
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
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[860px]">
        <div 
          className="rounded-3xl p-5 flex items-start gap-4 border border-[#bec9be]/30 shadow-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="p-2.5 bg-[#d9e6da] rounded-xl text-[#00522d]">
            <span className="material-symbols-outlined text-xl">shield</span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0d1e25]">Encrypted</h4>
            <p className="text-[11px] text-[#556158] leading-tight mt-0.5">Your data is secured with AES-256 encryption.</p>
          </div>
        </div>

        <div 
          className="rounded-3xl p-5 flex items-start gap-4 border border-[#bec9be]/30 shadow-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="p-2.5 bg-[#d9e6da] rounded-xl text-[#00522d]">
            <span className="material-symbols-outlined text-xl">devices</span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0d1e25]">New Login</h4>
            <p className="text-[11px] text-[#556158] leading-tight mt-0.5">Accessing from secure verified municipal session.</p>
          </div>
        </div>

        <div 
          className="rounded-3xl p-5 flex items-start gap-4 border border-[#bec9be]/30 shadow-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="p-2.5 bg-[#d9e6da] rounded-xl text-[#00522d]">
            <span className="material-symbols-outlined text-xl">help</span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0d1e25]">Support</h4>
            <p className="text-[11px] text-[#556158] leading-tight mt-0.5">Having trouble? Contact our 24/7 eco-help desk.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
