import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function BillingAndSubscription() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-14 flex-row justify-between items-center z-50 border-b border-gray-200">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <TouchableOpacity className="p-2 -mr-2">
          <Ionicons name="notifications-outline" size={24} color="#6d7a6f" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Action Required */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-bold text-[#00522d]">Action Required</Text>
            <View className="bg-[#ffdad6] px-2 py-0.5 rounded-full">
              <Text className="text-[10px] font-bold text-[#93000a]">3 Failed</Text>
            </View>
          </View>
          
          <View className="bg-white border border-gray-200 rounded-xl p-4 flex-row items-start gap-4 shadow-sm">
            <View className="bg-[#ffdad6]/50 p-2 rounded-lg">
              <Ionicons name="warning" size={24} color="#ba1a1a" />
            </View>
            <View className="flex-1">
              <Text className="font-bold text-[#0d1e25] mb-1">Payment Failed: #SUBS-9281</Text>
              <Text className="text-xs text-gray-500 mb-3">User: Marcus Thorne • Attempt 3 of 3</Text>
              <View className="flex-row gap-2">
                <TouchableOpacity className="bg-[#00522d] px-4 py-2 rounded-lg">
                  <Text className="text-white font-bold text-xs">Retry Charge</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-200 px-4 py-2 rounded-lg">
                  <Text className="text-[#3f4941] font-bold text-xs">Contact</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Revenue Overview */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1 gap-3">
            <View className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm h-24 justify-between">
              <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Active Subs</Text>
              <View className="flex-row items-end justify-between mt-2">
                <Text className="text-2xl font-bold text-[#0d1e25]">1,248</Text>
                <View className="bg-[#bdefbe]/30 px-1.5 py-0.5 rounded">
                  <Text className="text-[10px] text-[#14411f]">89 New</Text>
                </View>
              </View>
            </View>
            <View className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm h-24 justify-between">
              <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Churn Rate</Text>
              <View className="flex-row items-end justify-between mt-2">
                <Text className="text-2xl font-bold text-[#0d1e25]">1.8%</Text>
                <View className="bg-[#ffdad6]/50 px-1.5 py-0.5 rounded">
                  <Text className="text-[10px] text-[#ba1a1a]">-0.2%</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View className="flex-1 bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
            <View className="z-10 h-full justify-between">
              <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Total MRR</Text>
              <View>
                <Text className="text-2xl font-bold text-[#00522d]">$42,890</Text>
                <View className="flex-row items-center gap-1 mt-2">
                  <Ionicons name="trending-up" size={12} color="#006d3e" />
                  <Text className="text-[10px] text-[#006d3e]">+12.4% /mo</Text>
                </View>
              </View>
            </View>
            <Ionicons name="cash" size={80} color="#f4faff" style={{ position: 'absolute', bottom: -10, right: -10, zIndex: 0 }} />
          </View>
        </View>

        {/* Subscription Health */}
        <View className="bg-[#1b4332] rounded-xl p-5 shadow-lg relative overflow-hidden mb-6">
          <Text className="text-lg font-bold text-white mb-4 z-10">Subscription Health</Text>
          <View className="flex-row items-center gap-6 z-10">
            <View className="flex-1">
              <View className="flex-row justify-between mb-2">
                <Text className="text-xs text-white">Retention Goal</Text>
                <Text className="text-xs text-white">94%</Text>
              </View>
              <View className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                <View className="h-full bg-[#75b393]" style={{ width: '94%' }} />
              </View>
              <Text className="text-[10px] text-white/80">On track to beat Q3 targets.</Text>
            </View>
            <View className="w-16 h-16 rounded-full border-4 border-[#75b393] items-center justify-center">
              <Text className="text-2xl font-bold text-white">A+</Text>
            </View>
          </View>
          <View className="absolute top-0 right-0 w-32 h-32 bg-[#75b393]/20 rounded-full blur-2xl" />
        </View>

        {/* Payout History */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-[#00522d]">Payout History</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Text className="text-xs font-bold text-[#00522d]">View All</Text>
              <Ionicons name="chevron-forward" size={14} color="#00522d" />
            </TouchableOpacity>
          </View>
          
          <View className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <View className="flex-row bg-[#f4faff] border-b border-gray-200 p-3">
              <Text className="flex-1 text-xs font-bold text-gray-500">Date</Text>
              <Text className="flex-1 text-xs font-bold text-gray-500">Amount</Text>
              <Text className="flex-1 text-xs font-bold text-gray-500 text-right">Status</Text>
            </View>
            
            <View className="flex-row p-3 border-b border-gray-100 items-center">
              <Text className="flex-1 text-sm text-[#0d1e25]">Oct 12, 2023</Text>
              <Text className="flex-1 text-sm font-bold text-[#0d1e25]">$8,430.00</Text>
              <View className="flex-1 items-end">
                <View className="bg-[#cce6d0] px-2 py-0.5 rounded-full flex-row items-center gap-1">
                  <View className="w-1.5 h-1.5 rounded-full bg-[#012d1d]" />
                  <Text className="text-[10px] text-[#506856]">Complete</Text>
                </View>
              </View>
            </View>
            
            <View className="flex-row p-3 border-b border-gray-100 items-center">
              <Text className="flex-1 text-sm text-[#0d1e25]">Oct 05, 2023</Text>
              <Text className="flex-1 text-sm font-bold text-[#0d1e25]">$7,920.50</Text>
              <View className="flex-1 items-end">
                <View className="bg-[#cce6d0] px-2 py-0.5 rounded-full flex-row items-center gap-1">
                  <View className="w-1.5 h-1.5 rounded-full bg-[#012d1d]" />
                  <Text className="text-[10px] text-[#506856]">Complete</Text>
                </View>
              </View>
            </View>

            <View className="flex-row p-3 items-center">
              <Text className="flex-1 text-sm text-[#0d1e25]">Sep 28, 2023</Text>
              <Text className="flex-1 text-sm font-bold text-[#0d1e25]">$8,115.20</Text>
              <View className="flex-1 items-end">
                <View className="bg-[#e7e8e9] px-2 py-0.5 rounded-full flex-row items-center gap-1">
                  <View className="w-1.5 h-1.5 rounded-full bg-[#717973]" />
                  <Text className="text-[10px] text-[#414844]">Processing</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
