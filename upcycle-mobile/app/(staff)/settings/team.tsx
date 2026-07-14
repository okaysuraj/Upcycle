import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Button from '../../../components/ui/Button';

export default function TeamManagement() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Team</Text>
      </View>
      <View className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 shadow-sm flex-row items-center">
        <View className="w-12 h-12 bg-gray-100 rounded-full mr-4 items-center justify-center"><Text>S</Text></View>
        <View className="flex-1">
          <Text className="font-bold text-gray-900 text-lg">Staff Member</Text>
          <Text className="text-gray-500">Admin</Text>
        </View>
      </View>
      <Button title="Invite Team Member" variant="outline" className="mt-4" />
    </ScreenWrapper>
  );
}