import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ImpactScreen() {
  const [metrics] = useState({
    totalPoints: 12450,
    carbonSaved: 142.5,
    rank: 12,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">My Impact</Text>
            <Text className="text-gray-500 mt-1">Lifetime eco-contributions</Text>
          </View>
          <TouchableOpacity className="bg-green-100 p-3 rounded-full">
            <Ionicons name="share-social" size={24} color="#15803d" />
          </TouchableOpacity>
        </View>

        <View className="bg-green-700 p-6 rounded-3xl mb-6 shadow-sm">
          <Text className="text-green-100 font-bold uppercase text-xs tracking-wider mb-1">Lifetime EcoPoints</Text>
          <Text className="text-white text-5xl font-black">{metrics.totalPoints.toLocaleString()}</Text>
          <View className="mt-4 flex-row items-center bg-green-800/50 self-start px-3 py-1.5 rounded-full">
            <Ionicons name="trending-up" size={16} color="#86efac" />
            <Text className="text-green-200 font-bold ml-2">Top 5% of Campus</Text>
          </View>
        </View>

        <View className="flex-row space-x-4 mb-6">
          <View className="flex-1 bg-blue-50 p-4 rounded-3xl border border-blue-100">
            <Ionicons name="leaf" size={24} color="#2563eb" className="mb-2" />
            <Text className="text-3xl font-black text-blue-900 mt-2">{metrics.carbonSaved}</Text>
            <Text className="text-xs font-bold text-blue-700 uppercase mt-1">Kg CO2 Saved</Text>
          </View>
          <View className="flex-1 bg-orange-50 p-4 rounded-3xl border border-orange-100">
            <Ionicons name="trophy" size={24} color="#ea580c" className="mb-2" />
            <Text className="text-3xl font-black text-orange-900 mt-2">#{metrics.rank}</Text>
            <Text className="text-xs font-bold text-orange-700 uppercase mt-1">Campus Rank</Text>
          </View>
        </View>
        
        <View className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
          <Text className="font-bold text-lg text-gray-800 mb-2">Next Milestone</Text>
          <Text className="text-sm text-gray-500 mb-4">You are 550 points away from the 'Eco Warrior' tier.</Text>
          <View className="h-4 bg-gray-200 rounded-full overflow-hidden">
             <View className="h-full bg-green-500 w-[70%]" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
