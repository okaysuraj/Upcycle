import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Button from '../../../components/ui/Button';

export default function ChallengeDetails() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="items-center mb-8 mt-6">
        <Text className="text-6xl mb-4">♻️</Text>
        <Text className="text-3xl font-black text-gray-900 mb-2 text-center">Zero Waste Week</Text>
        <View className="bg-emerald-100 px-3 py-1 rounded-full">
          <Text className="text-emerald-800 font-bold">Reward: 500 Pts</Text>
        </View>
      </View>
      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
        <Text className="text-gray-700 text-base leading-relaxed mb-6">
          Challenge yourself to generate absolutely no landfill waste for 7 consecutive days. 
          Use reusable containers, recycle, and compost everything!
        </Text>
        <Text className="font-bold text-gray-900 mb-2">Your Progress</Text>
        <View className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
          <View className="h-full bg-emerald-500 w-2/5" />
        </View>
        <Text className="text-gray-400 text-xs text-right">Day 3 of 7</Text>
      </View>
      <Button title="Log Progress" variant="primary" />
    </ScreenWrapper>
  );
}