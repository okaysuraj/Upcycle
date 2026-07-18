import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ConnectedOrganizations() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-14 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="menu" size={24} color="#006d3e" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#006d3e" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2 leading-tight">Connected Organizations</Text>
          <Text className="text-base text-[#3d4a40]">Manage your active memberships and environmental partnerships. Your contributions help these organizations reach their sustainability goals.</Text>
        </View>

        {/* Find New Organizations Action Card */}
        <TouchableOpacity className="bg-[#2eb872] p-6 rounded-[24px] shadow-sm mb-4">
          <View className="bg-[#004224]/10 w-12 h-12 rounded-full items-center justify-center mb-6">
            <Ionicons name="business" size={24} color="#004224" />
          </View>
          <Text className="text-2xl font-bold text-[#004224] mb-2">Expand Your Impact</Text>
          <Text className="text-base text-[#004224] mb-8">Join local campuses, corporate offices, or community hubs to streamline your recycling efforts.</Text>
          <View className="w-full h-14 bg-[#004224] rounded-full flex-row items-center justify-center gap-2">
            <Text className="text-[#2eb872] font-bold text-sm">Find New Organizations</Text>
            <Ionicons name="arrow-forward" size={16} color="#2eb872" />
          </View>
        </TouchableOpacity>

        {/* Organization Card 1 */}
        <View className="bg-[#E8F5E9] border border-[#A5D6A7] p-6 rounded-[24px] shadow-sm mb-4 gap-4 flex-col">
          <View className="w-full h-48 rounded-xl bg-[#d4e5ef]" />
          <View className="flex-1 justify-between">
            <View>
              <View className="flex-row justify-between items-start mb-2">
                <Text className="text-xl font-bold text-[#0d1e25]">Green Valley Campus</Text>
                <View className="bg-[#7ead81] px-3 py-1 rounded-full">
                  <Text className="text-[#14411f] font-bold text-[10px] uppercase">Active</Text>
                </View>
              </View>
              <View className="gap-3 mb-6">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="shield-checkmark" size={16} color="#3d4a40" />
                  <Text className="text-sm font-bold text-[#3d4a40]">Role: Sustainability Lead</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Ionicons name="calendar" size={16} color="#3d4a40" />
                  <Text className="text-sm font-bold text-[#3d4a40]">Joined: Jan 12, 2023</Text>
                </View>
              </View>
            </View>
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 h-12 bg-[#006d3e] rounded-full items-center justify-center">
                <Text className="text-white font-bold text-sm">View Stats</Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-12 px-6 border border-[#6d7a6f] rounded-full items-center justify-center">
                <Text className="text-[#0d1e25] font-bold text-sm">Manage</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-row flex-wrap justify-between mb-8 gap-y-4">
          
          {/* Organization Card 2 */}
          <View className="w-[100%] bg-[#E8F5E9] border border-[#A5D6A7] p-6 rounded-[24px] shadow-sm gap-4">
            <View className="flex-row items-center gap-4">
              <View className="w-16 h-16 rounded-xl bg-[#d4e5ef]" />
              <View>
                <Text className="text-xl font-bold text-[#0d1e25]">EcoCorp Solutions</Text>
                <Text className="text-xs text-[#3d4a40]">Headquarters • London</Text>
              </View>
            </View>
            <View className="bg-white/50 rounded-xl p-4 gap-2">
              <View className="flex-row justify-between">
                <Text className="text-sm font-bold text-[#3d4a40]">Role</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">Member</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-sm font-bold text-[#3d4a40]">Join Date</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">March 15, 2024</Text>
              </View>
            </View>
            <TouchableOpacity className="w-full h-12 bg-[#d9e6da] rounded-full items-center justify-center">
              <Text className="text-[#5b675e] font-bold text-sm">Organization Dashboard</Text>
            </TouchableOpacity>
          </View>

          {/* Organization Card 3 */}
          <View className="w-[100%] bg-[#E8F5E9] border border-[#A5D6A7] p-6 rounded-[24px] shadow-sm gap-4">
            <View className="flex-row items-center gap-4">
              <View className="w-16 h-16 rounded-xl bg-[#d4e5ef]" />
              <View>
                <Text className="text-xl font-bold text-[#0d1e25]">Metro Heights Hub</Text>
                <Text className="text-xs text-[#3d4a40]">Community Center</Text>
              </View>
            </View>
            <View className="bg-white/50 rounded-xl p-4 gap-2">
              <View className="flex-row justify-between">
                <Text className="text-sm font-bold text-[#3d4a40]">Role</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">Volunteer Partner</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-sm font-bold text-[#3d4a40]">Join Date</Text>
                <Text className="text-sm font-bold text-[#0d1e25]">June 02, 2024</Text>
              </View>
            </View>
            <TouchableOpacity className="w-full h-12 bg-[#d9e6da] rounded-full items-center justify-center">
              <Text className="text-[#5b675e] font-bold text-sm">Join Group Chat</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Secondary Info Section */}
        <View className="gap-4">
          <View className="bg-[#e7f6ff] p-6 rounded-[24px]">
            <Text className="text-sm font-bold text-[#006d3e] mb-2">Pending Requests</Text>
            <View className="flex-row items-center gap-3">
              <View className="w-8 h-8 rounded-full bg-[#006d3e]/20 items-center justify-center">
                <Ionicons name="time" size={16} color="#006d3e" />
              </View>
              <Text className="text-base text-[#0d1e25]">Harbor District Recycling Center</Text>
            </View>
          </View>

          <View className="bg-[#e7f6ff] p-6 rounded-[24px]">
            <Text className="text-sm font-bold text-[#006d3e] mb-2">Invitations</Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-[#0d1e25]">2 New Invitations</Text>
              <TouchableOpacity>
                <Text className="text-[#006d3e] font-bold text-sm underline">View All</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-[#e7f6ff] p-6 rounded-[24px] items-center justify-center border-2 border-dashed border-[#bccabd] flex-row gap-2">
            <Ionicons name="settings" size={20} color="#3d4a40" />
            <Text className="text-[#3d4a40] font-bold text-sm">Organization Settings</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
