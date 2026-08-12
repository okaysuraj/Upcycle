import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShiftsScreen() {
  const [shifts] = useState([
    { id: 1, name: 'Morning Waste Collection', time: '06:00 AM - 02:00 PM', assigned: 'Marcus T.', status: 'In Progress' },
    { id: 2, name: 'Campus Grounds Cleaning', time: '07:30 AM - 03:30 PM', assigned: 'Sarah W.', status: 'Upcoming' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-green-700">Shift Schedule</Text>
          <Text className="text-gray-500 mt-1">Today's Timeline</Text>
        </View>

        <View className="pl-4 border-l-2 border-gray-200 space-y-6">
          {shifts.map((shift) => (
            <View key={shift.id} className="relative">
              <View className={`absolute -left-[25px] top-1 w-4 h-4 rounded-full border-4 border-white ${
                shift.status === 'In Progress' ? 'bg-green-500' : 'bg-gray-400'
              }`} />
              
              <View className="bg-gray-50 p-4 rounded-2xl border border-gray-100 ml-2">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="font-bold text-gray-800 flex-1">{shift.name}</Text>
                  <Text className={`text-xs font-bold uppercase ${
                    shift.status === 'In Progress' ? 'text-green-600' : 'text-gray-500'
                  }`}>{shift.status}</Text>
                </View>
                
                <View className="flex-row items-center space-x-4 mt-2">
                  <View className="flex-row items-center">
                    <Ionicons name="time-outline" size={16} color="#6b7280" />
                    <Text className="text-xs text-gray-600 ml-1">{shift.time}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="person-outline" size={16} color="#6b7280" />
                    <Text className="text-xs text-gray-600 ml-1">{shift.assigned}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
