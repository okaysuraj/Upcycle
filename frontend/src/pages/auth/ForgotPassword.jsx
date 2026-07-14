import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function ForgotPassword() {
  return (
    <Card className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-gray-900">Reset Password</h2>
      </div>
      <form className="space-y-4">
        <Input label="Email Address" type="email" required />
        <Button type="submit" className="w-full mt-4">Send Link</Button>
      </form>
      <div className="mt-6 text-center text-sm">
        <Link to="/auth/login" className="text-emerald-600 font-semibold hover:underline">Back to Login</Link>
      </div>
    </Card>
  );
}