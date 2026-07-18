import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function AlertDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-14 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 flex-row items-center gap-1">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
            <Text className="text-sm font-bold text-[#3f4941]">Back</Text>
          </TouchableOpacity>
        </View>
        <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center overflow-hidden">
          <Ionicons name="person" size={20} color="white" />
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Alert Header & Status Card */}
        <View className="bg-white rounded-[24px] p-6 border border-[#d9e6da]/50 shadow-sm relative overflow-hidden mb-6">
          <View className="absolute -top-12 -right-12 w-32 h-32 bg-[#ffdad6]/50 rounded-full blur-2xl z-0" />
          <View className="relative z-10">
            <View className="flex-row items-center gap-4 mb-6">
              <View className="w-16 h-16 rounded-full bg-[#ffdad6] flex items-center justify-center shadow-sm">
                <Ionicons name="warning" size={32} color="#ba1a1a" />
              </View>
              <View className="flex-1">
                <View className="self-start bg-[#ffdad6] px-3 py-1 rounded-full mb-1">
                  <Text className="text-[10px] font-bold text-[#ba1a1a] uppercase tracking-wider">Critical Priority</Text>
                </View>
                <Text className="text-xl font-bold text-[#0d1e25] leading-tight">Smart Bin #402: Overflow Imminent</Text>
              </View>
            </View>

            <View className="flex-row flex-wrap justify-between gap-4 py-4 border-y border-[#d9e6da]/50 mb-4">
              <View>
                <Text className="text-[10px] font-bold text-[#3f4941] uppercase mb-1">Detected At</Text>
                <Text className="text-base font-bold text-[#0d1e25]">14:32 PM</Text>
                <Text className="text-xs text-gray-500">2 mins ago</Text>
              </View>
              <View className="flex-1 min-w-[120px]">
                <Text className="text-[10px] font-bold text-[#3f4941] uppercase mb-1">Capacity</Text>
                <View className="flex-row items-center gap-3">
                  <Text className="text-base font-bold text-[#ba1a1a]">98%</Text>
                  <View className="flex-1 h-3 bg-[#d9e6da] rounded-full overflow-hidden">
                    <View className="h-full bg-[#ba1a1a]" style={{ width: '98%' }} />
                  </View>
                </View>
              </View>
              <View>
                <Text className="text-[10px] font-bold text-[#3f4941] uppercase mb-1">Sensor ID</Text>
                <Text className="text-base font-bold text-[#0d1e25]">UPC-882-SNSR</Text>
              </View>
            </View>

            <Text className="text-sm text-[#3f4941] leading-relaxed">
              High-priority alert triggered by volumetric sensors. Ultrasonic readings indicate less than 5cm of headspace remains. Immediate evacuation of material is required to prevent local site contamination and maintain community cleanliness standards.
            </Text>
          </View>
        </View>

        {/* Location Map Placeholder */}
        <View className="bg-white/70 rounded-[12px] p-2 overflow-hidden h-[200px] relative mb-6 shadow-sm border border-[#a2d2a4]/30">
          <View className="absolute top-4 left-4 z-20 bg-white/90 px-3 py-1.5 rounded-lg flex-row items-center gap-1 shadow-sm border border-gray-200">
            <Ionicons name="location" size={16} color="#00522d" />
            <Text className="text-xs font-bold text-[#0d1e25]">District 4: North Plaza</Text>
          </View>
          <View className="w-full h-full rounded-[10px] bg-[#cbdde7] items-center justify-center">
             <Ionicons name="map-outline" size={48} color="#0d1e25" opacity={0.3} />
          </View>
        </View>

        {/* Action Panel */}
        <View className="bg-white rounded-[24px] p-6 border border-[#d9e6da]/50 shadow-sm mb-6">
          <Text className="text-xl font-bold text-[#0d1e25] mb-6">Take Action</Text>
          
          <View className="gap-3">
            <TouchableOpacity className="w-full bg-[#00522d] py-4 rounded-full flex-row items-center justify-center gap-2 shadow-sm">
              <Ionicons name="bus" size={20} color="white" />
              <Text className="font-bold text-white">Dispatch Collection Team</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="w-full border-2 border-[#6f7a70] py-4 rounded-full flex-row items-center justify-center gap-2">
              <Ionicons name="notifications-off-outline" size={20} color="#6f7a70" />
              <Text className="font-bold text-[#6f7a70]">Snooze (15 mins)</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-full py-4 rounded-full flex-row items-center justify-center gap-2">
              <Ionicons name="flag-outline" size={20} color="#ba1a1a" />
              <Text className="font-bold text-[#ba1a1a]">Report Sensor Malfunction</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-6 pt-6 border-t border-[#d9e6da]/50">
            <Text className="text-[10px] font-bold text-[#3f4941] mb-2 uppercase">Assigned To</Text>
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full bg-[#a2d2a4] items-center justify-center">
                <Text className="font-bold text-[#002109]">JC</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Julian Chen</Text>
                <Text className="text-[11px] text-[#3f4941]">On-Duty Supervisor</Text>
              </View>
              <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
                <Ionicons name="chatbubble" size={20} color="#00522d" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Site Logs */}
        <View className="bg-[#dff1fb] rounded-[24px] p-6 border border-[#cbdde7]">
          <Text className="text-sm font-bold text-[#0d1e25] mb-4">Site Logs</Text>
          <View className="gap-4">
            <View className="flex-row gap-3">
              <View className="w-2 h-2 rounded-full bg-[#00522d] mt-1.5" />
              <View>
                <Text className="text-sm font-bold text-[#0d1e25]">Last Collection</Text>
                <Text className="text-xs text-[#3f4941]">Today, 06:15 AM</Text>
              </View>
            </View>
            <View className="flex-row gap-3">
              <View className="w-2 h-2 rounded-full bg-[#bec9be] mt-1.5" />
              <View>
                <Text className="text-sm font-bold text-[#0d1e25]">Sensor Maintenance</Text>
                <Text className="text-xs text-[#3f4941]">Oct 12, 2023</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
