import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface AuditItem {
  id: string;
  title: string;
  date: string;
  status: 'Passed' | 'Pending' | 'Flagged';
  score: number | null;
}

export default function ComplianceScreen() {
  const router = useRouter();

  const audits: AuditItem[] = [
    { id: 'AUD-883', title: 'EPA Scope 1/2 GHG Verification', date: 'Oct 14, 2024', status: 'Passed', score: 96 },
    { id: 'AUD-842', title: 'ISO 14001 Waste Audit', date: 'Sep 28, 2024', status: 'Passed', score: 94 },
    { id: 'AUD-790', title: 'Municipal Composting Protocol', date: 'Aug 12, 2024', status: 'Passed', score: 91 }
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      <View className="flex-row items-center gap-3 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-[#00522d]">Compliance & Audits</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" showsVerticalScrollIndicator={false}>
        <View className="space-y-4 pb-10">
          {audits.map((audit) => (
            <View key={audit.id} className="p-5 bg-white rounded-3xl border border-[#bec9be]/30 shadow-sm space-y-3">
              <View className="flex-row justify-between items-center">
                <View className="px-3 py-1 bg-[#9cf6ba]/40 rounded-full">
                  <Text className="text-xs font-bold text-[#00522d] uppercase">{audit.status}</Text>
                </View>
                <Text className="text-xs font-mono font-bold text-[#556158]">{audit.id}</Text>
              </View>

              <Text className="font-bold text-base text-[#0d1e25]">{audit.title}</Text>
              <Text className="text-xs text-[#556158]">{audit.date}</Text>

              <View className="flex-row justify-between items-center border-t border-[#bec9be]/20 pt-3">
                <Text className="text-xs font-bold text-[#556158] uppercase">Audit Score</Text>
                <Text className={`text-xl font-bold ${(audit.score ?? 0) >= 90 ? 'text-[#00522d]' : 'text-[#556158]'}`}>
                  {audit.score !== null ? `${audit.score}/100` : '--'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
