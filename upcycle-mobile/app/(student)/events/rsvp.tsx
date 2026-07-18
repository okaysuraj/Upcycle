import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function EventRSVP() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="absolute w-full z-50 px-4 h-16 flex-row justify-between items-center bg-white/70">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-[#9cf6ba] items-center justify-center overflow-hidden border-2 border-[#9cf6ba]">
             <Ionicons name="person" size={24} color="#00522d" />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full bg-[#dff1fb]">
          <Ionicons name="notifications" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Event Header Image */}
        <View className="h-64 w-full relative mb-4 mt-20 px-4">
          <View className="w-full h-full rounded-3xl overflow-hidden bg-[#0d1e25]">
             <View className="absolute inset-0 bg-[#006d3e]/20 z-0" />
             <View className="absolute inset-0 bg-black/40 z-10" />
             <View className="absolute bottom-6 left-6 z-20">
               <View className="bg-[#00522d] px-3 py-1 rounded-full mb-2 self-start">
                 <Text className="text-[10px] font-bold text-white uppercase">Community Workshop</Text>
               </View>
               <Text className="text-2xl font-bold text-white leading-tight">Zero-Waste Neighborhood Rally</Text>
             </View>
          </View>
        </View>

        <View className="px-4 gap-4 pb-24">
          
          {/* Details */}
          <View className="gap-3">
            <View className="bg-white p-6 rounded-[24px] border border-[#d9e6da]/50 flex-row items-center gap-4 shadow-sm">
              <View className="p-3 bg-[#d9e6da] rounded-2xl">
                <Ionicons name="calendar" size={24} color="#00522d" />
              </View>
              <View>
                <Text className="text-sm font-bold text-[#556158]">Date & Time</Text>
                <Text className="text-base font-bold text-[#0d1e25]">Saturday, Oct 14 • 10:00 AM</Text>
              </View>
            </View>
            
            <View className="bg-white p-6 rounded-[24px] border border-[#d9e6da]/50 flex-row items-center gap-4 shadow-sm">
              <View className="p-3 bg-[#d9e6da] rounded-2xl">
                <Ionicons name="location" size={24} color="#00522d" />
              </View>
              <View>
                <Text className="text-sm font-bold text-[#556158]">Location</Text>
                <Text className="text-base font-bold text-[#0d1e25]">Greenway Municipal Center, North Hall</Text>
                <Text className="text-sm text-[#6f7a70]">120 Eco Way, Springfield</Text>
              </View>
            </View>
          </View>

          {/* RSVP Card */}
          <View className="bg-white/80 p-8 rounded-[24px] border border-[#a2d2a4]/30 shadow-sm mt-2">
            <Text className="text-2xl font-bold text-[#0d1e25] mb-6">Are you coming?</Text>
            
            <View className="gap-3">
              <TouchableOpacity 
                onPress={() => setRsvpStatus('going')}
                className={`w-full py-4 rounded-full border-2 flex-row items-center justify-center gap-2 ${rsvpStatus === 'going' ? 'bg-[#006d3e]/20 border-[#00522d]' : 'border-[#bec9be]'}`}
              >
                <Ionicons name={rsvpStatus === 'going' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={24} color={rsvpStatus === 'going' ? '#00522d' : '#0d1e25'} />
                <Text className={`font-bold ${rsvpStatus === 'going' ? 'text-[#00522d]' : 'text-[#0d1e25]'}`}>Going</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => setRsvpStatus('maybe')}
                className={`w-full py-4 rounded-full border-2 flex-row items-center justify-center gap-2 ${rsvpStatus === 'maybe' ? 'bg-[#006d3e]/20 border-[#00522d]' : 'border-[#bec9be]'}`}
              >
                <Ionicons name={rsvpStatus === 'maybe' ? 'help-circle' : 'help-circle-outline'} size={24} color={rsvpStatus === 'maybe' ? '#00522d' : '#0d1e25'} />
                <Text className={`font-bold ${rsvpStatus === 'maybe' ? 'text-[#00522d]' : 'text-[#0d1e25]'}`}>Maybe</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => setRsvpStatus('not-going')}
                className={`w-full py-4 rounded-full border-2 flex-row items-center justify-center gap-2 ${rsvpStatus === 'not-going' ? 'bg-[#ffdad6]/50 border-[#ba1a1a]' : 'border-[#bec9be]'}`}
              >
                <Ionicons name={rsvpStatus === 'not-going' ? 'close-circle' : 'close-circle-outline'} size={24} color={rsvpStatus === 'not-going' ? '#ba1a1a' : '#0d1e25'} />
                <Text className={`font-bold ${rsvpStatus === 'not-going' ? 'text-[#ba1a1a]' : 'text-[#0d1e25]'}`}>Not Going</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-8 pt-6 border-t border-[#a2d2a4]/30">
              <TouchableOpacity className="w-full bg-[#00522d] py-4 rounded-full flex-row items-center justify-center gap-2 shadow-lg">
                <Ionicons name="calendar" size={20} color="white" />
                <Text className="text-white font-bold text-sm">Add to Calendar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats & Social */}
          <View className="bg-white p-6 rounded-[24px] border border-[#d9e6da]/50 shadow-sm mt-2">
            <Text className="text-[10px] font-bold text-[#556158] uppercase tracking-wider mb-4">Community Impact</Text>
            <View className="flex-row items-end gap-2 mb-4">
              <Text className="text-4xl font-bold text-[#00522d] leading-none">142</Text>
              <Text className="text-sm text-[#6f7a70] pb-1">Attendees confirmed</Text>
            </View>
            <View className="w-full h-3 bg-[#d9e6da] rounded-full overflow-hidden">
              <View className="bg-[#00522d] h-full w-[72%]" />
            </View>
            <Text className="text-xs text-[#6f7a70] mt-3">72% of neighborhood capacity reached</Text>
          </View>
          
          <View className="bg-white p-6 rounded-[24px] border border-[#d9e6da]/50 shadow-sm mt-2">
            <Text className="text-[10px] font-bold text-[#556158] uppercase tracking-wider mb-4">Who's going</Text>
            <View className="flex-row -space-x-3 mb-4">
               <View className="w-12 h-12 rounded-full border-4 border-white bg-[#dff1fb] items-center justify-center z-40">
                 <Ionicons name="person" size={20} color="#00522d" />
               </View>
               <View className="w-12 h-12 rounded-full border-4 border-white bg-[#a2d2a4] items-center justify-center z-30">
                 <Ionicons name="person" size={20} color="#00522d" />
               </View>
               <View className="w-12 h-12 rounded-full border-4 border-white bg-[#9cf6ba] items-center justify-center z-20">
                 <Ionicons name="person" size={20} color="#00522d" />
               </View>
               <View className="w-12 h-12 rounded-full border-4 border-white bg-[#80d99f] items-center justify-center z-10">
                 <Ionicons name="person" size={20} color="#00522d" />
               </View>
               <View className="w-12 h-12 rounded-full border-4 border-white bg-[#9cf6ba] items-center justify-center z-0">
                 <Text className="text-[#00522d] font-bold text-xs">+138</Text>
               </View>
            </View>
            <Text className="text-sm text-[#556158]">Join Sarah, Mike, and 140 others from Springfield Central.</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
