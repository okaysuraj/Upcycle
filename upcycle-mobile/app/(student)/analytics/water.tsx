import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function WaterAnalyticsReport() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="w-10 h-10 rounded-full bg-[#006d3e] items-center justify-center">
          <Text className="text-white font-bold">JD</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6 gap-4">
          <View>
            <Text className="text-[10px] font-bold text-[#556158] uppercase tracking-widest">Analytics Dashboard</Text>
            <Text className="text-3xl font-bold text-[#0d1e25] mt-1 leading-tight">Water Usage & Sustainability</Text>
          </View>
          <View className="flex-row gap-3">
            <TouchableOpacity className="px-6 py-2 bg-[#d0e4ff] rounded-full flex-row items-center gap-2">
              <Ionicons name="download" size={16} color="#001e2f" />
              <Text className="text-[#001e2f] font-bold text-sm">Export PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 py-2 bg-[#00522d] rounded-full flex-row items-center gap-2 shadow-sm">
              <Ionicons name="calendar" size={16} color="white" />
              <Text className="text-white font-bold text-sm">Last 30 Days</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bento Grid Layout */}
        <View className="gap-4 mb-6">
          
          {/* Key Metric: Total Volume */}
          <View className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm relative overflow-hidden">
            <View className="absolute top-0 right-0 p-4 opacity-10">
              <Ionicons name="water" size={80} color="#006494" />
            </View>
            <View className="flex-row items-center gap-2 mb-4">
              <Ionicons name="water-outline" size={20} color="#006494" />
              <Text className="text-sm font-bold text-[#3f4941]">Total Volume Consumed</Text>
            </View>
            <View className="flex-row items-baseline gap-2">
              <Text className="text-5xl font-bold text-[#0d1e25]">1.2M</Text>
              <Text className="text-sm font-bold text-[#3f4941]">Gallons</Text>
            </View>
            <View className="mt-4 flex-row items-center gap-1">
              <Ionicons name="trending-up" size={16} color="#ba1a1a" />
              <Text className="text-[#ba1a1a] font-bold text-sm">4.2% from last month</Text>
            </View>
          </View>

          <View className="flex-row justify-between gap-4">
            
            {/* Key Metric: Greywater */}
            <View className="w-[47%] bg-white rounded-[24px] p-4 border border-[#bec9be]/30 shadow-sm">
              <View className="flex-row items-center gap-2 mb-3">
                <Ionicons name="sync" size={16} color="#2eb872" />
                <Text className="text-xs font-bold text-[#3f4941]">Greywater</Text>
              </View>
              <Text className="text-2xl font-bold text-[#0d1e25] mb-2">68%</Text>
              <View className="w-full bg-[#d9ebf5] h-2 rounded-full overflow-hidden mb-2">
                <View className="bg-[#2eb872] h-full w-[68%]" />
              </View>
              <Text className="text-[10px] text-[#3f4941]">Target: 75%</Text>
            </View>

            {/* Alert Card */}
            <View className="w-[47%] bg-[#ffdad6]/40 rounded-[24px] p-4 border border-[#ba1a1a]/20 justify-between">
              <View>
                <View className="flex-row justify-between items-center mb-2">
                  <Ionicons name="warning" size={16} color="#ba1a1a" />
                  <View className="bg-[#ba1a1a] px-2 py-0.5 rounded-full">
                    <Text className="text-white text-[8px] font-bold uppercase">Active</Text>
                  </View>
                </View>
                <Text className="text-lg font-bold text-[#93000a] leading-tight mb-1">2 Alerts</Text>
                <Text className="text-[10px] text-[#3f4941] leading-tight">Science Wing B: Pressure drop</Text>
              </View>
            </View>

          </View>

        </View>

        {/* Seasonal Trend Analysis */}
        <View className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-[#0d1e25]">Seasonal Trend</Text>
            <View className="flex-row gap-2">
              <View className="px-3 py-1 bg-[#dff1fb] rounded-full">
                <Text className="text-[#0d1e25] font-bold text-[10px]">Monthly</Text>
              </View>
            </View>
          </View>
          
          <View className="h-40 flex-row items-end justify-between px-2 pt-4 border-l border-b border-[#bec9be]/20">
            {/* Fake Chart */}
            <View className="items-center w-8 relative group">
              <View className="w-full bg-[#d0e4ff] h-24 rounded-t-lg relative overflow-hidden">
                <View className="absolute bottom-0 w-full h-[66%] bg-[#006494] rounded-t-lg" />
              </View>
              <Text className="text-[10px] font-bold text-[#3f4941] mt-2">Jan</Text>
            </View>
            <View className="items-center w-8 relative group">
              <View className="w-full bg-[#d0e4ff] h-28 rounded-t-lg relative overflow-hidden">
                <View className="absolute bottom-0 w-full h-[50%] bg-[#006494] rounded-t-lg" />
              </View>
              <Text className="text-[10px] font-bold text-[#3f4941] mt-2">Feb</Text>
            </View>
            <View className="items-center w-8 relative group">
              <View className="w-full bg-[#d0e4ff] h-20 rounded-t-lg relative overflow-hidden">
                <View className="absolute bottom-0 w-full h-[75%] bg-[#006494] rounded-t-lg" />
              </View>
              <Text className="text-[10px] font-bold text-[#3f4941] mt-2">Mar</Text>
            </View>
            <View className="items-center w-8 relative group">
              <View className="w-full bg-[#d0e4ff] h-32 rounded-t-lg relative overflow-hidden">
                <View className="absolute bottom-0 w-full h-[40%] bg-[#006494] rounded-t-lg" />
              </View>
              <Text className="text-[10px] font-bold text-[#3f4941] mt-2">Apr</Text>
            </View>
            <View className="items-center w-8 relative group">
              <View className="w-full bg-[#d0e4ff] h-16 rounded-t-lg relative overflow-hidden">
                <View className="absolute bottom-0 w-full h-[90%] bg-[#006494] rounded-t-lg" />
              </View>
              <Text className="text-[10px] font-bold text-[#3f4941] mt-2">May</Text>
            </View>
          </View>
          
          <View className="mt-8 flex-row items-center justify-center gap-6">
            <View className="flex-row items-center gap-2">
              <View className="w-3 h-3 rounded-full bg-[#006494]" />
              <Text className="text-[10px] font-bold text-[#3f4941]">Current Year</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="w-3 h-3 rounded-full bg-[#d0e4ff]" />
              <Text className="text-[10px] font-bold text-[#3f4941]">Projected</Text>
            </View>
          </View>
        </View>

        {/* Conservation Goal */}
        <View className="bg-white/70 rounded-[24px] p-6 border border-[#a5d6a7]/30 shadow-sm relative overflow-hidden mb-6">
          <View className="absolute -top-12 -right-12 w-32 h-32 bg-[#00522d]/10 rounded-full" />
          <View>
            <Text className="text-xl font-bold text-[#00522d] mb-1">Conservation Progress</Text>
            <Text className="text-sm text-[#3f4941]">Municipal Sustainability Target 2024</Text>
          </View>
          
          <View className="py-8 items-center">
            <View className="w-48 h-48 relative">
              <View className="w-full h-full rounded-full border-[12px] border-[#d9ebf5]" />
              <View className="absolute w-full h-full rounded-full border-[12px] border-[#00522d]" style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent', transform: [{ rotate: '45deg' }] }} />
              <View className="absolute inset-0 items-center justify-center">
                <Text className="text-5xl font-bold text-[#00522d]">82%</Text>
                <Text className="text-[10px] font-bold text-[#3f4941]">REACHED</Text>
              </View>
            </View>
          </View>
          
          <View className="bg-white/50 p-4 rounded-xl border border-white">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm font-bold text-[#0d1e25]">Daily Limit</Text>
              <Text className="text-sm font-bold text-[#00522d]">12k / 15k L</Text>
            </View>
            <View className="w-full h-2 bg-[#d9ebf5] rounded-full">
              <View className="h-full bg-[#00522d] w-[80%] rounded-full" />
            </View>
          </View>
        </View>

        {/* Building Level Comparison */}
        <View className="bg-white rounded-[24px] border border-[#bec9be]/30 shadow-sm overflow-hidden mb-6">
          <View className="px-5 py-4 border-b border-[#bec9be]/30 flex-row justify-between items-center">
            <Text className="text-lg font-bold text-[#0d1e25]">Building Usage</Text>
            <TouchableOpacity className="flex-row items-center gap-2 bg-[#dff1fb] px-3 py-1 rounded-full">
              <Ionicons name="filter" size={16} color="#3f4941" />
              <Text className="text-[10px] font-bold text-[#3f4941]">Filter by Zone</Text>
            </TouchableOpacity>
          </View>
          
          <View className="px-5 py-3 border-b border-[#bec9be]/30 flex-row">
            <Text className="flex-1 text-[10px] font-bold text-[#3f4941]">Location</Text>
            <Text className="w-20 text-[10px] font-bold text-[#3f4941] text-right">M Gal</Text>
            <Text className="w-20 text-[10px] font-bold text-[#3f4941] text-right">Change</Text>
          </View>
          
          <View className="px-5 py-4 border-b border-[#bec9be]/10 flex-row items-center">
            <View className="flex-1 flex-row items-center gap-3">
              <Ionicons name="business" size={20} color="#00522d" />
              <Text className="text-sm font-bold text-[#0d1e25]">Main Office HQ</Text>
            </View>
            <Text className="w-20 text-sm text-[#0d1e25] text-right">0.82</Text>
            <Text className="w-20 text-sm font-bold text-[#ba1a1a] text-right">+2.4%</Text>
          </View>
          
          <View className="px-5 py-4 flex-row items-center">
            <View className="flex-1 flex-row items-center gap-3">
              <Ionicons name="business" size={20} color="#00522d" />
              <Text className="text-sm font-bold text-[#0d1e25]">Research Annex</Text>
            </View>
            <Text className="w-20 text-sm text-[#0d1e25] text-right">0.34</Text>
            <Text className="w-20 text-sm font-bold text-[#2eb872] text-right">-1.2%</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
