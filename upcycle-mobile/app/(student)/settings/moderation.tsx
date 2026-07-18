import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ContentModeration() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f8f9fa]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f8f9fa] border-b border-[#c1c8c2] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-2">
          <Ionicons name="leaf" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 rounded-full hover:bg-[#e7e8e9]">
            <Ionicons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#e7e8e9] border border-[#c1c8c2] items-center justify-center">
             <Ionicons name="person" size={16} color="#012d1d" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-4 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Dashboard Summary Mini-Widget */}
        <View className="bg-[#f3f4f5] p-4 rounded-xl flex-row items-center justify-between mb-6">
          <View>
            <Text className="text-[10px] text-[#414844] uppercase tracking-wider font-bold">Pending Reports</Text>
            <Text className="text-3xl font-bold text-[#012d1d]">124</Text>
          </View>
          <View className="items-end">
            <View className="bg-[#ffdad6] px-2 py-0.5 rounded-full mb-1">
              <Text className="text-[#93000a] text-[10px] font-bold">+12 today</Text>
            </View>
            <Text className="text-xs text-[#717973]">Avg response: 14m</Text>
          </View>
        </View>

        {/* Moderation Feed Header */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-[#012d1d]">Priority Audit</Text>
          <TouchableOpacity className="flex-row items-center gap-1">
            <Ionicons name="filter" size={18} color="#414844" />
            <Text className="text-[#414844] font-bold text-xs">Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Moderation Items */}
        <View className="gap-4">
          
          {/* Item 1: Post */}
          <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden shadow-sm">
            <View className="p-4">
              
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-[#cce6d0] items-center justify-center">
                    <Ionicons name="document-text" size={14} color="#506856" />
                  </View>
                  <Text className="text-xs font-bold text-[#191c1d]">New Post Report</Text>
                </View>
                <View className="bg-[#ffdad6] px-2 py-0.5 rounded-full">
                  <Text className="text-[#93000a] text-[10px] font-bold uppercase">High Risk</Text>
                </View>
              </View>

              <View className="bg-[#edeeef] p-3 rounded-lg mb-4">
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="w-5 h-5 rounded-full bg-[#c1c8c2] items-center justify-center">
                    <Ionicons name="person" size={12} color="white" />
                  </View>
                  <Text className="text-xs font-bold text-[#414844]">@green_warrior_99</Text>
                </View>
                <Text className="text-sm text-[#191c1d] mb-2">"This organization is a total scam. They aren't actually upcycling anything, just dumping waste in the ocean. Don't believe the PR!"</Text>
                <View className="w-full h-32 rounded-lg bg-[#c1c8c2] overflow-hidden justify-center items-center">
                  <Ionicons name="image" size={32} color="#717973" />
                </View>
              </View>

              <View className="gap-2 mb-4">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="warning" size={16} color="#717973" />
                  <Text className="text-xs text-[#717973]">Reported by 3 users for: <Text className="font-bold text-[#191c1d]">Misinformation</Text></Text>
                </View>
                <View className="bg-[#e7e8e9]/50 p-2 rounded border-l-2 border-[#012d1d]">
                  <Text className="text-xs italic text-[#414844]">Context: This user has been flagged previously for unrelated community violations.</Text>
                </View>
              </View>

              <View className="flex-row gap-2">
                <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1 py-2 rounded-lg border border-[#c1c8c2]">
                  <Ionicons name="checkmark-circle" size={18} color="#414844" />
                  <Text className="text-xs font-bold text-[#414844]">Keep</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1 py-2 rounded-lg border border-[#c1c8c2]">
                  <Ionicons name="alert-circle" size={18} color="#414844" />
                  <Text className="text-xs font-bold text-[#414844]">Warn</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1 py-2 rounded-lg bg-[#ba1a1a]">
                  <Ionicons name="trash" size={18} color="white" />
                  <Text className="text-xs font-bold text-white">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Item 2: Comment */}
          <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden shadow-sm">
            <View className="p-4">
              
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-[#cce6d0] items-center justify-center">
                    <Ionicons name="chatbubble" size={14} color="#506856" />
                  </View>
                  <Text className="text-xs font-bold text-[#191c1d]">Comment Report</Text>
                </View>
                <View className="bg-[#e7e8e9] px-2 py-0.5 rounded-full">
                  <Text className="text-[#414844] text-[10px] font-bold uppercase">Low Priority</Text>
                </View>
              </View>

              <View className="bg-[#edeeef] p-3 rounded-lg mb-4">
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="w-5 h-5 rounded-full bg-[#c1c8c2] items-center justify-center">
                    <Ionicons name="person" size={12} color="white" />
                  </View>
                  <Text className="text-xs font-bold text-[#414844]">@eco_optimist</Text>
                </View>
                <Text className="text-sm text-[#191c1d]">"You're an absolute idiot if you think this works. Go back to school and learn some basic physics before posting garbage like this."</Text>
              </View>

              <View className="flex-row items-center gap-2 mb-4">
                <Ionicons name="warning" size={16} color="#717973" />
                <Text className="text-xs text-[#717973]">Reported by 1 user for: <Text className="font-bold text-[#191c1d]">Harassment</Text></Text>
              </View>

              <View className="flex-row gap-2">
                <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1 py-2 rounded-lg border border-[#c1c8c2]">
                  <Ionicons name="checkmark-circle" size={18} color="#414844" />
                  <Text className="text-xs font-bold text-[#414844]">Keep</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1 py-2 rounded-lg bg-[#012d1d]">
                  <Ionicons name="alert-circle" size={18} color="white" />
                  <Text className="text-xs font-bold text-white">Warn</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1 py-2 rounded-lg border border-[#ba1a1a]">
                  <Ionicons name="trash" size={18} color="#ba1a1a" />
                  <Text className="text-xs font-bold text-[#ba1a1a]">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Item 3: Suspicious Activity */}
          <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden shadow-sm">
            <View className="p-4">
              
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-[#cce6d0] items-center justify-center">
                    <Ionicons name="hardware-chip" size={14} color="#506856" />
                  </View>
                  <Text className="text-xs font-bold text-[#191c1d]">System Flag</Text>
                </View>
                <View className="bg-[#00452e] px-2 py-0.5 rounded-full">
                  <Text className="text-[#75b393] text-[10px] font-bold uppercase">Bot Signal</Text>
                </View>
              </View>

              <View className="gap-4">
                <Text className="text-sm text-[#191c1d] mb-1">User <Text className="font-bold text-[#012d1d]">@fast_recycler_bot</Text> posted 45 comments in 10 seconds across 12 different threads.</Text>
                <View className="bg-[#edeeef] p-2 rounded">
                  <Text className="text-[10px] text-[#414844]">Burst pattern detected from IP: 192.168.1.254 [VPN Signature]</Text>
                </View>
                
                <View className="flex-row gap-2 mt-2">
                  <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg bg-[#012d1d]">
                    <Ionicons name="ban" size={20} color="white" />
                    <Text className="text-xs font-bold text-white">Suspension</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg border border-[#c1c8c2]">
                    <Ionicons name="eye" size={20} color="#191c1d" />
                    <Text className="text-xs font-bold text-[#191c1d]">Inspect</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}
