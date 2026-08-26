import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Support() {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSend = () => {
    if (!subject || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubject('');
      setMessage('');
    }, 2500);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row items-center gap-3 px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-[#00522d]">Contact Support</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25]">How can we help?</Text>
          <Text className="text-xs text-[#556158] mt-1">
            Submit a ticket to campus facilities or the Upcycle engineering desk.
          </Text>
        </View>

        <View className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4 mb-6">
          {submitted ? (
            <View className="p-6 bg-[#dff1fb] rounded-2xl items-center space-y-2 text-center">
              <MaterialIcons name="check-circle" size={40} color="#00522d" />
              <Text className="text-base font-bold text-[#00522d]">Ticket Dispatched</Text>
              <Text className="text-xs text-[#556158] text-center">
                Reference ID: #SUP-9941. We will reply to your registered email shortly.
              </Text>
            </View>
          ) : (
            <View className="space-y-4">
              <Input 
                label="Ticket Subject" 
                placeholder="e.g., Smart Bin #4 sensor offline"
                value={subject}
                onChangeText={setSubject}
              />
              
              <View className="space-y-1.5">
                <Text className="text-xs font-bold text-[#556158] uppercase">Detailed Message</Text>
                <TextInput 
                  value={message}
                  onChangeText={setMessage}
                  placeholder="Describe your question, bug report, or waste logistics issue..."
                  placeholderTextColor="#556158"
                  multiline
                  numberOfLines={5}
                  className="p-4 bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl text-xs text-[#0d1e25] h-32 text-top"
                />
              </View>

              <Button 
                title="Submit Support Request" 
                onPress={handleSend}
                className="mt-2 bg-[#00522d]"
              />
            </View>
          )}
        </View>

        {/* Emergency facility contacts */}
        <View className="p-5 bg-white rounded-2xl border border-[#bec9be]/30 flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-xl bg-[#ffdad6] items-center justify-center">
            <MaterialIcons name="emergency" size={22} color="#ba1a1a" />
          </View>
          <View className="flex-1">
            <Text className="font-bold text-xs text-[#0d1e25]">Campus Environmental Hotline</Text>
            <Text className="text-[10px] text-[#556158]">Hazardous spill or overflow: ext. 4400 (24/7)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}