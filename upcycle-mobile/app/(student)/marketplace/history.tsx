import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function TransactionHistory() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Transaction History</Text></View>
      <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4">
        <Text className="font-bold text-gray-900">Sold: Calculus Textbook</Text>
        <Text className="text-emerald-600 font-bold mt-1">+150 Pts</Text>
        <Text className="text-gray-400 text-xs mt-2">Oct 12, 2023</Text>
      </View>
    </ScreenWrapper>
  );
}