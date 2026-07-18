import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Circle, Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function WasteHeatmap() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Background Map */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.4275,
          longitude: -122.1697,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        customMapStyle={[
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#e0f2f1" }]
          }
        ]}
      >
        {/* Heatmap Overlay - simulated with circles */}
        <Circle
          center={{ latitude: 37.4300, longitude: -122.1750 }}
          radius={300}
          fillColor="rgba(186, 26, 26, 0.4)"
          strokeWidth={0}
        />
        <Circle
          center={{ latitude: 37.4250, longitude: -122.1650 }}
          radius={450}
          fillColor="rgba(0, 82, 45, 0.4)"
          strokeWidth={0}
        />
        <Circle
          center={{ latitude: 37.4200, longitude: -122.1700 }}
          radius={400}
          fillColor="rgba(255, 160, 0, 0.3)"
          strokeWidth={0}
        />

        {/* Custom Markers */}
        <Marker coordinate={{ latitude: 37.4300, longitude: -122.1750 }}>
          <View className="items-center">
            <View className="bg-[#ba1a1a] p-2 rounded-full border-2 border-white shadow-lg">
              <Ionicons name="trash" size={16} color="white" />
            </View>
            <View className="bg-white/80 px-2 py-0.5 rounded-md mt-1">
              <Text className="text-xs font-bold text-[#0d1e25]">Zone A: 92%</Text>
            </View>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 37.4250, longitude: -122.1650 }}>
          <View className="items-center">
            <View className="bg-[#00522d] p-2 rounded-full border-2 border-white shadow-lg">
              <Ionicons name="trash" size={16} color="white" />
            </View>
            <View className="bg-white/80 px-2 py-0.5 rounded-md mt-1">
              <Text className="text-xs font-bold text-[#0d1e25]">Zone C: 45%</Text>
            </View>
          </View>
        </Marker>
      </MapView>

      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/90 border-b border-gray-200 px-4 h-24 flex-row justify-between items-center absolute top-0 w-full z-10">
        <View className="flex-row items-center gap-3">
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center overflow-hidden">
            <Ionicons name="person" size={16} color="white" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Ionicons name="notifications-outline" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      {/* Floating Search Bar */}
      <View style={{ top: insets.top + 70 }} className="absolute w-full px-4 z-10 pointer-events-box-none">
        <View className="bg-white/90 rounded-full flex-row items-center px-4 py-3 shadow-md border border-gray-200">
          <Ionicons name="search" size={20} color="#6f7a70" />
          <Text className="flex-1 text-[#0d1e25] ml-2 text-gray-400">Search facilities or zones...</Text>
          <TouchableOpacity>
            <Ionicons name="options" size={20} color="#00522d" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Map Controls */}
      <View className="absolute right-4 bottom-56 flex-col gap-3 z-10">
        <TouchableOpacity className="w-12 h-12 bg-white/90 rounded-full items-center justify-center shadow-lg border border-gray-200">
          <Ionicons name="add" size={24} color="#00522d" />
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 bg-white/90 rounded-full items-center justify-center shadow-lg border border-gray-200">
          <Ionicons name="remove" size={24} color="#00522d" />
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 bg-[#00522d] rounded-full items-center justify-center shadow-lg mt-2">
          <Ionicons name="locate" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet */}
      <View className="absolute bottom-20 left-0 right-0 px-4 z-20 pointer-events-box-none">
        <View className="bg-white rounded-[32px] shadow-2xl p-6 border border-gray-200 mb-4">
          <View className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-xl font-bold text-[#0d1e25]">Campus Overview</Text>
              <Text className="text-gray-500 text-sm">4 zones require immediate attention</Text>
            </View>
            <View className="bg-[#ffdad6] px-3 py-1 rounded-full">
              <Text className="text-[#93000a] text-xs font-bold uppercase tracking-wider">URGENT</Text>
            </View>
          </View>

          <View className="flex-row gap-3 mb-6">
            <View className="flex-1 bg-[#dff1fb] p-4 rounded-3xl border border-gray-200">
              <Ionicons name="flame" size={24} color="#00522d" className="mb-2" />
              <Text className="text-[#3f4941] text-xs font-bold uppercase tracking-wider mb-1 mt-2">Total Hotspots</Text>
              <Text className="text-2xl font-bold text-[#0d1e25]">12</Text>
            </View>
            <View className="flex-1 bg-[#d9e6da] p-4 rounded-3xl border border-gray-200">
              <Ionicons name="flash" size={24} color="#00522d" className="mb-2" />
              <Text className="text-[#3f4941] text-xs font-bold uppercase tracking-wider mb-1 mt-2">Efficiency Rate</Text>
              <Text className="text-2xl font-bold text-[#0d1e25]">84.2%</Text>
            </View>
          </View>

          <TouchableOpacity className="w-full bg-[#006d3e] py-4 rounded-full flex-row items-center justify-center shadow-lg">
            <Ionicons name="bus" size={20} color="#92ecb1" />
            <Text className="text-[#92ecb1] font-bold ml-2">Dispatch Collection Crew</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
