import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import StatCard from '../../../components/ui/StatCard';

export default function CarbonAnalytics() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Carbon Impact</Text>
      </View>
      <StatCard title="Total CO2 Offset" value="12.4t" icon="☁️" trend="1.2t" className="mb-4" />
      <View className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mt-2">
        <Text className="font-bold text-gray-900 mb-4">Sources of Offset</Text>
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">Waste Diversion</Text>
          <Text className="font-bold text-gray-900">8.1t</Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">Energy Savings</Text>
          <Text className="font-bold text-gray-900">3.2t</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Student Events</Text>
          <Text className="font-bold text-gray-900">1.1t</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}