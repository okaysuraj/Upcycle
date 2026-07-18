import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function UserManagementMobile() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: 'Elena Vance',
      email: 'elena.v@upcycle.org',
      status: 'ACTIVE',
      roles: ['Admin', 'Main Site'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACijCGIphjlxHLgO2EOXEO43C9zRX1Odkpmc6X5Wx8DJnFSfpw8345Hhy7KtYUAkzy0KBq-kzZi52PijubHyTdMvnbk86qv_Ct_RS_0HE_4ibk9GgFW8qcrLRNGhyy23jdrGJl20PA6L91ql_rSH9p-MbWKNoZwMwtfMYWBSMGz-X-vK2cLM-NtRiEW-01zC1ZdT77TClwRa6fV2sn4JMlFV98O4KnAsk-L59mOZqRPnQyrBfStfURqVJk6fTakM1ktxgy31v42N0',
      initials: ''
    },
    {
      id: 2,
      name: 'Marcus Thorne',
      email: 'm.thorne@upcycle.org',
      status: 'SUSPENDED',
      roles: ['Moderator', 'North Campus'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXtF1t1DkxWnZS9jZVJ44_-8dY785AO9RxUuR3U3nTNCqt-Lmg6d8ZDDaNTmVtciWNSKw8qlaXgrC4KMef4L5cNWQZKVUiO_6KtKz04dqqRrJB6irVk2LUCtQsK8UqlYKMzrj1xfmdufhOqFhTJe5DSyepIx6sX5rDAt5jCD86RCtK_bH_1tHZ8nTAAaiy2QSFUGfhprvHpFEj0yNar6mU3rfRpb0s9QSomQ3X1IHSebb0lxphYCEENZ5HAo5IkBC8Z4iRr50olRE',
      initials: ''
    },
    {
      id: 3,
      name: 'Amara Jin',
      email: 'amara.j@upcycle.org',
      status: 'ACTIVE',
      roles: ['Auditor', 'Global'],
      image: '',
      initials: 'AJ'
    },
    {
      id: 4,
      name: 'Dr. Sarah Chen',
      email: 'schen@eco-consult.upcycle',
      status: 'ACTIVE',
      roles: ['External Expert', 'East Wing'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6TTDtGsw6QPPWr-sTvujPI9ProWJajj6JMyM62VDkU3OqVXotNEDDqqBL4uBMvNr6NQJ54UnmvHoJWC4Lu8PYHXNPiGmm0KWpXCu8f41OrfsRcbNLSUJtzE2rjE3L_dMzYsCJQk9kIVnQ23feYbkYAfQlTP0hVRCZ40dQfPAjKMOaaJq5iR6VdTZ75j6fkOisyEgcnXBUaDcfXT7AMqMkBsXAW3Cv0_pDTTHmh3iVNz36kz1tivVxGlCgulI4domgpNC8PmwU_Cw',
      initials: ''
    },
    {
      id: 5,
      name: 'Pending Invite...',
      email: 'k.wilson@newhire.com',
      status: 'PENDING',
      roles: ['Staff'],
      image: '',
      initials: '?'
    }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 h-14 bg-[#f8f9fa] border-b border-[#c1c8c2] z-50">
          <View className="flex-row items-center gap-3">
            <MaterialIcons name="eco" size={24} color="#012d1d" />
            <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-[#e7e8e9]">
            <MaterialIcons name="notifications" size={24} color="#414844" />
          </TouchableOpacity>
        </View>

        {/* Dashboard Header Context */}
        <View className="py-6 px-4">
          <Text className="text-2xl font-bold text-[#012d1d] mb-1">Users</Text>
          <Text className="text-xs text-[#414844]">System-wide user governance and access control</Text>
        </View>

        {/* Search and Filters */}
        <View className="px-4 mb-4">
          <View className="relative mb-3">
            <MaterialIcons name="search" size={24} color="#717973" className="absolute left-3 top-2.5 z-10" />
            <TextInput
              className="w-full h-11 pl-10 pr-4 bg-white border border-[#c1c8c2] rounded-lg text-sm text-[#191c1d]"
              placeholder="Search by name, email, or ID..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Quick Filters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
            <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 bg-[#1b4332] rounded-full mr-2">
              <MaterialIcons name="filter-list" size={16} color="white" />
              <Text className="text-white text-xs font-medium">All Roles</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 bg-[#e7e8e9] rounded-full mr-2">
              <Text className="text-[#414844] text-xs font-medium">Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 bg-[#e7e8e9] rounded-full mr-2">
              <Text className="text-[#414844] text-xs font-medium">Moderator</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 bg-[#e7e8e9] rounded-full mr-2">
              <Text className="text-[#414844] text-xs font-medium">North Campus</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-1.5 px-3 py-1.5 bg-[#e7e8e9] rounded-full">
              <Text className="text-[#414844] text-xs font-medium">Main Site</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* User List */}
        <ScrollView className="flex-1 px-4" contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="gap-3">
            {filteredUsers.map((user) => (
              <TouchableOpacity 
                key={user.id} 
                className={`bg-white border border-[#c1c8c2] p-3 rounded-xl flex-row items-center gap-3 active:scale-[0.98] ${
                  user.status === 'PENDING' ? 'opacity-75' : ''
                }`}
              >
                <View className={`w-12 h-12 rounded-full items-center justify-center overflow-hidden ${
                  user.image ? 'bg-transparent' : user.id === 3 ? 'bg-[#00452e]' : 'bg-[#cce6d0]'
                }`}>
                  {user.image ? (
                    <Image source={{ uri: user.image }} className="w-full h-full" />
                  ) : (
                    <Text className={`font-bold ${user.id === 3 ? 'text-white text-lg' : 'text-[#414844]'}`}>
                      {user.initials}
                    </Text>
                  )}
                  {!user.image && user.status === 'PENDING' && (
                    <MaterialIcons name="person" size={24} color="#717973" />
                  )}
                </View>
                
                <View className="flex-1 min-w-0">
                  <View className="flex-row justify-between items-start mb-0.5">
                    <Text className="text-base font-bold text-[#012d1d] flex-1" numberOfLines={1}>{user.name}</Text>
                    <View className={`px-2 py-0.5 rounded-full ${
                      user.status === 'ACTIVE' ? 'bg-[#cce6d0]' : 
                      user.status === 'SUSPENDED' ? 'bg-[#e7e8e9]' : 'bg-[#ffdad6]'
                    }`}>
                      <Text className={`text-[10px] font-medium ${
                        user.status === 'ACTIVE' ? 'text-[#506856]' : 
                        user.status === 'SUSPENDED' ? 'text-[#717973]' : 'text-[#93000a]'
                      }`}>
                        {user.status}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-xs text-[#414844] mb-1.5" numberOfLines={1}>{user.email}</Text>
                  <View className="flex-row gap-2">
                    {user.roles.map((role, idx) => (
                      <View key={idx} className="border border-[#c1c8c2] px-1.5 py-0.5 rounded">
                        <Text className="text-[10px] font-medium text-[#717973] uppercase">{role}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <TouchableOpacity className="p-2 active:bg-[#e7e8e9] rounded-full">
                  <MaterialIcons name={user.status === 'PENDING' ? 'close' : 'more-vert'} size={24} color="#414844" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Add User FAB */}
        <TouchableOpacity className="absolute right-6 bottom-24 w-14 h-14 bg-[#012d1d] rounded-full shadow-lg items-center justify-center active:scale-90 z-40">
          <MaterialIcons name="person-add" size={28} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f8f9fa] border-t border-[#c1c8c2] py-2 px-2 z-50 h-16 pb-2">
        <TouchableOpacity onPress={() => router.replace('/(staff)')} className="items-center p-2 active:scale-95">
          <MaterialIcons name="dashboard" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="gavel" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Audit</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#cce6d0] rounded-full px-3 py-1">
          <MaterialIcons name="group" size={24} color="#506856" />
          <Text className="text-[10px] text-[#506856]">Users</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="monitor-heart" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/user/account-settings')} className="items-center p-2 active:scale-95">
          <MaterialIcons name="settings" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Setup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
