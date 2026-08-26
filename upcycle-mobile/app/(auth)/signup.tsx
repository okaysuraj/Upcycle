import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen() {
  const router = useRouter();
  const { register } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all required fields');
      return;
    }
    if (!agreeTerms) {
      setError('Please accept the campus charter terms');
      return;
    }
    setLoading(true);
    setError('');
    setSuccessMsg('');
    
    const result = await register(name, email, password);
    
    if (result.success) {
      setSuccessMsg('Account created! A verification link has been sent to your institutional email.');
    } else {
      setError(result.error || 'An error occurred during registration.');
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper className="bg-[#f4faff]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center mb-6 mt-4">
          <View className="w-16 h-16 bg-[#00522d] rounded-2xl items-center justify-center mb-3 shadow-md">
            <Ionicons name="leaf" size={32} color="#ffffff" />
          </View>
          <Text className="text-3xl font-bold text-[#0d1e25] tracking-tight">Create Account</Text>
          <Text className="text-xs font-bold text-[#00522d] uppercase tracking-widest bg-[#dff1fb] px-3 py-1 rounded-full mt-2">
            Campus Member Profile
          </Text>
        </View>

        {/* Card */}
        <View className="bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          {error ? (
            <View className="bg-[#ffdad6] p-3 rounded-xl">
              <Text className="text-[#ba1a1a] text-xs font-bold text-center">{error}</Text>
            </View>
          ) : null}

          {successMsg ? (
            <View className="bg-[#dff1fb] p-5 rounded-2xl items-center space-y-3">
              <Ionicons name="mail-open-outline" size={44} color="#00522d" />
              <Text className="text-base font-bold text-[#00522d]">Check Your Email</Text>
              <Text className="text-xs text-[#556158] text-center leading-relaxed">{successMsg}</Text>
              <Button 
                title="Return to Sign In" 
                onPress={() => router.push('/(auth)/login')} 
                className="w-full mt-2 bg-[#00522d]"
              />
            </View>
          ) : (
            <View className="space-y-3.5">
              <Input 
                label="Full Name" 
                placeholder="Alex Rivera"
                icon="person-outline"
                value={name}
                onChangeText={setName}
              />
              <Input 
                label="Institutional Email" 
                placeholder="alex@university.edu"
                icon="mail-outline"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <Input 
                label="Create Password" 
                placeholder="••••••••"
                icon="lock-closed-outline"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TouchableOpacity 
                onPress={() => setAgreeTerms(!agreeTerms)}
                className="flex-row items-center gap-2 pt-1"
              >
                <View className={`w-5 h-5 rounded-md border items-center justify-center ${
                  agreeTerms ? 'bg-[#00522d] border-[#00522d]' : 'border-[#bec9be]'
                }`}>
                  {agreeTerms && <Ionicons name="checkmark" size={14} color="#ffffff" />}
                </View>
                <Text className="text-xs text-[#556158]">
                  I agree to the <Text className="text-[#00522d] font-bold">Campus Zero-Waste Charter</Text>
                </Text>
              </TouchableOpacity>

              <Button 
                title="Complete Registration" 
                onPress={handleRegister} 
                loading={loading} 
                className="mt-2 bg-[#00522d]"
              />
            </View>
          )}
        </View>

        {/* Footer Prompt */}
        <View className="flex-row justify-center pb-8">
          <Text className="text-xs text-[#556158]">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text className="text-xs text-[#00522d] font-bold">Sign In Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
