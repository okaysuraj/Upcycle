import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CourseDetail() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="absolute w-full z-50 px-4 py-4 flex-row justify-between items-center bg-white/70">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 rounded-full bg-white/50 items-center justify-center border-2 border-white">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white/50 items-center justify-center border-2 border-white">
          <Ionicons name="notifications" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Video Preview Header */}
        <View className="h-72 bg-[#00522d] w-full relative pt-20">
          <View className="absolute inset-0 bg-[#0d1e25] opacity-50" />
          <View className="absolute inset-0 items-center justify-center pt-10">
            <TouchableOpacity className="w-16 h-16 rounded-full bg-[#00522d]/50 items-center justify-center border-2 border-white/50">
              <Ionicons name="play" size={32} color="white" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 py-6 pb-32 gap-6">
          
          {/* Title & Info */}
          <View>
            <View className="bg-[#bdefbf] self-start px-3 py-1 rounded-full mb-3 flex-row items-center gap-1">
              <Ionicons name="leaf" size={14} color="#00522d" />
              <Text className="text-[10px] font-bold text-[#00522d]">CERTIFIED COURSE</Text>
            </View>
            <Text className="text-2xl font-bold text-[#0d1e25] mb-2 leading-tight">Advanced Urban Circularity: Municipal Waste</Text>
            <Text className="text-gray-500 text-sm mb-4 leading-relaxed">
              Master the complexities of municipal waste flows using data-driven frameworks and professional eco-strategies. Designed for sustainability coordinators and city planners.
            </Text>

            <View className="flex-row flex-wrap gap-4">
              <View className="flex-row items-center gap-1">
                <Ionicons name="time" size={16} color="#00522d" />
                <Text className="text-sm font-bold text-[#00522d]">12 Weeks • 48 Hours</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="star" size={16} color="#00522d" />
                <Text className="text-sm font-bold text-[#00522d]">4.9 (1.2k Ratings)</Text>
              </View>
            </View>
          </View>

          {/* Instructor */}
          <View className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm">
            <Text className="text-lg font-bold text-[#0d1e25] mb-4">Meet Your Instructor</Text>
            <View className="flex-row gap-4 items-start">
              <View className="w-20 h-20 rounded-2xl bg-[#dff1fb] items-center justify-center overflow-hidden">
                <Ionicons name="person" size={40} color="#00522d" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold text-[#0d1e25] mb-1">Dr. Aris Thorne</Text>
                <Text className="text-xs font-bold text-[#00522d] mb-2">Director of Urban Ecology</Text>
                <Text className="text-xs text-gray-500 leading-relaxed">
                  With over 15 years in municipal planning, Dr. Thorne has pioneered circular economy initiatives for major European capitals.
                </Text>
              </View>
            </View>
          </View>

          {/* Syllabus */}
          <View>
            <Text className="text-xl font-bold text-[#0d1e25] mb-4">Course Syllabus</Text>
            
            <View className="gap-3">
              {/* Module 1 */}
              <View className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <TouchableOpacity 
                  onPress={() => setExpandedModule(expandedModule === 1 ? null : 1)}
                  className="p-4 flex-row justify-between items-center"
                >
                  <View className="flex-row items-center gap-3">
                    <View className="w-8 h-8 rounded-full bg-[#9cf6ba] items-center justify-center">
                      <Text className="font-bold text-[#00522d]">01</Text>
                    </View>
                    <Text className="font-bold text-[#0d1e25] text-base">Foundations</Text>
                  </View>
                  <Ionicons name={expandedModule === 1 ? "chevron-up" : "chevron-down"} size={20} color="#556158" />
                </TouchableOpacity>
                
                {expandedModule === 1 && (
                  <View className="px-4 pb-4 border-t border-gray-100 pt-3 gap-3">
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center gap-2">
                        <Ionicons name="play-circle" size={16} color="#00522d" />
                        <Text className="text-sm text-[#3f4941]">Linear vs Circular</Text>
                      </View>
                      <Text className="text-xs text-gray-500">15:30</Text>
                    </View>
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center gap-2">
                        <Ionicons name="document-text" size={16} color="#00522d" />
                        <Text className="text-sm text-[#3f4941]">Global Waste Outlook</Text>
                      </View>
                      <Text className="text-xs text-gray-500">12 Pgs</Text>
                    </View>
                  </View>
                )}
              </View>

              {/* Module 2 */}
              <View className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <TouchableOpacity 
                  onPress={() => setExpandedModule(expandedModule === 2 ? null : 2)}
                  className="p-4 flex-row justify-between items-center"
                >
                  <View className="flex-row items-center gap-3">
                    <View className="w-8 h-8 rounded-full bg-[#d9e6da] items-center justify-center">
                      <Text className="font-bold text-[#556158]">02</Text>
                    </View>
                    <Text className="font-bold text-[#0d1e25] text-base">Data Collection</Text>
                  </View>
                  <Ionicons name={expandedModule === 2 ? "chevron-up" : "chevron-down"} size={20} color="#556158" />
                </TouchableOpacity>
                {expandedModule === 2 && (
                  <View className="px-4 pb-4 border-t border-gray-100 pt-3 gap-3">
                    <Text className="text-sm text-gray-500">Learn how to implement smart sensor networks and data visualization tools for real-time waste flow monitoring.</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
          
          {/* Why this course */}
          <View className="bg-[#006d3e] p-6 rounded-[24px] mb-8">
            <Text className="text-lg font-bold text-white mb-4">Why this course?</Text>
            <View className="gap-3">
              <View className="flex-row items-start gap-2">
                <Ionicons name="checkmark-circle" size={20} color="white" />
                <Text className="text-white text-sm flex-1">Official Upcycle Professional Certification</Text>
              </View>
              <View className="flex-row items-start gap-2">
                <Ionicons name="checkmark-circle" size={20} color="white" />
                <Text className="text-white text-sm flex-1">Direct access to municipal networking groups</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Floating Enrollment Button */}
      <View className="absolute bottom-0 w-full bg-white/90 border-t border-gray-200 px-4 py-4 pb-8 flex-row items-center justify-between">
        <View>
          <View className="flex-row items-baseline gap-2">
            <Text className="text-2xl font-bold text-[#00522d]">$299</Text>
            <Text className="text-sm text-gray-400 line-through">$499</Text>
          </View>
          <Text className="text-[10px] text-gray-500">30-Day Money-Back</Text>
        </View>
        <TouchableOpacity className="bg-[#00522d] px-8 py-3 rounded-full shadow-lg">
          <Text className="text-white font-bold text-lg">Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
