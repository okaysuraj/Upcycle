import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function RevenueAnalyticsDashboard() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f8f9fa]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f8f9fa] px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#c1c8c2]">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full">
            <Ionicons name="arrow-back" size={24} color="#012d1d" />
          </TouchableOpacity>
          <Ionicons name="leaf" size={20} color="#012d1d" />
          <Text className="text-lg font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity className="p-2 rounded-full">
            <Ionicons name="notifications-outline" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#1b4332] items-center justify-center">
            <Text className="text-[#86af99] font-bold text-xs">JD</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6 flex-row justify-between items-end">
          <View>
            <Text className="text-xs font-bold text-[#717973] mb-1">REVENUE DASHBOARD</Text>
            <Text className="text-3xl font-bold text-[#012d1d]">Analytics Overview</Text>
          </View>
          <View className="bg-[#f3f4f5] px-3 py-1.5 rounded-xl border border-[#c1c8c2] flex-row items-center gap-2">
            <Ionicons name="calendar" size={16} color="#191c1d" />
            <Text className="text-xs font-bold text-[#191c1d]">Last 30 Days</Text>
          </View>
        </View>

        {/* Metrics Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-3 mb-6">
          <View className="w-full p-4 bg-white border border-[#c1c8c2] rounded-xl shadow-sm">
            <View className="flex-row justify-between items-start mb-2">
              <Text className="text-xs font-bold text-[#717973]">GROSS MERCHANDISE VALUE</Text>
              <View className="bg-[#c1ecd4] px-2 py-0.5 rounded">
                <Text className="text-[#274e3d] font-bold text-[10px]">+12.4%</Text>
              </View>
            </View>
            <Text className="text-2xl font-bold text-[#012d1d]">$142,590.00</Text>
          </View>
          
          <View className="w-[48%] p-4 bg-white border border-[#c1c8c2] rounded-xl shadow-sm">
            <Text className="text-[10px] font-bold text-[#717973] mb-1">NET REVENUE</Text>
            <Text className="text-xl font-bold text-[#012d1d]">$32,410</Text>
            <View className="w-full h-1 bg-[#edeeef] mt-3 rounded-full overflow-hidden">
              <View className="w-[75%] h-full bg-[#00452e]" />
            </View>
          </View>
          
          <View className="w-[48%] p-4 bg-white border border-[#c1c8c2] rounded-xl shadow-sm">
            <Text className="text-[10px] font-bold text-[#717973] mb-1">AVG. ORDER</Text>
            <Text className="text-xl font-bold text-[#012d1d]">$84.50</Text>
            <View className="w-full h-1 bg-[#edeeef] mt-3 rounded-full overflow-hidden">
              <View className="w-[50%] h-full bg-[#4c6452]" />
            </View>
          </View>
        </View>

        {/* Revenue Trend Chart Placeholder */}
        <View className="bg-white border border-[#c1c8c2] rounded-xl p-4 shadow-sm mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-bold text-[#012d1d]">Revenue Trends</Text>
            <Ionicons name="ellipsis-horizontal" size={20} color="#717973" />
          </View>
          <View className="h-48 w-full flex-row items-end justify-between gap-1">
            <View className="flex-1 bg-[#1b4332]/20 rounded-t h-[40%]" />
            <View className="flex-1 bg-[#1b4332]/20 rounded-t h-[60%]" />
            <View className="flex-1 bg-[#1b4332]/20 rounded-t h-[45%]" />
            <View className="flex-1 bg-[#1b4332]/20 rounded-t h-[80%]" />
            <View className="flex-1 bg-[#1b4332]/20 rounded-t h-[55%]" />
            <View className="flex-1 bg-[#1b4332]/20 rounded-t h-[90%]" />
            <View className="flex-1 bg-[#1b4332] rounded-t h-[75%]" />
          </View>
          <View className="flex-row justify-between mt-4 px-2">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
              <Text key={i} className="text-[#717973] font-bold text-[10px]">{day}</Text>
            ))}
          </View>
        </View>

        {/* Revenue Breakdown */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-[#012d1d] mb-4">Revenue Breakdown</Text>
          <View className="gap-3">
            
            <View className="flex-row items-center gap-4 p-3 bg-[#f3f4f5] rounded-xl">
              <View className="w-10 h-10 rounded-lg bg-[#00452e] items-center justify-center">
                <Ionicons name="cube" size={20} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-[#012d1d]">Furniture Upcycling</Text>
                <Text className="text-[10px] font-bold text-[#717973]">412 sales</Text>
              </View>
              <View className="items-end">
                <Text className="text-xs font-bold text-[#012d1d]">$18,240</Text>
                <Text className="text-[10px] font-bold text-[#00452e]">↑ 8%</Text>
              </View>
            </View>
            
            <View className="flex-row items-center gap-4 p-3 bg-[#f3f4f5] rounded-xl">
              <View className="w-10 h-10 rounded-lg bg-[#b3cdb7] items-center justify-center">
                <Ionicons name="shirt" size={20} color="#092012" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-[#012d1d]">Textile Waste</Text>
                <Text className="text-[10px] font-bold text-[#717973]">856 sales</Text>
              </View>
              <View className="items-end">
                <Text className="text-xs font-bold text-[#012d1d]">$9,120</Text>
                <Text className="text-[10px] font-bold text-[#ba1a1a]">↓ 2%</Text>
              </View>
            </View>
            
            <View className="flex-row items-center gap-4 p-3 bg-[#f3f4f5] rounded-xl">
              <View className="w-10 h-10 rounded-lg bg-[#a5d0b9] items-center justify-center">
                <Ionicons name="hammer" size={20} color="#002114" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-[#012d1d]">Industrial Scrap</Text>
                <Text className="text-[10px] font-bold text-[#717973]">128 sales</Text>
              </View>
              <View className="items-end">
                <Text className="text-xs font-bold text-[#012d1d]">$5,050</Text>
                <Text className="text-[10px] font-bold text-[#00452e]">↑ 14%</Text>
              </View>
            </View>

          </View>
        </View>

        {/* Vendor Payout History */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-[#012d1d]">Vendor Payouts</Text>
            <TouchableOpacity>
              <Text className="text-[#012d1d] font-bold text-xs underline">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="bg-white border border-[#c1c8c2] rounded-xl shadow-sm overflow-hidden">
            
            <View className="flex-row justify-between items-center p-4 border-b border-[#c1c8c2]/30">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#edeeef] items-center justify-center">
                  <Ionicons name="wallet" size={16} color="#717973" />
                </View>
                <View>
                  <Text className="font-bold text-[#012d1d] text-sm">EcoFabric Collective</Text>
                  <Text className="text-[10px] text-[#717973] font-bold">ID: #PX-9921</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[#012d1d] text-sm font-mono">$2,450.00</Text>
                <View className="bg-[#cce6d0] px-2 rounded-full mt-1">
                  <Text className="text-[8px] font-bold text-[#506856] uppercase">Completed</Text>
                </View>
              </View>
            </View>
            
            <View className="flex-row justify-between items-center p-4 border-b border-[#c1c8c2]/30">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#edeeef] items-center justify-center">
                  <Ionicons name="wallet" size={16} color="#717973" />
                </View>
                <View>
                  <Text className="font-bold text-[#012d1d] text-sm">Timber Revival Co.</Text>
                  <Text className="text-[10px] text-[#717973] font-bold">ID: #PX-9884</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[#012d1d] text-sm font-mono">$1,820.50</Text>
                <View className="bg-[#cce6d0] px-2 rounded-full mt-1">
                  <Text className="text-[8px] font-bold text-[#506856] uppercase">Completed</Text>
                </View>
              </View>
            </View>
            
            <View className="flex-row justify-between items-center p-4">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#edeeef] items-center justify-center">
                  <Ionicons name="time" size={16} color="#717973" />
                </View>
                <View>
                  <Text className="font-bold text-[#012d1d] text-sm">ReMetal Solutions</Text>
                  <Text className="text-[10px] text-[#717973] font-bold">ID: #PX-9872</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[#012d1d] text-sm font-mono">$940.00</Text>
                <View className="bg-[#e1e3e4] px-2 rounded-full mt-1">
                  <Text className="text-[8px] font-bold text-[#414844] uppercase">Pending</Text>
                </View>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}
