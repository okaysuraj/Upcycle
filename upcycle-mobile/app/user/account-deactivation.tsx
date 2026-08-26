import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function AccountDeactivation() {
  const router = useRouter();
  const { logout } = useAuth();
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleDeactivate = async () => {
    setIsDeactivating(true);
    setTimeout(async () => {
      await logout();
      router.replace('/(auth)/login');
    }, 800);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center gap-4 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-[#00522d]">Deactivate Account</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="items-center mb-6 text-center">
          <View className="w-16 h-16 bg-[#ffdad6] rounded-full items-center justify-center mb-3">
            <Ionicons name="person-remove" size={28} color="#ba1a1a" />
          </View>
          <Text className="text-2xl font-bold text-[#0d1e25]">We're sorry to see you go</Text>
          <Text className="text-xs text-[#556158] text-center mt-1 max-w-[280px] leading-relaxed">
            Deactivating your account will pause your campus contributions. Review your impact before proceeding.
          </Text>
        </View>

        {/* Impact Summary Card */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[28px] p-6 shadow-sm mb-4 space-y-4">
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="eco" size={18} color="#00522d" />
            <Text className="text-xs font-bold uppercase text-[#00522d]">Your Lifetime Campus Footprint</Text>
          </View>
          
          <Text className="text-4xl font-bold text-[#00522d]">
            1,248 <Text className="text-lg font-normal text-[#556158]">kg CO₂e</Text>
          </Text>
          
          <Text className="text-xs text-[#556158] leading-relaxed">
            Equivalent to preserving 62 mature campus trees this academic year.
          </Text>
        </View>

        {/* Consequences Card */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[28px] p-6 shadow-sm mb-6 space-y-3">
          <Text className="text-sm font-bold text-[#0d1e25]">What happens next?</Text>
          
          <View className="space-y-2 text-xs">
            <View className="p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
              <Text className="font-bold text-xs text-[#0d1e25]">Profile & Badges Archived</Text>
              <Text className="text-[11px] text-[#556158] mt-0.5">Your name will be removed from public leaderboards.</Text>
            </View>
            <View className="p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
              <Text className="font-bold text-xs text-[#0d1e25]">Open Requests Cancelled</Text>
              <Text className="text-[11px] text-[#556158] mt-0.5">Any pending marketplace exchanges will be closed.</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View className="space-y-3">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="py-4 bg-[#00522d] rounded-full items-center shadow-md"
          >
            <Text className="text-white font-bold text-sm">Keep My Account Active</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleDeactivate}
            disabled={isDeactivating}
            className="py-3.5 bg-transparent border border-[#ba1a1a]/40 rounded-full items-center"
          >
            <Text className="text-[#ba1a1a] font-bold text-xs">
              {isDeactivating ? 'Deactivating...' : 'Confirm Account Deactivation'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
