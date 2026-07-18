import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  className?: string;
}

export default function Input({ label, error, icon, className = '', ...props }: InputProps) {
  return (
    <View className={`flex-col gap-1.5 ${className}`}>
      {label && <Text className="text-sm font-medium text-on-surface-variant">{label}</Text>}
      <View className="relative justify-center">
        {icon && (
          <View className="absolute left-4 z-10">
            <Ionicons name={icon} size={20} color="#6f7a70" />
          </View>
        )}
        <TextInput
          className={`px-4 py-3.5 rounded-xl border bg-surface-container-low text-on-surface transition-all outline-none 
            ${icon ? 'pl-11' : ''} 
            ${error ? 'border-error-container' : 'border-outline-variant/40'}
          `}
          placeholderTextColor="#6f7a70"
          {...props}
        />
      </View>
      {error && <Text className="text-xs text-on-error-container">{error}</Text>}
    </View>
  );
}
