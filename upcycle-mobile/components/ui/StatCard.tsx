import React from 'react';
import { View, Text } from 'react-native';

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend,
  trendUp = true,
  className = '' 
}) {
  return (
    <View className={`bg-white rounded-3xl p-6 border border-gray-100 shadow-sm ${className}`}>
      <View className="flex-row justify-between items-start mb-4">
        <View className="w-12 h-12 bg-emerald-50 rounded-2xl items-center justify-center">
          <Text className="text-2xl">{icon}</Text>
        </View>
        {trend && (
          <View className={`px-3 py-1 rounded-full ${trendUp ? 'bg-emerald-50' : 'bg-red-50'}`}>
            <Text className={`font-bold text-xs ${trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </Text>
          </View>
        )}
      </View>
      <Text className="text-gray-500 font-medium text-sm uppercase tracking-wider mb-1">{title}</Text>
      <Text className="text-3xl font-black text-gray-900 mb-1">{value}</Text>
      {subtitle && <Text className="text-gray-400 text-sm">{subtitle}</Text>}
    </View>
  );
}
