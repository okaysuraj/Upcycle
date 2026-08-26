import React from 'react';
import { View, Text } from 'react-native';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend,
  trendUp = true,
  className = '' 
}: StatCardProps) {
  return (
    <View className={`bg-white rounded-3xl p-6 border border-[#bec9be]/30 shadow-sm ${className}`}>
      <View className="flex-row justify-between items-start mb-4">
        {icon ? (
          <View className="w-12 h-12 bg-[#dff1fb] rounded-2xl items-center justify-center">
            <Text className="text-2xl">{icon}</Text>
          </View>
        ) : null}
        {trend ? (
          <View className={`px-3 py-1 rounded-full ${trendUp ? 'bg-[#9cf6ba]/40' : 'bg-[#ffdad6]'}`}>
            <Text className={`font-bold text-xs ${trendUp ? 'text-[#00522d]' : 'text-[#ba1a1a]'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </Text>
          </View>
        ) : null}
      </View>
      <Text className="text-[#556158] font-bold text-xs uppercase tracking-wider mb-1">{title}</Text>
      <Text className="text-3xl font-bold text-[#0d1e25] mb-1">{value}</Text>
      {subtitle ? <Text className="text-[#556158] text-xs font-medium">{subtitle}</Text> : null}
    </View>
  );
}
