import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function MarketplaceHome() {
  const router = useRouter();
  const { authFetch } = useAuth();

  const [listings, setListings] = useState([]);
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
        </View>
      </View>

      <View className="px-5 py-2 pb-24">
        {/* Marketplace Header */}
        <View className="flex-row justify-between items-end mb-6">
          <View>
            <Text className="text-[#00522d] text-[10px] tracking-wider uppercase font-bold mb-1">Eco-Market</Text>
            <Text className="text-2xl font-bold text-[#0d1e25]">Sustainability Services</Text>
          </View>
        </View>

        {/* Categories Bento Grid */}
        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity className="flex-1 h-32 bg-[#e7f6ff] rounded-3xl p-4 justify-end border border-[#bec9be]/30 shadow-sm relative overflow-hidden">
            <MaterialIcons name="wb-sunny" size={40} color="#00522d" className="absolute top-4 right-4 opacity-20" />
            <Text className="font-bold text-[#0d1e25] text-lg">Solar Solutions</Text>
            <Text className="text-[10px] text-[#3f4941]">12 Providers</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 h-32 bg-[#e7f6ff] rounded-3xl p-4 justify-end border border-[#bec9be]/30 shadow-sm relative overflow-hidden">
            <MaterialIcons name="delete-sweep" size={40} color="#00522d" className="absolute top-4 right-4 opacity-20" />
            <Text className="font-bold text-[#0d1e25] text-lg">Smart Waste</Text>
            <Text className="text-[10px] text-[#3f4941]">8 Solutions</Text>
          </TouchableOpacity>
        </View>

        {/* Listings Section */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-[#0d1e25]">Live Listings</Text>
        </View>
        
        {loading ? (
          <View className="py-8 items-center justify-center">
             <Text className="text-[#3f4941] italic font-bold">Loading listings...</Text>
          </View>
        ) : (
          <View className="space-y-4">
            {listings.map((listing: any) => (
              <View key={listing.id} className="bg-white p-4 rounded-2xl shadow-sm border border-[#bec9be]/30 mb-4">
                <View className="w-full h-32 bg-[#f4faff] rounded-xl mb-3 flex items-center justify-center">
                  <MaterialIcons name={listing.isService ? 'handyman' : 'inventory-2'} size={40} color="#80d99f" />
                </View>
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-bold text-[#0d1e25] text-lg">{listing.title}</Text>
                  <Text className="text-[#00522d] font-bold">${listing.price}</Text>
                </View>
                <Text className="text-[#3f4941] text-xs mb-3" numberOfLines={2}>{listing.description}</Text>
                <View className="flex-row justify-between items-center mt-2 pt-3 border-t border-[#bec9be]/20">
                   <Text className="text-[#00522d] text-xs font-bold">{listing.vendor?.name}</Text>
                   <TouchableOpacity className="bg-[#00522d] px-4 py-2 rounded-full">
                     <Text className="text-white text-xs font-bold">Buy / Quote</Text>
                   </TouchableOpacity>
                </View>
              </View>
            ))}
            {listings.length === 0 && (
              <View className="py-8 items-center justify-center">
                <Text className="text-[#3f4941] italic">No active listings.</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
}
