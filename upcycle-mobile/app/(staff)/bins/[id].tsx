import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Svg, { Circle } from 'react-native-svg';

export default function BinDetailMobile() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const binId = id || 'B-204';

  const radius = 100;
  const strokeWidth = 12;
  const circumference = radius * 2 * Math.PI;
  const fillPercent = 75;
  const strokeDashoffset = circumference - (fillPercent / 100) * circumference;

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-[#f4faff] border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="active:scale-95">
            <MaterialIcons name="arrow-back" size={24} color="#3f4941" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#00522d]">Bin {binId}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
          <View className="w-8 h-8 rounded-full border border-[#00522d]/20 overflow-hidden bg-[#006d3e]">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkAAdq6pccHM3Q2pz_khraeiGH8LxWVS9EIkcZdlhh2moLfFKikb-pn2LCGIQ2TyJWMKqqlfFPQQJ167hb2p7zDmE1mkpVQJDDXppa98QMPH-ABuDbFp48JVMF4EZOkpOdyhKMo6SJWgKrWRRiAEO2xBeARNIraa6J-Pxq1qwpnqic4aFKxAs5SPcG1v0Utc0jj1Mxj94RRTnJeAcK3PtQ0dxHFS8eyTsBhs5OX-Mj_uS28mfmBAXwhum4-CS3JtJDM2PaFBSU_1k' }}
              className="w-full h-full"
            />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Fill Level Gauge */}
        <View className="items-center py-4 mb-6">
          <View className="relative w-64 h-64 items-center justify-center">
            <Svg height="256" width="256" viewBox="0 0 256 256">
              <Circle
                cx="128"
                cy="128"
                r={radius}
                stroke="#d9e6da"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <Circle
                cx="128"
                cy="128"
                r={radius}
                stroke="#00522d"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                origin="128, 128"
                rotation="-90"
              />
            </Svg>
            <View className="absolute items-center justify-center">
              <Text className="text-[48px] font-bold text-[#00522d]">{fillPercent}%</Text>
              <Text className="text-sm font-bold text-[#3f4941] uppercase tracking-widest">Full</Text>
            </View>
          </View>
          <View className="flex-row gap-4 mt-2">
            <View className="px-3 py-1 bg-[#dff1fb] rounded-full flex-row items-center gap-1">
              <MaterialIcons name="delete" size={18} color="#00522d" />
              <Text className="text-xs font-bold text-[#00522d]">120L Capacity</Text>
            </View>
            <View className="px-3 py-1 bg-[#ffdad6] rounded-full flex-row items-center gap-1">
              <MaterialIcons name="priority-high" size={18} color="#ba1a1a" />
              <Text className="text-xs font-bold text-[#93000a]">Critical Threshold</Text>
            </View>
          </View>
        </View>

        {/* Stats Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
          {/* Location Card */}
          <View className="w-full bg-white rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm flex-row items-start justify-between">
            <View>
              <Text className="text-xs font-bold text-[#3f4941] mb-2">LOCATION</Text>
              <Text className="text-2xl font-bold text-[#0d1e25]">North Campus Quad</Text>
              <Text className="text-base text-[#6f7a70]">Zone A • 42.36° N, 71.05° W</Text>
            </View>
            <View className="w-16 h-16 rounded-xl bg-[#dff1fb] overflow-hidden">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY7X-e9c_0S6bC5FwBirrV_md4MAX1najD3NB6WR3FU-xvyCpewAyLyo52IUverTGwFHqsOxoxtB8COaXAdkxgxoaH5NH1zoWHEi-L22XqYpN9x_ztYorQF0PxJJ92ISTtyPnt1twiWigMX7fMWxXybr5yds3V7XdE6hYVUVApJSRUdXd44QZoMb1F2b5aGG14p1x8E0mfEV_nQkmZykhxnpPPC1u9sIJ87CrUIbTAcsg7DxEJbcrFNdDRyxOaEAG07aqf65FbDlQ' }}
                className="w-full h-full"
              />
            </View>
          </View>

          {/* Battery */}
          <View className="w-[48%] bg-white/70 border border-[#a5d6a7]/30 rounded-[12px] p-4 flex-col justify-between">
            <Text className="text-xs font-bold text-[#3f4941] mb-2 uppercase">Battery</Text>
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="battery-charging-80" size={24} color="#00522d" />
              <Text className="text-2xl font-bold text-[#0d1e25]">82%</Text>
            </View>
            <View className="w-full bg-[#d9e6da] h-1.5 rounded-full mt-2 overflow-hidden">
              <View className="bg-[#2eb872] h-full rounded-full" style={{ width: '82%' }} />
            </View>
          </View>

          {/* Signal */}
          <View className="w-[48%] bg-white/70 border border-[#a5d6a7]/30 rounded-[12px] p-4 flex-col justify-between">
            <Text className="text-xs font-bold text-[#3f4941] mb-2 uppercase">Signal</Text>
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="signal-cellular-alt" size={24} color="#00522d" />
              <Text className="text-2xl font-bold text-[#0d1e25]">Strong</Text>
            </View>
            <Text className="text-xs font-bold text-[#6f7a70] mt-2">-65 dBm (5G)</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-xs font-bold text-[#3f4941] ml-1 uppercase mb-3">Maintenance Actions</Text>
          <View className="flex-row gap-3">
            <TouchableOpacity className="flex-1 bg-[#00522d] py-4 rounded-full shadow-lg active:scale-95 flex-row items-center justify-center gap-2">
              <MaterialIcons name="delete-sweep" size={20} color="white" />
              <Text className="text-sm font-bold text-white">Manual Empty</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-[#d4e5ef] py-4 rounded-full border border-[#bec9be]/30 active:scale-95 flex-row items-center justify-center gap-2">
              <MaterialIcons name="group" size={20} color="#0d1e25" />
              <Text className="text-sm font-bold text-[#0d1e25]">Alert Staff</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Collection History */}
        <View className="bg-white rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xs font-bold text-[#3f4941] uppercase">Collection History</Text>
            <Text className="text-xs font-bold text-[#00522d]">Last 7 Days</Text>
          </View>
          <View className="flex-row items-end justify-between h-24 gap-2 px-1">
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '40%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '60%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '35%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '90%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '55%' }} />
            <View className="flex-1 bg-[#d9e6da] rounded-t-lg" style={{ height: '75%' }} />
            <View className="flex-1 bg-[#006d3e] rounded-t-lg shadow-md" style={{ height: '85%' }} />
          </View>
          <View className="flex-row justify-between mt-2 px-1">
            <Text className="text-[10px] font-bold text-[#6f7a70]">Mon</Text>
            <Text className="text-[10px] font-bold text-[#6f7a70]">Tue</Text>
            <Text className="text-[10px] font-bold text-[#6f7a70]">Wed</Text>
            <Text className="text-[10px] font-bold text-[#6f7a70]">Thu</Text>
            <Text className="text-[10px] font-bold text-[#6f7a70]">Fri</Text>
            <Text className="text-[10px] font-bold text-[#6f7a70]">Sat</Text>
            <Text className="text-[10px] font-bold text-[#00522d]">Today</Text>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-[#f4faff] border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-xl">
          <MaterialIcons name="dashboard" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-xl">
          <MaterialIcons name="local-shipping" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Logistics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-xl">
          <MaterialIcons name="map" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Map</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-5 py-1 rounded-xl">
          <MaterialIcons name="settings" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
