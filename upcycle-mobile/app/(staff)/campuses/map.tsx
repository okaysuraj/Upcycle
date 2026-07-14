import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function CampusMap() {
  const bins = [
    { id: 1, name: 'North Library Bin', fill: 85, status: 'warning', type: 'Mixed' },
    { id: 2, name: 'Cafeteria Main', fill: 45, status: 'normal', type: 'Food' },
    { id: 3, name: 'Science Block A', fill: 95, status: 'critical', type: 'Plastic' },
  ];

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-6">
        <Text className="text-3xl font-black text-gray-900 mb-2">Bin Infrastructure</Text>
        <Text className="text-gray-500 text-base">Live fill levels across campus.</Text>
      </View>

      <View className="h-48 bg-emerald-100 rounded-3xl items-center justify-center mb-8 border border-emerald-200">
        <Text className="text-4xl mb-2">🗺️</Text>
        <Text className="text-emerald-700 font-medium">Map View (Simulated)</Text>
      </View>

      <Text className="text-xl font-bold text-gray-900 mb-4">Smart Bins</Text>

      {bins.map(bin => (
        <View key={bin.id} className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 shadow-sm">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="font-bold text-gray-900 text-lg">{bin.name}</Text>
            <View className={`px-2 py-1 rounded ${bin.status === 'critical' ? 'bg-red-100' : bin.status === 'warning' ? 'bg-yellow-100' : 'bg-emerald-100'}`}>
              <Text className={`text-xs font-bold ${bin.status === 'critical' ? 'text-red-700' : bin.status === 'warning' ? 'text-yellow-700' : 'text-emerald-700'}`}>
                {bin.fill}% Full
              </Text>
            </View>
          </View>
          
          <View className="h-2 bg-gray-100 rounded-full w-full overflow-hidden mb-2">
            <View 
              className={`h-full ${bin.status === 'critical' ? 'bg-red-500' : bin.status === 'warning' ? 'bg-yellow-500' : 'bg-emerald-500'}`} 
              style={{ width: `${bin.fill}%` }} 
            />
          </View>
          <Text className="text-gray-400 text-xs">Waste Type: {bin.type}</Text>
        </View>
      ))}
    </ScreenWrapper>
  );
}
