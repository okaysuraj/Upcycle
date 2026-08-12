import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventsScreen() {
  const [events] = useState([
    { id: 1, title: 'Campus Clean-up Drive', date: 'Oct 15, 2026', attendees: 124, type: 'Volunteering' },
    { id: 2, title: 'Upcycling Workshop', date: 'Oct 20, 2026', attendees: 45, type: 'Education' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Events Hub</Text>
            <Text className="text-gray-500 mt-1">Discover campus activities</Text>
          </View>
          <TouchableOpacity className="bg-gray-100 p-3 rounded-full">
            <Ionicons name="search" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {events.map(event => (
            <TouchableOpacity key={event.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
              <View className="h-32 bg-green-100 relative items-center justify-center">
                <Ionicons name="image-outline" size={48} color="#15803d" className="opacity-20" />
                <View className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full">
                  <Text className="text-xs font-bold text-green-800">{event.type}</Text>
                </View>
              </View>
              
              <View className="p-4">
                <Text className="font-bold text-xl text-gray-800 mb-2">{event.title}</Text>
                
                <View className="flex-row items-center space-x-4">
                  <View className="flex-row items-center">
                    <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-1">{event.date}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="people-outline" size={16} color="#6b7280" />
                    <Text className="text-sm text-gray-600 ml-1">{event.attendees} going</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
