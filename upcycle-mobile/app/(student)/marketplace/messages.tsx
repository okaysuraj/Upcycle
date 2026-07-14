import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function Messages() {
  const router = useRouter();
  const chats = [
    { id: '1', name: 'Sarah J.', item: 'Vintage Chair', lastMessage: 'Yes, it is still available!', time: '10m', unread: true },
    { id: '2', name: 'Mike T.', item: 'Textbooks', lastMessage: 'Meet at library?', time: '2h', unread: false }
  ];
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4"><Text className="text-3xl font-black text-gray-900">Inbox</Text></View>
      <FlatList data={chats} keyExtractor={c => c.id} renderItem={({item}) => (
        <TouchableOpacity onPress={() => router.push(`/student/marketplace/chat/${item.id}`)} className={`p-4 mb-3 rounded-2xl flex-row items-center border ${item.unread ? 'bg-emerald-50 border-emerald-100' : 'bg-white border-gray-100 shadow-sm'}`}>
          <View className="w-12 h-12 bg-gray-200 rounded-full mr-4 items-center justify-center"><Text className="font-bold text-gray-500">{item.name[0]}</Text></View>
          <View className="flex-1">
            <Text className="font-bold text-gray-900">{item.name} <Text className="font-normal text-gray-500">• {item.item}</Text></Text>
            <Text className={`text-sm ${item.unread ? 'text-emerald-800 font-medium' : 'text-gray-500'}`}>{item.lastMessage}</Text>
          </View>
          <Text className="text-xs text-gray-400">{item.time}</Text>
        </TouchableOpacity>
      )} />
    </ScreenWrapper>
  );
}