import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Slider from '@react-native-community/slider';

export default function AIInsights() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [proximityWeight, setProximityWeight] = useState(0.65);
  const [compatibilityWeight, setCompatibilityWeight] = useState(0.82);

  return (
    <View className="flex-1 bg-[#f8f9fa]">
      {/* Top Navigation Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f8f9fa] border-b border-[#c1c8c2] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-2">
          <Ionicons name="leaf" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="p-2 hover:bg-[#e7e8e9] rounded-full">
            <Ionicons name="notifications" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#1b4332] items-center justify-center">
            <Text className="text-white text-xs font-bold">AI</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Screen Header & Context */}
        <View className="mb-6">
          <Text className="text-[10px] text-[#002d1c] uppercase tracking-widest font-bold mb-1">Analytics Dashboard</Text>
          <Text className="text-3xl font-bold text-[#012d1d]">AI Insights</Text>
          <Text className="text-xs text-[#414844] mt-1">Monitoring model health and fine-tuning match accuracy for the Upcycle ecosystem.</Text>
        </View>

        {/* Bento Grid: Model Health & Accuracy */}
        <View className="gap-4 mb-6">
          
          {/* Accuracy Chart Card */}
          <View className="bg-white/85 border border-[#e1e3e4] rounded-xl p-5 shadow-sm">
            <View className="flex-row justify-between items-start mb-4">
              <View>
                <Text className="text-lg font-bold text-[#191c1d]">Match-Score Accuracy</Text>
                <Text className="text-xs text-[#414844]">Real-time prediction drift</Text>
              </View>
              <View className="bg-[#cce6d0] px-2 py-1 rounded-full">
                <Text className="text-[10px] font-bold text-[#506856]">98.2%</Text>
              </View>
            </View>

            <View className="h-32 justify-end mb-4">
              <View className="w-full h-20 bg-[#f3f4f5] rounded-t-sm justify-center items-center">
                <Ionicons name="stats-chart" size={48} color="#1b4332" />
              </View>
            </View>

            <View className="flex-row justify-between border-t border-[#c1c8c2] pt-3">
              <View className="items-center">
                <Text className="text-[10px] text-[#717973] uppercase mb-1">Precision</Text>
                <Text className="text-sm font-bold text-[#012d1d]">0.94</Text>
              </View>
              <View className="items-center">
                <Text className="text-[10px] text-[#717973] uppercase mb-1">Recall</Text>
                <Text className="text-sm font-bold text-[#012d1d]">0.91</Text>
              </View>
              <View className="items-center">
                <Text className="text-[10px] text-[#717973] uppercase mb-1">F1 Score</Text>
                <Text className="text-sm font-bold text-[#012d1d]">0.92</Text>
              </View>
            </View>
          </View>

          {/* Health Status & Alerts */}
          <View className="flex-row gap-4">
            
            <View className="flex-1 bg-white border border-[#c1c8c2] rounded-xl p-4 justify-between h-32">
              <Ionicons name="heart" size={24} color="#00452e" />
              <View>
                <Text className="text-[10px] text-[#414844] uppercase mb-1">Model Health</Text>
                <Text className="text-lg font-bold text-[#0e5138]">Optimal</Text>
              </View>
            </View>

            <View className="flex-1 bg-white border border-[#c1c8c2] rounded-xl p-4 justify-between h-32">
              <Ionicons name="warning-outline" size={24} color="#ba1a1a" />
              <View>
                <Text className="text-[10px] text-[#414844] uppercase mb-1">Latency</Text>
                <Text className="text-lg font-bold text-[#191c1d]">142ms</Text>
              </View>
            </View>

          </View>
        </View>

        {/* Algorithm Tuning Sliders */}
        <View className="mb-6 gap-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Ionicons name="options" size={20} color="#012d1d" />
              <Text className="text-lg font-bold text-[#012d1d]">Algorithm Tuning</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-xs font-bold text-[#012d1d] underline">Reset Defaults</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-[#f3f4f5] rounded-xl p-6 gap-8">
            
            {/* Proximity Weight */}
            <View className="gap-2">
              <View className="flex-row justify-between items-center mb-2">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="location" size={18} color="#4c6452" />
                  <Text className="text-sm font-bold text-[#191c1d]">Proximity Weight</Text>
                </View>
                <View className="bg-[#1b4332] px-2 py-0.5 rounded">
                  <Text className="text-[10px] font-bold text-[#86af99]">{proximityWeight.toFixed(2)}</Text>
                </View>
              </View>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                value={proximityWeight}
                onValueChange={setProximityWeight}
                minimumTrackTintColor="#1b4332"
                maximumTrackTintColor="#e1e3e4"
                thumbTintColor="#1b4332"
              />
              <Text className="text-xs text-[#414844]">Increases priority of geographically closer matches for carbon reduction.</Text>
            </View>

            {/* Compatibility Weight */}
            <View className="gap-2">
              <View className="flex-row justify-between items-center mb-2">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="hand-right" size={18} color="#4c6452" />
                  <Text className="text-sm font-bold text-[#191c1d]">Compatibility Weight</Text>
                </View>
                <View className="bg-[#1b4332] px-2 py-0.5 rounded">
                  <Text className="text-[10px] font-bold text-[#86af99]">{compatibilityWeight.toFixed(2)}</Text>
                </View>
              </View>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                value={compatibilityWeight}
                onValueChange={setCompatibilityWeight}
                minimumTrackTintColor="#1b4332"
                maximumTrackTintColor="#e1e3e4"
                thumbTintColor="#1b4332"
              />
              <Text className="text-xs text-[#414844]">Focuses on material-matching synergy and user historical preferences.</Text>
            </View>

          </View>

          <TouchableOpacity className="w-full py-4 bg-[#012d1d] rounded-xl items-center justify-center shadow-sm">
            <Text className="text-lg font-bold text-white">Apply Tuning Parameters</Text>
          </TouchableOpacity>
        </View>

        {/* System Logs / Recent Decisions */}
        <View className="mb-6 gap-3">
          <Text className="text-lg font-bold text-[#012d1d]">Live Decisions</Text>
          
          <View className="gap-2">
            
            {/* Decision Item 1 */}
            <View className="bg-white border border-[#c1c8c2] p-3 rounded-lg flex-row items-center justify-between gap-4">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded bg-[#edeeef] items-center justify-center">
                  <Ionicons name="sync" size={24} color="#717973" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#191c1d]">ID: #9482-Match</Text>
                  <Text className="text-xs text-[#414844]">Nylon 6,6 → Textile Hub</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[10px] text-[#0e5138] font-bold">Match: 0.98</Text>
                <Text className="text-[10px] text-[#717973]">2m ago</Text>
              </View>
            </View>

            {/* Decision Item 2 */}
             <View className="bg-white border border-[#c1c8c2] p-3 rounded-lg flex-row items-center justify-between gap-4">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded bg-[#edeeef] items-center justify-center">
                  <Ionicons name="sync" size={24} color="#717973" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#191c1d]">ID: #9483-Match</Text>
                  <Text className="text-xs text-[#414844]">Cardboard → Packaging Hub</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[10px] text-[#0e5138] font-bold">Match: 0.95</Text>
                <Text className="text-[10px] text-[#717973]">5m ago</Text>
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}
