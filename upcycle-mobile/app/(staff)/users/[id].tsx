import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function UserDetails() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <Text className="text-xl mt-4 font-bold">User Details</Text>
    </ScreenWrapper>
  );
}