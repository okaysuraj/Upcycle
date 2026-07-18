import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DashboardShellMobile() {
  const router = useRouter();
  const [greeting, setGreeting] = useState('Hello, Alex');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning, Alex');
    else if (hour < 18) setGreeting('Good Afternoon, Alex');
    else setGreeting('Good Evening, Alex');
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-[#f4faff] z-50 md:hidden">
        <View className="flex-row items-center gap-2">
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLuaeWGEBHEzwqBPQAk8QsJgcjKH1dH53_ec81VNIPmrmp8NEDSB5RWseIPhSajfG2n3WOy64AWqjK6D7sWGEN6SewlhMQg_zIDtiR7YpHOMy_VQvNNFFD_rTqXRNqLRoFIFQtTWr7xG1rfQ-Rpkp8VzWiE9lZc7HJhdjkvcCFG2J6_tnSRu8Bue54Ws1t8FqvYXHfw2j7qjNUrGElb2ZNqWynH73bZCfB8Oblg_GX_GbE-QkeIgbSzy3HE' }}
            className="w-8 h-8"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-[#006d3e]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 active:scale-95">
            <MaterialIcons name="notifications" size={24} color="#3d4a40" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#d9e6da] overflow-hidden">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGI4MDm0U3PBGkk984M5EgAdaLkkD9eZ9X9QK6pBx4Ngxo6ppsXpv2W3I3-6pYqxzXsLNneRK-lUPdwwpY0oI2Jxa4Cfruw_QNyuZGzBKsxI2pKvXWFSg6Jqa7_FKmZTa51P3oVeu-qeZgLQq-DSQMwI2Au7UXBwjDjnqwa84-69x70GmNpW5w9ArqpeiVyqsygh2Syg9V_hvR9bLAnJPvKRv7PQ2GSLDHsSUpeZAMpBX67FaYfL28FbwyQcTr96EE44x1WVD9Irw' }}
              className="w-full h-full"
            />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Welcome Section */}
        <View className="mb-10">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-2">{greeting}</Text>
          <Text className="text-base text-[#3d4a40] leading-relaxed">
            You've reached <Text className="font-bold text-[#006d3e]">85%</Text> of your monthly sustainability goal. Here's your impact overview for today.
          </Text>
        </View>

        {/* Summary Card: Sustainability Impact */}
        <View className="p-6 rounded-[24px] bg-[#006d3e] overflow-hidden relative shadow-sm mb-6">
          <View className="relative z-10">
            <View className="flex-row items-center gap-2 mb-10">
              <MaterialIcons name="eco" size={16} color="#7afbae" />
              <Text className="text-xs font-bold text-white uppercase tracking-widest">Sustainability Impact</Text>
            </View>
            <View className="gap-8">
              <View>
                <Text className="text-5xl font-bold text-white mb-1 tracking-tight">1,240 <Text className="text-2xl text-[#7afbae]">kg</Text></Text>
                <Text className="text-base text-[#7afbae]/90">Total Waste Recycled</Text>
              </View>
              <View>
                <Text className="text-5xl font-bold text-white mb-1 tracking-tight">45.2 <Text className="text-2xl text-[#7afbae]">m³</Text></Text>
                <Text className="text-base text-[#7afbae]/90">Carbon Footprint Reduced</Text>
              </View>
            </View>
          </View>

          <View className="mt-10 relative z-10">
            <View className="flex-row justify-between items-end mb-2">
              <Text className="text-sm font-medium text-white">Monthly Progress</Text>
              <Text className="text-2xl font-bold text-[#7afbae]">85%</Text>
            </View>
            <View className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
              <View className="h-full bg-[#7afbae] w-[85%] rounded-full shadow-[0_0_12px_rgba(122,251,174,0.4)]" />
            </View>
          </View>

          <View className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#7afbae]/10 rounded-full blur-3xl" />
        </View>

        {/* Quick Action Grid */}
        <View className="flex-row flex-wrap justify-between mb-10">
          <TouchableOpacity className="w-[48%] h-40 bg-[#e7f6ff] items-center justify-center rounded-[24px] mb-4 active:scale-95">
            <View className="w-12 h-12 rounded-full bg-[#7afbae]/30 items-center justify-center mb-3">
              <MaterialIcons name="compost" size={24} color="#006d3e" />
            </View>
            <Text className="text-sm font-medium text-[#3d4a40]">Log Waste</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] h-40 bg-[#e7f6ff] items-center justify-center rounded-[24px] mb-4 active:scale-95">
            <View className="w-12 h-12 rounded-full bg-[#7afbae]/30 items-center justify-center mb-3">
              <MaterialIcons name="local-shipping" size={24} color="#006d3e" />
            </View>
            <Text className="text-sm font-medium text-[#3d4a40]">Pickup Request</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] h-40 bg-[#e7f6ff] items-center justify-center rounded-[24px] active:scale-95">
            <View className="w-12 h-12 rounded-full bg-[#7afbae]/30 items-center justify-center mb-3">
              <MaterialIcons name="location-on" size={24} color="#006d3e" />
            </View>
            <Text className="text-sm font-medium text-[#3d4a40]">Near Me</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] h-40 bg-[#e7f6ff] items-center justify-center rounded-[24px] active:scale-95">
            <View className="w-12 h-12 rounded-full bg-[#7afbae]/30 items-center justify-center mb-3">
              <MaterialIcons name="card-giftcard" size={24} color="#006d3e" />
            </View>
            <Text className="text-sm font-medium text-[#3d4a40]">Rewards</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Events */}
        <View className="mb-10">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-[#0d1e25]">Upcoming Events & Seminars</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Text className="text-sm font-medium text-[#006d3e]">View All</Text>
              <MaterialIcons name="arrow-forward" size={18} color="#006d3e" />
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible pb-4">
            <View className="w-80 bg-white rounded-[24px] overflow-hidden border border-[#bccabd]/30 mr-6 shadow-sm">
              <View className="h-44 relative">
                <Image 
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2RX3wSipJ1SIZTIP_FquzwVk1SAIuyPfZc7thRJQhKqbd9vMdUex_isk6cE8hEWPESrsc8cwLiEHILBVjJZ-l95ZkEhxdS01NX8CjRaXYGQK0BPf39R9ULM7q2BIRpJF5XS5xOmD_XjsnBPfQ7Yt_--tkQaykzH3Oidlw6CNVnLbG_7lCSyuGVwkgtSHHwUz13S_87rCDb5fODpMQxHwGQVIRR2Ux02XLBq4s_3T9MZ2WSZxWNKgZxU-DKDPXiVllOFyTOK1XpvM' }}
                  className="w-full h-full"
                />
                <View className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                  <Text className="text-[#006d3e] text-xs font-bold">In Person</Text>
                </View>
              </View>
              <View className="p-6">
                <View className="flex-row items-center gap-2 mb-2">
                  <MaterialIcons name="calendar-today" size={20} color="#006d3e" />
                  <Text className="text-xs font-bold text-[#3d4a40]">OCT 24 • 10:00 AM</Text>
                </View>
                <Text className="text-xl font-bold text-[#0d1e25] mb-4">Urban Composting 101</Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row -space-x-2">
                    <View className="w-8 h-8 rounded-full border-2 border-white bg-[#d9e6da]" />
                    <View className="w-8 h-8 rounded-full border-2 border-white bg-[#2eb872]" />
                    <View className="w-8 h-8 rounded-full border-2 border-white bg-[#556158] items-center justify-center">
                      <Text className="text-[10px] text-white">+12</Text>
                    </View>
                  </View>
                  <TouchableOpacity className="px-4 py-2 bg-[#d9e6da] rounded-full active:bg-[#2eb872]">
                    <Text className="text-sm font-medium text-[#5b675e]">Join Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="w-80 bg-white rounded-[24px] overflow-hidden border border-[#bccabd]/30 shadow-sm">
              <View className="h-44 relative">
                <Image 
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkiwav47E5kUNchLkMTqS3M8t2-XnGwXTMpxH8A26URus8tHTPBcRuXW4Hi9kF_GXmfJnJbbJGdPtqrSv80KzaQ6uiryNPR2HTb-O3QQGX2nNTcgHGWo2uOp2udW3mz2pRPSF3l66qYwR0rAv4ZPGBzbZTJabFMezjhgTkA1_50D10f2vgmnKoC-u_qgEJfTmM5HT7pG_ooxiq4DuhMbxrI07pCsMESJDZLu_HH5yg2-4fO4As6JIoyDPfBrhOPpqZJL0dUCZlu18' }}
                  className="w-full h-full"
                />
                <View className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                  <Text className="text-[#006d3e] text-xs font-bold">Virtual</Text>
                </View>
              </View>
              <View className="p-6">
                <View className="flex-row items-center gap-2 mb-2">
                  <MaterialIcons name="videocam" size={20} color="#006d3e" />
                  <Text className="text-xs font-bold text-[#3d4a40]">OCT 28 • 02:00 PM</Text>
                </View>
                <Text className="text-xl font-bold text-[#0d1e25] mb-4">The Future of Bio-Plastics</Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row -space-x-2">
                    <View className="w-8 h-8 rounded-full border-2 border-white bg-[#d9e6da]" />
                    <View className="w-8 h-8 rounded-full border-2 border-white bg-[#2eb872]" />
                    <View className="w-8 h-8 rounded-full border-2 border-white bg-[#556158] items-center justify-center">
                      <Text className="text-[10px] text-white">+45</Text>
                    </View>
                  </View>
                  <TouchableOpacity className="px-4 py-2 bg-[#d9e6da] rounded-full active:bg-[#2eb872]">
                    <Text className="text-sm font-medium text-[#5b675e]">Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Global Impact Stream */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#0d1e25] mb-6">Global Impact Stream</Text>
          <View className="gap-4">
            <View className="flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-[#bccabd]/20">
              <View className="w-12 h-12 rounded-xl bg-[#e7f6ff] items-center justify-center shrink-0">
                <MaterialIcons name="water-drop" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold mb-1">12M Liters Saved</Text>
                <Text className="text-xs text-[#3d4a40]">Collectively saved this year across the Upcycle network.</Text>
              </View>
            </View>
            <View className="flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-[#bccabd]/20">
              <View className="w-12 h-12 rounded-xl bg-[#e7f6ff] items-center justify-center shrink-0">
                <MaterialIcons name="forest" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold mb-1">45k Trees Planted</Text>
                <Text className="text-xs text-[#3d4a40]">Our community reforestation program reaches a new milestone.</Text>
              </View>
            </View>
            <View className="flex-row items-start gap-4 p-6 rounded-2xl bg-white border border-[#bccabd]/20">
              <View className="w-12 h-12 rounded-xl bg-[#e7f6ff] items-center justify-center shrink-0">
                <MaterialIcons name="bolt" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold mb-1">800 MWh Generated</Text>
                <Text className="text-xs text-[#3d4a40]">Renewable energy harnessed from municipal waste-to-energy.</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity className="absolute bottom-24 right-6 w-14 h-14 bg-[#006d3e] rounded-2xl shadow-lg items-center justify-center active:scale-95 z-40">
        <MaterialIcons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center px-4 py-2 border-t border-[#bccabd]/30 bg-[#f4faff] h-16 z-50 md:hidden">
        <TouchableOpacity className="items-center bg-[#2eb872] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="home" size={24} color="#004224" />
          <Text className="text-[10px] text-[#004224]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-90">
          <MaterialIcons name="eco" size={24} color="#3d4a40" />
          <Text className="text-[10px] text-[#3d4a40]">Impact</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-90">
          <MaterialIcons name="search" size={24} color="#3d4a40" />
          <Text className="text-[10px] text-[#3d4a40]">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-90">
          <MaterialIcons name="settings" size={24} color="#3d4a40" />
          <Text className="text-[10px] text-[#3d4a40]">Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}