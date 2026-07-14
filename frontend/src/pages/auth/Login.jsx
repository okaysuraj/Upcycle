import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      // Navigate based on returned user role from DB
      // We will need to get the user from context or we can wait for effect to redirect.
      // But we can also check result if we updated login to return it, or just use window.location
      window.location.reload();
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <Card className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 mt-2">Sign in to your Upcycle account</p>
      </div>
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm font-medium text-center border border-red-100">
          {error}
        </div>
      )}
      <form onSubmit={handleLogin} className="space-y-4">
        <Input 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit" className="w-full mt-4" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have an account? <Link to="/auth/register" className="text-emerald-600 font-semibold hover:underline">Register</Link>
      </div>
    </Card>
  );
}