import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function SignupScreen() {
  const router = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');

    const role = email.includes('staff') ? 'PLATFORM_ADMIN' : 'VOLUNTEER';
    const result = await register(name, email, password, role);

    if (result.success) {
      router.replace('/(auth)/login');
    } else {
      setError(result.error || 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper>
      <View className="mt-8 mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Join Upcycle</Text>
        <Text className="text-gray-500 text-base">
          Create an account to start contributing to your campus sustainability goals.
        </Text>
      </View>

      {error ? (
        <View className="bg-red-50 p-3 rounded-xl mb-4 border border-red-100">
          <Text className="text-red-600 text-center font-medium">{error}</Text>
        </View>
      ) : null}

      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <Input 
          label="Full Name" 
          placeholder="Jane Doe"
          value={name}
          onChangeText={setName}
        />
        <Input 
          label="University Email" 
          placeholder="jane@university.edu"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input 
          label="Password" 
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="mb-8"
        />

        <Button 
          title="Create Account" 
          onPress={handleSignup} 
          loading={loading}
        />
      </View>

      <View className="flex-row justify-center mt-10">
        <Text className="text-gray-500 text-base">Already have an account? </Text>
        <Text 
          className="text-emerald-600 font-bold text-base"
          onPress={() => router.back()}
        >
          Sign In
        </Text>
      </View>
    </ScreenWrapper>
  );
}

