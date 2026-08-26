import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function VendorDashboard() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top App Bar */}
      <View className="px-5 pt-4 pb-3 flex-row justify-between items-center bg-[#f4faff] border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 rounded-xl bg-[#00522d] items-center justify-center shadow-sm">
            <Ionicons name="storefront" size={18} color="#ffffff" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">Vendor Hub</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/user')}
          className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center shadow-sm"
        >
          <Ionicons name="person" size={18} color="#00522d" />
        </TouchableOpacity>
      </View>

      <View className="px-5 py-5 space-y-6">
        {/* Welcome Header */}
        <View>
          <Text className="text-2xl font-bold text-[#0d1e25]">
            Welcome, {user?.name || 'BioLoop Systems'}
          </Text>
          <Text className="text-xs text-[#556158] mt-0.5">
            Verified Tier-1 Hauler & Resource Partner
          </Text>
        </View>

        {/* Revenue Overview Bento Card */}
        <View className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-4">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-[10px] text-[#556158] uppercase tracking-wider font-bold">Total Processed Q3</Text>
              <Text className="text-3xl font-bold text-[#00522d] mt-1">$142,500.00</Text>
            </View>
            <View className="bg-[#9cf6ba]/40 px-3 py-1 rounded-full flex-row items-center gap-1">
              <MaterialIcons name="trending-up" size={14} color="#00210f" />
              <Text className="text-[#00210f] font-bold text-xs">+12.4%</Text>
            </View>
          </View>
          
          <View className="flex-row items-end gap-2 h-28 pt-2">
            {[40, 65, 55, 85, 70, 95, 80].map((h, i) => (
              <View key={i} className="flex-1 bg-[#00522d] rounded-t-lg" style={{ height: `${h}%` }} />
            ))}
          </View>
          <View className="flex-row justify-between text-[10px] text-[#556158] font-bold">
            <Text className="text-[10px] text-[#556158]">Mon</Text>
            <Text className="text-[10px] text-[#556158]">Tue</Text>
            <Text className="text-[10px] text-[#556158]">Wed</Text>
            <Text className="text-[10px] text-[#556158]">Thu</Text>
            <Text className="text-[10px] text-[#556158]">Fri</Text>
            <Text className="text-[10px] text-[#556158]">Sat</Text>
            <Text className="text-[10px] text-[#556158]">Sun</Text>
          </View>
        </View>

        {/* Active RFP Proposals */}
        <View className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-bold text-[#0d1e25]">Active Campus RFPs</Text>
            <View className="px-2.5 py-0.5 bg-[#dff1fb] rounded-full">
              <Text className="text-[#00522d] font-bold text-xs">2 Active</Text>
            </View>
          </View>
          
          <View className="space-y-3">
            <View className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 space-y-1">
              <Text className="font-bold text-xs text-[#0d1e25]">Regional Composting Retrofit</Text>
              <View className="flex-row justify-between pt-1">
                <Text className="text-[11px] text-[#556158]">Due in 2 days</Text>
                <Text className="text-xs font-bold text-[#00522d]">$45,000 Est.</Text>
              </View>
            </View>

            <View className="p-4 rounded-2xl bg-[#f4faff] border border-[#bec9be]/30 space-y-1">
              <Text className="font-bold text-xs text-[#0d1e25]">North Quad E-Waste Reclamation</Text>
              <View className="flex-row justify-between pt-1">
                <Text className="text-[11px] text-[#556158]">Proposal Reviewing</Text>
                <Text className="text-xs font-bold text-[#00522d]">$12,400 Est.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
