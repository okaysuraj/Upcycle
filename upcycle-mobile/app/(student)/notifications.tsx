import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';

export default function Notifications() {
  const notifs = [
    { id: '1', title: 'New Badge Unlocked! 🏆', desc: 'You earned the Recycler badge.', time: '2h ago', unread: true },
    { id: '2', title: 'Event Reminder', desc: 'Solar Workshop starts tomorrow at 10 AM.', time: '1d ago', unread: false },
    { id: '3', title: 'Marketplace Update', desc: 'Someone requested your Vintage Chair.', time: '2d ago', unread: false },
  ];
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Notifications</Text>
      </View>
      <FlatList
        data={notifs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View className={`bg-white rounded-2xl p-5 mb-3 border ${item.unread ? 'border-emerald-200 bg-emerald-50/20' : 'border-gray-100'}`}>
            <View className="flex-row justify-between mb-1">
              <Text className="font-bold text-gray-900 text-base">{item.title}</Text>
              <Text className="text-gray-400 text-xs">{item.time}</Text>
            </View>
            <Text className="text-gray-600 text-sm">{item.desc}</Text>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}