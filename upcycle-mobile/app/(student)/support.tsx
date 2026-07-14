import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Support() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Help & Support</Text>
        <Text className="text-gray-500 text-base">Found a bug or need assistance?</Text>
      </View>
      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <Input label="Subject" placeholder="What is this regarding?" />
        <Input label="Message" placeholder="Describe your issue..." multiline numberOfLines={5} className="h-32" />
        <Button title="Send Message" className="mt-4" />
      </View>
    </ScreenWrapper>
  );
}