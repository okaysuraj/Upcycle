import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function EventsScreen() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Volunteering', 'Workshops', 'Seminars', 'Competitions'];

  const events = [
    {
      id: '1',
      title: 'Annual Campus Climate Summit 2024',
      type: 'Summit',
      date: 'Oct 14, 2024 • 10:00 AM',
      location: 'Central Campus Auditorium',
      attendees: 342,
      points: '+50 pts',
      description: 'Join faculty, students, and municipal leaders to discuss zero-emission goals.'
    },
    {
      id: '2',
      title: 'Science Quad Waste Sorting Drive',
      type: 'Volunteering',
      date: 'Oct 18, 2024 • 2:00 PM',
      location: 'Science Building Lawn',
      attendees: 85,
      points: '+30 pts',
      description: 'Hands-on e-waste and recycling classification event with refreshments provided.'
    },
    {
      id: '3',
      title: 'Urban Composting & Microgrid Workshop',
      type: 'Workshops',
      date: 'Oct 24, 2024 • 4:00 PM',
      location: 'Engineering Lab 4',
      attendees: 42,
      points: '+25 pts',
      description: 'Learn household and campus scale organic diversion techniques.'
    }
  ];

  const filteredEvents = selectedFilter === 'All' 
    ? events 
    : events.filter(e => e.type.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Campus Events Hub</Text>
        </View>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="filter-outline" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Hero Featured Event Banner */}
        <View className="p-6 rounded-[32px] bg-[#00522d] shadow-lg mb-6 relative overflow-hidden space-y-4">
          <View className="flex-row justify-between items-start">
            <View className="flex-row gap-2">
              <Text className="text-[10px] font-bold text-[#00210f] uppercase tracking-wider bg-[#9cf6ba] px-3 py-1 rounded-full">
                Featured
              </Text>
              <Text className="text-[10px] font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                Summit
              </Text>
            </View>
            <View className="px-3 py-1 bg-white/10 rounded-full border border-white/20">
              <Text className="text-xs font-bold text-[#9cf6ba]">+50 pts</Text>
            </View>
          </View>

          <View className="space-y-1 pt-1">
            <Text className="text-2xl font-bold text-white">Annual Campus Climate Summit 2024</Text>
            <Text className="text-xs text-white/80 leading-relaxed">
              Join 500+ student leaders and municipal partners setting zero-waste milestones.
            </Text>
          </View>

          <View className="pt-2 flex-row justify-between items-center border-t border-white/10">
            <View className="flex-row items-center gap-1.5">
              <Ionicons name="calendar-outline" size={14} color="#9cf6ba" />
              <Text className="text-xs text-white">Oct 14-16 • Auditorium</Text>
            </View>
            <TouchableOpacity 
              onPress={() => router.push('/(student)/event-details')}
              className="px-4 py-2 bg-white rounded-full shadow-sm"
            >
              <Text className="text-xs font-bold text-[#00522d]">RSVP Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6 -mx-1">
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <TouchableOpacity
                key={filter}
                onPress={() => setSelectedFilter(filter)}
                className={`mx-1 px-4 py-2 rounded-full border ${
                  isSelected 
                    ? 'bg-[#00522d] border-[#00522d]' 
                    : 'bg-white border-[#bec9be]/40'
                }`}
              >
                <Text className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#556158]'}`}>
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Events Feed List */}
        <View className="space-y-4">
          {filteredEvents.map((evt) => (
            <TouchableOpacity
              key={evt.id}
              activeOpacity={0.8}
              onPress={() => router.push('/(student)/event-details')}
              className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3"
            >
              <View className="flex-row justify-between items-start">
                <View className="px-2.5 py-0.5 bg-[#dff1fb] rounded-full">
                  <Text className="text-[10px] font-bold text-[#00522d] uppercase">{evt.type}</Text>
                </View>
                <Text className="text-xs font-bold text-[#00522d]">{evt.points}</Text>
              </View>

              <Text className="text-base font-bold text-[#0d1e25]">{evt.title}</Text>
              <Text className="text-xs text-[#556158] leading-relaxed">{evt.description}</Text>

              <View className="pt-2 border-t border-[#bec9be]/20 flex-row justify-between items-center">
                <View className="flex-row items-center gap-1.5">
                  <Ionicons name="time-outline" size={14} color="#556158" />
                  <Text className="text-[11px] text-[#556158]">{evt.date}</Text>
                </View>
                <View className="flex-row items-center gap-1.5">
                  <Ionicons name="people-outline" size={14} color="#00522d" />
                  <Text className="text-[11px] font-bold text-[#00522d]">{evt.attendees} Going</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
