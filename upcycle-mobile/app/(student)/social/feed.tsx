import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function SocialFeed() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4 flex-row justify-between items-center">
        <Text className="text-3xl font-black text-gray-900">Community</Text>
        <TouchableOpacity className="bg-emerald-100 px-4 py-2 rounded-full"><Text className="text-emerald-700 font-bold">+ Post</Text></TouchableOpacity>
      </View>
      <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4">
        <View className="flex-row items-center mb-3">
          <View className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
          <View><Text className="font-bold text-gray-900">Alice Green</Text><Text className="text-xs text-gray-400">2h ago</Text></View>
        </View>
        <Text className="text-gray-700 leading-relaxed mb-4">Just completed the Zero Waste Challenge! Feeling great about reducing my footprint this week. 🌍</Text>
        <View className="flex-row gap-4">
          <Text className="text-gray-500 font-medium">❤️ 24</Text>
          <Text className="text-gray-500 font-medium">💬 5</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}