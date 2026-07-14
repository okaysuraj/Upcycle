import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function SellItem() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">List an Item</Text>
        <Text className="text-gray-500 text-base">Trade your unwanted items for impact points.</Text>
      </View>

      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
        <View className="h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl items-center justify-center mb-6">
          <Text className="text-4xl mb-2">📸</Text>
          <Text className="text-gray-500 font-medium">Tap to upload photos</Text>
        </View>

        <Input label="Item Title" placeholder="E.g. Desk Lamp" value={title} onChangeText={setTitle} />
        <Input label="Description" placeholder="Condition, size, details..." value={desc} onChangeText={setDesc} multiline numberOfLines={4} className="h-32" />
        
        <View className="mb-8">
          <Text className="text-gray-700 font-semibold mb-2 ml-1">Condition</Text>
          <View className="flex-row gap-2">
            {['Like New', 'Good', 'Fair'].map(c => (
              <View key={c} className="flex-1 bg-gray-50 border border-gray-200 py-3 rounded-xl items-center">
                <Text className="font-medium text-gray-600">{c}</Text>
              </View>
            ))}
          </View>
        </View>

        <Button title="List Item" onPress={() => router.back()} />
      </View>
    </ScreenWrapper>
  );
}