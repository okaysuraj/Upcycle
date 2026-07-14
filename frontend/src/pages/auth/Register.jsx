import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const role = email.includes('staff') ? 'PLATFORM_ADMIN' : 'VOLUNTEER';
    const result = await register(name, email, password, role);

    if (result.success) {
      navigate('/auth/login');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <Card className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-gray-900">Create Account</h2>
        <p className="text-gray-500 mt-2">Join the campus sustainability movement</p>
      </div>
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm font-medium text-center border border-red-100">
          {error}
        </div>
      )}
      <form onSubmit={handleRegister} className="space-y-4">
        <Input 
          label="Full Name" 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        />
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
          {loading ? 'Creating...' : 'Sign Up'}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        Already have an account? <Link to="/auth/login" className="text-emerald-600 font-semibold hover:underline">Sign In</Link>
      </div>
    </Card>
  );
}