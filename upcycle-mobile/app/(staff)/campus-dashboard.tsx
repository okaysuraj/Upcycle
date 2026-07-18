import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusDashboardAdminMobile() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border-2 border-[#00522d]/20 overflow-hidden bg-[#006d3e]">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAznaNbkBanr38R8g-jp9EtiJHqNVYEQp4egazP4SVFwcLSJAgc882EyxIMsciCXFu5M94EMRqBZsZJeYUk3Yw1MN3nAATarXctTG3ZsBFHGOnR3SQeJlEndhzBL808Z4Uv-X27LDr__2_qujaHR9OvIWUSwdckVaRBQoP8eYzHZvC7QfrZemE1ur_mJCTKxS1Iq0FEnel3LO2Ma-y6iV8UIioZc8ZCtdGb_asQQ1ovJidr4Db3GxT_fC4rRDX-MU4EZ5bZQHLB_HU' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="relative w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
          <View className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Welcome Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Campus Overview</Text>
          <Text className="text-base text-[#3f4941]">Real-time sustainability metrics.</Text>
        </View>

        {/* KPI Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
          {/* Large Primary KPI */}
          <View className="w-full bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm h-48 justify-between relative overflow-hidden">
            <View className="z-10">
              <Text className="text-xs font-bold text-[#00522d] uppercase tracking-wider mb-2">Total Carbon Offset</Text>
              <View className="flex-row items-baseline gap-2">
                <Text className="text-[42px] font-bold text-[#0d1e25] leading-tight">1,284</Text>
                <Text className="text-sm font-medium text-[#3f4941]">Tons</Text>
              </View>
            </View>
            <View className="z-10 flex-row items-center gap-1">
              <MaterialIcons name="trending-up" size={18} color="#2eb872" />
              <Text className="text-sm font-medium text-[#2eb872]">+12% vs last month</Text>
            </View>
            <View className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#80d99f]/20 rounded-full" />
          </View>

          {/* Small KPI: Waste */}
          <View className="w-[48%] bg-white/70 border border-[#a5d6a7]/30 p-4 rounded-[24px] gap-2">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-lg bg-[#d9e6da] items-center justify-center">
                <MaterialIcons name="delete" size={20} color="#5b675e" />
              </View>
              <Text className="text-xs font-bold text-[#3f4941]">Waste</Text>
            </View>
            <View>
              <Text className="text-2xl font-bold text-[#0d1e25]">82%</Text>
              <View className="w-full h-1.5 bg-[#d9e6da]/30 rounded-full mt-2 overflow-hidden">
                <View className="h-full w-[82%] bg-[#00522d]" />
              </View>
            </View>
          </View>

          {/* Small KPI: Energy */}
          <View className="w-[48%] bg-white/70 border border-[#a5d6a7]/30 p-4 rounded-[24px] gap-2">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-lg bg-[#d9e6da] items-center justify-center">
                <MaterialIcons name="bolt" size={20} color="#5b675e" />
              </View>
              <Text className="text-xs font-bold text-[#3f4941]">Energy</Text>
            </View>
            <View>
              <Text className="text-2xl font-bold text-[#0d1e25]">4.2 <Text className="text-xs">MW/h</Text></Text>
              <View className="w-full h-1.5 bg-[#d9e6da]/30 rounded-full mt-2 overflow-hidden">
                <View className="h-full w-[65%] bg-[#2eb872]" />
              </View>
            </View>
          </View>
        </View>

        {/* Urgent Tasks */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-bold text-[#0d1e25]">Urgent Tasks</Text>
            <View className="bg-[#ffdad6] px-3 py-1 rounded-full">
              <Text className="text-xs font-bold text-[#93000a]">3 Alerts</Text>
            </View>
          </View>
          <View className="gap-3">
            <TouchableOpacity className="bg-white p-4 rounded-xl border border-[#bec9be]/30 flex-row items-center gap-4 active:bg-[#d9ebf5]">
              <View className="w-12 h-12 rounded-full bg-[#ffdad6]/20 items-center justify-center">
                <MaterialIcons name="warning" size={24} color="#ba1a1a" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-[#0d1e25]">Sensor Failure: Sector B4</Text>
                <Text className="text-xs font-bold text-[#3f4941]">Water flow meter unresponsive for 2h.</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6f7a70" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-xl border border-[#bec9be]/30 flex-row items-center gap-4 active:bg-[#d9ebf5]">
              <View className="w-12 h-12 rounded-full bg-[#006d3e]/20 items-center justify-center">
                <MaterialIcons name="recycling" size={24} color="#00522d" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-[#0d1e25]">Waste Collection Overdue</Text>
                <Text className="text-xs font-bold text-[#3f4941]">Central Plaza bin at 95% capacity.</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6f7a70" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Node Status Map */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Node Status</Text>
          <View className="w-full h-56 rounded-[24px] overflow-hidden border border-[#bec9be]/30 shadow-sm relative">
            <View className="absolute inset-0 bg-[#d4e5ef]" />
            {/* Dots */}
            <View className="absolute top-[25%] left-[33%] w-4 h-4 bg-[#2eb872] border-2 border-white rounded-full shadow-lg" />
            <View className="absolute top-[50%] left-[50%] w-4 h-4 bg-[#ba1a1a] border-2 border-white rounded-full shadow-lg" />
            <View className="absolute bottom-[33%] right-[25%] w-4 h-4 bg-[#2eb872] border-2 border-white rounded-full shadow-lg" />
            
            {/* Legend */}
            <View className="absolute bottom-3 left-3 bg-white/70 px-3 py-2 rounded-xl flex-row items-center gap-4 border border-[#a5d6a7]/30">
              <View className="flex-row items-center gap-1.5">
                <View className="w-2 h-2 bg-[#2eb872] rounded-full" />
                <Text className="text-xs font-bold text-[#0d1e25]">24 Active</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <View className="w-2 h-2 bg-[#ba1a1a] rounded-full" />
                <Text className="text-xs font-bold text-[#0d1e25]">1 Issue</Text>
              </View>
            </View>
            <TouchableOpacity className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-md active:scale-90">
              <MaterialIcons name="fullscreen" size={24} color="#00522d" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Insights */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Quick Insights</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-1">
            <View className="flex-row gap-4 px-1">
              <TouchableOpacity className="bg-white px-6 py-4 rounded-2xl border border-[#bec9be]/30 items-center gap-2 min-w-[120px] active:bg-[#006d3e]">
                <MaterialIcons name="water-drop" size={24} color="#3f4941" />
                <Text className="text-sm font-medium text-[#3f4941]">Water usage</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-6 py-4 rounded-2xl border border-[#bec9be]/30 items-center gap-2 min-w-[120px] active:bg-[#006d3e]">
                <MaterialIcons name="compost" size={24} color="#3f4941" />
                <Text className="text-sm font-medium text-[#3f4941]">Compost rate</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-6 py-4 rounded-2xl border border-[#bec9be]/30 items-center gap-2 min-w-[120px] active:bg-[#006d3e]">
                <MaterialIcons name="light-mode" size={24} color="#3f4941" />
                <Text className="text-sm font-medium text-[#3f4941]">Solar yield</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity className="absolute bottom-24 right-6 w-14 h-14 bg-[#00522d] rounded-2xl shadow-lg items-center justify-center active:scale-95 z-40">
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="dashboard" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="delete" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="bolt" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(staff)/buildings')} className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="domain" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
