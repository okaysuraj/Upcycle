import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function EventDetailsScreen() {
  const router = useRouter();
  const [rsvp, setRsvp] = useState(false);

  const event = {
    id: 1,
    title: 'Annual Campus Climate Summit 2024',
    type: 'Summit & Workshop',
    date: 'Wednesday, Oct 14, 2024',
    time: '10:00 AM – 03:30 PM EST',
    location: 'Central Campus Auditorium & Quad',
    attendees: 342,
    points: 50,
    organizer: 'Office of Campus Sustainability',
    description: 'Join faculty, students, and municipal recycling leaders for keynotes, live IoT bin demos, and actionable workshops aimed at achieving a 90% diversion target before 2025. Lunch and zero-waste kits included.'
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-base font-bold text-[#00522d]">Event Details</Text>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="share-social-outline" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Event Header Card */}
        <View className="bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <View className="flex-row justify-between items-start">
            <View className="px-3 py-1 bg-[#dff1fb] rounded-full">
              <Text className="text-xs font-bold text-[#00522d] uppercase">{event.type}</Text>
            </View>
            <View className="px-3 py-1 bg-[#9cf6ba]/40 rounded-full">
              <Text className="text-xs font-bold text-[#00210f]">+{event.points} Eco-Points</Text>
            </View>
          </View>

          <Text className="text-2xl font-bold text-[#0d1e25] leading-tight">{event.title}</Text>
          <Text className="text-xs text-[#556158]">Organized by <Text className="font-bold text-[#00522d]">{event.organizer}</Text></Text>

          {/* Logistics list */}
          <View className="space-y-3 pt-3 border-t border-[#bec9be]/20 text-xs">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <Ionicons name="calendar" size={20} color="#00522d" />
              </View>
              <View>
                <Text className="font-bold text-xs text-[#0d1e25]">{event.date}</Text>
                <Text className="text-[11px] text-[#556158]">{event.time}</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <Ionicons name="location" size={20} color="#00522d" />
              </View>
              <View>
                <Text className="font-bold text-xs text-[#0d1e25]">{event.location}</Text>
                <Text className="text-[11px] text-[#00522d] font-bold">Directions & Campus Map</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#9cf6ba]/40 items-center justify-center">
                <Ionicons name="people" size={20} color="#00210f" />
              </View>
              <View>
                <Text className="font-bold text-xs text-[#0d1e25]">{event.attendees} Registered Attendees</Text>
                <Text className="text-[11px] text-[#556158]">Open to all verified campus members</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description Card */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-2 mb-6">
          <Text className="text-base font-bold text-[#0d1e25]">About This Event</Text>
          <Text className="text-xs text-[#556158] leading-relaxed">{event.description}</Text>
        </View>

        {/* RSVP Action */}
        <TouchableOpacity 
          onPress={() => setRsvp(!rsvp)}
          className={`py-4 rounded-full items-center shadow-md flex-row justify-center gap-2 ${
            rsvp ? 'bg-[#2eb872]' : 'bg-[#00522d]'
          }`}
        >
          <Ionicons name={rsvp ? "checkmark-circle" : "calendar"} size={18} color="white" />
          <Text className="text-white font-bold text-sm">
            {rsvp ? 'RSVP Confirmed (Ticket Saved)' : 'Confirm Event RSVP (+50 pts)'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
