import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WasteLoggerScreen() {
  const [logs] = useState([
    { id: 1, category: 'PLASTIC', qty: 2.5, date: 'Oct 12' },
    { id: 2, category: 'PAPER', qty: 1.2, date: 'Oct 10' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Waste Log</Text>
            <Text className="text-gray-500 mt-1">Track your personal recycling</Text>
          </View>
          <TouchableOpacity className="bg-green-700 px-4 py-2 rounded-full">
            <Text className="text-white font-bold">Log Items</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-gray-50 p-6 rounded-3xl border border-gray-100 mb-8">
          <Text className="font-bold text-lg text-gray-800 mb-4">New Entry</Text>
          
          <Text className="text-sm font-bold text-gray-500 mb-2 uppercase">Category</Text>
          <View className="bg-white border border-gray-200 rounded-xl p-3 flex-row justify-between items-center mb-4">
             <Text className="text-base text-gray-800">Select Material...</Text>
             <Ionicons name="chevron-down" size={20} color="#6b7280" />
          </View>

          <Text className="text-sm font-bold text-gray-500 mb-2 uppercase">Quantity (kg)</Text>
          <TextInput 
            className="bg-white border border-gray-200 rounded-xl p-3 text-base mb-6" 
            placeholder="e.g. 2.5" 
            keyboardType="numeric" 
          />

          <TouchableOpacity className="bg-green-700 py-4 rounded-full items-center">
            <Text className="text-white font-bold text-lg">Log Waste</Text>
          </TouchableOpacity>
        </View>
        
        <Text className="font-bold text-xl text-gray-800 mb-4">Recent History</Text>
        
        <View className="space-y-3">
          {logs.map(log => (
            <View key={log.id} className="bg-white border border-gray-200 p-4 rounded-2xl flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-blue-100 rounded-xl items-center justify-center mr-4">
                  <Text className="font-bold text-blue-700 text-xs">{log.category.substring(0,3)}</Text>
                </View>
                <View>
                  <Text className="font-bold text-gray-800">{log.category}</Text>
                  <Text className="text-xs text-gray-500">{log.date}</Text>
                </View>
              </View>
              <Text className="font-black text-xl text-green-700">{log.qty}kg</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
