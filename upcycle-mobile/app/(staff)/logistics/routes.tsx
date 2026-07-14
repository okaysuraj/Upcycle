import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
export default function Routes() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Routes</Text></View>
    </ScreenWrapper>
  );
}