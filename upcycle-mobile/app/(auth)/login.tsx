import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }
    setLoading(true);
    setError('');
    
    const result = await login(email, password);
    if (!result.success) {
      setError(result.error || 'Invalid credentials.');
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper className="bg-[#f4faff]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
        {/* Header Branding */}
        <View className="items-center mb-8 mt-6">
          <View className="w-16 h-16 bg-[#00522d] rounded-2xl items-center justify-center mb-4 shadow-md">
            <Ionicons name="leaf" size={32} color="#ffffff" />
          </View>
          <Text className="text-3xl font-bold text-[#0d1e25] tracking-tight">Upcycle</Text>
          <Text className="text-xs font-bold text-[#00522d] uppercase tracking-widest bg-[#dff1fb] px-3 py-1 rounded-full mt-2">
            Campus Climate Network
          </Text>
        </View>

        {/* Login Bento Card */}
        <View className="bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <View>
            <Text className="text-2xl font-bold text-[#0d1e25]">Sign In</Text>
            <Text className="text-xs text-[#556158] mt-1">Welcome back! Please enter your institutional credentials.</Text>
          </View>

          {error ? (
            <View className="bg-[#ffdad6] p-3 rounded-xl">
              <Text className="text-[#ba1a1a] text-xs font-bold text-center">{error}</Text>
            </View>
          ) : null}

          <View className="space-y-4">
            <Input 
              label="Institutional Email" 
              placeholder="coordinator@university.edu"
              icon="mail-outline"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            
            <View className="space-y-1.5">
              <View className="flex-row justify-between items-center">
                <Text className="text-xs font-bold text-[#556158] uppercase">Password</Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')}>
                  <Text className="text-xs font-bold text-[#00522d]">Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <Input 
                placeholder="••••••••"
                icon="lock-closed-outline"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity 
              onPress={() => setRememberMe(!rememberMe)}
              className="flex-row items-center gap-2 pt-1"
            >
              <View className={`w-5 h-5 rounded-md border items-center justify-center ${
                rememberMe ? 'bg-[#00522d] border-[#00522d]' : 'border-[#bec9be]'
              }`}>
                {rememberMe && <Ionicons name="checkmark" size={14} color="#ffffff" />}
              </View>
              <Text className="text-xs text-[#556158] font-medium">Remember me for 30 days</Text>
            </TouchableOpacity>

            <Button 
              title="Sign In" 
              onPress={handleLogin} 
              loading={loading} 
              className="mt-2 bg-[#00522d]"
            />
          </View>
        </View>

        {/* Social / SSO Divider */}
        <View className="items-center mb-6">
          <View className="flex-row items-center gap-3 w-full px-6 mb-4">
            <View className="flex-1 h-px bg-[#bec9be]/30" />
            <Text className="text-[10px] font-bold text-[#556158] uppercase tracking-wider">Or Single Sign-On</Text>
            <View className="flex-1 h-px bg-[#bec9be]/30" />
          </View>

          <View className="flex-row gap-3 w-full px-2">
            <TouchableOpacity 
              onPress={() => router.push('/(auth)/choose-role')}
              className="flex-1 flex-row items-center justify-center gap-2 py-3.5 bg-white border border-[#bec9be]/40 rounded-full shadow-sm"
            >
              <Ionicons name="logo-google" size={18} color="#0d1e25" />
              <Text className="text-xs font-bold text-[#0d1e25]">Google SSO</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => router.push('/(auth)/choose-role')}
              className="flex-1 flex-row items-center justify-center gap-2 py-3.5 bg-white border border-[#bec9be]/40 rounded-full shadow-sm"
            >
              <Ionicons name="logo-apple" size={18} color="#0d1e25" />
              <Text className="text-xs font-bold text-[#0d1e25]">Apple ID</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Navigation Prompt */}
        <View className="flex-row justify-center pb-8">
          <Text className="text-xs text-[#556158]">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/choose-role')}>
            <Text className="text-xs text-[#00522d] font-bold">Register Campus Role</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
