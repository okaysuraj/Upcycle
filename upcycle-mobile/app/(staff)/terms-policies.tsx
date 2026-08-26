import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TermsPoliciesMobile() {
  const router = useRouter();
  const [selectedDoc, setSelectedDoc] = useState<{title: string, version: string, id: string, date: string, desc: string} | null>(null);

  const documents = [
    {
      title: 'Terms of Service',
      version: 'v2.4.0',
      desc: 'Governs institutional participation, campus logistics data access, and user accountability standards.',
      icon: 'gavel',
      id: 'UPC-TOS-2024',
      date: 'Oct 24, 2024'
    },
    {
      title: 'Institutional Privacy Charter',
      version: 'v1.1.2',
      desc: 'Explains telemetry encryption, student anonymity on public leaderboards, and audit retention.',
      icon: 'security',
      id: 'UPC-PRIV-2024',
      date: 'Oct 24, 2024'
    },
    {
      title: 'Zero-Waste Verification Protocol',
      version: 'v3.0.0',
      desc: 'Mandatory standard operating procedures for ultrasonic bin sensors and certified hauler tare weights.',
      icon: 'verified',
      id: 'UPC-ZWP-2024',
      date: 'Oct 24, 2024'
    },
    {
      title: 'Community Code of Conduct',
      version: 'v1.0.5',
      desc: 'Behavioral expectations, content moderation standards, and campus clean-up guidelines.',
      icon: 'groups',
      id: 'UPC-COM-2024',
      date: 'Oct 24, 2024'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Terms & Policies</Text>
        </View>
        <View className="px-2.5 py-0.5 bg-[#dff1fb] rounded-full">
          <Text className="text-[10px] font-bold text-[#00522d]">ISO 14001</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Institutional Governance</Text>
          <Text className="text-xs text-[#556158] mt-0.5">Platform compliance documentation and verified policies.</Text>
        </View>

        <View className="space-y-4">
          {documents.map((doc, idx) => (
            <TouchableOpacity 
              key={idx}
              activeOpacity={0.8}
              onPress={() => setSelectedDoc(doc)}
              className="bg-white border border-[#bec9be]/30 p-5 rounded-[28px] shadow-sm space-y-3"
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-row items-center gap-3 flex-1 pr-2">
                  <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                    <MaterialIcons name={doc.icon as any} size={22} color="#00522d" />
                  </View>
                  <View className="flex-1">
                    <Text className="font-bold text-sm text-[#0d1e25] leading-snug">{doc.title}</Text>
                    <Text className="text-[10px] text-[#556158] mt-0.5">{doc.id} • {doc.date}</Text>
                  </View>
                </View>

                <View className="px-2.5 py-0.5 rounded-full bg-[#f4faff] border border-[#bec9be]/30">
                  <Text className="text-[10px] font-bold text-[#00522d]">{doc.version}</Text>
                </View>
              </View>

              <Text className="text-xs text-[#556158] leading-relaxed pt-1">
                {doc.desc}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Detail Modal */}
      <Modal visible={!!selectedDoc} transparent animationType="fade">
        <View className="flex-1 bg-black/60 items-center justify-center p-5">
          <View className="bg-white rounded-[32px] p-6 w-full max-w-sm space-y-4 shadow-xl">
            <View className="flex-row justify-between items-start">
              <View className="flex-1 pr-2">
                <Text className="text-base font-bold text-[#0d1e25]">{selectedDoc?.title}</Text>
                <Text className="text-[11px] text-[#556158] mt-0.5">{selectedDoc?.id} ({selectedDoc?.version})</Text>
              </View>
              <TouchableOpacity onPress={() => setSelectedDoc(null)} className="p-1 rounded-full bg-[#f4faff]">
                <Ionicons name="close" size={20} color="#556158" />
              </TouchableOpacity>
            </View>

            <ScrollView className="max-h-60">
              <Text className="text-xs text-[#556158] leading-relaxed">
                {selectedDoc?.desc}
                {'\n\n'}
                This document is certified by the Central University Sustainability Board and complies with municipal EPA waste reduction directives. All telemetry logs uploaded to the Upcycle platform adhere to strict tamper-evident protocols.
              </Text>
            </ScrollView>

            <TouchableOpacity 
              onPress={() => setSelectedDoc(null)}
              className="w-full py-3 bg-[#00522d] rounded-full items-center"
            >
              <Text className="text-white font-bold text-xs">Close Document</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
