import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function MarketplaceHome() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { authFetch } = useAuth();

  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await authFetch('/marketplace');
        if (res.ok) {
          const data = await res.json();
          setListings(data);
        }
      } catch (err) {
        console.error("Error fetching marketplace listings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, [authFetch]);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-24 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-lg bg-[#d9ebf5]">
            <Ionicons name="menu" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#00522d]">Marketplace</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
          <View className="w-10 h-10 rounded-full bg-[#9cf6ba] items-center justify-center">
            <Text className="text-[#00210f] font-bold">GU</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 py-8 pb-32">
          {/* Hero Section */}
          <View className="relative rounded-[32px] overflow-hidden mb-12 h-96 items-center p-8 justify-center bg-[#00522d]">
            {/* Background pattern placeholder */}
            <View className="absolute inset-0 bg-[#00522d] opacity-90" />
            
            <View className="relative z-10 space-y-6">
              <Text className="text-3xl font-bold text-white shadow-sm text-center">Find Sustainable Solutions</Text>
              <Text className="text-white/90 text-lg text-center">Connect with vetted providers specializing in renewable energy, waste management, and circular water systems.</Text>
              <View className="flex-row flex-wrap justify-center gap-4 pt-4">
                <TouchableOpacity className="bg-[#9cf6ba] px-6 py-3 rounded-full flex-row items-center gap-2 shadow-lg">
                  <Text className="text-[#00210f] font-bold">Get Started</Text>
                  <Ionicons name="arrow-forward" size={16} color="#00210f" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white/20 border border-white/40 px-6 py-3 rounded-full">
                  <Text className="text-white font-bold">View Vendors</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Categories */}
          <View className="mb-12">
            <View className="flex-row items-end justify-between mb-8">
              <View>
                <Text className="text-2xl font-bold text-[#00522d]">Browse Categories</Text>
                <Text className="text-gray-500">Explore solutions by utility sector</Text>
              </View>
              <TouchableOpacity className="flex-row items-center gap-1">
                <Text className="text-[#00522d] font-bold text-sm">All</Text>
                <Ionicons name="open-outline" size={16} color="#00522d" />
              </TouchableOpacity>
            </View>

            <View className="gap-4">
              <TouchableOpacity className="overflow-hidden rounded-[24px] bg-white border border-gray-200">
                <View className="h-32 bg-[#00522d]/10 relative p-4 justify-end">
                  <View className="absolute top-4 left-4">
                    <Ionicons name="sunny" size={32} color="#00522d" />
                  </View>
                  <Text className="font-bold text-[#00522d] text-lg">Solar</Text>
                </View>
                <View className="p-4">
                  <Text className="text-gray-500 text-sm">Photovoltaic systems, battery storage, and smart grid integration.</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Live Listings */}
          <View className="mb-12">
            <View className="flex-row items-end justify-between mb-8">
              <View>
                <Text className="text-2xl font-bold text-[#00522d]">Live Listings</Text>
                <Text className="text-gray-500">Recent marketplace additions</Text>
              </View>
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#00522d" />
            ) : listings.length === 0 ? (
              <Text className="text-gray-500 text-center py-8">No live listings available at the moment.</Text>
            ) : (
              <View className="gap-4">
                {listings.map((item) => (
                  <TouchableOpacity 
                    key={item.id} 
                    className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm"
                    onPress={() => router.push(`/(student)/marketplace/${item.id}`)}
                  >
                    <View className="h-40 bg-[#dff1fb] items-center justify-center">
                      <Ionicons name={item.isService ? 'construct' : 'cube'} size={48} color="#00522d" />
                    </View>
                    <View className="p-5">
                      <View className="flex-row justify-between items-start mb-2">
                        <Text className="font-bold text-[#00522d] text-lg flex-1 mr-2">{item.title}</Text>
                        <View className="bg-[#eaf4eb] px-2 py-1 rounded-md">
                          <Text className="text-[#00522d] font-bold text-sm">${item.price}</Text>
                        </View>
                      </View>
                      <Text className="text-gray-500 text-sm mb-3" numberOfLines={2}>{item.description}</Text>
                      <View className="flex-row items-center gap-2">
                        <Ionicons name="location" size={14} color="#6f7a70" />
                        <Text className="text-xs text-gray-500">{item.campus?.name || 'Local Campus'}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

        </View>
      </ScrollView>

      {/* Floating Action Button for list-item */}
      <TouchableOpacity 
        onPress={() => router.push('/(student)/marketplace/list-item')}
        className="absolute bottom-24 right-6 w-14 h-14 bg-[#00522d] rounded-full items-center justify-center shadow-lg"
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation Placeholder */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center px-4 py-4 pb-8 bg-[#dff1fb] shadow-lg rounded-t-3xl">
        <TouchableOpacity className="items-center">
          <Ionicons name="storefront" size={24} color="#00522d" />
          <Text className="text-xs font-bold text-[#00522d] mt-1">Market</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] px-6 py-2 rounded-full">
          <Ionicons name="heart" size={20} color="white" />
          <Text className="text-xs font-bold text-white mt-1">Donate</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="notifications" size={24} color="#556158" />
          <Text className="text-xs font-bold text-[#556158] mt-1">Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person" size={24} color="#556158" />
          <Text className="text-xs font-bold text-[#556158] mt-1">Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
