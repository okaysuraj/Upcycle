import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';

export default function VendorDashboard() {
  const { user } = useAuth();

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f4faff]">
      {/* Top App Bar */}
      <View className="px-6 pt-12 pb-4 flex-row justify-between items-center bg-[#f4faff]/70">
        <Text className="text-xl font-bold text-[#00522d]">Marketplace</Text>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full text-[#3f4941] hover:bg-[#d4e5ef]">
            <MaterialIcons name="search" size={24} color="#3f4941" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full text-[#3f4941] hover:bg-[#d4e5ef]">
            <MaterialIcons name="notifications" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 py-4">
        {/* Welcome Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-1">Welcome back, {user?.name || 'Eco-Partner'}.</Text>
          <Text className="text-sm text-[#3f4941]">Here is your operational snapshot for today's sustainability initiatives.</Text>
        </View>

        {/* Revenue Overview */}
        <View className="bg-white p-6 rounded-3xl border border-[#bec9be]/30 mb-6 shadow-sm overflow-hidden relative">
          <View className="flex-row justify-between items-start mb-6 z-10">
            <View>
              <Text className="text-xs text-[#3f4941] mb-1 uppercase tracking-wider font-bold">Total Revenue - Q3</Text>
              <Text className="text-3xl font-bold text-[#00522d]">$142,500.00</Text>
            </View>
            <View className="bg-[#2eb872]/20 px-3 py-1 rounded-full flex-row items-center gap-1">
              <MaterialIcons name="trending-up" size={14} color="#00522d" />
              <Text className="text-[#00522d] font-bold text-xs">+12.4%</Text>
            </View>
          </View>
          
          <View className="flex-row items-end gap-2 h-32 mt-2 z-10">
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '40%' }}></View>
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '65%' }}></View>
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '55%' }}></View>
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '85%' }}></View>
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '70%' }}></View>
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '95%' }}></View>
            <View className="flex-1 bg-[#80d99f] rounded-t-lg" style={{ height: '80%' }}></View>
          </View>
          <View className="flex-row justify-between mt-2 z-10">
            <Text className="text-[10px] text-[#3f4941] font-bold">Mon</Text>
            <Text className="text-[10px] text-[#3f4941] font-bold">Tue</Text>
            <Text className="text-[10px] text-[#3f4941] font-bold">Wed</Text>
            <Text className="text-[10px] text-[#3f4941] font-bold">Thu</Text>
            <Text className="text-[10px] text-[#3f4941] font-bold">Fri</Text>
            <Text className="text-[10px] text-[#3f4941] font-bold">Sat</Text>
            <Text className="text-[10px] text-[#3f4941] font-bold">Sun</Text>
          </View>
        </View>

        {/* Active Bids */}
        <View className="bg-white p-6 rounded-3xl border border-[#bec9be]/30 mb-6 shadow-sm">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#0d1e25]">Active Bids</Text>
            <View className="w-8 h-8 items-center justify-center bg-[#d9e6da] rounded-full">
              <Text className="text-[#3c6842] font-bold text-xs">05</Text>
            </View>
          </View>
          
          <View className="space-y-4">
            <View className="p-4 rounded-xl border border-[#bec9be]/30 mb-3 shadow-sm">
              <Text className="font-bold text-[#0d1e25]">Regional Composting RFP</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-xs text-[#3f4941]">Due in 2 days</Text>
                <Text className="text-xs font-bold text-[#00522d]">$45k Est.</Text>
              </View>
            </View>
            <View className="p-4 rounded-xl border border-[#bec9be]/30 mb-3 shadow-sm">
              <Text className="font-bold text-[#0d1e25]">E-Waste Logistics Link</Text>
              <View className="flex-row justify-between mt-2">
                <Text className="text-xs text-[#3f4941]">Reviewing</Text>
                <Text className="text-xs font-bold text-[#00522d]">$12k Est.</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity className="mt-4 w-full py-3 rounded-full border border-[#00522d] items-center">
            <Text className="text-[#00522d] font-bold">View All Bids</Text>
          </TouchableOpacity>
        </View>

        {/* New Leads */}
        <View className="bg-[#ffffff]/70 rounded-[24px] p-6 mb-6 shadow-sm border border-[#a5d6a7]/30">
          <View className="flex-row items-center gap-2 mb-4">
            <MaterialIcons name="stars" size={24} color="#00522d" />
            <Text className="text-xl font-bold text-[#0d1e25]">New Leads</Text>
          </View>
          
          <View className="space-y-4">
            <View className="flex-row items-start gap-4 p-4 rounded-2xl bg-white/50 border border-[#a5d6a7]/30 mb-3">
              <View className="w-12 h-12 rounded-xl bg-[#9cf6ba] items-center justify-center">
                <MaterialIcons name="corporate-fare" size={24} color="#00522d" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-[#0d1e25]">North Campus Refurbishment</Text>
                <Text className="text-xs text-[#3f4941] mt-1">Metal & Plastic reclamation needed for 12,000 sq ft.</Text>
                <View className="flex-row items-center mt-2">
                  <Text className="text-[#00522d] font-bold text-xs">Quick Proposal</Text>
                  <MaterialIcons name="arrow-forward" size={14} color="#00522d" className="ml-1" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
