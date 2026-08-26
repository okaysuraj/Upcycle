import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agreeTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setLoading(true);

    // Determine role (default coordinator/volunteer unless specified)
    const role = email.includes('staff') ? 'PLATFORM_ADMIN' : 'VOLUNTEER';
    
    const result = await register(name, email, password, role);

    if (result.success) {
      setSuccessMsg('A verification link has been sent to your email. Please click the link to verify your account before logging in.');
    } else {
      setError(result.error || 'Failed to register account. Please check your information.');
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-[1200px] grid md:grid-cols-12 gap-8 lg:gap-16 items-center font-['Hanken_Grotesk',sans-serif]">
      {/* Left Side: Brand Context (Desktop Only) */}
      <div className="hidden md:flex md:col-span-6 flex-col space-y-6 pr-4 lg:pr-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#00522d] rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
          </div>
          <span className="text-3xl font-bold text-[#00522d] tracking-tight">Upcycle</span>
        </div>

        <h1 className="text-3xl lg:text-[40px] font-bold text-[#0d1e25] leading-[1.15] max-w-md tracking-[-0.02em]">
          The Municipal Standard for Circular Economy Management.
        </h1>

        <p className="text-lg text-[#556158] max-w-sm font-normal leading-relaxed">
          Join our network of eco-professional coordinators and turn local waste data into actionable municipal impact.
        </p>

        <div className="pt-4 grid grid-cols-2 gap-4">
          <div 
            className="p-5 rounded-2xl border border-[#bec9be]/30 shadow-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-2xl lg:text-3xl font-bold text-[#00522d] block tracking-tight">1.2M+</span>
            <span className="text-sm font-medium text-[#3f4941]">Tons Diverted</span>
          </div>

          <div 
            className="p-5 rounded-2xl border border-[#bec9be]/30 shadow-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-2xl lg:text-3xl font-bold text-[#00522d] block tracking-tight">450+</span>
            <span className="text-sm font-medium text-[#3f4941]">Municipalities</span>
          </div>
        </div>
      </div>

      {/* Right Side: Sign Up Card */}
      <div className="col-span-12 md:col-span-6 flex justify-center lg:justify-end">
        <div className="w-full max-w-[480px] bg-white rounded-[24px] p-8 sm:p-10 shadow-lg border border-[#bec9be]/30 relative overflow-hidden">
          {/* Subtle Gradient Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00522d] to-[#9cf6ba]"></div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0d1e25] mb-1 tracking-tight">Create Account</h2>
            <p className="text-sm text-[#556158]">Access the coordinator dashboard today.</p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-[#ffdad6]/60 border border-[#ba1a1a]/30 text-[#93000a] text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#ba1a1a]">error</span>
              <span>{error}</span>
            </div>
          )}

          {successMsg ? (
            <div className="p-6 rounded-2xl bg-[#f4faff] border border-[#bec9be]/40 text-center space-y-4">
              <div className="w-14 h-14 bg-[#00522d] rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <span className="material-symbols-outlined text-white text-3xl">mark_email_read</span>
              </div>
              <h3 className="text-xl font-bold text-[#00522d]">Verify your email</h3>
              <p className="text-sm text-[#556158] leading-relaxed">{successMsg}</p>
              <Link to="/login" className="block pt-2">
                <button
                  type="button"
                  className="w-full py-3.5 px-6 bg-[#00522d] text-white font-semibold text-sm rounded-full shadow hover:bg-[#003d21] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Return to Sign In</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Link>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#3f4941] block ml-1" htmlFor="full_name">
                  Full Name
                </label>
                <div className="relative group flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-xl text-[#6f7a70] group-focus-within:text-[#00522d] transition-colors">
                    person
                  </span>
                  <input
                    id="full_name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Municipal Lead"
                    className="w-full pl-[48px] pr-4 py-3 bg-[#e7f6ff]/40 border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60 focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#3f4941] block ml-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-xl text-[#6f7a70] group-focus-within:text-[#00522d] transition-colors">
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@municipality.gov"
                    className="w-full pl-[48px] pr-4 py-3 bg-[#e7f6ff]/40 border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60 focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Passwords in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#3f4941] block ml-1" htmlFor="password">
                    Password
                  </label>
                  <div className="relative group flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-xl text-[#6f7a70] group-focus-within:text-[#00522d] transition-colors">
                      lock
                    </span>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-[48px] pr-3 py-3 bg-[#e7f6ff]/40 border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60 focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#3f4941] block ml-1" htmlFor="confirm_password">
                    Confirm
                  </label>
                  <div className="relative group flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-xl text-[#6f7a70] group-focus-within:text-[#00522d] transition-colors">
                      lock_reset
                    </span>
                    <input
                      id="confirm_password"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-[48px] pr-3 py-3 bg-[#e7f6ff]/40 border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25] placeholder:text-[#6f7a70]/60 focus:outline-none focus:ring-2 focus:ring-[#00522d]/20 focus:border-[#00522d] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#bec9be] text-[#00522d] focus:ring-[#00522d]/20 transition-all cursor-pointer accent-[#00522d]"
                />
                <label className="text-xs text-[#3f4941] leading-relaxed cursor-pointer" htmlFor="terms">
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#00522d] font-bold hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-[#00522d] font-bold hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  regarding municipal data handling.
                </label>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00522d] text-white py-3.5 px-6 rounded-full text-base font-bold shadow-lg hover:bg-[#003d21] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 mt-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <span>Create Account</span>
                )}
              </button>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-[#bec9be]/30"></div>
                <span className="flex-shrink mx-3 text-xs text-[#6f7a70] font-semibold uppercase tracking-widest">
                  or
                </span>
                <div className="flex-grow border-t border-[#bec9be]/30"></div>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-[#556158]">
                Already have an account?{' '}
                <Link to="/login" className="text-[#00522d] font-bold hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          )}

          {/* Footer Security Badges */}
          <div className="mt-8 flex justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#dff1fb]/60 flex items-center justify-center text-[#556158]" title="Verified Authority">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#dff1fb]/60 flex items-center justify-center text-[#556158]" title="Compliance Audited">
              <span className="material-symbols-outlined text-[18px]">gavel</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#dff1fb]/60 flex items-center justify-center text-[#556158]" title="Encrypted Data">
              <span className="material-symbols-outlined text-[18px]">shield</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}