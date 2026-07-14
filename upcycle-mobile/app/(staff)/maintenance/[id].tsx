import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function TaskDetails() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <Text className="text-xl mt-4 font-bold">Task Details</Text>
    </ScreenWrapper>
  );
}