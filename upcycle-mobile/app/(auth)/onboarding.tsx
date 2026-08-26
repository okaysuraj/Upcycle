import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#00522d] justify-between p-6">
      <View className="items-center mt-12">
        <View className="w-20 h-20 bg-white rounded-3xl items-center justify-center mb-6 shadow-xl">
          <Ionicons name="leaf" size={44} color="#00522d" />
        </View>
        <Text className="text-4xl font-bold text-white tracking-tight text-center">Upcycle</Text>
        <Text className="text-xs font-bold text-[#9cf6ba] uppercase tracking-widest mt-2 bg-white/10 px-4 py-1.5 rounded-full">
          Campus Climate Network
        </Text>
      </View>

      <View className="space-y-4 mb-8">
        <Text className="text-white text-2xl font-bold text-center px-4">
          Transforming Municipal Waste Into Academic Wealth.
        </Text>
        <Text className="text-white/80 text-xs text-center px-6 leading-relaxed">
          Track campus diversion, join student sustainability challenges, and earn verified green credentials.
        </Text>

        <TouchableOpacity 
          onPress={() => router.push('/(auth)/welcome')}
          className="mt-6 py-4 bg-white rounded-full items-center shadow-lg"
        >
          <Text className="text-[#00522d] font-bold text-sm">Explore Upcycle →</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/(auth)/login')}
          className="py-3 bg-white/10 rounded-full items-center border border-white/20"
        >
          <Text className="text-white font-bold text-xs">Sign In with Institutional ID</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}