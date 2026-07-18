import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CampusApprovalQueueMobile() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [checks, setChecks] = useState({
    zoning: true,
    waste: false,
    structural: false
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 h-14 bg-[#f8f9fa] border-b border-[#c1c8c2] z-50">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={24} color="#012d1d" />
          <Text className="text-xl font-bold text-[#012d1d]">Upcycle Admin</Text>
        </View>
        <TouchableOpacity onPress={toggleSidebar} className="p-2 active:bg-[#e7e8e9] rounded-full">
          <MaterialIcons name="list-alt" size={24} color="#414844" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-4 pt-4" contentContainerStyle={{ paddingBottom: 150 }}>
        
        {/* Tab Nav */}
        <View className="flex-row border-b border-[#c1c8c2] mb-6">
          <TouchableOpacity className="px-4 py-2 border-b-2 border-[#012d1d]">
            <Text className="font-bold text-[#012d1d]">Details</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2">
            <Text className="font-medium text-[#414844]">Assets</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2">
            <Text className="font-medium text-[#414844]">History</Text>
          </TouchableOpacity>
        </View>

        {/* Campus Profile Card */}
        <View className="bg-white border border-[#c1c8c2] rounded-lg p-4 mb-6">
          <View className="flex-row items-start justify-between mb-4">
            <View className="flex-1 pr-4">
              <View className="bg-[#ffdad6] self-start px-2 py-0.5 rounded-full mb-2">
                <Text className="text-[10px] font-bold text-[#93000a] uppercase tracking-wider">Pending Approval</Text>
              </View>
              <Text className="text-xl font-bold text-[#012d1d]">Oakwood Green Campus</Text>
              <Text className="text-xs text-[#414844]">ID: UPY-88291-TX</Text>
            </View>
            <View className="w-16 h-16 rounded-lg bg-[#edeeef] border border-[#c1c8c2] overflow-hidden">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9DmK_Oy06j9Dfxw3rilW16rJmH_XSb2K9zoGu_9j7_JrD3Oz-DBvWnHKth3IRd2nFC9w96YQU3SCmZXMXTfgUY_1pEqFO6EXbh37FCSpc8-G2mIIFo8N0LSlBJ_K7nwO_bJt8_MXsHHHK16K4tkoKKnFjS8RODjs_SpGMn_PVhLEHp8RtQO28Us4i0jwzQ3tk80nqkAooQXm4-u9cH44mF_rccgTIPtL27-WkxM-C2_J2g1zP84OtH-h4RLXd2l_EPtGdHh4lwuw' }}
                className="w-full h-full"
              />
            </View>
          </View>

          <View className="flex-row flex-wrap border-t border-[#c1c8c2] pt-4">
            <View className="w-[50%] mb-4">
              <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">Region</Text>
              <Text className="text-sm text-[#191c1d]">Austin, TX</Text>
            </View>
            <View className="w-[50%] mb-4">
              <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">Category</Text>
              <Text className="text-sm text-[#191c1d]">Educational / Hub</Text>
            </View>
            <View className="w-[50%]">
              <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">Submitted By</Text>
              <Text className="text-sm text-[#4c6452]">Sarah Jenkins</Text>
            </View>
            <View className="w-[50%]">
              <Text className="text-[10px] text-[#717973] uppercase tracking-widest mb-1">Date</Text>
              <Text className="text-sm font-mono text-[#191c1d]">2023-10-24</Text>
            </View>
          </View>
        </View>

        {/* Assets Grid */}
        <View className="mb-6 gap-3">
          <Text className="text-xl font-bold text-[#191c1d] px-1">Submitted Assets</Text>
          <View className="h-48 rounded-xl overflow-hidden border border-[#c1c8c2] relative">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-gyRDhslKtMawAtA-IwsRqogE2a9ULuhE7dvYEX0gp9b0pC1hFtFP9DT8re4T-iaPKTRHBX9V6WpIFY3bIyIjqbtBD0iYO6E1Md7z9u5at4_xoFpXErnkPhzCxF1R3BIyzSi_pbK_NFxDKW0JhLY9glPOU9GI8Rq2LQANLR7Kn76ozts6j_t9LY9uZ5LY6Zqf63UcnWDgS98A3JkqV7tghfeYIr9XBI29dJLkHdG5rZKTIyyElxK3VASlZroWAMBPm-EoTKHQWY' }}
              className="w-full h-full"
            />
            <View className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full flex-row items-center gap-2 border border-[#c1c8c2]">
              <MaterialIcons name="map" size={18} color="#191c1d" />
              <Text className="text-xs font-medium text-[#191c1d]">Site Map</Text>
            </View>
          </View>
          <View className="flex-row gap-3">
            <View className="flex-1 bg-[#f3f4f5] border border-[#c1c8c2] rounded-xl p-4 items-center justify-center gap-2">
              <MaterialIcons name="picture-as-pdf" size={32} color="#012d1d" />
              <Text className="text-xs font-medium text-center text-[#191c1d]">Safety_Audit_v2.pdf</Text>
            </View>
            <View className="flex-1 bg-[#f3f4f5] border border-[#c1c8c2] rounded-xl p-4 items-center justify-center gap-2">
              <MaterialIcons name="picture-as-pdf" size={32} color="#012d1d" />
              <Text className="text-xs font-medium text-center text-[#191c1d]">Sustainability_Plan.pdf</Text>
            </View>
          </View>
        </View>

        {/* Validation Checklist */}
        <View className="bg-[#e1e3e4] rounded-xl p-5 mb-6">
          <View className="flex-row items-center gap-2 mb-3">
            <MaterialIcons name="verified" size={18} color="#414844" />
            <Text className="text-sm font-medium text-[#414844]">Compliance Checklist</Text>
          </View>
          <View className="gap-2">
            <TouchableOpacity onPress={() => setChecks({...checks, zoning: !checks.zoning})} className={`flex-row items-center justify-between p-3 rounded-lg border border-[#c1c8c2] ${checks.zoning ? 'bg-[#cee9d3]' : 'bg-[#f8f9fa]'}`}>
              <Text className="text-sm text-[#191c1d]">Zoning Permit Verified</Text>
              <MaterialIcons name={checks.zoning ? "check-box" : "check-box-outline-blank"} size={24} color={checks.zoning ? "#012d1d" : "#717973"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChecks({...checks, waste: !checks.waste})} className={`flex-row items-center justify-between p-3 rounded-lg border border-[#c1c8c2] ${checks.waste ? 'bg-[#cee9d3]' : 'bg-[#f8f9fa]'}`}>
              <Text className="text-sm text-[#191c1d]">Waste Management Plan</Text>
              <MaterialIcons name={checks.waste ? "check-box" : "check-box-outline-blank"} size={24} color={checks.waste ? "#012d1d" : "#717973"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChecks({...checks, structural: !checks.structural})} className={`flex-row items-center justify-between p-3 rounded-lg border border-[#c1c8c2] ${checks.structural ? 'bg-[#cee9d3]' : 'bg-[#f8f9fa]'}`}>
              <Text className="text-sm text-[#191c1d]">Structural Integrity Sign-off</Text>
              <MaterialIcons name={checks.structural ? "check-box" : "check-box-outline-blank"} size={24} color={checks.structural ? "#012d1d" : "#717973"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Action Bar */}
      <View className="absolute bottom-16 left-0 w-full px-4 pb-4 pt-2 bg-[#f8f9fa]/90 border-t border-transparent z-40">
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 h-12 bg-white border border-[#ba1a1a] rounded-lg items-center justify-center flex-row gap-2 active:scale-95">
            <MaterialIcons name="close" size={24} color="#ba1a1a" />
            <Text className="text-lg font-bold text-[#ba1a1a]">Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-[2] h-12 bg-[#012d1d] rounded-lg items-center justify-center flex-row gap-2 active:scale-95">
            <MaterialIcons name="check-circle" size={24} color="white" />
            <Text className="text-lg font-bold text-white">Approve Campus</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sidebar Modal */}
      <Modal visible={isSidebarOpen} animationType="fade" transparent={true}>
        <View className="flex-1 bg-black/40 flex-row justify-end">
          <View className="w-[85%] h-full bg-[#f8f9fa] shadow-2xl">
            <View className="p-4 border-b border-[#c1c8c2] flex-row items-center justify-between">
              <Text className="text-xl font-bold text-[#012d1d]">Pending Queue (12)</Text>
              <TouchableOpacity onPress={toggleSidebar} className="p-2">
                <MaterialIcons name="arrow-forward-ios" size={20} color="#012d1d" />
              </TouchableOpacity>
            </View>
            <ScrollView className="flex-1 p-4" contentContainerStyle={{ gap: 12 }}>
              <View className="p-3 bg-[#cce6d0] rounded-lg border border-[#012d1d]/20">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-sm font-bold text-[#012d1d]">UPY-88291</Text>
                  <Text className="text-xs font-mono text-[#012d1d]">2h ago</Text>
                </View>
                <Text className="text-base font-bold text-[#012d1d]">Oakwood Green Campus</Text>
                <Text className="text-xs text-[#506856]">Austin, TX</Text>
              </View>
              <View className="p-3 bg-[#edeeef] rounded-lg border border-[#c1c8c2]">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-sm font-medium text-[#414844]">UPY-88304</Text>
                  <Text className="text-xs font-mono text-[#414844]">4h ago</Text>
                </View>
                <Text className="text-base font-medium text-[#191c1d]">Harbor Eco-Center</Text>
                <Text className="text-xs text-[#414844]">Portland, OR</Text>
              </View>
              <View className="p-3 bg-[#edeeef] rounded-lg border border-[#c1c8c2]">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-sm font-medium text-[#414844]">UPY-88312</Text>
                  <Text className="text-xs font-mono text-[#414844]">6h ago</Text>
                </View>
                <Text className="text-base font-medium text-[#191c1d]">Skyline Upcycling Hub</Text>
                <Text className="text-xs text-[#414844]">Denver, CO</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center bg-[#f8f9fa] border-t border-[#c1c8c2] py-2 px-2 z-50 h-16 pb-2">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center p-2 active:scale-95">
          <MaterialIcons name="dashboard" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#cce6d0] rounded-full px-4 py-1 active:scale-95">
          <MaterialIcons name="gavel" size={24} color="#506856" />
          <Text className="text-[10px] text-[#506856]">Audit</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="group" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Users</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="monitor-heart" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Health</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-2 active:scale-95">
          <MaterialIcons name="settings" size={24} color="#414844" />
          <Text className="text-[10px] text-[#414844]">Setup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
