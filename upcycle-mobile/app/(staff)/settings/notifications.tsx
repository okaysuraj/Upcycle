import React from 'react';
import { View, Text, Switch } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function NotifSettings() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Notifications</Text>
      </View>
      <View className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100">
          <Text className="text-lg text-gray-900 font-medium">Bin Alerts</Text>
          <Switch value={true} trackColor={{ true: '#059669' }} />
        </View>
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100">
          <Text className="text-lg text-gray-900 font-medium">Approval Requests</Text>
          <Switch value={true} trackColor={{ true: '#059669' }} />
        </View>
        <View className="flex-row justify-between items-center p-4">
          <Text className="text-lg text-gray-900 font-medium">System Updates</Text>
          <Switch value={false} trackColor={{ true: '#059669' }} />
        </View>
      </View>
    </ScreenWrapper>
  );
}