import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function ChallengesHome() {
  const router = useRouter();
  const challenges = [
    { id: '1', title: 'Zero Waste Week', desc: 'Generate no landfill waste for 7 days.', pts: 500, active: true, progress: 40 },
    { id: '2', title: 'Campus Cleanup', desc: 'Log 5 items of littered plastic.', pts: 200, active: false, progress: 0 },
  ];
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Challenges</Text>
        <Text className="text-gray-500 text-base">Complete challenges for massive point bonuses.</Text>
      </View>
      {challenges.map(c => (
        <TouchableOpacity key={c.id} onPress={() => router.push(`/student/challenges/${c.id}`)} className="bg-white rounded-3xl p-5 mb-4 border border-gray-100 shadow-sm">
          <View className="flex-row justify-between items-start mb-3">
            <Text className="font-bold text-gray-900 text-lg">{c.title}</Text>
            <Text className="font-black text-emerald-600">{c.pts} pts</Text>
          </View>
          <Text className="text-gray-500 text-sm mb-4">{c.desc}</Text>
          <View className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <View className="h-full bg-emerald-500" style={{ width: `${c.progress}%` }} />
          </View>
        </TouchableOpacity>
      ))}
    </ScreenWrapper>
  );
}