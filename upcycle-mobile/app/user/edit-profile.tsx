import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function EditProfile() {
  const router = useRouter();
  const { user } = useAuth();
  
  const [name, setName] = useState(user?.name || 'Alex Rivera');
  const [email, setEmail] = useState(user?.email || 'alex.rivera@university.edu');
  const [department, setDepartment] = useState('School of Sustainable Engineering');
  const [phone, setPhone] = useState('+1 (555) 321-4567');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      router.back();
    }, 800);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Edit Profile</Text>
        </View>
        <TouchableOpacity onPress={handleSave} className="px-4 py-1.5 bg-[#00522d] rounded-full">
          <Text className="text-xs font-bold text-white">{saved ? 'Saved!' : 'Save'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Avatar Upload */}
        <View className="items-center mb-6">
          <View className="relative">
            <View className="w-24 h-24 rounded-full bg-[#00522d] items-center justify-center shadow-md">
              <Ionicons name="person" size={48} color="#ffffff" />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-[#2eb872] p-2 rounded-full border-2 border-white shadow-sm">
              <MaterialIcons name="photo-camera" size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <Text className="text-xs font-bold text-[#00522d] mt-2">Change Profile Photo</Text>
        </View>

        {/* Form Fields Card */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <View className="space-y-1.5">
            <Text className="text-xs font-bold text-[#556158] uppercase">Full Name</Text>
            <View className="flex-row items-center bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl px-4 h-12">
              <Ionicons name="person-outline" size={18} color="#556158" />
              <TextInput 
                value={name}
                onChangeText={setName}
                className="flex-1 ml-2 text-xs font-bold text-[#0d1e25]"
              />
            </View>
          </View>

          <View className="space-y-1.5">
            <Text className="text-xs font-bold text-[#556158] uppercase">Institutional Email</Text>
            <View className="flex-row items-center bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl px-4 h-12">
              <Ionicons name="mail-outline" size={18} color="#556158" />
              <TextInput 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 ml-2 text-xs text-[#0d1e25]"
              />
            </View>
          </View>

          <View className="space-y-1.5">
            <Text className="text-xs font-bold text-[#556158] uppercase">Department / Division</Text>
            <View className="flex-row items-center bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl px-4 h-12">
              <MaterialIcons name="school" size={18} color="#556158" />
              <TextInput 
                value={department}
                onChangeText={setDepartment}
                className="flex-1 ml-2 text-xs text-[#0d1e25]"
              />
            </View>
          </View>

          <View className="space-y-1.5">
            <Text className="text-xs font-bold text-[#556158] uppercase">Phone Number</Text>
            <View className="flex-row items-center bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl px-4 h-12">
              <Ionicons name="call-outline" size={18} color="#556158" />
              <TextInput 
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                className="flex-1 ml-2 text-xs text-[#0d1e25]"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleSave}
          className="py-4 bg-[#00522d] rounded-full items-center shadow-md"
        >
          <Text className="text-white font-bold text-sm">Save Profile Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
