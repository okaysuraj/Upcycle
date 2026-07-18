import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function TransactionHistory() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'given' | 'received'>('given');

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <Ionicons name="leaf" size={24} color="#00522d" />
          <Text className="text-xl font-bold text-[#00522d]">EcoMarket</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2">
            <Ionicons name="search" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center">
            <Ionicons name="person" size={16} color="white" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        {/* Header & Tabs */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Transaction History</Text>
          
          {/* Tab Switcher */}
          <View className="flex-row p-1 bg-[#d9ebf5] rounded-full w-full">
            <TouchableOpacity 
              onPress={() => setActiveTab('given')}
              className={`flex-1 py-2 rounded-full items-center ${activeTab === 'given' ? 'bg-[#006d3e] shadow-sm' : 'bg-transparent'}`}
            >
              <Text className={`font-bold ${activeTab === 'given' ? 'text-white' : 'text-gray-500'}`}>Given</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setActiveTab('received')}
              className={`flex-1 py-2 rounded-full items-center ${activeTab === 'received' ? 'bg-[#006d3e] shadow-sm' : 'bg-transparent'}`}
            >
              <Text className={`font-bold ${activeTab === 'received' ? 'text-white' : 'text-gray-500'}`}>Received</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Summary Card */}
        <View className="bg-white/70 border border-[#00522d]/20 p-6 rounded-[24px] shadow-sm mb-6">
          <Text className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-2">Total Impact</Text>
          <Text className="text-4xl font-bold text-[#00522d]">124kg</Text>
          <Text className="text-sm text-gray-500 mt-1">Resources diverted from landfills this month.</Text>
          
          <View className="mt-4 h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
            <View className="h-full bg-[#00522d]" style={{ width: '75%' }} />
          </View>
          <Text className="text-[10px] text-gray-500 font-bold mt-2">75% of monthly goal reached</Text>
        </View>

        {/* Filters */}
        <View className="bg-[#e7f6ff] p-4 rounded-xl border border-gray-200 mb-6">
          <View className="flex-row items-center gap-2 mb-3">
            <Ionicons name="filter" size={16} color="#24502c" />
            <Text className="font-bold text-[#0d1e25]">Filters</Text>
          </View>
          <View className="flex-row flex-wrap gap-2">
            <View className="px-3 py-1 rounded-full bg-white">
              <Text className="text-[10px] font-bold text-gray-500">All Time</Text>
            </View>
            <View className="px-3 py-1 rounded-full bg-white">
              <Text className="text-[10px] font-bold text-gray-500">Compost</Text>
            </View>
            <View className="px-3 py-1 rounded-full bg-white">
              <Text className="text-[10px] font-bold text-gray-500">Textiles</Text>
            </View>
          </View>
        </View>

        {/* List View */}
        <View className="gap-4">
          <TouchableOpacity className="bg-white border border-gray-200 p-4 rounded-xl flex-row items-center gap-4 shadow-sm">
            <View className="w-16 h-16 rounded-lg bg-[#dff1fb] overflow-hidden items-center justify-center">
              <Ionicons name="shirt" size={24} color="#00522d" />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="font-bold text-[#0d1e25] text-base">Premium Cotton Scraps</Text>
                <Text className="text-[10px] font-bold text-gray-500">Oct 24</Text>
              </View>
              <Text className="text-xs text-gray-500 mb-2">Industrial textile diversion • 12kg</Text>
              <View className="bg-[#2eb872]/20 self-start px-2 py-1 rounded-full flex-row items-center gap-1">
                <Ionicons name="checkmark-circle" size={12} color="#00522d" />
                <Text className="text-[10px] font-bold text-[#00522d]">Completed</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white border border-gray-200 p-4 rounded-xl flex-row items-center gap-4 shadow-sm">
            <View className="w-16 h-16 rounded-lg bg-[#d9e6da] overflow-hidden items-center justify-center">
              <Ionicons name="leaf" size={24} color="#3c6842" />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="font-bold text-[#0d1e25] text-base">Organic Soil Mix</Text>
                <Text className="text-[10px] font-bold text-gray-500">Oct 22</Text>
              </View>
              <Text className="text-xs text-gray-500 mb-2">Community Garden Donation • 25kg</Text>
              <View className="bg-[#d4e5ef] self-start px-2 py-1 rounded-full flex-row items-center gap-1">
                <Ionicons name="time" size={12} color="#556158" />
                <Text className="text-[10px] font-bold text-[#556158]">Pending</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white border border-gray-200 p-4 rounded-xl flex-row items-center gap-4 shadow-sm">
            <View className="w-16 h-16 rounded-lg bg-[#f4faff] overflow-hidden items-center justify-center border border-gray-100">
              <Ionicons name="cube" size={24} color="#6f7a70" />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="font-bold text-[#0d1e25] text-base">Reclaimed Pine Pallets</Text>
                <Text className="text-[10px] font-bold text-gray-500">Oct 19</Text>
              </View>
              <Text className="text-xs text-gray-500 mb-2">Furniture Workshop • 4 units</Text>
              <View className="bg-[#ffdad6] self-start px-2 py-1 rounded-full flex-row items-center gap-1">
                <Ionicons name="close-circle" size={12} color="#ba1a1a" />
                <Text className="text-[10px] font-bold text-[#ba1a1a]">Cancelled</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-8 py-3 rounded-full border border-[#00522d] items-center justify-center mb-12">
          <Text className="text-[#00522d] font-bold">Load More History</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Bottom Navigation Placeholder */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center px-4 py-4 pb-8 bg-[#dff1fb] shadow-lg rounded-t-3xl border-t border-[#00522d]/10">
        <TouchableOpacity onPress={() => router.push('/(student)/marketplace')} className="items-center">
          <Ionicons name="storefront" size={24} color="#556158" />
          <Text className="text-xs font-bold text-[#556158] mt-1">Market</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(student)/marketplace/list-item')} className="items-center">
          <Ionicons name="heart" size={24} color="#556158" />
          <Text className="text-xs font-bold text-[#556158] mt-1">Donate</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="notifications" size={24} color="#556158" />
          <Text className="text-xs font-bold text-[#556158] mt-1">Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] px-4 py-1 rounded-full">
          <Ionicons name="person" size={24} color="white" />
          <Text className="text-xs font-bold text-white mt-1">Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}