import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPasswordSuccess() {
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
            Access <br/><span className="text-[#00522d]">Restored</span>
          </h1>

          <p className="text-[17px] leading-[26px] text-[#556158] max-w-xs font-normal">
            Your account security has been verified and updated.
          </p>
        </div>

        {/* Abstract decoration */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00522d]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div
        className="col-span-12 lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 lg:p-[64px] shadow-lg flex flex-col justify-center items-center text-center border border-[#bec9be]/30"
      >
        <div className="w-20 h-20 bg-[#2eb872]/15 text-[#00522d] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#2eb872]/30">
          <span className="material-symbols-outlined text-[40px] text-[#00522d]">check_circle</span>
        </div>
        <h2 className="text-[32px] font-semibold text-[#0d1e25] mb-2 tracking-[-0.01em]">Password Updated!</h2>
        <p className="text-base text-[#556158] mb-8 max-w-[360px] leading-relaxed">
          Your password has been successfully reset. You can now use your new credentials to log in to your account.
        </p>
        
        <Link 
          to="/login"
          className="w-full max-w-[360px] py-4 px-6 bg-[#00522d] text-white font-semibold text-base rounded-full shadow-lg hover:shadow-[#00522d]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Return to Sign In</span>
          <span className="material-symbols-outlined text-[20px]">login</span>
        </Link>
      </div>
    </div>
  );
}

