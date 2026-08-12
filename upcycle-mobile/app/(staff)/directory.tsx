import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DirectoryScreen() {
  const [staff] = useState([
    { id: 1, name: 'Alice Johnson', role: 'STAFF', email: 'alice@univ.edu', avail: 40 },
    { id: 2, name: 'Bob Smith', role: 'VENDOR', email: 'bob@greenwaste.com', avail: 20 },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-green-700">Workforce</Text>
          <Text className="text-gray-500 mt-1">Manage staff and volunteers</Text>
        </View>

        <View className="bg-gray-100 flex-row items-center p-3 rounded-xl mb-6">
          <Ionicons name="search" size={20} color="#6b7280" />
          <TextInput placeholder="Search name or email..." className="flex-1 ml-2 text-base" />
        </View>

        <View className="space-y-4">
          {staff.map((s) => (
            <View key={s.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center mr-4">
                <Text className="font-bold text-green-700 text-lg">{s.name.charAt(0)}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold text-gray-800">{s.name}</Text>
                <Text className="text-sm text-gray-500">{s.email}</Text>
              </View>
              <View className="items-end">
                 <View className="bg-gray-200 px-2 py-1 rounded">
                   <Text className="text-[10px] font-bold text-gray-700">{s.role}</Text>
                 </View>
                 <Text className="text-xs text-gray-400 mt-1">{s.avail} hrs/wk</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
