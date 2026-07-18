import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function EnergyUsage() {
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
          <View className="w-8 h-8 rounded-full bg-[#80d99f] items-center justify-center overflow-hidden border border-[#00522d]/10">
            <Ionicons name="person" size={16} color="#00522d" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Ionicons name="notifications-outline" size={24} color="#6f7a70" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        {/* Hero: Real-time Wattage */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-bold text-[#0d1e25]">Energy Overview</Text>
            <View className="px-3 py-1 rounded-full bg-[#2eb872]/20 flex-row items-center gap-1">
              <View className="w-2 h-2 rounded-full bg-[#2eb872]" />
              <Text className="text-[#00522d] text-xs font-bold">LIVE</Text>
            </View>
          </View>
          
          <View className="bg-white rounded-[24px] p-6 border border-gray-200 shadow-sm overflow-hidden">
            {/* Chart Simulation */}
            <View className="flex-row justify-between items-end mb-8 h-40 gap-1">
              <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '65%' }} />
              <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '72%' }} />
              <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '85%' }} />
              <View className="flex-1 bg-[#00522d] rounded-t-lg" style={{ height: '40%' }} />
              <View className="flex-1 bg-[#00522d] rounded-t-lg" style={{ height: '55%' }} />
              <View className="flex-1 bg-[#00522d] rounded-t-lg" style={{ height: '48%' }} />
              <View className="flex-1 bg-[#00522d] rounded-t-lg" style={{ height: '60%' }} />
            </View>

            <View className="flex-row gap-4">
              <View className="flex-1">
                <View className="flex-row items-center gap-1 mb-1">
                  <Ionicons name="flash" size={16} color="#6f7a70" />
                  <Text className="text-xs text-gray-500 font-bold">Active Load</Text>
                </View>
                <Text className="text-2xl font-bold text-[#00522d]">42.8 kW</Text>
              </View>
              <View className="flex-1">
                <View className="flex-row items-center gap-1 mb-1">
                  <Ionicons name="sunny" size={16} color="#6f7a70" />
                  <Text className="text-xs text-gray-500 font-bold">Solar Contrib.</Text>
                </View>
                <Text className="text-2xl font-bold text-[#3c6842]">18.2 kW</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Energy Mix Breakdown */}
        <View className="mb-6">
          <Text className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Energy Mix Breakdown</Text>
          <View className="bg-white/70 rounded-2xl p-4 flex-row items-center gap-4 border border-white">
            <View className="w-20 h-20 items-center justify-center relative">
              <View className="absolute inset-0 rounded-full border-4 border-[#d9e6da]" />
              <View className="absolute inset-0 rounded-full border-4 border-[#00522d] border-t-transparent border-l-transparent" style={{ transform: [{ rotate: '45deg' }] }} />
              <Ionicons name="leaf" size={24} color="#00522d" />
            </View>
            <View className="flex-1 gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="text-sm font-bold text-gray-500">Renewable</Text>
                <Text className="text-sm font-bold text-[#00522d]">60%</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-sm font-bold text-gray-500">Grid</Text>
                <Text className="text-sm font-bold text-[#3c6842]">25%</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-sm font-bold text-gray-500">Battery Store</Text>
                <Text className="text-sm font-bold text-[#556158]">15%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Peak Reduction Recommendations */}
        <View className="mb-6">
          <Text className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Smart Recommendations</Text>
          <View className="flex-row gap-4">
            <View className="flex-1 bg-white border border-gray-200 rounded-[24px] p-4">
              <View className="w-10 h-10 rounded-full bg-[#ffdad6]/50 items-center justify-center mb-3">
                <Ionicons name="thermometer" size={20} color="#ba1a1a" />
              </View>
              <Text className="text-sm font-bold text-[#0d1e25] mb-1">HVAC Duty Cycling</Text>
              <Text className="text-xs text-gray-500 mb-3">Reduce peak by 12%</Text>
              <TouchableOpacity className="w-full py-2 bg-[#9cf6ba] rounded-full items-center">
                <Text className="text-[#00522d] font-bold text-xs">Apply</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-1 bg-white border border-gray-200 rounded-[24px] p-4">
              <View className="w-10 h-10 rounded-full bg-[#d9e6da] items-center justify-center mb-3">
                <Ionicons name="car" size={20} color="#556158" />
              </View>
              <Text className="text-sm font-bold text-[#0d1e25] mb-1">Charge Delay</Text>
              <Text className="text-xs text-gray-500 mb-3">Saves $450/day</Text>
              <TouchableOpacity className="w-full py-2 bg-white border border-[#bec9be] rounded-full items-center">
                <Text className="text-[#3f4941] font-bold text-xs">Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Department Usage */}
        <View className="mb-12">
          <Text className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Department Usage</Text>
          <View className="gap-3">
            <View className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex-row items-center">
              <View className="w-12 h-12 rounded-lg bg-[#d9ebf5] items-center justify-center mr-4">
                <Ionicons name="flask" size={24} color="#00522d" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Main Laboratory</Text>
                  <Text className="text-xs font-bold text-gray-500">14.2 kW</Text>
                </View>
                <View className="h-2 bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: '78%' }} />
                </View>
              </View>
            </View>

            <View className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex-row items-center">
              <View className="w-12 h-12 rounded-lg bg-[#d9ebf5] items-center justify-center mr-4">
                <Ionicons name="business" size={24} color="#00522d" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Admin Wing B</Text>
                  <Text className="text-xs font-bold text-gray-500">8.5 kW</Text>
                </View>
                <View className="h-2 bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: '45%' }} />
                </View>
              </View>
            </View>

            <View className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex-row items-center">
              <View className="w-12 h-12 rounded-lg bg-[#d9ebf5] items-center justify-center mr-4">
                <Ionicons name="basketball" size={24} color="#00522d" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between mb-1">
                  <Text className="font-bold text-[#0d1e25]">Athletic Center</Text>
                  <Text className="text-xs font-bold text-gray-500">20.1 kW</Text>
                </View>
                <View className="h-2 bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#ba1a1a]" style={{ width: '92%' }} />
                </View>
              </View>
              <View className="ml-4">
                <Ionicons name="trending-up" size={16} color="#ba1a1a" />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
