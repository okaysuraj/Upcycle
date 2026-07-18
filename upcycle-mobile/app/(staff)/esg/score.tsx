import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ScoreBreakdown() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-4 hidden md:flex">
          <Text className="text-sm font-bold text-[#3f4941]">Overview</Text>
          <Text className="text-sm font-bold text-[#00522d]">Analytics</Text>
          <Text className="text-sm font-bold text-[#3f4941]">Settings</Text>
        </View>
        <View className="w-10 h-10 rounded-full bg-[#006d3e] flex items-center justify-center">
          <Ionicons name="person" size={20} color="white" />
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="mb-8">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">ESG Performance Breakdown</Text>
          <Text className="text-gray-500">A comprehensive evaluation of the campus sustainability initiatives across environmental impact, social responsibility, and governance compliance.</Text>
        </View>

        {/* Radar Chart Placeholder & Score Summary Card */}
        <View className="mb-6 flex-col gap-4">
          <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm h-72 items-center justify-center relative overflow-hidden">
            <View className="absolute top-6 left-6">
              <Text className="text-xs text-[#00522d] font-bold uppercase tracking-widest mb-1">Visual Metric</Text>
              <Text className="text-xl font-bold text-[#0d1e25]">Impact Radar</Text>
            </View>
            <Ionicons name="scan-outline" size={100} color="#00522d" style={{ opacity: 0.1 }} />
            <Text className="absolute bottom-6 font-bold text-gray-500">Radar Chart Representation</Text>
          </View>

          <View className="bg-[#00522d] rounded-[24px] p-6 shadow-lg relative overflow-hidden justify-between h-72 flex-col">
            <View>
              <Text className="text-[10px] text-white/80 uppercase tracking-widest font-bold">Global Campus Rating</Text>
              <View className="flex-row items-baseline mt-4 mb-2">
                <Text className="text-7xl font-extrabold text-white">84</Text>
                <Text className="text-2xl font-bold text-white/60">/100</Text>
              </View>
              <View className="flex-row items-center bg-white/20 px-3 py-1 rounded-full self-start gap-1">
                <Ionicons name="trending-up" size={16} color="white" />
                <Text className="text-xs font-bold text-white">+4.2% from LY</Text>
              </View>
            </View>
            <View>
              <Text className="text-white/90 text-sm mb-4">Your campus is currently in the top 15% of municipal sustainability leaders. Keep focusing on Social Responsibility to reach 'Platinum' status.</Text>
              <TouchableOpacity className="w-full bg-white py-3 rounded-full items-center">
                <Text className="text-[#00522d] font-bold text-sm">Download PDF Report</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ESG Breakdown Tiers */}
        <View className="gap-4">
          {/* Environmental */}
          <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm">
            <View className="flex-row items-center gap-3 mb-6">
              <View className="w-12 h-12 rounded-xl bg-[#006d3e]/10 flex items-center justify-center">
                <Ionicons name="leaf" size={24} color="#00522d" />
              </View>
              <View>
                <Text className="font-bold text-[#0d1e25]">Environmental</Text>
                <Text className="text-xs text-gray-500">Weight: 40%</Text>
              </View>
              <View className="flex-1 items-end">
                <Text className="text-2xl font-bold text-[#00522d]">32<Text className="text-sm opacity-40">/40</Text></Text>
              </View>
            </View>
            <View className="gap-4">
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Carbon Footprint</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">85%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: '85%' }} />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Waste Diversion</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">72%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: '72%' }} />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Water Efficiency</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">92%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: '92%' }} />
                </View>
              </View>
            </View>
          </View>

          {/* Social */}
          <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm">
            <View className="flex-row items-center gap-3 mb-6">
              <View className="w-12 h-12 rounded-xl bg-[#d9e6da] flex items-center justify-center">
                <Ionicons name="people" size={24} color="#556158" />
              </View>
              <View>
                <Text className="font-bold text-[#0d1e25]">Social</Text>
                <Text className="text-xs text-gray-500">Weight: 30%</Text>
              </View>
              <View className="flex-1 items-end">
                <Text className="text-2xl font-bold text-[#556158]">24<Text className="text-sm opacity-40">/30</Text></Text>
              </View>
            </View>
            <View className="gap-4">
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Community Engagement</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">64%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158]" style={{ width: '64%' }} />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Labor Standards</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">88%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158]" style={{ width: '88%' }} />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Diversity & Inclusion</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">82%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158]" style={{ width: '82%' }} />
                </View>
              </View>
            </View>
          </View>

          {/* Governance */}
          <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm mb-12">
            <View className="flex-row items-center gap-3 mb-6">
              <View className="w-12 h-12 rounded-xl bg-[#3c6842]/20 flex items-center justify-center">
                <Ionicons name="hammer" size={24} color="#3c6842" />
              </View>
              <View>
                <Text className="font-bold text-[#0d1e25]">Governance</Text>
                <Text className="text-xs text-gray-500">Weight: 30%</Text>
              </View>
              <View className="flex-1 items-end">
                <Text className="text-2xl font-bold text-[#3c6842]">28<Text className="text-sm opacity-40">/30</Text></Text>
              </View>
            </View>
            <View className="gap-4">
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Data Transparency</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">95%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#3c6842]" style={{ width: '95%' }} />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-gray-500">Ethical Procurement</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">90%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#3c6842]" style={{ width: '90%' }} />
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
