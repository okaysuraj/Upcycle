import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CreateEvent() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  const [category, setCategory] = useState('workshop');
  const [eventType, setEventType] = useState('physical');

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#d9e6da]/50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="#0d1e25" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">Create Event</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-24" showsVerticalScrollIndicator={false}>
        
        {/* Context */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Create an Eco-Event</Text>
          <Text className="text-sm text-[#556158]">Shape the future of sustainability. Host a workshop, community clean-up, or seminar and connect with fellow eco-professionals.</Text>
        </View>

        {/* Banner Upload */}
        <TouchableOpacity className="bg-white/70 rounded-[24px] p-6 border-2 border-dashed border-[#00522d]/20 items-center justify-center min-h-[160px] mb-6">
          <Ionicons name="image" size={48} color="#00522d" style={{ marginBottom: 8 }} />
          <Text className="text-lg font-bold text-[#00522d] mb-1">Upload Event Banner</Text>
          <Text className="text-xs text-[#3f4941] text-center px-4">Suggest 16:9 ratio. High resolution images make events 3x more likely to be attended.</Text>
        </TouchableOpacity>

        {/* Category Picker */}
        <View className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm mb-6">
          <Text className="text-sm font-bold text-[#0d1e25] mb-4">Event Category</Text>
          <View className="flex-row flex-wrap gap-2">
            <TouchableOpacity 
              onPress={() => setCategory('workshop')}
              className={`flex-row items-center gap-2 p-3 rounded-xl border flex-1 min-w-[45%] ${category === 'workshop' ? 'bg-[#006d3e] border-[#006d3e]' : 'border-[#bec9be]'}`}
            >
              <Ionicons name="construct" size={20} color={category === 'workshop' ? '#92ecb1' : '#6f7a70'} />
              <Text className={`font-bold text-sm ${category === 'workshop' ? 'text-[#92ecb1]' : 'text-[#6f7a70]'}`}>Workshop</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => setCategory('cleanup')}
              className={`flex-row items-center gap-2 p-3 rounded-xl border flex-1 min-w-[45%] ${category === 'cleanup' ? 'bg-[#006d3e] border-[#006d3e]' : 'border-[#bec9be]'}`}
            >
              <Ionicons name="people" size={20} color={category === 'cleanup' ? '#92ecb1' : '#6f7a70'} />
              <Text className={`font-bold text-sm ${category === 'cleanup' ? 'text-[#92ecb1]' : 'text-[#6f7a70]'}`}>Cleanup</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => setCategory('seminar')}
              className={`flex-row items-center gap-2 p-3 rounded-xl border flex-1 min-w-[45%] ${category === 'seminar' ? 'bg-[#006d3e] border-[#006d3e]' : 'border-[#bec9be]'}`}
            >
              <Ionicons name="school" size={20} color={category === 'seminar' ? '#92ecb1' : '#6f7a70'} />
              <Text className={`font-bold text-sm ${category === 'seminar' ? 'text-[#92ecb1]' : 'text-[#6f7a70]'}`}>Seminar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => setCategory('nature_walk')}
              className={`flex-row items-center gap-2 p-3 rounded-xl border flex-1 min-w-[45%] ${category === 'nature_walk' ? 'bg-[#006d3e] border-[#006d3e]' : 'border-[#bec9be]'}`}
            >
              <Ionicons name="leaf" size={20} color={category === 'nature_walk' ? '#92ecb1' : '#6f7a70'} />
              <Text className={`font-bold text-sm ${category === 'nature_walk' ? 'text-[#92ecb1]' : 'text-[#6f7a70]'}`}>Nature Walk</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Details */}
        <View className="bg-white rounded-[24px] p-6 border border-[#bec9be]/30 shadow-sm mb-6 gap-4">
          <View className="gap-2">
            <Text className="text-sm font-bold text-[#0d1e25]">Event Title</Text>
            <TextInput 
              className="w-full bg-[#e7f6ff] rounded-xl px-4 py-3 font-bold text-[#0d1e25]"
              placeholder="e.g. Annual Community Composting Workshop"
              placeholderTextColor="#6f7a70"
            />
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1 gap-2">
              <Text className="text-sm font-bold text-[#0d1e25]">Date</Text>
              <TextInput 
                className="w-full bg-[#e7f6ff] rounded-xl px-4 py-3 font-bold text-[#0d1e25]"
                placeholder="MM/DD/YYYY"
                placeholderTextColor="#6f7a70"
              />
            </View>
            <View className="flex-1 gap-2">
              <Text className="text-sm font-bold text-[#0d1e25]">Start Time</Text>
              <TextInput 
                className="w-full bg-[#e7f6ff] rounded-xl px-4 py-3 font-bold text-[#0d1e25]"
                placeholder="--:-- --"
                placeholderTextColor="#6f7a70"
              />
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-sm font-bold text-[#0d1e25]">Event Type</Text>
            <View className="flex-row gap-6">
              <TouchableOpacity onPress={() => setEventType('physical')} className="flex-row items-center gap-2">
                <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${eventType === 'physical' ? 'border-[#00522d] bg-[#00522d]' : 'border-[#6f7a70]'}`}>
                  {eventType === 'physical' && <View className="w-2 h-2 rounded-full bg-white" />}
                </View>
                <Text className="font-bold text-[#0d1e25]">Physical</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => setEventType('virtual')} className="flex-row items-center gap-2">
                <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${eventType === 'virtual' ? 'border-[#00522d] bg-[#00522d]' : 'border-[#6f7a70]'}`}>
                  {eventType === 'virtual' && <View className="w-2 h-2 rounded-full bg-white" />}
                </View>
                <Text className="font-bold text-[#0d1e25]">Virtual</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-sm font-bold text-[#0d1e25]">Location / Link</Text>
            <View className="relative justify-center">
              <Ionicons name="location" size={20} color="#6f7a70" style={{ position: 'absolute', left: 16, zIndex: 10 }} />
              <TextInput 
                className="w-full bg-[#e7f6ff] rounded-xl pl-12 pr-4 py-3 font-bold text-[#0d1e25]"
                placeholder={eventType === 'physical' ? "Physical Address or City" : "Meeting Link or Platform Name"}
                placeholderTextColor="#6f7a70"
              />
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-sm font-bold text-[#0d1e25]">Description</Text>
            <TextInput 
              className="w-full bg-[#e7f6ff] rounded-xl px-4 py-3 font-bold text-[#0d1e25]"
              placeholder="Tell your community what this event is about..."
              placeholderTextColor="#6f7a70"
              multiline
              numberOfLines={4}
              style={{ textAlignVertical: 'top' }}
            />
          </View>

          <View className="pt-4">
            <TouchableOpacity className="w-full bg-[#00522d] py-4 rounded-full flex-row items-center justify-center gap-2 shadow-lg">
              <Text className="font-bold text-white text-lg">Publish Event</Text>
              <Ionicons name="rocket" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
