import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusAnalyticsMobile() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border border-[#00522d]/20 overflow-hidden">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcwA3Ca19IoEcE4BiX9vG-Z8a0wCtEJdoInjbMQs5h1uKIH_DM5W_GJaeH0OV_WYGTSaPT_shk62XG_c2bIc7aqJT1UuEwEj_iclMPJ6P5_2dIpsFNlUC5c-2Q7-bbO29L0nTziKKe-goqKeNK1bYEwRPYqnXeogC2fGrBWh29PXzOGm8wU2DMWdkYXtg1uX4pu_nw3JmgkpA73IpEHBLzaMGni4PpSU08LavJgF03ZYdtQYreJWD3RUSadCRsbXksxreZ6xTS-rY' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d] tracking-tight">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#6f7a70" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Hero Metric: Carbon Offset */}
        <View className="bg-white/70 rounded-[24px] p-6 mb-6 border border-[#a5d6a7]/30 shadow-sm relative overflow-hidden">
          <MaterialIcons name="eco" size={120} color="#00522d33" className="absolute -right-10 -top-10" />
          <View className="z-10">
            <Text className="text-[12px] font-bold text-[#00522d] uppercase tracking-widest mb-1">Total Carbon Offset</Text>
            <View className="flex-row items-baseline gap-2">
              <Text className="text-[48px] font-bold text-[#00522d]">1,248</Text>
              <Text className="text-2xl font-bold text-[#00522d]/60">tons</Text>
            </View>
            <View className="mt-4 flex-row items-center gap-2">
              <MaterialIcons name="trending-up" size={16} color="#2eb872" />
              <Text className="text-[12px] font-bold text-[#2eb872]">+12.4% vs last semester</Text>
            </View>
            <View className="mt-6 h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
              <View className="h-full bg-[#006d3e] w-[72%] rounded-full" />
            </View>
            <Text className="mt-2 text-[12px] font-bold text-[#6f7a70]">Goal: 1,800 tons by 2025</Text>
          </View>
        </View>

        {/* Bento Grid Metrics */}
        <View className="flex-row gap-4 mb-6">
          {/* Waste Diverted */}
          <View className="flex-1 bg-white border border-[#bec9be]/30 rounded-[24px] p-5 shadow-sm">
            <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center mb-4">
              <MaterialIcons name="delete" size={24} color="#00522d" />
            </View>
            <Text className="text-[12px] font-bold text-[#6f7a70]">Waste Diverted</Text>
            <Text className="text-2xl font-bold text-[#0d1e25]">68.4%</Text>
            <View className="h-24 mt-4 flex-row items-end gap-1">
              <View className="flex-1 bg-[#d9ebf5] h-[40%] rounded-t-sm" />
              <View className="flex-1 bg-[#d9ebf5] h-[55%] rounded-t-sm" />
              <View className="flex-1 bg-[#d9ebf5] h-[45%] rounded-t-sm" />
              <View className="flex-1 bg-[#00522d] h-[85%] rounded-t-sm" />
              <View className="flex-1 bg-[#d9ebf5] h-[60%] rounded-t-sm" />
            </View>
          </View>

          {/* Energy Usage */}
          <View className="flex-1 bg-white border border-[#bec9be]/30 rounded-[24px] p-5 shadow-sm">
            <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center mb-4">
              <MaterialIcons name="bolt" size={24} color="#00522d" />
            </View>
            <Text className="text-[12px] font-bold text-[#6f7a70]">Energy (kWh)</Text>
            <Text className="text-2xl font-bold text-[#0d1e25]">42.1k</Text>
            <View className="h-24 mt-4 flex-row items-end gap-1">
              <View className="flex-1 bg-[#d9ebf5] h-[70%] rounded-t-sm" />
              <View className="flex-1 bg-[#d9ebf5] h-[60%] rounded-t-sm" />
              <View className="flex-1 bg-[#d9ebf5] h-[80%] rounded-t-sm" />
              <View className="flex-1 bg-[#ba1a1a] h-[40%] rounded-t-sm" />
              <View className="flex-1 bg-[#d9ebf5] h-[50%] rounded-t-sm" />
            </View>
          </View>
        </View>

        {/* Building Performance */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-bold text-[#0d1e25]">Building Performance</Text>
            <TouchableOpacity>
              <Text className="text-sm font-bold text-[#00522d]">See All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="gap-4">
            <TouchableOpacity className="bg-white rounded-[24px] p-4 flex-row items-center justify-between border border-[#bec9be]/30 active:scale-95 shadow-sm">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-[#f4faff] items-center justify-center">
                  <MaterialIcons name="apartment" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Science Hall A</Text>
                  <Text className="text-[12px] font-bold text-[#6f7a70]">Solar integrated facade</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#2eb872]">Excellent</Text>
                <Text className="text-[12px] font-bold text-[#6f7a70]">94/100</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-[24px] p-4 flex-row items-center justify-between border border-[#bec9be]/30 active:scale-95 shadow-sm">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-[#f4faff] items-center justify-center">
                  <MaterialIcons name="school" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Main Library</Text>
                  <Text className="text-[12px] font-bold text-[#6f7a70]">HVAC optimization pending</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#00522d]">Fair</Text>
                <Text className="text-[12px] font-bold text-[#6f7a70]">72/100</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-[24px] p-4 flex-row items-center justify-between border border-[#bec9be]/30 active:scale-95 shadow-sm">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-[#f4faff] items-center justify-center">
                  <MaterialIcons name="stadium" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Aquatic Center</Text>
                  <Text className="text-[12px] font-bold text-[#6f7a70]">High water recapture</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#2eb872]">Excellent</Text>
                <Text className="text-[12px] font-bold text-[#6f7a70]">88/100</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sustainability Trends Chart */}
        <View className="mb-4">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Sustainability Trends</Text>
          <View className="bg-[#00522d] p-6 rounded-[32px] shadow-xl">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-sm font-bold text-[#92ecb1] uppercase tracking-wide">Monthly Offset</Text>
              <View className="flex-row gap-2">
                <View className="w-2 h-2 rounded-full bg-white" />
                <View className="w-2 h-2 rounded-full bg-white/30" />
                <View className="w-2 h-2 rounded-full bg-white/30" />
              </View>
            </View>
            <View className="h-48 w-full flex-row items-end justify-between px-2">
              <View className="w-6 bg-[#9cf6ba] h-[30%] rounded-t-lg" />
              <View className="w-6 bg-[#9cf6ba] h-[45%] rounded-t-lg" />
              <View className="w-6 bg-[#9cf6ba] h-[40%] rounded-t-lg" />
              <View className="w-6 bg-[#9cf6ba] h-[65%] rounded-t-lg" />
              <View className="w-6 bg-[#9cf6ba] h-[85%] rounded-t-lg" />
              <View className="w-6 bg-[#9cf6ba] h-[70%] rounded-t-lg" />
              <View className="w-6 bg-white h-[95%] rounded-t-lg shadow-md shadow-white/40" />
            </View>
            <View className="flex-row justify-between mt-4 px-2">
              <Text className="text-[10px] font-bold text-[#92ecb1]">JAN</Text>
              <Text className="text-[10px] font-bold text-[#92ecb1]">FEB</Text>
              <Text className="text-[10px] font-bold text-[#92ecb1]">MAR</Text>
              <Text className="text-[10px] font-bold text-[#92ecb1]">APR</Text>
              <Text className="text-[10px] font-bold text-[#92ecb1]">MAY</Text>
              <Text className="text-[10px] font-bold text-[#92ecb1]">JUN</Text>
              <Text className="text-[10px] font-bold text-[#92ecb1]">JUL</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity className="absolute right-6 bottom-24 w-14 h-14 bg-[#00522d] rounded-2xl shadow-lg items-center justify-center active:scale-90 z-40">
        <MaterialIcons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="dashboard" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1] mt-1">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="delete" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="bolt" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="domain" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
