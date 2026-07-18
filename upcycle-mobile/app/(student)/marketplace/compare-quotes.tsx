import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function CompareQuotes() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { authFetch } = useAuth();
  
  const [rfps, setRfps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await authFetch('/marketplace/rfp');
        if (res.ok) {
          const data = await res.json();
          setRfps(data);
        }
      } catch (err) {
        console.error("Error fetching RFPs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, [authFetch]);

  // Transform RFPs into quotes for display (mock mapping)
  const quotes = rfps.flatMap(rfp => 
    rfp.quotes.map(q => ({
      vendor: `Vendor ID: ${q.vendorId.substring(0, 6)}`,
      rating: 4.5,
      price: q.amount,
      timeline: '12 Weeks',
      match: 85 + Math.floor(Math.random() * 10),
      featured: true,
      rfpTitle: rfp.title,
      id: q.id
    }))
  );

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Compare Quotes</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Ionicons name="notifications-outline" size={24} color="#3f4941" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Compare Vendor Quotes</Text>
          <Text className="text-gray-500">Review and compare proposed solutions.</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#00522d" className="mt-8" />
        ) : quotes.length === 0 ? (
          <Text className="text-gray-500 text-center py-8">No quotes available.</Text>
        ) : (
          <View className="gap-6">
            {quotes.map((q, idx) => (
              <View key={idx} className={`bg-white border ${q.featured ? 'border-[#00522d] shadow-md' : 'border-gray-200 shadow-sm'} rounded-[24px] p-6 relative overflow-hidden`}>
                {q.featured && (
                  <View className="absolute top-4 right-4 bg-[#00522d] px-3 py-1 rounded-full">
                    <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Best Match</Text>
                  </View>
                )}
                <View className="mb-6">
                  <View className="w-16 h-16 rounded-xl bg-[#006d3e]/10 flex items-center justify-center mb-4">
                    <Ionicons name="business" size={32} color="#00522d" />
                  </View>
                  <Text className="text-xl font-bold text-[#0d1e25]">{q.vendor}</Text>
                  <View className="flex-row items-center gap-1 mt-1">
                    <Ionicons name="star" size={14} color="#6f7a70" />
                    <Text className="text-xs font-bold text-gray-500">{q.rating}</Text>
                  </View>
                </View>
                
                <View className="gap-6">
                  <View className="bg-[#dff1fb] p-4 rounded-xl">
                    <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Total Quote</Text>
                    <Text className="text-3xl font-bold text-[#00522d]">${q.price}</Text>
                  </View>
                  
                  <View className="gap-3">
                    <View className="flex-row justify-between items-center py-2 border-b border-gray-100">
                      <Text className="text-sm font-bold text-gray-500">Timeline</Text>
                      <Text className="text-sm font-bold text-[#0d1e25]">{q.timeline}</Text>
                    </View>
                    <View className="flex-row justify-between items-center py-2 border-b border-gray-100">
                      <Text className="text-sm font-bold text-gray-500">RFP</Text>
                      <Text className="text-sm font-bold text-[#0d1e25] flex-1 text-right ml-4" numberOfLines={1}>{q.rfpTitle}</Text>
                    </View>
                    <View className="py-2 border-b border-gray-100 gap-2">
                      <View className="flex-row justify-between items-center">
                        <Text className="text-sm font-bold text-gray-500">Eco-Impact Score</Text>
                        <Text className="text-sm font-bold text-[#00522d]">{q.match}/100</Text>
                      </View>
                      <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                        <View className="h-full bg-[#00522d]" style={{ width: `${q.match}%` }} />
                      </View>
                    </View>
                  </View>
                </View>

                <TouchableOpacity className="mt-6 w-full py-4 bg-[#00522d] rounded-full flex-row items-center justify-center gap-2 shadow-lg">
                  <Text className="text-white font-bold">Approve Selection</Text>
                  <Ionicons name="arrow-forward" size={16} color="white" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
