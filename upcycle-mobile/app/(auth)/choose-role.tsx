import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ChooseRole() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Track your campus sustainability goals, manage personal waste reduction, and earn rewards.',
      icon: 'school'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Oversee municipal operations, manage users, and access high-level analytical reports.',
      icon: 'admin-panel-settings'
    },
    {
      id: 'vendor',
      title: 'Vendor',
      description: 'Manage recycling collection logistics, update inventory, and connect with waste suppliers.',
      icon: 'storefront'
    },
    {
      id: 'staff',
      title: 'Staff',
      description: 'Log daily activities, handle site maintenance requests, and coordinate field operations.',
      icon: 'badge'
    },
    {
      id: 'consultant',
      title: 'Consultant',
      description: 'Review environmental impact data, provide recommendations, and optimize waste flows.',
      icon: 'insights' // Using insights as a fallback for query_stats
    }
  ];

  const handleContinue = () => {
    if (selectedRole) {
      // Typically save role to user profile then redirect
      router.push('/(auth)/kyc-verification');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 border-b border-[#bccabd]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#006d3e" />
          </TouchableOpacity>
          <View className="flex-row items-center gap-2">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLuaeWGEBHEzwqBPQAk8QsJgcjKH1dH53_ec81VNIPmrmp8NEDSB5RWseIPhSajfG2n3WOy64AWqjK6D7sWGEN6SewlhMQg_zIDtiR7YpHOMy_VQvNNFFD_rTqXRNqLRoFIFQtTWr7xG1rfQ-Rpkp8VzWiE9lZc7HJhdjkvcCFG2J6_tnSRu8Bue54Ws1t8FqvYXHfw2j7qjNUrGElb2ZNqWynH73bZCfB8Oblg_GX_GbE-QkeIgbSzy3HE' }}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
          </View>
        </View>
        <Text className="text-sm font-medium text-[#3d4a40]">Step 1 of 3</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-10" contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2 text-center">Choose your role</Text>
          <Text className="text-base text-[#3d4a40] text-center max-w-[300px]">
            Select the profile that best describes your involvement in the Upcycle ecosystem.
          </Text>
        </View>

        <View className="gap-4">
          {roles.map((role) => (
            <TouchableOpacity 
              key={role.id}
              activeOpacity={0.7}
              onPress={() => setSelectedRole(role.id)}
              className={`p-6 bg-white border rounded-3xl ${
                selectedRole === role.id ? 'border-[#006d3e] bg-[#e7f6ff]' : 'border-[#A5D6A7]'
              }`}
            >
              <View className="flex-row justify-between items-start mb-4">
                <View className={`w-14 h-14 rounded-full items-center justify-center ${
                  selectedRole === role.id ? 'bg-[#006d3e]' : 'bg-[#e7f6ff]'
                }`}>
                  <MaterialIcons 
                    name={role.icon as any} 
                    size={32} 
                    color={selectedRole === role.id ? 'white' : '#006d3e'} 
                  />
                </View>
                <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                  selectedRole === role.id ? 'border-[#006d3e]' : 'border-[#bccabd]'
                }`}>
                  {selectedRole === role.id && (
                    <View className="w-3 h-3 rounded-full bg-[#006d3e]" />
                  )}
                </View>
              </View>
              <Text className="text-xl font-bold text-[#0d1e25] mb-2">{role.title}</Text>
              <Text className="text-[#3d4a40] text-sm">{role.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer Action */}
      <View className="absolute bottom-0 w-full bg-[#f4faff] border-t border-[#bccabd]/30 py-4 px-5 z-50">
        <TouchableOpacity 
          onPress={handleContinue}
          disabled={!selectedRole}
          className={`h-14 rounded-full items-center justify-center ${
            selectedRole ? 'bg-[#006d3e]' : 'bg-[#006d3e] opacity-50'
          }`}
        >
          <Text className="text-white text-base font-bold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
