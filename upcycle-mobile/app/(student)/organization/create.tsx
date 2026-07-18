import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CreateOrganization() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [orgType, setOrgType] = useState('campus');
  const [capacity, setCapacity] = useState(500);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#006d3e" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <View className="w-10 h-10 rounded-full bg-[#d9e6da] items-center justify-center">
          <Text className="text-[#5b675e] font-bold">CA</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Contextual Card */}
        <View className="bg-[#E8F5E9] rounded-[24px] p-6 border border-[#A5D6A7] mb-6 shadow-sm">
          <View className="mb-4">
            <Ionicons name="business" size={32} color="#006d3e" style={{ marginBottom: 12 }} />
            <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Admin Console</Text>
            <Text className="text-sm text-[#3d4a40]">Defining a new organization allows you to manage waste streams, track sustainability metrics, and coordinate logistics for a specific campus or facility.</Text>
          </View>
          <View className="pt-4 border-t border-[#bccabd]/30 gap-2">
            <View className="flex-row items-center gap-2">
              <Ionicons name="checkmark-circle" size={16} color="#006d3e" />
              <Text className="text-xs text-[#3d4a40]">Validated Campus IDs</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Ionicons name="leaf" size={16} color="#006d3e" />
              <Text className="text-xs text-[#3d4a40]">Impact Reports Enabled</Text>
            </View>
          </View>
        </View>

        {/* Form Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Create Organization</Text>
          <Text className="text-sm text-[#3d4a40] mb-6">Enter the primary details for the new waste management unit.</Text>
          
          <View className="gap-6">
            {/* Name */}
            <View className="gap-2">
              <Text className="text-sm font-bold text-[#3d4a40] px-1">Organization Name</Text>
              <TextInput 
                className="bg-white border border-[#bccabd] rounded-xl h-14 px-4 font-bold text-[#0d1e25]"
                placeholder="e.g. North Side University Campus"
                placeholderTextColor="#6d7a6f"
              />
            </View>

            {/* Type */}
            <View className="gap-2">
              <Text className="text-sm font-bold text-[#3d4a40] px-1">Organization Type</Text>
              <View className="flex-row gap-3">
                <TouchableOpacity 
                  onPress={() => setOrgType('campus')}
                  className={`flex-1 h-24 items-center justify-center border rounded-xl ${orgType === 'campus' ? 'bg-[#006d3e] border-[#006d3e]' : 'bg-white border-[#bccabd]'}`}
                >
                  <Ionicons name="school" size={24} color={orgType === 'campus' ? 'white' : '#6d7a6f'} style={{ marginBottom: 4 }} />
                  <Text className={`text-xs font-bold ${orgType === 'campus' ? 'text-white' : '#0d1e25'}`}>Campus</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => setOrgType('office')}
                  className={`flex-1 h-24 items-center justify-center border rounded-xl ${orgType === 'office' ? 'bg-[#006d3e] border-[#006d3e]' : 'bg-white border-[#bccabd]'}`}
                >
                  <Ionicons name="business" size={24} color={orgType === 'office' ? 'white' : '#6d7a6f'} style={{ marginBottom: 4 }} />
                  <Text className={`text-xs font-bold ${orgType === 'office' ? 'text-white' : '#0d1e25'}`}>Office</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => setOrgType('residential')}
                  className={`flex-1 h-24 items-center justify-center border rounded-xl ${orgType === 'residential' ? 'bg-[#006d3e] border-[#006d3e]' : 'bg-white border-[#bccabd]'}`}
                >
                  <Ionicons name="home" size={24} color={orgType === 'residential' ? 'white' : '#6d7a6f'} style={{ marginBottom: 4 }} />
                  <Text className={`text-xs font-bold ${orgType === 'residential' ? 'text-white' : '#0d1e25'}`}>Residential</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Location */}
            <View className="gap-2">
              <Text className="text-sm font-bold text-[#3d4a40] px-1">Location</Text>
              <View className="relative justify-center">
                <Ionicons name="location" size={20} color="#6d7a6f" style={{ position: 'absolute', left: 16, zIndex: 10 }} />
                <TextInput 
                  className="bg-white border border-[#bccabd] rounded-xl h-14 pl-12 pr-4 font-bold text-[#0d1e25]"
                  placeholder="Street, City, State"
                  placeholderTextColor="#6d7a6f"
                />
              </View>
              <View className="h-32 rounded-xl mt-1 overflow-hidden border border-[#bccabd] bg-[#dff1fb] items-center justify-center relative">
                {/* Fake Map */}
                <View className="absolute inset-0 bg-[#dff1fb]" />
                <View className="bg-white/90 px-4 py-2 rounded-full border border-[#006d3e]/20 flex-row items-center gap-2">
                  <Ionicons name="map" size={16} color="#006d3e" />
                  <Text className="text-xs font-bold text-[#006d3e]">Preview Location</Text>
                </View>
              </View>
            </View>

            {/* Capacity Slider (Mocked as text for now) */}
            <View className="gap-2 pt-2">
              <View className="flex-row justify-between items-center px-1">
                <Text className="text-sm font-bold text-[#3d4a40]">Estimated Daily Capacity</Text>
                <Text className="font-bold text-[#006d3e]">500+</Text>
              </View>
              <View className="bg-[#dff1fb] rounded-full h-3 justify-center relative mx-1 mt-2">
                <View className="bg-[#006d3e] h-full w-[10%] rounded-full absolute left-0" />
                <View className="w-6 h-6 bg-white border-4 border-[#006d3e] rounded-full absolute left-[10%] -translate-x-3 shadow-md" />
              </View>
              <View className="flex-row justify-between px-1 mt-2">
                <Text className="text-xs text-[#6d7a6f]">Small (100)</Text>
                <Text className="text-xs text-[#6d7a6f]">Metro (5000)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Submit */}
        <View className="pt-4">
          <TouchableOpacity className="w-full h-14 bg-[#006d3e] rounded-xl flex-row items-center justify-center gap-2 shadow-sm">
            <Text className="text-white font-bold text-base">Create Organization</Text>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
