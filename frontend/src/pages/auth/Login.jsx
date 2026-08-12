import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      // The AuthContext onAuthStateChanged will handle routing
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 w-full max-w-5xl">
      {/* Branding & Welcome Card (Visible on Desktop) */}
      <div
        className="hidden lg:flex col-span-5 overflow-hidden relative flex-col justify-between"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(165, 214, 167, 0.3)',
          borderRadius: '24px',
          padding: '40px 32px',
          boxShadow: '0 4px 24px rgba(45, 56, 45, 0.06)',
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
            Transforming <br/><span style={{ color: '#4f7942' }}>Municipal Waste</span> Into Wealth.
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6d766b', lineHeight: 1.6, maxWidth: '300px' }}>
            Access your Eco-Professional dashboard to manage city-wide recycling initiatives and impact reports.
          </p>
        </div>
        
        <div className="relative mt-8 z-20" style={{ height: '180px' }}>
          <div
            className="absolute inset-0 overflow-hidden flex items-center justify-center"
            style={{ borderRadius: '16px', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06)' }}
          >
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=2000&auto=format&fit=crop" 
              alt="Eco facility" 
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

      {/* Auth Form Card */}
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
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2d382d', marginBottom: '6px', letterSpacing: '-0.01em' }}>Sign In</h2>
          <p style={{ fontSize: '1rem', color: '#6d766b' }}>Welcome back! Please enter your credentials to continue.</p>
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

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d382d' }}>Email Address</label>
            <div className="relative flex items-center group">
              <span
                className="material-symbols-outlined absolute"
                style={{ left: '14px', color: '#8da388', fontSize: '20px', transition: 'color 0.2s' }}
              >
                mail
              </span>
              <input
                id="email"
                type="email"
                placeholder="coordinator@city-gov.eco"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 48px',
                  background: '#f6f7f2',
                  border: '1.5px solid #dce0d9',
                  borderRadius: '14px',
                  fontSize: '0.95rem',
                  color: '#2d382d',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#4f7942';
                  e.target.style.boxShadow = '0 0 0 3px rgba(79, 121, 66, 0.1)';
                  e.target.previousElementSibling.style.color = '#4f7942';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#dce0d9';
                  e.target.style.boxShadow = 'none';
                  e.target.previousElementSibling.style.color = '#8da388';
                }}
              />
            </div>
          </div>
          
          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="password" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d382d' }}>Password</label>
              <Link
                to="/forgot-password"
                style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4f7942', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative flex items-center group">
              <span
                className="material-symbols-outlined absolute"
                style={{ left: '14px', color: '#8da388', fontSize: '20px', transition: 'color 0.2s' }}
              >
                lock
              </span>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 48px',
                  background: '#f6f7f2',
                  border: '1.5px solid #dce0d9',
                  borderRadius: '14px',
                  fontSize: '0.95rem',
                  color: '#2d382d',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#4f7942';
                  e.target.style.boxShadow = '0 0 0 3px rgba(79, 121, 66, 0.1)';
                  e.target.previousElementSibling.style.color = '#4f7942';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#dce0d9';
                  e.target.style.boxShadow = 'none';
                  e.target.previousElementSibling.style.color = '#8da388';
                }}
              />
            </div>
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '6px',
                border: '1.5px solid #dce0d9',
                accentColor: '#4f7942',
                cursor: 'pointer',
              }}
            />
            <span style={{ fontSize: '0.9rem', color: '#6d766b', transition: 'color 0.2s' }}>Remember me for 30 days</span>
          </label>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px 24px',
              background: loading
                ? 'linear-gradient(135deg, #8da388 0%, #a5b8a0 100%)'
                : 'linear-gradient(135deg, #4f7942 0%, #3e5f34 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 16px rgba(79, 121, 66, 0.3)',
              transition: 'all 0.25s ease',
              marginTop: '8px',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(79, 121, 66, 0.4)';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(79, 121, 66, 0.3)';
            }}
            onMouseDown={e => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
              }
            }}
            onMouseUp={e => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin" style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.416" strokeDashoffset="10" strokeLinecap="round" />
                  </svg>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <span className="material-symbols-outlined text-xl">login</span>
                </>
              )}
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center" style={{ margin: '28px 0' }}>
          <div className="flex-grow" style={{ height: '1px', background: 'linear-gradient(to right, transparent, #dce0d9, transparent)' }} />
          <span style={{ padding: '0 16px', fontSize: '0.75rem', fontWeight: 600, color: '#8da388', textTransform: 'uppercase', letterSpacing: '0.1em' }}>or continue with</span>
          <div className="flex-grow" style={{ height: '1px', background: 'linear-gradient(to right, transparent, #dce0d9, transparent)' }} />
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.95rem', color: '#6d766b' }}>
          Don't have an account?{' '}
          <Link
            to="/register"
            style={{ color: '#4f7942', fontWeight: 700, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}