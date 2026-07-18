import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function LeaderboardScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-2">
          <Ionicons name="leaf" size={24} color="#006d3e" />
          <Text className="text-xl font-bold text-[#006d3e]">Upcycle Community</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity className="p-2 rounded-full">
            <Ionicons name="notifications-outline" size={24} color="#3d4a40" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full border border-[#bccabd]/30 bg-[#d9e6da] overflow-hidden items-center justify-center">
            <Ionicons name="person" size={16} color="#006d3e" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Impact Rankings</Text>
          <Text className="text-base text-[#3d4a40] mb-4">Celebrate the heroes of sustainability. See how you and your campus groups are making a tangible difference this month.</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible flex-row">
            <TouchableOpacity className="bg-[#006d3e] px-4 py-2 rounded-full flex-row items-center gap-1 shadow-sm mr-2">
              <Ionicons name="star" size={18} color="white" />
              <Text className="text-white font-bold text-sm">Overall</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d4e5ef] px-4 py-2 rounded-full flex-row items-center gap-1 mr-2">
              <Ionicons name="trash" size={18} color="#3d4a40" />
              <Text className="text-[#3d4a40] font-bold text-sm">Waste</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d4e5ef] px-4 py-2 rounded-full flex-row items-center gap-1 mr-2">
              <Ionicons name="flash" size={18} color="#3d4a40" />
              <Text className="text-[#3d4a40] font-bold text-sm">Energy</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d4e5ef] px-4 py-2 rounded-full flex-row items-center gap-1 mr-2">
              <Ionicons name="water" size={18} color="#3d4a40" />
              <Text className="text-[#3d4a40] font-bold text-sm">Water</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* User Rank Highlight */}
        <View className="bg-[#006d3e] rounded-[24px] p-6 mb-6 shadow-sm relative overflow-hidden flex-col justify-between min-h-[200px]">
          <View className="z-10">
            <Text className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Your Status</Text>
            <Text className="text-4xl font-bold text-white mb-2">Rank #12</Text>
            <Text className="text-base text-white/90">You're in the top 5% of Eco-Warriors this month! Keep up the great work.</Text>
          </View>
          <View className="z-10 flex-row items-end justify-between mt-6">
            <View>
              <Text className="text-xs text-white/80">Impact Score</Text>
              <Text className="text-2xl font-bold text-white">1,240 pts</Text>
            </View>
            <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full flex-row items-center gap-2">
              <Text className="text-white font-bold text-sm">View Milestones</Text>
              <Ionicons name="arrow-forward" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Top 3 Eco-Warriors */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-xl font-bold text-[#0d1e25]">Top Eco-Warriors</Text>
            <TouchableOpacity>
              <Text className="text-[#006d3e] font-bold text-sm underline">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="flex-row justify-between items-end h-48">
            
            {/* Rank 2 */}
            <View className="flex-1 items-center justify-end h-full pb-4 border-b-4 border-[#bdcabe] mx-1">
              <View className="w-16 h-16 rounded-full border-4 border-[#bdcabe] mb-2 bg-[#d4e5ef]" />
              <Text className="text-xl font-bold text-[#0d1e25]">#2</Text>
              <Text className="text-xs font-bold text-[#0d1e25]">Elena S.</Text>
              <Text className="text-[10px] text-[#3d4a40]">2,850 pts</Text>
            </View>

            {/* Rank 1 */}
            <View className="flex-1 items-center justify-end h-[120%] pb-6 border-b-4 border-[#00522d] bg-[#00522d]/5 rounded-t-xl mx-1 relative">
              <View className="absolute top-2 right-2">
                <Ionicons name="ribbon" size={24} color="#80d99f" />
              </View>
              <View className="w-20 h-20 rounded-full border-4 border-[#00522d] mb-2 bg-[#d9e6da]" />
              <Text className="text-2xl font-bold text-[#00522d]">#1</Text>
              <Text className="text-xs font-bold text-[#0d1e25]">Marcus Chen</Text>
              <Text className="text-[10px] text-[#3d4a40]">3,120 pts</Text>
            </View>

            {/* Rank 3 */}
            <View className="flex-1 items-center justify-end h-full pb-4 border-b-4 border-[#a2d2a4] mx-1">
              <View className="w-16 h-16 rounded-full border-4 border-[#a2d2a4] mb-2 bg-[#d4e5ef]" />
              <Text className="text-xl font-bold text-[#0d1e25]">#3</Text>
              <Text className="text-xs font-bold text-[#0d1e25]">Sarah K.</Text>
              <Text className="text-[10px] text-[#3d4a40]">2,640 pts</Text>
            </View>

          </View>
        </View>

        {/* Most Impactful Groups */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#0d1e25]">Most Impactful Groups</Text>
            <TouchableOpacity className="p-2 rounded-full">
              <Ionicons name="filter" size={20} color="#3d4a40" />
            </TouchableOpacity>
          </View>
          
          <View className="gap-2">
            
            {/* Group Item 1 */}
            <View className="flex-row items-center justify-between p-3 rounded-xl bg-[#f4faff]">
              <View className="flex-row items-center gap-4">
                <Text className="text-xl font-bold text-[#bccabd]">01</Text>
                <View className="w-12 h-12 bg-[#d9e6da] rounded-lg items-center justify-center">
                  <Ionicons name="people" size={24} color="#006d3e" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Green Dorm Alliance</Text>
                  <Text className="text-[10px] text-[#3d4a40]">45 Active Members</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#006d3e]">15,400 pts</Text>
                <View className="w-16 h-1.5 bg-[#d9e6da] rounded-full mt-1 overflow-hidden">
                  <View className="bg-[#006d3e] h-full w-[85%]" />
                </View>
              </View>
            </View>

            {/* Group Item 2 */}
            <View className="flex-row items-center justify-between p-3 rounded-xl bg-[#f4faff]">
              <View className="flex-row items-center gap-4">
                <Text className="text-xl font-bold text-[#bccabd]">02</Text>
                <View className="w-12 h-12 bg-[#7ead81] rounded-lg items-center justify-center">
                  <Ionicons name="leaf" size={24} color="white" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Engineering Susty Hub</Text>
                  <Text className="text-[10px] text-[#3d4a40]">32 Active Members</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#006d3e]">12,100 pts</Text>
                <View className="w-16 h-1.5 bg-[#d9e6da] rounded-full mt-1 overflow-hidden">
                  <View className="bg-[#006d3e] h-full w-[65%]" />
                </View>
              </View>
            </View>

            {/* Group Item 3 */}
            <View className="flex-row items-center justify-between p-3 rounded-xl bg-[#f4faff]">
              <View className="flex-row items-center gap-4">
                <Text className="text-xl font-bold text-[#bccabd]">03</Text>
                <View className="w-12 h-12 bg-[#dff1fb] rounded-lg items-center justify-center">
                  <Ionicons name="water" size={24} color="#006d3e" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Ocean Preservation</Text>
                  <Text className="text-[10px] text-[#3d4a40]">58 Active Members</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#006d3e]">9,800 pts</Text>
                <View className="w-16 h-1.5 bg-[#d9e6da] rounded-full mt-1 overflow-hidden">
                  <View className="bg-[#006d3e] h-full w-[55%]" />
                </View>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}
