import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Button from '../../../components/ui/Button';

export default function EventDetails() {
  const { id } = useLocalSearchParams();
  const { authFetch } = useAuth();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rsvpLoading, setRsvpLoading] = useState(false);

  useEffect(() => {
    if (id) loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const res = await authFetch(`/events/${id}`);
      if (res.ok) {
        const data = await res.json();
        setEvent(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRSVP = async () => {
    setRsvpLoading(true);
    try {
      const res = await authFetch(`/events/${id}/rsvp`, { method: 'POST' });
      if (res.ok) {
        Alert.alert("Success", "You have RSVP'd to this event!");
        loadEvent(); // reload to update attendees count
      } else {
        Alert.alert("Error", "Failed to RSVP.");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setRsvpLoading(false);
    }
  };

  if (loading) {
    return (
      <ScreenWrapper className="justify-center items-center">
        <ActivityIndicator size="large" color="#059669" />
      </ScreenWrapper>
    );
  }

  if (!event) {
    return (
      <ScreenWrapper className="justify-center items-center">
        <Text className="text-gray-500">Event not found.</Text>
        <Button title="Go Back" onPress={() => router.back()} className="mt-4" variant="outline" />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper className="bg-gray-50" withPadding={false}>
      <View className="h-64 bg-emerald-100 items-center justify-center relative">
        <Text className="text-8xl">🌍</Text>
        <TouchableOpacity 
          className="absolute top-12 left-6 w-10 h-10 bg-white/80 rounded-full items-center justify-center"
          onPress={() => router.back()}
        >
          <Text className="text-xl font-bold">←</Text>
        </TouchableOpacity>
      </View>
      
      <View className="px-6 py-8 -mt-6 bg-white rounded-t-3xl flex-1 shadow-sm">
        <View className="flex-row justify-between items-start mb-4">
          <View className="bg-emerald-50 px-3 py-1 rounded-full">
            <Text className="text-emerald-700 font-bold text-xs uppercase">{event.type}</Text>
          </View>
          <Text className="text-emerald-600 font-bold">+{event.pointsAwarded || 50} pts</Text>
        </View>

        <Text className="text-3xl font-black text-gray-900 mb-2">{event.title}</Text>
        <Text className="text-gray-500 text-base mb-6 leading-relaxed">{event.description}</Text>

        <View className="bg-gray-50 rounded-2xl p-4 mb-8">
          <View className="flex-row items-center mb-3">
            <Text className="text-xl mr-3">📅</Text>
            <View>
              <Text className="text-gray-900 font-bold">{new Date(event.date).toLocaleDateString()}</Text>
              <Text className="text-gray-500 text-xs">Event Date</Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Text className="text-xl mr-3">📍</Text>
            <View>
              <Text className="text-gray-900 font-bold">{event.location}</Text>
              <Text className="text-gray-500 text-xs">Campus Location</Text>
            </View>
          </View>
        </View>

        <Button 
          title="Confirm RSVP" 
          onPress={handleRSVP} 
          loading={rsvpLoading} 
          className="mb-8"
        />
      </View>
    </ScreenWrapper>
  );
}
