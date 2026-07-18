import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusMapMobile() {
  const router = useRouter();
  const [activeCallout, setActiveCallout] = useState<string | null>(null);

  const toggleCallout = (id: string) => {
    setActiveCallout(activeCallout === id ? null : id);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50 absolute top-0 w-full mt-10">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-[#d9ebf5] overflow-hidden items-center justify-center">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7WHYCGcv-x40M3yKNsRI_w6sqdg1UY_WehhmzVUePotVsVDp__hjAL86GBGQGbpuNSwqlpwXAlbZRFZ1io2VN2AhhyZnxnzz2LMClxIYW1Lzw6dyv8-rfAGtKtqgGcU173_ddrg2I100Ric9pavoWMKbpPOvak2O_PqB2iHYBAMs1RWMr9qtgdj8_9GXMs_DfFo7oo7twFwCUWNbWJlMwuyud4-HwB9AtglxHXks7WnQKp2EPUykEqlwbjpB5KSt93ISVHe5ivlQ' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      {/* Main Map */}
      <View className="flex-1 relative pt-24 overflow-hidden">
        <ImageBackground 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsrHQ2yFgldLT0X27Lp94SVytmYhqms45nhKqNpIxH_ygVBb6uVazyU_BE1XeAJZqkcXRUBlxf1TZMHE4PEiF49xYpux37dy9yFjB7-wuSTDgbF1A50-5D1Bf5osWsBGMalqb8PvaxZKhweABgD6ZkDwz4S6ERqRxDViWhkE23IwQ3fE6qPO-xBnYCOKn-3VTtLig7JdoeKndwenEL6MSwfZgfj8AVsHnYBHXH468_rA43RyT3R5iMEfgIuyNAXYkSeE9gITS8O0' }}
          className="absolute inset-0 w-full h-full bg-[#cbdde7]"
        />
        
        {/* Map Markers */}
        <View className="absolute top-[30%] left-[45%] z-10">
          <TouchableOpacity onPress={() => toggleCallout('callout-1')} className="w-12 h-12 bg-[#ffdad6] rounded-full items-center justify-center border-2 border-white shadow-lg active:scale-95">
            <MaterialIcons name="warning" size={24} color="#ba1a1a" />
          </TouchableOpacity>
          {activeCallout === 'callout-1' && (
            <View className="absolute bottom-14 left-[50%] -translate-x-[50%] w-48 bg-white/90 p-3 rounded-xl shadow-xl border border-[#bec9be]/30">
              <Text className="text-[10px] font-bold text-[#ba1a1a] mb-1">ENERGY CRITICAL</Text>
              <Text className="text-sm text-[#0d1e25] leading-tight mb-2">North Lab surge detected</Text>
              <TouchableOpacity className="bg-[#00522d] self-start px-3 py-1 rounded-full active:bg-[#006d3e]">
                <Text className="text-[10px] font-bold text-white">RESOLVE</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View className="absolute top-[60%] left-[25%] z-10">
          <TouchableOpacity onPress={() => toggleCallout('callout-2')} className="w-10 h-10 bg-[#006d3e] rounded-full items-center justify-center border-2 border-white shadow-md active:scale-95">
            <MaterialIcons name="delete" size={20} color="#92ecb1" />
          </TouchableOpacity>
          {activeCallout === 'callout-2' && (
            <View className="absolute bottom-12 left-[50%] -translate-x-[50%] w-40 bg-white/90 p-3 rounded-xl shadow-xl border border-[#bec9be]/30">
              <Text className="text-[10px] font-bold text-[#00522d] mb-1">WASTE OPTIMAL</Text>
              <Text className="text-sm text-[#0d1e25]">Central Hub: 42%</Text>
            </View>
          )}
        </View>

        <View className="absolute top-[45%] left-[70%] z-10">
          <TouchableOpacity className="w-10 h-10 bg-[#d9e6da] rounded-full items-center justify-center border-2 border-white shadow-md active:scale-95">
            <MaterialIcons name="bolt" size={20} color="#00522d" />
          </TouchableOpacity>
        </View>

        {/* Floating Search Bar */}
        <View className="absolute top-8 left-5 right-5 z-40 mt-20">
          <View className="flex-row items-center bg-white/90 rounded-full px-4 py-3 shadow-lg border border-[#bec9be]/30">
            <MaterialIcons name="search" size={24} color="#6f7a70" />
            <Text className="flex-1 ml-2 text-base text-[#6f7a70]">Find building or facility...</Text>
            <MaterialIcons name="mic" size={24} color="#00522d" />
          </View>
        </View>

        {/* Layer Toggles */}
        <View className="absolute top-44 right-4 gap-3 z-40">
          <TouchableOpacity className="w-12 h-12 bg-white/80 rounded-xl shadow-md items-center justify-center active:bg-white border border-[#bec9be]/20">
            <MaterialIcons name="delete" size={24} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-[#006d3e] rounded-xl shadow-md items-center justify-center active:bg-[#00522d]">
            <MaterialIcons name="bolt" size={24} color="#92ecb1" />
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-white/80 rounded-xl shadow-md items-center justify-center active:bg-white border border-[#bec9be]/20">
            <MaterialIcons name="directions-bus" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>

        {/* Zoom Controls */}
        <View className="absolute bottom-28 right-4 gap-2 z-40">
          <TouchableOpacity className="w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center active:scale-90">
            <MaterialIcons name="add" size={24} color="#00522d" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center active:scale-90">
            <MaterialIcons name="remove" size={24} color="#00522d" />
          </TouchableOpacity>
        </View>

        {/* Location Button */}
        <View className="absolute bottom-28 left-4 z-40">
          <TouchableOpacity className="w-12 h-12 bg-[#00522d] rounded-full shadow-lg items-center justify-center active:scale-95">
            <MaterialIcons name="my-location" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Status Card */}
        <View className="absolute bottom-6 left-5 right-5 z-30 mb-20">
          <View className="bg-white/95 rounded-2xl p-4 shadow-2xl border-t border-[#bec9be]/20 flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="w-2 h-2 bg-[#2eb872] rounded-full" />
              <View>
                <Text className="text-sm font-medium text-[#0d1e25]">Campus Overview</Text>
                <Text className="text-[12px] font-bold text-[#6f7a70]">All systems normal (2 alerts)</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#6f7a70" />
          </View>
        </View>

      </View>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="dashboard" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="delete" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="domain" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1] mt-0.5">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="bolt" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
