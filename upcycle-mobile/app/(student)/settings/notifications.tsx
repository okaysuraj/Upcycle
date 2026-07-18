import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function NotificationSettings() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);

  const [platformActivityOpen, setPlatformActivityOpen] = useState(true);
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(false);

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
            <Ionicons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#a5d0b9] items-center justify-center">
            <Text className="text-[#012d1d] font-bold text-xs">UA</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#191c1d] mb-1">Notifications</Text>
          <Text className="text-xs text-[#414844]">Manage how you receive alerts and system updates.</Text>
        </View>

        {/* Channel Settings */}
        <View className="mb-8 gap-4">
          
          <View className="bg-white border border-[#c1c8c2] rounded-xl p-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4 flex-1 pr-4">
              <View className="w-10 h-10 rounded-lg bg-[#1b4332] items-center justify-center">
                <Ionicons name="notifications" size={24} color="#86af99" />
              </View>
              <View>
                <Text className="text-sm font-bold text-[#191c1d]">Push Notifications</Text>
                <Text className="text-xs text-[#414844]">Real-time alerts on mobile</Text>
              </View>
            </View>
            <Switch 
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
            />
          </View>

          <View className="flex-row gap-4">
            
            <View className="flex-1 bg-white border border-[#c1c8c2] rounded-xl p-4 justify-between h-32">
              <View className="w-8 h-8 rounded bg-[#cce6d0] items-center justify-center mb-3">
                <Ionicons name="mail" size={18} color="#506856" />
              </View>
              <View className="flex-row items-end justify-between">
                <View>
                  <Text className="text-xs font-bold text-[#191c1d]">Email Alerts</Text>
                  <Text className="text-[10px] text-[#414844]">Daily digest</Text>
                </View>
                <Switch 
                  value={emailEnabled}
                  onValueChange={setEmailEnabled}
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </View>

            <View className="flex-1 bg-white border border-[#c1c8c2] rounded-xl p-4 justify-between h-32">
              <View className="w-8 h-8 rounded bg-[#00452e] items-center justify-center mb-3">
                <Ionicons name="chatbubble-ellipses" size={18} color="#75b393" />
              </View>
              <View className="flex-row items-end justify-between">
                <View>
                  <Text className="text-xs font-bold text-[#191c1d]">SMS Updates</Text>
                  <Text className="text-[10px] text-[#414844]">Critical only</Text>
                </View>
                <Switch 
                  value={smsEnabled}
                  onValueChange={setSmsEnabled}
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </View>

          </View>
        </View>

        {/* Categories Section */}
        <View className="mb-8">
          <Text className="text-[10px] font-bold text-[#414844] uppercase tracking-wider mb-4 px-1">Subscription Categories</Text>
          
          <View className="gap-4">
            
            {/* Platform Activity */}
            <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden">
              <TouchableOpacity 
                className="p-4 flex-row items-center justify-between"
                onPress={() => setPlatformActivityOpen(!platformActivityOpen)}
              >
                <View className="flex-row items-center gap-3">
                  <Ionicons name="people" size={24} color="#012d1d" />
                  <Text className="text-sm font-bold text-[#191c1d]">Platform Activity</Text>
                </View>
                <Ionicons name={platformActivityOpen ? "chevron-up" : "chevron-down"} size={24} color="#414844" />
              </TouchableOpacity>
              
              {platformActivityOpen && (
                <View className="px-4 pb-4 pt-4 border-t border-[#c1c8c2]/30 gap-4">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xs text-[#414844]">New user registrations</Text>
                    <Switch value={true} onValueChange={() => {}} trackColor={{ true: '#1b4332' }} style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }} />
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xs text-[#414844]">Reported content</Text>
                    <Switch value={true} onValueChange={() => {}} trackColor={{ true: '#1b4332' }} style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }} />
                  </View>
                </View>
              )}
            </View>

            {/* System Health */}
            <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden">
              <TouchableOpacity className="p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <Ionicons name="heart" size={24} color="#ba1a1a" />
                  <Text className="text-sm font-bold text-[#191c1d]">System Health Alerts</Text>
                </View>
                <Ionicons name="chevron-down" size={24} color="#414844" />
              </TouchableOpacity>
            </View>

            {/* Marketplace Updates */}
            <View className="bg-white border border-[#c1c8c2] rounded-xl overflow-hidden">
              <TouchableOpacity className="p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <Ionicons name="storefront" size={24} color="#4c6452" />
                  <Text className="text-sm font-bold text-[#191c1d]">Marketplace Updates</Text>
                </View>
                <Ionicons name="chevron-down" size={24} color="#414844" />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        {/* Quiet Hours Section */}
        <View className="bg-[#a5d0b9]/20 border border-[#a5d0b9]/40 rounded-xl p-5 mb-8">
          <View className="flex-row items-start justify-between mb-4">
            <View className="flex-1 pr-4">
              <Text className="text-xl font-bold text-[#012d1d]">Quiet Hours</Text>
              <Text className="text-xs text-[#414844] mt-1">Silence all non-critical alerts during specified times.</Text>
            </View>
            <Ionicons name="moon" size={28} color="#012d1d" />
          </View>
          
          <View className="gap-4">
            <View className="flex-row items-center justify-between p-3 bg-white rounded-lg border border-[#c1c8c2]/50">
              <Text className="text-xs font-bold text-[#414844]">Enable Schedule</Text>
              <Switch 
                value={quietHoursEnabled}
                onValueChange={setQuietHoursEnabled}
                trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
              />
            </View>

            <View className={`flex-row gap-4 ${quietHoursEnabled ? '' : 'opacity-50'}`}>
              <View className="flex-1 gap-1">
                <Text className="text-[10px] font-bold text-[#414844] px-1">From</Text>
                <View className="flex-row items-center gap-2 p-3 bg-white rounded-lg border border-[#c1c8c2]">
                  <Ionicons name="time" size={16} color="#414844" />
                  <Text className="text-sm">22:00</Text>
                </View>
              </View>
              <View className="flex-1 gap-1">
                <Text className="text-[10px] font-bold text-[#414844] px-1">To</Text>
                <View className="flex-row items-center gap-2 p-3 bg-white rounded-lg border border-[#c1c8c2]">
                  <Ionicons name="sunny" size={16} color="#414844" />
                  <Text className="text-sm">07:00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Support Info */}
        <View className="p-6 bg-[#edeeef] rounded-2xl items-center gap-3">
          <View className="w-full h-32 rounded-xl bg-[#c1c8c2] mb-2" />
          <Text className="text-xs text-[#414844] italic text-center">"Sustainable operations require focused oversight. Tailor your alerts to match your administrative workflow."</Text>
        </View>

      </ScrollView>
    </View>
  );
}
