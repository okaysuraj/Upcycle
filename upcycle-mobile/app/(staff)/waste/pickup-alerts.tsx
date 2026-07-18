import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'react-native-router-flux'; // Or expo-router
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PickupAlerts() {
  const insets = useSafeAreaInsets();

  const upcomingAlerts = [
    { id: 1, type: 'Organic Waste', time: 'Tomorrow, 07:00 AM', icon: 'leaf' },
    { id: 2, type: 'Mixed Paper', time: 'Friday, 10:30 AM', icon: 'document-text' },
    { id: 3, type: 'E-Waste', time: 'Monday, 09:00 AM', icon: 'battery-charging' },
  ];

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white border-b border-gray-200 px-4 h-24 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <Ionicons name="leaf" size={28} color="#00522d" />
          <Text className="text-2xl font-bold text-[#00522d] tracking-tight">EcoMarket</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2">
            <Ionicons name="search" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-10 h-10 rounded-full bg-gray-200 border-2 border-[#80d99f] overflow-hidden items-center justify-center">
            <Ionicons name="person" size={24} color="#3f4941" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        <View className="mb-8">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Pickup Alerts</Text>
          <Text className="text-[#3f4941]">Real-time logistics tracking for your eco-contributions.</Text>
        </View>

        {/* Active Tracking */}
        <View className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 mb-6">
          <View className="h-64 bg-gray-200">
            {/* Map Placeholder */}
            <View className="flex-1 bg-[#cbdde7] items-center justify-center">
              <Ionicons name="map" size={48} color="#a2d2a4" />
            </View>
            
            {/* ETA Badge */}
            <View className="absolute top-4 left-4 bg-white/90 p-3 rounded-xl flex-row items-center shadow-lg">
              <View className="w-10 h-10 bg-[#00522d] rounded-full items-center justify-center">
                <Ionicons name="bus" size={20} color="white" />
              </View>
              <View className="ml-3">
                <Text className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Estimated Arrival</Text>
                <Text className="text-xl font-bold text-[#00522d]">12 mins</Text>
              </View>
            </View>

            {/* Driver Card Overlay */}
            <View className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-xl flex-row items-center justify-between shadow-lg">
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-gray-300 rounded-full items-center justify-center border-2 border-white">
                  <Ionicons name="person" size={24} color="#0d1e25" />
                  <View className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#2eb872] rounded-full border-2 border-white" />
                </View>
                <View className="ml-3">
                  <Text className="font-bold text-[#0d1e25]">Marcus Chen</Text>
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={12} color="#24502c" />
                    <Text className="text-xs text-gray-500 ml-1">4.9 • EV Logistics Truck</Text>
                  </View>
                </View>
              </View>
              
              <View className="flex-row gap-2">
                <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-300 items-center justify-center">
                  <Ionicons name="chatbubble-outline" size={20} color="#3f4941" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-[#00522d] items-center justify-center">
                  <Ionicons name="call" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Timeline of Pickup Status */}
        <View className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <Text className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-6">Pickup Journey: ID-29401</Text>
          
          <View className="relative">
            <View className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#d9e6da]" />
            
            {/* Step 1 */}
            <View className="flex-row gap-4 mb-6">
              <View className="w-6 h-6 rounded-full bg-[#2eb872] items-center justify-center border-4 border-white z-10">
                <Ionicons name="checkmark" size={12} color="white" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="font-bold text-[#0d1e25]">Route Optimized</Text>
                  <Text className="text-xs text-gray-500">08:45 AM</Text>
                </View>
                <Text className="text-sm text-gray-500 mt-1">Smart-grid confirmed most efficient path to your location.</Text>
              </View>
            </View>

            {/* Step 2 */}
            <View className="flex-row gap-4 mb-6">
              <View className="w-6 h-6 rounded-full bg-[#2eb872] items-center justify-center border-4 border-white z-10">
                <Ionicons name="checkmark" size={12} color="white" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="font-bold text-[#0d1e25]">Vehicle Dispatched</Text>
                  <Text className="text-xs text-gray-500">09:12 AM</Text>
                </View>
                <Text className="text-sm text-gray-500 mt-1">Eco-Truck #42 has left the municipal hub.</Text>
              </View>
            </View>

            {/* Step 3 (Current) */}
            <View className="flex-row gap-4 mb-6">
              <View className="w-6 h-6 rounded-full bg-[#00522d] items-center justify-center border-4 border-white z-10">
                <View className="w-2 h-2 rounded-full bg-white" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="font-bold text-[#00522d]">En Route</Text>
                  <View className="bg-[#006d3e]/20 px-2 py-0.5 rounded-md">
                    <Text className="text-xs text-[#006d3e] font-bold">In Transit</Text>
                  </View>
                </View>
                <Text className="text-sm text-[#0d1e25] mt-1">Driver is navigating through Financial District traffic.</Text>
              </View>
            </View>

            {/* Step 4 (Future) */}
            <View className="flex-row gap-4">
              <View className="w-6 h-6 rounded-full bg-gray-200 border-4 border-white z-10" />
              <View className="flex-1 opacity-50">
                <Text className="font-bold text-[#0d1e25]">Resource Collection</Text>
                <Text className="text-sm text-gray-500 mt-1">Verification and weight measurement of materials.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Alerts */}
        <View className="bg-white/70 rounded-3xl p-6 shadow-sm mb-8 border border-white">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-[#0d1e25]">Upcoming</Text>
            <Ionicons name="calendar" size={24} color="#00522d" />
          </View>

          {upcomingAlerts.map(alert => (
            <TouchableOpacity key={alert.id} className="p-4 rounded-xl bg-white border border-gray-100 flex-row gap-4 mb-4 shadow-sm" onPress={() => router.push('/(staff)/waste/pickup-proof')}>
              <View className="w-10 h-10 rounded-lg bg-[#dff1fb] items-center justify-center">
                <Ionicons name={alert.icon as any} size={20} color="#00522d" />
              </View>
              <View className="justify-center">
                <Text className="font-bold text-[#0d1e25]">{alert.type}</Text>
                <Text className="text-xs text-gray-500 mt-1">{alert.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
