import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function EventsHome() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-gray-200">
        <View className="flex-row items-center gap-3">
          <View className="w-8 h-8 rounded-full bg-[#00522d] items-center justify-center overflow-hidden border border-[#bec9be]/30">
             <Ionicons name="person" size={20} color="white" />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="notifications" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Featured Summits */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <View>
              <Text className="text-[10px] font-bold text-[#00522d] uppercase tracking-widest">Global Focus</Text>
              <Text className="text-2xl font-bold text-[#0d1e25]">Featured Summits</Text>
            </View>
            <TouchableOpacity 
              onPress={() => router.push('/(student)/events/listing')}
              className="flex-row items-center gap-1"
            >
              <Text className="text-sm font-bold text-[#00522d]">View all</Text>
              <Ionicons name="arrow-forward" size={14} color="#00522d" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible">
            {/* Featured Card 1 */}
            <TouchableOpacity className="w-[300px] h-[320px] rounded-[24px] overflow-hidden mr-4 shadow-lg relative bg-[#00522d]">
              <View className="absolute inset-0 bg-black/40 z-10" />
              <View className="absolute bottom-0 w-full p-6 z-20">
                <View className="flex-row gap-2 mb-3">
                  <View className="bg-[#00522d] px-3 py-1 rounded-full">
                    <Text className="text-[10px] font-bold text-white">Featured</Text>
                  </View>
                  <View className="bg-white/20 px-3 py-1 rounded-full">
                    <Text className="text-[10px] font-bold text-white">Seminar</Text>
                  </View>
                </View>
                <Text className="text-2xl font-bold text-white mb-2 leading-tight">Sustainable Urban Waste 2024</Text>
                <Text className="text-sm text-white/80 mb-4" numberOfLines={2}>Join 500+ municipal leaders discussing the future of circular economy implementations in smart cities.</Text>
                <View className="flex-row items-center gap-4">
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="calendar" size={14} color="white" />
                    <Text className="text-[10px] font-bold text-white">Oct 12-14</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="location" size={14} color="white" />
                    <Text className="text-[10px] font-bold text-white">Berlin, DE</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Featured Card 2 */}
            <TouchableOpacity className="w-[300px] h-[320px] rounded-[24px] overflow-hidden mr-4 shadow-lg relative bg-[#3c6842]">
              <View className="absolute inset-0 bg-black/30 z-10" />
              <View className="absolute bottom-0 w-full p-6 z-20">
                <Text className="text-xl font-bold text-white mb-2 leading-tight">Eco-Infrastructure Workshop</Text>
                <View className="flex-row items-center gap-2 mb-4">
                  <Ionicons name="school" size={16} color="white" />
                  <Text className="text-[10px] font-bold text-white/90">Certification Available</Text>
                </View>
                <View className="bg-white px-6 py-2 rounded-full self-start">
                  <Text className="text-[#00522d] font-bold text-sm">Book Now</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Categories */}
        <View className="mb-8">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Explore by Type</Text>
          <View className="gap-4">
            <TouchableOpacity className="bg-[#006d3e] p-6 rounded-[24px] shadow-sm flex-row justify-between items-center">
              <View>
                <Ionicons name="people" size={32} color="#92ecb1" style={{ mb: 8 }} />
                <Text className="text-xl font-bold text-[#92ecb1] mt-2">Seminars</Text>
                <Text className="text-sm text-[#92ecb1]/80">Expert talks and policy discussions</Text>
              </View>
              <Ionicons name="arrow-forward" size={24} color="#92ecb1" />
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-[#24502c] p-6 rounded-[24px] shadow-sm flex-row justify-between items-center">
              <View>
                <Ionicons name="hammer" size={32} color="white" style={{ mb: 8 }} />
                <Text className="text-xl font-bold text-white mt-2">Workshops</Text>
                <Text className="text-sm text-white/80">Hands-on practical training sessions</Text>
              </View>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-[#d4e5ef] p-6 rounded-[24px] shadow-sm flex-row justify-between items-center">
              <View>
                <Ionicons name="checkmark-circle" size={32} color="#00522d" style={{ mb: 8 }} />
                <Text className="text-xl font-bold text-[#0d1e25] mt-2">Certifications</Text>
                <Text className="text-sm text-[#3f4941]">Formal municipal waste management credits</Text>
              </View>
              <Ionicons name="arrow-forward" size={24} color="#00522d" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Nearby Workshops List */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <Text className="text-2xl font-bold text-[#0d1e25]">Nearby Workshops</Text>
            <View className="flex-row gap-2">
              <TouchableOpacity className="p-2 rounded-full border border-gray-300">
                <Ionicons name="options" size={16} color="#0d1e25" />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 rounded-full border border-gray-300">
                <Ionicons name="map" size={16} color="#0d1e25" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="gap-4">
            {/* Workshop 1 */}
            <TouchableOpacity className="bg-white border border-[#bec9be]/30 p-4 rounded-[24px] flex-row items-center gap-4 shadow-sm">
              <View className="w-24 h-24 rounded-xl bg-[#2eb872]/20 items-center justify-center">
                <Ionicons name="leaf" size={32} color="#2eb872" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-[10px] font-bold text-[#00522d]">Tomorrow, 10:00 AM</Text>
                  <View className="bg-[#2eb872]/10 px-2 py-0.5 rounded">
                    <Text className="text-[10px] font-bold text-[#2eb872]">8 Spots Left</Text>
                  </View>
                </View>
                <Text className="text-lg font-bold text-[#0d1e25] mb-1 leading-tight">Composting for Urban Hubs</Text>
                <Text className="text-sm text-[#3f4941]" numberOfLines={1}>Practical guide for apartment complex systems.</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6f7a70" />
            </TouchableOpacity>
            
            {/* Workshop 2 */}
            <TouchableOpacity className="bg-white border border-[#bec9be]/30 p-4 rounded-[24px] flex-row items-center gap-4 shadow-sm">
              <View className="w-24 h-24 rounded-xl bg-[#006d3e]/20 items-center justify-center">
                <Ionicons name="cube" size={32} color="#006d3e" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-[10px] font-bold text-[#00522d]">Friday, 02:00 PM</Text>
                  <View className="bg-[#d9e6da] px-2 py-0.5 rounded">
                    <Text className="text-[10px] font-bold text-[#5b675e]">Community Event</Text>
                  </View>
                </View>
                <Text className="text-lg font-bold text-[#0d1e25] mb-1 leading-tight">Polymer Identification 101</Text>
                <Text className="text-sm text-[#3f4941]" numberOfLines={1}>Standardizing sorting labels for city workers.</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6f7a70" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Host Event Banner */}
        <View className="bg-white/70 p-8 rounded-[32px] border border-[#a2d2a4]/30 shadow-sm mb-6">
          <Text className="text-2xl font-bold text-[#00522d] mb-4 leading-tight">Host Your Own Event</Text>
          <Text className="text-base text-[#3f4941] mb-6">Are you an expert in sustainable systems? Use Upcycle to reach 10,000+ local eco-coordinators and manage your municipal certification credits.</Text>
          <TouchableOpacity className="bg-[#00522d] self-start px-8 py-3 rounded-full shadow-lg">
            <Text className="text-white font-bold text-sm">Create Event</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
