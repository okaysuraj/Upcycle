import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusReportsMobile() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('impact');

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top AppBar */}
      <View className="flex-row justify-between items-center px-5 h-16 w-full bg-white/70 border-b border-[#bec9be]/30 shadow-sm z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-[#006d3e] flex items-center justify-center border-2 border-[#9cf6ba]">
            <Text className="font-bold text-[#92ecb1]">AD</Text>
          </View>
          <Text className="font-bold text-2xl text-[#00522d]">EcoCampus</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#3f4941" />
        </TouchableOpacity>
      </View>

      <View className="px-5 py-6 pb-32">
        {/* YD Carbon Offset Summary */}
        <View className="bg-white/70 p-5 rounded-3xl overflow-hidden relative border border-[#a5d6a7]/30 mb-6 shadow-sm">
          <View className="relative z-10">
             <Text className="text-xs font-bold text-[#00522d] uppercase tracking-widest mb-1">Carbon Offset Performance</Text>
             <View className="flex-row items-end justify-between">
                <View>
                   <Text className="text-3xl font-bold text-[#0d1e25]">1,284.5 <Text className="text-lg font-normal opacity-70">MT CO2e</Text></Text>
                   <View className="flex-row items-center gap-1 mt-1">
                      <MaterialIcons name="trending-up" size={18} color="#2eb872" />
                      <Text className="font-bold text-sm text-[#2eb872]">+12% vs last year</Text>
                   </View>
                </View>
                <View className="w-16 h-16 rounded-full border-4 border-[#00522d]/20 flex items-center justify-center">
                   <MaterialIcons name="eco" size={32} color="#00522d" />
                </View>
             </View>
          </View>
          <MaterialIcons name="forest" size={120} color="#0d1e25" className="absolute -right-4 -bottom-4 opacity-5" />
        </View>

        {/* Generation Flow Step 1: Report Type */}
        <View className="mb-6 space-y-3">
           <Text className="text-2xl font-bold text-[#0d1e25] px-1 mb-2">Generate Report</Text>
           
           <TouchableOpacity 
             onPress={() => setSelectedType('impact')}
             className={`flex-row items-center gap-4 p-4 bg-white rounded-3xl shadow-sm border-2 ${selectedType === 'impact' ? 'border-[#00522d]' : 'border-[#bec9be]/30'} mb-3`}
           >
              <View className="w-12 h-12 rounded-xl bg-[#006d3e] flex items-center justify-center">
                 <MaterialIcons name="analytics" size={24} color="#92ecb1" />
              </View>
              <View className="flex-1">
                 <Text className="text-lg font-bold text-[#0d1e25]">Impact Report</Text>
                 <Text className="text-sm font-bold text-[#3f4941]">Carbon offset & footprint data</Text>
              </View>
              {selectedType === 'impact' && <MaterialIcons name="check-circle" size={24} color="#00522d" />}
           </TouchableOpacity>

           <TouchableOpacity 
             onPress={() => setSelectedType('progress')}
             className={`flex-row items-center gap-4 p-4 bg-white rounded-3xl shadow-sm border-2 ${selectedType === 'progress' ? 'border-[#00522d]' : 'border-[#bec9be]/30'} mb-3`}
           >
              <View className="w-12 h-12 rounded-xl bg-[#d9e6da] flex items-center justify-center">
                 <MaterialIcons name="query-stats" size={24} color="#5b675e" />
              </View>
              <View className="flex-1">
                 <Text className="text-lg font-bold text-[#0d1e25]">Progress Report</Text>
                 <Text className="text-sm font-bold text-[#3f4941]">Sustainability goal tracking</Text>
              </View>
              {selectedType === 'progress' && <MaterialIcons name="check-circle" size={24} color="#00522d" />}
           </TouchableOpacity>

           <TouchableOpacity 
             onPress={() => setSelectedType('audit')}
             className={`flex-row items-center gap-4 p-4 bg-white rounded-3xl shadow-sm border-2 ${selectedType === 'audit' ? 'border-[#00522d]' : 'border-[#bec9be]/30'} mb-3`}
           >
              <View className="w-12 h-12 rounded-xl bg-[#d9ebf5] flex items-center justify-center">
                 <MaterialIcons name="fact-check" size={24} color="#3f4941" />
              </View>
              <View className="flex-1">
                 <Text className="text-lg font-bold text-[#0d1e25]">Audit Report</Text>
                 <Text className="text-sm font-bold text-[#3f4941]">Compliance & waste verification</Text>
              </View>
              {selectedType === 'audit' && <MaterialIcons name="check-circle" size={24} color="#00522d" />}
           </TouchableOpacity>
        </View>

        {/* Generation Flow Step 2: Parameters */}
        <View className="bg-white p-6 rounded-3xl shadow-sm border border-[#bec9be]/30 mb-8">
           <Text className="text-lg font-bold text-[#0d1e25] border-b border-[#bec9be]/20 pb-2 mb-4">Parameters</Text>
           
           <View className="mb-4">
              <Text className="text-xs font-bold text-[#00522d] uppercase tracking-wide mb-2">Date Range</Text>
              <View className="flex-row gap-2">
                 <TouchableOpacity className="flex-1 py-2 items-center rounded-full border border-[#00522d] bg-[#006d3e]/10">
                    <Text className="font-bold text-sm text-[#00522d]">Past Year</Text>
                 </TouchableOpacity>
                 <TouchableOpacity className="flex-1 py-2 items-center rounded-full border border-[#bec9be]">
                    <Text className="font-bold text-sm text-[#3f4941]">Q3 2023</Text>
                 </TouchableOpacity>
                 <TouchableOpacity className="flex-1 py-2 items-center rounded-full border border-[#bec9be]">
                    <Text className="font-bold text-sm text-[#3f4941]">Custom</Text>
                 </TouchableOpacity>
              </View>
           </View>

           <View className="mb-4">
              <Text className="text-xs font-bold text-[#00522d] uppercase tracking-wide mb-2">Export Format</Text>
              <View className="flex-row gap-3">
                 <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 p-3 border-2 border-[#00522d] rounded-xl bg-[#006d3e]/5">
                    <MaterialIcons name="picture-as-pdf" size={20} color="#00522d" />
                    <Text className="font-bold text-sm text-[#0d1e25]">PDF Doc</Text>
                 </TouchableOpacity>
                 <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 p-3 border border-[#bec9be] rounded-xl">
                    <Text className="font-bold text-sm text-[#3f4941]">CSV Sheet</Text>
                 </TouchableOpacity>
              </View>
           </View>

           <TouchableOpacity className="w-full py-4 bg-[#00522d] rounded-full shadow-lg flex-row items-center justify-center gap-2 mt-2">
              <MaterialIcons name="auto-awesome" size={20} color="white" />
              <Text className="text-white font-bold text-base">Generate Report</Text>
           </TouchableOpacity>
        </View>

        {/* Report History List */}
        <View className="mb-10">
           <View className="flex-row justify-between items-center px-1 mb-4">
              <Text className="text-2xl font-bold text-[#0d1e25]">Recent Reports</Text>
              <TouchableOpacity>
                 <Text className="text-[#00522d] font-bold text-sm">See All</Text>
              </TouchableOpacity>
           </View>

           <View className="flex-row items-center gap-4 p-4 bg-white rounded-3xl border border-[#bec9be]/20 shadow-sm mb-3">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center">
                 <MaterialIcons name="description" size={20} color="#00522d" />
              </View>
              <View className="flex-1">
                 <Text className="font-bold text-sm text-[#0d1e25]">Impact_Annual_2023.pdf</Text>
                 <Text className="text-[10px] font-bold text-[#3f4941] uppercase mt-0.5">Jan 12, 2024 • 4.2 MB</Text>
              </View>
              <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00522d]/5">
                 <MaterialIcons name="download" size={20} color="#00522d" />
              </TouchableOpacity>
           </View>

           <View className="flex-row items-center gap-4 p-4 bg-white rounded-3xl border border-[#bec9be]/20 shadow-sm mb-3">
              <View className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center">
                 <MaterialIcons name="table-view" size={20} color="#00522d" />
              </View>
              <View className="flex-1">
                 <Text className="font-bold text-sm text-[#0d1e25]">Energy_Audit_Q4.csv</Text>
                 <Text className="text-[10px] font-bold text-[#3f4941] uppercase mt-0.5">Dec 20, 2023 • 1.1 MB</Text>
              </View>
              <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00522d]/5">
                 <MaterialIcons name="download" size={20} color="#00522d" />
              </TouchableOpacity>
           </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
