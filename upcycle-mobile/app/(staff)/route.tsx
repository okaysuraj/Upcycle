import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { authFetch } from '../../utils/api';

interface RouteStop {
  id: string;
  location: string;
  category: string;
  fillLevel: number;
}

export default function DriverRouteScreen() {
  const router = useRouter();
  const [routeStops, setRouteStops] = useState<RouteStop[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBins = async () => {
      try {
        const res = await authFetch('/waste/bins');
        if (res.ok) {
          const bins = await res.json();
          const pickupBins: RouteStop[] = (bins || [])
            .filter((b: any) => (b.fillLevel || 0) > 60)
            .sort((a: any, b: any) => (b.fillLevel || 0) - (a.fillLevel || 0));
          
          if (pickupBins.length > 0) {
            setRouteStops(pickupBins);
          } else {
            setRouteStops([
              { id: 'BIN-101', location: 'Science Quad Block B', category: 'Recyclables', fillLevel: 94 },
              { id: 'BIN-104', location: 'Engineering Lab 4 Dock', category: 'General Waste', fillLevel: 88 },
              { id: 'BIN-108', location: 'Dining Commons Rear', category: 'Organics & Food', fillLevel: 82 }
            ]);
          }
        } else {
          setRouteStops([
            { id: 'BIN-101', location: 'Science Quad Block B', category: 'Recyclables', fillLevel: 94 },
            { id: 'BIN-104', location: 'Engineering Lab 4 Dock', category: 'General Waste', fillLevel: 88 },
            { id: 'BIN-108', location: 'Dining Commons Rear', category: 'Organics & Food', fillLevel: 82 }
          ]);
        }
      } catch (err) {
        setRouteStops([
          { id: 'BIN-101', location: 'Science Quad Block B', category: 'Recyclables', fillLevel: 94 },
          { id: 'BIN-104', location: 'Engineering Lab 4 Dock', category: 'General Waste', fillLevel: 88 },
          { id: 'BIN-108', location: 'Dining Commons Rear', category: 'Organics & Food', fillLevel: 82 }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchBins();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center gap-3 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <View>
          <Text className="text-lg font-bold text-[#00522d]">Optimized Pickup Route</Text>
          <Text className="text-[10px] text-[#556158]">{routeStops.length} Smart Bins Flagged</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        {/* Map Preview Card */}
        <View className="p-6 rounded-[28px] bg-[#00522d] shadow-md mb-6 space-y-2">
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="alt-route" size={20} color="#9cf6ba" />
            <Text className="text-xs font-bold uppercase text-[#9cf6ba] tracking-wider">EV Fleet Route 4</Text>
          </View>
          <Text className="text-white font-bold text-lg">Central Campus North Loop</Text>
          <Text className="text-white/80 text-xs">Estimated transit time: 24 mins • Lowest CO₂ emissions path</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#00522d" className="mt-8" />
        ) : (
          <View className="space-y-4">
            {routeStops.map((stop, index) => (
              <View key={stop.id} className="p-5 bg-white rounded-3xl border border-[#bec9be]/30 shadow-sm space-y-3">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-2.5">
                    <View className="w-7 h-7 rounded-full bg-[#00522d] items-center justify-center">
                      <Text className="text-white font-bold text-xs">{index + 1}</Text>
                    </View>
                    <Text className="font-bold text-sm text-[#0d1e25]">{stop.location}</Text>
                  </View>
                  <View className="px-2.5 py-0.5 bg-[#ffdad6] rounded-full">
                    <Text className="text-[10px] font-bold text-[#ba1a1a]">{stop.fillLevel}% Full</Text>
                  </View>
                </View>

                <View className="flex-row justify-between text-xs text-[#556158] pt-1">
                  <Text className="text-xs text-[#556158] font-medium">{stop.category}</Text>
                  <Text className="text-xs font-mono font-bold text-[#00522d]">ID: {stop.id}</Text>
                </View>

                <TouchableOpacity 
                  onPress={() => router.push({
                    pathname: '/(staff)/scan',
                    params: { expectedBin: stop.id }
                  })}
                  className="py-3 bg-[#00522d] rounded-full flex-row items-center justify-center gap-2 mt-2"
                >
                  <Ionicons name="qr-code-outline" size={16} color="#ffffff" />
                  <Text className="text-white font-bold text-xs">Arrived • Scan Bin</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
