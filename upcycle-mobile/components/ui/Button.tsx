import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false, 
  disabled = false, 
  className = '' 
}) {
  let bgClass = 'bg-emerald-600';
  let textClass = 'text-white';

  if (variant === 'secondary') {
    bgClass = 'bg-emerald-100';
    textClass = 'text-emerald-800';
  } else if (variant === 'outline') {
    bgClass = 'bg-transparent border-2 border-emerald-600';
    textClass = 'text-emerald-600';
  } else if (variant === 'danger') {
    bgClass = 'bg-red-500';
    textClass = 'text-white';
  }

  const opacityClass = disabled ? 'opacity-50' : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`flex-row items-center justify-center py-4 px-6 rounded-2xl ${bgClass} ${opacityClass} ${className}`}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#059669' : '#ffffff'} />
      ) : (
        <Text className={`font-bold text-lg ${textClass}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
