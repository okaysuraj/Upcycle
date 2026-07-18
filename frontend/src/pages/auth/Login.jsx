import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

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
    <div className="grid grid-cols-12 gap-gutter w-full max-w-5xl">
      {/* Branding & Welcome Card (Visible on Desktop) */}
      <div className="hidden lg:flex col-span-5 bg-white/70 backdrop-blur-[12px] border border-[#a5d6a7]/30 shadow-sm rounded-[24px] p-lg flex-col justify-between overflow-hidden relative">
        <div className="relative z-20">
          <div className="flex items-center gap-base mb-lg">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            <span className="font-display text-headline-md font-bold text-primary tracking-tight">Upcycle</span>
          </div>
          
          <h1 className="font-display text-display text-on-background leading-tight mb-md">
            Transforming <br/><span className="text-primary">Municipal Waste</span> Into Wealth.
          </h1>
          <p className="font-body-lg text-secondary max-w-xs">
            Access your Eco-Professional dashboard to manage city-wide recycling initiatives and impact reports.
          </p>
        </div>
        
        <div className="relative h-48 mt-xl z-20">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-inner bg-surface-container-low flex items-center justify-center">
            {/* Using a placeholder or the actual image from the template */}
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=2000&auto=format&fit=crop" 
              alt="Eco facility" 
            />
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Auth Form Card */}
      <Card className="col-span-12 lg:col-span-7 p-xl lg:p-[64px] flex flex-col">
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Sign In</h2>
          <p className="font-body-md text-secondary">Welcome back! Please enter your credentials to continue.</p>
        </div>
        
        {error && (
          <div className="bg-error-container text-on-error-container p-sm rounded-xl mb-md text-label-md">
            {error}
          </div>
        )}

        <form className="space-y-md" onSubmit={handleLogin}>
          <Input 
            label="Email Address" 
            id="email"
            type="email" 
            icon="mail"
            placeholder="coordinator@city-gov.eco"
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          
          <div className="space-y-base">
            <div className="flex justify-between items-center">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
              <Link to="/auth/forgot-password" className="font-label-md text-label-md text-primary hover:underline transition-all">Forgot Password?</Link>
            </div>
            <Input 
              id="password"
              type="password" 
              icon="lock"
              placeholder="••••••••"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>

          <div className="flex items-center">
            <label className="flex items-center cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/30 transition-all" />
              <span className="ml-base font-body-md text-on-surface-variant group-hover:text-on-background transition-colors">Remember me for 30 days</span>
            </label>
          </div>

          <Button type="submit" fullWidth icon="login" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="flex items-center my-lg">
          <div className="flex-grow h-px bg-outline-variant/30"></div>
          <span className="px-md font-label-sm text-label-sm text-outline uppercase tracking-widest">or continue with</span>
          <div className="flex-grow h-px bg-outline-variant/30"></div>
        </div>

        <p className="text-center font-body-md text-secondary">
          Don't have an account? <Link to="/auth/register" className="text-primary font-bold hover:underline">Register Initiative</Link>
        </p>
      </Card>
    </div>
  );
}