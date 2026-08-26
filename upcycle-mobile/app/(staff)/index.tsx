import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function StaffDashboard() {
  const router = useRouter();
  const { authFetch } = useAuth();
  const [stats, setStats] = useState({
    totalTons: 14.8,
    activeBins: 48,
    criticalAlerts: 3,
    pendingApprovals: 6
  });

  useEffect(() => {
    authFetch('/analytics/dashboard/staff')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setStats(prev => ({
            ...prev,
            totalTons: data.totalTons || prev.totalTons,
            activeBins: data.activeBins || prev.activeBins,
            criticalAlerts: data.criticalAlerts || prev.criticalAlerts,
            pendingApprovals: data.pendingApprovals || prev.pendingApprovals
          }));
        }
      })
      .catch(console.error);
  }, [authFetch]);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 rounded-xl bg-[#00522d] items-center justify-center shadow-sm">
            <Ionicons name="construct" size={18} color="#ffffff" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">Operations Hub</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/user')}
          className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center shadow-sm"
        >
          <Ionicons name="person" size={18} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Welcome */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Campus Fleet Live</Text>
          <Text className="text-xs text-[#556158] mt-0.5">Real-time facility telemetry and collection routing.</Text>
        </View>

        {/* Hero Alert Bento Card */}
        <View className="p-6 rounded-[32px] bg-[#00522d] shadow-lg mb-6 relative overflow-hidden space-y-4">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-[10px] font-bold text-[#9cf6ba] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full self-start">
                Daily Diversion Rate
              </Text>
              <Text className="text-4xl font-bold text-white mt-3">{stats.totalTons} <Text className="text-lg text-[#9cf6ba]">tons</Text></Text>
              <Text className="text-xs text-white/80 mt-0.5">85% Diverted from Municipal Landfill</Text>
            </View>
            <View className="w-12 h-12 bg-white/10 rounded-2xl items-center justify-center border border-white/20">
              <MaterialIcons name="local-shipping" size={26} color="#9cf6ba" />
            </View>
          </View>

          <View className="pt-3 flex-row justify-between items-center border-t border-white/10">
            <View className="flex-row items-center gap-1.5">
              <View className="w-2.5 h-2.5 rounded-full bg-[#ffdad6]" />
              <Text className="text-xs text-white font-medium">{stats.criticalAlerts} Bins Overflowing</Text>
            </View>
            <TouchableOpacity 
              onPress={() => router.push('/(staff)/route')}
              className="px-4 py-2 bg-white rounded-full"
            >
              <Text className="text-xs font-bold text-[#00522d]">Start Route →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Operations Shortcut Grid */}
        <Text className="text-base font-bold text-[#0d1e25] mb-3">Facility Controls</Text>
        <View className="flex-row flex-wrap justify-between gap-y-3 mb-6">
          <TouchableOpacity 
            onPress={() => router.push('/(staff)/log-waste')}
            className="w-[48%] bg-white p-4 rounded-[24px] border border-[#bec9be]/30 shadow-sm space-y-2"
          >
            <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
              <MaterialIcons name="post-add" size={22} color="#00522d" />
            </View>
            <Text className="font-bold text-xs text-[#0d1e25]">Log Manifest</Text>
            <Text className="text-[10px] text-[#556158]">Record bulk waste entry</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(staff)/sensors')}
            className="w-[48%] bg-white p-4 rounded-[24px] border border-[#bec9be]/30 shadow-sm space-y-2"
          >
            <View className="w-10 h-10 rounded-xl bg-[#9cf6ba]/40 items-center justify-center">
              <MaterialIcons name="sensors" size={22} color="#00210f" />
            </View>
            <Text className="font-bold text-xs text-[#0d1e25]">Smart Bins</Text>
            <Text className="text-[10px] text-[#556158]">{stats.activeBins} devices online</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(staff)/campus-map')}
            className="w-[48%] bg-white p-4 rounded-[24px] border border-[#bec9be]/30 shadow-sm space-y-2"
          >
            <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
              <MaterialIcons name="map" size={22} color="#00522d" />
            </View>
            <Text className="font-bold text-xs text-[#0d1e25]">Campus Map</Text>
            <Text className="text-[10px] text-[#556158]">Live fill visualizer</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(staff)/approvals')}
            className="w-[48%] bg-white p-4 rounded-[24px] border border-[#bec9be]/30 shadow-sm space-y-2"
          >
            <View className="w-10 h-10 rounded-xl bg-[#ffdad6] items-center justify-center">
              <MaterialIcons name="rule" size={22} color="#ba1a1a" />
            </View>
            <Text className="font-bold text-xs text-[#0d1e25]">Approvals</Text>
            <Text className="text-[10px] text-[#ba1a1a]">{stats.pendingApprovals} pending review</Text>
          </TouchableOpacity>
        </View>

        {/* Secondary Links */}
        <View className="bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm overflow-hidden divide-y divide-[#bec9be]/20">
          <TouchableOpacity 
            onPress={() => router.push('/(staff)/campus-analytics')}
            className="p-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="insights" size={20} color="#00522d" />
              <Text className="text-xs font-bold text-[#0d1e25]">Campus Energy & Footprint Analytics</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#556158" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(staff)/facilities')}
            className="p-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="apartment" size={20} color="#00522d" />
              <Text className="text-xs font-bold text-[#0d1e25]">Buildings & Zonal Infrastructure</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#556158" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(staff)/compliance')}
            className="p-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="verified-user" size={20} color="#00522d" />
              <Text className="text-xs font-bold text-[#0d1e25]">ISO 14001 Audit Compliance</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#556158" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
