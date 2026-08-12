import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TasksScreen() {
  const [tasks] = useState([
    { id: 'TSK-1092', title: 'Empty Bio-Waste', assignee: 'Unassigned', priority: 'High', status: 'Pending' },
    { id: 'TSK-1091', title: 'Fix broken sensor on Bin #4', assignee: 'Alex', priority: 'Medium', status: 'In Progress' },
    { id: 'TSK-1090', title: 'Routine cleanup - Dining Hall', assignee: 'Sarah', priority: 'Low', status: 'Completed' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-green-700">Tasks</Text>
            <Text className="text-gray-500 mt-1">Maintenance & Collection</Text>
          </View>
          <TouchableOpacity className="bg-green-700 px-4 py-2 rounded-full flex-row items-center">
            <Ionicons name="add" size={16} color="white" />
            <Text className="text-white font-bold ml-1">New Task</Text>
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {tasks.map((task) => (
            <View key={task.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <View className="flex-row justify-between items-start mb-3">
                <Text className="text-base font-bold text-gray-800 flex-1 mr-2">{task.title}</Text>
                <View className={`px-2 py-1 rounded ${
                  task.priority === 'High' ? 'bg-red-100' :
                  task.priority === 'Medium' ? 'bg-yellow-100' : 'bg-gray-200'
                }`}>
                  <Text className={`text-xs font-bold uppercase ${
                    task.priority === 'High' ? 'text-red-700' :
                    task.priority === 'Medium' ? 'text-yellow-700' : 'text-gray-600'
                  }`}>{task.priority}</Text>
                </View>
              </View>

              <View className="flex-row justify-between items-center mt-2 border-t border-gray-200 pt-3">
                <View className="flex-row items-center space-x-2">
                  <Ionicons name="person-circle" size={20} color="#9ca3af" />
                  <Text className="text-sm font-medium text-gray-600">{task.assignee}</Text>
                </View>
                <Text className={`text-xs font-bold uppercase ${
                  task.status === 'Completed' ? 'text-green-600' :
                  task.status === 'In Progress' ? 'text-blue-600' : 'text-gray-500'
                }`}>{task.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
