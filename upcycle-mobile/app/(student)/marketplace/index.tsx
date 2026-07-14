import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function MarketplaceHome() {
  const { authFetch } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const res = await authFetch('/inventory');
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-6">
      <View className="h-40 bg-emerald-50 items-center justify-center">
        <Text className="text-6xl">{item.type === 'furniture' ? '🪑' : item.type === 'electronics' ? '💻' : '📦'}</Text>
      </View>
      <View className="p-5">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="font-bold text-gray-900 text-lg flex-1 mr-2">{item.title}</Text>
          <View className="bg-emerald-100 px-2 py-1 rounded-full">
            <Text className="text-emerald-700 font-bold text-xs">{item.price} pts</Text>
          </View>
        </View>
        <Text className="text-gray-500 text-sm mb-4" numberOfLines={2}>{item.description}</Text>
        <TouchableOpacity className="bg-emerald-600 py-3 rounded-xl items-center">
          <Text className="text-white font-bold">Request Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScreenWrapper scroll={false} className="bg-gray-50">
      <View className="mb-6">
        <Text className="text-3xl font-black text-gray-900 mb-2">Marketplace</Text>
        <Text className="text-gray-500 text-base">Exchange upcycled materials on campus.</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#059669" className="mt-10" />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="text-center text-gray-400 mt-10">No items currently available.</Text>
          }
        />
      )}
    </ScreenWrapper>
  );
}
