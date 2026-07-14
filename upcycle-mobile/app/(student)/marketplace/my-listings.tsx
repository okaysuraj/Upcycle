import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function MyListings() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">My Listings</Text></View>
      <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4">
        <View className="flex-row justify-between mb-2">
          <Text className="font-bold text-gray-900">Vintage Chair</Text>
          <Text className="text-emerald-600 font-bold">Active</Text>
        </View>
        <Text className="text-gray-400 text-sm">Listed for 450 pts</Text>
      </View>
    </ScreenWrapper>
  );
}