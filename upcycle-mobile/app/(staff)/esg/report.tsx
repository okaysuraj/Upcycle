import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ESGReportViewer() {
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
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="p-2">
            <Ionicons name="chatbubble-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <Ionicons name="share-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Executive Summary Header */}
        <View className="mb-10">
          <Text className="text-xs font-bold text-[#00522d] tracking-widest uppercase mb-1">ESG Performance</Text>
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2">September 2024 Report</Text>
          <Text className="text-gray-500">An overview of municipal sustainability targets, circular economy efficiency, and waste reduction benchmarks for the current fiscal period.</Text>
        </View>

        {/* Bento Metrics Grid */}
        <View className="mb-12 gap-4">
          {/* Key Metric Card */}
          <View className="bg-white p-6 rounded-[24px] border border-gray-200 shadow-sm flex-col justify-between">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-xs font-bold text-gray-500 mb-1">Carbon Offset Efficiency</Text>
                <View className="flex-row items-baseline gap-2 mt-2">
                  <Text className="text-5xl font-bold text-[#00522d] tracking-tighter">94.2%</Text>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="trending-up" size={16} color="#2eb872" />
                    <Text className="text-xs font-bold text-[#2eb872]">+2.4%</Text>
                  </View>
                </View>
              </View>
              <View className="w-12 h-12 bg-[#006d3e]/10 rounded-full flex items-center justify-center">
                <Ionicons name="leaf" size={24} color="#00522d" />
              </View>
            </View>
            
            {/* Interactive Chart Visualization */}
            <View className="mt-4 h-32 flex-row items-end justify-between gap-1">
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[40%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[55%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[50%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[75%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[65%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[85%]" />
              <View className="flex-1 bg-[#00522d] rounded-t-lg h-[94%]" />
            </View>
          </View>

          {/* Secondary Status Card */}
          <View className="bg-white/70 p-6 rounded-[12px] border border-white shadow-sm flex-col justify-between">
            <Text className="text-xs font-bold text-[#24502c] mb-4">Compliance Status</Text>
            <View className="flex-row items-center gap-4">
              <View className="relative w-16 h-16 items-center justify-center">
                <View className="absolute inset-0 rounded-full border-4 border-[#d4e5ef]" />
                <View className="absolute inset-0 rounded-full border-4 border-[#00522d] border-r-transparent border-b-transparent" style={{ transform: [{ rotate: '45deg' }] }} />
                <Text className="text-xs font-bold text-[#0d1e25]">85%</Text>
              </View>
              <Text className="text-xs text-gray-500 flex-1 font-bold">Tier-1 Regulatory standards met.</Text>
            </View>
            <TouchableOpacity className="w-full py-3 bg-white border border-[#a5d6a7]/30 rounded-full items-center mt-6">
              <Text className="font-bold text-[#00522d] text-sm">View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Detailed Metrics Section */}
        <View className="mb-12">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-xl font-bold text-[#0d1e25]">Circular Flow Analysis</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Text className="text-[#00522d] font-bold text-sm">Filter</Text>
              <Ionicons name="options" size={18} color="#00522d" />
            </TouchableOpacity>
          </View>

          <View className="gap-4">
            <View className="bg-white p-4 rounded-xl border border-gray-200 flex-row items-center gap-4 shadow-sm">
              <View className="w-10 h-10 bg-[#d9e6da] rounded-lg items-center justify-center">
                <Ionicons name="sync" size={20} color="#556158" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-[#0d1e25]">Material Recovery Rate</Text>
                  <Text className="font-bold text-[#0d1e25]">68%</Text>
                </View>
                <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: '68%' }} />
                </View>
              </View>
            </View>

            <View className="bg-white p-4 rounded-xl border border-gray-200 flex-row items-center gap-4 shadow-sm">
              <View className="w-10 h-10 bg-[#bdefbf] rounded-lg items-center justify-center">
                <Ionicons name="water" size={20} color="#24502c" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-[#0d1e25]">Water Reclamation</Text>
                  <Text className="font-bold text-[#0d1e25]">42%</Text>
                </View>
                <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#3c6842]" style={{ width: '42%' }} />
                </View>
              </View>
            </View>

            <View className="bg-white p-4 rounded-xl border border-gray-200 flex-row items-center gap-4 shadow-sm">
              <View className="w-10 h-10 bg-[#ffdad6] rounded-lg items-center justify-center">
                <Ionicons name="business" size={20} color="#93000a" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-[#0d1e25]">Landfill Diversion</Text>
                  <Text className="font-bold text-[#0d1e25]">91%</Text>
                </View>
                <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#2eb872]" style={{ width: '91%' }} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Future Outlook */}
        <View className="mb-12">
          <Text className="text-xl font-bold text-[#0d1e25] mb-6">Strategic Milestones</Text>
          <View className="relative rounded-[24px] overflow-hidden aspect-video bg-[#006d3e]">
            {/* Image Placeholder */}
            <View className="absolute inset-0 bg-[#006d3e] opacity-80" />
            
            <View className="absolute bottom-6 left-6 right-6 z-20">
              <Text className="text-xl font-bold text-white mb-1">2025 Zero-Waste Vision</Text>
              <Text className="text-sm text-white/90">Upcoming infrastructure expansion for city-wide automated composting units.</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
