import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function ResetPassword() {
  return (
    <Card className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-gray-900">New Password</h2>
      </div>
      <form className="space-y-4">
        <Input label="New Password" type="password" required />
        <Input label="Confirm Password" type="password" required />
        <Button type="submit" className="w-full mt-4">Save Password</Button>
      </form>
    </Card>
  );
}