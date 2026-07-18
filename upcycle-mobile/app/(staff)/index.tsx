import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AdminDashboardHomeMobile() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 h-14 bg-[#f8f9fa] border-b border-[#c1c8c2] z-50">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="active:opacity-80">
            <MaterialIcons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <TouchableOpacity className="active:opacity-80">
            <MaterialIcons name="notifications" size={24} color="#414844" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Welcome Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#012d1d] mb-1">System Health</Text>
          <Text className="text-xs text-[#414844]">Real-time platform oversight for Today</Text>
        </View>

        {/* Summary Widgets */}
        <View className="flex-row flex-wrap justify-between mb-6">
          <View className="w-full bg-white border border-[#c1c8c2] p-4 rounded-xl flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">Active Users</Text>
              <View className="flex-row items-baseline gap-2">
                <Text className="text-2xl font-bold text-[#012d1d]">12,842</Text>
                <View className="flex-row items-center">
                  <MaterialIcons name="trending-up" size={14} color="#75b393" />
                  <Text className="text-xs font-medium text-[#75b393] ml-1">4.2%</Text>
                </View>
              </View>
            </View>
            <View className="w-12 h-12 bg-[#1b4332]/10 items-center justify-center rounded-lg">
              <MaterialIcons name="group" size={24} color="#012d1d" />
            </View>
          </View>

          <View className="w-[48%] bg-white border border-[#c1c8c2] p-4 rounded-xl">
            <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">Pending Approvals</Text>
            <Text className="text-xl font-bold text-[#012d1d]">156</Text>
            <Text className="text-[10px] font-medium text-[#ba1a1a] mt-1">High Priority</Text>
          </View>

          <View className="w-[48%] bg-white border border-[#c1c8c2] p-4 rounded-xl">
            <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">GMV (24h)</Text>
            <Text className="text-xl font-bold text-[#012d1d] font-mono">$42.8k</Text>
            <Text className="text-[10px] font-medium text-[#75b393] mt-1">↑ Above avg</Text>
          </View>
        </View>

        {/* Priority Actions */}
        <View className="mb-8">
          <Text className="text-[10px] font-medium text-[#717973] uppercase tracking-widest mb-4">Priority Actions</Text>
          <View className="gap-2">
            <TouchableOpacity className="flex-row items-center justify-between bg-[#1b4332] p-4 rounded-lg active:scale-95">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="gavel" size={24} color="#274e3d" />
                <Text className="text-xs font-medium text-[#274e3d]">Moderate Content Queue</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#274e3d" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between bg-white border border-[#c1c8c2] p-4 rounded-lg active:scale-95">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="monitor-heart" size={24} color="#191c1d" />
                <Text className="text-xs font-medium text-[#191c1d]">System Health Audit</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#717973" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Platform Activity */}
        <View className="mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-[10px] font-medium text-[#717973] uppercase tracking-widest">Recent Activity</Text>
            <TouchableOpacity>
              <Text className="text-xs font-medium text-[#012d1d] underline">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden">
            {/* Item 1 */}
            <TouchableOpacity className="p-4 flex-row gap-4 items-start border-b border-[#c1c8c2] active:bg-[#f3f4f5]">
              <View className="w-10 h-10 rounded-full bg-[#cce6d0] items-center justify-center shrink-0">
                <MaterialIcons name="person-add" size={20} color="#506856" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-0.5">
                  <Text className="text-sm font-bold text-[#012d1d]">New Merchant Applied</Text>
                  <Text className="text-[10px] text-[#717973] font-mono">2m ago</Text>
                </View>
                <Text className="text-xs text-[#414844]">EcoThread Studios submitted a verification request for approval.</Text>
              </View>
            </TouchableOpacity>

            {/* Item 2 */}
            <TouchableOpacity className="p-4 flex-row gap-4 items-start border-b border-[#c1c8c2] active:bg-[#f3f4f5]">
              <View className="w-10 h-10 rounded-full bg-[#ffdad6] items-center justify-center shrink-0">
                <MaterialIcons name="report" size={20} color="#93000a" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-0.5">
                  <Text className="text-sm font-bold text-[#012d1d]">High Latency Alert</Text>
                  <Text className="text-[10px] text-[#717973] font-mono">15m ago</Text>
                </View>
                <Text className="text-xs text-[#414844]">DB cluster 'US-EAST-1' experiencing 300ms spike in read operations.</Text>
              </View>
            </TouchableOpacity>

            {/* Item 3 */}
            <TouchableOpacity className="p-4 flex-row gap-4 items-start border-b border-[#c1c8c2] active:bg-[#f3f4f5]">
              <View className="w-10 h-10 rounded-full bg-[#00452e] items-center justify-center shrink-0">
                <MaterialIcons name="payments" size={20} color="#75b393" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-0.5">
                  <Text className="text-sm font-bold text-[#012d1d]">Bulk Payout Executed</Text>
                  <Text className="text-[10px] text-[#717973] font-mono">1h ago</Text>
                </View>
                <Text className="text-xs text-[#414844]">Successful batch transfer of $18,400 to 14 active vendors.</Text>
              </View>
            </TouchableOpacity>

            {/* Item 4 */}
            <TouchableOpacity className="p-4 flex-row gap-4 items-start active:bg-[#f3f4f5]">
              <View className="w-10 h-10 rounded-full bg-[#edeeef] items-center justify-center shrink-0">
                <MaterialIcons name="inventory" size={20} color="#414844" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-0.5">
                  <Text className="text-sm font-bold text-[#012d1d]">Listing Flagged</Text>
                  <Text className="text-[10px] text-[#717973] font-mono">3h ago</Text>
                </View>
                <Text className="text-xs text-[#414844]">Item #9842 flagged for incorrect category by automated auditor.</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f8f9fa] border-t border-[#c1c8c2] py-2 px-2 z-50 h-16 pb-2">
        <TouchableOpacity className="items-center bg-[#cce6d0] rounded-full px-4 py-1">
          <MaterialIcons name="dashboard" size={24} color="#506856" />
          <Text className="text-[10px] text-[#506856]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="gavel" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Audit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(staff)/users')} className="items-center p-2 active:scale-95">
          <MaterialIcons name="group" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Users</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="monitor-heart" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/user/account-settings')} className="items-center p-2 active:scale-95">
          <MaterialIcons name="settings" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Setup</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
