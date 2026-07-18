import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';

export default function ESGDashboard() {
  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top App Bar */}
      <View className="px-5 pt-12 pb-4 flex-row justify-between items-center bg-[#f4faff] border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <MaterialIcons name="menu" size={28} color="#3f4941" />
      </View>

      <View className="px-5 py-6 pb-24">
        {/* Dashboard Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Campus Sustainability</Text>
          <Text className="text-[#3f4941] mt-1 text-sm">Real-time ESG performance monitoring and insights.</Text>
        </View>

        {/* Filters */}
        <View className="flex-row flex-wrap gap-3 mb-8">
          <TouchableOpacity className="flex-row items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#bec9be]/30 shadow-sm">
            <MaterialIcons name="calendar-today" size={16} color="#3f4941" />
            <Text className="text-sm font-bold text-[#3f4941]">Last 30 Days</Text>
            <MaterialIcons name="expand-more" size={18} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#bec9be]/30 shadow-sm">
            <MaterialIcons name="location-on" size={16} color="#3f4941" />
            <Text className="text-sm font-bold text-[#3f4941]">All Zones</Text>
            <MaterialIcons name="expand-more" size={18} color="#3f4941" />
          </TouchableOpacity>
        </View>

        {/* Current ESG Score */}
        <View className="bg-white rounded-3xl p-6 border border-[#bec9be]/30 shadow-sm items-center mb-6">
          <Text className="text-xs text-[#3f4941] uppercase tracking-wider font-bold mb-6">Current ESG Score</Text>
          
          <View className="w-48 h-48 rounded-full border-8 border-[#d9e6da] items-center justify-center relative">
            <View className="absolute w-full h-full rounded-full border-8 border-[#006d3e] border-t-transparent border-l-transparent rotate-45"></View>
            <Text className="text-5xl font-extrabold text-[#00522d]">84</Text>
            <Text className="text-[#3f4941] font-bold">/ 100</Text>
          </View>
          
          <View className="mt-6 flex-row items-center gap-2">
            <MaterialIcons name="trending-up" size={20} color="#2eb872" />
            <Text className="font-bold text-[#2eb872]">+4.2% from last quarter</Text>
          </View>
          <Text className="mt-4 text-center text-[#3f4941] text-sm px-4">Performance is trending above municipal benchmarks for this period.</Text>
        </View>

        {/* Top Performing Categories */}
        <View className="bg-white rounded-3xl p-6 border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row items-center justify-between mb-8">
            <Text className="text-xl font-bold text-[#0d1e25]">Top Performing Categories</Text>
            <MaterialIcons name="info" size={24} color="#3f4941" />
          </View>
          
          <View className="space-y-8">
            {/* Waste */}
            <View className="mb-6">
              <View className="flex-row justify-between items-end mb-2">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 bg-[#006d3e]/10 rounded-lg items-center justify-center">
                    <MaterialIcons name="delete-outline" size={20} color="#00522d" />
                  </View>
                  <View>
                    <Text className="font-bold text-[#0d1e25]">Waste Management</Text>
                    <Text className="text-xs text-[#3f4941]">Diversion rate tracking</Text>
                  </View>
                </View>
                <Text className="text-2xl font-bold text-[#00522d]">92%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d] rounded-full" style={{ width: '92%' }}></View>
              </View>
            </View>
            
            {/* Energy */}
            <View className="mb-6">
              <View className="flex-row justify-between items-end mb-2">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 bg-[#006d3e]/10 rounded-lg items-center justify-center">
                    <MaterialIcons name="bolt" size={20} color="#00522d" />
                  </View>
                  <View>
                    <Text className="font-bold text-[#0d1e25]">Energy Efficiency</Text>
                    <Text className="text-xs text-[#3f4941]">Renewable usage</Text>
                  </View>
                </View>
                <Text className="text-2xl font-bold text-[#00522d]">78%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d] rounded-full" style={{ width: '78%' }}></View>
              </View>
            </View>

            {/* Water */}
            <View>
              <View className="flex-row justify-between items-end mb-2">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 bg-[#006d3e]/10 rounded-lg items-center justify-center">
                    <MaterialIcons name="water-drop" size={20} color="#00522d" />
                  </View>
                  <View>
                    <Text className="font-bold text-[#0d1e25]">Water Conservation</Text>
                    <Text className="text-xs text-[#3f4941]">Consumption vs Budget</Text>
                  </View>
                </View>
                <Text className="text-2xl font-bold text-[#00522d]">81%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d] rounded-full" style={{ width: '81%' }}></View>
              </View>
            </View>
          </View>
        </View>

        {/* Compliance Status */}
        <View className="bg-white/70 rounded-[24px] p-6 border border-[#a5d6a7]/30 shadow-sm relative overflow-hidden mb-6">
          <View className="flex-row items-center justify-between mb-6 z-10">
            <Text className="text-xl font-bold text-[#0d1e25]">Compliance</Text>
            <View className="bg-[#2eb872]/10 px-3 py-1 rounded-full flex-row items-center gap-1.5 border border-[#2eb872]/20">
              <View className="w-2 h-2 rounded-full bg-[#2eb872]"></View>
              <Text className="text-[#2eb872] font-bold text-xs">Active</Text>
            </View>
          </View>
          
          <View className="space-y-4 z-10">
            <View className="flex-row items-center gap-4 bg-white/50 p-4 rounded-xl border border-white/20 mb-3">
              <MaterialIcons name="verified" size={24} color="#00522d" />
              <View>
                <Text className="font-bold text-[#0d1e25]">ISO 14001:2015</Text>
                <Text className="text-xs text-[#3f4941]">Validated through Dec 2024</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-4 bg-white/50 p-4 rounded-xl border border-white/20">
              <MaterialIcons name="gavel" size={24} color="#00522d" />
              <View>
                <Text className="font-bold text-[#0d1e25]">EPA Waste Standards</Text>
                <Text className="text-xs text-[#3f4941]">All 14 zones compliant</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    </ScreenWrapper>
  );
}
