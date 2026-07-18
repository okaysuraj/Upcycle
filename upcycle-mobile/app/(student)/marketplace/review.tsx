import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ReviewRating() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  const [rating, setRating] = useState(0);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full">
            <Ionicons name="menu" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center gap-1 bg-[#2eb872]/10 px-2 py-1 rounded-full mr-2">
            <Ionicons name="checkmark-circle" size={12} color="#00522d" />
            <Text className="text-[10px] font-bold text-[#00522d]">Project Verified</Text>
          </View>
          <TouchableOpacity className="p-2">
            <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-6">
          <TouchableOpacity onPress={() => router.back()} className="flex-row items-center gap-1 mb-4 self-start">
            <Ionicons name="arrow-back" size={14} color="#00522d" />
            <Text className="text-sm font-bold text-[#00522d]">Back to Project Details</Text>
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Share Your Experience</Text>
          <Text className="text-gray-500">Help our community grow by reviewing the "Solar Grid Expansion Phase 1" project. Your feedback drives institutional sustainability.</Text>
        </View>

        {/* Project Summary */}
        <View className="bg-white rounded-[24px] border border-gray-200 p-6 flex-row items-center gap-4 mb-6 shadow-sm">
          <View className="w-20 h-20 rounded-xl bg-[#006d3e]/10 items-center justify-center">
            <Ionicons name="sunny" size={40} color="#00522d" />
          </View>
          <View className="flex-1">
            <View className="bg-[#d9e6da] self-start px-2 py-1 rounded-full mb-2">
              <Text className="text-[10px] font-bold text-[#556158]">Completed Project</Text>
            </View>
            <Text className="font-bold text-[#0d1e25] text-base mb-1">Solar Grid Expansion Phase 1</Text>
            <Text className="text-[10px] text-gray-500">Vendor: Helios Energy Solutions • Oct 24, 2023</Text>
          </View>
        </View>

        {/* Rating Card */}
        <View className="bg-white rounded-[24px] border border-gray-200 p-6 items-center justify-center mb-6 shadow-sm">
          <Text className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Overall Satisfaction</Text>
          <View className="flex-row gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Ionicons 
                  name={star <= rating ? "star" : "star-outline"} 
                  size={40} 
                  color={star <= rating ? "#006d3e" : "#bec9be"} 
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text className="text-lg font-bold text-[#00522d]">{rating > 0 ? `${rating} out of 5 Stars` : 'Select your rating'}</Text>
        </View>

        {/* Specific Metrics */}
        <View className="bg-white/70 border border-white rounded-[24px] p-6 shadow-sm mb-6">
          <Text className="font-bold text-[#0d1e25] mb-4">Detailed Performance</Text>
          <View className="gap-4">
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-bold text-gray-500">Timeliness</Text>
                <Text className="text-xs font-bold text-[#00522d]">4.8/5</Text>
              </View>
              <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '96%' }} />
              </View>
            </View>
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-bold text-gray-500">Sustainability Impact</Text>
                <Text className="text-xs font-bold text-[#00522d]">5.0/5</Text>
              </View>
              <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '100%' }} />
              </View>
            </View>
            <View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-bold text-gray-500">Communication</Text>
                <Text className="text-xs font-bold text-[#00522d]">4.2/5</Text>
              </View>
              <View className="h-2 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                <View className="h-full bg-[#00522d]" style={{ width: '84%' }} />
              </View>
            </View>
          </View>
        </View>

        {/* Feedback Text Area */}
        <View className="bg-white rounded-[24px] border border-gray-200 p-6 mb-6 shadow-sm">
          <Text className="font-bold text-[#0d1e25] mb-3">Detailed Feedback</Text>
          <TextInput 
            className="w-full h-32 bg-[#f4faff] border border-gray-200 rounded-xl p-4 text-base"
            placeholder="How was the vendor's professional conduct? Did the results meet your sustainability goals?"
            multiline
            numberOfLines={4}
            style={{ textAlignVertical: 'top' }}
          />
        </View>

        {/* Photo Upload Section */}
        <View className="bg-white/70 border border-white rounded-[24px] p-6 shadow-sm mb-8">
          <Text className="font-bold text-[#0d1e25] mb-1">Attach Photos</Text>
          <Text className="text-xs text-gray-500 mb-4">Optional: Share pictures of the completed work</Text>
          
          <View className="flex-row gap-3">
            <TouchableOpacity className="w-20 h-20 rounded-xl bg-white border border-dashed border-[#bec9be] items-center justify-center">
              <Ionicons name="add" size={24} color="#6f7a70" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity className="w-full py-4 bg-[#00522d] rounded-full items-center justify-center shadow-lg">
          <Text className="text-white font-bold text-lg">Submit Review</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
