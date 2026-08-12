import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPasswordSuccess() {
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
            Access <br/><span style={{ color: '#4f7942' }}>Restored</span>
          </h1>
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
        className="col-span-12 lg:col-span-7 flex flex-col justify-center items-center text-center"
        style={{
          background: '#ffffff',
          borderRadius: '32px',
          boxShadow: '0 8px 32px rgba(45, 56, 45, 0.08), 0 1px 4px rgba(45, 56, 45, 0.04)',
          border: '1px solid rgba(220, 224, 217, 0.5)',
          padding: '64px 48px',
        }}
      >
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
           <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#4f7942' }}>check_circle</span>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2d382d', marginBottom: '12px', letterSpacing: '-0.01em' }}>Password Updated!</h2>
        <p style={{ fontSize: '1.05rem', color: '#6d766b', marginBottom: '32px', maxWidth: '350px' }}>
          Your password has been successfully reset. You can now use your new password to log in to your account.
        </p>
        
        <Link 
          to="/login"
          style={{
            width: '100%',
            maxWidth: '350px',
            padding: '16px',
            background: '#4f7942',
            color: '#ffffff',
            borderRadius: '16px',
            fontSize: '1.05rem',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(79, 121, 66, 0.4)',
            transition: 'all 0.2s',
          }}
        >
          Return to Sign In
          <span className="material-symbols-outlined text-sm">login</span>
        </Link>
      </div>
    </div>
  );
}
