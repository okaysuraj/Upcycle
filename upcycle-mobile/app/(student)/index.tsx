import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import StatCard from '../../components/ui/StatCard';

export default function StudentDashboard() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ScreenWrapper scroll={true} withPadding={false}>
      <View className="bg-emerald-700 px-6 pt-12 pb-8 rounded-b-[40px]">
        <Text className="text-emerald-100 font-medium mb-1">Hello,</Text>
        <Text className="text-white text-3xl font-bold mb-4">{user?.name || 'Student'}</Text>
        
        <View className="bg-emerald-800/50 p-5 rounded-3xl flex-row items-center">
          <View className="w-14 h-14 bg-yellow-400 rounded-full items-center justify-center mr-4 shadow-sm">
            <Text className="text-2xl">🌟</Text>
          </View>
          <View>
            <Text className="text-emerald-100 font-medium text-sm uppercase tracking-wider mb-1">Impact Points</Text>
            <Text className="text-white font-black text-3xl">1,250</Text>
          </View>
        </View>
      </View>

      <View className="px-6 py-6">
        <Text className="text-xl font-bold text-gray-900 mb-4">Quick Actions</Text>
        <View className="flex-row flex-wrap justify-between mb-6">
          <TouchableOpacity className="w-[48%] bg-white p-4 rounded-3xl items-center border border-gray-100 shadow-sm mb-4" onPress={() => router.push('/(student)/events')}>
            <View className="w-12 h-12 bg-blue-50 rounded-2xl items-center justify-center mb-3">
              <Text className="text-2xl">🎟️</Text>
            </View>
            <Text className="font-bold text-gray-900">Events</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="w-[48%] bg-white p-4 rounded-3xl items-center border border-gray-100 shadow-sm mb-4" onPress={() => router.push('/(student)/marketplace')}>
            <View className="w-12 h-12 bg-purple-50 rounded-2xl items-center justify-center mb-3">
              <Text className="text-2xl">🛍️</Text>
            </View>
            <Text className="font-bold text-gray-900">Marketplace</Text>
          </TouchableOpacity>
        </View>
        
        <Text className="text-xl font-bold text-gray-900 mb-4">Your Impact</Text>
        <StatCard title="Events Attended" value="4" icon="📍" trend="Top 10%" className="mb-4" />
        <StatCard title="Items Traded" value="2" icon="🔄" />
      </View>
    </ScreenWrapper>
  );
}