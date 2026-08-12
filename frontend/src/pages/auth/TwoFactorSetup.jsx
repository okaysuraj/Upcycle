import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TwoFactorSetup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/2fa-verify');
    }, 800);
  };

  return (
    <div className="grid grid-cols-12 gap-6 w-full max-w-5xl">
      {/* Branding Side */}
      <div
        className="hidden lg:flex col-span-5 relative flex-col justify-between"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(165, 214, 167, 0.3)',
          borderRadius: '24px',
          padding: '40px 32px',
          boxShadow: '0 4px 24px rgba(45, 56, 45, 0.06)',
          overflow: 'hidden'
        }}
      >
        <div className="relative z-20">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-11 h-11 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #4f7942 0%, #6a9b5c 100%)',
                borderRadius: '14px',
                boxShadow: '0 4px 12px rgba(79, 121, 66, 0.3)',
              }}
            >
              <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2d382d', letterSpacing: '-0.02em' }}>Upcycle</span>
          </div>
          
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#2d382d', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Secure Your <br/><span style={{ color: '#4f7942' }}>Account</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6d766b', lineHeight: 1.6, maxWidth: '300px' }}>
            Two-factor authentication adds an extra layer of security to your eco-dashboard.
          </p>
        </div>
        
        {/* Abstract decoration */}
        <div
          className="absolute"
          style={{
            bottom: '-40px',
            right: '-40px',
            width: '250px',
            height: '250px',
            background: 'rgba(79, 121, 66, 0.06)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="col-span-12 lg:col-span-7 flex flex-col"
        style={{
          background: '#ffffff',
          borderRadius: '32px',
          boxShadow: '0 8px 32px rgba(45, 56, 45, 0.08), 0 1px 4px rgba(45, 56, 45, 0.04)',
          border: '1px solid rgba(220, 224, 217, 0.5)',
          padding: '48px',
        }}
      >
        <div className="mb-8">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2d382d', marginBottom: '6px', letterSpacing: '-0.01em' }}>Setup 2FA</h2>
          <p style={{ fontSize: '1rem', color: '#6d766b' }}>Scan this QR code with your authenticator app (e.g. Google Authenticator).</p>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <div 
            className="p-4 bg-white mb-6"
            style={{ 
              borderRadius: '24px', 
              boxShadow: '0 12px 40px rgba(45,56,45,0.08)', 
              border: '1px solid rgba(220, 224, 217, 0.8)'
            }}
          >
            {/* Mock QR Code */}
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-2 opacity-30">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className={`bg-gray-800 ${Math.random() > 0.5 ? 'rounded-sm' : ''} ${Math.random() > 0.7 ? 'opacity-0' : 'opacity-100'}`}></div>
                  ))}
                </div>
                <div className="absolute w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm z-10">
                  <span className="material-symbols-outlined text-[#4f7942]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
            </div>
          </div>

          <div className="w-full">
             <p className="text-sm font-semibold text-[#2d382d] mb-2">Can't scan the QR code?</p>
             <div className="flex items-center gap-2">
               <input 
                 type="text" 
                 value="ABCD-EFGH-IJKL-MNOP" 
                 readOnly 
                 className="flex-1 bg-[#f6f7f2] border border-[#dce0d9] rounded-xl px-4 py-3 font-mono text-sm text-[#4f7942] font-bold tracking-widest outline-none focus:border-[#4f7942]" 
               />
               <button 
                 className="h-11 w-11 flex items-center justify-center bg-[#f6f7f2] border border-[#dce0d9] rounded-xl hover:bg-[#eaf0e9] transition-colors"
                 title="Copy Code"
               >
                 <span className="material-symbols-outlined text-[#6d766b] text-sm">content_copy</span>
               </button>
             </div>
          </div>
        </div>
        
        <div className="mt-auto pt-6">
          <button
            onClick={handleContinue}
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              background: '#4f7942',
              color: '#ffffff',
              borderRadius: '16px',
              fontSize: '1.05rem',
              fontWeight: 700,
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.8 : 1,
              boxShadow: '0 4px 14px rgba(79, 121, 66, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
          >
            {loading ? (
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
              <>
                Continue to Verification
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
