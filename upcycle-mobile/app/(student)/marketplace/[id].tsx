import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Button from '../../../components/ui/Button';

export default function MarketplaceItemDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScreenWrapper className="bg-gray-50" withPadding={false}>
      <View className="h-72 bg-emerald-100 items-center justify-center relative">
        <Text className="text-9xl">🪑</Text>
        <TouchableOpacity 
          className="absolute top-12 left-6 w-10 h-10 bg-white/80 rounded-full items-center justify-center shadow-sm"
          onPress={() => router.back()}
        >
          <Text className="text-xl font-bold">←</Text>
        </TouchableOpacity>
      </View>
      
      <View className="px-6 py-8 -mt-6 bg-white rounded-t-3xl flex-1 shadow-sm">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-3xl font-black text-gray-900">Vintage Chair</Text>
          <Text className="text-emerald-600 font-black text-2xl">450 pts</Text>
        </View>
        
        <Text className="text-gray-400 font-medium mb-6 uppercase tracking-wider text-sm">Listed by @Michael_R</Text>
        
        <Text className="text-gray-700 text-base leading-relaxed mb-8">
          A beautifully restored vintage wooden chair. Great condition, slight wear on the left leg but fully structurally sound. Perfect for a dorm room desk.
        </Text>
        
        <View className="bg-gray-50 rounded-2xl p-4 mb-8 flex-row items-center justify-between border border-gray-100">
          <View>
            <Text className="text-gray-500 text-xs uppercase mb-1">Condition</Text>
            <Text className="font-bold text-gray-900">Good</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-xs uppercase mb-1">Category</Text>
            <Text className="font-bold text-gray-900">Furniture</Text>
          </View>
        </View>

        <Button title="Request Exchange" onPress={() => alert('Request sent!')} />
      </View>
    </ScreenWrapper>
  );
}