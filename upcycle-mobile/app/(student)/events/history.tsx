import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function EventHistory() {
  const events = [
    { id: '1', title: 'Campus Clean-up Drive', date: 'Oct 12, 2023', pts: 150 },
    { id: '2', title: 'Solar Panel Workshop', date: 'Sep 28, 2023', pts: 100 },
    { id: '3', title: 'Zero Waste Seminar', date: 'Sep 10, 2023', pts: 50 },
  ];

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Past Events</Text>
        <Text className="text-gray-500 text-base">Your campus impact history.</Text>
      </View>

      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 shadow-sm flex-row justify-between items-center">
            <View>
              <Text className="font-bold text-gray-900 text-lg mb-1">{item.title}</Text>
              <Text className="text-gray-400 text-sm">Attended {item.date}</Text>
            </View>
            <View className="bg-emerald-50 px-3 py-1 rounded-full">
              <Text className="text-emerald-700 font-bold">+{item.pts}</Text>
            </View>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}