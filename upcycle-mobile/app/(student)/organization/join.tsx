import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function JoinOrganization() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#006d3e" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#3d4a40" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6 items-center">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2 text-center">Join your community</Text>
          <Text className="text-base text-[#3d4a40] text-center">Select your organization to request access. Your contribution helps make waste management more efficient and eco-friendly.</Text>
        </View>

        {/* Search */}
        <View className="relative justify-center mb-6">
          <Ionicons name="search" size={20} color="#006d3e" style={{ position: 'absolute', left: 16, zIndex: 10 }} />
          <TextInput 
            className="w-full bg-[#e7f6ff] rounded-full h-14 pl-12 pr-4 text-base font-bold text-[#0d1e25]"
            placeholder="Find your campus or company..."
            placeholderTextColor="#3d4a40"
          />
        </View>

        {/* Organizations Grid */}
        <View className="gap-4">
          
          {/* Org 1 */}
          <View className="bg-white/70 p-6 rounded-[24px] border border-[#bccabd] shadow-sm">
            <View className="flex-row justify-between items-start mb-6">
              <View className="flex-row gap-4">
                <View className="w-16 h-16 bg-[#2eb872] rounded-xl items-center justify-center">
                  <Ionicons name="school" size={32} color="#004224" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-[#0d1e25]">Green Valley Campus</Text>
                  <Text className="text-xs text-[#3d4a40]">420 active members</Text>
                </View>
              </View>
              <Ionicons name="checkmark-circle" size={20} color="#2eb872" />
            </View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row -space-x-2">
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="person" size={16} color="#006d3e" />
                </View>
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#a5d6a7] items-center justify-center">
                  <Ionicons name="person" size={16} color="#006d3e" />
                </View>
                <View className="w-8 h-8 rounded-full border-2 border-white bg-[#e7f6ff] items-center justify-center">
                  <Text className="text-[10px] font-bold text-[#3d4a40]">+12</Text>
                </View>
              </View>
              <TouchableOpacity className="px-6 py-2 bg-[#006d3e] rounded-full shadow-sm">
                <Text className="text-white font-bold text-sm">Join</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Org 2 */}
          <View className="bg-white/70 p-6 rounded-[24px] border border-[#bccabd] shadow-sm">
            <View className="flex-row justify-between items-start mb-6">
              <View className="flex-row gap-4">
                <View className="w-16 h-16 bg-[#d9e6da] rounded-xl items-center justify-center">
                  <Ionicons name="business" size={32} color="#5b675e" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-[#0d1e25]">EcoCorp Solutions</Text>
                  <Text className="text-xs text-[#3d4a40]">Global HQ • London</Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center gap-1">
                <Ionicons name="leaf" size={16} color="#3d4a40" />
                <Text className="text-xs text-[#3d4a40]">Certified Partner</Text>
              </View>
              <TouchableOpacity className="px-6 py-2 bg-[#006d3e] rounded-full shadow-sm">
                <Text className="text-white font-bold text-sm">Join</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Org 3 */}
          <View className="bg-white/70 p-6 rounded-[24px] border border-[#bccabd] shadow-sm">
            <View className="w-full h-32 rounded-xl bg-[#d4e5ef] mb-4" />
            <View className="mb-6">
              <View className="flex-row items-center gap-2 mb-1">
                <Text className="text-xl font-bold text-[#0d1e25]">Metropolitan State Uni</Text>
                <View className="bg-[#7ead81] px-2 py-0.5 rounded">
                  <Text className="text-white font-bold text-[10px] uppercase">New</Text>
                </View>
              </View>
              <Text className="text-sm text-[#3d4a40]">Leading the 2024 Waste Reduction Initiative with over 15 pickup points across campus.</Text>
            </View>
            <TouchableOpacity className="w-full py-4 bg-[#006d3e] rounded-full shadow-sm items-center">
              <Text className="text-white font-bold text-sm">Join</Text>
            </TouchableOpacity>
          </View>

          {/* Org 4 */}
          <View className="bg-white/70 p-6 rounded-[24px] border border-[#bccabd] shadow-sm">
            <View className="flex-row justify-between items-start mb-6">
              <View className="flex-row gap-4">
                <View className="w-16 h-16 bg-[#d9ebf5] rounded-xl items-center justify-center">
                  <Ionicons name="business" size={32} color="#3d4a40" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-[#0d1e25]">TechNova Labs</Text>
                  <Text className="text-xs text-[#3d4a40]">Silicon Valley Hub</Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-xs text-[#3d4a40]">Requires @technova.com</Text>
              <TouchableOpacity className="px-6 py-2 bg-[#006d3e] rounded-full shadow-sm">
                <Text className="text-white font-bold text-sm">Join</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Org 5 (Disabled) */}
          <View className="bg-white/70 p-6 rounded-[24px] border border-[#bccabd] shadow-sm">
            <View className="flex-row justify-between items-start mb-6">
              <View className="flex-row gap-4">
                <View className="w-16 h-16 bg-[#bdefbe] rounded-xl items-center justify-center">
                  <Ionicons name="leaf" size={32} color="#002109" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-[#0d1e25]">Oakwood Community</Text>
                  <Text className="text-xs text-[#3d4a40]">Local Neighborhood</Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-xs text-[#3d4a40]">Invite only</Text>
              <TouchableOpacity disabled className="px-6 py-2 bg-[#d9e6da] rounded-full">
                <Text className="text-[#5b675e] font-bold text-sm">Join</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>

        {/* Empty State / Request New */}
        <View className="mt-8 items-center">
          <Text className="text-sm text-[#3d4a40] mb-2">Can't find your organization?</Text>
          <TouchableOpacity className="flex-row items-center gap-2">
            <Ionicons name="add" size={16} color="#006d3e" />
            <Text className="text-[#006d3e] font-bold text-sm underline">Submit a request to add your organization</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
