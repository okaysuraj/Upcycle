import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TasksScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState([
    { id: 'TSK-1092', title: 'Empty Bio-Waste Smart Bin #4', assignee: 'Driver Crew 1', priority: 'High', status: 'Pending', location: 'Science Quad' },
    { id: 'TSK-1091', title: 'Recalibrate LoRaWAN Ultrasonic Sensor', assignee: 'Alex Rivera', priority: 'Medium', status: 'In Progress', location: 'Engineering Lab 4' },
    { id: 'TSK-1090', title: 'Routine Audit - Dining Hall Compost', assignee: 'Sarah Jenkins', priority: 'Low', status: 'Completed', location: 'Dining Commons' },
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        return { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' };
      }
      return t;
    }));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Task Dispatch Queue</Text>
        </View>
        <TouchableOpacity className="p-2 bg-[#dff1fb] rounded-full">
          <Ionicons name="add" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-5" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Field Tasks</Text>
          <Text className="text-xs text-[#556158] mt-0.5">Assigned work orders for campus facility operations.</Text>
        </View>

        <View className="space-y-4">
          {tasks.map((task) => {
            const isCompleted = task.status === 'Completed';
            const isHigh = task.priority === 'High';
            return (
              <View key={task.id} className="p-5 bg-white rounded-[28px] border border-[#bec9be]/30 shadow-sm space-y-3">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1 pr-2">
                    <Text className={`font-bold text-sm leading-snug ${isCompleted ? 'text-[#556158] line-through' : 'text-[#0d1e25]'}`}>
                      {task.title}
                    </Text>
                    <Text className="text-[11px] text-[#556158] mt-0.5">{task.location} • {task.id}</Text>
                  </View>

                  <View className={`px-2.5 py-0.5 rounded-full ${
                    isHigh ? 'bg-[#ffdad6]' : 'bg-[#dff1fb]'
                  }`}>
                    <Text className={`text-[10px] font-bold ${
                      isHigh ? 'text-[#ba1a1a]' : 'text-[#00522d]'
                    }`}>
                      {task.priority}
                    </Text>
                  </View>
                </View>

                <View className="pt-2 border-t border-[#bec9be]/20 flex-row justify-between items-center text-xs">
                  <View className="flex-row items-center gap-1.5">
                    <Ionicons name="person-circle-outline" size={16} color="#556158" />
                    <Text className="text-[11px] text-[#556158]">{task.assignee}</Text>
                  </View>

                  <TouchableOpacity 
                    onPress={() => toggleTaskStatus(task.id)}
                    className={`px-3 py-1 rounded-full flex-row items-center gap-1 ${
                      isCompleted ? 'bg-[#9cf6ba]/40' : 'bg-[#00522d]'
                    }`}
                  >
                    <Ionicons name={isCompleted ? "checkmark-circle" : "ellipse-outline"} size={12} color={isCompleted ? "#00210f" : "#ffffff"} />
                    <Text className={`text-[10px] font-bold ${isCompleted ? 'text-[#00210f]' : 'text-white'}`}>
                      {task.status}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
