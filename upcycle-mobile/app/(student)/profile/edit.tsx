import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function EditProfile() {
  const router = useRouter();
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Edit Profile</Text>
      </View>
      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <View className="items-center mb-6">
          <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center border-4 border-white shadow-sm">
            <Text className="text-4xl">🎓</Text>
          </View>
          <Text className="text-emerald-600 font-bold mt-2">Change Photo</Text>
        </View>
        <Input label="Full Name" placeholder="Jane Doe" defaultValue="Jane Doe" />
        <Input label="Major/Department" placeholder="E.g. Computer Science" />
        <Input label="Bio" placeholder="Tell us about your sustainability goals" multiline numberOfLines={3} className="h-24" />
        <Button title="Save Changes" onPress={() => router.back()} className="mt-4" />
      </View>
    </ScreenWrapper>
  );
}