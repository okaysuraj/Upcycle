import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ComplianceScreen() {
  const audits = [
    { id: 'AUD-Q3', title: 'Facility Safety & Waste', date: '2026-09-30', status: 'Scheduled', score: null },
    { id: 'AUD-Q2', title: 'E-Waste Compliance', date: '2026-06-15', status: 'Passed', score: 96 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Compliance</Text>
            <Text className="text-gray-500 mt-1">Regulatory Audits</Text>
          </View>
          <TouchableOpacity className="bg-green-700 p-3 rounded-full">
            <Ionicons name="document-text" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {audits.map(audit => (
            <View key={audit.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-center mb-3">
                 <View className={`px-2 py-1 rounded ${
                  audit.status === 'Passed' ? 'bg-green-100' : 'bg-gray-200'
                }`}>
                  <Text className={`text-xs font-bold uppercase ${
                    audit.status === 'Passed' ? 'text-green-700' : 'text-gray-600'
                  }`}>{audit.status}</Text>
                </View>
                <Text className="text-xs font-mono font-bold text-gray-400">{audit.id}</Text>
              </View>
              
              <Text className="font-bold text-lg text-gray-800 mb-1">{audit.title}</Text>
              <Text className="text-sm text-gray-500 mb-4">{audit.date}</Text>
              
              <View className="flex-row justify-between items-center border-t border-gray-200 pt-3">
                 <Text className="text-gray-500 font-bold uppercase text-xs">Score</Text>
                 <Text className={`text-xl font-black ${audit.score >= 90 ? 'text-green-600' : 'text-gray-400'}`}>
                   {audit.score || '--'}
                 </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
