import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PrivacySettingsMobile() {
  const router = useRouter();

  const [publicProfile, setPublicProfile] = useState(true);
  const [activityStatus, setActivityStatus] = useState(false);
  const [marketingIntelligence, setMarketingIntelligence] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 h-14 bg-[#f8f9fa] border-b border-[#c1c8c2] z-50">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="active:opacity-80">
            <MaterialIcons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#cce6d0] items-center justify-center">
            <MaterialIcons name="person" size={18} color="#506856" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 max-w-md w-full self-center pt-4" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Breadcrumb / Section Title */}
        <View className="py-6">
          <TouchableOpacity onPress={() => router.back()} className="flex-row items-center gap-2 mb-2">
            <MaterialIcons name="arrow-back" size={16} color="#012d1d" />
            <Text className="text-xs font-medium text-[#414844] uppercase tracking-widest">Settings</Text>
          </TouchableOpacity>
          <Text className="text-3xl font-bold text-[#012d1d]">Privacy Settings</Text>
          <Text className="text-sm text-[#414844] mt-1">Manage how your data is handled and who can see your administrative profile.</Text>
        </View>

        <View className="gap-4">
          
          {/* Visibility & Profile */}
          <View className="bg-white border border-[#c1c8c2] p-4 rounded-xl">
            <View className="flex-row items-center gap-3 mb-4">
              <View className="w-8 h-8 rounded bg-[#1b4332] items-center justify-center">
                <MaterialIcons name="visibility" size={20} color="#86af99" />
              </View>
              <Text className="text-xl font-bold text-[#012d1d]">Profile Visibility</Text>
            </View>

            <View className="gap-6">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-4">
                  <Text className="text-base font-semibold text-[#191c1d]">Public Admin Profile</Text>
                  <Text className="text-xs text-[#414844]">Allow other administrators to find your profile in the directory.</Text>
                </View>
                <Switch 
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  thumbColor={'#ffffff'}
                  ios_backgroundColor="#c1c8c2"
                  onValueChange={setPublicProfile}
                  value={publicProfile}
                />
              </View>

              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-4">
                  <Text className="text-base font-semibold text-[#191c1d]">Activity Status</Text>
                  <Text className="text-xs text-[#414844]">Show when you are actively moderating or online.</Text>
                </View>
                <Switch 
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  thumbColor={'#ffffff'}
                  ios_backgroundColor="#c1c8c2"
                  onValueChange={setActivityStatus}
                  value={activityStatus}
                />
              </View>
            </View>
          </View>

          {/* Third-Party Sharing */}
          <View className="bg-white border border-[#c1c8c2] p-4 rounded-xl">
            <View className="flex-row items-center gap-3 mb-4">
              <View className="w-8 h-8 rounded bg-[#cce6d0] items-center justify-center">
                <MaterialIcons name="share" size={20} color="#506856" />
              </View>
              <Text className="text-xl font-bold text-[#012d1d]">Data Sharing</Text>
            </View>

            <View className="gap-4">
              <View className="flex-row gap-4 p-3 bg-[#edeeef] rounded-lg items-start border border-[#c1c8c2]/30">
                <MaterialIcons name="analytics" size={24} color="#1b4332" className="mt-1" />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-[#191c1d]">Diagnostic Data</Text>
                  <Text className="text-xs text-[#414844] mb-3">Share anonymous performance logs with ecosystem partners for system optimization.</Text>
                  <TouchableOpacity className="px-3 py-1 border border-[#012d1d] rounded-full self-start">
                    <Text className="text-xs font-medium text-[#012d1d]">Manage Partners</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex-row items-center justify-between pt-2">
                <View className="flex-1 pr-4">
                  <Text className="text-base font-semibold text-[#191c1d]">Marketing Intelligence</Text>
                  <Text className="text-xs text-[#414844]">Third-party cookies and behavioral tracking.</Text>
                </View>
                <Switch 
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  thumbColor={'#ffffff'}
                  ios_backgroundColor="#c1c8c2"
                  onValueChange={setMarketingIntelligence}
                  value={marketingIntelligence}
                />
              </View>
            </View>
          </View>

          {/* Data Rights Card */}
          <View className="bg-[#1b4332] p-6 rounded-xl relative overflow-hidden">
            {/* Atmospheric background element */}
            <View className="absolute -right-10 -bottom-10 opacity-10">
              <MaterialIcons name="gavel" size={160} color="white" />
            </View>
            
            <Text className="text-xl font-bold text-[#86af99] mb-2">Your Data Rights</Text>
            <Text className="text-xs text-[#86af99]/80 mb-6 leading-relaxed">
              Under the Global Digital Stewardship Act, you maintain full control over your administrative data footprint. You have the right to request a full export of your logs, rectification of records, and the right to be forgotten.
            </Text>
            
            <View className="flex-row gap-3 relative z-10">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 bg-white/10 border border-white/20 py-2 rounded-lg active:scale-95">
                <MaterialIcons name="download" size={18} color="white" />
                <Text className="text-xs font-medium text-white">Export Data</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 bg-white/10 border border-white/20 py-2 rounded-lg active:scale-95">
                <MaterialIcons name="delete-forever" size={18} color="white" />
                <Text className="text-xs font-medium text-white">Delete Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Privacy Policy Link */}
          <View className="py-8 flex-col items-center gap-4">
            <TouchableOpacity className="flex-row items-center gap-2 px-6 py-3 bg-[#e7e8e9] rounded-full active:bg-[#e1e3e4]">
              <MaterialIcons name="policy" size={24} color="#012d1d" />
              <Text className="text-xs font-bold text-[#012d1d]">READ FULL PRIVACY POLICY</Text>
              <MaterialIcons name="chevron-right" size={24} color="#012d1d" />
            </TouchableOpacity>
            <Text className="text-[10px] font-medium text-[#414844] text-center opacity-60 uppercase tracking-widest">
              Last Updated: October 24, 2023
            </Text>
          </View>

        </View>
      </ScrollView>

      {/* Bottom Nav */}
      {/* Reusing existing logic but showing static to match html */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f8f9fa] border-t border-[#c1c8c2] py-2 px-2 z-50 h-16 pb-2 md:hidden">
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="settings" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="person" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="notifications" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#1b4332] rounded-full px-4 py-1">
          <MaterialIcons name="security" size={24} color="#86af99" />
          <Text className="text-[10px] text-[#86af99]">Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="contact-support" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Support</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
