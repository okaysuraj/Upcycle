import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusBenchmarkingMobile() {
  const router = useRouter();

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top AppBar */}
      <View className="flex-row items-center justify-between px-5 h-16 w-full z-50 bg-[#f4faff] border-b border-[#bec9be]">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="p-2 hover:bg-[#dff1fb] rounded-full">
            <MaterialIcons name="search" size={24} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 hover:bg-[#dff1fb] rounded-full">
            <MaterialIcons name="notifications" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-5 py-6 pb-32">
        {/* Header Section */}
        <View className="mb-8">
          <View className="self-start items-center flex-row px-3 py-1 rounded-full bg-[#bdefbf] mb-2">
            <MaterialIcons name="verified" size={14} color="#002109" className="mr-1" />
            <Text className="text-xs font-bold text-[#002109]">Top 10% National</Text>
          </View>
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Campus Benchmarking</Text>
          <Text className="text-lg text-[#3f4941] mb-4">
             Comparative analysis of University vs. National Sustainability Benchmarks.
          </Text>
          <View className="flex-row gap-3">
             <TouchableOpacity className="flex-row items-center gap-2 px-4 py-2 bg-[#d9e6da] rounded-full">
               <MaterialIcons name="filter-list" size={20} color="#5b675e" />
               <Text className="text-sm font-bold text-[#5b675e]">Ivy League</Text>
             </TouchableOpacity>
             <TouchableOpacity className="flex-row items-center gap-2 px-4 py-2 bg-[#00522d] rounded-full">
               <MaterialIcons name="download" size={20} color="white" />
               <Text className="text-sm font-bold text-white">Export</Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Bento Grid Analysis */}
        {/* Main Metric */}
        <View className="p-6 rounded-3xl bg-white border border-[#bec9be]/30 mb-4 shadow-sm">
          <View className="mb-4">
             <Text className="text-2xl font-bold text-[#0d1e25]">Diversion Rate</Text>
             <Text className="text-sm font-bold text-[#3f4941]">Waste diverted vs. Peer Avg</Text>
          </View>
          
          <View className="flex-row items-center gap-2 mb-6">
             <View className="w-3 h-3 rounded-full bg-[#00522d]"></View>
             <Text className="text-xs font-bold mr-4">University West</Text>
             <View className="w-3 h-3 rounded-full bg-[#cbdde7]"></View>
             <Text className="text-xs font-bold">Peer Average</Text>
          </View>

          <View className="h-48 flex-row items-end justify-between gap-2">
            <View className="flex-1 items-center justify-end h-full">
              <View className="w-4 bg-[#00522d] rounded-t-sm" style={{ height: '55%' }}></View>
              <Text className="text-xs font-bold text-[#3f4941] mt-2">JAN</Text>
            </View>
            <View className="flex-1 items-center justify-end h-full">
              <View className="w-4 bg-[#00522d] rounded-t-sm" style={{ height: '60%' }}></View>
              <Text className="text-xs font-bold text-[#3f4941] mt-2">FEB</Text>
            </View>
            <View className="flex-1 items-center justify-end h-full">
              <View className="w-4 bg-[#00522d] rounded-t-sm" style={{ height: '58%' }}></View>
              <Text className="text-xs font-bold text-[#3f4941] mt-2">MAR</Text>
            </View>
            <View className="flex-1 items-center justify-end h-full">
              <View className="w-4 bg-[#00522d] rounded-t-sm border-t-2 border-[#9cf6ba]" style={{ height: '72%' }}></View>
              <Text className="text-xs font-bold text-[#00522d] mt-2">APR</Text>
            </View>
            <View className="flex-1 items-center justify-end h-full">
              <View className="w-4 bg-[#00522d] rounded-t-sm" style={{ height: '65%' }}></View>
              <Text className="text-xs font-bold text-[#3f4941] mt-2">MAY</Text>
            </View>
            <View className="flex-1 items-center justify-end h-full">
              <View className="w-4 bg-[#00522d] rounded-t-sm" style={{ height: '62%' }}></View>
              <Text className="text-xs font-bold text-[#3f4941] mt-2">JUN</Text>
            </View>
          </View>
        </View>

        {/* Peer Group Ranking */}
        <View className="p-6 rounded-3xl bg-white border border-[#bec9be]/30 mb-4 shadow-sm relative overflow-hidden">
          <MaterialIcons name="military-tech" size={100} color="#0d1e25" className="absolute -top-4 -right-4 opacity-5" />
          <Text className="text-2xl font-bold text-[#0d1e25] mb-6">Peer Group Rankings</Text>
          
          <View className="space-y-4">
             <View className="flex-row items-center justify-between p-4 bg-[#006d3e] rounded-xl mb-3">
               <View className="flex-row items-center gap-4">
                 <Text className="text-2xl font-bold text-[#92ecb1] opacity-80">01</Text>
                 <View>
                    <Text className="text-sm font-bold text-[#92ecb1]">University West (You)</Text>
                    <Text className="text-xs font-bold text-[#92ecb1]/70">Score: 98.4</Text>
                 </View>
               </View>
               <MaterialIcons name="star" size={24} color="#92ecb1" />
             </View>

             <View className="flex-row items-center justify-between p-4 border border-[#bec9be]/30 rounded-xl mb-3">
               <View className="flex-row items-center gap-4">
                 <Text className="text-2xl font-bold text-[#6f7a70] opacity-50">02</Text>
                 <View>
                    <Text className="text-sm font-bold text-[#0d1e25]">Easton Institute</Text>
                    <Text className="text-xs font-bold text-[#3f4941]">Score: 92.1</Text>
                 </View>
               </View>
             </View>
          </View>
          <TouchableOpacity className="w-full mt-4 py-3 border border-[#00522d]/20 rounded-xl items-center">
             <Text className="text-[#00522d] font-bold text-sm">View Full Rankings (50+)</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScreenWrapper>
  );
}
