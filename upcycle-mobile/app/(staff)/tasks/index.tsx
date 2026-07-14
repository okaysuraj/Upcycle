import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function TasksHome() {
  const router = useRouter();
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Task Management</Text>
      </View>
      <TouchableOpacity className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-4" onPress={() => router.push('/(staff)/tasks/approvals')}>
        <Text className="text-2xl mb-2">✅</Text>
        <Text className="font-bold text-gray-900 text-xl mb-1">Approval Queue</Text>
        <Text className="text-gray-500">Review 3 pending student submissions.</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-4">
        <Text className="text-2xl mb-2">🚨</Text>
        <Text className="font-bold text-gray-900 text-xl mb-1">Bin Alerts</Text>
        <Text className="text-gray-500">2 smart bins require immediate emptying.</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}