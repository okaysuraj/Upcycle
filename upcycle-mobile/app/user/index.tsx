import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function UserProfileOverview() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-14 bg-[#f4faff] z-50">
        <TouchableOpacity className="active:scale-95">
          <MaterialIcons name="menu" size={24} color="#006d3e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-[#006d3e]">Upcycle</Text>
        <TouchableOpacity className="active:scale-95">
          <MaterialIcons name="notifications" size={24} color="#006d3e" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Profile Header */}
        <View className="items-center mb-10">
          <View className="relative mb-6">
            <View className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#2eb872] p-1 bg-[#f4faff] overflow-hidden">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcawwB8H5QtuFjq_uioybOt83WX4yJqck8RuJ5LufmoqHEEn7vwrmBGSSaPlGR7NHgpK26tPBj9iQ4ilbPZUp_W54VcTgQzzJkJFgMCe6UQ4NyI4rSWb_Px_nDPEpBjoX_N5SQMkOgvY2h2-VQMlWa_wrMkDND-gynzYtWe6ela6bQfd6FqwOduflDIb82iPEgox6ucnwsIBZV75IUXAr_G9N_trvC6EqABTe_sOZ7CfuBF7ao7qIfPV5Vb9F6j-OYOzs3YF747VQ' }}
                className="w-full h-full rounded-full"
              />
            </View>
            <View className="absolute bottom-0 right-2 bg-[#2eb872] p-2 rounded-full border-4 border-[#f4faff] shadow-md items-center justify-center">
              <MaterialIcons name="eco" size={20} color="white" />
            </View>
          </View>
          
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Alex River</Text>
          <View className="flex-row items-center px-4 py-1.5 rounded-full bg-[#E8F5E9]">
            <MaterialIcons name="workspace-premium" size={16} color="#006d3e" className="mr-2" />
            <Text className="text-[#006d3e] font-bold text-sm">Eco Warrior</Text>
          </View>
        </View>

        {/* Navigation Cards */}
        <View className="gap-4">
          
          {/* Sustainability Impact Card */}
          <TouchableOpacity className="bg-[#e7f6ff] rounded-3xl p-6 shadow-sm active:scale-[0.98]">
            <View className="flex-row justify-between items-start mb-4">
              <MaterialIcons name="analytics" size={32} color="#006d3e" />
              <MaterialIcons name="arrow-forward" size={24} color="#6d7a6f" />
            </View>
            <Text className="text-2xl font-bold text-[#0d1e25] mb-2">Sustainability Impact</Text>
            <Text className="text-base text-[#3d4a40] mb-8">Track your journey through carbon reduction metrics and waste diversion milestones.</Text>
            
            <View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-sm font-medium text-[#0d1e25]">Weekly Goal</Text>
                <Text className="text-sm font-bold text-[#006d3e]">85%</Text>
              </View>
              <View className="w-full h-3 bg-[#E8F5E9] rounded-full overflow-hidden">
                <View className="h-full bg-[#2eb872]" style={{ width: '85%' }} />
              </View>
            </View>
          </TouchableOpacity>

          <View className="flex-row gap-4">
            {/* Achievements Card */}
            <TouchableOpacity className="flex-1 bg-[#d4e5ef] rounded-3xl p-6 shadow-sm items-center active:scale-[0.98]">
              <View className="w-16 h-16 rounded-2xl bg-white items-center justify-center mb-4 shadow-sm">
                <MaterialIcons name="military-tech" size={32} color="#006d3e" />
              </View>
              <Text className="text-lg font-bold text-[#0d1e25] mb-2 text-center">Achievements</Text>
              <Text className="text-xs font-medium text-[#3d4a40] text-center mb-4">12 Badges</Text>
              
              <View className="flex-row justify-center -space-x-3">
                <View className="w-8 h-8 rounded-full border-2 border-[#d4e5ef] bg-[#2eb872] items-center justify-center z-30">
                  <MaterialIcons name="stars" size={16} color="white" />
                </View>
                <View className="w-8 h-8 rounded-full border-2 border-[#d4e5ef] bg-[#7ead81] items-center justify-center z-20">
                  <MaterialIcons name="recycling" size={16} color="white" />
                </View>
                <View className="w-8 h-8 rounded-full border-2 border-[#d4e5ef] bg-[#bdcabe] items-center justify-center z-10">
                  <MaterialIcons name="eco" size={16} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* Activity History Card */}
            <TouchableOpacity className="flex-1 bg-[#d9e6da] rounded-3xl p-6 shadow-sm active:scale-[0.98]">
              <MaterialIcons name="history" size={24} color="#006d3e" className="mb-4" />
              <Text className="text-lg font-bold text-[#0d1e25] mb-2">Activity History</Text>
              <Text className="text-xs text-[#3d4a40] mb-4">View your recent log entries.</Text>
              <View className="mt-auto pt-4 border-t border-[#bccabd]/50">
                <Text className="text-[10px] font-bold text-[#006d3e]">Last log: Yesterday</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Account Settings Card */}
          <TouchableOpacity 
            onPress={() => router.push('/user/account-settings')}
            className="bg-[#d9ebf5] rounded-3xl p-6 shadow-sm flex-row items-center justify-between active:scale-[0.98]"
          >
            <View className="flex-1 pr-4">
              <MaterialIcons name="settings" size={24} color="#3d4a40" className="mb-4" />
              <Text className="text-xl font-bold text-[#0d1e25] mb-2">Account Settings</Text>
              <Text className="text-sm text-[#3d4a40]">Security, notifications, and profile details.</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#6d7a6f" />
          </TouchableOpacity>

        </View>

        {/* Logout Button */}
        <View className="mt-10 mb-8 items-center">
          <TouchableOpacity 
            onPress={handleLogout}
            className="flex-row items-center px-8 py-4 rounded-full bg-[#E8F5E9] active:bg-[#ffdad6]"
          >
            <MaterialIcons name="logout" size={20} color="#ba1a1a" className="mr-2" />
            <Text className="text-[#ba1a1a] font-bold">Sign Out</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f4faff] border-t border-[#bccabd]/30 py-2 px-2 z-50 h-16 pb-2">
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="home" size={24} color="#5b675e" />
          <Text className="text-[10px] text-[#5b675e]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="analytics" size={24} color="#5b675e" />
          <Text className="text-[10px] text-[#5b675e]">Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="add-circle" size={24} color="#5b675e" />
          <Text className="text-[10px] text-[#5b675e]">Log</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="group" size={24} color="#5b675e" />
          <Text className="text-[10px] text-[#5b675e]">Community</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#2eb872] rounded-full px-4 py-1">
          <MaterialIcons name="person" size={24} color="#004224" />
          <Text className="text-[10px] text-[#004224]">Profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
