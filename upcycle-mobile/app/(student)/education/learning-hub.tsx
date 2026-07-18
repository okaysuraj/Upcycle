import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function LearningHubHome() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center">
            <Ionicons name="person" size={16} color="white" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Hero Section */}
        <View className="mb-6 rounded-[24px] bg-[#00522d] p-6 shadow-sm relative overflow-hidden h-[280px] justify-center">
          <View className="absolute inset-0 bg-[#00522d] opacity-90" />
          <View className="relative z-10">
            <Text className="text-4xl font-bold text-white mb-2 leading-tight">Master Sustainability</Text>
            <Text className="text-sm text-[#9cf6ba] mb-6">Professional certifications and interactive modules designed for the next generation of municipal waste coordinators.</Text>
            <TouchableOpacity className="bg-[#80d99f] self-start px-6 py-3 rounded-full">
              <Text className="text-[#00522d] font-bold text-sm">Explore All Courses</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Active Progress */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-bold text-[#0d1e25]">Continue Learning</Text>
            <Text className="text-[10px] text-[#00522d] font-bold uppercase tracking-widest">Active Progress</Text>
          </View>
          
          <View className="gap-4">
            
            {/* Course 1 */}
            <TouchableOpacity className="flex-row items-center gap-4 p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
              <View className="w-16 h-16 bg-[#d9e6da] rounded-lg overflow-hidden" />
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="text-base font-bold text-[#0d1e25] flex-1 mr-2" numberOfLines={1}>Circular Economy Logistics</Text>
                  <Text className="text-xs font-bold text-[#556158]">65%</Text>
                </View>
                <View className="w-full h-2 bg-[#d9e6da] rounded-full overflow-hidden mt-1">
                  <View className="h-full bg-[#00522d] w-[65%]" />
                </View>
              </View>
              <View className="w-10 h-10 bg-[#d9ebf5] rounded-full items-center justify-center">
                <Ionicons name="play" size={20} color="#00522d" />
              </View>
            </TouchableOpacity>

            {/* Course 2 */}
            <TouchableOpacity className="flex-row items-center gap-4 p-3 bg-[#f4faff] rounded-xl border border-[#bec9be]/30">
              <View className="w-16 h-16 bg-[#d9e6da] rounded-lg overflow-hidden" />
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="text-base font-bold text-[#0d1e25] flex-1 mr-2" numberOfLines={1}>Municipal Waste Data</Text>
                  <Text className="text-xs font-bold text-[#556158]">22%</Text>
                </View>
                <View className="w-full h-2 bg-[#d9e6da] rounded-full overflow-hidden mt-1">
                  <View className="h-full bg-[#00522d] w-[22%]" />
                </View>
              </View>
              <View className="w-10 h-10 bg-[#d9ebf5] rounded-full items-center justify-center">
                <Ionicons name="play" size={20} color="#00522d" />
              </View>
            </TouchableOpacity>

          </View>
        </View>

        {/* Stats/Profile Card */}
        <View className="bg-white/70 border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <Text className="text-xl font-bold text-[#00522d] mb-4">Your Achievements</Text>
          <View className="flex-row gap-3 mb-6">
            <View className="flex-1 bg-white border border-[#bec9be]/30 p-3 rounded-lg items-center">
              <Text className="text-3xl font-bold text-[#00522d]">12</Text>
              <Text className="text-[10px] text-[#556158] font-bold">Hours Logged</Text>
            </View>
            <View className="flex-1 bg-white border border-[#bec9be]/30 p-3 rounded-lg items-center">
              <Text className="text-3xl font-bold text-[#00522d]">04</Text>
              <Text className="text-[10px] text-[#556158] font-bold">Certificates</Text>
            </View>
          </View>
          <View>
            <Text className="text-sm font-bold text-[#3f4941] mb-2">Current Streak: 5 Days</Text>
            <View className="flex-row gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <View key={`active-${i}`} className="h-1 flex-1 bg-[#00522d] rounded-full" />
              ))}
              {[1, 2].map((_, i) => (
                <View key={`inactive-${i}`} className="h-1 flex-1 bg-[#bec9be] rounded-full" />
              ))}
            </View>
          </View>
        </View>

        {/* Recommended for You */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-[#0d1e25] mb-4">Recommended for You</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible flex-row gap-4">
            
            {/* Course Card 1 */}
            <TouchableOpacity className="w-64 bg-white border border-[#bec9be]/30 rounded-[24px] overflow-hidden shadow-sm mr-4">
              <View className="h-32 bg-[#d4e5ef]" />
              <View className="p-4">
                <View className="bg-[#b3e5b5] px-2 py-1 rounded self-start mb-2">
                  <Text className="text-[10px] font-bold text-[#24502c]">New</Text>
                </View>
                <Text className="text-lg font-bold text-[#0d1e25] mb-1">Zero Waste Strategy 2024</Text>
                <Text className="text-xs text-[#556158] mb-4">Advanced frameworks for municipal policy.</Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="time" size={16} color="#00522d" />
                    <Text className="text-sm font-bold text-[#00522d]">4.5h</Text>
                  </View>
                  <Text className="text-[#00522d] font-bold text-sm underline">Enroll Now</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Course Card 2 */}
            <TouchableOpacity className="w-64 bg-white border border-[#bec9be]/30 rounded-[24px] overflow-hidden shadow-sm mr-4">
              <View className="h-32 bg-[#d4e5ef]" />
              <View className="p-4">
                <View className="bg-[#d9e6da] px-2 py-1 rounded self-start mb-2">
                  <Text className="text-[10px] font-bold text-[#5b675e]">Intermediate</Text>
                </View>
                <Text className="text-lg font-bold text-[#0d1e25] mb-1">Sustainable Bio-Materials</Text>
                <Text className="text-xs text-[#556158] mb-4">Replacing plastics in local commerce.</Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="time" size={16} color="#00522d" />
                    <Text className="text-sm font-bold text-[#00522d]">6h</Text>
                  </View>
                  <Text className="text-[#00522d] font-bold text-sm underline">Enroll Now</Text>
                </View>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
}
