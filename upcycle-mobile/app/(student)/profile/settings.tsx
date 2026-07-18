import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function EditProfile() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View className="flex-1 bg-[#f4faff]">
        {/* Top App Bar */}
        <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-14 flex-row justify-between items-center z-50">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
              <Ionicons name="arrow-back" size={24} color="#006d3e" />
            </TouchableOpacity>
            <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
          </View>
          <TouchableOpacity className="p-2 -mr-2">
            <Ionicons name="notifications-outline" size={24} color="#6d7a6f" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-4 pt-8 pb-32" showsVerticalScrollIndicator={false}>
          
          {/* Profile Photo */}
          <View className="items-center mb-10">
            <View className="relative mb-2 group">
              <View className="w-32 h-32 rounded-full border-4 border-white shadow-sm overflow-hidden bg-[#d9e6da] items-center justify-center">
                <Ionicons name="person" size={60} color="#006d3e" />
              </View>
              <TouchableOpacity className="absolute bottom-2 right-0 bg-[#006d3e] p-2 rounded-full shadow-lg">
                <Ionicons name="pencil" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text className="font-bold text-[#006d3e] text-sm mt-2">Change Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Edit Form */}
          <View className="gap-6">
            <View className="bg-white rounded-[24px] p-6 shadow-sm border border-[#d9e6da]/50">
              <Text className="text-xl font-bold text-[#0d1e25] mb-6">Account Information</Text>
              
              <View className="gap-4">
                {/* Full Name */}
                <View className="gap-2">
                  <Text className="text-sm font-bold text-[#3d4a40] ml-1">Full Name</Text>
                  <View className="relative justify-center">
                    <Ionicons name="person-outline" size={20} color="#bccabd" style={{ position: 'absolute', left: 12, zIndex: 10 }} />
                    <TextInput 
                      className="w-full h-12 pl-10 pr-4 bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg text-base text-[#0d1e25]"
                      value="Alex Rivera"
                    />
                  </View>
                </View>

                {/* Email */}
                <View className="gap-2">
                  <Text className="text-sm font-bold text-[#3d4a40] ml-1">Email Address</Text>
                  <View className="relative justify-center">
                    <Ionicons name="mail-outline" size={20} color="#bccabd" style={{ position: 'absolute', left: 12, zIndex: 10 }} />
                    <TextInput 
                      className="w-full h-12 pl-10 pr-4 bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg text-base text-[#0d1e25]"
                      value="alex.rivera@upcycle.earth"
                      keyboardType="email-address"
                    />
                  </View>
                </View>

                {/* Phone */}
                <View className="gap-2">
                  <Text className="text-sm font-bold text-[#3d4a40] ml-1">Phone Number</Text>
                  <View className="relative justify-center">
                    <Ionicons name="call-outline" size={20} color="#bccabd" style={{ position: 'absolute', left: 12, zIndex: 10 }} />
                    <TextInput 
                      className="w-full h-12 pl-10 pr-4 bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg text-base text-[#0d1e25]"
                      value="+1 (555) 321-4567"
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                {/* Address */}
                <View className="gap-2">
                  <Text className="text-sm font-bold text-[#3d4a40] ml-1">Pickup Address</Text>
                  <View className="relative justify-center">
                    <Ionicons name="location-outline" size={20} color="#bccabd" style={{ position: 'absolute', left: 12, zIndex: 10 }} />
                    <TextInput 
                      className="w-full h-12 pl-10 pr-4 bg-[#f4faff] border-b-2 border-[#d9e6da] rounded-t-lg text-base text-[#0d1e25]"
                      value="1248 Greenway Terrace, Austin, TX 78704"
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* Preferences Card */}
            <View className="bg-[#E8F5E9]/50 rounded-[24px] p-6 border border-[#d9e6da] flex-row justify-between items-center gap-4">
              <View className="flex-row items-center gap-4 flex-1">
                <View className="p-3 bg-white rounded-xl shadow-sm">
                  <Ionicons name="leaf" size={24} color="#006d3e" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-bold text-[#2eb872] mb-1">Sustainability Goal</Text>
                  <Text className="text-xs text-[#3d4a40]">Your current track is Zero Waste Champion.</Text>
                </View>
              </View>
              <View className="w-16 h-2 bg-white/50 rounded-full overflow-hidden">
                 <View className="bg-[#2eb872] h-full w-[75%]" />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Primary Action Button */}
        <View className="absolute bottom-6 w-full px-4">
          <TouchableOpacity className="w-full h-14 bg-[#006d3e] rounded-full shadow-lg items-center justify-center">
            <Text className="text-white font-bold text-lg">Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
