import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function EventsHome() {
  const { authFetch } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const res = await authFetch('/events');
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Campus Events</Text>
        <Text className="text-gray-500 text-base">Join sustainability events and earn points.</Text>
      </View>

      {events.map(event => (
        <View key={event._id} className="bg-white rounded-3xl overflow-hidden shadow-sm mb-6 border border-gray-100">
          <View className="h-40 bg-emerald-100 items-center justify-center relative">
            <Text className="text-6xl">🌍</Text>
            <View className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
              <Text className="font-bold text-emerald-800 text-xs">+{event.pointsAwarded || 50} pts</Text>
            </View>
          </View>
          <View className="p-6">
            <Text className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">{event.type}</Text>
            <Text className="text-xl font-bold text-gray-900 mb-2">{event.title}</Text>
            <Text className="text-gray-500 mb-4">{event.description}</Text>
            
            <TouchableOpacity className="bg-emerald-50 py-3 rounded-xl items-center">
              <Text className="text-emerald-700 font-bold">RSVP Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {events.length === 0 && (
        <View className="items-center justify-center py-10">
          <Text className="text-gray-400">No events found.</Text>
        </View>
      )}
    </ScreenWrapper>
  );
}
