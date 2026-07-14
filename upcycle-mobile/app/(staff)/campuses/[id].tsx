import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import StatCard from '../../../components/ui/StatCard';

export default function CampusDetails() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Main Campus</Text>
        <Text className="text-gray-500 text-base">New York, NY</Text>
      </View>
      <View className="flex-row flex-wrap justify-between mb-6">
        <StatCard title="Active Bins" value="45" icon="🗑️" className="w-[48%] mb-4" />
        <StatCard title="Alerts" value="2" icon="⚠️" className="w-[48%] mb-4" trendUp={false} trend="Action Req" />
      </View>
      <Text className="font-bold text-gray-900 text-xl mb-4">Campus Health</Text>
      <View className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <Text className="text-emerald-600 font-bold text-2xl mb-2">92%</Text>
        <Text className="text-gray-500 leading-relaxed">Overall sustainability health is excellent. Waste diversion rates are up 4% this month.</Text>
      </View>
    </ScreenWrapper>
  );
}