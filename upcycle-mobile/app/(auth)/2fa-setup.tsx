import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TwoFactorSetup() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const secretKey = 'UPCY-7782-ECO9-AUTH';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center gap-3 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-[#00522d]">Two-Factor Security</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        <View className="items-center mb-6">
          <View className="w-16 h-16 bg-[#dff1fb] rounded-2xl items-center justify-center mb-3">
            <Ionicons name="shield-checkmark" size={32} color="#00522d" />
          </View>
          <Text className="text-2xl font-bold text-[#0d1e25]">Set Up Authenticator</Text>
          <Text className="text-xs text-[#556158] text-center mt-1 max-w-[280px] leading-relaxed">
            Enhance institutional account security with an authenticator app (e.g., Google Authenticator).
          </Text>
        </View>

        {/* QR Code Container */}
        <View className="bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm items-center space-y-4 mb-4">
          <View className="w-48 h-48 bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl items-center justify-center p-4">
            <Ionicons name="qr-code" size={140} color="#00522d" />
          </View>
          <Text className="text-[11px] text-[#556158] text-center">Scan this code with your authenticator app</Text>
        </View>

        {/* Manual Key */}
        <View className="bg-white rounded-[28px] p-5 border border-[#bec9be]/30 shadow-sm space-y-2 mb-6">
          <Text className="text-xs font-bold text-[#556158] uppercase">Or enter key manually</Text>
          <View className="flex-row justify-between items-center bg-[#f4faff] p-3 rounded-xl border border-[#bec9be]/30">
            <Text className="font-mono font-bold text-xs text-[#00522d]">{secretKey}</Text>
            <TouchableOpacity onPress={handleCopy} className="px-3 py-1 bg-[#dff1fb] rounded-lg">
              <Text className="text-xs font-bold text-[#00522d]">{copied ? 'Copied!' : 'Copy'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action */}
        <TouchableOpacity 
          onPress={() => router.push('/(auth)/2fa-verify')}
          className="py-4 bg-[#00522d] rounded-full items-center shadow-md flex-row justify-center gap-2"
        >
          <Text className="text-white font-bold text-sm">Proceed to Verification</Text>
          <MaterialIcons name="arrow-forward" size={18} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
