import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FacilitiesScreen() {
  const [facilities] = useState([
    { id: 1, name: 'Science Building', type: 'Academic', zones: 12, health: 98 },
    { id: 2, name: 'Main Dining Hall', type: 'Food Service', zones: 5, health: 82 },
    { id: 3, name: 'Student Recreation Center', type: 'Athletics', zones: 8, health: 100 },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Facilities</Text>
            <Text className="text-gray-500 mt-1">Manage campus buildings</Text>
          </View>
          <TouchableOpacity className="bg-green-100 p-3 rounded-full">
            <Ionicons name="map" size={24} color="#15803d" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {facilities.map((fac) => (
            <TouchableOpacity key={fac.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">{fac.name}</Text>
                <View className="flex-row items-center mt-2 space-x-4">
                  <Text className="text-xs font-bold text-gray-500 uppercase">{fac.type}</Text>
                  <Text className="text-xs font-medium text-gray-500">{fac.zones} Zones</Text>
                </View>
              </View>
              
              <View className="items-center">
                <View className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                  fac.health > 90 ? 'border-green-500' : 'border-yellow-500'
                }`}>
                  <Text className={`font-bold text-sm ${
                    fac.health > 90 ? 'text-green-700' : 'text-yellow-700'
                  }`}>{fac.health}</Text>
                </View>
                <Text className="text-[10px] text-gray-400 mt-1 font-bold uppercase">Health</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
