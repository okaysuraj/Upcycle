import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PrivacySettingsMobile() {
  const router = useRouter();

  const [publicProfile, setPublicProfile] = useState(true);
  const [shareStats, setShareStats] = useState(true);
  const [activityFeed, setActivityFeed] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center gap-4 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-[#00522d]">Privacy & Telemetry</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Privacy Settings</Text>
          <Text className="text-xs text-[#556158] mt-1">
            Control your campus data visibility and telemetry preferences.
          </Text>
        </View>

        {/* Visibility Controls */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[28px] p-6 shadow-sm mb-4 space-y-6">
          <View className="flex-row items-center gap-2 pb-2 border-b border-[#bec9be]/20">
            <MaterialIcons name="visibility" size={20} color="#00522d" />
            <Text className="text-sm font-bold text-[#0d1e25]">Visibility Controls</Text>
          </View>

          <View className="space-y-5 text-xs">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <Text className="text-sm font-bold text-[#0d1e25]">Leaderboard Visibility</Text>
                <Text className="text-[11px] text-[#556158] mt-0.5">Show your name and points on campus leaderboards.</Text>
              </View>
              <Switch 
                trackColor={{ false: '#bec9be', true: '#00522d' }}
                thumbColor={'#ffffff'}
                onValueChange={setPublicProfile}
                value={publicProfile}
              />
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <Text className="text-sm font-bold text-[#0d1e25]">Municipal Benchmarking</Text>
                <Text className="text-[11px] text-[#556158] mt-0.5">Contribute anonymized diversion data to city targets.</Text>
              </View>
              <Switch 
                trackColor={{ false: '#bec9be', true: '#00522d' }}
                thumbColor={'#ffffff'}
                onValueChange={setShareStats}
                value={shareStats}
              />
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <Text className="text-sm font-bold text-[#0d1e25]">Public Social Feed</Text>
                <Text className="text-[11px] text-[#556158] mt-0.5">Automatically publish milestone badges to community feed.</Text>
              </View>
              <Switch 
                trackColor={{ false: '#bec9be', true: '#00522d' }}
                thumbColor={'#ffffff'}
                onValueChange={setActivityFeed}
                value={activityFeed}
              />
            </View>
          </View>
        </View>

        {/* Compliance Notice */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[28px] p-6 shadow-sm space-y-2">
          <Text className="text-xs font-bold uppercase text-[#00522d]">ISO 14001 Audit Compliance</Text>
          <Text className="text-xs text-[#556158] leading-relaxed">
            Waste telemetry submissions are encrypted and stored in tamper-evident logs for academic verification.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
