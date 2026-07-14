import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function CreateEvent() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Create Event</Text></View>
      <Input label="Event Name" />
      <Button title="Save Event" />
    </ScreenWrapper>
  );
}