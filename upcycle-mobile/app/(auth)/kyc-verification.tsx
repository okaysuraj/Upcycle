import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function KycVerification() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);
  const [certUploaded, setCertUploaded] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.replace('/(auth)/otp-verification');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-xs font-bold uppercase tracking-wider text-[#00522d] bg-[#dff1fb] px-3 py-1 rounded-full">
          Step 2 of 3
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Header & Stepper */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-[#0d1e25] tracking-tight">Institutional KYC</Text>
          <Text className="text-xs text-[#556158] mt-1 leading-relaxed">
            Verify your campus status to unlock high-volume waste logs and marketplace bidding.
          </Text>

          {/* Stepper */}
          <View className="flex-row items-center mt-6 px-2">
            <View className="w-8 h-8 rounded-full bg-[#00522d] items-center justify-center">
              <Ionicons name="checkmark" size={16} color="white" />
            </View>
            <View className="flex-1 h-[2px] bg-[#00522d]" />
            <View className="w-8 h-8 rounded-full bg-[#00522d] items-center justify-center border-2 border-[#9cf6ba]">
              <Text className="text-white font-bold text-xs">2</Text>
            </View>
            <View className="flex-1 h-[2px] bg-[#bec9be]/40" />
            <View className="w-8 h-8 rounded-full bg-[#f4faff] border border-[#bec9be]/60 items-center justify-center">
              <Text className="text-[#556158] font-bold text-xs">3</Text>
            </View>
          </View>
        </View>

        {/* Upload Cards */}
        <View className="space-y-4">
          {/* ID Document Card */}
          <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-3">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center text-[#00522d]">
                <MaterialIcons name="badge" size={22} color="#00522d" />
              </View>
              <View>
                <Text className="font-bold text-sm text-[#0d1e25]">Campus / Government ID</Text>
                <Text className="text-[11px] text-[#556158]">Student Card, Faculty Badge, or Driver's License</Text>
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => setIdUploaded(!idUploaded)}
              className={`p-6 rounded-2xl border-2 border-dashed items-center justify-center ${
                idUploaded ? 'bg-[#9cf6ba]/20 border-[#2eb872]' : 'bg-[#f4faff] border-[#bec9be]/60'
              }`}
            >
              <MaterialIcons 
                name={idUploaded ? "check-circle" : "cloud-upload"} 
                size={36} 
                color={idUploaded ? "#00522d" : "#556158"} 
              />
              <Text className="font-bold text-xs text-[#0d1e25] mt-2">
                {idUploaded ? "ID Document Attached" : "Tap to browse or take photo"}
              </Text>
              <Text className="text-[10px] text-[#556158] mt-0.5">JPG, PNG, PDF up to 10MB</Text>
            </TouchableOpacity>
          </View>

          {/* Department / Org Proof */}
          <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-3">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-xl bg-[#dff1fb] items-center justify-center text-[#00522d]">
                <MaterialIcons name="corporate-fare" size={22} color="#00522d" />
              </View>
              <View>
                <Text className="font-bold text-sm text-[#0d1e25]">Department / Organization Affiliation</Text>
                <Text className="text-[11px] text-[#556158]">Enrollment proof, lab permit, or municipal contract</Text>
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => setCertUploaded(!certUploaded)}
              className={`p-6 rounded-2xl border-2 border-dashed items-center justify-center ${
                certUploaded ? 'bg-[#9cf6ba]/20 border-[#2eb872]' : 'bg-[#f4faff] border-[#bec9be]/60'
              }`}
            >
              <MaterialIcons 
                name={certUploaded ? "check-circle" : "description"} 
                size={36} 
                color={certUploaded ? "#00522d" : "#556158"} 
              />
              <Text className="font-bold text-xs text-[#0d1e25] mt-2">
                {certUploaded ? "Certificate Attached" : "Tap to upload authorization document"}
              </Text>
              <Text className="text-[10px] text-[#556158] mt-0.5">JPG, PNG, PDF up to 10MB</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit */}
        <TouchableOpacity 
          onPress={handleSubmit}
          className="mt-8 py-4 bg-[#00522d] rounded-full items-center shadow-md flex-row justify-center gap-2"
        >
          <Text className="text-white font-bold text-sm">Submit Documents</Text>
          <MaterialIcons name="arrow-forward" size={18} color="white" />
        </TouchableOpacity>
      </ScrollView>

      {/* Success Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 bg-black/60 items-center justify-center p-5">
          <View className="bg-white rounded-[32px] p-6 w-full max-w-sm items-center space-y-4 shadow-xl">
            <View className="w-16 h-16 rounded-full bg-[#9cf6ba]/40 items-center justify-center">
              <MaterialIcons name="verified" size={36} color="#00522d" />
            </View>
            <Text className="text-xl font-bold text-[#0d1e25] text-center">Verification Submitted</Text>
            <Text className="text-xs text-[#556158] text-center leading-relaxed">
              Your documents have been received. We will verify your credentials within 24 hours.
            </Text>
            <TouchableOpacity 
              onPress={handleCloseModal}
              className="w-full py-3.5 bg-[#00522d] rounded-full items-center mt-2 shadow-sm"
            >
              <Text className="text-white font-bold text-xs">Proceed to Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
