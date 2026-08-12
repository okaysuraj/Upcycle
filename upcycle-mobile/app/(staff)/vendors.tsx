import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

export default function VendorsScreen() {
  const [vendors] = useState([
    { id: 'V-001', name: 'GreenWaste Solutions', type: 'Recycling', status: 'Active', sla: 98 },
    { id: 'V-004', name: 'Campus Haulers', type: 'General', status: 'At Risk', sla: 76 },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-green-700">Vendors</Text>
          <Text className="text-gray-500 mt-1">Manage contracts and SLA</Text>
        </View>

        <View className="space-y-4">
          {vendors.map(vendor => (
            <TouchableOpacity key={vendor.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="font-bold text-lg text-gray-800">{vendor.name}</Text>
                  <Text className="text-sm text-gray-500 mt-1">{vendor.type}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${
                  vendor.status === 'Active' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Text className={`text-xs font-bold uppercase ${
                    vendor.status === 'Active' ? 'text-green-700' : 'text-red-700'
                  }`}>{vendor.status}</Text>
                </View>
              </View>
              
              <View className="mt-4 pt-4 border-t border-gray-200 flex-row justify-between items-center">
                 <Text className="text-gray-600 font-medium">SLA Performance</Text>
                 <View className="flex-row items-center">
                   <Text className={`font-bold mr-2 ${vendor.sla < 80 ? 'text-red-600' : 'text-green-600'}`}>{vendor.sla}%</Text>
                   <View className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                     <View className={`h-full ${vendor.sla < 80 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${vendor.sla}%` }} />
                   </View>
                 </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
