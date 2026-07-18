import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ProfileOverview() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-14 flex-row justify-between items-center z-50">
        <TouchableOpacity className="p-2 -ml-2">
          <Ionicons name="menu" size={24} color="#006d3e" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
        <TouchableOpacity className="p-2 -mr-2">
          <Ionicons name="notifications-outline" size={24} color="#006d3e" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-8 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Profile Header Section */}
        <View className="items-center mb-10">
          <View className="relative mb-6">
            <View className="w-32 h-32 rounded-full border-4 border-[#2eb872] p-1 overflow-hidden">
               <View className="w-full h-full rounded-full bg-[#d9e6da] items-center justify-center">
                 <Ionicons name="person" size={60} color="#006d3e" />
               </View>
            </View>
            <View className="absolute bottom-0 right-2 bg-[#2eb872] p-2 rounded-full border-4 border-[#f4faff] shadow-sm">
              <Ionicons name="leaf" size={20} color="white" />
            </View>
          </View>
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Alex River</Text>
          <View className="bg-[#E8F5E9] px-4 py-1.5 rounded-full flex-row items-center">
            <Ionicons name="medal" size={16} color="#006d3e" style={{ marginRight: 6 }} />
            <Text className="text-[#006d3e] font-bold text-sm">Eco Warrior</Text>
          </View>
        </View>

        {/* Profile Navigation Grid */}
        <View className="gap-4">
          
          {/* Sustainability Impact */}
          <TouchableOpacity className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm mb-2">
            <View className="flex-row justify-between items-start mb-4">
              <Ionicons name="analytics" size={32} color="#006d3e" />
              <Ionicons name="arrow-forward" size={24} color="#6d7a6f" />
            </View>
            <Text className="text-xl font-bold text-[#0d1e25] mb-2">Sustainability Impact</Text>
            <Text className="text-[#3d4a40] text-sm mb-8">Track your journey through carbon reduction metrics and waste diversion milestones.</Text>
            
            <View>
              <View className="flex-row justify-between mb-2">
                <Text className="font-bold text-[#0d1e25] text-sm">Weekly Goal</Text>
                <Text className="font-bold text-[#006d3e] text-sm">85%</Text>
              </View>
              <View className="w-full h-3 bg-[#E8F5E9] rounded-full overflow-hidden">
                <View className="h-full bg-[#2eb872]" style={{ width: '85%' }} />
              </View>
            </View>
          </TouchableOpacity>

          <View className="flex-row gap-4 mb-2">
            {/* Achievements */}
            <TouchableOpacity className="flex-1 bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm items-center">
              <View className="w-16 h-16 rounded-2xl bg-[#f4faff] flex items-center justify-center mb-4">
                <Ionicons name="trophy" size={32} color="#006d3e" />
              </View>
              <Text className="text-lg font-bold text-[#0d1e25] mb-2">Achievements</Text>
              <Text className="text-[#3d4a40] font-bold text-xs text-center mb-6">12 Badges</Text>
              
              <View className="flex-row justify-center -space-x-3">
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#2eb872] items-center justify-center z-30">
                  <Ionicons name="star" size={14} color="white" />
                </View>
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#3c6842] items-center justify-center z-20">
                  <Ionicons name="trash-bin" size={14} color="white" />
                </View>
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#bdcabe] items-center justify-center z-10">
                  <Ionicons name="leaf" size={14} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* Activity History */}
            <TouchableOpacity className="flex-1 bg-[#d9e6da] rounded-[24px] p-6 shadow-sm">
              <Ionicons name="time-outline" size={28} color="#006d3e" style={{ mb: 16 }} />
              <View className="flex-1 mt-4">
                <Text className="text-lg font-bold text-[#0d1e25] mb-2">Activity History</Text>
                <Text className="text-[#3d4a40] text-xs">View recent log entries.</Text>
              </View>
              <View className="pt-4 border-t border-[#bccabd]/50 mt-4">
                <Text className="font-bold text-[#006d3e] text-xs">Last log: Yesterday</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Account Settings */}
          <TouchableOpacity 
            onPress={() => router.push('/(student)/profile/settings')}
            className="bg-[#d9ebf5] rounded-[24px] p-6 shadow-sm flex-row items-center justify-between"
          >
            <View className="flex-1 pr-4">
              <Ionicons name="settings-outline" size={28} color="#3d4a40" style={{ mb: 16 }} />
              <View className="mt-4">
                <Text className="text-lg font-bold text-[#0d1e25] mb-2">Account Settings</Text>
                <Text className="text-[#3d4a40] text-sm">Security, notifications, profile.</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#6d7a6f" />
          </TouchableOpacity>
          
          {/* Subscription/Billing */}
          <TouchableOpacity 
            onPress={() => router.push('/(student)/profile/billing')}
            className="bg-[#bdefbe]/30 border border-[#bdefbe] rounded-[24px] p-6 shadow-sm flex-row items-center justify-between"
          >
            <View className="flex-1 pr-4">
              <Ionicons name="card-outline" size={28} color="#006d3e" style={{ mb: 16 }} />
              <View className="mt-4">
                <Text className="text-lg font-bold text-[#0d1e25] mb-2">Billing & Subscription</Text>
                <Text className="text-[#3d4a40] text-sm">Manage payment methods & plans.</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#6d7a6f" />
          </TouchableOpacity>

        </View>

        {/* Sign Out Button */}
        <TouchableOpacity className="mt-12 flex-row items-center justify-center bg-[#ffdad6]/30 py-4 rounded-full">
          <Ionicons name="log-out-outline" size={20} color="#ba1a1a" style={{ marginRight: 8 }} />
          <Text className="font-bold text-[#ba1a1a] text-sm">Sign Out</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center px-4 py-4 pb-8 bg-white shadow-lg rounded-t-xl border-t border-gray-100">
        <TouchableOpacity className="items-center">
          <Ionicons name="home-outline" size={24} color="#5b675e" />
          <Text className="text-xs font-bold text-[#5b675e] mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="analytics-outline" size={24} color="#5b675e" />
          <Text className="text-xs font-bold text-[#5b675e] mt-1">Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="add-circle-outline" size={24} color="#5b675e" />
          <Text className="text-xs font-bold text-[#5b675e] mt-1">Log</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="people-outline" size={24} color="#5b675e" />
          <Text className="text-xs font-bold text-[#5b675e] mt-1">Community</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#2eb872] px-4 py-1.5 rounded-full">
          <Ionicons name="person" size={20} color="white" />
          <Text className="text-[10px] font-bold text-white mt-1">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
