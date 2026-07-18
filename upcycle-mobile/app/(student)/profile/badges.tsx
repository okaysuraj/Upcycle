import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function BadgesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#d9e6da]/50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#0d1e25" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle Community</Text>
        </View>
        <TouchableOpacity className="p-2 rounded-full">
          <Ionicons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-1">Your Achievements</Text>
          <Text className="text-lg text-[#3f4941]">Track your environmental impact through verified community milestones.</Text>
        </View>

        {/* Hero Badge (Earned) */}
        <View className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 shadow-sm mb-4 relative overflow-hidden">
          <View className="absolute -right-8 -top-8 w-40 h-40 bg-[#006d3e]/10 rounded-full z-0" />
          <View className="relative z-10 flex-col items-center mb-6">
            <View className="w-40 h-40 bg-[#006d3e] rounded-full flex items-center justify-center shadow-lg relative">
              <Ionicons name="leaf" size={80} color="#92ecb1" />
              <View className="absolute -bottom-2 bg-[#2eb872] px-3 py-1 rounded-full shadow-md">
                <Text className="text-white font-bold text-[10px] uppercase">Verified</Text>
              </View>
            </View>
          </View>
          <View className="relative z-10 items-center text-center">
            <Text className="text-[#00522d] font-bold text-xs tracking-widest mb-1 uppercase">Elite Milestone</Text>
            <Text className="text-2xl font-bold text-[#0d1e25] mb-2 text-center">Compost Champion</Text>
            <Text className="text-[#3f4941] text-center mb-6">Awarded for diverting over 500kg of organic waste from landfills through the neighborhood community bin program.</Text>
            
            <View className="flex-row gap-3 w-full justify-center">
              <TouchableOpacity className="bg-[#00522d] px-6 py-3 rounded-full flex-row items-center gap-2 shadow-sm">
                <Ionicons name="share-social" size={16} color="white" />
                <Text className="text-white font-bold text-sm">Share</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-3 rounded-full bg-[#006d3e]/10">
                <Text className="text-[#00522d] font-bold text-sm">Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Stats Card */}
        <View className="bg-[#006d3e] rounded-[24px] p-6 shadow-lg mb-4">
          <Text className="text-white/80 font-bold text-[10px] uppercase tracking-widest mb-2">Total Badges</Text>
          <Text className="text-white text-6xl font-bold mb-4">12</Text>
          <View className="border-t border-white/20 pt-4">
            <View className="flex-row justify-between items-end mb-2">
              <View>
                <Text className="text-white/90 text-sm">Next: Waste Wizard</Text>
                <Text className="text-white font-bold text-base">85% Complete</Text>
              </View>
              <Ionicons name="trending-up" size={32} color="#92ecb1" />
            </View>
            <View className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <View className="h-full bg-white w-[85%]" />
            </View>
          </View>
        </View>

        {/* Secondary Badges */}
        <View className="flex-row gap-4 mb-4">
          <View className="flex-1 bg-white/70 rounded-xl p-4 items-center text-center shadow-sm border border-[#a5d6a7]/30">
            <View className="w-16 h-16 bg-[#d9e6da]/50 rounded-full flex items-center justify-center mb-4">
              <Ionicons name="sunny" size={32} color="#556158" />
            </View>
            <Text className="font-bold text-[#0d1e25] text-lg mb-1 text-center">Solar Savvy</Text>
            <Text className="text-[8px] font-bold text-[#3f4941] mb-2 uppercase tracking-wider text-center">Unlocked Jan 2024</Text>
            <Text className="text-xs text-[#3f4941] text-center leading-tight">Reduced household energy consumption by 30% using micro-solar installs.</Text>
          </View>

          <View className="flex-1 bg-white/70 rounded-xl p-4 items-center text-center shadow-sm border border-[#a5d6a7]/30">
            <View className="w-16 h-16 bg-[#d9e6da]/50 rounded-full flex items-center justify-center mb-4">
              <Ionicons name="water" size={32} color="#556158" />
            </View>
            <Text className="font-bold text-[#0d1e25] text-lg mb-1 text-center">Water Wise</Text>
            <Text className="text-[8px] font-bold text-[#3f4941] mb-2 uppercase tracking-wider text-center">Unlocked Nov 2023</Text>
            <Text className="text-xs text-[#3f4941] text-center leading-tight">Implemented a greywater recycling system for urban garden maintenance.</Text>
          </View>
        </View>

        {/* Locked Badge */}
        <View className="bg-[#d4e5ef]/30 border-2 border-dashed border-[#bec9be] rounded-xl p-6 items-center text-center opacity-70 mb-6">
          <View className="w-16 h-16 bg-[#dff1fb] rounded-full flex items-center justify-center mb-4 border-4 border-[#f4faff]">
            <Ionicons name="lock-closed" size={32} color="#6f7a70" />
          </View>
          <Text className="font-bold text-[#0d1e25] text-lg mb-1">Forest Friend</Text>
          <Text className="text-[10px] font-bold text-[#ba1a1a] mb-3 uppercase tracking-wider">Locked</Text>
          <View className="w-full">
            <Text className="text-[10px] text-[#3f4941] mb-1">Requirement: Plant 50 native trees</Text>
            <View className="w-full h-1 bg-[#dff1fb] rounded-full mb-1">
              <View className="h-full bg-[#00522d] w-[40%]" />
            </View>
            <Text className="text-[10px] text-[#00522d] font-bold">20 / 50 Completed</Text>
          </View>
        </View>

        {/* Detailed Leaderboard Preview */}
        <View className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 shadow-sm">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-[#0d1e25]">Impact Leaderboard</Text>
            <View className="bg-[#006d3e] px-2 py-1 rounded-full">
              <Text className="text-white font-bold text-[10px]">TOP 5%</Text>
            </View>
          </View>

          <View className="gap-4">
            <View className="flex-row justify-between items-center pb-4 border-b border-[#bec9be]/20">
              <View className="flex-row items-center gap-3">
                <Ionicons name="car" size={20} color="#00522d" />
                <View>
                  <Text className="font-bold text-[#0d1e25]">Urban Commuter</Text>
                  <Text className="text-[10px] text-[#6f7a70]">Rare • 12.5% Unlock</Text>
                </View>
              </View>
              <Text className="font-bold text-[#0d1e25]">100%</Text>
            </View>
            
            <View className="flex-row justify-between items-center pb-4 border-b border-[#bec9be]/20">
              <View className="flex-row items-center gap-3">
                <Ionicons name="sync" size={20} color="#00522d" />
                <View>
                  <Text className="font-bold text-[#0d1e25]">Zero-Waste Zen</Text>
                  <Text className="text-[10px] text-[#6f7a70]">Epic • 3.2% Unlock</Text>
                </View>
              </View>
              <Text className="font-bold text-[#0d1e25]">92%</Text>
            </View>
          </View>
          
          <TouchableOpacity className="mt-4 py-2 items-center">
            <Text className="text-sm font-bold text-[#00522d]">View Full Leaderboard</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
