import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
export default function Checkout() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Checkout</Text></View>
    </ScreenWrapper>
  );
}