import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LogisticsScreen() {
  const [routes] = useState([
    { id: 'RT-Alpha', vehicle: 'EV Truck 01', driver: 'Marcus T.', stops: 12, progress: 45 },
    { id: 'RT-Beta', vehicle: 'EV Truck 02', driver: 'Sarah W.', stops: 8, progress: 100 },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Logistics</Text>
            <Text className="text-gray-500 mt-1">Fleet and Routes</Text>
          </View>
          <TouchableOpacity className="bg-green-100 p-3 rounded-full">
            <Ionicons name="bus" size={24} color="#15803d" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {routes.map(route => (
            <View key={route.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-center mb-4">
                <View>
                  <Text className="font-bold text-lg text-gray-800">{route.id}</Text>
                  <Text className="text-sm text-gray-500">{route.vehicle} • {route.driver}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${
                  route.progress === 100 ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <Text className={`text-xs font-bold uppercase ${
                    route.progress === 100 ? 'text-green-700' : 'text-blue-700'
                  }`}>{route.progress === 100 ? 'Completed' : 'In Transit'}</Text>
                </View>
              </View>
              
              <View className="flex-row items-center space-x-3">
                <Text className="text-sm font-bold text-gray-600 w-16">{route.progress}%</Text>
                <View className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <View className="h-full bg-green-500" style={{ width: `${route.progress}%` }} />
                </View>
                <Text className="text-xs text-gray-500 ml-2">{route.stops} stops</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
