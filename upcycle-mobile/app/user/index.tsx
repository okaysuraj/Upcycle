import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function UserProfileOverview() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-[#f4faff] border-b border-[#bec9be]/30">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-[#00522d]">Profile & Settings</Text>
        <TouchableOpacity onPress={handleLogout} className="p-2 rounded-full active:bg-[#ffdad6]">
          <MaterialIcons name="logout" size={22} color="#ba1a1a" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="items-center mb-8">
          <View className="relative mb-3">
            <View className="w-24 h-24 rounded-full bg-[#00522d] items-center justify-center shadow-md">
              <Ionicons name="person" size={48} color="#ffffff" />
            </View>
            <View className="absolute bottom-0 right-0 bg-[#2eb872] w-7 h-7 rounded-full border-2 border-white items-center justify-center shadow-sm">
              <Ionicons name="checkmark" size={16} color="#ffffff" />
            </View>
          </View>
          
          <Text className="text-2xl font-bold text-[#0d1e25] tracking-tight">{user?.name || 'Alex River'}</Text>
          <Text className="text-xs font-bold text-[#00522d] bg-[#dff1fb] px-3.5 py-1 rounded-full uppercase tracking-wider mt-1.5">
            {user?.role || 'Campus Lead'}
          </Text>
        </View>

        {/* Impact Bento Card */}
        <View className="p-6 rounded-[28px] bg-white border border-[#bec9be]/30 shadow-sm mb-4 space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-bold text-[#0d1e25]">Sustainability Impact</Text>
            <Text className="text-xs font-bold text-[#00522d]">Top 5%</Text>
          </View>

          <View className="flex-row gap-3">
            <View className="flex-1 bg-[#f4faff] p-3 rounded-2xl border border-[#bec9be]/30 text-center items-center">
              <Text className="text-[10px] font-bold text-[#556158] uppercase">Carbon Offset</Text>
              <Text className="text-lg font-bold text-[#00522d] mt-1">12.4 <Text className="text-xs font-normal">tCO₂e</Text></Text>
            </View>
            <View className="flex-1 bg-[#f4faff] p-3 rounded-2xl border border-[#bec9be]/30 text-center items-center">
              <Text className="text-[10px] font-bold text-[#556158] uppercase">Waste Diverted</Text>
              <Text className="text-lg font-bold text-[#0d1e25] mt-1">85%</Text>
            </View>
          </View>
        </View>

        {/* Settings Navigation Group */}
        <View className="bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm overflow-hidden divide-y divide-[#bec9be]/20">
          <TouchableOpacity 
            onPress={() => router.push('/user/account-settings')}
            className="p-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <Ionicons name="settings-outline" size={20} color="#00522d" />
              </View>
              <View>
                <Text className="text-sm font-bold text-[#0d1e25]">Account Settings</Text>
                <Text className="text-[11px] text-[#556158]">Credentials & personal info</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="#556158" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/user/privacy-settings')}
            className="p-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <Ionicons name="shield-checkmark-outline" size={20} color="#00522d" />
              </View>
              <View>
                <Text className="text-sm font-bold text-[#0d1e25]">Privacy & Telemetry</Text>
                <Text className="text-[11px] text-[#556158]">Data sharing permissions</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="#556158" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/user/account-deactivation')}
            className="p-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#ffdad6] items-center justify-center">
                <Ionicons name="person-remove-outline" size={20} color="#ba1a1a" />
              </View>
              <View>
                <Text className="text-sm font-bold text-[#ba1a1a]">Deactivate Account</Text>
                <Text className="text-[11px] text-[#556158]">Manage account lifecycle</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="#ba1a1a" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
