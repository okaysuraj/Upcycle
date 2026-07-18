import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';

interface CriticalBin {
  id: string;
  fillLevel: number;
  location: string;
}

interface WasteData {
  totalDailyWasteKg: number;
  recyclingRate: number;
  criticalBins: CriticalBin[];
  totalBins: number;
}
export default function WasteDashboard() {
  const router = useRouter();
  const { authFetch, user } = useAuth();
  
  const [wasteData, setWasteData] = useState<WasteData>({
    totalDailyWasteKg: 0,
    recyclingRate: 0,
    criticalBins: [],
    totalBins: 0,
  });
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await authFetch('/waste/stats');
        if (statsRes.ok) {
          const stats = await statsRes.json();
          setWasteData(stats);
        }

        const logsRes = await authFetch('/waste/logs');
        if (logsRes.ok) {
          const logsData = await logsRes.json();
          setLogs(logsData.slice(0, 5));
        }
      } catch (err) {
        console.error("Error fetching waste data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [authFetch]);

  if (loading) {
    return (
      <ScreenWrapper className="bg-[#f4faff] items-center justify-center">
        <Text className="text-[#00522d] font-bold">Loading dashboard...</Text>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top App Bar */}
      <View className="px-5 pt-12 pb-4 flex-row justify-between items-center bg-[#f4faff]">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="local-fire-department" size={28} color="#00522d" />
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 rounded-full hover:bg-[#d9e6da]/50">
            <MaterialIcons name="notifications" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center">
            <Text className="text-white font-bold text-xs">{user?.name?.substring(0,2).toUpperCase() || 'AD'}</Text>
          </View>
        </View>
      </View>

      <View className="px-5 py-2 pb-24">
        {/* Dashboard Header */}
        <View className="flex-row justify-between items-end mb-6">
          <View>
            <Text className="text-[#00522d] text-[10px] tracking-wider uppercase font-bold mb-1">Operational Overview</Text>
            <Text className="text-2xl font-bold text-[#0d1e25]">Staff Command Center</Text>
          </View>
        </View>

        {/* Stats Cards */}
        <View className="space-y-4 mb-6">
          <View className="bg-white p-6 rounded-3xl border border-[#bec9be]/30 shadow-sm mb-4">
            <View className="flex-row justify-between items-start">
              <Text className="text-sm text-[#3f4941] font-bold">Total Daily Waste</Text>
              <MaterialIcons name="delete-sweep" size={24} color="#006d3e" />
            </View>
            <View className="mt-4">
              <View className="flex-row items-baseline">
                <Text className="text-4xl font-bold text-[#00522d]">{wasteData.totalDailyWasteKg.toFixed(1)}</Text>
                <Text className="text-xl font-bold text-[#00522d] ml-1">kg</Text>
              </View>
            </View>
          </View>

          <View className="bg-white p-6 rounded-3xl border border-[#bec9be]/30 shadow-sm mb-4">
            <View className="flex-row justify-between items-start">
              <Text className="text-sm text-[#3f4941] font-bold">Recycling Rate</Text>
              <MaterialIcons name="eco" size={24} color="#006d3e" />
            </View>
            <View className="mt-4">
              <View className="flex-row items-baseline">
                <Text className="text-4xl font-bold text-[#00522d]">{wasteData.recyclingRate}</Text>
                <Text className="text-xl font-bold text-[#00522d] ml-1">%</Text>
              </View>
              <View className="w-full h-3 bg-[#d9e6da] rounded-full mt-2 overflow-hidden">
                <View className="h-full bg-[#00522d] rounded-full" style={{ width: `${wasteData.recyclingRate}%` }}></View>
              </View>
            </View>
          </View>

          <View className="bg-[#00522d] p-6 rounded-3xl shadow-sm mb-4">
            <View className="flex-row justify-between items-start">
              <Text className="text-sm text-white/80 font-bold">Bins At Capacity</Text>
              <MaterialIcons name="warning" size={24} color="#80d99f" />
            </View>
            <View className="mt-4">
              <Text className="text-4xl font-bold text-[#80d99f]">{wasteData.criticalBins.length < 10 ? `0${wasteData.criticalBins.length}` : wasteData.criticalBins.length}</Text>
              <Text className="text-xs text-white/80 font-bold mt-1">Requires immediate dispatch</Text>
            </View>
          </View>
        </View>

        {/* Active Alerts */}
        <View className="bg-white p-6 rounded-3xl border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#0d1e25]">Active Alerts</Text>
            <Text className="text-xs text-[#00522d] font-bold">{wasteData.criticalBins.length} TOTAL</Text>
          </View>
          
          <View className="space-y-3">
            {wasteData.criticalBins.map(bin => (
              <View key={bin.id} className="p-3 bg-[#ffdad6]/30 border border-[#ba1a1a]/10 rounded-xl flex-row gap-3 items-start mb-3">
                <MaterialIcons name="sensors-off" size={20} color="#ba1a1a" className="mt-1" />
                <View>
                  <Text className="font-bold text-[#93000a]">Bin #{bin.id.substring(0,4)} - Critical</Text>
                  <Text className="text-xs text-[#3f4941]">Capacity reached {bin.fillLevel}%. Location: {bin.location}</Text>
                </View>
              </View>
            ))}
            {wasteData.criticalBins.length === 0 && (
              <Text className="text-[#3f4941] italic">No critical alerts right now.</Text>
            )}
          </View>
          
        </View>

        {/* Log Book */}
        <View className="bg-white p-6 rounded-3xl border border-[#bec9be]/30 shadow-sm">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-xl font-bold text-[#0d1e25]">Log Book</Text>
            <TouchableOpacity className="px-4 py-2 bg-[#e7f6ff] rounded-lg">
              <Text className="text-xs font-bold text-[#00522d]">Filter</Text>
            </TouchableOpacity>
          </View>
          
          <View className="border-b border-[#bec9be]/20 pb-4 mb-4 flex-row justify-between">
            <Text className="font-bold text-[#3f4941] w-1/3">Time</Text>
            <Text className="font-bold text-[#3f4941] w-1/3">Category</Text>
            <Text className="font-bold text-[#3f4941] w-1/3 text-right">Weight</Text>
          </View>

          <View className="space-y-4">
            {logs.map((log: any) => (
              <View key={log.id} className="flex-row justify-between items-center mb-4 border-b border-[#bec9be]/10 pb-4">
                <Text className="text-[#0d1e25] w-1/3">{new Date(log.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
                <Text className="font-bold text-[#0d1e25] w-1/3">{log.category}</Text>
                <Text className="text-[#0d1e25] w-1/3 text-right">{log.quantityKg} kg</Text>
              </View>
            ))}
            {logs.length === 0 && (
              <Text className="text-[#3f4941] italic text-center py-4">No logs available.</Text>
            )}
          </View>
        </View>

      </View>
      
      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-6 right-6 w-14 h-14 bg-[#00522d] rounded-full items-center justify-center shadow-lg"
        onPress={() => router.push('/(staff)/waste/add')}
      >
        <MaterialIcons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
