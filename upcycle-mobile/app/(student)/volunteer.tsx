import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VolunteerScreen() {
  const [shifts] = useState([
    { id: 1, role: 'Sorting Assistant', date: 'Oct 15, 2026', time: '10:00 AM - 01:00 PM', loc: 'Main Recycling Hub', hrs: 3, status: 'Upcoming' },
    { id: 2, role: 'Event Cleanup Crew', date: 'Oct 02, 2026', time: '07:00 PM - 09:30 PM', loc: 'Student Union', hrs: 2.5, status: 'Completed' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Volunteer</Text>
            <Text className="text-gray-500 mt-1">Your shifts & logged hours</Text>
          </View>
          <TouchableOpacity className="bg-green-100 p-3 rounded-full">
            <Ionicons name="search" size={24} color="#15803d" />
          </TouchableOpacity>
        </View>

        <View className="flex-row space-x-4 mb-6">
          <View className="flex-1 bg-green-700 p-4 rounded-3xl">
            <Text className="text-green-100 text-xs font-bold uppercase tracking-wider mb-1">Total Hours</Text>
            <Text className="text-white text-4xl font-black">24.5</Text>
          </View>
          <View className="flex-1 bg-blue-700 p-4 rounded-3xl">
            <Text className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Shifts Done</Text>
            <Text className="text-white text-4xl font-black">8</Text>
          </View>
        </View>

        <Text className="font-bold text-xl text-gray-800 mb-4">My Schedule</Text>

        <View className="space-y-4">
          {shifts.map(shift => (
            <View key={shift.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-center mb-3">
                <Text className="font-bold text-lg text-gray-800 flex-1">{shift.role}</Text>
                <View className={`px-2 py-1 rounded-full ${
                  shift.status === 'Upcoming' ? 'bg-green-100' : 'bg-gray-200'
                }`}>
                  <Text className={`text-[10px] font-bold uppercase ${
                    shift.status === 'Upcoming' ? 'text-green-700' : 'text-gray-600'
                  }`}>{shift.status}</Text>
                </View>
              </View>
              
              <View className="space-y-2 mb-3">
                 <View className="flex-row items-center">
                    <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-2">{shift.date} • {shift.time}</Text>
                 </View>
                 <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-2">{shift.loc}</Text>
                 </View>
              </View>
              
              <View className="flex-row justify-between items-center border-t border-gray-200 pt-3">
                <Text className="font-bold text-gray-500">{shift.hrs} hrs</Text>
                {shift.status === 'Upcoming' ? (
                  <Text className="text-red-500 font-bold">Cancel</Text>
                ) : (
                  <Text className="text-green-700 font-bold">Leave Feedback</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
