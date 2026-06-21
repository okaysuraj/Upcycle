import { useState } from 'react';

export default function ForgotPassword({ onNavigateToLogin }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      
      setSuccess(`OTP sent to ${email} (Check server console or use ${data.mockOtp})`);
      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      
      alert('Password reset successful! Please login.');
      onNavigateToLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-[#2d382d] font-sans flex flex-col items-center justify-center p-6 selection:bg-[#4f7942] selection:text-white">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-hidden">
        
        <div className="p-8 pb-6 border-b border-[#e5e7eb] text-center">
          <div className="flex items-center justify-center gap-2 text-[#4f7942] mb-4">
            <span className="material-symbols-outlined text-4xl">lock_reset</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1f2937]">Reset Password</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            {step === 1 ? 'Enter your email to receive an OTP' : 'Enter the OTP and your new password'}
          </p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              {success}
            </div>
          )}

          {step === 1 ? (
            <form className="space-y-5" onSubmit={handleRequestOtp}>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#4b5563]">Email Address</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-[#9ca3af] pointer-events-none">mail</span>
                  <input 
                    className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 pl-12 pr-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button 
                className={`w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${loading ? 'bg-[#8da388] cursor-not-allowed' : 'bg-[#4f7942] hover:bg-[#3e5f34] hover:shadow-md active:scale-[0.98]'}`} 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={handleResetPassword}>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#4b5563]">6-Digit OTP</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-[#9ca3af] pointer-events-none">pin</span>
                  <input 
                    className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 pl-12 pr-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none tracking-widest font-mono" 
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    required
                    maxLength={6}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-[#4b5563]">New Password</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-[#9ca3af] pointer-events-none">lock</span>
                  <input 
                    className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 pl-12 pr-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <button 
                className={`w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${loading ? 'bg-[#8da388] cursor-not-allowed' : 'bg-[#4f7942] hover:bg-[#3e5f34] hover:shadow-md active:scale-[0.98]'}`} 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Resetting Password...' : 'Reset Password'}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-[#e5e7eb] text-center">
            <button onClick={onNavigateToLogin} className="text-[#4b5563] font-semibold hover:text-[#4f7942] transition-colors flex items-center justify-center gap-1 mx-auto">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
