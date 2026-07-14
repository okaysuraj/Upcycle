import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Button from '../../../components/ui/Button';

export default function ESGExport() {
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">Export Reports</Text>
        <Text className="text-gray-500 text-base">Generate official ESG compliance reports.</Text>
      </View>
      <View className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6">
        <Text className="font-bold text-gray-900 text-lg mb-4">Select Format</Text>
        <View className="flex-row gap-3 mb-8">
          <View className="flex-1 bg-emerald-50 border border-emerald-200 py-3 rounded-xl items-center"><Text className="font-bold text-emerald-700">PDF</Text></View>
          <View className="flex-1 bg-gray-50 border border-gray-200 py-3 rounded-xl items-center"><Text className="font-bold text-gray-600">CSV</Text></View>
        </View>
        <Button title="Generate Report" icon="download" />
      </View>
    </ScreenWrapper>
  );
}