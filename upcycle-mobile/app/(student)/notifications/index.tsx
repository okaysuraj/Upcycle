import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function NotificationsCenter() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-14 flex-row justify-between items-center z-50 border-b border-gray-200">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#006d3e" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/(student)/notifications/settings')}
          className="p-2 -mr-2"
        >
          <Ionicons name="settings-outline" size={24} color="#6d7a6f" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="flex-row justify-between items-end mb-6">
          <View className="flex-1 mr-4">
            <Text className="text-2xl font-bold text-[#0d1e25] mb-1">Notification Center</Text>
            <Text className="text-[#3d4a40] text-sm">Keep track of your environmental impact and community updates.</Text>
          </View>
          <TouchableOpacity className="bg-[#d9e6da] px-3 py-2 rounded-full flex-row items-center gap-1 self-start">
            <Ionicons name="checkmark-done" size={16} color="#5b675e" />
            <Text className="text-[10px] font-bold text-[#5b675e]">Mark Read</Text>
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <View className="bg-white rounded-[24px] p-6 border border-[#d9e6da]/50 shadow-sm mb-8">
          <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Filters</Text>
          <View className="gap-2">
            <TouchableOpacity className="bg-[#2eb872] px-4 py-3 rounded-xl flex-row justify-between items-center">
              <Text className="text-white font-bold text-sm">All</Text>
              <Text className="text-white font-bold text-sm">12</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#f4faff] px-4 py-3 rounded-xl flex-row justify-between items-center">
              <Text className="text-[#3d4a40] font-bold text-sm">Unread</Text>
              <Text className="text-[#3d4a40] font-bold text-sm">4</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#f4faff] px-4 py-3 rounded-xl flex-row justify-between items-center">
              <Text className="text-[#3d4a40] font-bold text-sm">Starred</Text>
              <Text className="text-[#3d4a40] font-bold text-sm">2</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* System Updates List */}
        <View className="mb-8">
          <View className="flex-row items-center gap-4 mb-4">
            <View className="h-px flex-1 bg-gray-200" />
            <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Updates</Text>
            <View className="h-px flex-1 bg-gray-200" />
          </View>

          <View className="gap-3">
            {/* Item 1 */}
            <View className="bg-white rounded-[24px] p-5 border border-gray-200 flex-row items-start gap-4 shadow-sm">
              <View className="w-12 h-12 rounded-2xl bg-[#006d3e]/10 items-center justify-center">
                <Ionicons name="leaf" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-bold text-[#0d1e25] text-sm flex-1 mr-2">Weekly Impact Report Ready</Text>
                  <Text className="text-[10px] text-gray-500">2h ago</Text>
                </View>
                <Text className="text-xs text-[#3d4a40] leading-relaxed mb-2">Your waste reduction for last week saved approximately 12.5kg of CO2. View your detailed breakdown in the dashboard.</Text>
                <View className="bg-[#d9e6da]/50 self-start px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-bold text-[#5b675e] uppercase">New Data</Text>
                </View>
              </View>
            </View>

            {/* Item 2 */}
            <View className="bg-white rounded-[24px] p-5 border border-gray-200 flex-row items-start gap-4 shadow-sm opacity-80">
              <View className="w-12 h-12 rounded-2xl bg-[#006d3e]/10 items-center justify-center">
                <Ionicons name="shield-checkmark" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-bold text-[#0d1e25] text-sm flex-1 mr-2">Security Update Successful</Text>
                  <Text className="text-[10px] text-gray-500">Yesterday</Text>
                </View>
                <Text className="text-xs text-[#3d4a40] leading-relaxed">Your account security settings have been updated to the latest protocols for better data protection.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Community List */}
        <View className="mb-8">
          <View className="flex-row items-center gap-4 mb-4">
            <View className="h-px flex-1 bg-gray-200" />
            <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Community</Text>
            <View className="h-px flex-1 bg-gray-200" />
          </View>

          <View className="gap-3">
            {/* Item 3 */}
            <View className="bg-white rounded-[24px] p-5 border border-gray-200 flex-row items-start gap-4 shadow-sm relative overflow-hidden">
              <View className="absolute left-0 top-0 bottom-0 w-1 bg-[#006d3e]" />
              <View className="w-12 h-12 rounded-2xl bg-[#7ead81]/20 items-center justify-center">
                <Ionicons name="chatbubble" size={24} color="#3c6842" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-bold text-[#0d1e25] text-sm flex-1 mr-2">Sarah left a comment</Text>
                  <Text className="text-[10px] text-gray-500">4h ago</Text>
                </View>
                <Text className="text-xs text-[#3d4a40] leading-relaxed mb-3">"This composting technique really worked for my urban garden! Thanks for the tip."</Text>
                <View className="flex-row gap-4 items-center">
                  <TouchableOpacity>
                    <Text className="text-xs font-bold text-[#006d3e]">Reply</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="text-xs font-bold text-gray-500">Dismiss</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Item 4 */}
            <View className="bg-white rounded-[24px] p-5 border border-gray-200 flex-row items-start gap-4 shadow-sm">
              <View className="w-12 h-12 rounded-2xl bg-[#7ead81]/20 items-center justify-center">
                <Ionicons name="thumbs-up" size={24} color="#3c6842" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-bold text-[#0d1e25] text-sm flex-1 mr-2">New Milestone Reached</Text>
                  <Text className="text-[10px] text-gray-500">1d ago</Text>
                </View>
                <Text className="text-xs text-[#3d4a40] leading-relaxed">Your group "Green Dorm Alliance" reached 15,000 pts this month!</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
