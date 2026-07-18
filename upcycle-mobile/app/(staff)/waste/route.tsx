import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RouteOptimization() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [sheetExpanded, setSheetExpanded] = useState(false);

  // Mock data for route optimization
  const stops = [
    { id: '1', name: 'Student Union North', arrival: '08:05 AM', priority: 'High', capacity: 92 },
    { id: '2', name: 'Library West Plaza', arrival: '08:18 AM', priority: 'Optimized', capacity: 84 },
    { id: '3', name: 'Science Quad C4', arrival: '08:32 AM', priority: 'Optimized', capacity: 78 },
    { id: '4', name: 'Engineering Hall', arrival: '08:45 AM', priority: '', capacity: null },
  ];

  return (
    <View className="flex-1 bg-[#cbdde7]">
      {/* Background Map */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.4275,
          longitude: -122.1697,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        customMapStyle={[]}
      >
        {/* Mock route polyline */}
        <Polyline
          coordinates={[
            { latitude: 37.4275, longitude: -122.1697 },
            { latitude: 37.4285, longitude: -122.1707 },
            { latitude: 37.4295, longitude: -122.1687 },
          ]}
          strokeColor="#006d3e"
          strokeWidth={4}
        />
        <Marker coordinate={{ latitude: 37.4275, longitude: -122.1697 }}>
          <View className="bg-red-500 w-4 h-4 rounded-full border-2 border-white" />
        </Marker>
        <Marker coordinate={{ latitude: 37.4295, longitude: -122.1687 }}>
          <View className="bg-[#006d3e] w-4 h-4 rounded-full border-2 border-white" />
        </Marker>
      </MapView>

      {/* Floating Overlays */}
      <View style={{ paddingTop: insets.top }} className="absolute top-4 left-4 right-4 flex-row justify-between items-start z-10 pointer-events-box-none">
        <View className="bg-white/80 px-4 py-2 rounded-full flex-row items-center border border-[#a5d6a7]/30 shadow-sm">
          <Ionicons name="leaf" size={16} color="#00522d" />
          <Text className="ml-2 text-[#00522d] font-bold text-sm">Optimized Path Active</Text>
        </View>

        <View className="flex-col gap-2">
          <TouchableOpacity className="w-12 h-12 bg-white/80 rounded-full items-center justify-center shadow-lg border border-[#a5d6a7]/30">
            <Ionicons name="locate" size={24} color="#00522d" />
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-white/80 rounded-full items-center justify-center shadow-lg border border-[#a5d6a7]/30">
            <Ionicons name="layers" size={24} color="#00522d" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View 
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] shadow-2xl border-t border-gray-200 transition-all duration-300 z-20 ${sheetExpanded ? 'h-[75%]' : 'h-[300px]'}`}
      >
        {/* Handle */}
        <TouchableOpacity 
          className="w-full items-center py-3"
          onPress={() => setSheetExpanded(!sheetExpanded)}
        >
          <View className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </TouchableOpacity>

        <View className="px-5 pb-6">
          <View className="flex-row justify-between items-end mb-6">
            <View>
              <Text className="text-2xl font-bold text-[#0d1e25]">Route Plan Delta</Text>
              <Text className="text-gray-500">Morning Collection • Zone A</Text>
            </View>
            <View className="bg-[#2eb872]/20 px-3 py-1 rounded-full flex-row items-center">
              <Ionicons name="trending-up" size={16} color="#00522d" />
              <Text className="text-[#00522d] font-bold text-xs ml-1">Fuel Saved 24%</Text>
            </View>
          </View>

          {/* Bento Stats */}
          <View className="flex-row gap-3 mb-4">
            <View className="flex-1 bg-[#f4faff] p-3 rounded-2xl items-center justify-center">
              <Ionicons name="time" size={24} color="#00522d" className="mb-1" />
              <Text className="font-bold text-[#0d1e25]">1h 42m</Text>
              <Text className="text-[10px] text-gray-500 uppercase font-bold mt-1">Duration</Text>
            </View>
            <View className="flex-1 bg-[#f4faff] p-3 rounded-2xl items-center justify-center border-2 border-[#9cf6ba]">
              <Ionicons name="trash" size={24} color="#00522d" className="mb-1" />
              <Text className="font-bold text-[#0d1e25]">14 Bins</Text>
              <Text className="text-[10px] text-gray-500 uppercase font-bold mt-1">Total Stops</Text>
            </View>
            <View className="flex-1 bg-[#f4faff] p-3 rounded-2xl items-center justify-center">
              <Ionicons name="map" size={24} color="#00522d" className="mb-1" />
              <Text className="font-bold text-[#0d1e25]">6.2 km</Text>
              <Text className="text-[10px] text-gray-500 uppercase font-bold mt-1">Distance</Text>
            </View>
          </View>
        </View>

        {sheetExpanded && (
          <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-[#0d1e25]">Sequence of Stops</Text>
              <TouchableOpacity>
                <Text className="text-[#00522d] font-bold">Edit Order</Text>
              </TouchableOpacity>
            </View>

            <View className="pb-24">
              {stops.map((stop, index) => (
                <View key={stop.id} className={`flex-row items-center bg-[#f4faff] p-4 rounded-2xl border border-gray-200 mb-3 ${index === 3 ? 'opacity-60' : ''}`}>
                  <View className={`w-10 h-10 rounded-full items-center justify-center ${index === 0 ? 'bg-[#006d3e]' : 'bg-[#d9e6da]'}`}>
                    <Text className={`font-bold ${index === 0 ? 'text-[#92ecb1]' : 'text-[#5b675e]'}`}>{stop.id}</Text>
                  </View>
                  <View className="flex-1 ml-4">
                    <Text className="font-bold text-[#0d1e25]">{stop.name}</Text>
                    <Text className="text-gray-500 text-xs">Arrival: {stop.arrival} {stop.priority ? `• ${stop.priority}` : ''}</Text>
                  </View>
                  {stop.capacity && (
                    <View className="items-end">
                      <Text className={`font-bold ${stop.capacity > 90 ? 'text-red-600' : 'text-[#00522d]'}`}>{stop.capacity}%</Text>
                      <Text className="text-[10px] uppercase text-gray-500 font-bold">Capacity</Text>
                    </View>
                  )}
                  {index === 3 && (
                    <Ionicons name="ellipsis-vertical" size={20} color="#6f7a70" />
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        )}

        {/* Action Button */}
        {sheetExpanded && (
          <View className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 border-t border-gray-200 pb-8">
            <TouchableOpacity 
              className="bg-[#006d3e] py-4 rounded-full flex-row justify-center items-center"
              onPress={() => router.push('/(staff)/waste/live-collection')}
            >
              <Ionicons name="send" size={20} color="#92ecb1" />
              <Text className="text-[#92ecb1] font-bold text-lg ml-2">Dispatch to Crew</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
