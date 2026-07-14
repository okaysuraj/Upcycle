import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function Locations() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Bin Locations</Text></View>
      <View className="h-64 bg-emerald-100 rounded-3xl items-center justify-center"><Text className="text-4xl">🗺️</Text></View>
    </ScreenWrapper>
  );
}