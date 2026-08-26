import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function VolunteerScreen() {
  const router = useRouter();
  const [shifts] = useState([
    { id: '1', role: 'Campus Sorting Assistant', date: 'Oct 15, 2024', time: '10:00 AM – 01:00 PM', loc: 'Main Recycling Hub', hrs: 3, status: 'Upcoming', points: 30 },
    { id: '2', role: 'Quad Cleanup Coordinator', date: 'Oct 02, 2024', time: '07:00 PM – 09:30 PM', loc: 'Student Union Lawn', hrs: 2.5, status: 'Verified', points: 25 },
    { id: '3', role: 'Compost Bin Monitor', date: 'Sep 24, 2024', time: '12:00 PM – 02:00 PM', loc: 'Dining Commons Dock', hrs: 2, status: 'Verified', points: 20 },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Volunteer & Shifts</Text>
        </View>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="add" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* KPI Cards */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1 bg-[#00522d] p-5 rounded-[28px] text-white shadow-md space-y-1">
            <Text className="text-[10px] font-bold text-[#9cf6ba] uppercase tracking-wider">Total Verified</Text>
            <Text className="text-3xl font-bold text-white">24.5 <Text className="text-sm font-normal">hrs</Text></Text>
            <Text className="text-[11px] text-white/80">Campus Green Honor Roll</Text>
          </View>

          <View className="flex-1 bg-white p-5 rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-1">
            <Text className="text-[10px] font-bold text-[#556158] uppercase tracking-wider">Completed</Text>
            <Text className="text-3xl font-bold text-[#0d1e25]">8 <Text className="text-sm font-normal text-[#556158]">shifts</Text></Text>
            <Text className="text-[11px] text-[#00522d] font-bold">+240 Eco-Points</Text>
          </View>
        </View>

        {/* Schedule List */}
        <Text className="text-base font-bold text-[#0d1e25] mb-3">Shift Schedule & History</Text>
        <View className="space-y-4">
          {shifts.map((shift) => (
            <View key={shift.id} className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="font-bold text-sm text-[#0d1e25]">{shift.role}</Text>
                  <Text className="text-[11px] text-[#556158]">{shift.loc}</Text>
                </View>
                <View className={`px-2.5 py-0.5 rounded-full ${
                  shift.status === 'Upcoming' ? 'bg-[#dff1fb]' : 'bg-[#9cf6ba]/40'
                }`}>
                  <Text className="text-[10px] font-bold text-[#00522d] uppercase">{shift.status}</Text>
                </View>
              </View>

              <View className="pt-2 border-t border-[#bec9be]/20 flex-row justify-between items-center text-xs">
                <View className="flex-row items-center gap-1.5">
                  <Ionicons name="time-outline" size={14} color="#556158" />
                  <Text className="text-[11px] text-[#556158]">{shift.date} • {shift.time}</Text>
                </View>
                <Text className="text-xs font-bold text-[#00522d]">+{shift.points} pts</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
