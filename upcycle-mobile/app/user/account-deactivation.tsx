import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AccountDeactivation() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* TopAppBar */}
      <View className="flex-row justify-between items-center px-5 h-14 bg-[#f4faff] border-b border-[#bccabd]/30 z-50">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="active:scale-95">
            <MaterialIcons name="arrow-back" size={24} color="#006d3e" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <TouchableOpacity className="active:scale-95">
          <MaterialIcons name="notifications" size={24} color="#006d3e" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8 pb-16">
        {/* Header Section */}
        <View className="mb-10 text-center md:text-left items-center md:items-start">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-1 text-center">We're sorry to see you go</Text>
          <Text className="text-lg text-[#3d4a40] text-center max-w-2xl">
            Deactivating your account will pause your contributions to the community, but your impact so far remains a vital part of our mission.
          </Text>
        </View>

        {/* Impact Summary */}
        <View className="mb-16">
          {/* Main Impact Card */}
          <View className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-3xl p-6 mb-4 overflow-hidden relative">
            <View className="z-10">
              <View className="bg-[#2eb872]/20 px-3 py-1 rounded-full mb-2 self-start">
                <Text className="text-xs font-bold text-[#006d3e]">YOUR TOTAL FOOTPRINT</Text>
              </View>
              <Text className="text-5xl font-bold text-[#006d3e] mt-2">
                1,248<Text className="text-2xl font-normal ml-1">kg</Text>
              </Text>
              <Text className="text-base text-[#3d4a40] mt-2">
                Total waste diverted from landfills since you joined Upcycle.
              </Text>
            </View>
            <View className="absolute right-[-40px] bottom-[-40px] opacity-10">
              <MaterialIcons name="eco" size={160} color="#006d3e" />
            </View>
          </View>

          <View className="flex-row gap-4 mb-4">
            {/* Mini Impact Card 1 */}
            <View className="flex-1 bg-[#e7f6ff] rounded-3xl p-6 border border-[#bccabd]/30 justify-between">
              <View>
                <MaterialIcons name="recycling" size={24} color="#006d3e" className="mb-2" />
                <Text className="text-2xl font-bold text-[#0d1e25]">420</Text>
                <Text className="text-sm font-medium text-[#3d4a40]">Active Logs</Text>
              </View>
              <View className="mt-10">
                <View className="w-full h-3 bg-[#d9e6da] rounded-full">
                  <View className="h-full bg-[#006d3e] rounded-full" style={{ width: '75%' }} />
                </View>
              </View>
            </View>

            {/* Mini Impact Card 2 */}
            <View className="flex-1 bg-[#e7f6ff] rounded-3xl p-6 border border-[#bccabd]/30">
              <MaterialIcons name="group" size={24} color="#006d3e" className="mb-2" />
              <Text className="text-2xl font-bold text-[#0d1e25]">12</Text>
              <Text className="text-sm font-medium text-[#3d4a40]">Communities Helped</Text>
              <View className="mt-6 flex-row">
                <View className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 -mr-2" />
                <View className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 -mr-2" />
                <View className="w-8 h-8 rounded-full border-2 border-white bg-gray-500 -mr-2" />
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#d9e6da] items-center justify-center">
                  <Text className="text-[10px] font-bold text-[#3d4a40]">+9</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Mini Impact Card 3 */}
          <View className="bg-[#e7f6ff] rounded-3xl p-6 border border-[#bccabd]/30 flex-row items-center gap-6">
            <View className="h-24 w-24 bg-[#2eb872]/10 rounded-full items-center justify-center">
              <MaterialIcons name="forest" size={40} color="#006d3e" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-[#006d3e] uppercase tracking-wider">Environmental Offset</Text>
              <Text className="text-base text-[#3d4a40] mt-1">
                Your recycling efforts are equivalent to planting <Text className="font-bold">14 mature trees</Text> in the urban forest.
              </Text>
            </View>
          </View>
        </View>

        {/* Deactivation Details */}
        <View className="space-y-6 mb-16">
          <Text className="text-2xl font-bold text-[#0d1e25]">What happens next?</Text>
          <View className="space-y-6">
            <View className="flex-row gap-3">
              <MaterialIcons name="visibility-off" size={24} color="#3d4a40" />
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Profile Hidden</Text>
                <Text className="text-base text-[#3d4a40]">Your public profile and impact stats will be hidden from the community.</Text>
              </View>
            </View>
            <View className="flex-row gap-3">
              <MaterialIcons name="notifications-paused" size={24} color="#3d4a40" />
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Notifications Stop</Text>
                <Text className="text-base text-[#3d4a40]">You will no longer receive weekly impact summaries or pickup reminders.</Text>
              </View>
            </View>
            <View className="flex-row gap-3">
              <MaterialIcons name="explore" size={24} color="#3d4a40" />
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Data Retention</Text>
                <Text className="text-base text-[#3d4a40]">We keep your impact history for 30 days in case you decide to return.</Text>
              </View>
            </View>
            <View className="flex-row gap-3">
              <MaterialIcons name="shield" size={24} color="#3d4a40" />
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#0d1e25]">Privacy Guaranteed</Text>
                <Text className="text-base text-[#3d4a40]">Your personal data remains encrypted and will never be shared.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Area */}
        <View className="border-t border-[#bccabd] pt-10 items-center pb-10">
          <Text className="text-base text-[#3d4a40] text-center mb-6 max-w-lg">
            Not ready to leave permanently? Try pausing your account to take a break without losing your hard-earned progress.
          </Text>
          
          <View className="w-full gap-4">
            <TouchableOpacity className="h-14 rounded-full bg-[#d9e6da] flex-row items-center justify-center gap-2 active:scale-95">
              <MaterialIcons name="pause-circle-filled" size={24} color="#006d3e" />
              <Text className="text-[#006d3e] text-sm font-medium">Pause Account</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="h-14 rounded-full border-2 border-[#ba1a1a] flex-row items-center justify-center gap-2 active:scale-95">
              <MaterialIcons name="block" size={24} color="#ba1a1a" />
              <Text className="text-[#ba1a1a] text-sm font-medium">Deactivate My Account</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity className="mt-6 active:opacity-80">
            <Text className="text-[#3d4a40] text-sm font-medium underline">Wait, I want to stay</Text>
          </TouchableOpacity>
        </View>
        
        {/* Footer */}
        <View className="py-6 items-center border-t border-[#bccabd]/20 mb-8">
          <Text className="text-xs font-semibold text-[#3d4a40]">© 2024 Upcycle Environmental Labs. All rights reserved.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
