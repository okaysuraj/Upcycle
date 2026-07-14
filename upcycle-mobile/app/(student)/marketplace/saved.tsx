import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function SavedItems() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Saved Items</Text></View>
      <View className="items-center justify-center py-10">
        <Text className="text-gray-400">No saved items yet.</Text>
      </View>
    </ScreenWrapper>
  );
}