import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenWrapper({ children, className = '', scroll = true, withPadding = true }: { children: React.ReactNode; className?: string; scroll?: boolean; withPadding?: boolean }) {
  const content = (
    <View className={`flex-1 ${withPadding ? 'px-6 py-4' : ''} ${className}`}>
      {children}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {scroll ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}
