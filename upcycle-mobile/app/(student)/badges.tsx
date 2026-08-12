import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

export default function BadgesScreen() {
  const [badges] = useState([
    { id: 1, title: 'First Sort', desc: 'Logged your first recycling bin', earned: true },
    { id: 2, title: 'Compost King', desc: 'Diverted 50kg of organic waste', earned: true },
    { id: 3, title: 'Zero Waste Week', desc: '7 consecutive days of 0 landfill', earned: false },
    { id: 4, title: 'E-Waste Savior', desc: 'Recycled 5 electronics items', earned: false },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-green-700">Badges</Text>
          <Text className="text-gray-500 mt-1">Achievements & Gamification</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {badges.map(badge => (
            <View key={badge.id} className="w-[48%] mb-4 bg-gray-50 p-4 rounded-3xl border border-gray-100 items-center">
               <View className={`w-20 h-20 rounded-full items-center justify-center mb-3 ${
                 badge.earned ? 'bg-green-100 border-4 border-green-500' : 'bg-gray-200'
               }`}>
                 <Text className="text-3xl">{badge.earned ? '🏆' : '🔒'}</Text>
               </View>
               <Text className={`font-bold text-center mb-1 ${badge.earned ? 'text-gray-800' : 'text-gray-400'}`}>
                 {badge.title}
               </Text>
               <Text className="text-[10px] text-center text-gray-500">
                 {badge.desc}
               </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
