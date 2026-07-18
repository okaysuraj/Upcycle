import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function AccountSettings() {
  const router = useRouter();
  const { user } = useAuth();
  
  const [name, setName] = useState('Alex Donovan');
  const [email, setEmail] = useState('alex.donovan@upcycle.admin');
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      {/* TopAppBar */}
      <View className="flex-row justify-between items-center px-6 h-14 bg-[#f8f9fa] border-b border-[#c1c8c2] z-50">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 rounded-full active:bg-[#e7e8e9]">
            <MaterialIcons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#1b4332] items-center justify-center">
            <Text className="text-white font-bold text-xs">AD</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Header Section */}
        <View className="mt-8 mb-10 items-center">
          <View className="relative">
            <View className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#e7e8e9]">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNgPa0vm8jIF_pk2HdjX7RwLXASecfviALhbJmwtEARvKRYKjNLvk9up5_A7eeUyWxgZVYMpbfL_EzQi2YfuE4YbzrM_St4FR8bdSLYnk7LkNLROl-3xzC4oDP69FdJ-LCeTy4Kju1LWrIUk09AY4sWaLoUTyqgk0V4NNcn4egr-AZCx8V6ogVxnlXI4UHtXo5n63cg-h_wBuzurYw9WK8fleRJBH0fBA79bhtQ2yXYABUlmVkHN0mpYnkkuFAk2Fr8AcDmPFtEKc' }}
                className="w-full h-full"
              />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-[#012d1d] p-2 rounded-full shadow-lg border-2 border-white items-center justify-center active:scale-95">
              <MaterialIcons name="photo-camera" size={14} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="mt-4 text-xl font-bold text-[#191c1d]">Alex Donovan</Text>
          <Text className="text-[#414844] text-xs">Senior Sustainability Auditor</Text>
        </View>

        <View className="px-4 space-y-6">
          
          {/* Personal Information */}
          <View className="bg-white rounded-xl border border-[#c1c8c2] overflow-hidden mb-6">
            <View className="px-6 py-4 border-b border-[#c1c8c2] bg-[#f3f4f5] flex-row justify-between items-center">
              <Text className="text-xs uppercase tracking-wider text-[#414844] font-bold">Personal Information</Text>
              <MaterialIcons name="person" size={20} color="#414844" />
            </View>
            <View className="p-6 space-y-5">
              <View>
                <Text className="text-xs font-medium text-[#414844] mb-1">Full Name</Text>
                <TextInput 
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c1c8c2] rounded-lg text-[#191c1d]"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View>
                <Text className="text-xs font-medium text-[#414844] mb-1">Email Address</Text>
                <TextInput 
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c1c8c2] rounded-lg text-[#191c1d]"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </View>
              <View className="flex-row gap-4">
                <View className="flex-1">
                  <Text className="text-xs font-medium text-[#414844] mb-1">Role</Text>
                  <View className="w-full px-4 py-3 bg-[#edeeef] border border-[#c1c8c2] rounded-lg opacity-80">
                    <Text className="text-[#414844]">Admin</Text>
                  </View>
                </View>
                <View className="flex-1">
                  <Text className="text-xs font-medium text-[#414844] mb-1">ID Number</Text>
                  <View className="w-full px-4 py-3 bg-[#edeeef] border border-[#c1c8c2] rounded-lg opacity-80">
                    <Text className="font-mono text-[#414844]">#UC-4492</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Password & Security */}
          <View className="bg-white rounded-xl border border-[#c1c8c2] overflow-hidden mb-6">
            <View className="px-6 py-4 border-b border-[#c1c8c2] bg-[#f3f4f5] flex-row justify-between items-center">
              <Text className="text-xs uppercase tracking-wider text-[#414844] font-bold">Security & Privacy</Text>
              <MaterialIcons name="security" size={20} color="#414844" />
            </View>
            <View className="p-6 space-y-4">
              <TouchableOpacity className="w-full flex-row items-center justify-between p-4 bg-[#f8f9fa] border border-[#c1c8c2] rounded-lg active:bg-[#edeeef]">
                <View className="flex-row items-center gap-3">
                  <MaterialIcons name="lock" size={24} color="#012d1d" />
                  <Text className="text-sm text-[#191c1d]">Change Password</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#414844" />
              </TouchableOpacity>
              
              <View className="flex-row items-center justify-between p-4 bg-[#f8f9fa] border border-[#c1c8c2] rounded-lg">
                <View className="flex-row items-center gap-3 flex-1">
                  <MaterialIcons name="verified-user" size={24} color="#012d1d" />
                  <View>
                    <Text className="text-sm text-[#191c1d]">Two-Factor Authentication</Text>
                    <Text className="text-[10px] text-[#4c6452]">{twoFactor ? 'Currently Enabled' : 'Disabled'}</Text>
                  </View>
                </View>
                <Switch 
                  value={twoFactor}
                  onValueChange={setTwoFactor}
                  trackColor={{ false: '#c1c8c2', true: '#1b4332' }}
                  thumbColor="#ffffff"
                />
              </View>
              
              <View className="pt-2">
                <Text className="text-xs font-medium text-[#414844] mb-3">Active Sessions</Text>
                <View className="flex-row items-center gap-3 p-3 bg-white rounded-lg border border-[#c1c8c2] border-dashed">
                  <MaterialIcons name="smartphone" size={24} color="#4c6452" />
                  <View className="flex-1">
                    <Text className="text-xs font-bold text-[#191c1d]">iPhone 15 Pro</Text>
                    <Text className="text-[10px] text-[#414844]">San Francisco, USA • Active now</Text>
                  </View>
                  <View className="w-2 h-2 rounded-full bg-[#012d1d]" />
                </View>
              </View>
            </View>
          </View>

          {/* Linked Ecosystems */}
          <View className="bg-white rounded-xl border border-[#c1c8c2] overflow-hidden mb-6">
            <View className="px-6 py-4 border-b border-[#c1c8c2] bg-[#f3f4f5] flex-row justify-between items-center">
              <Text className="text-xs uppercase tracking-wider text-[#414844] font-bold">Linked Ecosystems</Text>
              <MaterialIcons name="hub" size={20} color="#414844" />
            </View>
            <View className="p-6 space-y-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded bg-[#1b4332] items-center justify-center">
                    <MaterialIcons name="cloud" size={24} color="white" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#191c1d]">Green-API Cloud</Text>
                    <Text className="text-[10px] text-[#414844]">Connected 4 months ago</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text className="text-xs font-medium text-[#ba1a1a]">Unlink</Text>
                </TouchableOpacity>
              </View>
              
              <View className="flex-row items-center justify-between opacity-80">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded bg-[#c1c8c2] items-center justify-center">
                    <MaterialIcons name="monitoring" size={24} color="white" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#191c1d]">Eco-Metric Suite</Text>
                    <Text className="text-[10px] text-[#414844]">Not connected</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text className="text-xs font-bold text-[#012d1d]">Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Danger Zone */}
          <View className="p-4 border border-[#ba1a1a]/30 bg-[#ffdad6]/10 rounded-xl mb-6">
            <Text className="text-xs font-medium text-[#ba1a1a] mb-2">Danger Zone</Text>
            <Text className="text-xs text-[#414844] mb-4">Deleting your account will permanently erase all administrative logs and historical audit data associated with this ID.</Text>
            <TouchableOpacity onPress={() => router.push('/user/account-deactivation')} className="w-full py-3 border border-[#ba1a1a] rounded-lg items-center active:bg-[#ffdad6]/50">
              <Text className="text-[#ba1a1a] font-bold">Request Account Deletion</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Actions */}
          <View className="flex-row gap-4 pt-4">
            <TouchableOpacity className="flex-1 py-4 border border-[#717973] rounded-xl items-center active:bg-[#edeeef]">
              <Text className="text-[#191c1d] font-bold">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-4 bg-[#012d1d] rounded-xl items-center shadow-md active:scale-95">
              <Text className="text-white font-bold">Save Settings</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>

      {/* Bottom Nav Simulation */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f8f9fa] border-t border-[#c1c8c2] shadow-md rounded-t-xl py-3 px-2 z-50">
        <TouchableOpacity className="items-center active:scale-95 p-2">
          <MaterialIcons name="settings" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#1b4332] rounded-full px-4 py-1">
          <MaterialIcons name="person" size={24} color="#86af99" />
          <Text className="text-[10px] text-[#86af99]">Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-95 p-2">
          <MaterialIcons name="notifications" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Notifications</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
