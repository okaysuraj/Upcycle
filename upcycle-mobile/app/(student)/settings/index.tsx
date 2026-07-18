import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';

export default function SettingsHome() {
  const router = useRouter();
  const { logout } = useAuth();
  
  const handleSignOut = async () => {
    await logout();
    router.replace('/(auth)/login');
  };

  return (
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f8f9fa]">
      {/* Top App Bar */}
      <View className="px-6 pt-12 pb-4 flex-row justify-between items-center bg-[#f8f9fa] border-b border-[#c1c8c2]">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={28} color="#012d1d" />
          <Text className="text-2xl font-bold text-[#012d1d]">Upcycle Settings</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="#414844" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="py-6">
        {/* Search */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center bg-[#f3f4f5] border border-[#c1c8c2] rounded-xl px-4 py-3">
            <MaterialIcons name="search" size={20} color="#414844" className="mr-2" />
            <TextInput 
              placeholder="Search settings..." 
              className="flex-1 text-[#191c1d]"
              placeholderTextColor="#414844"
            />
          </View>
        </View>

        {/* Profile Summary */}
        <View className="px-6 mb-8">
          <View className="bg-white border border-[#c1c8c2] rounded-xl p-4 flex-row items-center justify-between shadow-sm">
            <View className="flex-row items-center gap-4">
              <View className="w-16 h-16 bg-[#1b4332]/20 rounded-full items-center justify-center border-2 border-[#1b4332]/20">
                <MaterialIcons name="person" size={32} color="#012d1d" />
              </View>
              <View>
                <Text className="text-xl font-bold text-[#012d1d]">User Settings</Text>
                <Text className="text-xs text-[#414844]">Manage your account</Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#414844" />
          </View>
        </View>

        {/* Categories */}
        <View className="mb-8">
          <Text className="px-6 pb-2 text-[10px] uppercase tracking-widest text-[#414844] font-bold">Main Categories</Text>
          <View className="bg-white border-y border-[#c1c8c2]">
            
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#c1c8c2]/50">
              <View className="flex-row items-center gap-4">
                <View className="bg-[#cce6d0] p-2 rounded-lg">
                  <MaterialIcons name="person" size={24} color="#012d1d" />
                </View>
                <View>
                  <Text className="text-base font-bold text-[#012d1d]">Account</Text>
                  <Text className="text-xs text-[#414844]">Personal info, login</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#717973" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#c1c8c2]/50">
              <View className="flex-row items-center gap-4">
                <View className="bg-[#cce6d0] p-2 rounded-lg">
                  <MaterialIcons name="notifications" size={24} color="#012d1d" />
                </View>
                <View>
                  <Text className="text-base font-bold text-[#012d1d]">Notifications</Text>
                  <Text className="text-xs text-[#414844]">Alert triggers, digest settings</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#717973" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#c1c8c2]/50">
              <View className="flex-row items-center gap-4">
                <View className="bg-[#cce6d0] p-2 rounded-lg">
                  <MaterialIcons name="security" size={24} color="#012d1d" />
                </View>
                <View>
                  <Text className="text-base font-bold text-[#012d1d]">Privacy & Security</Text>
                  <Text className="text-xs text-[#414844]">Two-factor auth, session</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#717973" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center gap-4">
                <View className="bg-[#cce6d0] p-2 rounded-lg">
                  <MaterialIcons name="tune" size={24} color="#012d1d" />
                </View>
                <View>
                  <Text className="text-base font-bold text-[#012d1d]">Preferences</Text>
                  <Text className="text-xs text-[#414844]">Language, dark mode, units</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#717973" />
            </TouchableOpacity>
            
          </View>
        </View>

        {/* Support */}
        <View className="mb-8">
          <Text className="px-6 pb-2 text-[10px] uppercase tracking-widest text-[#414844] font-bold">Support</Text>
          <View className="bg-white border-y border-[#c1c8c2]">
            
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#c1c8c2]/50">
              <View className="flex-row items-center gap-4">
                <MaterialIcons name="help" size={24} color="#414844" />
                <Text className="text-sm font-bold text-[#191c1d]">Help Center</Text>
              </View>
              <MaterialIcons name="open-in-new" size={16} color="#717973" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center gap-4">
                <MaterialIcons name="contact-support" size={24} color="#414844" />
                <Text className="text-sm font-bold text-[#191c1d]">Support</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#717973" />
            </TouchableOpacity>
            
          </View>
        </View>

        <View className="px-6 py-8 items-center pb-24">
          <Text className="text-xs text-[#717973] font-bold">Upcycle App v2.4.12</Text>
          
          <TouchableOpacity 
            className="mt-6 border border-[#ba1a1a] rounded-xl px-8 py-3 w-full items-center"
            onPress={handleSignOut}
          >
            <Text className="text-[#ba1a1a] font-bold">Sign Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScreenWrapper>
  );
}