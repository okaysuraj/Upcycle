import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BinFleetMobile() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Recycling', 'General', 'Organic'];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-[#f4faff] border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border border-[#00522d]/20 overflow-hidden bg-[#006d3e]">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHzJ3X9lA8J0UYRw2ukxvnidD3o_wuHFE47IL4xh5ucP30ZiCepiHQl65y3HVMSc7iQ-T2XDMXo8su2uE1dfAugmaGNAdt0kVtf5sPrxCDFP8FEZeqaEfo8RmseBwLlpBgYVurcZnhrLj6CdKaU_Fu7bwgVksil-EgF-hgSysVsZOK7LvpvWEMmlyTf3vjFMKF3qSSFy2Mt-PX_2TeU9kEiDb7DD9QY3GMOVef0etKDqbj3uVIHCtxvgl_O3txj7YUSxk16bZY8IY' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d] tracking-tight">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      {/* Search and Filters (Sticky behavior simulated by placing outside ScrollView but inside a wrapper or just inside ScrollView depending on desired feel. I'll put it at the top of scroll view) */}
      
      <View className="bg-[#f4faff]/90 pt-4 pb-6 px-5 z-40">
        <View className="relative">
          <MaterialIcons name="search" size={24} color="#6f7a70" className="absolute left-4 top-4 z-10" />
          <TextInput 
            className="w-full h-14 pl-12 pr-4 bg-white border border-[#bec9be]/30 rounded-2xl text-base text-[#0d1e25]"
            placeholder="Search by Bin ID or Location..."
            placeholderTextColor="#6f7a70"
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6 -mx-5 px-5">
          <View className="flex-row gap-2 pr-10">
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full ${
                  activeFilter === filter 
                    ? 'bg-[#00522d] shadow-md' 
                    : 'bg-[#d9ebf5] active:bg-[#d4e5ef]'
                }`}
              >
                <Text className={`text-sm font-bold ${
                  activeFilter === filter ? 'text-white' : 'text-[#3f4941]'
                }`}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingBottom: 120 }}>
        
        <View className="gap-4 mt-2">
          {/* Bin 1 */}
          <TouchableOpacity onPress={() => router.push('/(staff)/bins/BIN-0842')} className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm active:scale-95">
            <View className="flex-row justify-between items-start mb-3">
              <View>
                <Text className="text-[12px] font-bold text-[#6f7a70] tracking-wider uppercase mb-1">#BIN-0842</Text>
                <Text className="text-2xl font-bold text-[#0d1e25]">Main Library Entrance</Text>
              </View>
              <View className="px-3 py-1 rounded-full bg-[#d9e6da]">
                <Text className="text-xs font-bold text-[#5b675e]">Recycling</Text>
              </View>
            </View>
            <View className="gap-4">
              <View className="gap-2">
                <View className="flex-row justify-between items-end">
                  <Text className="text-base font-medium text-[#3f4941]">Fill Level</Text>
                  <Text className="text-2xl font-bold text-[#ba1a1a]">85%</Text>
                </View>
                <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#ba1a1a] rounded-full" style={{ width: '85%' }} />
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-2">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="battery-full" size={24} color="#2eb872" />
                  <Text className="text-sm font-bold text-[#3f4941]">92% Battery</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Text className="text-sm font-bold text-[#00522d]">Details</Text>
                  <MaterialIcons name="arrow-forward-ios" size={16} color="#00522d" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Bin 2 */}
          <TouchableOpacity onPress={() => router.push('/(staff)/bins/BIN-1105')} className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm active:scale-95">
            <View className="flex-row justify-between items-start mb-3">
              <View>
                <Text className="text-[12px] font-bold text-[#6f7a70] tracking-wider uppercase mb-1">#BIN-1105</Text>
                <Text className="text-2xl font-bold text-[#0d1e25]">Science Plaza Cafeteria</Text>
              </View>
              <View className="px-3 py-1 rounded-full bg-[#3c6842]">
                <Text className="text-xs font-bold text-[#b3e5b5]">Organic</Text>
              </View>
            </View>
            <View className="gap-4">
              <View className="gap-2">
                <View className="flex-row justify-between items-end">
                  <Text className="text-base font-medium text-[#3f4941]">Fill Level</Text>
                  <Text className="text-2xl font-bold text-[#00522d]">42%</Text>
                </View>
                <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d] rounded-full" style={{ width: '42%' }} />
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-2">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="battery-charging-20" size={24} color="#ba1a1a" />
                  <Text className="text-sm font-bold text-[#3f4941]">18% Battery</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Text className="text-sm font-bold text-[#00522d]">Details</Text>
                  <MaterialIcons name="arrow-forward-ios" size={16} color="#00522d" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Bin 3 */}
          <TouchableOpacity onPress={() => router.push('/(staff)/bins/BIN-0229')} className="bg-white/70 border border-[#00522d]/10 rounded-[24px] p-6 shadow-lg active:scale-95">
            <View className="flex-row justify-between items-start mb-3">
              <View>
                <Text className="text-[12px] font-bold text-[#00522d] tracking-wider uppercase mb-1">#BIN-0229</Text>
                <Text className="text-2xl font-bold text-[#006d3e]">Student Union North</Text>
              </View>
              <View className="px-3 py-1 rounded-full bg-[#d4e5ef]">
                <Text className="text-xs font-bold text-[#3f4941]">General</Text>
              </View>
            </View>
            <View className="gap-4">
              <View className="gap-2">
                <View className="flex-row justify-between items-end">
                  <Text className="text-base font-medium text-[#3f4941]">Fill Level</Text>
                  <Text className="text-2xl font-bold text-[#00522d]">12%</Text>
                </View>
                <View className="h-3 w-full bg-white/50 rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]/60 rounded-full" style={{ width: '12%' }} />
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-2">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="battery-5-bar" size={24} color="#00522d" />
                  <Text className="text-sm font-bold text-[#3f4941]">75% Battery</Text>
                </View>
                <View className="bg-[#00522d] px-4 py-1.5 rounded-full shadow-sm">
                  <Text className="text-sm font-bold text-white">View Map</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Bin 4 */}
          <TouchableOpacity onPress={() => router.push('/(staff)/bins/BIN-0567')} className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm active:scale-95 mb-10">
            <View className="flex-row justify-between items-start mb-3">
              <View>
                <Text className="text-[12px] font-bold text-[#6f7a70] tracking-wider uppercase mb-1">#BIN-0567</Text>
                <Text className="text-2xl font-bold text-[#0d1e25]">Athletic Center Lobby</Text>
              </View>
              <View className="px-3 py-1 rounded-full bg-[#d4e5ef]">
                <Text className="text-xs font-bold text-[#3f4941]">General</Text>
              </View>
            </View>
            <View className="gap-4">
              <View className="gap-2">
                <View className="flex-row justify-between items-end">
                  <Text className="text-base font-medium text-[#3f4941]">Fill Level</Text>
                  <Text className="text-2xl font-bold text-[#2eb872]">68%</Text>
                </View>
                <View className="h-3 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                  <View className="h-full bg-[#2eb872] rounded-full" style={{ width: '68%' }} />
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-2">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="battery-full" size={24} color="#2eb872" />
                  <Text className="text-sm font-bold text-[#3f4941]">98% Battery</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Text className="text-sm font-bold text-[#00522d]">Details</Text>
                  <MaterialIcons name="arrow-forward-ios" size={16} color="#00522d" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity className="absolute right-6 bottom-24 w-14 h-14 bg-[#00522d] rounded-2xl shadow-lg items-center justify-center z-50 active:scale-90">
        <MaterialIcons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-[#f4faff] border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-full">
          <MaterialIcons name="dashboard" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-5 py-1 active:scale-90">
          <MaterialIcons name="local-shipping" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1] mt-1">Logistics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-full">
          <MaterialIcons name="map" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Map</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-full">
          <MaterialIcons name="settings" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70] mt-1">Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
