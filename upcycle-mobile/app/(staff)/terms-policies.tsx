import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TermsPoliciesMobile() {
  const router = useRouter();
  const [selectedDoc, setSelectedDoc] = useState<{title: string, version: string, id: string, date: string} | null>(null);

  const documents = [
    {
      title: 'Terms of Service',
      version: 'v2.4.0',
      description: 'Governs usage of the Upcycle platform and user responsibilities.',
      icon: 'gavel',
      color: '#c1ecd4',
      iconColor: '#002114',
      id: 'UPC-TOS-2023',
      date: 'Oct 24, 2023'
    },
    {
      title: 'Privacy Policy',
      version: 'v1.1.2',
      description: 'How we collect, store, and process your data and organizational metrics.',
      icon: 'security',
      color: '#b1f0ce',
      iconColor: '#002114',
      id: 'UPC-PRIV-2023',
      date: 'Oct 24, 2023'
    },
    {
      title: 'Cookie Policy',
      version: 'v1.0.5',
      description: 'Detailed explanation of tracking technologies and preferences.',
      icon: 'cookie',
      color: '#cee9d3',
      iconColor: '#092012',
      id: 'UPC-COOK-2023',
      date: 'Oct 24, 2023'
    },
    {
      title: 'Community Guidelines',
      version: 'v3.0.0',
      description: 'Expected behavior, moderation rules, and professional standards for admins.',
      icon: 'groups',
      color: '#a5d0b9',
      iconColor: '#274e3d',
      id: 'UPC-COM-2023',
      date: 'Oct 24, 2023'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 h-14 bg-[#f8f9fa] border-b border-[#c1c8c2] z-50">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="active:opacity-80">
            <MaterialIcons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <TouchableOpacity className="active:opacity-80">
            <MaterialIcons name="notifications" size={24} color="#414844" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#191c1d] mb-2">Terms & Policies</Text>
          <Text className="text-sm text-[#414844]">Review official platform documentation and compliance standards.</Text>
        </View>

        <View className="gap-4">
          {documents.map((doc, idx) => (
            <TouchableOpacity 
              key={idx}
              onPress={() => setSelectedDoc(doc)}
              className="bg-white border border-[#c1c8c2] p-4 rounded-xl flex-row items-start gap-4 active:scale-[0.98] active:bg-[#f3f4f5]"
            >
              <View 
                className="w-12 h-12 rounded-lg items-center justify-center shrink-0"
                style={{ backgroundColor: doc.color }}
              >
                <MaterialIcons name={doc.icon as any} size={24} color={doc.iconColor} />
              </View>
              
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="text-base font-bold text-[#191c1d]">{doc.title}</Text>
                  <View className="px-2 py-0.5 rounded-full bg-[#edeeef]">
                    <Text className="text-[10px] font-medium text-[#414844]">{doc.version}</Text>
                  </View>
                </View>
                <Text className="text-xs text-[#414844] mb-3" numberOfLines={2}>{doc.description}</Text>
                
                <View className="flex-row items-center">
                  <Text className="text-xs font-bold text-[#012d1d]">READ DOCUMENT</Text>
                  <MaterialIcons name="chevron-right" size={16} color="#012d1d" className="ml-1" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer Meta */}
        <View className="mt-8 pt-6 border-t border-[#c1c8c2]">
          <View className="bg-[#012d1d] p-6 rounded-xl relative overflow-hidden">
            <View className="relative z-10">
              <Text className="text-xl font-bold text-white mb-2">Compliance Status</Text>
              <View className="flex-row items-center gap-2 mb-4">
                <View className="w-3 h-3 bg-[#b1f0ce] rounded-full" />
                <Text className="text-xs font-medium text-white">System Fully Compliant</Text>
              </View>
              <TouchableOpacity className="bg-[#b1f0ce] px-4 py-2 rounded-lg self-start">
                <Text className="text-xs font-bold text-[#002114]">DOWNLOAD ALL (PDF)</Text>
              </TouchableOpacity>
            </View>
            
            <View className="absolute right-[-20px] top-[-20px] opacity-10">
              <MaterialIcons name="description" size={120} color="white" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Document Viewer Modal */}
      <Modal visible={!!selectedDoc} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView className="flex-1 bg-[#f8f9fa]">
          {/* Header */}
          <View className="px-6 h-14 flex-row items-center justify-between border-b border-[#c1c8c2] bg-[#f8f9fa]">
            <TouchableOpacity onPress={() => setSelectedDoc(null)} className="flex-row items-center gap-2 active:opacity-70">
              <MaterialIcons name="arrow-back" size={24} color="#414844" />
              <Text className="text-xs font-medium text-[#414844] uppercase tracking-widest">Back</Text>
            </TouchableOpacity>
            <View className="flex-row items-center gap-4">
              <MaterialIcons name="share" size={24} color="#414844" />
              <MaterialIcons name="print" size={24} color="#414844" />
            </View>
          </View>

          <ScrollView className="flex-1 px-6 py-6">
            <View className="max-w-2xl w-full self-center">
              <Text className="text-3xl font-bold text-[#191c1d] mb-4">{selectedDoc?.title}</Text>
              
              <View className="flex-row flex-wrap gap-2 mb-8">
                <View className="bg-[#e7e8e9] px-3 py-1 rounded-full flex-row items-center gap-1">
                  <MaterialIcons name="update" size={14} color="#414844" />
                  <Text className="text-xs font-medium text-[#414844]">Effective {selectedDoc?.date}</Text>
                </View>
                <View className="bg-[#e7e8e9] px-3 py-1 rounded-full">
                  <Text className="text-xs font-medium text-[#414844]">ID: {selectedDoc?.id}</Text>
                </View>
              </View>

              <View className="gap-6">
                <View>
                  <Text className="text-lg font-bold text-[#191c1d] mb-3">1. Professional Accountability</Text>
                  <Text className="text-sm text-[#414844] leading-relaxed">
                    By accessing the Upcycle Admin dashboard, you acknowledge your responsibility as a system gatekeeper. Your actions are logged and audit-trailed for transparency and compliance with global sustainability reporting standards.
                  </Text>
                </View>
                
                <View>
                  <Text className="text-lg font-bold text-[#191c1d] mb-3">2. Data Sovereignty</Text>
                  <Text className="text-sm text-[#414844] leading-relaxed">
                    Administrators must treat all user lifecycle data with maximum confidentiality. Unauthorized export of granular data outside the platform's secure environment is strictly prohibited and monitored by automated sentinel protocols.
                  </Text>
                </View>

                <View className="bg-[#edeeef] p-4 rounded-lg border-l-4 border-[#012d1d]">
                  <View className="flex-row items-center gap-1 mb-2">
                    <MaterialIcons name="info" size={16} color="#012d1d" />
                    <Text className="text-xs font-bold text-[#012d1d]">CORE MANDATE</Text>
                  </View>
                  <Text className="text-xs text-[#414844] italic">"Sustainability is not a toggle; it is the infrastructure."</Text>
                </View>

                <View className="h-40 bg-[#f3f4f5] rounded-b-xl items-center justify-center opacity-60">
                  <MaterialIcons name="article" size={32} color="#717973" className="opacity-50" />
                  <Text className="text-xs text-[#717973] opacity-80 mt-2">Extended document content loading...</Text>
                </View>
              </View>

              {/* Version History */}
              <View className="mt-12 pt-8 border-t border-[#c1c8c2] mb-12">
                <Text className="text-lg font-bold text-[#191c1d] mb-4">Version History</Text>
                <View>
                  <View className="flex-row items-center justify-between py-3 border-b border-[#c1c8c2]/30">
                    <View className="flex-row items-center gap-3">
                      <View className="w-2 h-2 bg-[#012d1d] rounded-full" />
                      <Text className="text-[13px] font-mono text-[#191c1d]">{selectedDoc?.version}</Text>
                    </View>
                    <Text className="text-[10px] font-medium text-[#414844]">CURRENT (Oct 2023)</Text>
                  </View>
                  
                  <View className="flex-row items-center justify-between py-3 border-b border-[#c1c8c2]/30 opacity-60">
                    <View className="flex-row items-center gap-3">
                      <View className="w-2 h-2 bg-[#717973] rounded-full" />
                      <Text className="text-[13px] font-mono text-[#191c1d]">v2.3.5</Text>
                    </View>
                    <Text className="text-[10px] font-medium text-[#414844]">MAR 2023</Text>
                  </View>
                  
                  <View className="flex-row items-center justify-between py-3 opacity-60">
                    <View className="flex-row items-center gap-3">
                      <View className="w-2 h-2 bg-[#717973] rounded-full" />
                      <Text className="text-[13px] font-mono text-[#191c1d]">v2.1.0</Text>
                    </View>
                    <Text className="text-[10px] font-medium text-[#414844]">JAN 2022</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f8f9fa] border-t border-[#c1c8c2] py-2 px-2 z-50 h-16 pb-2 md:hidden">
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="dashboard" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="person" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="notifications" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#1b4332] rounded-full px-4 py-1">
          <MaterialIcons name="help" size={24} color="#86af99" />
          <Text className="text-[10px] text-[#86af99]">Help</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="contact-support" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
