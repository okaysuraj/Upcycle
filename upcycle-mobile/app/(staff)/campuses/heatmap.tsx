import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function WasteHeatmap() {
  const zones = [
    { id: '1', name: 'Cafeteria A', weight: 450, severity: 'high', type: 'Food Waste' },
    { id: '2', name: 'Science Block', weight: 320, severity: 'medium', type: 'Mixed' },
    { id: '3', name: 'Library', weight: 110, severity: 'low', type: 'Paper' },
    { id: '4', name: 'Dormitory C', weight: 280, severity: 'medium', type: 'Plastic' },
  ];

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Waste Heatmap</Text>
        <Text className="text-gray-500 text-base">Campus zones generating the most waste this week.</Text>
      </View>

      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6 items-center justify-center h-48">
        <Text className="text-5xl mb-4">🔥</Text>
        <Text className="text-gray-400 font-medium">Map visualization loading...</Text>
      </View>

      <Text className="text-xl font-bold text-gray-900 mb-4">Hotspots List</Text>
      {zones.map((zone, idx) => (
        <View key={zone.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-3 flex-row items-center">
          <Text className="font-bold text-gray-300 w-6">{idx + 1}</Text>
          <View className="flex-1">
            <Text className="font-bold text-gray-900">{zone.name}</Text>
            <Text className="text-gray-500 text-xs">{zone.type}</Text>
          </View>
          <View className="items-end mr-3">
            <Text className="font-black text-gray-900">{zone.weight} kg</Text>
          </View>
          <View className={`w-3 h-3 rounded-full ${zone.severity === 'high' ? 'bg-red-500' : zone.severity === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
        </View>
      ))}
    </ScreenWrapper>
  );
}
