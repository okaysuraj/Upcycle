import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function SeminarLiveStream() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'chat' | 'qa'>('chat');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-[#f4faff]"
    >
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 px-4 h-16 flex-row justify-between items-center z-50 border-b border-[#bec9be]/30">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-[#dff1fb]">
            <Ionicons name="arrow-back" size={24} color="#00522d" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#006d3e] items-center justify-center">
            <Ionicons name="person" size={16} color="white" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Video Player Area */}
        <View className="px-4 pt-4 mb-4">
          <View className="w-full aspect-video rounded-[24px] bg-[#0d1e25] relative overflow-hidden justify-center items-center shadow-sm">
            <Ionicons name="play-circle" size={48} color="white" />
            
            <View className="absolute top-4 left-4 flex-row items-center gap-2 px-3 py-1 bg-[#ba1a1a] rounded-full">
              <View className="w-2 h-2 bg-white rounded-full" />
              <Text className="text-white text-[10px] font-bold uppercase tracking-wider">Live Now</Text>
            </View>

            <View className="absolute bottom-0 left-0 right-0 p-4 flex-row justify-between items-center bg-black/40">
              <View className="flex-row items-center gap-3">
                <Ionicons name="play" size={20} color="white" />
                <View>
                  <Text className="text-white text-[10px] font-bold mb-1">LIVE</Text>
                  <View className="w-24 h-1 bg-white/30 rounded-full overflow-hidden">
                    <View className="w-full h-full bg-[#ba1a1a]" />
                  </View>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Ionicons name="volume-high" size={20} color="white" />
                <Ionicons name="settings" size={20} color="white" />
                <Ionicons name="expand" size={20} color="white" />
              </View>
            </View>
          </View>
        </View>

        {/* Seminar Info */}
        <View className="px-4 mb-6">
          <View className="bg-white border border-[#bec9be]/30 p-6 rounded-[24px] shadow-sm">
            <View className="flex-row justify-between items-start mb-2">
              <Text className="flex-1 text-xl font-bold text-[#0d1e25] mr-2 leading-tight">Circular Economy: Rethinking Urban Waste Systems</Text>
              <View className="flex-row items-center gap-1">
                <Ionicons name="people" size={16} color="#00522d" />
                <Text className="text-sm font-bold text-[#00522d]">1,429 watching</Text>
              </View>
            </View>
            <Text className="text-sm text-[#3f4941] mb-4">Join Dr. Helena Vance as she explores how municipal hubs are transitioning to regenerative systems. Learn about innovative local upcycling initiatives and the data driving zero-waste city policies.</Text>
            
            <View className="flex-row flex-wrap gap-2">
              <View className="px-3 py-1 bg-[#d9e6da] rounded-lg">
                <Text className="text-[10px] font-bold text-[#5b675e]">Sustainability</Text>
              </View>
              <View className="px-3 py-1 bg-[#d9e6da] rounded-lg">
                <Text className="text-[10px] font-bold text-[#5b675e]">Urban Planning</Text>
              </View>
              <View className="px-3 py-1 bg-[#d9e6da] rounded-lg">
                <Text className="text-[10px] font-bold text-[#5b675e]">Innovation</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Chat / Q&A Area */}
        <View className="px-4 mb-24 h-96">
          
          <View className="flex-row bg-[#e7f6ff] p-1 rounded-xl mb-4">
            <TouchableOpacity 
              onPress={() => setActiveTab('chat')}
              className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'chat' ? 'bg-white shadow-sm' : ''}`}
            >
              <Text className={`text-sm font-bold ${activeTab === 'chat' ? 'text-[#00522d]' : 'text-[#3f4941]'}`}>Live Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setActiveTab('qa')}
              className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'qa' ? 'bg-white shadow-sm' : ''}`}
            >
              <Text className={`text-sm font-bold ${activeTab === 'qa' ? 'text-[#00522d]' : 'text-[#3f4941]'}`}>Q&A</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-1 bg-white border border-[#bec9be]/30 rounded-[24px] overflow-hidden flex-col shadow-sm">
            
            {activeTab === 'chat' ? (
              <>
                <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
                  <View className="gap-4">
                    
                    {/* Message 1 */}
                    <View className="flex-row gap-3">
                      <View className="w-8 h-8 rounded-full bg-[#80d99f]" />
                      <View className="flex-1">
                        <View className="flex-row items-baseline gap-2">
                          <Text className="text-sm font-bold text-[#0d1e25]">Marcus Chen</Text>
                          <Text className="text-[10px] text-[#6f7a70]">14:02</Text>
                        </View>
                        <Text className="text-sm text-[#3f4941]">The point about decentralized composting is revolutionary!</Text>
                      </View>
                    </View>

                    {/* Message 2 (System) */}
                    <View className="bg-[#006d3e]/10 p-2 rounded-xl items-center">
                      <Text className="text-[10px] font-bold text-[#00522d]">Upcycle Bot: Please keep discussions civil and focused on sustainability.</Text>
                    </View>

                    {/* Message 3 */}
                    <View className="flex-row gap-3">
                      <View className="w-8 h-8 rounded-full bg-[#d9e6da]" />
                      <View className="flex-1">
                        <View className="flex-row items-baseline gap-2">
                          <Text className="text-sm font-bold text-[#0d1e25]">Sarah Jenkins</Text>
                          <Text className="text-[10px] text-[#6f7a70]">14:05</Text>
                        </View>
                        <Text className="text-sm text-[#3f4941]">Are there case studies for cities with under 500k residents?</Text>
                      </View>
                    </View>

                  </View>
                </ScrollView>
                
                {/* Input Area */}
                <View className="p-3 border-t border-[#bec9be]/30 bg-[#f4faff]">
                  <View className="relative flex-row items-center">
                    <TextInput 
                      className="flex-1 bg-[#e7f6ff] border-none rounded-full px-5 py-3 pr-12 text-sm"
                      placeholder="Send a message..."
                    />
                    <TouchableOpacity className="absolute right-2 w-10 h-10 items-center justify-center">
                      <Ionicons name="send" size={20} color="#00522d" />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <View className="flex-1">
                <View className="p-4 border-b border-[#bec9be]/30 flex-row justify-between items-center bg-[#f4faff]">
                  <Text className="text-sm font-bold text-[#0d1e25]">Top Questions</Text>
                  <TouchableOpacity>
                    <Text className="text-xs text-[#00522d] underline">Ask a Question</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
                  <View className="p-3 bg-[#e7f6ff] rounded-xl border border-[#bec9be]/30">
                    <View className="flex-row justify-between items-start mb-1">
                      <Text className="text-[10px] font-bold text-[#00522d]">42 upvotes</Text>
                      <Ionicons name="thumbs-up-outline" size={16} color="#6f7a70" />
                    </View>
                    <Text className="text-sm text-[#0d1e25]">What is the most cost-effective way for a small town to implement a glass recycling program?</Text>
                  </View>
                </ScrollView>
              </View>
            )}

          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
