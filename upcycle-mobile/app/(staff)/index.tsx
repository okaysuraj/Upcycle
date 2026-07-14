import React, { useEffect, useState } from 'react';
import { View, Text, RefreshControl } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import StatCard from '../../components/ui/StatCard';
import { useRouter } from 'expo-router';

export default function StaffDashboard() {
  const { user, authFetch } = useAuth();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [kpis, setKpis] = useState({
    waste_diverted: '0',
    energy_saved: '0',
    active_tasks: 0
  });

  const loadData = async () => {
    try {
      const res = await authFetch('/esg/circular-flow');
      if (res.ok) {
        const data = await res.json();
        setKpis({
          waste_diverted: (data.efficiency * 100).toFixed(1),
          energy_saved: (data.energySaved || 1240).toString(),
          active_tasks: 12 // mock
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  return (
    <ScreenWrapper 
      withPadding={false} 
      scroll={true}
    >
      <View className="bg-emerald-700 px-6 pt-12 pb-8 rounded-b-[40px]">
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-emerald-100 font-medium mb-1">Welcome back,</Text>
            <Text className="text-white text-2xl font-bold">{user?.name || 'Staff Member'}</Text>
          </View>
          <View className="w-12 h-12 bg-emerald-600 rounded-full items-center justify-center border-2 border-emerald-400">
            <Text className="text-white text-lg font-bold">{user?.name?.charAt(0) || 'S'}</Text>
          </View>
        </View>
        <View className="bg-emerald-800/50 p-4 rounded-2xl flex-row justify-between items-center">
          <View>
            <Text className="text-emerald-100 font-medium">Campus Status</Text>
            <Text className="text-white font-bold text-lg">Optimal</Text>
          </View>
          <View className="bg-emerald-500 px-3 py-1 rounded-full">
            <Text className="text-white font-bold text-xs">Live</Text>
          </View>
        </View>
      </View>

      <View className="px-6 py-6 mt-2">
        <Text className="text-xl font-bold text-gray-900 mb-4">Key Metrics</Text>
        <View className="flex-row flex-wrap justify-between">
          <StatCard 
            title="Waste Diverted" 
            value={`${kpis.waste_diverted}%`} 
            icon="♻️"
            trend="2.4%"
            className="w-[48%] mb-4"
          />
          <StatCard 
            title="Energy Saved" 
            value={`${kpis.energy_saved}k`} 
            icon="⚡"
            trend="5.1%"
            className="w-[48%] mb-4"
          />
        </View>

        <Text className="text-xl font-bold text-gray-900 mb-4 mt-2">Quick Actions</Text>
        <View className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm">
          <View className="flex-row border-b border-gray-100">
             <View className="flex-1 p-4 items-center justify-center border-r border-gray-100">
               <Text className="text-3xl mb-2" onPress={() => router.push('/(staff)/waste/add')}>📸</Text>
               <Text className="font-medium text-gray-700">Scan Waste</Text>
             </View>
             <View className="flex-1 p-4 items-center justify-center">
               <Text className="text-3xl mb-2" onPress={() => router.push('/(staff)/esg')}>📊</Text>
               <Text className="font-medium text-gray-700">ESG Report</Text>
             </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
