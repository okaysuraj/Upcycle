import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';

export default function SettingsHome() {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Log Out", 
          style: "destructive",
          onPress: () => logout()
        }
      ]
    );
  };

  const menuItems = [
    { title: 'Account Information', icon: '👤' },
    { title: 'Notification Preferences', icon: '🔔' },
    { title: 'Privacy & Security', icon: '🔒' },
    { title: 'Help & Support', icon: '❓' },
  ];

  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Settings</Text>
        <Text className="text-gray-500 text-base">Manage your preferences.</Text>
      </View>

      <View className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-8">
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={item.title}
            className={`flex-row items-center p-5 ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <Text className="text-xl mr-4">{item.icon}</Text>
            <Text className="flex-1 font-medium text-gray-900 text-base">{item.title}</Text>
            <Text className="text-gray-300 text-xl">→</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        className="bg-red-50 p-5 rounded-3xl border border-red-100 items-center mb-8"
        onPress={handleLogout}
      >
        <Text className="text-red-600 font-bold text-lg">Log Out</Text>
      </TouchableOpacity>
      
      <Text className="text-center text-gray-400 text-xs mb-10">Upcycle Mobile v1.0.0</Text>
    </ScreenWrapper>
  );
}
