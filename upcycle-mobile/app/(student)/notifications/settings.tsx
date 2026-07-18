import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function NotificationSettings() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(false);
  const [platformActivity, setPlatformActivity] = useState(false);
  const [systemHealth, setSystemHealth] = useState(false);
  const [marketplaceUpdates, setMarketplaceUpdates] = useState(false);

  return (
    <View className="flex-1 bg-[#f8f9fa]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white border-b border-gray-200 px-4 h-14 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#012d1d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle</Text>
        </View>
        <View className="w-8 h-8 rounded-full bg-[#a5d0b9] items-center justify-center">
           <Text className="text-[#012d1d] font-bold text-xs">UA</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#191c1d] mb-1">Notifications</Text>
          <Text className="text-[#414844] text-sm">Manage how you receive alerts and system updates.</Text>
        </View>

        {/* Channel Settings */}
        <View className="gap-4 mb-8">
          <View className="bg-white border border-gray-200 rounded-xl p-4 flex-row items-center justify-between shadow-sm">
            <View className="flex-row items-center gap-4 flex-1">
              <View className="w-10 h-10 rounded-lg bg-[#1b4332] items-center justify-center">
                <Ionicons name="notifications" size={24} color="white" />
              </View>
              <View>
                <Text className="font-bold text-[#191c1d] text-base">Push Notifications</Text>
                <Text className="text-xs text-[#414844]">Real-time alerts on mobile</Text>
              </View>
            </View>
            <Switch 
              value={pushEnabled} 
              onValueChange={setPushEnabled}
              trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
              thumbColor="white"
            />
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1 bg-white border border-gray-200 rounded-xl p-4 justify-between h-28 shadow-sm">
              <View className="w-8 h-8 rounded bg-[#cce6d0] items-center justify-center mb-2">
                <Ionicons name="mail" size={16} color="#506856" />
              </View>
              <View className="flex-row items-end justify-between">
                <View>
                  <Text className="font-bold text-[#191c1d] text-sm">Email Alerts</Text>
                  <Text className="text-[10px] text-[#414844]">Daily digest</Text>
                </View>
                <Switch 
                  value={emailEnabled} 
                  onValueChange={setEmailEnabled}
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  thumbColor="white"
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </View>

            <View className="flex-1 bg-white border border-gray-200 rounded-xl p-4 justify-between h-28 shadow-sm">
              <View className="w-8 h-8 rounded bg-[#00452e] items-center justify-center mb-2">
                <Ionicons name="chatbubble" size={16} color="white" />
              </View>
              <View className="flex-row items-end justify-between">
                <View>
                  <Text className="font-bold text-[#191c1d] text-sm">SMS Updates</Text>
                  <Text className="text-[10px] text-[#414844]">Critical only</Text>
                </View>
                <Switch 
                  value={smsEnabled} 
                  onValueChange={setSmsEnabled}
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  thumbColor="white"
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Categories Section */}
        <View className="mb-8">
          <Text className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-1">Subscription Categories</Text>
          
          <View className="gap-3">
            <View className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <TouchableOpacity 
                onPress={() => setPlatformActivity(!platformActivity)}
                className="p-4 flex-row justify-between items-center bg-white"
              >
                <View className="flex-row items-center gap-3">
                  <Ionicons name="people" size={24} color="#012d1d" />
                  <Text className="font-bold text-[#191c1d]">Platform Activity</Text>
                </View>
                <Ionicons name={platformActivity ? "chevron-up" : "chevron-down"} size={20} color="#414844" />
              </TouchableOpacity>
              {platformActivity && (
                <View className="px-4 pb-4 pt-2 border-t border-gray-100 gap-4">
                   <View className="flex-row justify-between items-center">
                     <Text className="text-sm text-[#414844]">New user registrations</Text>
                     <Switch value={true} trackColor={{ false: '#c1c8c2', true: '#1b4332' }} thumbColor="white" style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }} />
                   </View>
                   <View className="flex-row justify-between items-center">
                     <Text className="text-sm text-[#414844]">Reported content</Text>
                     <Switch value={true} trackColor={{ false: '#c1c8c2', true: '#1b4332' }} thumbColor="white" style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }} />
                   </View>
                </View>
              )}
            </View>

            <View className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <TouchableOpacity 
                onPress={() => setSystemHealth(!systemHealth)}
                className="p-4 flex-row justify-between items-center bg-white"
              >
                <View className="flex-row items-center gap-3">
                  <Ionicons name="fitness" size={24} color="#ba1a1a" />
                  <Text className="font-bold text-[#191c1d]">System Health Alerts</Text>
                </View>
                <Ionicons name={systemHealth ? "chevron-up" : "chevron-down"} size={20} color="#414844" />
              </TouchableOpacity>
            </View>

            <View className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <TouchableOpacity 
                onPress={() => setMarketplaceUpdates(!marketplaceUpdates)}
                className="p-4 flex-row justify-between items-center bg-white"
              >
                <View className="flex-row items-center gap-3">
                  <Ionicons name="cart" size={24} color="#4c6452" />
                  <Text className="font-bold text-[#191c1d]">Marketplace Updates</Text>
                </View>
                <Ionicons name={marketplaceUpdates ? "chevron-up" : "chevron-down"} size={20} color="#414844" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quiet Hours */}
        <View className="bg-[#a5d0b9]/20 border border-[#a5d0b9]/40 rounded-xl p-5 mb-8">
          <View className="flex-row justify-between items-start mb-6">
            <View className="flex-1 pr-4">
              <Text className="text-lg font-bold text-[#012d1d] mb-1">Quiet Hours</Text>
              <Text className="text-xs text-[#414844]">Silence all non-critical alerts during specified times.</Text>
            </View>
            <Ionicons name="moon" size={28} color="#012d1d" />
          </View>
          
          <View className="gap-4">
            <View className="flex-row justify-between items-center bg-white p-3 rounded-lg border border-gray-200">
              <Text className="text-sm font-bold text-[#414844]">Enable Schedule</Text>
              <Switch 
                value={quietHoursEnabled} 
                onValueChange={setQuietHoursEnabled}
                trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                thumbColor="white"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              />
            </View>
            
            <View className={`flex-row gap-4 ${!quietHoursEnabled ? 'opacity-50' : ''}`} pointerEvents={quietHoursEnabled ? 'auto' : 'none'}>
              <View className="flex-1 gap-1">
                <Text className="text-[10px] font-bold text-[#414844] px-1">From</Text>
                <View className="flex-row items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                  <Ionicons name="time" size={16} color="#414844" />
                  <Text className="text-sm font-bold text-[#191c1d]">22:00</Text>
                </View>
              </View>
              <View className="flex-1 gap-1">
                <Text className="text-[10px] font-bold text-[#414844] px-1">To</Text>
                <View className="flex-row items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                  <Ionicons name="sunny" size={16} color="#414844" />
                  <Text className="text-sm font-bold text-[#191c1d]">07:00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Support Info */}
        <View className="p-6 bg-[#edeeef] rounded-2xl items-center gap-3">
          <View className="w-full h-32 rounded-xl overflow-hidden bg-[#a5d0b9] items-center justify-center">
             <Ionicons name="leaf" size={60} color="#012d1d" />
          </View>
          <Text className="text-xs text-[#414844] text-center italic">
            "Sustainable operations require focused oversight. Tailor your alerts to match your administrative workflow."
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}
