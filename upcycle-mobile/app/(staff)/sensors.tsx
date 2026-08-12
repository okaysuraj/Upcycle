import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SensorsScreen() {
  const [bins] = useState([
    { id: 'BIN-101', location: 'Main Quad', fillLevel: 95, status: 'Critical', lastUpdate: '2 mins ago' },
    { id: 'BIN-102', location: 'Student Union North', fillLevel: 45, status: 'Normal', lastUpdate: '15 mins ago' },
    { id: 'BIN-103', location: 'Library 1st Floor', fillLevel: 80, status: 'Warning', lastUpdate: '5 mins ago' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Smart Sensors</Text>
            <Text className="text-gray-500 mt-1">Live IoT bin monitoring</Text>
          </View>
          <TouchableOpacity className="bg-green-100 p-3 rounded-full">
            <Ionicons name="add" size={24} color="#15803d" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {bins.map((bin) => (
            <View key={bin.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-lg font-bold text-gray-800">{bin.location}</Text>
                  <Text className="text-sm font-mono text-gray-500 mt-1">{bin.id}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${
                  bin.status === 'Critical' ? 'bg-red-100' :
                  bin.status === 'Warning' ? 'bg-yellow-100' : 'bg-green-100'
                }`}>
                  <Text className={`text-xs font-bold ${
                    bin.status === 'Critical' ? 'text-red-700' :
                    bin.status === 'Warning' ? 'text-yellow-700' : 'text-green-700'
                  }`}>{bin.status}</Text>
                </View>
              </View>

              <View className="flex-row items-center space-x-3 mt-2">
                <Text className="font-bold text-gray-700 w-12">{bin.fillLevel}%</Text>
                <View className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <View 
                    className={`h-full ${bin.fillLevel > 85 ? 'bg-red-500' : bin.fillLevel > 70 ? 'bg-yellow-500' : 'bg-green-500'}`} 
                    style={{ width: `${bin.fillLevel}%` }}
                  />
                </View>
              </View>

              <Text className="text-xs text-gray-400 mt-3 text-right">Updated: {bin.lastUpdate}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
