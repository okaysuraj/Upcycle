import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function Screen() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">API Docs</Text></View>
      <View className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <Text className="text-gray-500 text-base">This is the API Docs screen, wrapping up our final 151 screens.</Text>
      </View>
    </ScreenWrapper>
  );
}
