import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusProfileSettingsMobile() {
  const router = useRouter();
  const [energyEnabled, setEnergyEnabled] = useState(true);
  const [waterEnabled, setWaterEnabled] = useState(true);
  const [wasteEnabled, setWasteEnabled] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border-2 border-[#00522d]/20 overflow-hidden">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkSkApVj2P-rB04q7moZfdpOM1tnH_sAdGf80Bate-Yw1BHfj7bmL9ghPf4ODFoeoK2MJ4x1vvV_H9TAJToP0PEcIFyTZ4g2mWFX5dEPnxuo68my7WGBgP1ZLx9djhhx4NEIz3sub-y5R3Tq2rj4fG8N59MBeXn-nl2adWaJ2C-V04qFbjbkfGlB3w0sdfxFPLUc8MMq3EGBo_TKWwj1_kqOqu5cPKwb0uTZCoVN7jks5nhuZGnwGk0UhSRaiOjioI478M11wtIx4' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">Setup</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Welcome Section */}
        <View className="mb-10">
          <Text className="text-2xl font-bold text-[#3f4941] mb-1">Campus Profile</Text>
          <Text className="text-base text-[#6f7a70]">Manage your institutional identity and monitoring scope.</Text>
        </View>

        {/* Identity Section */}
        <View className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row items-center gap-3 mb-6">
            <View className="bg-[#9cf6ba] p-2 rounded-xl">
              <MaterialIcons name="domain" size={24} color="#00522d" />
            </View>
            <Text className="text-2xl font-bold text-[#0d1e25]">Identity</Text>
          </View>

          <View className="gap-4">
            <View className="gap-1">
              <Text className="text-sm font-medium text-[#6f7a70] px-1">Campus Name</Text>
              <TextInput 
                className="w-full bg-[#e7f6ff] rounded-xl p-3 text-base text-[#0d1e25]"
                defaultValue="Green Horizon University"
              />
            </View>
            <View className="gap-1">
              <Text className="text-sm font-medium text-[#6f7a70] px-1">Primary Contact Email</Text>
              <TextInput 
                className="w-full bg-[#e7f6ff] rounded-xl p-3 text-base text-[#0d1e25]"
                defaultValue="admin@greenhorizon.edu"
                keyboardType="email-address"
              />
            </View>
            <View className="gap-1">
              <Text className="text-sm font-medium text-[#6f7a70] px-1">Campus Address</Text>
              <TextInput 
                className="w-full bg-[#e7f6ff] rounded-xl p-3 text-base text-[#0d1e25]"
                defaultValue="100 Sustainability Way, Eco Valley, CA 90210, United States"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </View>
        </View>

        {/* Monitoring Modules */}
        <View className="mb-6">
          <View className="bg-white/70 rounded-[24px] p-6 border border-[#a5d6a7]/30 shadow-sm">
            <View className="flex-row items-center gap-3 mb-4">
              <MaterialIcons name="bolt" size={24} color="#00522d" />
              <Text className="text-2xl font-bold text-[#0d1e25]">Monitoring</Text>
            </View>

            <View className="gap-4">
              <View className={`flex-row items-center justify-between p-3 rounded-2xl ${energyEnabled ? 'bg-[#006d3e]/5' : 'bg-white/50'}`}>
                <View>
                  <Text className="text-sm font-medium text-[#0d1e25]">Energy Analytics</Text>
                  <Text className="text-xs font-bold text-[#6f7a70]">Real-time grid tracking</Text>
                </View>
                <Switch 
                  value={energyEnabled}
                  onValueChange={setEnergyEnabled}
                  trackColor={{ false: '#d9ebf5', true: '#006d3e' }}
                  thumbColor={energyEnabled ? '#ffffff' : '#6f7a70'}
                />
              </View>

              <View className={`flex-row items-center justify-between p-3 rounded-2xl ${waterEnabled ? 'bg-[#006d3e]/5' : 'bg-white/50'}`}>
                <View>
                  <Text className="text-sm font-medium text-[#0d1e25]">Water Systems</Text>
                  <Text className="text-xs font-bold text-[#6f7a70]">Flow & leakage sensors</Text>
                </View>
                <Switch 
                  value={waterEnabled}
                  onValueChange={setWaterEnabled}
                  trackColor={{ false: '#d9ebf5', true: '#006d3e' }}
                  thumbColor={waterEnabled ? '#ffffff' : '#6f7a70'}
                />
              </View>

              <View className={`flex-row items-center justify-between p-3 rounded-2xl ${wasteEnabled ? 'bg-[#006d3e]/5' : 'bg-white/50'}`}>
                <View>
                  <Text className="text-sm font-medium text-[#0d1e25]">Waste Management</Text>
                  <Text className="text-xs font-bold text-[#6f7a70]">Bin capacity & recycling</Text>
                </View>
                <Switch 
                  value={wasteEnabled}
                  onValueChange={setWasteEnabled}
                  trackColor={{ false: '#d9ebf5', true: '#006d3e' }}
                  thumbColor={wasteEnabled ? '#ffffff' : '#6f7a70'}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Geofencing Link Section */}
        <TouchableOpacity className="bg-[#00522d] rounded-[24px] p-6 flex-row items-center justify-between shadow-lg active:scale-95 mb-6">
          <View className="flex-row items-center gap-3">
            <MaterialIcons name="map" size={24} color="white" />
            <View>
              <Text className="text-2xl font-bold text-white">Geofencing Settings</Text>
              <Text className="text-xs font-bold text-white/70">Define active monitoring boundaries</Text>
            </View>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="white" />
        </TouchableOpacity>

        {/* Location Preview */}
        <View className="mb-6">
          <View className="w-full h-48 rounded-[24px] overflow-hidden border border-[#bec9be]/30 shadow-sm relative">
            <ImageBackground 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvcu4ENCQx7P1sLdLj0I0RQ-PsLTenJ3QNFzOsDe_kA55DgCmfjfR29VZFw_vk0UOGxWOn4vQnh6s0dJqOxdbpwtyjDZb4a9ko0_rwdSWbacR_plfFoqyacSq_6LSAasGPJaunmTdrsTIPsSFk2mwVxyf3ETEaj10eluOxSk66TVbsnWA-1vIP6NF3ebcYhtu2b6m0nt4W1izclDF5Ecc81B7btmY9L9yrXRXnkF9IIlLBke2mFmmwIjpWNkrZs3B8u5vsdqfPHKU' }}
              className="absolute inset-0 w-full h-full"
            />
            <View className="absolute bottom-3 left-3 bg-white/90 px-3 py-1.5 rounded-full shadow-sm flex-row items-center gap-1">
              <MaterialIcons name="location-on" size={16} color="#00522d" />
              <Text className="text-xs font-bold text-[#00522d]">Active Zone: North Campus</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="dashboard" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="delete" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="bolt" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="domain" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1] mt-0.5">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
