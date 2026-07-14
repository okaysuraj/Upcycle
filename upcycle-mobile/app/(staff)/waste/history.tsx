import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function WasteHistoryLogs() {
  const { authFetch } = useAuth();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await authFetch('/waste/logs');
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4 flex-row items-center justify-between">
      <View className="flex-row items-center flex-1">
        <View className="w-12 h-12 rounded-xl bg-emerald-50 items-center justify-center mr-4">
          <Text className="text-xl">{item.type === 'plastic' ? '🥤' : item.type === 'paper' ? '📄' : '💻'}</Text>
        </View>
        <View>
          <Text className="font-bold text-gray-900 text-base capitalize">{item.type} Waste</Text>
          <Text className="text-gray-500 text-xs">{new Date(item.timestamp).toLocaleDateString()}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="font-black text-emerald-700 text-lg">{item.weight} kg</Text>
        <Text className="text-gray-400 text-xs uppercase tracking-wider">{item.status}</Text>
      </View>
    </View>
  );

  return (
    <ScreenWrapper scroll={false} className="bg-gray-50">
      <View className="mb-6">
        <Text className="text-3xl font-black text-gray-900 mb-2">History Logs</Text>
        <Text className="text-gray-500 text-base">Past waste entries recorded by staff.</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#059669" className="mt-10" />
      ) : (
        <FlatList
          data={logs}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="text-center text-gray-400 mt-10">No waste logs found.</Text>
          }
        />
      )}
    </ScreenWrapper>
  );
}
