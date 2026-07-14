import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function Guide() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Recycling Guide</Text></View>
      <View className="bg-blue-50 p-5 rounded-2xl mb-4"><Text className="font-bold text-blue-900 text-lg">Paper & Cardboard</Text><Text className="text-blue-700 mt-1">Keep it clean and dry.</Text></View>
      <View className="bg-amber-50 p-5 rounded-2xl mb-4"><Text className="font-bold text-amber-900 text-lg">Plastics</Text><Text className="text-amber-700 mt-1">Rinse before recycling.</Text></View>
    </ScreenWrapper>
  );
}