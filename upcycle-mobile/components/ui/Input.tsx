import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Input({ 
  label, 
  error, 
  className = '', 
  ...props 
}) {
  return (
    <View className={`mb-4 ${className}`}>
      {label && <Text className="text-gray-700 font-semibold mb-2 ml-1">{label}</Text>}
      <TextInput
        className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} rounded-2xl px-4 py-4 text-gray-900`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>}
    </View>
  );
}
