import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SAMPLE_ACCOUNTS = [
  { label: 'Admin', email: 'admin@upcycle.edu', password: 'password123' },
  { label: 'Staff', email: 'staff@upcycle.edu', password: 'password123' },
  { label: 'Volunteer', email: 'ananya@upcycle.edu', password: 'password123' },
];

export default function Login({ onNavigateToSignup }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e?.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (acc) => {
    setEmail(acc.email);
    setPassword(acc.password);
    setError('');
    setTimeout(async () => {
      setLoading(true);
      try { await login(acc.email, acc.password); }
      catch (err) { setError(err.message); }
      finally { setLoading(false); }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-[#2d382d] font-sans flex flex-col items-center justify-center p-6 selection:bg-[#4f7942] selection:text-white">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-hidden">
        
        {/* Header */}
        <div className="p-8 pb-6 border-b border-[#e5e7eb] text-center">
          <div className="flex items-center justify-center gap-2 text-[#4f7942] mb-4">
            <span className="material-symbols-outlined text-4xl">eco</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1f2937]">Welcome back</h1>
          <p className="text-[#6b7280] text-sm mt-1">Sign in to your Upcycle account</p>
        </div>

        {/* Form */}
        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#4b5563]" htmlFor="email">Email Address</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-[#9ca3af] pointer-events-none">mail</span>
                <input 
                  className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 pl-12 pr-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                  id="email" 
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-semibold text-[#4b5563]" htmlFor="password">Password</label>
                <button 
                  type="button" 
                  onClick={() => onNavigateToSignup('forgot-password')} 
                  className="text-sm text-[#4f7942] font-semibold hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-[#9ca3af] pointer-events-none">lock</span>
                <input 
                  className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 pl-12 pr-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                  id="password" 
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button 
              className={`w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${loading ? 'bg-[#8da388] cursor-not-allowed' : 'bg-[#4f7942] hover:bg-[#3e5f34] hover:shadow-md active:scale-[0.98]'}`} 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <><span className="material-symbols-outlined animate-spin text-[20px]">refresh</span> Signing in...</>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#e5e7eb] text-center">
            <p className="text-sm text-[#6b7280]">
              Don't have an account? <button onClick={() => onNavigateToSignup('signup')} className="text-[#4f7942] font-semibold hover:underline">Sign up</button>
            </p>
          </div>
          
          <div className="mt-6">
             <p className="text-xs text-center text-[#9ca3af] mb-3 uppercase tracking-wider font-semibold">Demo Accounts</p>
             <div className="flex justify-center gap-2 flex-wrap">
               {SAMPLE_ACCOUNTS.map((acc, i) => (
                  <button
                    key={i}
                    onClick={() => quickLogin(acc)}
                    disabled={loading}
                    className="text-xs font-medium text-[#4b5563] bg-white border border-[#d1d5db] hover:border-[#4f7942] hover:text-[#4f7942] rounded-full px-3 py-1.5 transition-all"
                  >
                    {acc.label}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
