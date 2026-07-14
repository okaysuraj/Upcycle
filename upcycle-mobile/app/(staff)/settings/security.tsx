import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function SecuritySettings() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Security</Text>
      </View>
      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <Text className="font-bold text-gray-900 text-lg mb-4">Change Password</Text>
        <Input label="Current Password" secureTextEntry />
        <Input label="New Password" secureTextEntry />
        <Button title="Update Password" />
      </View>
    </ScreenWrapper>
  );
}