import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

export default function PickupProof() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [weight, setWeight] = useState(45);
  const [successModal, setSuccessModal] = useState(false);

  const handleComplete = () => {
    setSuccessModal(true);
  };

  const closeSuccess = () => {
    setSuccessModal(false);
    router.back();
  };

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white border-b border-gray-200 px-4 h-24 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <Ionicons name="arrow-back" size={24} color="#0d1e25" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#00522d]">EcoCampus Waste</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          <View className="w-10 h-10 rounded-full bg-[#006d3e] items-center justify-center overflow-hidden">
            <Ionicons name="person" size={20} color="white" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#00522d] mb-2">Verify Collection</Text>
          <Text className="text-[#3f4941]">Bin #EC-209 • Engineering Block B • Organic Waste</Text>
        </View>

        {/* Camera Section */}
        <TouchableOpacity 
          className="bg-white rounded-3xl p-6 border border-gray-200 items-center justify-center h-64 mb-4 shadow-sm"
          onPress={() => Alert.alert('Camera', 'Opening camera to capture proof...')}
        >
          <View className="w-16 h-16 rounded-full bg-[#d9e6da] items-center justify-center mb-4">
            <Ionicons name="camera" size={32} color="#00522d" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">Photo Proof</Text>
          <Text className="text-gray-500 mt-1">Capture bin status after empty</Text>
        </TouchableOpacity>

        {/* Geo-tag Indicator */}
        <View className="bg-white/70 rounded-3xl p-6 mb-4 border border-white shadow-sm overflow-hidden h-48 justify-between">
          <View className="flex-row justify-between items-start">
            <View className="bg-[#2eb872] px-3 py-1 rounded-full">
              <Text className="text-white text-[10px] font-bold uppercase tracking-wider">Verified Location</Text>
            </View>
            <Ionicons name="location" size={24} color="#2eb872" />
          </View>
          
          <View>
            <Text className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Geo-Coordinates</Text>
            <Text className="text-xl font-bold text-[#00522d] tracking-widest font-mono">40.7128° N, 74.0060° W</Text>
            <Text className="text-gray-500">Engineering Block B Courtyard</Text>
          </View>
        </View>

        {/* Weight Scale Input */}
        <View className="bg-white rounded-3xl p-6 border border-gray-200 mb-8 shadow-sm">
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center gap-3">
              <Ionicons name="barbell-outline" size={24} color="#00522d" />
              <Text className="text-xl font-bold text-[#00522d]">Measurement</Text>
            </View>
            <View className="bg-[#dff1fb] px-3 py-1 rounded-full">
              <Text className="text-[#3f4941] text-xs font-bold">ESTIMATED: 45KG</Text>
            </View>
          </View>

          <Text className="text-sm font-bold text-[#3f4941] mb-4">Weight (Kilograms)</Text>
          
          <View className="flex-row items-center gap-4 mb-4">
            <Slider
              style={{ flex: 1, height: 40 }}
              minimumValue={0}
              maximumValue={100}
              step={0.5}
              value={weight}
              onValueChange={setWeight}
              minimumTrackTintColor="#00522d"
              maximumTrackTintColor="#d9e6da"
              thumbTintColor="#00522d"
            />
            <View className="bg-[#006d3e] px-4 py-2 rounded-xl min-w-[80px] items-center">
              <Text className="text-white font-bold text-xl">{weight.toFixed(1)}kg</Text>
            </View>
          </View>
          
          <View className="flex-row justify-between">
            <Text className="text-[10px] text-gray-400 font-bold">0 KG (EMPTY)</Text>
            <Text className="text-[10px] text-gray-400 font-bold">50 KG (HALF)</Text>
            <Text className="text-[10px] text-gray-400 font-bold">100 KG (MAX)</Text>
          </View>
        </View>

        {/* Primary Action */}
        <TouchableOpacity 
          className="w-full py-4 bg-[#00522d] rounded-full flex-row items-center justify-center gap-2 mb-12 shadow-lg"
          onPress={handleComplete}
        >
          <Text className="text-white font-bold text-lg">Complete Collection</Text>
          <Ionicons name="checkmark-circle" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>

      {/* Success Modal */}
      <Modal visible={successModal} transparent animationType="fade">
        <View className="flex-1 bg-black/40 justify-center items-center px-6">
          <View className="bg-white/90 p-8 rounded-3xl w-full max-w-sm items-center shadow-2xl">
            <View className="w-20 h-20 bg-[#2eb872] rounded-full items-center justify-center mb-6 shadow-lg">
              <Ionicons name="checkmark" size={40} color="white" />
            </View>
            <Text className="text-2xl font-bold text-[#00522d] mb-2 text-center">Collection Verified</Text>
            <Text className="text-gray-500 text-center mb-8 leading-5">Proof of pickup for Bin #EC-209 has been securely logged and uploaded.</Text>
            
            <TouchableOpacity 
              className="w-full py-4 bg-[#00522d] rounded-full items-center shadow-lg"
              onPress={closeSuccess}
            >
              <Text className="text-white font-bold text-lg">Return to Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
