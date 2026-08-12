import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    // Determine role (simplified for demo, typically chosen via UI)
    const role = email.includes('staff') ? 'PLATFORM_ADMIN' : 'VOLUNTEER';
    
    const result = await register(name, email, password, role);

    if (result.success) {
      setSuccessMsg('A verification link has been sent to your email. Please click the link to verify your account before logging in.');
    } else {
      setError(result.error);
    }
    setLoading(false);
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
            Join the <br/><span style={{ color: '#4f7942' }}>Sustainability</span> Movement.
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6d766b', lineHeight: 1.6, maxWidth: '300px' }}>
            Create an account to track your carbon footprint, join eco-initiatives, and earn rewards.
          </p>
        </div>
        
        <div className="relative mt-8 z-20" style={{ height: '180px' }}>
          <div
            className="absolute inset-0 overflow-hidden flex items-center justify-center"
            style={{ borderRadius: '16px', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06)' }}
          >
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
              alt="Sustainability concept" 
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
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2d382d', marginBottom: '6px', letterSpacing: '-0.01em' }}>Create Account</h2>
          <p style={{ fontSize: '1rem', color: '#6d766b' }}>Sign up to participate in community initiatives.</p>
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
        
        {successMsg ? (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(79, 121, 66, 0.06) 0%, rgba(165, 214, 167, 0.1) 100%)',
              border: '1px solid rgba(79, 121, 66, 0.2)',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #4f7942 0%, #6a9b5c 100%)',
                borderRadius: '16px',
                margin: '0 auto 16px',
                boxShadow: '0 4px 16px rgba(79, 121, 66, 0.25)',
              }}
            >
              <span className="material-symbols-outlined text-white" style={{ fontSize: '28px' }}>mark_email_read</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#4f7942', marginBottom: '8px' }}>Verify your email</h3>
            <p style={{ fontSize: '0.95rem', color: '#6d766b', lineHeight: 1.6, marginBottom: '24px' }}>{successMsg}</p>
            <Link to="/login">
              <button
                type="button"
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg, #4f7942 0%, #3e5f34 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(79, 121, 66, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 121, 66, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(79, 121, 66, 0.3)';
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Return to Sign In
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <>
            <form className="flex flex-col gap-5" onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d382d' }}>Full Name</label>
                <div className="relative flex items-center group">
                  <span
                    className="material-symbols-outlined absolute"
                    style={{ left: '14px', color: '#8da388', fontSize: '20px', transition: 'color 0.2s' }}
                  >
                    person
                  </span>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={e => setName(e.target.value)}
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
                    placeholder="volunteer@city.eco"
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
                <label htmlFor="password" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2d382d' }}>Password</label>
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

              {/* Terms checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group" style={{ marginTop: '4px' }}>
                <input
                  type="checkbox"
                  required
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '6px',
                    border: '1.5px solid #dce0d9',
                    accentColor: '#4f7942',
                    marginTop: '2px',
                    cursor: 'pointer',
                  }}
                />
                <span style={{ fontSize: '0.85rem', color: '#6d766b', lineHeight: 1.5 }}>
                  I agree to the <a href="#" style={{ color: '#4f7942', fontWeight: 600, textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#4f7942', fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</a>
                </span>
              </label>

              {/* Register Button */}
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
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Sign Up
                      <span className="material-symbols-outlined text-xl">person_add</span>
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
              Already have an account?{' '}
              <Link
                to="/login"
                style={{ color: '#4f7942', fontWeight: 700, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                Sign In
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}