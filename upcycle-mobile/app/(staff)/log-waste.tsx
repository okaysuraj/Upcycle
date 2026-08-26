import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function LogWasteScreen() {
  const router = useRouter();
  const { binId } = useLocalSearchParams();
  
  const [category, setCategory] = useState('Recyclables & Plastics');
  const [quantity, setQuantity] = useState('18.5');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'plastic', name: 'Recyclables & Plastics', icon: 'recycling' },
    { id: 'organic', name: 'Compost & Food Scrap', icon: 'eco' },
    { id: 'paper', name: 'Cardboard & Paper', icon: 'description' },
    { id: 'ewaste', name: 'Lab Electronics', icon: 'devices' },
  ];

  const handleLogWaste = () => {
    if (!quantity || isNaN(Number(quantity))) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      router.push('/(staff)/route');
    }, 1200);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Log Waste Manifest</Text>
        </View>
        <View className="px-3 py-1 bg-[#dff1fb] rounded-full">
          <Text className="text-xs font-mono font-bold text-[#00522d]">{binId || 'BIN-101'}</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        {/* Header Summary */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">Field Waste Collection</Text>
          <Text className="text-xs text-[#556158] mt-1">
            Record certified weight and tare measurements for audit tracking.
          </Text>
        </View>

        {/* Stream Selector */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <Text className="text-sm font-bold text-[#0d1e25]">1. Material Classification</Text>
          
          <View className="space-y-2.5">
            {categories.map((cat) => {
              const isSelected = category === cat.name;
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setCategory(cat.name)}
                  className={`p-4 rounded-2xl border flex-row items-center justify-between ${
                    isSelected ? 'bg-[#dff1fb] border-2 border-[#00522d]' : 'bg-[#f4faff] border-[#bec9be]/30'
                  }`}
                >
                  <View className="flex-row items-center gap-3">
                    <View className={`w-9 h-9 rounded-xl items-center justify-center ${
                      isSelected ? 'bg-[#00522d]' : 'bg-white'
                    }`}>
                      <MaterialIcons 
                        name={cat.icon as any} 
                        size={20} 
                        color={isSelected ? '#ffffff' : '#00522d'} 
                      />
                    </View>
                    <Text className="text-xs font-bold text-[#0d1e25]">{cat.name}</Text>
                  </View>
                  <View className={`w-5 h-5 rounded-full border items-center justify-center ${
                    isSelected ? 'bg-[#00522d] border-[#00522d]' : 'border-[#bec9be]'
                  }`}>
                    {isSelected && <Ionicons name="checkmark" size={12} color="#ffffff" />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Quantity Card */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <Text className="text-sm font-bold text-[#0d1e25]">2. Measured Weight</Text>
          
          <View className="flex-row items-center gap-3">
            <TextInput
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="decimal-pad"
              placeholder="0.0"
              className="flex-1 h-14 bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl px-4 text-xl font-bold text-[#00522d]"
            />
            <View className="px-5 h-14 bg-[#dff1fb] rounded-2xl items-center justify-center">
              <Text className="text-sm font-bold text-[#00522d]">kg</Text>
            </View>
          </View>

          <View className="space-y-1.5">
            <Text className="text-xs font-bold text-[#556158] uppercase">Field Notes (Optional)</Text>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Contamination notes, dock access issues..."
              placeholderTextColor="#556158"
              className="p-3.5 bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl text-xs text-[#0d1e25]"
            />
          </View>

          {submitted ? (
            <View className="p-3.5 bg-[#00522d] rounded-2xl items-center">
              <Text className="text-white font-bold text-xs">✓ Manifest Dispatched & Logged!</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleLogWaste}
              className="py-4 bg-[#00522d] rounded-full items-center shadow-md mt-2"
            >
              <Text className="text-white font-bold text-sm">Confirm Manifest Entry</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
