import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../../components/ui/ScreenWrapper';

export default function ChatThread() {
  return (
    <ScreenWrapper className="bg-white" withPadding={false} scroll={false}>
      <View className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex-row items-center pt-10">
        <TouchableOpacity className="mr-4"><Text className="text-2xl">→</Text></TouchableOpacity>
        <Text className="font-bold text-lg flex-1">Sarah J. <Text className="text-gray-400 text-sm font-normal">• Vintage Chair</Text></Text>
      </View>
      <View className="flex-1 p-6">
        <View className="bg-gray-100 self-start p-3 rounded-2xl rounded-tl-none mb-4"><Text className="text-gray-900">Is this still available?</Text></View>
        <View className="bg-emerald-600 self-end p-3 rounded-2xl rounded-tr-none mb-4"><Text className="text-white">Yes, it is!</Text></View>
      </View>
      <View className="p-4 border-t border-gray-100 flex-row">
        <TextInput className="flex-1 bg-gray-100 rounded-full px-4 py-3 mr-3" placeholder="Message..." />
        <TouchableOpacity className="bg-emerald-600 w-12 h-12 rounded-full items-center justify-center"><Text className="text-white text-xl">↑</Text></TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}