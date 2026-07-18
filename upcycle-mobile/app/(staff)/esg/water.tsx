import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function WaterUsage() {
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
        {/* Live Flow Analytics */}
        <View className="mb-6">
          <View className="flex-row items-end justify-between mb-4">
            <View>
              <Text className="text-xs text-gray-500 uppercase tracking-widest font-bold">Campus Status</Text>
              <Text className="text-2xl font-bold text-[#0d1e25]">Live Flow Rate</Text>
            </View>
            <View className="items-end">
              <View className="flex-row items-baseline gap-1">
                <Text className="text-3xl font-bold text-[#00522d]">1.2k</Text>
                <Text className="text-gray-500 font-bold">L/min</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="arrow-down" size={12} color="#2eb872" />
                <Text className="text-[#2eb872] text-xs font-bold">4.2% vs avg</Text>
              </View>
            </View>
          </View>
          
          <View className="bg-white/70 rounded-[24px] p-6 h-48 relative overflow-hidden border border-white shadow-sm flex-col justify-between">
            <View className="flex-row justify-between items-start z-10">
              <View className="flex-row items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200">
                <View className="w-2 h-2 rounded-full bg-[#2eb872]" />
                <Text className="text-xs font-bold text-[#00522d]">Normal Pressure</Text>
              </View>
              <Ionicons name="stats-chart" size={20} color="#6f7a70" />
            </View>
            
            {/* Simulated Graph Area (Placeholder) */}
            <View className="absolute bottom-0 left-0 right-0 h-24 bg-[#00522d]/10 border-t border-[#00522d]/20" />
            
            <View className="z-10">
              <Text className="font-bold text-gray-500">System Health: 98% Optimal</Text>
            </View>
          </View>
        </View>

        {/* Active Alerts */}
        <View className="mb-6">
          <Text className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Critical Alerts (2)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4 px-4 pb-2">
            <View className="w-72 bg-[#ffdad6]/40 border border-[#ba1a1a]/20 rounded-[24px] p-4 flex-row gap-4 mr-4">
              <View className="w-12 h-12 rounded-xl bg-[#ba1a1a]/10 items-center justify-center">
                <Ionicons name="warning" size={24} color="#ba1a1a" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="font-bold text-[#ba1a1a]">Flow Detected</Text>
                  <Text className="text-[10px] text-gray-500 font-bold">2m ago</Text>
                </View>
                <Text className="text-xs text-[#0d1e25] mt-1 mb-3">Science Block B - Room 402. Unusually high flow for 15+ mins.</Text>
                <TouchableOpacity className="flex-row items-center gap-1">
                  <Text className="text-xs font-bold text-[#ba1a1a] uppercase tracking-wider">Isolate Valve</Text>
                  <Ionicons name="chevron-forward" size={16} color="#ba1a1a" />
                </TouchableOpacity>
              </View>
            </View>

            <View className="w-72 bg-white border border-gray-200 rounded-[24px] p-4 flex-row gap-4">
              <View className="w-12 h-12 rounded-xl bg-gray-100 items-center justify-center">
                <Ionicons name="wifi" size={24} color="#3f4941" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="font-bold text-[#0d1e25]">Meter Offline</Text>
                  <Text className="text-[10px] text-gray-500 font-bold">14m ago</Text>
                </View>
                <Text className="text-xs text-gray-500 mt-1 mb-3">Gym Complex - Meter #0092. Signal loss detected.</Text>
                <TouchableOpacity className="flex-row items-center gap-1">
                  <Text className="text-xs font-bold text-[#00522d] uppercase tracking-wider">Diagnostics</Text>
                  <Ionicons name="chevron-forward" size={16} color="#00522d" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Building Efficiency */}
        <View className="mb-12">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xs text-gray-500 uppercase tracking-widest font-bold">Building Efficiency</Text>
            <TouchableOpacity>
              <Text className="text-[#00522d] font-bold text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            <View className="bg-white rounded-[20px] p-4 border border-gray-200 shadow-sm flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="business" size={20} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25]">Main Hall</Text>
                  <View className="flex-row items-center gap-2 mt-1">
                    <View className="h-1.5 w-16 bg-[#d9e6da] rounded-full overflow-hidden">
                      <View className="h-full bg-[#00522d]" style={{ width: '45%' }} />
                    </View>
                    <Text className="text-[10px] text-gray-500 font-bold">On Track</Text>
                  </View>
                </View>
              </View>
              <View className="items-end">
                <View className="flex-row items-baseline gap-1">
                  <Text className="font-bold text-[#0d1e25]">452</Text>
                  <Text className="text-[10px] text-gray-500 font-bold">L/day</Text>
                </View>
                <Text className="text-[10px] text-[#2eb872] font-bold">-12%</Text>
              </View>
            </View>

            <View className="bg-white rounded-[20px] p-4 border border-gray-200 shadow-sm flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="flask" size={20} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25]">Science Block</Text>
                  <View className="flex-row items-center gap-2 mt-1">
                    <View className="h-1.5 w-16 bg-[#d9e6da] rounded-full overflow-hidden">
                      <View className="h-full bg-[#ba1a1a]" style={{ width: '82%' }} />
                    </View>
                    <Text className="text-[10px] text-[#ba1a1a] font-bold">High Usage</Text>
                  </View>
                </View>
              </View>
              <View className="items-end">
                <View className="flex-row items-baseline gap-1">
                  <Text className="font-bold text-[#0d1e25]">1,280</Text>
                  <Text className="text-[10px] text-gray-500 font-bold">L/day</Text>
                </View>
                <Text className="text-[10px] text-[#ba1a1a] font-bold">+24%</Text>
              </View>
            </View>

            <View className="bg-white rounded-[20px] p-4 border border-gray-200 shadow-sm flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="bicycle" size={20} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25]">Sports Hub</Text>
                  <View className="flex-row items-center gap-2 mt-1">
                    <View className="h-1.5 w-16 bg-[#d9e6da] rounded-full overflow-hidden">
                      <View className="h-full bg-[#00522d]" style={{ width: '30%' }} />
                    </View>
                    <Text className="text-[10px] text-gray-500 font-bold">Efficient</Text>
                  </View>
                </View>
              </View>
              <View className="items-end">
                <View className="flex-row items-baseline gap-1">
                  <Text className="font-bold text-[#0d1e25]">856</Text>
                  <Text className="text-[10px] text-gray-500 font-bold">L/day</Text>
                </View>
                <Text className="text-[10px] text-[#2eb872] font-bold">-5%</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
