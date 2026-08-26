import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function VendorsScreen() {
  const router = useRouter();
  const [vendors] = useState([
    { id: 'V-001', name: 'BioLoop Closed-Loop Logistics', type: 'Certified Composting', status: 'Active', sla: 98, rating: '4.9 ★', activeContracts: 3 },
    { id: 'V-002', name: 'EcoHaul Resource Recovery', type: 'PET & Paper Hauler', status: 'Active', sla: 95, rating: '4.8 ★', activeContracts: 2 },
    { id: 'V-004', name: 'Metro Clean Logistics', type: 'General Waste Partner', status: 'At Risk', sla: 76, rating: '3.6 ★', activeContracts: 1 },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Certified Vendor Roster</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/(staff)/vendor-verification')}
          className="px-3 py-1.5 bg-[#dff1fb] rounded-full"
        >
          <Text className="text-xs font-bold text-[#00522d]">Queue (4)</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Hauler Partners</Text>
          <Text className="text-xs text-[#556158] mt-0.5">Municipal SLAs, carbon footprint compliance, and contract status.</Text>
        </View>

        <View className="space-y-4">
          {vendors.map((vendor) => {
            const isAtRisk = vendor.status === 'At Risk';
            return (
              <View key={vendor.id} className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1 pr-2">
                    <Text className="font-bold text-base text-[#0d1e25]">{vendor.name}</Text>
                    <View className="flex-row items-center gap-2 mt-0.5">
                      <Text className="text-xs font-mono font-bold text-[#00522d]">{vendor.id}</Text>
                      <Text className="text-[11px] text-[#556158]">• {vendor.type}</Text>
                    </View>
                  </View>
                  <View className={`px-2.5 py-0.5 rounded-full ${
                    isAtRisk ? 'bg-[#ffdad6]' : 'bg-[#9cf6ba]/40'
                  }`}>
                    <Text className={`text-[10px] font-bold ${
                      isAtRisk ? 'text-[#ba1a1a]' : 'text-[#00210f]'
                    }`}>
                      {vendor.status}
                    </Text>
                  </View>
                </View>

                <View className="space-y-1.5 pt-2 border-t border-[#bec9be]/20">
                  <View className="flex-row justify-between items-center text-xs">
                    <Text className="text-[11px] text-[#556158] font-medium">SLA On-Time Fulfillment</Text>
                    <Text className={`text-xs font-bold ${isAtRisk ? 'text-[#ba1a1a]' : 'text-[#00522d]'}`}>
                      {vendor.sla}%
                    </Text>
                  </View>
                  <View className="h-2 w-full bg-[#f4faff] rounded-full overflow-hidden border border-[#bec9be]/30">
                    <View 
                      className={`h-full rounded-full ${isAtRisk ? 'bg-[#ba1a1a]' : 'bg-[#00522d]'}`}
                      style={{ width: `${vendor.sla}%` }}
                    />
                  </View>
                </View>

                <View className="pt-2 flex-row justify-between items-center text-xs text-[#556158]">
                  <Text className="text-[11px] text-[#556158]">{vendor.activeContracts} Active Contracts</Text>
                  <Text className="text-xs font-bold text-[#0d1e25]">{vendor.rating}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
