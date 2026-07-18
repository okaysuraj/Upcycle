import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CarbonDashboard() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center">
            <Ionicons name="person" size={16} color="white" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">EcoCampus</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Hero Real-Time Metric */}
        <View className="bg-[#00522d] rounded-[24px] p-6 mb-4 shadow-sm relative overflow-hidden">
          <Text className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Real-time Emissions</Text>
          <View className="flex-row items-baseline gap-2 mb-2">
            <Text className="text-5xl font-bold text-white leading-none">1,248</Text>
            <Text className="text-2xl font-bold text-white">kg CO2e</Text>
          </View>
          <View className="flex-row items-center bg-white/20 px-3 py-1 rounded-full self-start mt-2">
            <Ionicons name="trending-down" size={16} color="white" />
            <Text className="text-white font-bold text-xs ml-1">-4.2% from last month</Text>
          </View>
        </View>

        {/* Main Bento Grid */}
        <View className="flex-row justify-between gap-4 mb-4">
          
          {/* Travel */}
          <View className="flex-1 bg-white/70 border border-[#bec9be]/30 rounded-[24px] p-4 shadow-sm">
            <View className="w-10 h-10 rounded-full bg-[#d9ebf5] items-center justify-center mb-3">
              <Ionicons name="car" size={20} color="#00522d" />
            </View>
            <Text className="text-xs font-bold text-[#3f4941]">Travel</Text>
            <Text className="text-xl font-bold text-[#00522d] mt-1">420kg</Text>
          </View>
          
          {/* Energy */}
          <View className="flex-1 bg-white/70 border border-[#bec9be]/30 rounded-[24px] p-4 shadow-sm">
            <View className="w-10 h-10 rounded-full bg-[#d9ebf5] items-center justify-center mb-3">
              <Ionicons name="flash" size={20} color="#00522d" />
            </View>
            <Text className="text-xs font-bold text-[#3f4941]">Energy</Text>
            <Text className="text-xl font-bold text-[#00522d] mt-1">682kg</Text>
          </View>

        </View>

        {/* Scope Breakdown */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-bold text-[#00522d]">Emissions by Scope</Text>
            <Ionicons name="information-circle-outline" size={20} color="#6f7a70" />
          </View>
          
          <View className="gap-4">
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Scope 1 (Direct)</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">12%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d] w-[12%]" />
              </View>
            </View>
            
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Scope 2 (Indirect Energy)</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">34%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d] w-[34%]" />
              </View>
            </View>
            
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Scope 3 (Value Chain)</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">54%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d] w-[54%]" />
              </View>
            </View>
          </View>
        </View>

        {/* Net Zero Roadmap */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <Text className="text-xl font-bold text-[#00522d] mb-4">Path to Net Zero</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible">
            
            <View className="w-36 p-4 bg-[#dff1fb] rounded-2xl border border-[#bec9be]/20 mr-4">
              <Text className="text-[10px] font-bold text-[#3f4941]">2024</Text>
              <Text className="text-sm font-bold text-[#00522d] mt-1 mb-3">Solar Grid Phase 1</Text>
              <View className="flex-row items-center gap-1">
                <Ionicons name="checkmark-circle" size={16} color="#2eb872" />
                <Text className="text-[10px] font-bold text-[#2eb872] uppercase">Complete</Text>
              </View>
            </View>

            <View className="w-36 p-4 bg-[#00522d] rounded-2xl shadow-sm mr-4">
              <Text className="text-[10px] font-bold text-white/80">2025</Text>
              <Text className="text-sm font-bold text-white mt-1 mb-3">HVAC Optimization</Text>
              <View className="flex-row items-center gap-1">
                <Ionicons name="sync" size={16} color="white" />
                <Text className="text-[10px] font-bold text-white uppercase">In Progress</Text>
              </View>
            </View>

            <View className="w-36 p-4 bg-[#dff1fb] rounded-2xl border border-[#bec9be]/20 mr-4">
              <Text className="text-[10px] font-bold text-[#3f4941]">2027</Text>
              <Text className="text-sm font-bold text-[#00522d] mt-1 mb-3">Electric Fleet</Text>
              <View className="flex-row items-center gap-1">
                <Ionicons name="time" size={16} color="#6f7a70" />
                <Text className="text-[10px] font-bold text-[#6f7a70] uppercase">Planned</Text>
              </View>
            </View>

          </ScrollView>
        </View>

        {/* Project Tracking */}
        <View className="mb-6">
          <View className="flex-row justify-between items-end mb-4 px-1">
            <Text className="text-xl font-bold text-[#00522d]">Offset Projects</Text>
            <TouchableOpacity>
              <Text className="text-sm font-bold text-[#00522d]">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="gap-4">
            
            <TouchableOpacity className="bg-white/70 border border-[#bec9be]/30 rounded-2xl p-4 flex-row items-center gap-4 shadow-sm">
              <View className="w-16 h-16 bg-[#d9e6da] rounded-xl overflow-hidden" />
              <View className="flex-1">
                <Text className="text-base font-bold text-[#00522d]">Amazon Reforestation</Text>
                <Text className="text-[10px] text-[#3f4941]">Sequestration: 1.2k tons/yr</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#006d3e" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-white/70 border border-[#bec9be]/30 rounded-2xl p-4 flex-row items-center gap-4 shadow-sm">
              <View className="w-16 h-16 bg-[#d9e6da] rounded-xl overflow-hidden" />
              <View className="flex-1">
                <Text className="text-base font-bold text-[#00522d]">Coastal Wind Initiative</Text>
                <Text className="text-[10px] text-[#3f4941]">Generation: 450 MWh/yr</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#006d3e" />
            </TouchableOpacity>

          </View>
        </View>

        {/* Activity Logs */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm">
          <Text className="text-xl font-bold text-[#00522d] mb-4">Activity Log</Text>
          <View className="gap-6">
            
            <View className="flex-row gap-4">
              <View className="items-center">
                <View className="w-3 h-3 rounded-full bg-[#00522d]" />
                <View className="w-px h-10 bg-[#bec9be] mt-2" />
              </View>
              <View>
                <Text className="text-[10px] font-bold text-[#6f7a70] mb-1">Today, 09:42 AM</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">Data sync: Building A energy sensors updated (+2.4kg)</Text>
              </View>
            </View>

            <View className="flex-row gap-4">
              <View className="items-center">
                <View className="w-3 h-3 rounded-full bg-[#24502c]" />
                <View className="w-px h-10 bg-[#bec9be] mt-2" />
              </View>
              <View>
                <Text className="text-[10px] font-bold text-[#6f7a70] mb-1">Yesterday, 04:15 PM</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">Manual input: Quarterly travel audit verified</Text>
              </View>
            </View>

            <View className="flex-row gap-4 pb-2">
              <View className="items-center">
                <View className="w-3 h-3 rounded-full bg-[#006d3e]" />
              </View>
              <View>
                <Text className="text-[10px] font-bold text-[#6f7a70] mb-1">Oct 12, 11:30 AM</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">Report generated: Q3 Emissions Summary</Text>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}
