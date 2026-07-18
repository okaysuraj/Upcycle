import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function SustainabilityStats() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full">
            <Ionicons name="menu" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Ionicons name="notifications-outline" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="mb-6 flex-row justify-between items-end">
          <View>
            <Text className="text-2xl font-bold text-[#0d1e25]">Sustainability Impact</Text>
            <Text className="text-gray-500 mt-1">Real-time overview of your environmental contributions.</Text>
          </View>
        </View>
        <View className="flex-row gap-2 mb-6">
          <TouchableOpacity className="px-4 py-2 bg-[#d9e6da] rounded-full">
            <Text className="text-[#3e4a41] font-bold text-xs">Download Report</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 bg-[#006d3e] rounded-full">
            <Text className="text-white font-bold text-xs">Share Stats</Text>
          </TouchableOpacity>
        </View>

        {/* Total Waste Recycled */}
        <View className="bg-white border border-[#a5d6a7]/30 rounded-[24px] p-6 mb-4 shadow-sm">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-xs text-gray-500 uppercase tracking-wider font-bold">Metric</Text>
              <Text className="text-xl font-bold text-[#0d1e25]">Total Waste Recycled</Text>
            </View>
            <View className="p-2 bg-[#2eb872]/20 rounded-xl">
              <Ionicons name="leaf" size={24} color="#006d3e" />
            </View>
          </View>

          <View className="flex-row items-baseline gap-1 mb-6">
            <Text className="text-5xl font-bold text-[#006d3e] tracking-tighter">1,248</Text>
            <Text className="text-xl font-bold text-gray-500">kg</Text>
            <View className="flex-row items-center gap-1 ml-4 bg-[#2eb872]/10 px-2 py-1 rounded-full">
              <Ionicons name="trending-up" size={16} color="#006d3e" />
              <Text className="text-xs font-bold text-[#006d3e]">12% vs last month</Text>
            </View>
          </View>

          {/* Simple Bar Chart Visualization */}
          <View className="flex-row items-end justify-between h-32 gap-2 mt-4">
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '40%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '55%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '45%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '70%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '60%' }} />
            <View className="flex-1 bg-[#2eb872] rounded-t-lg" style={{ height: '85%' }} />
          </View>
          
          <View className="flex-row justify-between mt-2 px-1">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
              <Text key={month} className={`text-[10px] font-bold ${i === 5 ? 'text-[#0d1e25]' : 'text-gray-400'}`}>
                {month}
              </Text>
            ))}
          </View>
        </View>

        {/* Two Mini Cards */}
        <View className="flex-row gap-4 mb-6">
          <View className="flex-1 bg-[#e8f5e9] rounded-[24px] p-4 shadow-sm border border-white">
            <View className="flex-row items-center gap-2 mb-2">
              <Ionicons name="cloud-done" size={20} color="#006d3e" />
              <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Carbon Offset</Text>
            </View>
            <View className="flex-row items-baseline gap-1">
              <Text className="text-3xl font-bold text-[#0d1e25]">2.4</Text>
              <Text className="text-sm font-bold text-gray-500">Tons CO2</Text>
            </View>
            <View className="h-2 bg-white/50 rounded-full mt-4 mb-2 overflow-hidden">
              <View className="h-full bg-[#006d3e] w-3/4 rounded-full" />
            </View>
            <Text className="text-[10px] text-gray-500 font-bold">75% of your annual goal reached</Text>
          </View>

          <View className="flex-1 bg-white rounded-[24px] p-4 shadow-sm border border-[#a5d6a7]/30">
            <View className="flex-row items-center gap-2 mb-2">
              <Ionicons name="leaf" size={20} color="#006d3e" />
              <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Trees Eq.</Text>
            </View>
            <View className="flex-row items-baseline gap-1">
              <Text className="text-3xl font-bold text-[#0d1e25]">114</Text>
              <Text className="text-sm font-bold text-gray-500">Mature</Text>
            </View>
            <Text className="text-[10px] text-gray-500 mt-4 font-bold leading-3">Equivalent oxygen for 228 people/day</Text>
          </View>
        </View>

        {/* Waste Types Breakdown */}
        <View className="bg-white border border-[#a5d6a7]/30 rounded-[24px] p-6 mb-6 shadow-sm">
          <Text className="text-xl font-bold text-[#0d1e25] mb-6">Waste Types</Text>
          
          <View className="gap-4">
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-full bg-[#006d3e]/10 items-center justify-center">
                <Ionicons name="wine" size={20} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Glass</Text>
                  <Text className="font-bold text-[#0d1e25]">42%</Text>
                </View>
                <View className="h-1.5 bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#006d3e]" style={{ width: '42%' }} />
                </View>
              </View>
            </View>

            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-full bg-[#006d3e]/10 items-center justify-center">
                <Ionicons name="document-text" size={20} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Paper</Text>
                  <Text className="font-bold text-[#0d1e25]">28%</Text>
                </View>
                <View className="h-1.5 bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#006d3e]" style={{ width: '28%' }} />
                </View>
              </View>
            </View>

            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-full bg-[#006d3e]/10 items-center justify-center">
                <Ionicons name="cube" size={20} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Plastic</Text>
                  <Text className="font-bold text-[#0d1e25]">18%</Text>
                </View>
                <View className="h-1.5 bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#006d3e]" style={{ width: '18%' }} />
                </View>
              </View>
            </View>

            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-full bg-[#006d3e]/10 items-center justify-center">
                <Ionicons name="trash-bin" size={20} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Others</Text>
                  <Text className="font-bold text-[#0d1e25]">12%</Text>
                </View>
                <View className="h-1.5 bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#006d3e]" style={{ width: '12%' }} />
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
