import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OrganizationsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [orgs, setOrgs] = useState([
    { id: '1', name: 'Zero-Waste Campus Coalition', category: 'Activism & Policy', members: 340, joined: true, icon: 'eco' },
    { id: '2', name: 'Sustainable Engineering Society', category: 'Hardware & Tech', members: 185, joined: false, icon: 'precision-manufacturing' },
    { id: '3', name: 'Campus Composting Initiative', category: 'Hands-on & Operations', members: 92, joined: false, icon: 'compost' },
    { id: '4', name: 'Solar Decathlon Team', category: 'Clean Energy', members: 64, joined: true, icon: 'solar-power' },
  ]);

  const toggleJoin = (id: string) => {
    setOrgs(orgs.map(o => o.id === id ? { ...o, joined: !o.joined } : o));
  };

  const filteredOrgs = orgs.filter(o => 
    o.name.toLowerCase().includes(search.toLowerCase()) || 
    o.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Connected Organizations</Text>
        </View>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="add" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="bg-white border border-[#bec9be]/40 rounded-full px-4 h-12 flex-row items-center gap-2 mb-6 shadow-sm">
          <Ionicons name="search" size={18} color="#556158" />
          <TextInput 
            value={search}
            onChangeText={setSearch}
            placeholder="Search campus eco-clubs & student groups..."
            placeholderTextColor="#556158"
            className="flex-1 text-xs text-[#0d1e25]"
          />
        </View>

        {/* List of Orgs */}
        <View className="space-y-4">
          {filteredOrgs.map((org) => (
            <View key={org.id} className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm flex-row items-center justify-between">
              <View className="flex-row items-center gap-3.5 flex-1 pr-3">
                <View className="w-12 h-12 rounded-2xl bg-[#dff1fb] items-center justify-center">
                  <MaterialIcons name={org.icon as any} size={24} color="#00522d" />
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-sm text-[#0d1e25] leading-snug">{org.name}</Text>
                  <View className="flex-row items-center gap-2 mt-1">
                    <Text className="text-[10px] font-bold text-[#00522d] bg-[#dff1fb] px-2 py-0.5 rounded-full">{org.category}</Text>
                    <Text className="text-[10px] text-[#556158]">{org.members} members</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity 
                onPress={() => toggleJoin(org.id)}
                className={`px-4 py-2 rounded-full ${
                  org.joined ? 'bg-[#f4faff] border border-[#bec9be]/40' : 'bg-[#00522d]'
                }`}
              >
                <Text className={`text-xs font-bold ${org.joined ? 'text-[#556158]' : 'text-white'}`}>
                  {org.joined ? 'Joined' : 'Join'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
