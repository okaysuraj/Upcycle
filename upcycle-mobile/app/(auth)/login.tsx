import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    
    const result = await login(email, password);
    if (!result.success) {
      setError(result.error);
    }
    // Note: RootLayout handles redirection on success
    setLoading(false);
  };

  return (
    <ScreenWrapper className="justify-center">
      <View className="items-center mb-10 mt-10">
        <View className="w-20 h-20 bg-emerald-100 rounded-full items-center justify-center mb-6">
          <Text className="text-4xl">🌿</Text>
        </View>
        <Text className="text-3xl font-black text-gray-900 mb-2">Welcome Back</Text>
        <Text className="text-gray-500 text-base text-center px-4">
          Sign in to track your campus sustainability journey.
        </Text>
      </View>

      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
        <Input 
          label="Email Address" 
          placeholder="Enter your university email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input 
          label="Password" 
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="mb-6"
        />
        
        {error ? <Text className="text-red-500 text-center font-medium mb-4">{error}</Text> : null}

        <Button 
          title="Sign In" 
          onPress={handleLogin} 
          loading={loading} 
        />
      </View>
      
      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500 text-base">New to Upcycle? </Text>
        <Text 
          className="text-emerald-600 font-bold text-base"
          onPress={() => router.push('/(auth)/signup')}
        >
          Create Account
        </Text>
      </View>
    </ScreenWrapper>
  );
}
