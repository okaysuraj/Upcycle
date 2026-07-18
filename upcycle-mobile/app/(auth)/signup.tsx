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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    setSuccessMsg('');
    
    // Automatically derive role for demo purposes
    const role = email.includes('staff') ? 'PLATFORM_ADMIN' : 'VOLUNTEER';
    
    const result = await register(name, email, password, role);
    
    if (result.success) {
      setSuccessMsg('A verification link has been sent to your email. Please click the link to verify your account before logging in.');
    } else {
      setError(result.error || 'An error occurred during registration.');
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper className="bg-surface-ice p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        
        {/* Background aesthetics */}
        <View className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />

        <View className="items-center mb-10 mt-10 z-10">
          <View className="w-16 h-16 bg-primary rounded-full items-center justify-center mb-6 shadow-sm">
            <Ionicons name="leaf" size={32} color="#ffffff" />
          </View>
          <Text className="text-3xl font-black text-on-background mb-2 text-center">Join the Movement</Text>
          <Text className="text-secondary text-base text-center px-4">
            Create an account to track your footprint and join eco-initiatives.
          </Text>
        </View>

        <View className="bg-white/80 rounded-[32px] p-6 border border-outline-variant/30 shadow-sm mb-6 z-10">
          
          {error ? (
            <View className="bg-error-container p-3 rounded-xl mb-4">
              <Text className="text-on-error-container text-center font-medium">{error}</Text>
            </View>
          ) : null}

          {successMsg ? (
            <View className="bg-success-container/20 border border-success-container p-4 rounded-xl items-center">
              <Ionicons name="mail-open-outline" size={40} color="#00522d" style={{ marginBottom: 10 }} />
              <Text className="text-lg font-bold text-primary mb-2">Verify your email</Text>
              <Text className="text-center text-on-surface mb-6 leading-5">{successMsg}</Text>
              <Button 
                title="Return to Sign In" 
                onPress={() => router.push('/(auth)/login')} 
                className="w-full"
              />
            </View>
          ) : (
            <>
              <Text className="text-2xl font-bold text-on-background mb-1">Create Account</Text>
              <Text className="text-sm text-secondary mb-6">Sign up to participate in community initiatives.</Text>

              <Input 
                label="Full Name" 
                placeholder="Jane Doe"
                icon="person-outline"
                value={name}
                onChangeText={setName}
                className="mb-4"
              />
              <Input 
                label="Email Address" 
                placeholder="volunteer@city.eco"
                icon="mail-outline"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                className="mb-4"
              />
              <Input 
                label="Password" 
                placeholder="••••••••"
                icon="lock-closed-outline"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="mb-6"
              />

              <Button 
                title="Sign Up" 
                onPress={handleRegister} 
                loading={loading} 
              />
            </>
          )}
        </View>
        
        {!successMsg && (
          <View className="flex-row justify-center mt-2 pb-6 z-10">
            <Text className="text-secondary text-base">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text className="text-primary font-bold text-base">Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
