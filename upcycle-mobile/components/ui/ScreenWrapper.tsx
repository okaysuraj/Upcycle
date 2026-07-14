import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

export default function ScreenWrapper({ children, className = '', scroll = true, withPadding = true }) {
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
