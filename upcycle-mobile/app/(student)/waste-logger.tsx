import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WasteLoggerScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('Recyclables & Plastics');
  const [weight, setWeight] = useState('1.5');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'plastic', name: 'Recyclables & Plastics', icon: 'recycling', pts: 10 },
    { id: 'organics', name: 'Compost & Organics', icon: 'eco', pts: 12 },
    { id: 'paper', name: 'Paper & Cardboard', icon: 'description', pts: 8 },
    { id: 'ewaste', name: 'Electronic Waste', icon: 'devices', pts: 25 },
  ];

  const handleLog = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setWeight('');
    }, 2000);
  };

  const calculatedPoints = Math.round((parseFloat(weight) || 0) * (categories.find(c => c.name === selectedCategory)?.pts || 10));

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#00522d]">Log Campus Waste</Text>
        </View>
        <TouchableOpacity 
          onPress={() => router.push('/(student)/waste-logger')}
          className="p-2 bg-[#dff1fb] rounded-full"
        >
          <Ionicons name="scan" size={20} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Category Picker Card */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <Text className="text-sm font-bold text-[#0d1e25]">1. Select Waste Stream</Text>
          
          <View className="space-y-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setSelectedCategory(cat.name)}
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
                  <Text className="text-xs font-bold text-[#00522d]">+{cat.pts} pts/kg</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Quantity & Points Preview Card */}
        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          <Text className="text-sm font-bold text-[#0d1e25]">2. Measured Weight (Kilograms)</Text>
          
          <View className="flex-row items-center gap-3">
            <TextInput 
              value={weight}
              onChangeText={setWeight}
              keyboardType="decimal-pad"
              placeholder="0.0"
              className="flex-1 h-14 bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl px-4 text-xl font-bold text-[#00522d]"
            />
            <View className="px-4 h-14 bg-[#dff1fb] rounded-2xl items-center justify-center">
              <Text className="text-sm font-bold text-[#00522d]">kg</Text>
            </View>
          </View>

          {/* Points Earned Preview */}
          <View className="p-4 bg-[#9cf6ba]/20 rounded-2xl border border-[#2eb872]/30 flex-row justify-between items-center">
            <View>
              <Text className="text-[10px] font-bold text-[#00522d] uppercase">Eco-Points Earned</Text>
              <Text className="text-xl font-bold text-[#00210f] mt-0.5">+{calculatedPoints} Points</Text>
            </View>
            <MaterialIcons name="stars" size={28} color="#00522d" />
          </View>

          {submitted ? (
            <View className="p-3 bg-[#00522d] rounded-2xl items-center">
              <Text className="text-white font-bold text-xs">✓ Waste Entry Verified & Logged!</Text>
            </View>
          ) : (
            <TouchableOpacity 
              onPress={handleLog}
              className="py-4 bg-[#00522d] rounded-full items-center shadow-md"
            >
              <Text className="text-white font-bold text-sm">Submit Waste Entry</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* History Log */}
        <View className="space-y-3">
          <Text className="text-sm font-bold text-[#0d1e25]">Recent Verified Logs</Text>
          
          <View className="p-4 bg-white rounded-2xl border border-[#bec9be]/30 flex-row justify-between items-center shadow-sm">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center">
                <MaterialIcons name="recycling" size={20} color="#00522d" />
              </View>
              <View>
                <Text className="text-xs font-bold text-[#0d1e25]">PET Plastics & Bottles</Text>
                <Text className="text-[10px] text-[#556158]">Central Quad Smart Bin #12 • Today</Text>
              </View>
            </View>
            <Text className="text-sm font-bold text-[#00522d]">2.4 kg</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
