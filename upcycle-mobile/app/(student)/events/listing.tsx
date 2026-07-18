import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function EventListing() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#d9e6da]/50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#0d1e25" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Sustainability Events</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Search and Filters */}
        <View className="mb-6">
          <View className="bg-white border border-[#bec9be]/50 rounded-full px-4 py-2 flex-row items-center mb-4 shadow-sm">
            <Ionicons name="search" size={20} color="#6f7a70" style={{ marginRight: 8 }} />
            <TextInput 
              placeholder="Search workshops, meetups, tours..."
              placeholderTextColor="#6f7a70"
              className="flex-1 h-8 font-bold text-[#0d1e25]"
            />
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible pb-2">
            <TouchableOpacity className="bg-[#00522d] px-4 py-2 rounded-full mr-2 shadow-sm">
              <Text className="text-white font-bold text-sm">All Events</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d9e6da] px-4 py-2 rounded-full mr-2 shadow-sm border border-[#bec9be]/30">
              <Text className="text-[#5b675e] font-bold text-sm">Workshop</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d9e6da] px-4 py-2 rounded-full mr-2 shadow-sm border border-[#bec9be]/30">
              <Text className="text-[#5b675e] font-bold text-sm">Cleanup</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d9e6da] px-4 py-2 rounded-full mr-2 shadow-sm border border-[#bec9be]/30">
              <Text className="text-[#5b675e] font-bold text-sm">Seminar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#d9e6da] px-4 py-2 rounded-full mr-2 shadow-sm border border-[#bec9be]/30">
              <Text className="text-[#5b675e] font-bold text-sm">Market</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Featured Event */}
        <TouchableOpacity className="h-[400px] rounded-[24px] overflow-hidden bg-[#0d1e25] shadow-lg mb-4 relative">
          <View className="absolute inset-0 bg-[#006d3e]/20 z-0" />
          <View className="absolute inset-0 bg-black/40 z-10" />
          <View className="absolute bottom-0 p-6 z-20 w-full">
            <View className="flex-row gap-2 mb-3">
              <View className="bg-[#9cf6ba] px-3 py-1 rounded-full">
                <Text className="text-[10px] font-bold text-[#00210f] uppercase tracking-wider">Featured</Text>
              </View>
              <View className="bg-white/20 px-3 py-1 rounded-full border border-white/30">
                <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Urban Farming</Text>
              </View>
            </View>
            <Text className="text-3xl font-bold text-white mb-2 leading-tight">Community Garden Masterclass</Text>
            <Text className="text-white/80 text-sm mb-4">Learn the secrets of high-yield organic gardening in small urban spaces. Includes seed swapping and composting basics.</Text>
            
            <View className="flex-row flex-wrap items-center gap-4 text-white/90">
              <View className="flex-row items-center gap-1">
                <Ionicons name="calendar" size={16} color="#9cf6ba" />
                <Text className="text-sm font-bold text-white">Oct 24, 2023</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="time" size={16} color="#9cf6ba" />
                <Text className="text-sm font-bold text-white">10:00 AM - 2:00 PM</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View className="flex-row flex-wrap gap-4 mb-4">
          
          {/* Small Event 1 */}
          <TouchableOpacity className="w-full bg-white border border-[#bec9be]/30 rounded-[24px] p-4 flex-row hover:shadow-md mb-2 shadow-sm">
            <View className="h-24 w-24 rounded-xl bg-[#00522d]/10 items-center justify-center mr-4">
              <Ionicons name="cube" size={32} color="#00522d" />
            </View>
            <View className="flex-1 justify-between py-1">
              <View>
                <Text className="text-[10px] font-bold text-[#00522d] uppercase tracking-wider mb-1">Workshop</Text>
                <Text className="text-xl font-bold text-[#0d1e25] leading-tight mb-2">Plastic Upcycling 101</Text>
                
                <View className="gap-1 mb-2">
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="calendar" size={14} color="#556158" />
                    <Text className="text-sm text-[#3f4941]">Oct 26, 2023</Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="location" size={14} color="#556158" />
                    <Text className="text-sm text-[#3f4941]">Innovation Hub</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="w-full py-2 bg-[#d9e6da] rounded-full items-center">
                <Text className="text-sm font-bold text-[#5b675e]">Get Tickets</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Small Event 2 */}
          <TouchableOpacity className="w-[47%] bg-white border border-[#bec9be]/30 rounded-[24px] p-4 flex-col hover:shadow-md mb-2 shadow-sm">
             <View className="w-12 h-12 rounded-xl bg-[#ffdad6] flex items-center justify-center mb-4">
               <Ionicons name="trash" size={24} color="#ba1a1a" />
             </View>
             <Text className="text-lg font-bold text-[#0d1e25] mb-2 leading-tight">River Cleanup Drive</Text>
             <Text className="text-xs text-[#3f4941] mb-4 flex-1">Join the local team for a morning of restoration.</Text>
             <View className="mt-2 pt-2 border-t border-[#bec9be]/30">
               <Text className="text-[10px] font-bold text-[#6f7a70] uppercase mb-1">Date & Time</Text>
               <Text className="text-sm font-bold text-[#0d1e25]">Oct 28 • 08:30 AM</Text>
             </View>
          </TouchableOpacity>

          {/* Small Event 3 */}
          <TouchableOpacity className="w-[47%] bg-white border border-[#bec9be]/30 rounded-[24px] p-4 flex-col hover:shadow-md mb-2 shadow-sm">
             <View className="w-12 h-12 rounded-xl bg-[#bdefbf]/50 flex items-center justify-center mb-4">
               <Ionicons name="bulb" size={24} color="#24502c" />
             </View>
             <Text className="text-lg font-bold text-[#0d1e25] mb-2 leading-tight">Solar Policy Seminar</Text>
             <Text className="text-xs text-[#3f4941] mb-4 flex-1">Expert talk on local energy incentives.</Text>
             <View className="mt-2 pt-2 border-t border-[#bec9be]/30">
               <Text className="text-[10px] font-bold text-[#6f7a70] uppercase mb-1">Status</Text>
               <View className="flex-row items-center gap-2">
                 <View className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
                 <Text className="text-sm font-bold text-[#0d1e25]">5 Tickets Left</Text>
               </View>
             </View>
          </TouchableOpacity>
        </View>

        {/* Load More Section */}
        <TouchableOpacity className="mt-4 border-2 border-[#00522d] py-3 rounded-full items-center justify-center flex-row shadow-sm">
          <Text className="text-lg font-bold text-[#00522d]">Browse All 142 Events</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
