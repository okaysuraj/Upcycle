import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function FAQ() {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: 'How are Eco-Points calculated from waste logs?', 
      a: 'Eco-Points are awarded dynamically based on material stream and certified weight: +10 pts/kg for PET recyclables, +12 pts/kg for compost, and +25 pts/kg for lab electronics.' 
    },
    { 
      q: 'Where can I redeem points earned on campus?', 
      a: 'Points can be redeemed in the Marketplace for sustainable campus dining credits, solar workshop vouchers, and verified Eco-Legend certifications.' 
    },
    { 
      q: 'How does Smart Bin QR verification work?', 
      a: 'Every campus smart bin has an encrypted QR code. When you scan the code and input the measured weight, your log is cross-verified against real-time ultrasonic bin fill sensors.' 
    },
    { 
      q: 'Who reviews municipal vendor proposals?', 
      a: 'The campus sustainability committee reviews and awards vendor RFPs based on turnaround time, cost, and verified circular economy score.' 
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Frequently Asked Questions</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/(student)/support')}
          className="p-2 bg-[#dff1fb] rounded-full"
        >
          <Ionicons name="help-buoy-outline" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Help & Knowledge Base</Text>
          <Text className="text-xs text-[#556158] mt-1">
            Common questions about the Upcycle campus network.
          </Text>
        </View>

        <View className="space-y-4">
          {faqs.map((faq, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => setExpandedIndex(isExpanded ? null : i)}
                className="bg-white rounded-[24px] p-5 border border-[#bec9be]/30 shadow-sm space-y-2"
              >
                <View className="flex-row justify-between items-center">
                  <Text className="font-bold text-sm text-[#0d1e25] flex-1 pr-3 leading-snug">{faq.q}</Text>
                  <MaterialIcons 
                    name={isExpanded ? "expand-less" : "expand-more"} 
                    size={24} 
                    color="#00522d" 
                  />
                </View>

                {isExpanded && (
                  <Text className="text-xs text-[#556158] leading-relaxed pt-2 border-t border-[#bec9be]/20">
                    {faq.a}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Contact support banner */}
        <View className="mt-8 p-6 bg-[#dff1fb] rounded-[28px] border border-[#bec9be]/30 items-center space-y-2 text-center">
          <Text className="font-bold text-sm text-[#00522d]">Still have questions?</Text>
          <Text className="text-xs text-[#556158] text-center">Reach out to our campus sustainability coordinator team.</Text>
          <TouchableOpacity 
            onPress={() => router.push('/(student)/support')}
            className="mt-2 px-6 py-3 bg-[#00522d] rounded-full"
          >
            <Text className="text-white font-bold text-xs">Contact Helpdesk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}