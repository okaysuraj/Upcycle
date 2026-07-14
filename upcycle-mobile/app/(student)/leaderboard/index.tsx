import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function Leaderboard() {
  const leaders = [
    { id: '1', name: 'Sarah Jenkins', points: 3450, rank: 1, trend: 'up' },
    { id: '2', name: 'Michael Ross', points: 2900, rank: 2, trend: 'up' },
    { id: '3', name: 'Emily Chen', points: 2850, rank: 3, trend: 'down' },
    { id: '4', name: 'Alex Turner', points: 2100, rank: 4, trend: 'same' },
    { id: '5', name: 'Jessica Blue', points: 1950, rank: 5, trend: 'up' },
  ];

  const renderItem = ({ item }) => (
    <View className={`flex-row items-center p-4 mb-3 rounded-2xl border ${item.rank <= 3 ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-gray-100 shadow-sm'}`}>
      <View className="w-8 h-8 rounded-full items-center justify-center mr-3">
        <Text className={`font-black ${item.rank === 1 ? 'text-yellow-500 text-xl' : item.rank === 2 ? 'text-gray-400 text-lg' : item.rank === 3 ? 'text-amber-600 text-lg' : 'text-gray-400'}`}>
          {item.rank <= 3 ? '🏆' : `#${item.rank}`}
        </Text>
      </View>
      <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">
        <Text className="text-lg font-bold text-gray-500">{item.name.charAt(0)}</Text>
      </View>
      <View className="flex-1">
        <Text className="font-bold text-gray-900 text-base">{item.name}</Text>
      </View>
      <View className="items-end">
        <Text className="font-black text-emerald-600 text-lg">{item.points}</Text>
        <Text className="text-gray-400 text-[10px] uppercase">Pts</Text>
      </View>
    </View>
  );

  return (
    <ScreenWrapper scroll={false} className="bg-gray-50">
      <View className="mb-6">
        <Text className="text-3xl font-black text-gray-900 mb-2">Leaderboard</Text>
        <Text className="text-gray-500 text-base">Top sustainability contributors this month.</Text>
      </View>
      
      <FlatList
        data={leaders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}
