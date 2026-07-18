import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Escrow() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full">
            <Ionicons name="menu" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Marketplace</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#d9e6da] items-center justify-center">
            <Ionicons name="person" size={16} color="#556158" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Breadcrumbs */}
        <View className="flex-row items-center gap-1 mb-6">
          <Text className="text-[10px] font-bold text-gray-500">Active Projects</Text>
          <Ionicons name="chevron-forward" size={12} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#00522d]">Escrow Dashboard</Text>
        </View>

        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Payment Escrow</Text>
          <Text className="text-gray-500">Secure transaction portal for the "Solar Panel Recycling" procurement project.</Text>
        </View>

        {/* Funds Held - Main Metric */}
        <View className="bg-white rounded-[24px] border border-gray-200 p-6 mb-4 shadow-sm relative overflow-hidden h-72 justify-between">
          <View className="z-10">
            <View className="flex-row items-center gap-2 mb-2">
              <Ionicons name="lock-closed" size={20} color="#00522d" />
              <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Funds Held in Escrow</Text>
            </View>
            <Text className="text-5xl font-black text-[#00522d]">$42,500.00</Text>
            <View className="mt-4 self-start flex-row items-center bg-[#9cf6ba] px-3 py-1.5 rounded-full gap-1">
              <Ionicons name="shield-checkmark" size={14} color="#00210f" />
              <Text className="text-[10px] font-bold text-[#00210f]">SECURED BY TRUSTBANK</Text>
            </View>
          </View>

          <View className="flex-row mt-4 z-10 gap-4">
            <View className="flex-1">
              <Text className="text-xs text-gray-500 mb-1 font-bold">Total Budget</Text>
              <Text className="text-lg font-bold text-[#0d1e25]">$120,000</Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs text-gray-500 mb-1 font-bold">Disbursed</Text>
              <Text className="text-lg font-bold text-[#0d1e25]">$77,500</Text>
            </View>
          </View>
          
          <View className="absolute -right-6 -bottom-6 opacity-5">
            <Ionicons name="shield" size={150} color="#00522d" />
          </View>
        </View>

        {/* Next Milestone */}
        <View className="bg-white/70 border border-[#00522d]/20 rounded-[24px] p-6 mb-6 shadow-sm">
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-[10px] font-bold text-[#00522d] mb-1">UPCOMING MILESTONE</Text>
              <Text className="text-lg font-bold text-[#0d1e25]">Material Verification</Text>
            </View>
            <View className="bg-[#00522d] p-2 rounded-xl">
              <Ionicons name="calendar" size={20} color="white" />
            </View>
          </View>
          
          <View className="gap-4">
            <View className="flex-row justify-between items-end">
              <Text className="text-sm font-bold text-gray-500">Payment Due:</Text>
              <Text className="text-2xl font-bold text-[#00522d]">$12,750.00</Text>
            </View>
            
            <View className="gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="text-xs font-bold text-gray-500">Verification Progress</Text>
                <Text className="text-xs font-bold text-gray-500">85%</Text>
              </View>
              <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '85%' }} />
              </View>
            </View>
          </View>

          <TouchableOpacity className="mt-6 w-full py-4 bg-[#00522d] rounded-full flex-row items-center justify-center gap-2 shadow-lg">
            <Ionicons name="cash" size={20} color="white" />
            <Text className="text-white font-bold">Release Funds</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction History */}
        <View className="bg-white rounded-[24px] border border-gray-200 p-6 mb-12 shadow-sm">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-[#0d1e25]">Transaction History</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Text className="text-sm font-bold text-[#00522d]">View All</Text>
              <Ionicons name="arrow-forward" size={14} color="#00522d" />
            </TouchableOpacity>
          </View>
          
          <View className="gap-3">
            <View className="flex-row items-center gap-4 bg-[#f4faff] p-4 rounded-xl border border-gray-100">
              <View className="w-10 h-10 rounded-full bg-[#d9e6da] items-center justify-center">
                <Ionicons name="arrow-up" size={20} color="#00522d" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-[#0d1e25]">Milestone 1 Released</Text>
                <Text className="text-xs text-gray-500">BioLoop Systems</Text>
              </View>
              <View className="items-end">
                <Text className="font-bold text-[#0d1e25]">-$25,000.00</Text>
                <Text className="text-[10px] text-gray-500">Sep 12, 2024</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-4 bg-[#f4faff] p-4 rounded-xl border border-gray-100">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                <Ionicons name="arrow-down" size={20} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-[#0d1e25]">Funds Deposited</Text>
                <Text className="text-xs text-gray-500">University Grant Auth.</Text>
              </View>
              <View className="items-end">
                <Text className="font-bold text-[#00522d]">+$120,000.00</Text>
                <Text className="text-[10px] text-gray-500">Aug 01, 2024</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
