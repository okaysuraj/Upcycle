import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function BadgeGallery() {
  const badges = [
    { id: '1', name: 'First Event', icon: '🌟', locked: false, desc: 'Attend your first campus sustainability event.' },
    { id: '2', name: 'Recycler', icon: '♻️', locked: false, desc: 'Log 50kg of recycled waste.' },
    { id: '3', name: 'Water Saver', icon: '💧', locked: false, desc: 'Complete the water conservation challenge.' },
    { id: '4', name: 'Eco Champion', icon: '👑', locked: true, desc: 'Reach #1 on the leaderboard.' },
    { id: '5', name: 'Zero Waste', icon: '🍃', locked: true, desc: 'Go a full week with zero logged waste.' },
  ];

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Badge Gallery</Text>
        <Text className="text-gray-500 text-base">Unlock badges to show off your impact.</Text>
      </View>

      <View className="flex-row flex-wrap justify-between">
        {badges.map(badge => (
          <View key={badge.id} className="w-[48%] bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-4 items-center">
            <View className={`w-20 h-20 rounded-2xl items-center justify-center mb-3 ${badge.locked ? 'bg-gray-100' : 'bg-amber-50 border-2 border-amber-200'}`}>
              <Text className={`text-4xl ${badge.locked ? 'opacity-30 grayscale' : ''}`}>
                {badge.locked ? '🔒' : badge.icon}
              </Text>
            </View>
            <Text className="font-bold text-gray-900 text-center mb-1">{badge.name}</Text>
            <Text className="text-gray-400 text-xs text-center leading-tight">{badge.desc}</Text>
          </View>
        ))}
      </View>
    </ScreenWrapper>
  );
}
