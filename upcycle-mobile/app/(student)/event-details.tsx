import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventDetailsScreen() {
  const [event] = useState({
    id: 1,
    title: 'Campus Clean-up Drive',
    date: 'Oct 15, 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'North Campus Quad',
    attendees: 124,
    points: 50,
    description: 'Join us for the largest campus clean-up event of the semester. Gloves and bags will be provided.',
    rsvp: false
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="h-64 bg-green-100 items-center justify-center relative">
          <Ionicons name="image-outline" size={64} color="#15803d" className="opacity-20" />
          <TouchableOpacity className="absolute top-4 left-4 bg-white/80 p-2 rounded-full">
             <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        <View className="p-6 -mt-6 bg-white rounded-t-3xl shadow-sm">
          <View className="flex-row justify-between items-start mb-4">
            <Text className="text-3xl font-black text-gray-900 flex-1 mr-4">{event.title}</Text>
            <View className="bg-green-100 px-3 py-1.5 rounded-full items-center">
              <Text className="text-green-700 font-black">+{event.points}</Text>
              <Text className="text-[10px] text-green-700 uppercase font-bold">PTS</Text>
            </View>
          </View>

          <View className="space-y-4 mb-6 pb-6 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center mr-4">
                <Ionicons name="calendar" size={20} color="#2563eb" />
              </View>
              <View>
                <Text className="font-bold text-gray-800">{event.date}</Text>
                <Text className="text-sm text-gray-500">{event.time}</Text>
              </View>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-orange-50 items-center justify-center mr-4">
                <Ionicons name="location" size={20} color="#ea580c" />
              </View>
              <View>
                <Text className="font-bold text-gray-800">{event.location}</Text>
                <Text className="text-sm text-gray-500">View on map</Text>
              </View>
            </View>
          </View>

          <Text className="font-bold text-lg text-gray-800 mb-2">About this event</Text>
          <Text className="text-gray-600 leading-relaxed mb-8">{event.description}</Text>

          <TouchableOpacity className={`w-full py-4 rounded-full items-center ${
            event.rsvp ? 'bg-gray-200' : 'bg-green-700'
          }`}>
            <Text className={`font-bold text-lg ${
              event.rsvp ? 'text-gray-600' : 'text-white'
            }`}>{event.rsvp ? 'RSVP Confirmed' : 'RSVP Now'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
