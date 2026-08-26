import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ImpactScreen() {
  const router = useRouter();
  const [metrics] = useState({
    totalPoints: 12450,
    carbonSaved: 142.5,
    rank: 4,
    esgScore: 88,
    divertedKg: 384
  });

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Sustainability Score</Text>
        </View>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="share-social-outline" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
        {/* Score Radial Card */}
        <View className="bg-[#00522d] rounded-[32px] p-6 text-white shadow-lg mb-6 relative overflow-hidden space-y-4">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-[10px] font-bold text-[#9cf6ba] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full self-start">
                Campus ESG Score
              </Text>
              <Text className="text-5xl font-bold text-white mt-3">{metrics.esgScore} <Text className="text-xl text-[#9cf6ba]">/ 100</Text></Text>
              <Text className="text-xs text-white/80 mt-0.5">Rating: Grade AA+ Exemplary</Text>
            </View>
            <View className="w-14 h-14 bg-white/10 rounded-2xl items-center justify-center border border-white/20">
              <MaterialIcons name="workspace-premium" size={32} color="#9cf6ba" />
            </View>
          </View>

          <View className="flex-row items-center gap-2 pt-2 border-t border-white/10">
            <Ionicons name="trending-up" size={16} color="#9cf6ba" />
            <Text className="text-xs text-white font-medium">Ranked #{metrics.rank} of 4,200 active campus contributors</Text>
          </View>
        </View>

        {/* 2-Column KPI Stats */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1 bg-white p-5 rounded-3xl border border-[#bec9be]/30 shadow-sm space-y-1">
            <View className="w-10 h-10 rounded-2xl bg-[#dff1fb] items-center justify-center mb-2">
              <MaterialIcons name="co2" size={24} color="#00522d" />
            </View>
            <Text className="text-2xl font-bold text-[#0d1e25]">{metrics.carbonSaved}</Text>
            <Text className="text-[11px] font-bold text-[#556158] uppercase">kg CO₂e Offset</Text>
          </View>

          <View className="flex-1 bg-white p-5 rounded-3xl border border-[#bec9be]/30 shadow-sm space-y-1">
            <View className="w-10 h-10 rounded-2xl bg-[#9cf6ba]/40 items-center justify-center mb-2">
              <MaterialIcons name="recycling" size={24} color="#00210f" />
            </View>
            <Text className="text-2xl font-bold text-[#0d1e25]">{metrics.divertedKg}</Text>
            <Text className="text-[11px] font-bold text-[#556158] uppercase">kg Diverted</Text>
          </View>
        </View>

        {/* Milestone Progression */}
        <View className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3 mb-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-sm font-bold text-[#0d1e25]">Next Level Milestone</Text>
            <Text className="text-xs font-bold text-[#00522d]">78% to Eco-Legend</Text>
          </View>
          <Text className="text-xs text-[#556158] leading-relaxed">
            Log 12 more kilograms of compost or e-waste to achieve the 'Net-Zero Champion' badge.
          </Text>
          <View className="h-2.5 w-full bg-[#f4faff] rounded-full overflow-hidden border border-[#bec9be]/30">
            <View className="h-full bg-[#00522d] rounded-full" style={{ width: '78%' }} />
          </View>
        </View>

        {/* Action button */}
        <TouchableOpacity 
          onPress={() => router.push('/(student)/waste-logger')}
          className="py-4 bg-[#00522d] rounded-full items-center shadow-md flex-row justify-center gap-2"
        >
          <Ionicons name="qr-code-outline" size={18} color="#ffffff" />
          <Text className="text-white font-bold text-sm">Log New Diversion Entry</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
