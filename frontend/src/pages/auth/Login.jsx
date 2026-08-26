import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import recyclingFacilityImg from '../../assets/recycling_facility.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result && !result.success) {
      setError(result.error || 'Failed to sign in. Please check your credentials.');
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Placeholder or hook for OAuth provider login
    setError(`Signing in with ${provider} is currently being enabled for municipal SSO.`);
  };

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6 w-full max-w-5xl items-stretch font-['Hanken_Grotesk',sans-serif]">
      {/* Branding & Welcome Card (Visible on Desktop) */}
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
            Transforming <br />
            <span className="text-[#00522d]">Municipal Waste</span> Into Wealth.
          </h1>

          <p className="text-[17px] leading-[26px] text-[#556158] max-w-xs font-normal">
            Access your Eco-Professional dashboard to manage city-wide recycling initiatives and impact reports.
          </p>
        </div>

        <div className="relative h-48 mt-12 z-20">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-inner border border-[#bec9be]/30">
            <img 
              className="w-full h-full object-cover" 
              src={recyclingFacilityImg} 
              alt="Municipal recycling center" 
            />
          </div>
        </div>

        {/* Abstract decoration */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00522d]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Auth Form Card */}
      <div 
        className="col-span-12 lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 lg:p-[56px] shadow-lg flex flex-col border border-[#bec9be]/30"
      >
        <div className="mb-8">
          <h2 className="text-[32px] font-semibold text-[#0d1e25] tracking-[-0.01em] mb-1">Sign In</h2>
          <p className="text-base text-[#556158]">Welcome back! Please enter your credentials to continue.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-[#ffdad6]/60 border border-[#ba1a1a]/30 text-[#93000a] text-sm font-medium flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[20px] text-[#ba1a1a]">error</span>
            <span>{error}</span>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#3f4941] block" htmlFor="email">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span 
                className="material-symbols-outlined absolute left-4 text-xl transition-colors duration-200"
                style={{ color: emailFocused ? '#006d3e' : '#6f7a70' }}
              >
                mail
              </span>
              <input 
                id="email" 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                placeholder="coordinator@city-gov.eco" 
                className="w-full pl-[48px] pr-4 py-3.5 bg-[#e7f6ff]/50 border border-[#bec9be]/40 rounded-xl focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white outline-none transition-all text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-[#3f4941]" htmlFor="password">
                Password
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm font-medium text-[#00522d] hover:underline transition-all"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <span 
                className="material-symbols-outlined absolute left-4 text-xl transition-colors duration-200"
                style={{ color: passwordFocused ? '#006d3e' : '#6f7a70' }}
              >
                lock
              </span>
              <input 
                id="password" 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                placeholder="••••••••" 
                className="w-full pl-[48px] pr-12 py-3.5 bg-[#e7f6ff]/50 border border-[#bec9be]/40 rounded-xl focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white outline-none transition-all text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-[#6f7a70] hover:text-[#00522d] transition-colors flex items-center justify-center p-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Options Row */}
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded border-[#bec9be] text-[#00522d] focus:ring-[#00522d]/30 transition-all accent-[#00522d]"
              />
              <span className="ml-3 text-base text-[#3f4941] group-hover:text-[#0d1e25] transition-colors">
                Remember me for 30 days
              </span>
            </label>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 px-6 bg-[#00522d] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-[#00522d]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>Sign In</span>
                <span className="material-symbols-outlined text-[20px]">login</span>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-[#bec9be]/30"></div>
          <span className="px-4 text-xs font-semibold text-[#6f7a70] uppercase tracking-widest">
            or continue with
          </span>
          <div className="flex-grow h-px bg-[#bec9be]/30"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center gap-3 py-3.5 px-4 border border-[#bec9be]/40 rounded-xl hover:bg-[#e7f6ff]/40 hover:border-[#bec9be] transition-all group cursor-pointer bg-white"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="text-sm font-medium text-[#3f4941] group-hover:text-[#0d1e25]">Google</span>
          </button>

          <button 
            type="button" 
            onClick={() => handleSocialLogin('Apple')}
            className="flex items-center justify-center gap-3 py-3.5 px-4 border border-[#bec9be]/40 rounded-xl hover:bg-[#e7f6ff]/40 hover:border-[#bec9be] transition-all group cursor-pointer bg-white"
          >
            <svg className="w-5 h-5 shrink-0 fill-[#0d1e25]" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2.02.6-2.66 1.34-.56.64-.99 1.68-.85 2.7.99.08 1.98-.44 2.59-1.19z"></path>
            </svg>
            <span className="text-sm font-medium text-[#3f4941] group-hover:text-[#0d1e25]">Apple</span>
          </button>
        </div>

        {/* Create Account Link */}
        <p className="mt-10 text-center text-base text-[#556158]">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#00522d] font-bold hover:underline">
            Register Initiative
          </Link>
        </p>
      </div>
    </div>
  );
}