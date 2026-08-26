import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusMapMobile() {
  const router = useRouter();
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>('Science Quad B');
  const [activeLayer, setActiveLayer] = useState<'all' | 'waste' | 'energy'>('waste');

  const buildings = [
    { id: '1', name: 'Science Quad B', type: 'Smart Bin Cluster', fill: 94, status: 'Critical Overflow', energy: '42 kW', coords: 'Zone 4' },
    { id: '2', name: 'Engineering Lab 4', type: 'Microgrid & Waste Dock', fill: 88, status: 'Pickup Scheduled', energy: '68 kW', coords: 'Zone 2' },
    { id: '3', name: 'Student Union Atrium', type: 'Public Recycling Hub', fill: 45, status: 'Normal Operations', energy: '31 kW', coords: 'Zone 1' },
    { id: '4', name: 'Dining Commons Rear', type: 'Compost Organics Dock', fill: 82, status: 'High Volume', energy: '55 kW', coords: 'Zone 3' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Campus Map Visualizer</Text>
        </View>
        <View className="flex-row gap-1 bg-[#dff1fb] p-1 rounded-full">
          <TouchableOpacity 
            onPress={() => setActiveLayer('waste')}
            className={`px-3 py-1 rounded-full ${activeLayer === 'waste' ? 'bg-[#00522d]' : 'bg-transparent'}`}
          >
            <Text className={`text-[10px] font-bold ${activeLayer === 'waste' ? 'text-white' : 'text-[#00522d]'}`}>Waste</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setActiveLayer('energy')}
            className={`px-3 py-1 rounded-full ${activeLayer === 'energy' ? 'bg-[#00522d]' : 'bg-transparent'}`}
          >
            <Text className={`text-[10px] font-bold ${activeLayer === 'energy' ? 'text-white' : 'text-[#00522d]'}`}>Energy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Isometric Map Simulated Canvas */}
        <View className="h-64 bg-[#00522d] rounded-[32px] p-6 justify-between shadow-md mb-6 relative overflow-hidden">
          <View className="flex-row justify-between items-start z-10">
            <View>
              <Text className="text-[10px] font-bold text-[#9cf6ba] uppercase tracking-wider">Campus GIS Telemetry</Text>
              <Text className="text-xl font-bold text-white mt-0.5">Central Campus Grid</Text>
            </View>
            <View className="px-3 py-1 bg-white/10 rounded-full border border-white/20">
              <Text className="text-[10px] font-bold text-white">4 Active Zones</Text>
            </View>
          </View>

          {/* Interactive node dots on simulated grid */}
          <View className="flex-row justify-around items-center z-10">
            {buildings.map((b) => {
              const isSelected = selectedBuilding === b.name;
              return (
                <TouchableOpacity 
                  key={b.id}
                  onPress={() => setSelectedBuilding(b.name)}
                  className={`p-2 rounded-2xl items-center ${
                    isSelected ? 'bg-white shadow-lg' : 'bg-white/20'
                  }`}
                >
                  <MaterialIcons 
                    name={b.fill > 85 ? "warning" : "delete"} 
                    size={20} 
                    color={isSelected ? (b.fill > 85 ? "#ba1a1a" : "#00522d") : "#ffffff"} 
                  />
                  <Text className={`text-[9px] font-bold mt-1 ${isSelected ? 'text-[#0d1e25]' : 'text-white'}`}>
                    {b.coords}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View className="flex-row justify-between items-center z-10 pt-2 border-t border-white/10">
            <Text className="text-[10px] text-white/80">Tap a zone to inspect real-time sensor diagnostic</Text>
            <Ionicons name="navigate" size={14} color="#9cf6ba" />
          </View>
        </View>

        {/* Selected Zone Diagnostic Card */}
        {selectedBuilding && (
          <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="font-bold text-base text-[#0d1e25]">{selectedBuilding}</Text>
                <Text className="text-xs text-[#556158]">
                  {buildings.find(b => b.name === selectedBuilding)?.type}
                </Text>
              </View>
              <View className="px-3 py-1 bg-[#ffdad6] rounded-full">
                <Text className="text-[10px] font-bold text-[#ba1a1a]">
                  {buildings.find(b => b.name === selectedBuilding)?.status}
                </Text>
              </View>
            </View>

            <View className="flex-row gap-3 pt-2">
              <View className="flex-1 bg-[#f4faff] p-3.5 rounded-2xl border border-[#bec9be]/30">
                <Text className="text-[10px] font-bold text-[#556158] uppercase">Smart Bin Fill</Text>
                <Text className="text-xl font-bold text-[#ba1a1a] mt-0.5">
                  {buildings.find(b => b.name === selectedBuilding)?.fill}%
                </Text>
              </View>
              <View className="flex-1 bg-[#f4faff] p-3.5 rounded-2xl border border-[#bec9be]/30">
                <Text className="text-[10px] font-bold text-[#556158] uppercase">Grid Wattage</Text>
                <Text className="text-xl font-bold text-[#00522d] mt-0.5">
                  {buildings.find(b => b.name === selectedBuilding)?.energy}
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => router.push('/(staff)/route')}
              className="py-3.5 bg-[#00522d] rounded-full items-center shadow-sm"
            >
              <Text className="text-white font-bold text-xs">Dispatch Driver to Location</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Zone Directory List */}
        <Text className="text-base font-bold text-[#0d1e25] mb-3">All Campus Zonal Hubs</Text>
        <View className="space-y-3">
          {buildings.map((b) => (
            <TouchableOpacity 
              key={b.id}
              onPress={() => setSelectedBuilding(b.name)}
              className="p-4 bg-white rounded-2xl border border-[#bec9be]/30 flex-row justify-between items-center shadow-sm"
            >
              <View className="flex-row items-center gap-3">
                <View className={`w-10 h-10 rounded-xl items-center justify-center ${
                  b.fill > 85 ? 'bg-[#ffdad6]' : 'bg-[#dff1fb]'
                }`}>
                  <MaterialIcons 
                    name="apartment" 
                    size={20} 
                    color={b.fill > 85 ? "#ba1a1a" : "#00522d"} 
                  />
                </View>
                <View>
                  <Text className="font-bold text-xs text-[#0d1e25]">{b.name}</Text>
                  <Text className="text-[10px] text-[#556158]">{b.coords} • {b.type}</Text>
                </View>
              </View>
              <Text className={`font-bold text-xs ${b.fill > 85 ? 'text-[#ba1a1a]' : 'text-[#00522d]'}`}>
                {b.fill}% Fill
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
