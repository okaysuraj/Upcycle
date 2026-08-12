import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SupportTicketsScreen() {
  const [tickets] = useState([
    { id: 'TKT-001', subject: 'Bin Overflow in Library', user: 'jdoe@univ.edu', status: 'Open', time: '10m ago' },
    { id: 'TKT-002', subject: 'App crashes when scanning', user: 'asmith@univ.edu', status: 'In Progress', time: '1h ago' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Tickets</Text>
            <Text className="text-gray-500 mt-1">User reports and incidents</Text>
          </View>
          <TouchableOpacity className="bg-gray-100 p-3 rounded-full">
            <Ionicons name="filter" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {tickets.map((ticket) => (
            <TouchableOpacity key={ticket.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-xs font-mono font-bold text-gray-500">{ticket.id}</Text>
                <Text className="text-xs text-gray-400">{ticket.time}</Text>
              </View>
              <Text className="text-lg font-bold text-gray-800 mb-1">{ticket.subject}</Text>
              <Text className="text-sm text-gray-500 mb-3">{ticket.user}</Text>
              
              <View className="flex-row justify-between items-center">
                 <View className={`px-3 py-1 rounded-full ${
                  ticket.status === 'Open' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <Text className={`text-xs font-bold uppercase ${
                    ticket.status === 'Open' ? 'text-red-700' : 'text-blue-700'
                  }`}>{ticket.status}</Text>
                </View>
                <Text className="text-green-700 font-bold text-sm">View Details</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
