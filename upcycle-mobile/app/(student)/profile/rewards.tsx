import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function RewardsPointsStore() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Ionicons name="leaf" size={24} color="#00522d" />
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity className="p-2 rounded-full">
            <Ionicons name="notifications" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full border-2 border-[#9cf6ba] overflow-hidden bg-[#dff1fb] items-center justify-center">
            <Ionicons name="person" size={16} color="#00522d" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Points Balance */}
        <View className="bg-[#00522d] rounded-[24px] p-6 mb-4 relative overflow-hidden">
          <View className="absolute right-0 bottom-0 opacity-10">
            <Ionicons name="gift" size={120} color="white" />
          </View>
          <Text className="text-[10px] text-white/80 uppercase tracking-widest mb-2">Current Balance</Text>
          <View className="flex-row items-baseline gap-2 mb-4">
            <Text className="text-6xl font-bold text-white">1,240</Text>
            <Text className="text-base text-white/70">Points</Text>
          </View>
          <Text className="text-base text-white/90">Your eco-efforts are making a difference! Redeem your points for exclusive rewards that support a greener campus.</Text>
        </View>

        {/* Milestone */}
        <View className="bg-[#d9e6da] rounded-[24px] p-6 mb-6">
          <Text className="text-xl font-bold text-[#0d1e25] mb-2">Next Milestone</Text>
          <Text className="text-sm text-[#3f4941] mb-6">Only 260 points away from "Zero-Waste Hero" badge.</Text>
          
          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm font-bold text-[#0d1e25]">Progress</Text>
              <Text className="text-sm font-bold text-[#0d1e25]">82%</Text>
            </View>
            <View className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
              <View className="h-full bg-[#00522d] w-[82%]" />
            </View>
          </View>
        </View>

        {/* Category Filters */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible">
            <TouchableOpacity className="px-6 py-2 bg-[#00522d] rounded-full mr-3">
              <Text className="text-white font-bold text-sm">All Rewards</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 py-2 bg-[#dff1fb] rounded-full mr-3">
              <Text className="text-[#0d1e25] font-bold text-sm">Sustainable Products</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 py-2 bg-[#dff1fb] rounded-full mr-3">
              <Text className="text-[#0d1e25] font-bold text-sm">Campus Dining</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 py-2 bg-[#dff1fb] rounded-full mr-3">
              <Text className="text-[#0d1e25] font-bold text-sm">Exclusive Events</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-6 py-2 bg-[#dff1fb] rounded-full mr-3">
              <Text className="text-[#0d1e25] font-bold text-sm">Digital Badges</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Rewards Grid */}
        <View className="gap-4">
          
          {/* Featured: Event */}
          <View className="bg-white/70 rounded-[24px] border border-[#bec9be]/30 shadow-sm overflow-hidden">
            <View className="h-48 bg-[#00522d] relative">
              <View className="absolute top-4 left-4 z-10 bg-[#ffdad6] px-3 py-1 rounded-full">
                <Text className="text-[10px] font-bold text-[#93000a]">Limited Access</Text>
              </View>
            </View>
            <View className="p-6">
              <View className="flex-row items-center gap-1 mb-1">
                <Ionicons name="calendar" size={16} color="#00522d" />
                <Text className="text-[10px] font-bold text-[#00522d] uppercase tracking-wide">Campus Event</Text>
              </View>
              <Text className="text-2xl font-bold text-[#0d1e25] mb-2 leading-tight">VIP Rooftop Sustainability Mixer</Text>
              <Text className="text-sm text-[#3f4941] mb-6">Join university leaders and eco-innovators for an exclusive networking night. Features sustainable catering and a zero-waste cocktail bar.</Text>
              
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="disc" size={24} color="#00522d" />
                  <Text className="text-2xl font-bold text-[#00522d]">500</Text>
                </View>
                <TouchableOpacity className="px-8 py-3 bg-[#00522d] rounded-full">
                  <Text className="text-white font-bold text-sm">Redeem</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between gap-4">
            {/* Product 1 */}
            <View className="w-[47%] bg-white border border-[#bec9be]/30 rounded-[24px] p-4 shadow-sm justify-between">
              <View>
                <View className="h-32 bg-[#d9e6da] rounded-xl mb-4" />
                <View className="flex-row items-center gap-1 mb-1">
                  <Ionicons name="bag" size={12} color="#556158" />
                  <Text className="text-[10px] font-bold text-[#556158] uppercase tracking-wide">Product</Text>
                </View>
                <Text className="text-base font-bold text-[#0d1e25] mb-1">Premium Insulated Bottle</Text>
                <Text className="text-xs text-[#3f4941] mb-4">Custom branded 24oz stainless steel bottle.</Text>
              </View>
              <View className="flex-row justify-between items-center border-t border-[#bec9be]/20 pt-4">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="disc" size={16} color="#00522d" />
                  <Text className="text-lg font-bold text-[#00522d]">350</Text>
                </View>
                <TouchableOpacity className="w-8 h-8 bg-[#dff1fb] rounded-full items-center justify-center">
                  <Ionicons name="add" size={16} color="#00522d" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Dining Voucher */}
            <View className="w-[47%] bg-white border border-[#bec9be]/30 rounded-[24px] p-4 shadow-sm justify-between">
              <View>
                <View className="h-32 bg-[#d9e6da] rounded-xl mb-4 relative overflow-hidden">
                   <View className="absolute inset-0 bg-[#00522d]/20 items-center justify-center">
                     <Text className="text-white font-bold text-sm">View Details</Text>
                   </View>
                </View>
                <View className="flex-row items-center gap-1 mb-1">
                  <Ionicons name="restaurant" size={12} color="#24502c" />
                  <Text className="text-[10px] font-bold text-[#24502c] uppercase tracking-wide">Dining</Text>
                </View>
                <Text className="text-base font-bold text-[#0d1e25] mb-1">$10 Campus Eatery Credit</Text>
                <Text className="text-xs text-[#3f4941] mb-4">Valid at all organic and plant-based stations on campus.</Text>
              </View>
              <View className="flex-row justify-between items-center border-t border-[#bec9be]/20 pt-4">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="disc" size={16} color="#00522d" />
                  <Text className="text-lg font-bold text-[#00522d]">150</Text>
                </View>
                <TouchableOpacity className="px-4 py-1 bg-[#d9e6da] rounded-full">
                  <Text className="text-[#0d1e25] font-bold text-xs">Redeem</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Product 2 */}
          <View className="bg-white/70 rounded-[24px] border border-[#bec9be]/30 shadow-sm p-6 items-center">
             <View className="w-full h-48 bg-[#d4e5ef] rounded-2xl mb-6" />
             <View className="w-full">
               <View className="flex-row items-center gap-1 mb-1">
                 <Ionicons name="flash" size={16} color="#00522d" />
                 <Text className="text-[10px] font-bold text-[#00522d] uppercase tracking-wide">Eco-Tech</Text>
               </View>
               <Text className="text-2xl font-bold text-[#0d1e25] mb-2 leading-tight">Solar-Recycled Smart Pack</Text>
               <Text className="text-sm text-[#3f4941] mb-6">Charge your devices on the go with our 100% recycled solar backpack. Only 5 remaining in stock.</Text>
               
               <View className="flex-row justify-between items-center">
                 <View className="flex-row items-center gap-4">
                   <View className="flex-row items-center gap-1">
                     <Ionicons name="disc" size={24} color="#00522d" />
                     <Text className="text-2xl font-bold text-[#00522d]">850</Text>
                   </View>
                   <View className="bg-[#e7f6ff] px-2 py-0.5 rounded">
                     <Text className="text-[10px] font-bold text-[#00522d]">High Value</Text>
                   </View>
                 </View>
                 <TouchableOpacity className="px-6 py-3 bg-[#00522d] rounded-full">
                   <Text className="text-white font-bold text-sm">Redeem</Text>
                 </TouchableOpacity>
               </View>
             </View>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}
