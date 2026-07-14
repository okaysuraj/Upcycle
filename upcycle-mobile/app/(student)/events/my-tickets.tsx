import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function MyTickets() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">My Tickets</Text></View>
      <View className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm items-center">
        <Text className="font-bold text-gray-900 text-xl mb-4">Solar Workshop</Text>
        <View className="w-48 h-48 border-4 border-emerald-500 rounded-3xl items-center justify-center mb-4"><Text>QR CODE</Text></View>
        <Text className="text-gray-500">Scan at entrance</Text>
      </View>
    </ScreenWrapper>
  );
}