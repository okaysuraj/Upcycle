import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SensorsScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  const bins = [
    { id: 'BIN-101', location: 'Science Quad Block B', stream: 'Plastics & Cans', fillLevel: 94, status: 'Critical', battery: '92%', lora: 'Excellent', lastUpdate: '1 min ago' },
    { id: 'BIN-104', location: 'Engineering Lab 4 Dock', stream: 'General Waste', fillLevel: 88, status: 'Critical', battery: '85%', lora: 'Good', lastUpdate: '4 mins ago' },
    { id: 'BIN-108', location: 'Dining Commons Rear', stream: 'Organics & Food', fillLevel: 82, status: 'Warning', battery: '98%', lora: 'Excellent', lastUpdate: '8 mins ago' },
    { id: 'BIN-112', location: 'Student Union Atrium', stream: 'Paper & Cardboard', fillLevel: 45, status: 'Normal', battery: '76%', lora: 'Good', lastUpdate: '12 mins ago' },
    { id: 'BIN-115', location: 'Central Library 1st Floor', stream: 'Recyclables', fillLevel: 32, status: 'Normal', battery: '89%', lora: 'Excellent', lastUpdate: '20 mins ago' },
  ];

  const filters = ['All', 'Critical', 'Warning', 'Normal'];

  const filteredBins = activeFilter === 'All'
    ? bins
    : bins.filter(b => b.status.toLowerCase() === activeFilter.toLowerCase());

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">IoT Smart Bin Fleet</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/(staff)/route')}
          className="px-3 py-1.5 bg-[#00522d] rounded-full flex-row items-center gap-1 shadow-sm"
        >
          <MaterialIcons name="alt-route" size={14} color="#ffffff" />
          <Text className="text-xs font-bold text-white">Route (2)</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* KPI Banner */}
        <View className="bg-white rounded-[28px] p-5 border border-[#bec9be]/30 shadow-sm flex-row justify-between mb-6">
          <View className="items-center flex-1 border-r border-[#bec9be]/20">
            <Text className="text-2xl font-bold text-[#0d1e25]">48</Text>
            <Text className="text-[10px] font-bold text-[#556158] uppercase mt-0.5">Online</Text>
          </View>
          <View className="items-center flex-1 border-r border-[#bec9be]/20">
            <Text className="text-2xl font-bold text-[#ba1a1a]">2</Text>
            <Text className="text-[10px] font-bold text-[#ba1a1a] uppercase mt-0.5">&gt;90% Full</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-2xl font-bold text-[#00522d]">99.4%</Text>
            <Text className="text-[10px] font-bold text-[#00522d] uppercase mt-0.5">LoRaWAN</Text>
          </View>
        </View>

        {/* Filter Pills */}
        <View className="flex-row gap-2 mb-6">
          {filters.map((f) => {
            const isSelected = activeFilter === f;
            return (
              <TouchableOpacity
                key={f}
                onPress={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full border ${
                  isSelected ? 'bg-[#00522d] border-[#00522d]' : 'bg-white border-[#bec9be]/40'
                }`}
              >
                <Text className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#556158]'}`}>
                  {f}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Bin Cards List */}
        <View className="space-y-4">
          {filteredBins.map((bin) => {
            const isCritical = bin.fillLevel >= 85;
            const isWarning = bin.fillLevel >= 70 && bin.fillLevel < 85;
            return (
              <View key={bin.id} className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="font-bold text-sm text-[#0d1e25]">{bin.location}</Text>
                    <View className="flex-row items-center gap-2 mt-0.5">
                      <Text className="text-xs font-mono font-bold text-[#00522d]">{bin.id}</Text>
                      <Text className="text-[11px] text-[#556158]">• {bin.stream}</Text>
                    </View>
                  </View>
                  <View className={`px-2.5 py-0.5 rounded-full ${
                    isCritical ? 'bg-[#ffdad6]' : isWarning ? 'bg-amber-100' : 'bg-[#9cf6ba]/40'
                  }`}>
                    <Text className={`text-[10px] font-bold ${
                      isCritical ? 'text-[#ba1a1a]' : isWarning ? 'text-amber-800' : 'text-[#00522d]'
                    }`}>
                      {bin.fillLevel}% Fill
                    </Text>
                  </View>
                </View>

                {/* Progress bar */}
                <View className="h-2.5 w-full bg-[#f4faff] rounded-full overflow-hidden border border-[#bec9be]/30">
                  <View 
                    className={`h-full rounded-full ${
                      isCritical ? 'bg-[#ba1a1a]' : isWarning ? 'bg-amber-500' : 'bg-[#00522d]'
                    }`}
                    style={{ width: `${bin.fillLevel}%` }}
                  />
                </View>

                <View className="pt-2 border-t border-[#bec9be]/20 flex-row justify-between items-center text-xs text-[#556158]">
                  <Text className="text-[10px] text-[#556158]">Battery: {bin.battery} • {bin.lora}</Text>
                  <Text className="text-[10px] text-[#556158]">{bin.lastUpdate}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
