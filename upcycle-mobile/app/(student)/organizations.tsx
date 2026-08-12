import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrganizationsScreen() {
  const [orgs] = useState([
    { id: 1, name: 'EcoWarriors', category: 'Activism', members: 340, joined: true },
    { id: 2, name: 'Green Engineers', category: 'Technology', members: 120, joined: false },
    { id: 3, name: 'Campus Compost', category: 'Hands-on', members: 85, joined: false },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-green-700">Organizations</Text>
          <Text className="text-gray-500 mt-1">Join eco-clubs and groups</Text>
        </View>

        <View className="bg-gray-100 flex-row items-center p-3 rounded-xl mb-6">
          <Ionicons name="search" size={20} color="#6b7280" />
          <TextInput placeholder="Search clubs..." className="flex-1 ml-2 text-base" />
        </View>

        <View className="space-y-4">
          {orgs.map(org => (
            <TouchableOpacity key={org.id} className="bg-gray-50 p-4 rounded-3xl border border-gray-100 flex-row items-center">
              <View className="w-14 h-14 bg-green-200 rounded-2xl items-center justify-center mr-4">
                <Text className="font-black text-green-800 text-xl">{org.name.charAt(0)}</Text>
              </View>
              
              <View className="flex-1">
                <Text className="font-bold text-lg text-gray-800">{org.name}</Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-xs font-bold text-gray-400 uppercase mr-3">{org.category}</Text>
                  <View className="flex-row items-center">
                    <Ionicons name="people" size={14} color="#9ca3af" />
                    <Text className="text-xs text-gray-500 ml-1">{org.members}</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity className={`px-4 py-2 rounded-full ${
                org.joined ? 'bg-gray-200' : 'bg-green-700'
              }`}>
                <Text className={`font-bold text-sm ${
                  org.joined ? 'text-gray-700' : 'text-white'
                }`}>{org.joined ? 'Joined' : 'Join'}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
