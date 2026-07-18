import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Ionicons } from '@expo/vector-icons';

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
      setError(result.error || 'An error occurred during login.');
    }
    // AuthContext handles state -> RootLayout handles redirection
    setLoading(false);
  };

  return (
    <ScreenWrapper className="justify-center bg-surface-ice">
      {/* Background aesthetics */}
      <View className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 -ml-20 -mt-20" />

      <View className="items-center mb-10 mt-10 z-10">
        <View className="w-16 h-16 bg-primary rounded-full items-center justify-center mb-6 shadow-sm">
          <Ionicons name="leaf" size={32} color="#ffffff" />
        </View>
        <Text className="text-3xl font-black text-on-background mb-2">Upcycle</Text>
        <Text className="text-secondary text-base text-center px-4">
          Transforming Municipal Waste Into Wealth.
        </Text>
      </View>

      <View className="bg-white/80 rounded-[32px] p-6 border border-outline-variant/30 shadow-sm mb-6 z-10">
        <Text className="text-2xl font-bold text-on-background mb-1">Sign In</Text>
        <Text className="text-sm text-secondary mb-6">Welcome back! Please enter your credentials.</Text>

        {error ? (
          <View className="bg-error-container p-3 rounded-xl mb-4">
            <Text className="text-on-error-container text-center font-medium">{error}</Text>
          </View>
        ) : null}

        <Input 
          label="Email Address" 
          placeholder="coordinator@city-gov.eco"
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <View className="flex-row justify-between items-center mt-4">
          <Text className="text-sm font-medium text-on-surface-variant">Password</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')}>
            <Text className="text-sm font-medium text-primary">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        
        <Input 
          placeholder="••••••••"
          icon="lock-closed-outline"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="mt-1.5 mb-6"
        />

        <Button 
          title="Sign In" 
          onPress={handleLogin} 
          loading={loading} 
        />
      </View>
      
      <View className="flex-row justify-center mt-4 z-10">
        <Text className="text-secondary text-base">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
          <Text className="text-primary font-bold text-base">Register Initiative</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
