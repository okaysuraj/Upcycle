import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function Leaderboard() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { authFetch, user } = useAuth();

  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await authFetch('/gamification/leaderboard');
        if (res.ok) {
          const data = await res.json();
          setLeaderboard(data);
        }
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, [authFetch]);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <Ionicons name="leaf" size={24} color="#00522d" />
          <Text className="text-xl font-bold text-[#00522d]">Upcycle Community</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#d9e6da] items-center justify-center border border-[#bec9be]">
            <Ionicons name="person" size={16} color="#3f4941" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Impact Rankings</Text>
          <Text className="text-gray-500 mb-6">Celebrate the heroes of sustainability. See how you and your campus groups are making a tangible difference this month.</Text>
        </View>

        {/* User Rank Highlight */}
        <View className="bg-[#006d3e] p-6 rounded-[24px] shadow-sm mb-6 relative overflow-hidden">
          <View className="z-10">
            <Text className="text-[10px] text-white/80 uppercase tracking-widest font-bold mb-2">Your Status</Text>
            <Text className="text-4xl font-black text-white mb-2">Points: {user?.points || 0}</Text>
            <Text className="text-white/90 text-sm mb-6">Keep participating in events and making green choices to climb the ranks!</Text>
            
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xs text-white/80">Next Milestone</Text>
                <Text className="text-xl font-bold text-white">{user?.points || 0} / 1000 pts</Text>
              </View>
              <TouchableOpacity className="bg-[#92ecb1] px-4 py-2 rounded-full flex-row items-center gap-1">
                <Text className="text-[#006d3e] font-bold text-sm">Milestones</Text>
                <Ionicons name="arrow-forward" size={16} color="#006d3e" />
              </TouchableOpacity>
            </View>
          </View>
          <Ionicons name="trophy" size={120} color="white" style={{ position: 'absolute', right: -20, top: -20, opacity: 0.1 }} />
        </View>

        {/* Top Eco-Warriors */}
        <View className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-lg font-bold text-[#0d1e25]">Top Eco-Warriors</Text>
          </View>
          
          <View className="gap-2">
            {loading ? (
              <ActivityIndicator size="large" color="#00522d" />
            ) : leaderboard.length === 0 ? (
              <Text className="text-gray-500 text-center py-4">No rankings yet.</Text>
            ) : (
              leaderboard.map((u, index) => (
                <View key={u.id} className="flex-row items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded-xl">
                  <View className="flex-row items-center gap-3">
                    <View className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                      {index === 0 ? <Text className="font-bold text-yellow-600">1</Text> : 
                       index === 1 ? <Text className="font-bold text-gray-500">2</Text> : 
                       index === 2 ? <Text className="font-bold text-orange-500">3</Text> : 
                       <Text className="font-bold text-gray-500">{index + 1}</Text>}
                    </View>
                    <View>
                      <Text className="font-bold text-[#0d1e25]">{u.name || 'Anonymous'}</Text>
                      <Text className="text-[10px] text-gray-500 uppercase">{u.role}</Text>
                    </View>
                  </View>
                  <Text className="font-bold text-[#00522d]">{u.points || 0} pts</Text>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Placeholder */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center px-4 py-4 pb-8 bg-[#dff1fb] shadow-lg rounded-t-3xl border-t border-white/50">
        <TouchableOpacity className="items-center" onPress={() => router.push('/(student)')}>
          <Ionicons name="home-outline" size={24} color="#556158" />
          <Text className="text-[10px] font-bold text-[#556158] mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => router.push('/(student)/community')}>
          <Ionicons name="people-outline" size={24} color="#556158" />
          <Text className="text-[10px] font-bold text-[#556158] mt-1">Community</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="trophy" size={24} color="#00522d" />
          <Text className="text-[10px] font-bold text-[#00522d] mt-1">Rankings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person-outline" size={24} color="#556158" />
          <Text className="text-[10px] font-bold text-[#556158] mt-1">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
