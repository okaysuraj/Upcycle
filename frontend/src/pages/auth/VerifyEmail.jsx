import React from 'react';
import Card from '../../components/ui/Card';

export default function VerifyEmail() {
  return (
    <Card className="w-full text-center">
      <h2 className="text-2xl font-black text-gray-900">Check Your Email</h2>
      <p className="text-gray-500 mt-4">We've sent a verification link to your email address.</p>
    </Card>
  );
}