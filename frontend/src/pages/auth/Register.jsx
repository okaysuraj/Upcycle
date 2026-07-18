import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

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
            Join the <br/><span className="text-primary">Sustainability</span> Movement.
          </h1>
          <p className="font-body-lg text-secondary max-w-xs">
            Create an account to track your carbon footprint, join eco-initiatives, and earn rewards.
          </p>
        </div>
        
        <div className="relative h-48 mt-xl z-20">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-inner bg-surface-container-low flex items-center justify-center">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
              alt="Sustainability concept" 
            />
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Auth Form Card */}
      <Card className="col-span-12 lg:col-span-7 p-xl lg:p-[64px] flex flex-col">
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Create Account</h2>
          <p className="font-body-md text-secondary">Sign up to participate in community initiatives.</p>
        </div>
        
        {error && (
          <div className="bg-error-container text-on-error-container p-sm rounded-xl mb-md text-label-md">
            {error}
          </div>
        )}
        
        {successMsg ? (
          <div className="bg-success-container/20 border border-success-container text-on-surface p-md rounded-xl mb-md text-center">
            <span className="material-symbols-outlined text-[32px] text-primary mb-2">mark_email_read</span>
            <h3 className="font-headline-md text-primary mb-2">Verify your email</h3>
            <p className="font-body-md">{successMsg}</p>
            <div className="mt-6">
              <Link to="/auth/login">
                <Button fullWidth>Return to Sign In</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <form className="space-y-md" onSubmit={handleRegister}>
              <Input 
                label="Full Name" 
                id="name"
                type="text" 
                icon="person"
                placeholder="Jane Doe"
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
              />
              
              <Input 
                label="Email Address" 
                id="email"
                type="email" 
                icon="mail"
                placeholder="volunteer@city.eco"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
              />
              
              <Input 
                label="Password" 
                id="password"
                type="password" 
                icon="lock"
                placeholder="••••••••"
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
              />

              <Button type="submit" fullWidth icon="person_add" disabled={loading}>
                {loading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>

            <div className="flex items-center my-lg">
              <div className="flex-grow h-px bg-outline-variant/30"></div>
              <span className="px-md font-label-sm text-label-sm text-outline uppercase tracking-widest">or continue with</span>
              <div className="flex-grow h-px bg-outline-variant/30"></div>
            </div>

            <p className="text-center font-body-md text-secondary">
              Already have an account? <Link to="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </>
        )}
      </Card>
    </div>
  );
}