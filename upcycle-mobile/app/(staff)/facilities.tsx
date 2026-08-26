import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function FacilitiesScreen() {
  const router = useRouter();

  const facilities = [
    { id: '1', name: 'Science & Engineering Complex', type: 'Academic & Laboratories', zones: 12, health: 98, wasteDaily: '3.4 tons', status: 'Optimal' },
    { id: '2', name: 'Main Campus Dining Commons', type: 'Food Services', zones: 6, health: 82, wasteDaily: '4.8 tons', status: 'High Organic Load' },
    { id: '3', name: 'Student Union & Atrium', type: 'Public Gathering', zones: 8, health: 94, wasteDaily: '1.2 tons', status: 'Optimal' },
    { id: '4', name: 'North Residential Halls', type: 'Dormitories', zones: 14, health: 90, wasteDaily: '2.1 tons', status: 'Optimal' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Buildings & Zones</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/(staff)/campus-map')}
          className="p-2 bg-[#dff1fb] rounded-full"
        >
          <MaterialIcons name="map" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Campus Facilities</Text>
          <Text className="text-xs text-[#556158] mt-0.5">Zonal partitioning, bin capacities, and structural health.</Text>
        </View>

        <View className="space-y-4">
          {facilities.map((fac) => {
            const isHigh = fac.health > 90;
            return (
              <View key={fac.id} className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1 pr-3">
                    <Text className="font-bold text-base text-[#0d1e25]">{fac.name}</Text>
                    <Text className="text-xs text-[#556158] mt-0.5">{fac.type}</Text>
                  </View>
                  <View className={`px-2.5 py-0.5 rounded-full ${
                    isHigh ? 'bg-[#9cf6ba]/40' : 'bg-amber-100'
                  }`}>
                    <Text className={`text-[10px] font-bold ${
                      isHigh ? 'text-[#00210f]' : 'text-amber-800'
                    }`}>
                      {fac.health}% Health
                    </Text>
                  </View>
                </View>

                <View className="pt-2 border-t border-[#bec9be]/20 flex-row justify-between items-center text-xs">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-[11px] font-bold text-[#00522d] bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
                      {fac.zones} Partitioned Zones
                    </Text>
                  </View>
                  <Text className="text-[11px] text-[#556158]">Avg. {fac.wasteDaily}/day</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
