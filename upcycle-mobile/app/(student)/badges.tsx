import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BadgesScreen() {
  const router = useRouter();

  const badges = [
    { id: 1, title: 'Zero Waste Hero', desc: '10 consecutive days without landfill waste', icon: 'eco', earned: true, date: 'Earned Oct 12' },
    { id: 2, title: 'Compost King', desc: 'Diverted 50kg of organic food waste', icon: 'compost', earned: true, date: 'Earned Sep 28' },
    { id: 3, title: 'E-Waste Savior', desc: 'Recycled 5 certified lab electronics', icon: 'devices', earned: true, date: 'Earned Aug 15' },
    { id: 4, title: 'Net-Zero Pioneer', desc: 'Offset 1 ton of CO2 on campus', icon: 'workspace-premium', earned: false, progress: '78%' },
    { id: 5, title: 'Solar Advocate', desc: 'Participate in microgrid audit', icon: 'solar-power', earned: false, progress: '30%' },
    { id: 6, title: 'Campus Mentor', desc: 'Lead 3 student clean-up events', icon: 'groups', earned: false, progress: '66%' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Badges & Milestones</Text>
        </View>
        <View className="px-3 py-1 bg-[#9cf6ba]/40 rounded-full">
          <Text className="text-xs font-bold text-[#00210f]">1,240 pts</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Level Progression Hero */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-[10px] font-bold text-[#00522d] uppercase tracking-wider">Current Level</Text>
              <Text className="text-xl font-bold text-[#0d1e25] mt-0.5">Sustainable Steward</Text>
            </View>
            <Text className="text-xs font-bold text-[#556158]">420 / 500 XP</Text>
          </View>

          <View className="h-3 w-full bg-[#f4faff] rounded-full overflow-hidden border border-[#bec9be]/30">
            <View className="h-full bg-[#00522d] rounded-full" style={{ width: '84%' }} />
          </View>
          <Text className="text-[11px] text-[#556158]">80 XP until <Text className="font-bold text-[#00522d]">Eco Master Tier</Text></Text>
        </View>

        {/* 2-Column Bento Grid for Badges */}
        <Text className="text-base font-bold text-[#0d1e25] mb-3">Earned & In-Progress Badges</Text>
        <View className="flex-row flex-wrap justify-between gap-y-4">
          {badges.map((badge) => (
            <View 
              key={badge.id} 
              className={`w-[48%] p-4 rounded-[24px] border items-center text-center space-y-2.5 ${
                badge.earned 
                  ? 'bg-white border-[#2eb872]/40 shadow-sm' 
                  : 'bg-[#f4faff]/80 border-[#bec9be]/30 opacity-75'
              }`}
            >
              <View className={`w-16 h-16 rounded-full items-center justify-center ${
                badge.earned ? 'bg-[#00522d] shadow-md' : 'bg-[#bec9be]/30'
              }`}>
                <MaterialIcons 
                  name={badge.icon as any} 
                  size={28} 
                  color={badge.earned ? '#ffffff' : '#556158'} 
                />
              </View>

              <Text className={`font-bold text-xs text-center ${badge.earned ? 'text-[#0d1e25]' : 'text-[#556158]'}`}>
                {badge.title}
              </Text>
              
              <Text className="text-[10px] text-[#556158] text-center leading-tight">
                {badge.desc}
              </Text>

              {badge.earned ? (
                <View className="px-2.5 py-0.5 bg-[#9cf6ba]/30 rounded-full">
                  <Text className="text-[9px] font-bold text-[#00522d]">{badge.date}</Text>
                </View>
              ) : (
                <View className="px-2.5 py-0.5 bg-[#dff1fb] rounded-full">
                  <Text className="text-[9px] font-bold text-[#00522d]">{badge.progress} Complete</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
