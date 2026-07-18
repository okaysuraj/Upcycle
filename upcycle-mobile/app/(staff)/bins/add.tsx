import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddSmartBinMobile() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [wasteType, setWasteType] = useState('compost');
  const [isTesting, setIsTesting] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);

  const handleTestConnection = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setTestSuccess(true);
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-[#f4faff] shadow-sm z-50">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 active:scale-95">
            <MaterialIcons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#00522d]">Add Smart Bin</Text>
        </View>
        <View className="w-10 h-10 rounded-full bg-[#d9e6da] overflow-hidden border border-[#bec9be]/30">
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArTOcNdl69x2UiTRZBijwE8HNEQ6AWBJ4EGT309B_tc22Xgc4SgZAeHmJuNLzVOWCamC43B2Ogg2iyS-s0eMW1RhHIPp1rAj992kGBvH0sfFAm4xCbVyt7TStIGG3emcC2vxlOQehjbqYawl56l6PsO3kCbxj8cZ2GP527wbb5x1-n3tmxicIqiGxLgLggwI6loyEQZfDGqmfn7NW-cMmWJeEAnSSda9ADsjg0GUVClgELSFTjEEroj0w6dLIBtsQrjMkEADiamOI' }}
            className="w-full h-full"
          />
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Stepper */}
        <View className="flex-row items-center justify-between mb-8 px-2">
          <View className="items-center gap-2">
            <View className={`w-8 h-8 rounded-full items-center justify-center ${step >= 1 ? 'bg-[#006d3e]' : 'bg-[#d4e5ef]'}`}>
              {step > 1 ? (
                <MaterialIcons name="check" size={16} color="white" />
              ) : (
                <Text className={`text-xs font-bold ${step >= 1 ? 'text-[#92ecb1]' : 'text-[#3f4941]'}`}>1</Text>
              )}
            </View>
            <Text className={`text-[12px] font-bold ${step >= 1 ? 'text-[#00522d]' : 'text-[#3f4941] opacity-50'}`}>Identity</Text>
          </View>
          <View className="flex-1 h-[2px] bg-[#bec9be]/30 mx-2 -mt-6" />
          <View className="items-center gap-2">
            <View className={`w-8 h-8 rounded-full items-center justify-center ${step >= 2 ? 'bg-[#006d3e]' : 'bg-[#d4e5ef]'}`}>
              {step > 2 ? (
                <MaterialIcons name="check" size={16} color="white" />
              ) : (
                <Text className={`text-xs font-bold ${step >= 2 ? 'text-[#92ecb1]' : 'text-[#3f4941]'}`}>2</Text>
              )}
            </View>
            <Text className={`text-[12px] font-bold ${step >= 2 ? 'text-[#00522d]' : 'text-[#3f4941] opacity-50'}`}>Tech Sync</Text>
          </View>
          <View className="flex-1 h-[2px] bg-[#bec9be]/30 mx-2 -mt-6" />
          <View className="items-center gap-2">
            <View className={`w-8 h-8 rounded-full items-center justify-center ${step >= 3 ? 'bg-[#006d3e]' : 'bg-[#d4e5ef]'}`}>
              <Text className={`text-xs font-bold ${step >= 3 ? 'text-[#92ecb1]' : 'text-[#3f4941]'}`}>3</Text>
            </View>
            <Text className={`text-[12px] font-bold ${step >= 3 ? 'text-[#00522d]' : 'text-[#3f4941] opacity-50'}`}>Complete</Text>
          </View>
        </View>

        {/* Step 1: Identity & Parameters */}
        {step === 1 && (
          <View className="space-y-6">
            <View className="bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm mb-6">
              <Text className="text-sm font-bold text-[#3f4941] mb-2">Bin ID / Serial Number</Text>
              <View className="relative">
                <TextInput 
                  className="w-full bg-[#f4faff] border border-[#bec9be]/50 rounded-xl px-4 py-4 text-base text-[#0d1e25]"
                  placeholder="e.g. EC-SB-2024-001"
                  placeholderTextColor="#6f7a70"
                />
                <MaterialIcons name="qr-code-scanner" size={24} color="#6f7a70" className="absolute right-4 top-4" />
              </View>
            </View>

            <View className="bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm mb-6">
              <Text className="text-sm font-bold text-[#3f4941] mb-4">Waste Type</Text>
              <View className="flex-row gap-3">
                <TouchableOpacity onPress={() => setWasteType('compost')} className={`flex-1 items-center justify-center p-3 rounded-2xl border-2 ${wasteType === 'compost' ? 'border-[#00522d] bg-[#00522d]/5' : 'border-[#bec9be]/20'}`}>
                  <MaterialIcons name="eco" size={24} color={wasteType === 'compost' ? '#00522d' : '#3f4941'} className="mb-1" />
                  <Text className={`text-[12px] font-bold ${wasteType === 'compost' ? 'text-[#00522d]' : 'text-[#3f4941]'}`}>Compost</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setWasteType('recycle')} className={`flex-1 items-center justify-center p-3 rounded-2xl border-2 ${wasteType === 'recycle' ? 'border-[#00522d] bg-[#00522d]/5' : 'border-[#bec9be]/20'}`}>
                  <MaterialIcons name="recycling" size={24} color={wasteType === 'recycle' ? '#00522d' : '#3f4941'} className="mb-1" />
                  <Text className={`text-[12px] font-bold ${wasteType === 'recycle' ? 'text-[#00522d]' : 'text-[#3f4941]'}`}>Recycle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setWasteType('landfill')} className={`flex-1 items-center justify-center p-3 rounded-2xl border-2 ${wasteType === 'landfill' ? 'border-[#00522d] bg-[#00522d]/5' : 'border-[#bec9be]/20'}`}>
                  <MaterialIcons name="delete" size={24} color={wasteType === 'landfill' ? '#00522d' : '#3f4941'} className="mb-1" />
                  <Text className={`text-[12px] font-bold ${wasteType === 'landfill' ? 'text-[#00522d]' : 'text-[#3f4941]'}`}>Landfill</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm mb-6">
              <View className="mb-4">
                <Text className="text-sm font-bold text-[#3f4941] mb-2">Building / Zone</Text>
                {/* Simplified dropdown visually */}
                <View className="w-full bg-[#f4faff] border border-[#bec9be]/50 rounded-xl px-4 py-4 flex-row justify-between items-center">
                  <Text className="text-base text-[#0d1e25]">Science Wing A</Text>
                  <MaterialIcons name="arrow-drop-down" size={24} color="#6f7a70" />
                </View>
              </View>
              <View>
                <Text className="text-sm font-bold text-[#3f4941] mb-2">Collection Frequency</Text>
                <View className="flex-row flex-wrap gap-2">
                  <TouchableOpacity className="px-4 py-2 rounded-full border border-[#00522d] bg-[#00522d]">
                    <Text className="text-xs font-bold text-white">Dynamic (AI)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="px-4 py-2 rounded-full border border-[#bec9be]">
                    <Text className="text-xs font-bold text-[#3f4941]">Daily</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="px-4 py-2 rounded-full border border-[#bec9be]">
                    <Text className="text-xs font-bold text-[#3f4941]">Bi-Weekly</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => setStep(2)}
              className="w-full bg-[#006d3e] py-4 rounded-full shadow-lg active:scale-[0.98] flex-row items-center justify-center gap-2 mb-8"
            >
              <Text className="text-base font-bold text-[#92ecb1]">Continue to Tech Sync</Text>
              <MaterialIcons name="arrow-forward" size={24} color="#92ecb1" />
            </TouchableOpacity>
          </View>
        )}

        {/* Step 2: Technical Sync */}
        {step === 2 && (
          <View className="space-y-6">
            <View className="bg-white/70 p-8 rounded-[24px] border border-[#a5d6a7]/30 items-center space-y-4 mb-6">
              <View className="relative w-24 h-24 items-center justify-center mb-4">
                <View className="absolute inset-0 border-4 border-[#00522d]/20 rounded-full" />
                {/* Simulated spinner */}
                <View className="absolute inset-0 border-4 border-[#00522d] rounded-full border-t-transparent border-l-transparent" style={{ transform: [{ rotate: '45deg' }] }} />
                <MaterialIcons name="sensors" size={40} color="#00522d" />
              </View>
              <Text className="text-2xl font-bold text-[#00522d] mb-2">Pairing Sensor</Text>
              <Text className="text-base text-[#3f4941] text-center">Checking signal strength and hardware encryption...</Text>
            </View>

            <View className="bg-white p-6 rounded-[24px] border border-[#bec9be]/30 shadow-sm space-y-6 mb-6">
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-sm font-bold text-[#3f4941]">Signal Strength</Text>
                <View className="flex-row items-end gap-1">
                  <View className="w-2 h-4 bg-[#00522d] rounded-sm" />
                  <View className="w-2 h-6 bg-[#00522d] rounded-sm" />
                  <View className="w-2 h-8 bg-[#00522d] rounded-sm" />
                  <View className="w-2 h-10 bg-[#bec9be]/30 rounded-sm" />
                  <Text className="text-xs font-bold text-[#00522d] ml-2">Good (-68 dBm)</Text>
                </View>
              </View>
              <View className="h-[2px] bg-[#bec9be]/10 mb-4" />
              <View className="flex-row items-center justify-between mb-6">
                <View className="flex-row items-center gap-3">
                  <MaterialIcons name="verified" size={24} color="#2eb872" />
                  <Text className="text-sm font-bold text-[#0d1e25]">Data Protocol Sync</Text>
                </View>
                <Text className="text-xs font-bold text-[#2eb872]">OK</Text>
              </View>
              <TouchableOpacity 
                onPress={handleTestConnection}
                disabled={isTesting || testSuccess}
                className={`w-full py-3 rounded-xl flex-row items-center justify-center gap-2 ${testSuccess ? 'bg-[#2eb872]/10 border border-[#2eb872]/30' : 'bg-[#d4e5ef]/50 border border-[#bec9be]'}`}
              >
                <MaterialIcons name={testSuccess ? 'check' : isTesting ? 'sync' : 'router'} size={20} color={testSuccess ? '#2eb872' : '#3f4941'} />
                <Text className={`text-base font-bold ${testSuccess ? 'text-[#2eb872]' : 'text-[#3f4941]'}`}>
                  {testSuccess ? 'Test Successful' : isTesting ? 'Testing...' : 'Test Connection'}
                </Text>
              </TouchableOpacity>
            </View>

            {testSuccess && (
              <View className="bg-[#bdefbf] p-4 rounded-xl flex-row items-center gap-3 mb-6">
                <MaterialIcons name="check-circle" size={24} color="#002109" />
                <Text className="text-sm font-bold text-[#002109]">Hardware response confirmed. Ready to deploy.</Text>
              </View>
            )}

            <View className="flex-row gap-3 mb-8">
              <TouchableOpacity onPress={() => setStep(1)} className="flex-1 bg-[#d4e5ef]/30 py-4 rounded-full items-center justify-center">
                <Text className="text-base font-bold text-[#3f4941]">Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setStep(3)} className="flex-[2] bg-[#006d3e] py-4 rounded-full shadow-lg flex-row items-center justify-center gap-2">
                <Text className="text-base font-bold text-[#92ecb1]">Register Bin</Text>
                <MaterialIcons name="check" size={24} color="#92ecb1" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Step 3: Success State */}
        {step === 3 && (
          <View className="items-center justify-center py-12 mb-8">
            <View className="w-24 h-24 rounded-full bg-[#2eb872]/10 items-center justify-center mb-6">
              <MaterialIcons name="verified" size={60} color="#2eb872" />
            </View>
            <Text className="text-[24px] font-bold text-[#00522d] mb-2">Success!</Text>
            <Text className="text-base text-[#3f4941] text-center max-w-[280px] mb-8">
              Smart Bin <Text className="font-bold text-[#0d1e25]">EC-SB-2024-001</Text> is now active in <Text className="font-bold text-[#0d1e25]">Science Wing A</Text>.
            </Text>
            
            <View className="w-full h-48 rounded-[32px] overflow-hidden mb-8">
               <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnx7hrrlIkdwuJBUVdPXMyqaf2mvjpGhsL64PJ0kSsy1xjbUccYwf6b2WJQbuZXZ7j57-cgxg7xD50kM4mFu19f8evn0qgdbFB2V0K7qI_LyYtRt-_yZnXikTXhT8DWyTcaujlI7rM5UQP-2BhI86ogdp9K-EpiXnVyM8b5xqngXVYvlmkkU64Q0_khIwtQkhr0uiLfN1BLjHQFgK_iZpwDJJq_Y6LcfGPJ0FLfnJaQAvLfSnqs1PDxdna9Ci8xo5khv8FroDIzFY' }}
                className="w-full h-full"
              />
            </View>

            <View className="w-full space-y-3">
              <TouchableOpacity onPress={() => setStep(1)} className="w-full bg-[#00522d] py-4 rounded-full items-center mb-3">
                <Text className="text-base font-bold text-white">Add Another Bin</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/(staff)/bins')} className="w-full bg-[#dff1fb] py-4 rounded-full items-center">
                <Text className="text-base font-bold text-[#00522d]">View Logistics Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      </ScrollView>

      {/* Bottom Nav (If not Step 3, maybe we want it visible or hidden, let's keep it based on the design) */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-[#f4faff] border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:bg-[#d4e5ef]/50 px-4 py-1 rounded-full">
          <MaterialIcons name="dashboard" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-5 py-1">
          <MaterialIcons name="local-shipping" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1] mt-1">Logistics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-4 py-1 rounded-full">
          <MaterialIcons name="map" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Map</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:bg-[#d4e5ef]/50 px-4 py-1 rounded-full">
          <MaterialIcons name="settings" size={24} color="#3f4941" />
          <Text className="text-[10px] font-bold text-[#3f4941] mt-1">Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
