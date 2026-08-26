import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function TwoFactorSetup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText('UPCY-CLE2-FA89-SEC9');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/2fa-verify');
    }, 800);
  };

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6 w-full max-w-5xl items-stretch font-['Hanken_Grotesk',sans-serif]">
      {/* Branding Side */}
      <div
        className="hidden lg:flex col-span-5 rounded-[24px] p-8 lg:p-10 flex-col justify-between shadow-sm overflow-hidden relative"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(165, 214, 167, 0.3)',
        }}
      >
        <div className="relative z-20">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 bg-[#00522d] rounded-full flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
            </div>
            <span className="text-2xl font-bold text-[#00522d] tracking-tight">Upcycle</span>
          </div>
          
          <h1 className="text-[38px] font-bold text-[#0d1e25] leading-[1.18] mb-4 tracking-[-0.02em]">
            Secure Your <br/><span className="text-[#00522d]">Account</span>
          </h1>
          <p className="text-[17px] leading-[26px] text-[#556158] max-w-xs font-normal">
            Two-factor authentication adds an essential layer of security to your municipal credentials and environmental data.
          </p>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00522d]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div
        className="col-span-12 lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 lg:p-12 shadow-lg flex flex-col justify-between border border-[#bec9be]/30"
      >
        <div>
          <h2 className="text-[28px] font-bold text-[#0d1e25] mb-2 tracking-tight">Setup 2FA</h2>
          <p className="text-sm text-[#556158] mb-8">
            Scan this QR code with your authenticator app (e.g. Google Authenticator, Authy, or Microsoft Authenticator).
          </p>
          
          <div className="flex flex-col items-center mb-8">
            <div 
              className="p-5 bg-white mb-5 rounded-[24px] border border-[#bec9be]/40 shadow-md"
            >
              {/* Mock QR Code Pattern */}
              <div className="w-48 h-48 bg-[#f4faff] rounded-xl flex items-center justify-center border border-dashed border-[#00522d]/30 relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1.5 p-3 opacity-25">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className={`bg-[#00522d] ${i % 2 === 0 ? 'rounded-sm' : ''} ${i % 5 === 0 ? 'opacity-0' : 'opacity-100'}`}></div>
                  ))}
                </div>
                <div className="absolute w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md z-10 border border-[#00522d]/20">
                  <span className="material-symbols-outlined text-[#00522d] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    qr_code_2
                  </span>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-sm">
              <span className="text-xs text-[#556158] block mb-2 text-center">Can't scan the QR code?</span>
              <div className="flex items-center gap-2 bg-[#dff1fb]/50 p-2 rounded-xl border border-[#bec9be]/40">
                <input 
                  type="text" 
                  readOnly 
                  value="UPCY-CLE2-FA89-SEC9" 
                  className="bg-transparent border-none text-xs font-mono font-bold text-[#00522d] flex-1 px-2 tracking-wider focus:outline-none"
                />
                <button 
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-white text-[#00522d] rounded-lg border border-[#bec9be]/40 text-xs font-bold hover:bg-[#dff1fb] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'content_copy'}</span>
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button 
            onClick={handleContinue}
            disabled={loading}
            className="w-full py-4 px-8 bg-[#00522d] text-white font-semibold text-base rounded-full shadow-lg hover:bg-[#003d21] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>Continue to Verification</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>
          
          <p className="text-center mt-4 text-xs font-semibold text-[#556158]">
            <Link to="/login" className="hover:text-[#00522d] transition-colors">
              I will set this up later
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
