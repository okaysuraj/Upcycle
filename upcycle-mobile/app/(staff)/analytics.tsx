import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusAnalyticsMobile() {
  const router = useRouter();

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top AppBar */}
      <View className="px-5 pt-12 pb-4 flex-row justify-between items-center bg-white/70 border-b border-[#bec9be]/30 shadow-sm z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full overflow-hidden border border-[#00522d]/20 bg-gray-200">
             <Text className="text-center mt-2 font-bold text-[#00522d]">AD</Text>
          </View>
          <Text className="font-bold text-2xl text-[#00522d]">EcoCampus</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#3f4941" />
        </TouchableOpacity>
      </View>

      <View className="px-5 py-6 pb-32">
        {/* Hero Metric: Carbon Offset */}
        <View className="bg-white/70 rounded-3xl p-6 mb-6 relative overflow-hidden border border-[#a5d6a7]/30">
          <MaterialIcons name="eco" size={120} color="#00522d" className="absolute -right-10 -top-10 opacity-20" />
          <View className="relative z-10">
            <Text className="text-xs font-bold text-[#00522d] uppercase tracking-widest mb-1">Total Carbon Offset</Text>
            <View className="flex-row items-baseline gap-2">
              <Text className="text-5xl font-bold text-[#00522d]">1,248</Text>
              <Text className="text-2xl font-bold text-[#00522d]/60">tons</Text>
            </View>
            <View className="mt-4 flex-row items-center gap-2">
              <MaterialIcons name="trending-up" size={14} color="#2eb872" />
              <Text className="text-xs font-bold text-[#2eb872]">+12.4% vs last semester</Text>
            </View>
            <View className="mt-6 h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <View className="h-full bg-[#006d3e] rounded-full" style={{ width: '72%' }}></View>
            </View>
            <Text className="mt-2 text-xs font-bold text-[#3f4941]">Goal: 1,800 tons by 2025</Text>
          </View>
        </View>

        {/* Bento Grid Metrics */}
        <View className="flex-row gap-4 mb-6">
          {/* Waste Diverted Card */}
          <View className="flex-1 bg-white border border-[#bec9be]/30 rounded-3xl p-5 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center">
                <MaterialIcons name="delete" size={20} color="#00522d" />
              </View>
            </View>
            <Text className="text-xs font-bold text-[#3f4941]">Waste Diverted</Text>
            <Text className="text-2xl font-bold text-[#0d1e25]">68.4%</Text>
            <View className="h-16 mt-4 flex-row items-end gap-1">
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '40%' }}></View>
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '55%' }}></View>
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '45%' }}></View>
              <View className="flex-1 bg-[#00522d] rounded-t-sm" style={{ height: '85%' }}></View>
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '60%' }}></View>
            </View>
          </View>

          {/* Energy Usage Card */}
          <View className="flex-1 bg-white border border-[#bec9be]/30 rounded-3xl p-5 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center">
                <MaterialIcons name="bolt" size={20} color="#00522d" />
              </View>
            </View>
            <Text className="text-xs font-bold text-[#3f4941]">Energy (kWh)</Text>
            <Text className="text-2xl font-bold text-[#0d1e25]">42.1k</Text>
            <View className="h-16 mt-4 flex-row items-end gap-1">
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '70%' }}></View>
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '60%' }}></View>
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '80%' }}></View>
              <View className="flex-1 bg-[#ba1a1a] rounded-t-sm" style={{ height: '40%' }}></View>
              <View className="flex-1 bg-[#d9ebf5] rounded-t-sm" style={{ height: '50%' }}></View>
            </View>
          </View>
        </View>

        {/* Building Performance */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#0d1e25]">Building Performance</Text>
            <TouchableOpacity>
              <Text className="text-[#00522d] font-bold text-sm">See All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="space-y-4">
            <View className="bg-white rounded-3xl p-4 flex-row items-center justify-between border border-[#bec9be]/30 mb-4">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-[#f4faff] flex items-center justify-center">
                  <MaterialIcons name="apartment" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25] text-sm">Science Hall A</Text>
                  <Text className="text-xs font-bold text-[#3f4941]">Solar integrated facade</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="font-bold text-sm text-[#2eb872]">Excellent</Text>
                <Text className="text-xs font-bold text-[#3f4941]">94/100</Text>
              </View>
            </View>

            <View className="bg-white rounded-3xl p-4 flex-row items-center justify-between border border-[#bec9be]/30 mb-4">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-[#f4faff] flex items-center justify-center">
                  <MaterialIcons name="school" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25] text-sm">Main Library</Text>
                  <Text className="text-xs font-bold text-[#3f4941]">HVAC optimization</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="font-bold text-sm text-[#00522d]">Fair</Text>
                <Text className="text-xs font-bold text-[#3f4941]">72/100</Text>
              </View>
            </View>

            <View className="bg-white rounded-3xl p-4 flex-row items-center justify-between border border-[#bec9be]/30 mb-4">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-[#f4faff] flex items-center justify-center">
                  <MaterialIcons name="stadium" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25] text-sm">Aquatic Center</Text>
                  <Text className="text-xs font-bold text-[#3f4941]">High water recapture</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="font-bold text-sm text-[#2eb872]">Excellent</Text>
                <Text className="text-xs font-bold text-[#3f4941]">88/100</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Dynamic Visualization */}
        <View className="mb-4">
          <Text className="text-xl font-bold text-[#0d1e25] mb-4">Sustainability Trends</Text>
          <View className="bg-[#00522d] p-6 rounded-3xl shadow-xl">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-sm font-bold text-[#92ecb1] uppercase tracking-wide">Monthly Offset</Text>
              <View className="flex-row gap-2">
                <View className="w-2 h-2 rounded-full bg-white"></View>
                <View className="w-2 h-2 rounded-full bg-white/30"></View>
                <View className="w-2 h-2 rounded-full bg-white/30"></View>
              </View>
            </View>
            <View className="h-48 w-full flex-row items-end justify-between px-2">
              <View className="w-4 bg-[#9cf6ba] rounded-t-lg" style={{ height: '30%' }}></View>
              <View className="w-4 bg-[#9cf6ba] rounded-t-lg" style={{ height: '45%' }}></View>
              <View className="w-4 bg-[#9cf6ba] rounded-t-lg" style={{ height: '40%' }}></View>
              <View className="w-4 bg-[#9cf6ba] rounded-t-lg" style={{ height: '65%' }}></View>
              <View className="w-4 bg-[#9cf6ba] rounded-t-lg" style={{ height: '85%' }}></View>
              <View className="w-4 bg-[#9cf6ba] rounded-t-lg" style={{ height: '70%' }}></View>
              <View className="w-4 bg-white rounded-t-lg shadow-lg" style={{ height: '95%' }}></View>
            </View>
            <View className="flex-row justify-between mt-4 px-2 text-[#92ecb1]">
              <Text className="text-xs font-bold text-[#92ecb1]">JAN</Text>
              <Text className="text-xs font-bold text-[#92ecb1]">FEB</Text>
              <Text className="text-xs font-bold text-[#92ecb1]">MAR</Text>
              <Text className="text-xs font-bold text-[#92ecb1]">APR</Text>
              <Text className="text-xs font-bold text-[#92ecb1]">MAY</Text>
              <Text className="text-xs font-bold text-[#92ecb1]">JUN</Text>
              <Text className="text-xs font-bold text-[#92ecb1]">JUL</Text>
            </View>
          </View>
        </View>

      </View>
    </ScreenWrapper>
  );
}
