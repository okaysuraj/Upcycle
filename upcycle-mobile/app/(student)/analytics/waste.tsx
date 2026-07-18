import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function WasteAnalyticsReport() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-2">
          <Ionicons name="leaf" size={24} color="#00522d" />
          <Text className="text-2xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 bg-[#006d3e] rounded-full items-center justify-center shadow-sm">
            <Ionicons name="download-outline" size={20} color="#92ecb1" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Screen Title & Export Action */}
        <View className="mb-6 gap-2">
          <Text className="text-2xl font-bold text-[#0d1e25]">Waste Analytics Report</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity className="flex-row items-center gap-2 px-4 py-2 bg-[#dff1fb] rounded-full">
              <Ionicons name="document-text" size={16} color="#00522d" />
              <Text className="text-[#00522d] font-bold text-sm">PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-2 px-4 py-2 bg-[#dff1fb] rounded-full">
              <Ionicons name="grid" size={16} color="#00522d" />
              <Text className="text-[#00522d] font-bold text-sm">Excel</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Filters */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible pb-2">
            <TouchableOpacity className="flex-row items-center gap-2 px-4 py-2 bg-[#f4faff] rounded-xl border border-[#bec9be]/30 mr-2">
              <Ionicons name="calendar" size={16} color="#3f4941" />
              <Text className="text-[#3f4941] font-bold text-sm">Last 30 Days</Text>
              <Ionicons name="chevron-down" size={16} color="#3f4941" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-2 px-4 py-2 bg-[#f4faff] rounded-xl border border-[#bec9be]/30 mr-2">
              <Ionicons name="location" size={16} color="#3f4941" />
              <Text className="text-[#3f4941] font-bold text-sm">All Zones</Text>
              <Ionicons name="chevron-down" size={16} color="#3f4941" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center bg-[#d9e6da] rounded-xl">
              <Ionicons name="options" size={20} color="#5b675e" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Metrics Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
          
          {/* Diversion Rate */}
          <View className="w-full bg-[#f4faff] rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-[#3f4941] mb-1 font-bold">Diversion Rate</Text>
              <Text className="text-[32px] font-bold text-[#00522d]">68.4%</Text>
              <View className="flex-row items-center gap-1 mt-1">
                <Ionicons name="arrow-up" size={12} color="#2eb872" />
                <Text className="text-[#2eb872] text-[10px] font-bold">+4.2% vs last month</Text>
              </View>
            </View>
            <View className="w-20 h-20 items-center justify-center relative">
              {/* Circular Progress Placeholder */}
              <View className="w-full h-full rounded-full border-4 border-[#006d3e]" style={{ borderRightColor: '#d9e6da', transform: [{ rotate: '45deg' }] }} />
              <View className="absolute">
                <Ionicons name="sync" size={24} color="#00522d" style={{ transform: [{ rotate: '-45deg' }] }} />
              </View>
            </View>
          </View>

          {/* Tonnage */}
          <View className="w-[47%] bg-[#f4faff] rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm">
            <View className="w-10 h-10 rounded-full bg-[#d9e6da] items-center justify-center mb-3">
              <Ionicons name="barbell" size={20} color="#5b675e" />
            </View>
            <Text className="text-sm font-bold text-[#3f4941]">Total Tonnage</Text>
            <View className="flex-row items-baseline gap-1 mt-1">
              <Text className="text-2xl font-bold text-[#0d1e25]">142.8</Text>
              <Text className="text-sm text-[#0d1e25]">t</Text>
            </View>
          </View>

          {/* Contamination */}
          <View className="w-[47%] bg-[#f4faff] rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm">
            <View className="w-10 h-10 rounded-full bg-[#ffdad6] items-center justify-center mb-3">
              <Ionicons name="warning" size={20} color="#ba1a1a" />
            </View>
            <Text className="text-sm font-bold text-[#3f4941]">Contamination</Text>
            <View className="flex-row items-baseline gap-1 mt-1">
              <Text className="text-2xl font-bold text-[#0d1e25]">12.1</Text>
              <Text className="text-sm text-[#0d1e25]">%</Text>
            </View>
          </View>

        </View>

        {/* Monthly Performance */}
        <View className="bg-[#f4faff] rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-[#0d1e25]">Monthly Performance</Text>
            <View className="flex-row items-center gap-1">
              <View className="w-2 h-2 rounded-full bg-[#00522d]" />
              <Text className="text-[10px] font-bold text-[#3f4941]">Target</Text>
            </View>
          </View>

          <View className="h-48 flex-row items-end justify-between px-2 relative">
             <View className="absolute inset-0 flex-col justify-between py-1 opacity-20">
               <View className="border-t border-[#6f7a70] w-full" />
               <View className="border-t border-[#6f7a70] w-full" />
               <View className="border-t border-[#6f7a70] w-full" />
               <View className="border-t border-[#6f7a70] w-full" />
             </View>
             
             {/* Chart Bars */}
             <View className="items-center gap-2 w-8">
               <View className="w-full bg-[#bdcabf] rounded-t-lg h-24" />
               <Text className="text-[10px] font-bold text-[#3f4941]">Apr</Text>
             </View>
             <View className="items-center gap-2 w-8">
               <View className="w-full bg-[#bdcabf] rounded-t-lg h-32" />
               <Text className="text-[10px] font-bold text-[#3f4941]">May</Text>
             </View>
             <View className="items-center gap-2 w-8">
               <View className="w-full bg-[#bdcabf] rounded-t-lg h-28" />
               <Text className="text-[10px] font-bold text-[#3f4941]">Jun</Text>
             </View>
             <View className="items-center gap-2 w-8">
               <View className="w-full bg-[#00522d] rounded-t-lg h-40 shadow-sm" />
               <Text className="text-[10px] font-bold text-[#0d1e25]">Jul</Text>
             </View>
             <View className="items-center gap-2 w-8 opacity-50">
               <View className="w-full bg-[#bdcabf] rounded-t-lg h-20" />
               <Text className="text-[10px] font-bold text-[#3f4941]">Aug</Text>
             </View>
          </View>
        </View>

        {/* Top Zones Table */}
        <View className="bg-white/70 rounded-[24px] border border-[#a2d2a4]/30 shadow-sm overflow-hidden mb-6">
          <View className="px-5 py-4 border-b border-[#bec9be]/20 flex-row justify-between items-center">
            <Text className="text-lg font-bold text-[#0d1e25]">Top Producing Zones</Text>
            <TouchableOpacity>
              <Text className="text-[#00522d] font-bold text-sm">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="px-5 py-4 flex-row items-center justify-between border-b border-[#bec9be]/20">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <Text className="text-[#00522d] font-bold text-lg">01</Text>
              </View>
              <View>
                <Text className="font-bold text-[#0d1e25]">Industrial District A</Text>
                <Text className="text-xs text-[#3f4941]">Mixed Recyclables</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-[#0d1e25]">42.4 t</Text>
              <View className="w-16 h-1 bg-[#dff1fb] mt-1 rounded-full">
                <View className="bg-[#00522d] h-full w-[80%]" />
              </View>
            </View>
          </View>
          
          <View className="px-5 py-4 flex-row items-center justify-between border-b border-[#bec9be]/20">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <Text className="text-[#00522d] font-bold text-lg">02</Text>
              </View>
              <View>
                <Text className="font-bold text-[#0d1e25]">Central Market</Text>
                <Text className="text-xs text-[#3f4941]">Organic Waste</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-[#0d1e25]">31.8 t</Text>
              <View className="w-16 h-1 bg-[#dff1fb] mt-1 rounded-full">
                <View className="bg-[#00522d] h-full w-[60%]" />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
