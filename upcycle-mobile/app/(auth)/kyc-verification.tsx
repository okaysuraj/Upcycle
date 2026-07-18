import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function KycVerification() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    // After KYC, could go to dashboard or OTP
    router.replace('/(auth)/otp-verification');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 border-b border-[#bccabd]/30 bg-[#f4faff] z-50">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
            <MaterialIcons name="arrow-back" size={24} color="#006d3e" />
          </TouchableOpacity>
          <View className="flex-row items-center gap-2">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLuaeWGEBHEzwqBPQAk8QsJgcjKH1dH53_ec81VNIPmrmp8NEDSB5RWseIPhSajfG2n3WOy64AWqjK6D7sWGEN6SewlhMQg_zIDtiR7YpHOMy_VQvNNFFD_rTqXRNqLRoFIFQtTWr7xG1rfQ-Rpkp8VzWiE9lZc7HJhdjkvcCFG2J6_tnSRu8Bue54Ws1t8FqvYXHfw2j7qjNUrGElb2ZNqWynH73bZCfB8Oblg_GX_GbE-QkeIgbSzy3HE' }}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
          </View>
        </View>
        <MaterialIcons name="verified-user" size={24} color="#3d4a40" />
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Header & Progress Section */}
        <View className="mb-10">
          <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Vendor Verification</Text>
          <Text className="text-lg text-[#3d4a40] max-w-[300px]">
            Complete your KYC to unlock full access to the Upcycle marketplace and municipal bidding system. Your data is encrypted and secure.
          </Text>
          
          <View className="flex-row items-center mt-8">
            <View className="w-10 h-10 rounded-full bg-[#006d3e] items-center justify-center">
              <MaterialIcons name="person" size={20} color="white" />
            </View>
            <View className="flex-1 h-[2px] bg-[#006d3e]" />
            <View className="w-10 h-10 rounded-full bg-[#006d3e] items-center justify-center border-4 border-[#2eb872]">
              <MaterialIcons name="fact-check" size={20} color="white" />
            </View>
            <View className="flex-1 h-[2px] bg-[#dff1fb]" />
            <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
              <MaterialIcons name="visibility" size={20} color="#3d4a40" />
            </View>
          </View>
        </View>

        <View className="space-y-6">
          {/* Information Panel */}
          <View className="bg-[#e7f6ff] rounded-3xl p-6 border border-[#bccabd] mb-6">
            <Text className="text-2xl font-bold text-[#0d1e25] mb-4">Why verify?</Text>
            <View className="space-y-4">
              <View className="flex-row items-start gap-3">
                <MaterialIcons name="shield" size={20} color="#006d3e" className="mt-1" />
                <Text className="flex-1 text-base text-[#3d4a40]">Access high-value municipal recycling contracts.</Text>
              </View>
              <View className="flex-row items-start gap-3">
                <MaterialIcons name="payments" size={20} color="#006d3e" className="mt-1" />
                <Text className="flex-1 text-base text-[#3d4a40]">Instant payouts for eco-incentive programs.</Text>
              </View>
              <View className="flex-row items-start gap-3">
                <MaterialIcons name="workspace-premium" size={20} color="#006d3e" className="mt-1" />
                <Text className="flex-1 text-base text-[#3d4a40]">Get the "Verified Vendor" badge on your profile.</Text>
              </View>
            </View>
          </View>

          {/* Secure Image */}
          <View className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#cbdde7] relative mb-6">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPDjJQl8xotGMGDxzG5Z2ejsf2DMGN7Q9Mj7XpMmvmigoVNMAzuGzPyJnBhjAgKfT8puSg7h0zjwEPCDdVyG6GxqX3fw_JHjTw_PsSWXiixImZXL6ZPP5gOQccpZ9swgE0pkX6lmU9kHZDSdvRxAJm7eVgFyaGS5ZPLKFasG5JaSJ2r0QsVe8qqBRmKuW61TKTZRO8w-NPpUiMwscoVi_OObkrUosAzzktOwGp_yMI15_xAVLmRtZVrEfmE2jGQMWIz50ZiACU5zA' }}
              className="w-full h-full"
            />
            <View className="absolute inset-0 bg-black/40 justify-end p-6">
              <Text className="text-white text-sm opacity-80 font-bold mb-1">Secure Encryption</Text>
              <Text className="text-white text-2xl font-bold">Enterprise-grade security for your business data.</Text>
            </View>
          </View>

          {/* Upload Forms */}
          {/* ID Proof Section */}
          <View className="bg-white rounded-3xl p-6 border border-[#bccabd] mb-6">
            <View className="flex-row items-center gap-3 mb-6">
              <View className="bg-[#2eb872]/20 p-2 rounded-lg">
                <MaterialIcons name="badge" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-xl font-bold text-[#0d1e25]">Identity Proof</Text>
                <Text className="text-xs font-bold text-[#3d4a40]">Government-issued ID, Passport, or Driver's License</Text>
              </View>
            </View>
            <TouchableOpacity className="border-2 border-dashed border-[#bccabd] rounded-3xl p-8 items-center active:bg-[#2eb872]/10 active:border-[#006d3e]">
              <MaterialIcons name="cloud-upload" size={40} color="#006d3e" className="mb-4" />
              <Text className="text-lg text-[#0d1e25] mb-1">Tap to browse</Text>
              <Text className="text-xs font-bold text-[#3d4a40]">Supports PDF, JPG, PNG (Max 10MB)</Text>
            </TouchableOpacity>
          </View>

          {/* Business Certificate */}
          <View className="bg-white rounded-3xl p-6 border border-[#bccabd] mb-6">
            <View className="flex-row items-center gap-3 mb-6">
              <View className="bg-[#2eb872]/20 p-2 rounded-lg">
                <MaterialIcons name="corporate-fare" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-xl font-bold text-[#0d1e25]">Business Certificate</Text>
                <Text className="text-xs font-bold text-[#3d4a40]">Company registration or municipal business permit</Text>
              </View>
            </View>
            <TouchableOpacity className="border-2 border-dashed border-[#bccabd] rounded-3xl p-8 items-center active:bg-[#2eb872]/10 active:border-[#006d3e]">
              <MaterialIcons name="description" size={40} color="#006d3e" className="mb-4" />
              <Text className="text-lg text-[#0d1e25] mb-1">Tap to browse</Text>
              <Text className="text-xs font-bold text-[#3d4a40]">Certification of Incorporation or Trade License</Text>
            </TouchableOpacity>
          </View>

          {/* Portfolio/Certifications */}
          <View className="bg-white rounded-3xl p-6 border border-[#bccabd] mb-6">
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center gap-3 flex-1 pr-2">
                <View className="bg-[#2eb872]/20 p-2 rounded-lg">
                  <MaterialIcons name="approval" size={24} color="#006d3e" />
                </View>
                <View className="flex-1">
                  <Text className="text-xl font-bold text-[#0d1e25]">Sustainability Portfolio</Text>
                  <Text className="text-xs font-bold text-[#3d4a40]">ISO certifications, ESG reports</Text>
                </View>
              </View>
              <View className="px-3 py-1 bg-[#dff1fb] rounded-full">
                <Text className="text-xs font-bold text-[#3d4a40]">Optional</Text>
              </View>
            </View>
            <View className="space-y-4">
              <TouchableOpacity className="border-2 border-dashed border-[#bccabd] rounded-3xl p-6 flex-row justify-center items-center gap-4 active:bg-[#2eb872]/10">
                <MaterialIcons name="add-circle" size={24} color="#006d3e" />
                <Text className="text-base text-[#0d1e25]">Add files or documents</Text>
              </TouchableOpacity>
              
              <View className="flex-row items-center justify-between p-4 bg-[#e7f6ff] rounded-xl border border-[#bccabd]/30 mt-4">
                <View className="flex-row items-center gap-3 flex-1">
                  <MaterialIcons name="picture-as-pdf" size={24} color="#556158" />
                  <View className="flex-1">
                    <Text className="text-sm font-bold text-[#0d1e25]">ISO_14001_Environmental.pdf</Text>
                    <Text className="text-[10px] uppercase font-bold text-[#3d4a40]">2.4 MB • Uploaded</Text>
                  </View>
                </View>
                <TouchableOpacity className="p-2">
                  <MaterialIcons name="close" size={20} color="#ba1a1a" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Terms & Consent */}
          <View className="flex-row items-start gap-3 px-2 mb-6">
            <TouchableOpacity 
              onPress={() => setAgreed(!agreed)}
              className={`w-6 h-6 rounded border items-center justify-center ${
                agreed ? 'bg-[#006d3e] border-[#006d3e]' : 'border-[#6d7a6f]'
              }`}
            >
              {agreed && <MaterialIcons name="check" size={16} color="white" />}
            </TouchableOpacity>
            <Text className="flex-1 text-base text-[#3d4a40]">
              I hereby certify that the information provided is true and accurate. I agree to Upcycle's <Text className="text-[#006d3e] font-bold underline">Verification Terms of Service</Text> and Privacy Policy.
            </Text>
          </View>

          {/* Action Bar */}
          <View className="flex-col gap-4">
            <TouchableOpacity className="h-12 rounded-full border border-[#6d7a6f] items-center justify-center active:bg-[#d4e5ef]">
              <Text className="text-[#006d3e] font-bold">Save Draft</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              disabled={!agreed}
              onPress={handleSubmit}
              className={`h-14 rounded-full flex-row items-center justify-center gap-2 shadow-sm active:scale-95 ${
                agreed ? 'bg-[#006d3e]' : 'bg-[#006d3e] opacity-50'
              }`}
            >
              <Text className="text-white font-bold text-lg">Submit for Review</Text>
              <MaterialIcons name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      {/* Success Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 bg-black/40 justify-center items-center p-5">
          <View className="bg-white rounded-3xl p-8 w-full max-w-md items-center shadow-xl">
            <View className="w-20 h-20 bg-[#2eb872]/20 rounded-full items-center justify-center mb-6">
              <MaterialIcons name="check-circle" size={48} color="#006d3e" />
            </View>
            <Text className="text-3xl font-bold text-[#0d1e25] mb-2 text-center">Application Sent</Text>
            <Text className="text-base text-[#3d4a40] text-center mb-8">
              Your KYC documents are now under review. We typically process applications within 24-48 business hours. You'll receive an email notification once verified.
            </Text>
            <TouchableOpacity 
              onPress={handleCloseModal}
              className="w-full h-14 bg-[#006d3e] rounded-full items-center justify-center active:scale-95"
            >
              <Text className="text-white font-bold text-lg">Back to Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
