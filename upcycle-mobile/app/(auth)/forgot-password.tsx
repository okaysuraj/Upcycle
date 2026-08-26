import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center gap-3 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-[#00522d]">Account Recovery</Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }} showsVerticalScrollIndicator={false}>
        <View className="items-center mb-6">
          <View className="w-16 h-16 bg-[#dff1fb] rounded-2xl items-center justify-center mb-3">
            <MaterialIcons name="lock-reset" size={32} color="#00522d" />
          </View>
          <Text className="text-2xl font-bold text-[#0d1e25]">Forgot Password?</Text>
          <Text className="text-xs text-[#556158] text-center mt-1 max-w-[280px] leading-relaxed">
            Enter your institutional email below and we'll dispatch password recovery instructions.
          </Text>
        </View>

        <View className="bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          {sent ? (
            <View className="bg-[#dff1fb] p-5 rounded-2xl items-center space-y-3">
              <Ionicons name="mail-open" size={40} color="#00522d" />
              <Text className="text-base font-bold text-[#00522d]">Recovery Link Dispatched</Text>
              <Text className="text-xs text-[#556158] text-center leading-relaxed">
                Check your inbox at <Text className="font-bold text-[#0d1e25]">{email}</Text> for instructions.
              </Text>
              <Button 
                title="Return to Sign In" 
                onPress={() => router.push('/(auth)/login')} 
                className="w-full mt-2 bg-[#00522d]"
              />
            </View>
          ) : (
            <View className="space-y-4">
              <Input 
                label="Institutional Email" 
                placeholder="coordinator@university.edu" 
                icon="mail-outline"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              
              <Button 
                title="Send Recovery Instructions" 
                onPress={handleSend}
                loading={loading}
                className="mt-2 bg-[#00522d]" 
              />
            </View>
          )}
        </View>

        <View className="flex-row justify-center pb-6">
          <Text className="text-xs text-[#556158]">Remember your credentials? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-xs text-[#00522d] font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}