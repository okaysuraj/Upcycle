import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CourseDetailPage() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
          <Ionicons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="mb-6">
          <View className="flex-row items-center gap-1 bg-[#bdefbf] px-3 py-1 rounded-full self-start mb-3">
            <Ionicons name="leaf" size={16} color="#002109" />
            <Text className="text-[10px] font-bold text-[#002109]">CERTIFIED COURSE</Text>
          </View>
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2 leading-tight">Advanced Urban Circularity: Municipal Waste Management</Text>
          <Text className="text-base text-[#556158] mb-4">Master the complexities of municipal waste flows using data-driven frameworks and professional eco-strategies.</Text>
          
          <View className="flex-row flex-wrap gap-4">
            <View className="flex-row items-center gap-1">
              <Ionicons name="time" size={16} color="#00522d" />
              <Text className="text-sm font-bold text-[#0d1e25]">12 Weeks • 48 Hours</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="star" size={16} color="#00522d" />
              <Text className="text-sm font-bold text-[#0d1e25]">4.9 (1,204 Ratings)</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="people" size={16} color="#00522d" />
              <Text className="text-sm font-bold text-[#0d1e25]">5.2k Students Enrolled</Text>
            </View>
          </View>
        </View>

        {/* Enrollment Card */}
        <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="relative w-full aspect-video rounded-xl bg-[#d9ebf5] items-center justify-center mb-4">
             <Ionicons name="play-circle" size={48} color="#00522d" />
          </View>
          <View className="flex-row items-baseline gap-2 mb-4">
            <Text className="text-3xl font-bold text-[#00522d]">$299.00</Text>
            <Text className="text-base text-[#6f7a70] line-through">$499.00</Text>
          </View>
          <TouchableOpacity className="w-full bg-[#00522d] py-4 rounded-full items-center justify-center mb-2">
            <Text className="text-white font-bold text-sm">Enroll Now</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full bg-[#d9e6da] py-4 rounded-full flex-row items-center justify-center gap-2">
            <Ionicons name="cart" size={18} color="#5b675e" />
            <Text className="text-[#5b675e] font-bold text-sm">Add to Cart</Text>
          </TouchableOpacity>
          <Text className="text-[10px] text-center text-[#556158] mt-3">30-Day Money-Back Guarantee</Text>
        </View>

        {/* Instructor Section */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-[#0d1e25] mb-4">Meet Your Instructor</Text>
          <View className="bg-white border border-[#bec9be]/30 rounded-[24px] p-6 shadow-sm flex-row gap-4">
            <View className="w-20 h-20 bg-[#d9e6da] rounded-2xl overflow-hidden" />
            <View className="flex-1">
              <Text className="text-xl font-bold text-[#0d1e25]">Dr. Aris Thorne</Text>
              <Text className="text-xs font-bold text-[#00522d] mb-2">Director of Urban Ecology at Green-Metro Lab</Text>
              <Text className="text-xs text-[#556158]">With over 15 years in municipal planning and waste infrastructure, Dr. Thorne has pioneered circular economy initiatives for major European capitals.</Text>
            </View>
          </View>
        </View>

        {/* Course Syllabus */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-[#0d1e25] mb-4">Course Syllabus</Text>
          
          <View className="gap-2">
            
            {/* Module 1 */}
            <View className="bg-white border border-[#bec9be]/30 rounded-xl overflow-hidden">
              <View className="flex-row items-center justify-between p-4 bg-[#f4faff]">
                <View className="flex-row items-center gap-3">
                  <View className="w-8 h-8 rounded-full bg-[#9cf6ba] items-center justify-center">
                    <Text className="font-bold text-[#00522d]">01</Text>
                  </View>
                  <Text className="text-base font-bold text-[#0d1e25]">Foundations of Circularity</Text>
                </View>
                <Ionicons name="chevron-up" size={20} color="#556158" />
              </View>
              <View className="px-4 pb-4 bg-[#f4faff]">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center gap-2 flex-1">
                    <Ionicons name="play-circle" size={16} color="#00522d" />
                    <Text className="text-sm text-[#0d1e25]">Intro to Linear vs. Circular</Text>
                  </View>
                  <Text className="text-xs text-[#556158]">15:30</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2 flex-1">
                    <Ionicons name="document-text" size={16} color="#00522d" />
                    <Text className="text-sm text-[#0d1e25]">Global Waste Outlook</Text>
                  </View>
                  <Text className="text-xs text-[#556158]">12 Pages</Text>
                </View>
              </View>
            </View>

            {/* Module 2 */}
            <View className="bg-white border border-[#bec9be]/30 rounded-xl overflow-hidden">
              <View className="flex-row items-center justify-between p-4">
                <View className="flex-row items-center gap-3">
                  <View className="w-8 h-8 rounded-full bg-[#d9e6da] items-center justify-center">
                    <Text className="font-bold text-[#556158]">02</Text>
                  </View>
                  <Text className="text-base font-bold text-[#0d1e25]">Municipal Data Collection</Text>
                </View>
                <Ionicons name="chevron-down" size={20} color="#556158" />
              </View>
            </View>
            
            {/* Module 3 */}
            <View className="bg-white border border-[#bec9be]/30 rounded-xl overflow-hidden">
              <View className="flex-row items-center justify-between p-4">
                <View className="flex-row items-center gap-3">
                  <View className="w-8 h-8 rounded-full bg-[#d9e6da] items-center justify-center">
                    <Text className="font-bold text-[#556158]">03</Text>
                  </View>
                  <Text className="text-base font-bold text-[#0d1e25]">Logistics & Supply Chains</Text>
                </View>
                <Ionicons name="chevron-down" size={20} color="#556158" />
              </View>
            </View>

          </View>
        </View>

        {/* Why this course */}
        <View className="bg-[#006d3e] rounded-[24px] p-6 mb-6">
          <Text className="text-xl font-bold text-white mb-4">Why this course?</Text>
          <View className="gap-3">
            <View className="flex-row items-start gap-2">
              <Ionicons name="checkmark-circle" size={20} color="white" />
              <Text className="text-white text-sm flex-1">Official Upcycle Professional Certification</Text>
            </View>
            <View className="flex-row items-start gap-2">
              <Ionicons name="checkmark-circle" size={20} color="white" />
              <Text className="text-white text-sm flex-1">Direct access to municipal networking groups</Text>
            </View>
            <View className="flex-row items-start gap-2">
              <Ionicons name="checkmark-circle" size={20} color="white" />
              <Text className="text-white text-sm flex-1">Downloadable framework templates and datasets</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
