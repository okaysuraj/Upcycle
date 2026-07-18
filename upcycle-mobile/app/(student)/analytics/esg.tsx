import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function ESGReportViewer() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { authFetch } = useAuth();
  
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authFetch('/esg/corporate');
        if (response.ok) {
          const json = await response.json();
          setData(json.globalImpact);
        }
      } catch (error) {
        console.error("Failed to fetch ESG data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  if (loading) {
    return (
      <View className="flex-1 bg-[#f4faff] justify-center items-center">
        <ActivityIndicator size="large" color="#00522d" />
        <Text className="text-[#3f4941] mt-4">Loading ESG Report...</Text>
      </View>
    );
  }

  // Fallbacks if data fails
  const impact = data || {
    totalCarbonEmissions: 0,
    totalWaterGallons: 0,
    totalEnergyKwh: 0,
    totalWasteDivertedKg: 0,
    estimatedCarbonOffsetKg: 0
  };

  const carbonOffsetPct = impact.estimatedCarbonOffsetKg ? ((impact.estimatedCarbonOffsetKg / 1000) * 100).toFixed(1) : '0.0';
  const energyMwh = (impact.totalEnergyKwh / 1000).toFixed(1);
  const waterKl = (impact.totalWaterGallons * 3.78541 / 1000).toFixed(1);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="p-2 rounded-full">
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-full">
            <Ionicons name="share-social-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Executive Summary Header */}
        <View className="mb-6">
          <Text className="text-[10px] font-bold text-[#00522d] tracking-widest uppercase mb-1">ESG Performance</Text>
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2 leading-tight">Corporate Report</Text>
          <Text className="text-base text-[#3f4941]">An overview of global sustainability targets, circular economy efficiency, and waste reduction benchmarks.</Text>
        </View>

        {/* Bento Metrics Grid */}
        <View className="gap-4 mb-6">
          
          {/* Key Metric Card */}
          <View className="bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-sm font-bold text-[#3f4941] mb-1">Estimated Carbon Offset</Text>
                <View className="flex-row items-end gap-2">
                  <Text className="text-5xl font-bold text-[#00522d] leading-none">{impact.estimatedCarbonOffsetKg.toLocaleString()}kg</Text>
                  <View className="flex-row items-center gap-1 mb-1">
                    <Ionicons name="trending-up" size={16} color="#2eb872" />
                    <Text className="text-[#2eb872] font-bold text-sm">+{carbonOffsetPct}%</Text>
                  </View>
                </View>
              </View>
              <View className="w-12 h-12 bg-[#dff1fb] rounded-full items-center justify-center">
                <Ionicons name="leaf" size={24} color="#00522d" />
              </View>
            </View>
            
            {/* Fake Chart */}
            <View className="h-32 flex-row items-end justify-between gap-1">
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[40%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[55%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[50%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[75%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[65%]" />
              <View className="flex-1 bg-[#dff1fb] rounded-t-lg h-[85%]" />
              <View className="flex-1 bg-[#00522d] rounded-t-lg h-[94%]" />
            </View>
          </View>

          {/* Secondary Status Card */}
          <View className="bg-white/70 p-6 rounded-xl border border-[#a5d6a7]/30 shadow-sm justify-between">
            <View>
              <Text className="text-sm font-bold text-[#24502c]">Compliance Status</Text>
              <View className="mt-4 flex-row items-center gap-4">
                <View className="w-16 h-16 relative">
                  <View className="w-full h-full rounded-full border-4 border-[#d4e5ef]" />
                  <View className="absolute w-full h-full rounded-full border-4 border-[#00522d]" style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent', transform: [{ rotate: '45deg' }] }} />
                  <View className="absolute inset-0 items-center justify-center">
                    <Text className="text-[10px] font-bold text-[#0d1e25]">85%</Text>
                  </View>
                </View>
                <Text className="text-[10px] text-[#3f4941] flex-1">Tier-1 Regulatory standards met.</Text>
              </View>
            </View>
            <TouchableOpacity className="mt-4 w-full py-2 bg-white/50 border border-[#a5d6a7]/30 rounded-full items-center">
              <Text className="text-[#00522d] font-bold text-sm">View Details</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        {/* Detailed Metrics */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#0d1e25]">Circular Flow Analysis</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Text className="text-[#00522d] font-bold text-sm">Filter</Text>
              <Ionicons name="filter" size={16} color="#00522d" />
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            
            {/* Metric Row 1 */}
            <View className="flex-row items-center justify-between p-4 bg-white border border-[#bec9be]/30 rounded-xl shadow-sm">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-lg bg-[#bdefbf] items-center justify-center">
                  <Ionicons name="sync" size={20} color="#002109" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Waste Diverted</Text>
                  <Text className="text-[10px] text-[#3f4941]">Total recovered material</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#00522d]">{impact.totalWasteDivertedKg.toLocaleString()}kg</Text>
              </View>
            </View>

            {/* Metric Row 2 */}
            <View className="flex-row items-center justify-between p-4 bg-white border border-[#bec9be]/30 rounded-xl shadow-sm">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-lg bg-[#d9e6da] items-center justify-center">
                  <Ionicons name="water" size={20} color="#5b675e" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Water Recovery</Text>
                  <Text className="text-[10px] text-[#3f4941]">Recycled processing water</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#0d1e25]">{waterKl} kL</Text>
              </View>
            </View>

            {/* Metric Row 3 */}
            <View className="flex-row items-center justify-between p-4 bg-white border border-[#bec9be]/30 rounded-xl shadow-sm">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-lg bg-[#d9e6da] items-center justify-center">
                  <Ionicons name="flash" size={20} color="#5b675e" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#0d1e25]">Energy Consumed</Text>
                  <Text className="text-[10px] text-[#3f4941]">Net facility draw</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-bold text-[#0d1e25]">{energyMwh} MWh</Text>
              </View>
            </View>

          </View>
        </View>

        <TouchableOpacity className="w-full bg-[#006d3e] py-4 rounded-xl items-center justify-center mb-6">
          <Text className="text-white font-bold text-sm">Download PDF Report</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
