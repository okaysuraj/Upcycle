import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function EditProfile() {
  const router = useRouter();
  const { user } = useAuth();
  
  const [name, setName] = useState('Alex Rivera');
  const [email, setEmail] = useState('alex.rivera@upcycle.earth');
  const [phone, setPhone] = useState('+1 (555) 321-4567');
  const [address, setAddress] = useState('1248 Greenway Terrace, Austin, TX 78704');

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-5 h-14 bg-[#f4faff] z-50 transition-colors duration-300">
          <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={() => router.back()} className="active:scale-95">
              <MaterialIcons name="arrow-back" size={24} color="#006d3e" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-[#006d3e]">Upcycle</Text>
          </View>
          <TouchableOpacity className="active:scale-95">
            <MaterialIcons name="notifications" size={24} color="#3d4a40" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Profile Header / Photo Section */}
          <View className="w-full flex-col items-center mb-10">
            <View className="relative">
              <View className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4 bg-[#dff1fb] shadow-sm">
                <Image 
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIA6hVJJhwPUJFV2EPRrpLhYhb_Wl579TcWeNh0yuU-wevGtWoOQUwJWBribP9e5v-yu9BN6lMUV76IqnvinkE7HA2NqBNlIRKhy4uJWyBpR7Xk2jxwG2bHB8bMkx560SMUtN0E-z7Q6PZ5AjhdONdrFLVOuSamuqvAQJ3Td7WsUUeShWXulByiNqGZTdQ321MUQWwAudArTLd36RRyXqf-T9r0GKCvP9t0N2PnYaqzZfKWdwzGd-hvplJanvzVOHjZBLbsu1uNug' }}
                  className="w-full h-full"
                />
              </View>
              <TouchableOpacity className="absolute bottom-4 right-0 bg-[#006d3e] p-2 rounded-full shadow-lg border-2 border-white items-center justify-center active:scale-95">
                <MaterialIcons name="edit" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="active:opacity-70 mt-2">
              <Text className="text-sm font-medium text-[#006d3e]">Change Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Edit Form Section */}
          <View className="space-y-6 w-full">
            <View className="bg-white rounded-3xl p-6 shadow-sm border border-[#d9e6da]/30 mb-6">
              <Text className="text-2xl font-bold mb-6 text-[#0d1e25]">Account Information</Text>
              
              <View className="gap-4">
                {/* Full Name */}
                <View>
                  <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">Full Name</Text>
                  <View className="flex-row items-center bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg h-12 px-3">
                    <MaterialIcons name="person" size={20} color="#bccabd" />
                    <TextInput 
                      className="flex-1 ml-3 text-base text-[#0d1e25]"
                      value={name}
                      onChangeText={setName}
                    />
                  </View>
                </View>

                {/* Email */}
                <View>
                  <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">Email Address</Text>
                  <View className="flex-row items-center bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg h-12 px-3">
                    <MaterialIcons name="mail" size={20} color="#bccabd" />
                    <TextInput 
                      className="flex-1 ml-3 text-base text-[#0d1e25]"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* Phone Number */}
                <View>
                  <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">Phone Number</Text>
                  <View className="flex-row items-center bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg h-12 px-3">
                    <MaterialIcons name="call" size={20} color="#bccabd" />
                    <TextInput 
                      className="flex-1 ml-3 text-base text-[#0d1e25]"
                      value={phone}
                      onChangeText={setPhone}
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                {/* Pickup Address */}
                <View>
                  <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">Pickup Address</Text>
                  <View className="flex-row items-center bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg h-12 px-3">
                    <MaterialIcons name="location-on" size={20} color="#bccabd" />
                    <TextInput 
                      className="flex-1 ml-3 text-base text-[#0d1e25]"
                      value={address}
                      onChangeText={setAddress}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* Preferences Card */}
            <View className="bg-[#d9e6da]/20 rounded-3xl p-6 border border-[#d9e6da]/50 flex-col items-center gap-6 mb-8">
              <View className="flex-row items-start gap-4 self-start">
                <View className="p-3 bg-white rounded-xl shadow-sm">
                  <MaterialIcons name="eco" size={32} color="#006d3e" />
                </View>
                <View className="flex-1">
                  <Text className="text-xl font-bold text-[#004224]">Sustainability Goal</Text>
                  <Text className="text-base text-[#3d4a40] mt-1">Your current track is Zero Waste Champion.</Text>
                </View>
              </View>
              <View className="w-full bg-white/50 h-3 rounded-full overflow-hidden">
                <View className="bg-[#2eb872] h-full" style={{ width: '75%' }} />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Primary Action Button */}
        <View className="absolute bottom-0 left-0 w-full p-5 bg-[#f4faff] border-t border-[#d9e6da]/30">
          <TouchableOpacity className="w-full h-14 bg-[#006d3e] rounded-full justify-center items-center shadow-md active:scale-95">
            <Text className="text-white text-xl font-bold">Save Changes</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
