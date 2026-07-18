import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function LearningHub() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <Ionicons name="leaf" size={24} color="#00522d" />
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#d9e6da] items-center justify-center border border-[#bec9be]">
            <Ionicons name="person" size={16} color="#3f4941" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="relative h-64 bg-[#00522d] justify-center px-6">
          <View className="absolute inset-0 bg-[#00522d] opacity-90" />
          <View className="relative z-10">
            <Text className="text-3xl font-bold text-white mb-2 leading-tight">Master Sustainability</Text>
            <Text className="text-[#9cf6ba] text-sm mb-6">Professional certifications and interactive modules designed for the next generation of eco-coordinators.</Text>
            <TouchableOpacity className="bg-white px-6 py-3 rounded-full self-start shadow-sm">
              <Text className="text-[#00522d] font-bold">Explore Courses</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 py-6 pb-24 gap-6">
          
          {/* Active Progress */}
          <View className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-lg font-bold text-[#0d1e25]">Continue Learning</Text>
              <Text className="text-[10px] font-bold text-[#00522d] uppercase tracking-widest">Active Progress</Text>
            </View>

            <View className="gap-4">
              <View className="bg-[#f4faff] p-3 rounded-xl border border-gray-100 flex-row gap-4 items-center">
                <View className="w-16 h-16 rounded-lg bg-[#d9e6da] items-center justify-center">
                  <Ionicons name="sync" size={24} color="#00522d" />
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="font-bold text-[#0d1e25] text-sm flex-1 mr-2" numberOfLines={1}>Circular Economy Logistics</Text>
                    <Text className="font-bold text-[#556158] text-xs">65%</Text>
                  </View>
                  <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                    <View className="h-full bg-[#00522d]" style={{ width: '65%' }} />
                  </View>
                </View>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="play" size={20} color="#00522d" />
                </TouchableOpacity>
              </View>

              <View className="bg-[#f4faff] p-3 rounded-xl border border-gray-100 flex-row gap-4 items-center">
                <View className="w-16 h-16 rounded-lg bg-[#d4e5ef] items-center justify-center">
                  <Ionicons name="analytics" size={24} color="#006d3e" />
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="font-bold text-[#0d1e25] text-sm flex-1 mr-2" numberOfLines={1}>Municipal Waste Data</Text>
                    <Text className="font-bold text-[#556158] text-xs">22%</Text>
                  </View>
                  <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                    <View className="h-full bg-[#00522d]" style={{ width: '22%' }} />
                  </View>
                </View>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="play" size={20} color="#00522d" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Achievements */}
          <View className="bg-white/70 border border-white rounded-[24px] p-6 shadow-sm">
            <Text className="text-lg font-bold text-[#00522d] mb-4">Your Achievements</Text>
            <View className="flex-row gap-3 mb-6">
              <View className="flex-1 bg-white p-4 rounded-xl border border-[#bec9be] items-center">
                <Text className="text-3xl font-black text-[#00522d]">12</Text>
                <Text className="text-xs text-gray-500">Hours Logged</Text>
              </View>
              <View className="flex-1 bg-white p-4 rounded-xl border border-[#bec9be] items-center">
                <Text className="text-3xl font-black text-[#00522d]">04</Text>
                <Text className="text-xs text-gray-500">Certificates</Text>
              </View>
            </View>
            <Text className="font-bold text-[#3f4941] text-sm mb-2">Current Streak: 5 Days</Text>
            <View className="flex-row gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <View key={i} className="flex-1 h-2 bg-[#00522d] rounded-full" />
              ))}
              {[6, 7].map(i => (
                <View key={i} className="flex-1 h-2 bg-[#bec9be] rounded-full" />
              ))}
            </View>
          </View>

          {/* Recommended Courses */}
          <View className="mb-12">
            <Text className="text-lg font-bold text-[#0d1e25] mb-4">Recommended for You</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4 px-4 pb-4">
              
              <TouchableOpacity 
                onPress={() => router.push('/(student)/community/course')}
                className="bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-sm w-64 mr-4"
              >
                <View className="h-32 bg-[#d9e6da] items-center justify-center">
                  <Ionicons name="leaf" size={40} color="#00522d" />
                </View>
                <View className="p-4">
                  <View className="bg-[#bdefbf]/30 self-start px-2 py-1 rounded-md mb-2">
                    <Text className="text-[10px] font-bold text-[#24502c]">New</Text>
                  </View>
                  <Text className="font-bold text-[#0d1e25] text-base mb-1">Zero Waste Strategy 2024</Text>
                  <Text className="text-xs text-gray-500 mb-4" numberOfLines={1}>Advanced frameworks for municipal policy.</Text>
                  
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center gap-1">
                      <Ionicons name="time" size={16} color="#00522d" />
                      <Text className="text-sm font-bold text-[#00522d]">4.5h</Text>
                    </View>
                    <Text className="font-bold text-[#00522d] text-sm">Enroll</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-sm w-64 mr-4">
                <View className="h-32 bg-[#e7f6ff] items-center justify-center">
                  <Ionicons name="cube" size={40} color="#006d3e" />
                </View>
                <View className="p-4">
                  <View className="bg-[#d9e6da] self-start px-2 py-1 rounded-md mb-2">
                    <Text className="text-[10px] font-bold text-[#556158]">Intermediate</Text>
                  </View>
                  <Text className="font-bold text-[#0d1e25] text-base mb-1">Sustainable Bio-Materials</Text>
                  <Text className="text-xs text-gray-500 mb-4" numberOfLines={1}>Replacing plastics in local commerce.</Text>
                  
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center gap-1">
                      <Ionicons name="time" size={16} color="#00522d" />
                      <Text className="text-sm font-bold text-[#00522d]">6h</Text>
                    </View>
                    <Text className="font-bold text-[#00522d] text-sm">Enroll</Text>
                  </View>
                </View>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
