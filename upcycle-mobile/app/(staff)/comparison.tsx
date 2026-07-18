import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusComparisonMobile() {
  const router = useRouter();
  const [animatedProgress, setAnimatedProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border border-[#00522d]/20 overflow-hidden">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTqnIhuxZIB8G-idlqJtlVB2lhoafB88hZdDGog2xIEmsRvwIZ270bwy0yX1iwV5WHMKnbY_5b2hr_2Pgp2ShWu87It-ef-aMhLLsDJ3tKILZd8wPBU-Q3khGWOTrlSiVbKmCaVMTDYL5xv7sclVp34N-A0LKbu3sR5tsaytQdyJT4MWxrjU76tV_1XkzzuVoMvBLlTDagkZ2gud4nOgkRrAwU64eYVK7uXcxT_BB2Ztq8Z7KJFaJKGNej8asjigyH4bocwFiSd0U' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Dashboard Header */}
        <View className="mb-8">
          <Text className="text-sm font-medium text-[#3f4941] mb-1">Performance Benchmarks</Text>
          <Text className="text-2xl font-bold text-[#0d1e25]">Campus Comparison</Text>
        </View>

        {/* Metric Overview */}
        <View className="mb-6">
          <View className="flex-row justify-between items-end mb-2">
            <Text className="text-2xl font-bold text-[#00522d]">Metric Overview</Text>
            <Text className="text-xs font-bold text-[#3f4941]">Last 30 Days</Text>
          </View>

          {/* Waste Metric Card */}
          <View className="bg-white rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm mb-4">
            <View className="flex-row items-center gap-3 mb-4">
              <View className="w-10 h-10 bg-[#d9e6da] rounded-full items-center justify-center">
                <MaterialIcons name="delete" size={24} color="#5b675e" />
              </View>
              <Text className="text-xl font-bold text-[#0d1e25]">Waste Reduction</Text>
            </View>
            <View className="gap-4">
              <View className="gap-2">
                <View className="flex-row justify-between">
                  <Text className="text-sm font-medium text-[#0d1e25]">Central Zone</Text>
                  <Text className="text-sm font-bold text-[#0d1e25]">88%</Text>
                </View>
                <View className="h-3 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#00522d]" style={{ width: animatedProgress ? '88%' : '0%' }} />
                </View>
              </View>
              <View className="gap-2">
                <View className="flex-row justify-between">
                  <Text className="text-sm font-medium text-[#0d1e25]">East Zone</Text>
                  <Text className="text-sm font-bold text-[#0d1e25]">72%</Text>
                </View>
                <View className="h-3 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#006d3e]" style={{ width: animatedProgress ? '72%' : '0%' }} />
                </View>
              </View>
              <View className="gap-2">
                <View className="flex-row justify-between">
                  <Text className="text-sm font-medium text-[#0d1e25]">North Zone</Text>
                  <Text className="text-sm font-bold text-[#0d1e25]">64%</Text>
                </View>
                <View className="h-3 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#bec9be]" style={{ width: animatedProgress ? '64%' : '0%' }} />
                </View>
              </View>
            </View>
          </View>

          {/* Energy Metric Card */}
          <View className="bg-white rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm">
            <View className="flex-row items-center gap-3 mb-4">
              <View className="w-10 h-10 bg-[#bdefbf] rounded-full items-center justify-center">
                <MaterialIcons name="bolt" size={24} color="#002109" />
              </View>
              <Text className="text-xl font-bold text-[#0d1e25]">Energy Efficiency</Text>
            </View>
            <View className="gap-4">
              <View className="gap-2">
                <View className="flex-row justify-between">
                  <Text className="text-sm font-medium text-[#0d1e25]">North Zone</Text>
                  <Text className="text-sm font-bold text-[#0d1e25]">94%</Text>
                </View>
                <View className="h-3 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#3c6842]" style={{ width: animatedProgress ? '94%' : '0%' }} />
                </View>
              </View>
              <View className="gap-2">
                <View className="flex-row justify-between">
                  <Text className="text-sm font-medium text-[#0d1e25]">Central Zone</Text>
                  <Text className="text-sm font-bold text-[#0d1e25]">81%</Text>
                </View>
                <View className="h-3 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#556158]" style={{ width: animatedProgress ? '81%' : '0%' }} />
                </View>
              </View>
              <View className="gap-2">
                <View className="flex-row justify-between">
                  <Text className="text-sm font-medium text-[#0d1e25]">East Zone</Text>
                  <Text className="text-sm font-bold text-[#0d1e25]">78%</Text>
                </View>
                <View className="h-3 w-full bg-[#dff1fb] rounded-full overflow-hidden">
                  <View className="h-full bg-[#bec9be]" style={{ width: animatedProgress ? '78%' : '0%' }} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Rankings Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#00522d] mb-4">Top Performing Areas</Text>
          <View className="bg-white rounded-[24px] overflow-hidden border border-[#bec9be]/30 shadow-sm">
            <View className="p-4 border-b border-[#bec9be]/20 bg-[#e7f6ff] flex-row justify-between items-center">
              <Text className="text-xs font-bold text-[#0d1e25]">ZONE / DEPARTMENT</Text>
              <Text className="text-xs font-bold text-[#0d1e25]">SCORE</Text>
            </View>
            <View className="p-4 border-b border-[#bec9be]/10 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-lg bg-[#9cf6ba] items-center justify-center">
                  <Text className="text-sm font-bold text-[#00522d]">1</Text>
                </View>
                <View>
                  <Text className="text-base font-bold text-[#0d1e25]">Science Park (North)</Text>
                  <Text className="text-xs font-bold text-[#3f4941]">Efficiency: +12%</Text>
                </View>
              </View>
              <Text className="text-2xl font-bold text-[#00522d]">98</Text>
            </View>
            <View className="p-4 border-b border-[#bec9be]/10 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-lg bg-[#d9e6da] items-center justify-center">
                  <Text className="text-sm font-bold text-[#556158]">2</Text>
                </View>
                <View>
                  <Text className="text-base font-bold text-[#0d1e25]">Main Library (Central)</Text>
                  <Text className="text-xs font-bold text-[#3f4941]">Efficiency: +8%</Text>
                </View>
              </View>
              <Text className="text-2xl font-bold text-[#556158]">92</Text>
            </View>
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-lg bg-[#d9ebf5] items-center justify-center">
                  <Text className="text-sm font-bold text-[#3f4941]">3</Text>
                </View>
                <View>
                  <Text className="text-base font-bold text-[#0d1e25]">Innovation Hub (East)</Text>
                  <Text className="text-xs font-bold text-[#3f4941]">Efficiency: +4%</Text>
                </View>
              </View>
              <Text className="text-2xl font-bold text-[#3f4941]">85</Text>
            </View>
          </View>
        </View>

        {/* Spotlight */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#00522d] mb-4">Zone Spotlight</Text>
          <View className="bg-white/70 border border-[#a5d6a7]/30 rounded-[24px] p-6 relative overflow-hidden">
            <View className="z-10">
              <View className="self-start flex-row items-center gap-2 bg-[#00522d]/10 px-3 py-1 rounded-full mb-4">
                <View className="w-2 h-2 rounded-full bg-[#00522d]" />
                <Text className="text-xs font-bold text-[#00522d] uppercase tracking-wider">Top Reclaimer</Text>
              </View>
              <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Central Zone</Text>
              <Text className="text-base text-[#3f4941] mb-6 leading-relaxed">
                Central Zone has achieved a record-breaking 24% reduction in non-recyclable waste this quarter through the new 'Smart Bin' initiative.
              </Text>
              <View className="flex-row gap-4">
                <TouchableOpacity className="bg-[#00522d] px-6 py-3 rounded-full active:scale-95 shadow-sm">
                  <Text className="text-sm font-medium text-white">View Case Study</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center gap-2 px-4 py-3 active:opacity-70">
                  <MaterialIcons name="share" size={20} color="#00522d" />
                  <Text className="text-sm font-medium text-[#00522d]">Share</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#00522d]/5 rounded-full" />
            <MaterialIcons name="domain" size={120} color="#0d1e251a" className="absolute top-4 right-4" />
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity className="absolute right-6 bottom-28 w-14 h-14 bg-[#00522d] rounded-full shadow-lg items-center justify-center active:scale-90 z-40">
        <MaterialIcons name="add-chart" size={24} color="white" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="dashboard" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="delete" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="bolt" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1]">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="domain" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941]">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
