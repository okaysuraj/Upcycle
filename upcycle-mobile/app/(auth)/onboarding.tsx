import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import Button from '../../components/ui/Button';

export default function Onboarding() {
  return (
    <ScreenWrapper className="bg-emerald-600 justify-center items-center">
      <Text className="text-6xl mb-6">🌱</Text>
      <Text className="text-4xl font-black text-white mb-2 text-center">Upcycle</Text>
      <Text className="text-emerald-100 text-center px-6 mb-12">The sustainable campus revolution starts here.</Text>
      <Button title="Get Started" variant="secondary" className="w-full" />
    </ScreenWrapper>
  );
}