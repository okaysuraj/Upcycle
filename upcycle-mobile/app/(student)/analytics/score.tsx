import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function SustainabilityScoreBreakdown() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <View className="w-10 h-10 rounded-full bg-[#006d3e] items-center justify-center">
            <Ionicons name="person" size={20} color="white" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2 leading-tight">ESG Performance Breakdown</Text>
          <Text className="text-sm text-[#3f4941]">A comprehensive evaluation of the campus sustainability initiatives across environmental impact, social responsibility, and governance compliance.</Text>
        </View>

        {/* Global Campus Rating */}
        <View className="bg-[#00522d] rounded-[24px] p-6 mb-4 shadow-sm relative overflow-hidden">
          <Text className="text-[10px] text-white/80 uppercase tracking-widest mb-2">Global Campus Rating</Text>
          <View className="flex-row items-end gap-1 mb-2">
            <Text className="text-[72px] font-extrabold text-white leading-none">84</Text>
            <Text className="text-3xl text-white/60 mb-2">/100</Text>
          </View>
          <View className="flex-row items-center bg-white/20 px-3 py-1 rounded-full self-start mb-6">
            <Ionicons name="trending-up" size={16} color="white" />
            <Text className="text-white font-bold text-xs ml-1">+4.2% from LY</Text>
          </View>
          <Text className="text-base text-white/90 mb-6">Your campus is currently in the top 15% of municipal sustainability leaders. Keep focusing on Social Responsibility to reach 'Platinum' status.</Text>
          <TouchableOpacity className="w-full bg-white py-4 rounded-full items-center justify-center">
            <Text className="text-[#00522d] font-bold text-sm">Download PDF Report</Text>
          </TouchableOpacity>
        </View>

        {/* Impact Radar (Placeholder) */}
        <View className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6 mb-6 shadow-sm items-center relative h-[300px]">
          <View className="absolute top-6 left-6">
            <Text className="text-[10px] text-[#00522d] font-bold uppercase tracking-widest mb-1">Visual Metric</Text>
            <Text className="text-xl font-bold text-[#0d1e25]">Impact Radar</Text>
          </View>
          
          <View className="flex-1 w-full items-center justify-center mt-12">
             <View className="w-48 h-48 border border-dashed border-[#bec9be] rounded-full absolute items-center justify-center">
               <View className="w-32 h-32 border border-dashed border-[#bec9be] rounded-full absolute items-center justify-center">
                 <View className="w-16 h-16 border border-dashed border-[#bec9be] rounded-full absolute" />
               </View>
             </View>
             {/* Fake triangle */}
             <View className="w-32 h-32 bg-[#006d3e]/20 border-2 border-[#006d3e] opacity-50 absolute transform rotate-45 scale-110" />
             
             <Text className="absolute top-2 text-[10px] text-[#3f4941] font-bold">ENVIRONMENTAL</Text>
             <Text className="absolute right-0 text-[10px] text-[#3f4941] font-bold">SOCIAL</Text>
             <Text className="absolute bottom-2 text-[10px] text-[#3f4941] font-bold">GOVERNANCE</Text>
          </View>

          <View className="absolute bottom-6 right-6 flex-row items-center gap-2">
            <View className="w-3 h-3 rounded-full bg-[#00522d]" />
            <Text className="text-xs font-bold text-[#0d1e25]">Current Performance</Text>
          </View>
        </View>

        {/* ESG Breakdown Tiers */}
        <View className="gap-4">
          
          {/* Environmental */}
          <View className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6">
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-xl bg-[#006d3e]/20 items-center justify-center">
                  <Ionicons name="leaf" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Environmental</Text>
                  <Text className="text-xs text-[#3f4941]">Weight: 40%</Text>
                </View>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="text-2xl font-bold text-[#00522d]">32</Text>
                <Text className="text-sm text-[#00522d]/40">/40</Text>
              </View>
            </View>
            <View className="gap-4">
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Carbon Footprint</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">85%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d] w-[85%]" />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Waste Diversion</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">72%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d] w-[72%]" />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Water Efficiency</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">92%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d] w-[92%]" />
                </View>
              </View>
            </View>
          </View>

          {/* Social */}
          <View className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6">
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-xl bg-[#d9e6da]/50 items-center justify-center">
                  <Ionicons name="people" size={24} color="#556158" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Social</Text>
                  <Text className="text-xs text-[#3f4941]">Weight: 30%</Text>
                </View>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="text-2xl font-bold text-[#556158]">24</Text>
                <Text className="text-sm text-[#556158]/40">/30</Text>
              </View>
            </View>
            <View className="gap-4">
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Community Engagement</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">64%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158] w-[64%]" />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Labor Standards</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">88%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158] w-[88%]" />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Diversity & Inclusion</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">82%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158] w-[82%]" />
                </View>
              </View>
            </View>
          </View>

          {/* Governance */}
          <View className="bg-white rounded-[24px] border border-[#bec9be]/30 p-6">
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-xl bg-[#3c6842]/20 items-center justify-center">
                  <Ionicons name="shield-checkmark" size={24} color="#24502c" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Governance</Text>
                  <Text className="text-xs text-[#3f4941]">Weight: 30%</Text>
                </View>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="text-2xl font-bold text-[#24502c]">28</Text>
                <Text className="text-sm text-[#24502c]/40">/30</Text>
              </View>
            </View>
            <View className="gap-4">
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Data Transparency</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">95%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#24502c] w-[95%]" />
                </View>
              </View>
              <View>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs font-bold text-[#0d1e25]">Ethical Procurement</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">90%</Text>
                </View>
                <View className="h-2 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#24502c] w-[90%]" />
                </View>
              </View>
            </View>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}
