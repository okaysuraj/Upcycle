import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusReportsMobile() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('impact');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsReady(true);
      setTimeout(() => {
        setIsReady(false);
      }, 2000);
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border-2 border-[#9cf6ba] bg-[#006d3e] items-center justify-center overflow-hidden">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDanHFfyy6xG9zXi7u9uD_rJGuUO4Qcu0yp9yCLJj_662FTKJdBDQA_w6Sq1p2lE5vrkZ8BFHLByFGeMfCPQbH1_f2GB5p0N-kPDecwudBVrFOJ3cjaLCPY0uB7cmtShIuIcjf6dNXIcl1AiMGQ3QSjlZBftRQjSZDzdk_nNM9xevWO6-2fqAeqEwfi_8pltECIvPREIXzfWElmyrXmIlr2oEUw6YUMmrh-2PIMCLpN7p-3FBpWPwF5Gu6z9_P2NtDLFTyyfsnXZkE' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">EcoCampus Admin</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#6f7a70" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Carbon Offset Summary */}
        <View className="bg-white/70 rounded-[24px] p-5 border border-[#a5d6a7]/30 shadow-sm relative overflow-hidden mb-8">
          <View className="z-10">
            <Text className="text-[12px] font-bold text-[#00522d] uppercase tracking-widest mb-1">Carbon Offset Performance</Text>
            <View className="flex-row items-end justify-between">
              <View>
                <Text className="text-[32px] font-bold text-[#0d1e25]">
                  1,284.5 <Text className="text-base text-[#6f7a70]">MT CO2e</Text>
                </Text>
                <View className="flex-row items-center gap-1 mt-1">
                  <MaterialIcons name="trending-up" size={18} color="#2eb872" />
                  <Text className="text-sm font-medium text-[#2eb872]">+12% vs last year</Text>
                </View>
              </View>
              <View className="w-16 h-16 rounded-full border-4 border-[#00522d]/20 items-center justify-center">
                <MaterialIcons name="eco" size={32} color="#00522d" />
              </View>
            </View>
          </View>
          <MaterialIcons name="forest" size={120} color="#0d1e251a" className="absolute -right-4 -bottom-4" />
        </View>

        {/* Generate Report */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Generate Report</Text>
          <View className="gap-3">
            <TouchableOpacity 
              onPress={() => setSelectedType('impact')}
              className={`flex-row items-center gap-4 p-4 bg-white rounded-[24px] shadow-sm active:scale-95 border ${selectedType === 'impact' ? 'border-2 border-[#00522d]' : 'border border-[#bec9be]/30'}`}
            >
              <View className="w-12 h-12 rounded-xl bg-[#006d3e] items-center justify-center">
                <MaterialIcons name="analytics" size={24} color="#92ecb1" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-[#0d1e25]">Impact Report</Text>
                <Text className="text-sm font-medium text-[#3f4941]">Carbon offset & footprint data</Text>
              </View>
              <MaterialIcons name="check-circle" size={24} color={selectedType === 'impact' ? '#00522d' : 'transparent'} />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => setSelectedType('progress')}
              className={`flex-row items-center gap-4 p-4 bg-white rounded-[24px] shadow-sm active:scale-95 border ${selectedType === 'progress' ? 'border-2 border-[#00522d]' : 'border border-[#bec9be]/30'}`}
            >
              <View className="w-12 h-12 rounded-xl bg-[#d9e6da] items-center justify-center">
                <MaterialIcons name="query-stats" size={24} color="#5b675e" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-[#0d1e25]">Progress Report</Text>
                <Text className="text-sm font-medium text-[#3f4941]">Sustainability goal tracking</Text>
              </View>
              <MaterialIcons name="check-circle" size={24} color={selectedType === 'progress' ? '#00522d' : 'transparent'} />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => setSelectedType('audit')}
              className={`flex-row items-center gap-4 p-4 bg-white rounded-[24px] shadow-sm active:scale-95 border ${selectedType === 'audit' ? 'border-2 border-[#00522d]' : 'border border-[#bec9be]/30'}`}
            >
              <View className="w-12 h-12 rounded-xl bg-[#d9ebf5] items-center justify-center">
                <MaterialIcons name="fact-check" size={24} color="#3f4941" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-[#0d1e25]">Audit Report</Text>
                <Text className="text-sm font-medium text-[#3f4941]">Compliance & waste verification</Text>
              </View>
              <MaterialIcons name="check-circle" size={24} color={selectedType === 'audit' ? '#00522d' : 'transparent'} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Parameters */}
        <View className="bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm mb-8">
          <View className="border-b border-[#bec9be]/20 pb-2 mb-4">
            <Text className="text-lg font-bold text-[#0d1e25]">Parameters</Text>
          </View>
          
          <View className="mb-4">
            <Text className="text-[12px] font-bold text-[#00522d] uppercase tracking-wide mb-2">Date Range</Text>
            <View className="flex-row gap-2">
              <TouchableOpacity className="flex-1 py-2 rounded-full border border-[#00522d] bg-[#006d3e]/10 items-center">
                <Text className="text-sm font-bold text-[#00522d]">Past Year</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 py-2 rounded-full border border-[#bec9be] items-center">
                <Text className="text-sm font-bold text-[#3f4941]">Q3 2023</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 py-2 rounded-full border border-[#bec9be] items-center">
                <Text className="text-sm font-bold text-[#3f4941]">Custom</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-[12px] font-bold text-[#00522d] uppercase tracking-wide mb-2">Export Format</Text>
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 p-3 border-2 border-[#00522d] rounded-xl bg-[#006d3e]/5">
                <MaterialIcons name="picture-as-pdf" size={24} color="#00522d" />
                <Text className="text-sm font-bold text-[#0d1e25]">PDF Doc</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 p-3 border border-[#bec9be] rounded-xl">
                <MaterialIcons name="insert-drive-file" size={24} color="#6f7a70" />
                <Text className="text-sm font-bold text-[#0d1e25]">CSV Sheet</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            onPress={handleGenerate}
            disabled={isGenerating || isReady}
            className={`w-full py-4 rounded-full shadow-lg flex-row items-center justify-center gap-2 active:scale-95 ${
              isReady ? 'bg-[#2eb872]' : 'bg-[#00522d]'
            }`}
          >
            {isGenerating ? (
              <MaterialIcons name="refresh" size={24} color="white" /> // Imagine this is spinning
            ) : isReady ? (
              <MaterialIcons name="check-circle" size={24} color="white" />
            ) : (
              <MaterialIcons name="auto-awesome" size={24} color="white" />
            )}
            <Text className="text-base font-bold text-white">
              {isGenerating ? 'Generating...' : isReady ? 'Ready!' : 'Generate Report'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Reports */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3 px-1">
            <Text className="text-2xl font-bold text-[#0d1e25]">Recent Reports</Text>
            <TouchableOpacity>
              <Text className="text-sm font-bold text-[#00522d]">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-3">
            <View className="flex-row items-center gap-4 p-4 bg-white rounded-[20px] border border-[#bec9be]/20 shadow-sm">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                <MaterialIcons name="description" size={20} color="#00522d" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-[#0d1e25]">Impact_Annual_2023.pdf</Text>
                <Text className="text-[10px] font-bold text-[#6f7a70] uppercase mt-0.5">Jan 12, 2024 • 4.2 MB</Text>
              </View>
              <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center bg-[#00522d]/5 active:bg-[#00522d]/10">
                <MaterialIcons name="download" size={20} color="#00522d" />
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center gap-4 p-4 bg-white rounded-[20px] border border-[#bec9be]/20 shadow-sm">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                <MaterialIcons name="table-view" size={20} color="#00522d" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-[#0d1e25]">Energy_Audit_Q4.csv</Text>
                <Text className="text-[10px] font-bold text-[#6f7a70] uppercase mt-0.5">Dec 20, 2023 • 1.1 MB</Text>
              </View>
              <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center bg-[#00522d]/5 active:bg-[#00522d]/10">
                <MaterialIcons name="download" size={20} color="#00522d" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>

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
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="bolt" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="domain" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1] mt-0.5">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
