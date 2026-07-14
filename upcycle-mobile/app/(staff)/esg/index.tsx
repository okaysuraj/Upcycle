import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import StatCard from '../../../components/ui/StatCard';

export default function ESGDashboard() {
  const { authFetch } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await authFetch('/esg/circular-flow');
      if (res.ok) {
        const d = await res.json();
        setData(d);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-6">
        <Text className="text-3xl font-black text-gray-900 mb-2">ESG Analytics</Text>
        <Text className="text-gray-500 text-base">Environmental impact metrics.</Text>
      </View>

      <StatCard 
        title="Total Waste Logs" 
        value={data?.totalLogs || 0} 
        icon="📋"
        className="mb-4"
        trend="12"
      />

      <StatCard 
        title="Diverted Waste" 
        value={`${data?.divertedWaste || 0} kg`} 
        icon="♻️"
        className="mb-4"
      />

      <StatCard 
        title="Recovery Efficiency" 
        value={`${((data?.efficiency || 0) * 100).toFixed(1)}%`} 
        icon="📈"
        className="mb-4"
        trend="Optimal"
      />
    </ScreenWrapper>
  );
}
