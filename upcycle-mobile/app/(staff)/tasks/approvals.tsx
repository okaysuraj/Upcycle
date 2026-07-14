import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function ApprovalQueue() {
  const queue = [
    { id: '1', user: 'Sarah Jenkins', action: 'Logged 45kg E-Waste', time: '10 mins ago', status: 'pending' },
    { id: '2', user: 'Michael Ross', action: 'Event Verification: Solar Panel Workshop', time: '1 hr ago', status: 'pending' },
    { id: '3', user: 'Emily Chen', action: 'Logged 12kg Plastic', time: '2 hrs ago', status: 'pending' },
  ];

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Approval Queue</Text>
        <Text className="text-gray-500 text-base">Review and verify student submissions.</Text>
      </View>

      {queue.map(item => (
        <View key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4">
          <View className="flex-row justify-between mb-3">
            <View>
              <Text className="font-bold text-gray-900 text-base">{item.user}</Text>
              <Text className="text-gray-500 text-sm mt-1">{item.action}</Text>
            </View>
            <Text className="text-gray-400 text-xs">{item.time}</Text>
          </View>
          
          <View className="flex-row gap-3 mt-4">
            <TouchableOpacity className="flex-1 bg-emerald-50 border border-emerald-200 py-3 rounded-xl items-center">
              <Text className="text-emerald-700 font-bold">Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-red-50 border border-red-200 py-3 rounded-xl items-center">
              <Text className="text-red-700 font-bold">Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {queue.length === 0 && (
        <View className="items-center justify-center py-10">
          <Text className="text-gray-400">All caught up! No pending approvals.</Text>
        </View>
      )}
    </ScreenWrapper>
  );
}
