import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TwoFactorVerify() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    setError('');
    
    if (code.length < 6) {
      setError('Please enter the 6-digit code');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      // Mock successful verification
      navigate('/student');
    }, 1200);
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
            Verify Your <br/><span style={{ color: '#4f7942' }}>Identity</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6d766b', lineHeight: 1.6, maxWidth: '300px' }}>
            Enter the verification code from your authenticator app to continue.
          </p>
        </div>
        
        <div className="relative mt-8 z-20" style={{ height: '180px' }}>
          <div
            className="absolute inset-0 overflow-hidden flex items-center justify-center"
            style={{ borderRadius: '16px', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06)' }}
          >
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop" 
              alt="Security" 
            />
          </div>
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
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2d382d', marginBottom: '6px', letterSpacing: '-0.01em' }}>Authentication Code</h2>
          <p style={{ fontSize: '1rem', color: '#6d766b' }}>Enter the 6-digit code from your authenticator app.</p>
        </div>
        
        {error && (
          <div
            style={{
              background: '#fef2f2',
              color: '#991b1b',
              padding: '12px 16px',
              borderRadius: '12px',
              marginBottom: '20px',
              fontSize: '0.875rem',
              fontWeight: 500,
              border: '1px solid #fecaca',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleVerify} className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <input 
              type="text" 
              placeholder="000000" 
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
              className="w-full max-w-[300px] text-center text-4xl tracking-[0.5em] font-mono border-2 border-[#dce0d9] rounded-2xl py-6 bg-[#f6f7f2] text-[#2d382d] outline-none focus:border-[#4f7942] focus:bg-white transition-all shadow-inner"
              autoFocus
            />
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
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
                  Verify & Sign In
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                </>
              )}
            </button>
          </div>
          
          <div className="text-center mt-4">
             <button type="button" className="text-[#4f7942] font-semibold text-sm hover:underline">
               Use recovery code instead
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
