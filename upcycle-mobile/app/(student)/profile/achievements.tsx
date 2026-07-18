import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function AchievementsBadges() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-14 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="menu" size={24} color="#006d3e" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#006d3e" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-1">Your Impact Journey</Text>
          <Text className="text-base text-[#3d4a40]">Celebrate your commitment to a greener planet.</Text>
        </View>

        {/* Level & Progress Bar Milestone */}
        <View className="bg-[#e7f6ff] rounded-[24px] p-6 mb-6 shadow-sm border border-[#d9e6da]">
          <View className="flex-row justify-between items-end mb-3">
            <View>
              <Text className="text-[10px] font-bold text-[#006d3e] uppercase tracking-wider">Current Level</Text>
              <Text className="text-2xl font-bold text-[#0d1e25]">Sustainable Steward</Text>
            </View>
            <Text className="text-sm font-bold text-[#3d4a40]">420 / 500 XP</Text>
          </View>
          <View className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden mb-1">
            <View className="h-full bg-[#006d3e] w-[84%]" />
          </View>
          <Text className="text-[10px] font-bold text-[#3d4a40]">
            80 XP until <Text className="text-[#006d3e]">Eco Master</Text>
          </Text>
        </View>

        {/* Badges Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 mb-8">
          
          {/* Earned Badge: Zero Waste Hero */}
          <View className="w-[48%] bg-[#E8F5E9] rounded-[24px] border border-[#A5D6A7] p-4 items-center">
            <View className="w-20 h-20 rounded-full bg-[#2eb872] items-center justify-center mb-2 shadow-sm">
              <Ionicons name="leaf" size={40} color="white" />
            </View>
            <Text className="text-sm font-bold text-[#0d1e25] mb-1 text-center">Zero Waste Hero</Text>
            <Text className="text-[10px] text-[#3d4a40] text-center">10 days without landfill waste</Text>
          </View>

          {/* Earned Badge: Compost King */}
          <View className="w-[48%] bg-[#E8F5E9] rounded-[24px] border border-[#A5D6A7] p-4 items-center">
            <View className="w-20 h-20 rounded-full bg-[#2eb872] items-center justify-center mb-2 shadow-sm">
              <Ionicons name="rose" size={40} color="white" />
            </View>
            <Text className="text-sm font-bold text-[#0d1e25] mb-1 text-center">Compost King</Text>
            <Text className="text-[10px] text-[#3d4a40] text-center">50kg of organic waste diverted</Text>
          </View>

          {/* Earned Badge: Seminar Attendee */}
          <View className="w-[48%] bg-[#E8F5E9] rounded-[24px] border border-[#A5D6A7] p-4 items-center">
            <View className="w-20 h-20 rounded-full bg-[#2eb872] items-center justify-center mb-2 shadow-sm">
              <Ionicons name="school" size={40} color="white" />
            </View>
            <Text className="text-sm font-bold text-[#0d1e25] mb-1 text-center">Seminar Attendee</Text>
            <Text className="text-[10px] text-[#3d4a40] text-center">Attended 'Waste 101' workshop</Text>
          </View>

          {/* Locked Badge: Plastic Free Month */}
          <View className="w-[48%] bg-[#dff1fb] rounded-[24px] border border-[#bccabd] p-4 items-center opacity-60">
            <View className="w-20 h-20 rounded-full bg-[#bdcabe] items-center justify-center mb-2">
              <Ionicons name="cube" size={40} color="#3d4a40" />
            </View>
            <Text className="text-sm font-bold text-[#0d1e25] mb-1 text-center">Plastic Free</Text>
            <Text className="text-[10px] text-[#3d4a40] text-center">Go 30 days without single-use plastic</Text>
          </View>

          {/* Asymmetric Featured Slot: Master Upcycler */}
          <View className="w-full bg-[#3c6842]/10 rounded-[24px] border-2 border-dashed border-[#3c6842]/40 p-6 items-center my-2">
            <View className="w-24 h-24 relative items-center justify-center mb-4">
               <View className="absolute inset-0 bg-[#3c6842]/20 rounded-full" />
               <View className="w-20 h-20 rounded-full bg-[#3c6842] items-center justify-center shadow-sm">
                 <Ionicons name="star" size={40} color="white" />
               </View>
            </View>
            <Text className="text-sm font-bold text-[#3c6842] mb-1 text-center">Master Upcycler</Text>
            <Text className="text-[10px] text-[#14411f] text-center">Complete 50 repair tutorials</Text>
          </View>

          {/* Locked Badge: Community Leader */}
          <View className="w-[48%] bg-[#dff1fb] rounded-[24px] border border-[#bccabd] p-4 items-center opacity-60">
            <View className="w-20 h-20 rounded-full bg-[#bdcabe] items-center justify-center mb-2">
              <Ionicons name="people" size={40} color="#3d4a40" />
            </View>
            <Text className="text-sm font-bold text-[#0d1e25] mb-1 text-center">Community Leader</Text>
            <Text className="text-[10px] text-[#3d4a40] text-center">Host 5 neighborhood cleanups</Text>
          </View>
          
          {/* Locked Badge: Recycling Pro */}
          <View className="w-[48%] bg-[#dff1fb] rounded-[24px] border border-[#bccabd] p-4 items-center opacity-60">
            <View className="w-20 h-20 rounded-full bg-[#bdcabe] items-center justify-center mb-2">
              <Ionicons name="sync" size={40} color="#3d4a40" />
            </View>
            <Text className="text-sm font-bold text-[#0d1e25] mb-1 text-center">Recycling Pro</Text>
            <Text className="text-[10px] text-[#3d4a40] text-center">Correctly sort 1,000 items</Text>
          </View>

        </View>

        {/* Recent Activity Mini Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Recent Honors</Text>
          <View className="gap-2">
            
            <TouchableOpacity className="flex-row items-center gap-4 p-2 bg-[#d9e6da]/30 rounded-xl">
              <View className="w-12 h-12 rounded-full bg-[#2eb872]/20 items-center justify-center">
                <Ionicons name="ribbon" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Unlocked: Compost King</Text>
                <Text className="text-[10px] text-[#3d4a40]">Reached 50kg of food waste composted</Text>
              </View>
              <Text className="text-[10px] font-bold text-[#3d4a40]">2d ago</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center gap-4 p-2 bg-[#d9e6da]/30 rounded-xl">
              <View className="w-12 h-12 rounded-full bg-[#2eb872]/20 items-center justify-center">
                <Ionicons name="trending-up" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Milestone: 80% Complete</Text>
                <Text className="text-[10px] text-[#3d4a40]">Zero Waste Hero progress update</Text>
              </View>
              <Text className="text-[10px] font-bold text-[#3d4a40]">4d ago</Text>
            </TouchableOpacity>
            
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
