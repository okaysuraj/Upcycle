import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function PlatformSettings() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);

  return (
    <View className="flex-1 bg-[#f8f9fa]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f8f9fa] border-b border-[#c1c8c2] px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-2">
          <Ionicons name="leaf" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 rounded-full hover:bg-[#e7e8e9]">
            <Ionicons name="notifications-outline" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#1b4332] items-center justify-center">
            <Text className="text-white font-bold text-xs">AD</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Brand Assets */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#012d1d]">Brand Assets</Text>
            <TouchableOpacity>
              <Text className="text-[#012d1d] font-bold text-xs underline">Edit All</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-4">
            {/* Logo Management */}
            <View className="bg-white border border-[#c1c8c2] p-4 rounded-xl">
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-xs font-bold text-[#414844]">Primary Logo</Text>
                <Text className="text-[10px] text-[#717973]">SVG, PNG (Max 2MB)</Text>
              </View>
              <View className="flex-row items-center gap-4">
                <View className="w-16 h-16 rounded border-2 border-dashed border-[#c1c8c2] bg-[#f3f4f5] items-center justify-center">
                  <Ionicons name="image-outline" size={24} color="#717973" />
                </View>
                <TouchableOpacity className="flex-1 py-2 bg-[#012d1d] rounded-lg items-center justify-center">
                  <Text className="text-white font-bold text-xs">Replace Asset</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Typography & Palette Bento */}
            <View className="flex-row gap-4">
              <View className="flex-1 bg-white border border-[#c1c8c2] p-4 rounded-xl justify-between">
                <Text className="text-xs font-bold text-[#414844] mb-2">Typography</Text>
                <View>
                  <Text className="text-sm font-bold text-[#012d1d]">Hanken Grotesk</Text>
                  <Text className="text-[10px] text-[#717973]">Inter UI</Text>
                </View>
              </View>
              
              <View className="flex-1 bg-white border border-[#c1c8c2] p-4 rounded-xl">
                <Text className="text-xs font-bold text-[#414844] mb-2">Palette</Text>
                <View className="flex-row gap-1">
                  <View className="w-6 h-6 rounded-full bg-[#012d1d]" />
                  <View className="w-6 h-6 rounded-full bg-[#4c6452]" />
                  <View className="w-6 h-6 rounded-full bg-[#002d1c]" />
                  <View className="w-6 h-6 rounded-full bg-[#c1c8c2]" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Security Policies */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-[#012d1d] mb-4">Security Policies</Text>
          <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden">
            
            {/* 2FA Toggle */}
            <View className="p-4 flex-row items-center justify-between border-b border-[#c1c8c2]">
              <View>
                <Text className="text-sm font-bold text-[#191c1d]">Enforce 2FA</Text>
                <Text className="text-xs text-[#414844]">Require for all admin roles</Text>
              </View>
              <Switch 
                value={is2FAEnabled}
                onValueChange={setIs2FAEnabled}
                trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
              />
            </View>

            {/* Session Timeout */}
            <View className="p-4 flex-row items-center justify-between border-b border-[#c1c8c2]">
              <View>
                <Text className="text-sm font-bold text-[#191c1d]">Session Timeout</Text>
                <Text className="text-xs text-[#414844]">Auto-logout after inactivity</Text>
              </View>
              <View className="bg-[#cce6d0] px-2 py-1 rounded">
                <Text className="text-[#012d1d] text-[10px] font-bold">30 MIN</Text>
              </View>
            </View>

            {/* IP Whitelist */}
            <View className="p-4 flex-row items-center justify-between">
              <View>
                <Text className="text-sm font-bold text-[#191c1d]">IP Whitelisting</Text>
                <Text className="text-xs text-[#414844]">Restricted access ranges</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#717973" />
            </View>

          </View>
        </View>

        {/* API Gateways */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-[#012d1d]">API Gateways</Text>
            <TouchableOpacity className="bg-[#012d1d] w-8 h-8 rounded-full items-center justify-center shadow-sm">
              <Ionicons name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            
            {/* Gateway Key Card 1 */}
            <View className="bg-white border border-[#c1c8c2] p-4 rounded-xl">
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="cloud-done-outline" size={20} color="#4c6452" />
                  <Text className="text-xs font-bold text-[#191c1d]">Main Logistics Hub</Text>
                </View>
                <View className="bg-[#00452e] px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-bold text-[#75b393] uppercase tracking-wider">Active</Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between bg-[#f3f4f5] p-2 rounded border border-[#c1c8c2] mt-3">
                <Text className="text-[10px] text-[#717973] flex-1 mr-2" numberOfLines={1}>ak_live_72x9kLpqN2...</Text>
                <TouchableOpacity>
                  <Ionicons name="copy-outline" size={16} color="#012d1d" />
                </TouchableOpacity>
              </View>
              <View className="mt-3 flex-row justify-between items-center">
                <Text className="text-[10px] text-[#717973]">Last used: 2m ago</Text>
                <TouchableOpacity>
                  <Text className="text-[10px] text-[#ba1a1a]">Revoke</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Gateway Key Card 2 */}
            <View className="bg-white border border-[#c1c8c2] p-4 rounded-xl opacity-75">
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="terminal-outline" size={20} color="#4c6452" />
                  <Text className="text-xs font-bold text-[#191c1d]">Dev Sandbox Environment</Text>
                </View>
                <View className="bg-[#c1c8c2] px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-bold text-[#414844] uppercase tracking-wider">Expired</Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between bg-[#f3f4f5] p-2 rounded border border-[#c1c8c2] mt-3 grayscale">
                <Text className="text-[10px] text-[#717973] flex-1 mr-2" numberOfLines={1}>ak_test_v9z1pQrsX...</Text>
                <TouchableOpacity>
                  <Ionicons name="refresh" size={16} color="#717973" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>

        {/* Danger Zone */}
        <View className="mb-6 p-4 border border-[#ba1a1a]/20 bg-[#ffdad6]/10 rounded-xl mt-4">
          <Text className="text-[#ba1a1a] font-bold text-sm mb-1">Danger Zone</Text>
          <Text className="text-[10px] text-[#414844] mb-4">Actions here are permanent and require supervisor override.</Text>
          <TouchableOpacity className="w-full py-3 border-2 border-[#ba1a1a] rounded-lg items-center justify-center">
            <Text className="text-[#ba1a1a] font-bold text-xs">Reset Environment</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
