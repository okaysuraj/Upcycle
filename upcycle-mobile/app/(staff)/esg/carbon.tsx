import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CarbonFootprint() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-24 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center overflow-hidden">
            <Ionicons name="person" size={16} color="white" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Ionicons name="notifications-outline" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        {/* Hero Real-Time Metric */}
        <View className="bg-[#00522d] rounded-3xl p-6 shadow-lg mb-6">
          <Text className="text-white/80 text-xs uppercase tracking-widest font-bold">Real-time Emissions</Text>
          <View className="flex-row items-baseline gap-2 mt-1">
            <Text className="text-5xl font-bold text-white tracking-tight">1,248</Text>
            <Text className="text-xl font-bold text-white">kg CO2e</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-4 bg-white/20 self-start px-3 py-1 rounded-full">
            <Ionicons name="trending-down" size={16} color="white" />
            <Text className="text-white text-xs font-bold">-4.2% from last month</Text>
          </View>
        </View>

        {/* Main Bento Grid */}
        <View className="flex-row gap-4 mb-4">
          <View className="flex-1 bg-white/70 rounded-[24px] p-4 border border-white">
            <View className="w-10 h-10 rounded-full bg-[#d9ebf5] items-center justify-center mb-3">
              <Ionicons name="bus" size={20} color="#00522d" />
            </View>
            <Text className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Travel</Text>
            <Text className="text-2xl font-bold text-[#00522d]">420kg</Text>
          </View>
          
          <View className="flex-1 bg-white/70 rounded-[24px] p-4 border border-white">
            <View className="w-10 h-10 rounded-full bg-[#d9ebf5] items-center justify-center mb-3">
              <Ionicons name="flash" size={20} color="#00522d" />
            </View>
            <Text className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Energy</Text>
            <Text className="text-2xl font-bold text-[#00522d]">682kg</Text>
          </View>
        </View>

        {/* Scope Breakdown */}
        <View className="bg-white rounded-[24px] p-6 border border-gray-200 mb-6 shadow-sm">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-bold text-[#00522d]">Emissions by Scope</Text>
            <Ionicons name="information-circle-outline" size={24} color="#6f7a70" />
          </View>
          
          <View className="space-y-4 gap-4">
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="font-bold text-[#0d1e25]">Scope 1 (Direct)</Text>
                <Text className="font-bold text-[#0d1e25]">12%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '12%' }} />
              </View>
            </View>
            
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="font-bold text-[#0d1e25]">Scope 2 (Indirect Energy)</Text>
                <Text className="font-bold text-[#0d1e25]">34%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '34%' }} />
              </View>
            </View>
            
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="font-bold text-[#0d1e25]">Scope 3 (Value Chain)</Text>
                <Text className="font-bold text-[#0d1e25]">54%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '54%' }} />
              </View>
            </View>
          </View>
        </View>

        {/* Net Zero Roadmap */}
        <View className="bg-white rounded-[24px] p-6 border border-gray-200 mb-6 shadow-sm">
          <Text className="text-xl font-bold text-[#00522d] mb-4">Path to Net Zero</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-2 px-2">
            <View className="w-36 p-4 bg-[#dff1fb] rounded-2xl border border-[#d9ebf5] mr-4">
              <Text className="text-gray-500 text-xs font-bold mb-1">2024</Text>
              <Text className="font-bold text-[#00522d]">Solar Grid Phase 1</Text>
              <View className="flex-row items-center mt-3 gap-1">
                <Ionicons name="checkmark-circle" size={12} color="#2eb872" />
                <Text className="text-[10px] font-bold text-[#2eb872] uppercase">Complete</Text>
              </View>
            </View>

            <View className="w-36 p-4 bg-[#00522d] rounded-2xl shadow-md mr-4">
              <Text className="text-white/80 text-xs font-bold mb-1">2025</Text>
              <Text className="font-bold text-white">HVAC Optimization</Text>
              <View className="flex-row items-center mt-3 gap-1">
                <Ionicons name="sync" size={12} color="white" />
                <Text className="text-[10px] font-bold text-white uppercase">In Progress</Text>
              </View>
            </View>

            <View className="w-36 p-4 bg-[#dff1fb] rounded-2xl border border-[#d9ebf5]">
              <Text className="text-gray-500 text-xs font-bold mb-1">2027</Text>
              <Text className="font-bold text-[#00522d]">Electric Fleet</Text>
              <View className="flex-row items-center mt-3 gap-1">
                <Ionicons name="time" size={12} color="#6f7a70" />
                <Text className="text-[10px] font-bold text-[#6f7a70] uppercase">Planned</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="mb-12" />
      </ScrollView>
    </View>
  );
}