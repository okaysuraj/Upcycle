import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CreatePost() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full">
            <Ionicons name="close" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Create Update</Text>
        </View>
        <TouchableOpacity className="bg-[#00522d] px-4 py-1.5 rounded-full">
           <Text className="text-white font-bold text-xs">Publish</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#00522d] mb-1">Share Sustainability Update</Text>
          <Text className="text-gray-500">Inspire your community with real progress and measurable impact.</Text>
        </View>

        {/* Form Container */}
        <View className="bg-white rounded-[24px] border border-gray-200 p-6 shadow-sm gap-6 mb-8">
          
          {/* Text Input */}
          <View className="gap-2">
            <Text className="text-sm font-bold text-[#00522d] ml-1">Share your update</Text>
            <TextInput 
              className="w-full h-32 bg-[#f4faff] border border-gray-200 rounded-xl p-4 text-base"
              placeholder="What's happening in your sustainability journey?"
              multiline
              numberOfLines={4}
              style={{ textAlignVertical: 'top' }}
            />
          </View>

          {/* Media Upload */}
          <View className="gap-2">
            <Text className="text-sm font-bold text-[#00522d] ml-1">Media</Text>
            <TouchableOpacity className="border-2 border-dashed border-[#bec9be] bg-[#f4faff] rounded-xl p-8 items-center justify-center">
              <Ionicons name="camera" size={40} color="#00522d" className="mb-2" />
              <Text className="text-sm font-bold text-[#3f4941]">Upload sustainable captures</Text>
              <Text className="text-[10px] text-gray-500 mt-1">JPG, PNG, MP4 up to 50MB</Text>
            </TouchableOpacity>
          </View>

          {/* Impact Tagging */}
          <View className="gap-2">
            <Text className="text-sm font-bold text-[#00522d] ml-1">Impact Tagging</Text>
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 p-3 bg-[#f4faff] border border-gray-200 rounded-xl flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-lg bg-[#006d3e] items-center justify-center">
                  <Ionicons name="trash-bin" size={16} color="white" />
                </View>
                <View>
                  <Text className="text-xs font-bold text-[#0d1e25]">Waste Diverted</Text>
                  <Text className="text-[10px] text-gray-500">Add kg or units</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 p-3 bg-[#f4faff] border border-gray-200 rounded-xl flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-lg bg-[#3c6842] items-center justify-center">
                  <Ionicons name="flash" size={16} color="white" />
                </View>
                <View>
                  <Text className="text-xs font-bold text-[#0d1e25]">Energy Saved</Text>
                  <Text className="text-[10px] text-gray-500">Add kWh reduction</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Target Audience */}
          <View className="gap-2">
            <Text className="text-sm font-bold text-[#00522d] ml-1">Target Audience</Text>
            <View className="bg-[#f4faff] border border-gray-200 rounded-xl px-4 py-3 flex-row justify-between items-center">
              <Text className="text-base text-[#0d1e25]">Main Community Feed</Text>
              <Ionicons name="chevron-down" size={20} color="#3f4941" />
            </View>
          </View>

        </View>
        
        {/* Tip Card */}
        <View className="bg-[#00522d] p-6 rounded-[24px] relative overflow-hidden shadow-sm mb-6">
          <View className="z-10">
            <Text className="text-lg font-bold text-white mb-2">Eco-Pro Tip</Text>
            <Text className="text-sm text-white/90 leading-relaxed">
              Adding a 30-second video of your process increases trust and inspires faster adoption of green habits.
            </Text>
          </View>
          <Ionicons name="bulb" size={100} color="white" style={{ position: 'absolute', bottom: -20, right: -10, opacity: 0.1, transform: [{ rotate: '15deg' }] }} />
        </View>

      </ScrollView>
    </View>
  );
}
