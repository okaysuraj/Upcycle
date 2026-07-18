import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
}

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false, 
  disabled = false, 
  className = '',
  ...props
}: ButtonProps) {
  let bgClass = 'bg-primary';
  let textClass = 'text-white';

  if (variant === 'secondary') {
    bgClass = 'bg-surface-container-high';
    textClass = 'text-on-surface';
  } else if (variant === 'outline') {
    bgClass = 'bg-transparent border border-outline-variant';
    textClass = 'text-on-surface';
  }

  const opacityClass = disabled ? 'opacity-50' : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`flex-row items-center justify-center py-4 px-6 rounded-full ${bgClass} ${opacityClass} ${className}`}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#00522d' : '#ffffff'} />
      ) : (
        <Text className={`font-bold text-lg ${textClass}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
