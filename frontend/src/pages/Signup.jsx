import { useState } from 'react';

export default function Signup({ onNavigateToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      
      setSuccess(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfc] text-[#2d382d] font-sans flex selection:bg-[#4f7942] selection:text-white">
      {/* Visual Section */}
      <div className="hidden lg:flex w-1/2 relative bg-[#4f7942] items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=2000&auto=format&fit=crop" alt="Lush Nature" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d382d]/80 to-transparent"></div>
        <div className="relative z-10 p-12 text-white max-w-xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-4xl">eco</span>
            <span className="text-3xl font-bold tracking-tight">Upcycle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Join the movement for a greener future.
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Connect with volunteers, track your recycling contributions, and help cultivate community gardens across the city.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 lg:p-24 bg-white relative">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center gap-2 text-[#4f7942] mb-10">
            <span className="material-symbols-outlined text-3xl">eco</span>
            <span className="text-2xl font-bold text-[#1f2937]">Upcycle</span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1f2937] mb-3">Create an account</h2>
            <p className="text-[#6b7280]">Start your journey towards sustainability today.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-6 rounded-2xl bg-green-50 border border-green-200 text-green-800 flex flex-col items-center gap-3 text-center shadow-sm">
              <span className="material-symbols-outlined text-5xl text-green-600">mark_email_unread</span>
              <div>
                <h3 className="font-bold text-lg mb-1">Check your email</h3>
                <p>{success}</p>
              </div>
            </div>
          )}

          {!success && (

          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4b5563]">Full Name</label>
              <input 
                className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 px-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                placeholder="Jane Doe" 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4b5563]">Email Address</label>
              <input 
                className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 px-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                placeholder="jane@example.com" 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4b5563]">Password</label>
              <input 
                className="w-full bg-[#f9fafb] border border-[#d1d5db] rounded-xl py-3 px-4 text-[#1f2937] placeholder:text-[#9ca3af] focus:border-[#4f7942] focus:ring-2 focus:ring-[#4f7942]/20 transition-all outline-none" 
                placeholder="••••••••" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            
            <button 
              className={`w-full py-4 mt-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md ${loading ? 'bg-[#8da388] cursor-not-allowed' : 'bg-[#4f7942] hover:bg-[#3e5f34] hover:shadow-lg active:scale-[0.98]'}`} 
              type="submit"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
              {!loading && <span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
            </button>
          </form>
          )}

          {!success ? (
            <div className="mt-10 text-center">
              <p className="text-sm text-[#6b7280]">
                Already have an account? <button onClick={onNavigateToLogin} className="text-[#4f7942] font-semibold hover:underline">Log in</button>
              </p>
            </div>
          ) : (
            <div className="mt-8 text-center">
              <button onClick={onNavigateToLogin} className="text-[#4b5563] font-semibold hover:text-[#4f7942] transition-colors flex items-center justify-center gap-1 mx-auto">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Return to Log in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
