import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddEditBuildingMobile() {
  const router = useRouter();
  const [animatedWidth, setAnimatedWidth] = useState('0%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth('84%');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-[#9cf6ba] overflow-hidden items-center justify-center">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4GJOw_vhrNdIhmac05uIaCLz9-sbsovzLB1SEhe8HomY_qA0vD-bmVai2NJuXs35tNZHonTN5y37icrN4HcfNWTlH2uGkTI1WfThRCYxV3_23tGsBlwU-pxmsyLl7gHPwTdywdew40utKv8k_mWY2X67NEKKM1tt80dRcLA-rEjwv_jFyDML4cGxqZM0_NCXs1NDpLqe5ZELQaIakfac0IU5cDdO6MR2sZI29_MDw-SSoM33NOIDSRE1S6sgPu2yGOolD5TKNCRI' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#3f4941" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Breadcrumb / Page Title */}
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <Text className="text-[12px] font-bold text-[#6f7a70] uppercase tracking-widest mb-1">Property Setup</Text>
            <Text className="text-2xl font-bold text-[#00522d]">Add/Edit Building</Text>
          </View>
          <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 rounded-full bg-[#d9ebf5] items-center justify-center active:scale-95">
            <MaterialIcons name="close" size={24} color="#00522d" />
          </TouchableOpacity>
        </View>

        {/* Efficiency Projection Card */}
        <View className="p-6 rounded-[24px] bg-[#00522d] mb-6 shadow-sm overflow-hidden">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-sm font-medium text-[#9cf6ba] opacity-90">Efficiency Score Projection</Text>
              <Text className="text-5xl font-bold text-white tracking-tight">84<Text className="text-2xl text-white/80">/100</Text></Text>
            </View>
            <View className="bg-[#006d3e] px-3 py-1 rounded-full flex-row items-center gap-1">
              <MaterialIcons name="trending-up" size={16} color="#92ecb1" />
              <Text className="text-xs font-bold text-[#92ecb1]">+12%</Text>
            </View>
          </View>
          <View className="h-2 w-full bg-[#006d3e] rounded-full overflow-hidden">
            <View className="h-full bg-[#9cf6ba]" style={{ width: animatedWidth }} />
          </View>
          <Text className="mt-4 text-base text-[#80d99f] italic">
            Based on current zonal definitions and square footage.
          </Text>
        </View>

        {/* General Info Form */}
        <View className="mb-6">
          <View className="flex-row items-center gap-2 mb-2">
            <MaterialIcons name="info" size={24} color="#00522d" />
            <Text className="text-xl font-bold text-[#0d1e25]">General Information</Text>
          </View>
          <View className="gap-4">
            <View className="gap-1.5">
              <Text className="text-sm font-medium text-[#6f7a70] ml-1">Building Name</Text>
              <TextInput 
                className="w-full px-4 py-3 bg-white border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25]"
                defaultValue="Solaris Research Center"
                placeholderTextColor="#6f7a7080"
              />
            </View>
            <View className="flex-row gap-4">
              <View className="flex-1 gap-1.5">
                <Text className="text-sm font-medium text-[#6f7a70] ml-1">Max Occupancy</Text>
                <TextInput 
                  className="w-full px-4 py-3 bg-white border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25]"
                  defaultValue="1200"
                  keyboardType="numeric"
                />
              </View>
              <View className="flex-1 gap-1.5">
                <Text className="text-sm font-medium text-[#6f7a70] ml-1">Total Sq Ft</Text>
                <TextInput 
                  className="w-full px-4 py-3 bg-white border border-[#bec9be]/50 rounded-xl text-base text-[#0d1e25]"
                  defaultValue="45000"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Floor Plan Upload */}
        <View className="mb-6">
          <View className="flex-row items-center gap-2 mb-2">
            <MaterialIcons name="layers" size={24} color="#00522d" />
            <Text className="text-xl font-bold text-[#0d1e25]">Floor Plans</Text>
          </View>
          <TouchableOpacity className="w-full h-48 rounded-[24px] overflow-hidden border-2 border-dashed border-[#bec9be]/50 items-center justify-center bg-[#e7f6ff] active:bg-[#d9ebf5] relative">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0uPZcII94h9fZrP0s4-D2YEsa-JCWL44dtSb77Q_FKLnJbeVNSz8C39lqmhSopDR9n_gDbXgpBV173byj52XiCMTcHzAgJPc9c0IxedjOyC2bpqJ63QX-29tidva9ZsguLHp_OSdlOiRNqJcgh2T8R6Qa2f0Q4ZLjvzE1v5Kq47GpEBQ3z1HfgQdNMHB_2R3fXPX-RLQjTR448MXsQ9PK2i40EblKZknUkAtjfKg4MNxK3MPMuZBDRDgmunUczHqM4V-eQD8KYgE' }}
              className="absolute inset-0 w-full h-full opacity-10"
              resizeMode="cover"
            />
            <MaterialIcons name="upload-file" size={48} color="#00522d" className="mb-2" />
            <Text className="text-sm font-medium text-[#0d1e25]">Drag & drop or <Text className="text-[#00522d] font-bold">Browse</Text></Text>
            <Text className="text-xs font-bold text-[#6f7a70] mt-1">Supports PDF, DWG, SVG</Text>
          </TouchableOpacity>
        </View>

        {/* Zonal Definition List */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="hub" size={24} color="#00522d" />
              <Text className="text-xl font-bold text-[#0d1e25]">Zonal Definition</Text>
            </View>
            <TouchableOpacity className="flex-row items-center gap-1">
              <MaterialIcons name="add-circle" size={18} color="#00522d" />
              <Text className="text-sm font-medium text-[#00522d]">Add Zone</Text>
            </TouchableOpacity>
          </View>
          
          <View className="gap-3">
            <View className="p-4 rounded-xl bg-white border border-[#bec9be]/30 flex-row items-center justify-between shadow-sm">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-lg bg-[#bdefbf] items-center justify-center">
                  <MaterialIcons name="ac-unit" size={24} color="#24502c" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-[#0d1e25]">HVAC Zone A</Text>
                  <Text className="text-xs font-bold text-[#6f7a70]">Laboratory Wing • 12,000 sq ft</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <TouchableOpacity className="p-2 active:opacity-70">
                  <MaterialIcons name="edit" size={20} color="#6f7a70" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 active:opacity-70">
                  <MaterialIcons name="delete" size={20} color="#6f7a70" />
                </TouchableOpacity>
              </View>
            </View>

            <View className="p-4 rounded-xl bg-white border border-[#bec9be]/30 flex-row items-center justify-between shadow-sm">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-lg bg-[#d9e6da] items-center justify-center">
                  <MaterialIcons name="lightbulb" size={24} color="#556158" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-[#0d1e25]">Lighting Zone 1</Text>
                  <Text className="text-xs font-bold text-[#6f7a70]">Open Office Area • 8,500 sq ft</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <TouchableOpacity className="p-2 active:opacity-70">
                  <MaterialIcons name="edit" size={20} color="#6f7a70" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 active:opacity-70">
                  <MaterialIcons name="delete" size={20} color="#6f7a70" />
                </TouchableOpacity>
              </View>
            </View>

            <View className="p-4 rounded-xl bg-white/70 border border-[#a5d6a7]/30 flex-row items-center justify-between shadow-sm">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-lg bg-[#80d99f] items-center justify-center">
                  <MaterialIcons name="water-drop" size={24} color="#00522d" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-[#0d1e25]">Hydraulic Zone</Text>
                  <Text className="text-xs font-bold text-[#6f7a70]">Utility Core • 4,200 sq ft</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <TouchableOpacity className="p-2 active:opacity-70">
                  <MaterialIcons name="edit" size={20} color="#6f7a70" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 active:opacity-70">
                  <MaterialIcons name="delete" size={20} color="#6f7a70" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Save Actions */}
        <View className="flex-row gap-4 pt-6">
          <TouchableOpacity className="flex-1 py-4 rounded-full border border-[#00522d] items-center justify-center active:bg-[#00522d]/5">
            <Text className="text-sm font-medium text-[#00522d]">Save Draft</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-4 rounded-full bg-[#00522d] items-center justify-center active:scale-95 shadow-sm">
            <Text className="text-sm font-medium text-white">Deploy Updates</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity className="items-center active:scale-90 p-2">
          <MaterialIcons name="dashboard" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 p-2">
          <MaterialIcons name="delete" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 p-2">
          <MaterialIcons name="bolt" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="domain" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1]">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 p-2">
          <MaterialIcons name="track-changes" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
