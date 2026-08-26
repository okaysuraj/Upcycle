import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function StudentDashboardMobile() {
  const router = useRouter();
  const { user, authFetch } = useAuth();
  const userName = user?.name || 'Alex River';
  const [stats, setStats] = useState({ 
    totalWasteKg: 24.8, 
    carbonOffset: 12.4, 
    goalProgress: 75, 
    ecoPoints: 1240 
  });

  useEffect(() => {
    authFetch('/analytics/dashboard/student')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.totalWasteKg !== 'undefined') {
          setStats(prev => ({
            ...prev,
            totalWasteKg: data.totalWasteKg || prev.totalWasteKg,
            carbonOffset: data.carbonOffset || prev.carbonOffset,
            goalProgress: data.goalProgress || prev.goalProgress
          }));
        }
      })
      .catch(console.error);
  }, [authFetch]);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-[#f4faff] border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 rounded-xl bg-[#00522d] items-center justify-center shadow-sm">
            <Ionicons name="leaf" size={18} color="#ffffff" />
          </View>
          <Text className="text-xl font-bold text-[#00522d] tracking-tight">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity 
            onPress={() => router.push('/(student)/events')}
            className="w-10 h-10 rounded-full bg-white border border-[#bec9be]/30 items-center justify-center shadow-sm"
          >
            <Ionicons name="calendar-outline" size={18} color="#00522d" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => router.push('/user')}
            className="w-10 h-10 rounded-full bg-[#dff1fb] border border-[#bec9be]/30 items-center justify-center shadow-sm"
          >
            <Ionicons name="person" size={18} color="#00522d" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Welcome Banner */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Hello, {userName} 👋</Text>
          <Text className="text-xs text-[#556158] mt-1">
            Central Quad Eco-Lead • Rank #4 on campus leaderboard
          </Text>
        </View>

        {/* Hero Impact Card */}
        <View className="p-6 rounded-[32px] bg-[#00522d] shadow-lg mb-6 relative overflow-hidden space-y-6">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-[10px] font-bold text-[#9cf6ba] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full self-start">
                Sustainability Impact
              </Text>
              <Text className="text-4xl font-bold text-white mt-3">{stats.totalWasteKg} <Text className="text-lg text-[#9cf6ba]">kg</Text></Text>
              <Text className="text-xs text-white/80 mt-0.5">Total Waste Diverted</Text>
            </View>
            <View className="w-12 h-12 bg-white/10 rounded-2xl items-center justify-center border border-white/20">
              <MaterialIcons name="eco" size={28} color="#9cf6ba" />
            </View>
          </View>

          <View className="space-y-2 pt-2 border-t border-white/10">
            <View className="flex-row justify-between text-xs">
              <Text className="text-white/80 font-medium text-xs">Monthly Campus Target</Text>
              <Text className="text-[#9cf6ba] font-bold text-xs">{stats.goalProgress}% Complete</Text>
            </View>
            <View className="h-2.5 w-full bg-white/20 rounded-full overflow-hidden">
              <View className="h-full bg-[#9cf6ba] rounded-full" style={{ width: `${stats.goalProgress}%` }} />
            </View>
          </View>
        </View>

        {/* Quick Action Grid */}
        <View className="mb-6">
          <Text className="text-base font-bold text-[#0d1e25] mb-3">Quick Actions</Text>
          <View className="flex-row gap-3">
            <TouchableOpacity 
              onPress={() => router.push('/(student)/waste-logger')}
              className="flex-1 bg-white p-4 rounded-3xl border border-[#bec9be]/30 shadow-sm items-center space-y-2"
            >
              <View className="w-12 h-12 rounded-2xl bg-[#dff1fb] items-center justify-center">
                <Ionicons name="qr-code-outline" size={24} color="#00522d" />
              </View>
              <Text className="text-xs font-bold text-[#0d1e25] text-center">Log Waste</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => router.push('/(student)/badges')}
              className="flex-1 bg-white p-4 rounded-3xl border border-[#bec9be]/30 shadow-sm items-center space-y-2"
            >
              <View className="w-12 h-12 rounded-2xl bg-[#9cf6ba]/40 items-center justify-center">
                <Ionicons name="trophy-outline" size={24} color="#00210f" />
              </View>
              <Text className="text-xs font-bold text-[#0d1e25] text-center">Badges</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => router.push('/(student)/impact')}
              className="flex-1 bg-white p-4 rounded-3xl border border-[#bec9be]/30 shadow-sm items-center space-y-2"
            >
              <View className="w-12 h-12 rounded-2xl bg-[#dff1fb] items-center justify-center">
                <Ionicons name="analytics-outline" size={24} color="#00522d" />
              </View>
              <Text className="text-xs font-bold text-[#0d1e25] text-center">Score</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Eco-Points Snapshot */}
        <View className="bg-white p-5 rounded-[28px] border border-[#bec9be]/30 shadow-sm flex-row items-center justify-between mb-6">
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-2xl bg-[#00522d] items-center justify-center shadow-sm">
              <MaterialIcons name="workspace-premium" size={24} color="#ffffff" />
            </View>
            <View>
              <Text className="text-xs font-bold text-[#556158] uppercase">Eco-Points Balance</Text>
              <Text className="text-xl font-bold text-[#0d1e25] mt-0.5">{stats.ecoPoints.toLocaleString()} pts</Text>
            </View>
          </View>
          <TouchableOpacity 
            onPress={() => router.push('/(student)/badges')}
            className="px-4 py-2 bg-[#dff1fb] rounded-full"
          >
            <Text className="text-xs font-bold text-[#00522d]">Rewards →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}