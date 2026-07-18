import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function VendorVerificationQueueMobile() {
  const router = useRouter();

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f8f9fa]">
      {/* Top Navigation Anchor */}
      <View className="flex-row items-center justify-between px-4 h-12 w-full z-50 bg-[#f8f9fa] border-b border-[#c1c8c2]">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="eco" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 rounded-full hover:bg-[#e7e8e9]">
            <MaterialIcons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-gray-200 border border-[#c1c8c2] overflow-hidden">
             <Text className="text-center mt-1 text-xs font-bold text-gray-500">AD</Text>
          </View>
        </View>
      </View>

      <View className="pt-6 pb-24 px-4 max-w-md mx-auto">
        {/* Verification Target Header */}
        <View className="mb-8">
          <View className="flex-row items-center gap-2 mb-2">
            <MaterialIcons name="arrow-back" size={14} color="#414844" />
            <Text className="text-[#414844] font-bold text-xs">Verification Queue / #VN-8821</Text>
          </View>
          
          <View className="flex-row gap-3">
            <View className="flex-2 bg-white/85 rounded-xl p-4 border border-[#E9ECEF] flex-col justify-between">
              <View>
                <Text className="text-xl font-bold text-[#012d1d] mb-1">EcoThread Textiles</Text>
                <Text className="text-xs text-[#414844]">Industrial textile recycler based in Stockholm, SE.</Text>
              </View>
              <View className="mt-4 flex-row gap-2">
                <View className="px-2 py-0.5 bg-[#cce6d0] rounded-full">
                  <Text className="text-[10px] font-bold text-[#506856]">Active Review</Text>
                </View>
                <View className="px-2 py-0.5 bg-[#b1f0ce] rounded-full">
                  <Text className="text-[10px] font-bold text-[#002114]">Tier 1</Text>
                </View>
              </View>
            </View>

            <View className="flex-1 bg-[#1b4332] rounded-xl p-3 items-center justify-center">
              <Text className="text-[10px] font-bold text-[#86af99] uppercase tracking-wider mb-1">Trust Score</Text>
              <Text className="text-[32px] font-bold text-white leading-none">84</Text>
              <Text className="text-[10px] font-bold text-[#86af99] mt-1">Excellent</Text>
            </View>
          </View>
        </View>

        {/* Verification Checklist */}
        <View className="mb-8">
          <Text className="text-xs font-bold uppercase text-[#717973] mb-3 tracking-widest px-1">Verification Checklist</Text>
          
          <View className="space-y-3">
            <View className="bg-white border border-[#c1c8c2] rounded-xl p-4 flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-[#cce6d0]/30 items-center justify-center">
                  <MaterialIcons name="fingerprint" size={24} color="#4c6452" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#191c1d]">Identity Verification</Text>
                  <Text className="text-xs text-[#414844]">KYB Documents Uploaded</Text>
                </View>
              </View>
              <MaterialIcons name="check-circle" size={24} color="#75b393" />
            </View>

            <View className="bg-white border border-[#c1c8c2] border-l-4 border-l-[#012d1d] rounded-xl p-4 flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-[#1b4332]/10 items-center justify-center">
                  <MaterialIcons name="verified" size={24} color="#012d1d" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#191c1d]">ISO 14001 Certificate</Text>
                  <Text className="text-xs text-[#414844]">Pending Manual Review</Text>
                </View>
              </View>
              <TouchableOpacity className="px-3 py-1 bg-[#012d1d] rounded-lg">
                <Text className="text-white text-xs font-bold">Review</Text>
              </TouchableOpacity>
            </View>

            <View className="bg-white border border-[#c1c8c2] rounded-xl p-4 flex-row items-center justify-between opacity-60">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-[#edeeef] items-center justify-center">
                  <MaterialIcons name="assignment-turned-in" size={24} color="#717973" />
                </View>
                <View>
                  <Text className="text-sm font-bold text-[#191c1d]">Ethical Audit</Text>
                  <Text className="text-xs text-[#414844]">Awaiting site visit data</Text>
                </View>
              </View>
              <MaterialIcons name="schedule" size={24} color="#717973" />
            </View>
          </View>
        </View>

        {/* Audit Trail & Notes */}
        <View className="space-y-4 mb-8">
          <View className="flex-row items-center justify-between px-1 mb-2">
            <Text className="text-xs font-bold uppercase text-[#717973] tracking-widest">Audit Trail</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <MaterialIcons name="add" size={14} color="#012d1d" />
              <Text className="text-[#012d1d] text-xs font-bold">Add Note</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-[#f3f4f5] rounded-xl p-4 border border-[#c1c8c2]/50 mb-6">
            <View className="flex-row items-center gap-2 mb-3">
              <View className="w-6 h-6 rounded-full bg-[#cee9d3] items-center justify-center">
                <Text className="text-[10px] font-bold text-[#092012]">MK</Text>
              </View>
              <Text className="text-xs font-bold text-[#191c1d] flex-1">Marcus K. (Lead Auditor)</Text>
              <Text className="text-[10px] text-[#717973]">Oct 12, 14:30</Text>
            </View>
            <Text className="text-xs text-[#414844] leading-relaxed">
              Certificate of incorporation matches Sweden Business Registry. Environmental impact report shows 12% increase in landfill diversion since 2023. Recommended for Tier 1 progression once ethical audit clears.
            </Text>
          </View>
        </View>

        {/* Final Action Bar */}
        <View className="p-4 bg-white/85 rounded-2xl shadow-sm border border-[#012d1d]/10 mb-4">
          <Text className="text-center text-xs text-[#414844] mb-3">Assign this vendor to an investigator?</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity className="flex-1 py-3 border border-[#717973] rounded-xl items-center justify-center">
              <Text className="text-[#012d1d] font-bold text-sm">Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-[2] py-3 bg-[#012d1d] rounded-xl items-center justify-center">
              <Text className="text-white font-bold text-sm">Verify Vendor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
