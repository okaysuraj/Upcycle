import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function CampusesDirectory() {
  const router = useRouter();
  const campuses = [
    { id: '1', name: 'Main Campus', status: 'Optimal', bins: 45 },
    { id: '2', name: 'North Tech Park', status: 'Warning', bins: 12 },
  ];
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Campuses</Text>
        <Text className="text-gray-500 text-base">Manage university campuses.</Text>
      </View>
      {campuses.map(c => (
        <TouchableOpacity key={c.id} onPress={() => router.push(`/staff/campuses/${c.id}`)} className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 flex-row justify-between items-center shadow-sm">
          <View>
            <Text className="font-bold text-gray-900 text-lg mb-1">{c.name}</Text>
            <Text className="text-gray-500 text-sm">{c.bins} Active Bins</Text>
          </View>
          <View className={`px-3 py-1 rounded-full ${c.status === 'Optimal' ? 'bg-emerald-50' : 'bg-amber-50'}`}>
            <Text className={`font-bold text-xs uppercase ${c.status === 'Optimal' ? 'text-emerald-700' : 'text-amber-700'}`}>{c.status}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScreenWrapper>
  );
}