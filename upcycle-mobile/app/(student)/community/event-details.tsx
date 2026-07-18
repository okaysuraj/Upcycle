import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function EventDetails() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="absolute w-full z-50 px-4 py-4 flex-row justify-between items-center bg-white/70">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 rounded-full bg-white/50 items-center justify-center border-2 border-white">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white/50 items-center justify-center border-2 border-white">
          <Ionicons name="notifications" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="relative h-[400px] bg-[#00522d]">
          {/* Placeholder for the background image */}
          <View className="absolute inset-0 bg-[#00522d] opacity-90" />
          
          <View className="absolute bottom-0 w-full p-6 pb-8">
            <View className="flex-row items-center gap-2 mb-3">
              <View className="bg-[#006d3e] px-3 py-1 rounded-full">
                <Text className="text-[10px] font-bold text-white">SUMMIT 2024</Text>
              </View>
              <View className="bg-white/20 px-3 py-1 rounded-full">
                <Text className="text-[10px] font-bold text-white">Oct 24 - 26</Text>
              </View>
            </View>
            <Text className="text-4xl font-bold text-white mb-4 leading-tight">Global Sustainability & Circularity Summit</Text>
            <View className="flex-row gap-4 items-center">
              <View className="flex-row items-center gap-1">
                <Ionicons name="location" size={16} color="#9cf6ba" />
                <Text className="text-white text-xs">Oslo, Norway</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="people" size={16} color="#9cf6ba" />
                <Text className="text-white text-xs">1,200+ Participants</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 py-6 pb-24 gap-6">
          
          {/* About the Event */}
          <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm">
            <Text className="text-xl font-bold text-[#00522d] mb-3">About the Event</Text>
            <Text className="text-[#3f4941] text-sm leading-relaxed mb-6">
              The Upcycle Sustainability Summit brings together urban planners, policy makers, and eco-tech entrepreneurs to redefine the future of waste management. Over three days, we explore groundbreaking circular economy models that transform municipal waste into high-value community assets.
            </Text>
            
            <View className="gap-3">
              <View className="bg-[#f4faff] p-3 rounded-xl border border-gray-100">
                <Ionicons name="sync" size={24} color="#00522d" className="mb-1" />
                <Text className="font-bold text-[#0d1e25] text-sm mb-1">Circular Systems</Text>
                <Text className="text-[10px] text-gray-500">Advanced sorting & logistics.</Text>
              </View>
              <View className="bg-[#f4faff] p-3 rounded-xl border border-gray-100">
                <Ionicons name="document-text" size={24} color="#00522d" className="mb-1" />
                <Text className="font-bold text-[#0d1e25] text-sm mb-1">Municipal Policy</Text>
                <Text className="text-[10px] text-gray-500">Streamlining city regulations.</Text>
              </View>
            </View>
          </View>

          {/* Schedule */}
          <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-bold text-[#00522d]">Summit Schedule</Text>
              <View className="flex-row gap-2">
                <View className="bg-[#006d3e] px-3 py-1 rounded-full">
                  <Text className="text-[10px] font-bold text-white">Day 1</Text>
                </View>
                <View className="bg-[#d4e5ef] px-3 py-1 rounded-full">
                  <Text className="text-[10px] font-bold text-[#3f4941]">Day 2</Text>
                </View>
              </View>
            </View>
            
            <View className="gap-4">
              <View className="flex-row gap-4 items-start">
                <View className="items-center">
                  <Text className="font-bold text-[#00522d] text-sm">09:00</Text>
                  <View className="w-px h-10 bg-gray-200 my-1" />
                </View>
                <View className="flex-1 pb-4">
                  <Text className="font-bold text-[#0d1e25] text-base mb-1">Keynote: The 2030 Circular Vision</Text>
                  <Text className="text-xs text-gray-500">Opening remarks by Dr. Aris Thorne on global waste trends.</Text>
                </View>
              </View>
              
              <View className="flex-row gap-4 items-start">
                <View className="items-center">
                  <Text className="font-bold text-[#00522d] text-sm">11:30</Text>
                  <View className="w-px h-10 bg-gray-200 my-1" />
                </View>
                <View className="flex-1 pb-4">
                  <Text className="font-bold text-[#0d1e25] text-base mb-1">AI in Waste Sorting Workshop</Text>
                  <Text className="text-xs text-gray-500">Practical session on integrating machine learning in depots.</Text>
                </View>
              </View>
              
              <View className="flex-row gap-4 items-start">
                <View className="items-center">
                  <Text className="font-bold text-[#00522d] text-sm">14:00</Text>
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-[#0d1e25] text-base mb-1">Networking Lunch & Expo</Text>
                  <Text className="text-xs text-gray-500">Connect with 40+ sustainable tech exhibitors.</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Speakers */}
          <View className="bg-white/70 border border-white rounded-[24px] p-6 shadow-sm">
            <Text className="text-xl font-bold text-[#00522d] mb-4">Featured Speakers</Text>
            
            <View className="gap-4">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-full bg-[#dff1fb] items-center justify-center">
                  <Ionicons name="person" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25] text-sm">Dr. Aris Thorne</Text>
                  <Text className="text-xs text-gray-500">Director of Oslo Eco-Lab</Text>
                </View>
              </View>
              
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-full bg-[#d9e6da] items-center justify-center">
                  <Ionicons name="person" size={24} color="#3c6842" />
                </View>
                <View>
                  <Text className="font-bold text-[#0d1e25] text-sm">Elena Rodriguez</Text>
                  <Text className="text-xs text-gray-500">Circular Economy Lead, UN</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Floating RSVP Button */}
      <View className="absolute bottom-6 w-full px-4">
        <TouchableOpacity className="w-full bg-[#00522d] py-4 rounded-full shadow-lg items-center justify-center flex-row gap-2">
          <Ionicons name="calendar" size={20} color="white" />
          <Text className="text-white font-bold text-lg">RSVP for Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
