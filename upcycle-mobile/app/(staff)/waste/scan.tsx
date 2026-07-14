import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Button from '../../../components/ui/Button';
import { useRouter } from 'expo-router';

export default function WasteScanner() {
  const router = useRouter();
  return (
    <ScreenWrapper className="bg-black" withPadding={false} scroll={false}>
      <View className="flex-1 items-center justify-center">
        <View className="w-64 h-64 border-2 border-dashed border-emerald-500 rounded-3xl items-center justify-center mb-10">
          <Text className="text-emerald-500 font-bold uppercase tracking-widest">Camera View</Text>
        </View>
        <Text className="text-white text-lg font-bold mb-2">Scan Smart Bin QR Code</Text>
        <Text className="text-gray-400 text-center px-10 mb-10">Point your camera at the QR code located on the front of any campus smart bin.</Text>
        <Button title="Cancel Scan" variant="outline" onPress={() => router.back()} />
      </View>
    </ScreenWrapper>
  );
}