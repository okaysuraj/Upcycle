import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ChooseRole() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>('student');

  const roles = [
    {
      id: 'student',
      title: 'Student & Community Member',
      description: 'Log waste diversion, earn Eco-Points, join green campus clubs, and claim marketplace rewards.',
      icon: 'school'
    },
    {
      id: 'staff',
      title: 'Sustainability Coordinator / Staff',
      description: 'Manage smart bin sensor networks, log institutional waste manifests, and coordinate logistics.',
      icon: 'badge'
    },
    {
      id: 'vendor',
      title: 'Certified Hauler / Recycler',
      description: 'Submit quotes for municipal RFPs, manage pickup dispatches, and track material processing.',
      icon: 'storefront'
    },
    {
      id: 'admin',
      title: 'Campus Administrator',
      description: 'Oversee institutional GHG emissions, track Scope 1-3 reporting, and manage user permissions.',
      icon: 'admin-panel-settings'
    }
  ];

  const handleContinue = () => {
    router.push('/(auth)/signup');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-xs font-bold uppercase tracking-wider text-[#00522d] bg-[#dff1fb] px-3 py-1 rounded-full">
          Step 1 of 3
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] tracking-tight">Choose Your Role</Text>
          <Text className="text-xs text-[#556158] mt-1 leading-relaxed">
            Select the account profile that matches your campus sustainability responsibility.
          </Text>
        </View>

        <View className="space-y-4">
          {roles.map((role) => {
            const isSelected = selectedRole === role.id;
            return (
              <TouchableOpacity 
                key={role.id}
                activeOpacity={0.8}
                onPress={() => setSelectedRole(role.id)}
                className={`p-5 rounded-[28px] border transition-all ${
                  isSelected 
                    ? 'bg-white border-2 border-[#00522d] shadow-md' 
                    : 'bg-white border-[#bec9be]/30 shadow-sm'
                }`}
              >
                <View className="flex-row justify-between items-start mb-3">
                  <View className={`w-12 h-12 rounded-2xl items-center justify-center ${
                    isSelected ? 'bg-[#00522d]' : 'bg-[#dff1fb]'
                  }`}>
                    <MaterialIcons 
                      name={role.icon as any} 
                      size={26} 
                      color={isSelected ? '#ffffff' : '#00522d'} 
                    />
                  </View>
                  <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                    isSelected ? 'border-[#00522d] bg-[#00522d]' : 'border-[#bec9be]'
                  }`}>
                    {isSelected && <Ionicons name="checkmark" size={14} color="#ffffff" />}
                  </View>
                </View>

                <Text className="text-base font-bold text-[#0d1e25] mb-1">{role.title}</Text>
                <Text className="text-xs text-[#556158] leading-relaxed">{role.description}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity 
          onPress={handleContinue}
          className="mt-8 py-4 bg-[#00522d] rounded-full items-center justify-center shadow-md flex-row gap-2"
        >
          <Text className="text-white font-bold text-sm">Continue Registration</Text>
          <MaterialIcons name="arrow-forward" size={18} color="#ffffff" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
