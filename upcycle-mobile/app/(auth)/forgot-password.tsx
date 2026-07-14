import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <ScreenWrapper className="bg-gray-50 justify-center">
      <View className="mb-8 mt-4 items-center">
        <Text className="text-4xl mb-4">🔒</Text>
        <Text className="text-3xl font-black text-gray-900 mb-2">Reset Password</Text>
        <Text className="text-gray-500 text-base text-center px-6">Enter your email and we'll send you a recovery link.</Text>
      </View>
      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
        <Input label="Email Address" placeholder="you@university.edu" keyboardType="email-address" />
        <Button title="Send Link" onPress={() => router.back()} className="mt-4" />
      </View>
      <View className="items-center">
        <Text className="text-emerald-600 font-bold" onPress={() => router.back()}>Back to Login</Text>
      </View>
    </ScreenWrapper>
  );
}