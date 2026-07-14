import React from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import StatCard from '../../../components/ui/StatCard';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <ScreenWrapper>
      <View className="items-center mt-6 mb-8">
        <View className="w-24 h-24 bg-emerald-100 rounded-full items-center justify-center mb-4 border-4 border-emerald-50">
          <Text className="text-4xl">🎓</Text>
        </View>
        <Text className="text-2xl font-black text-gray-900">{user?.name || 'Student Name'}</Text>
        <Text className="text-gray-500 font-medium capitalize">{user?.role || 'Student'} • {user?.email || 'email@edu'}</Text>
        
        <View className="mt-4 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
          <Text className="text-emerald-700 font-bold">1,250 Impact Points</Text>
        </View>
      </View>

      <Text className="text-lg font-bold text-gray-900 mb-4">Your Impact</Text>
      <View className="flex-row justify-between mb-8">
        <View className="w-[48%]">
          <StatCard title="Events" value="4" icon="🎟️" />
        </View>
        <View className="w-[48%]">
          <StatCard title="Rank" value="#42" icon="🏆" />
        </View>
      </View>

      <Text className="text-lg font-bold text-gray-900 mb-4">Recent Badges</Text>
      <View className="flex-row gap-4 mb-8">
        <View className="bg-amber-50 w-20 h-20 rounded-2xl items-center justify-center border border-amber-100">
          <Text className="text-3xl mb-1">🌟</Text>
          <Text className="text-[10px] font-bold text-amber-700 text-center">First Event</Text>
        </View>
        <View className="bg-blue-50 w-20 h-20 rounded-2xl items-center justify-center border border-blue-100">
          <Text className="text-3xl mb-1">💧</Text>
          <Text className="text-[10px] font-bold text-blue-700 text-center">Water Saver</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}
