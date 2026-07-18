import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BuildingsZonesMobile() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All (42)');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All (42)', 'Operational', 'Maintenance', 'Archived'];

  const buildings = [
    {
      id: 1,
      name: 'Central Library',
      status: 'Active',
      statusColor: '#2eb872',
      statusBg: '#d9e6da',
      zones: 12,
      efficiency: '94%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_W8ckbk2ltNumD0HV75iRVvUMgL7uckJBDtocv4MNgujohlzDjJWsM-HCPfBMSXK0xnRwKEZhiK8zOuIUuCsMC31dqKfibNQSvqpTf42jw8VQGpFAqAsc9Oa1d1JyUnf8ufaNbPah88zMzbu6dj9OEClDbqMb4HNCRGmB_MvdZ_NFYCsS7KPam-kidkTcxPodRVbN94t0AJ6mnbmRIl_2KLFm-LOLCqDGFjxZ2z4xQW_E0zs5DbQJIhdts38y3Uzh77ytwMK95cY'
    },
    {
      id: 2,
      name: 'Engineering Hall',
      status: 'Maintenance',
      statusColor: '#ba1a1a',
      statusBg: '#ffdad6',
      zones: 8,
      efficiency: '62%',
      effColor: '#ba1a1a',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQJhELaGlw124kdyqcnT7pbfHWN-rHzoXzT4Jd3b2SoR1azGZyjI5_8epW17b25vgi4SH7kWnpR54XutDRFOgZMYrqWnx62ip7ak9sj8r7cboDkK34mnUVDifh7_-wv7J5Fr7xgZuW7OnRnigLAStBiosr3a1rwO4cMsUeEkbGeiWxrTWJHfACpNqeNPKTzVxD5191wu0gC1nXFpY09SK3jNQlgjVaT85nLdv0-igSQ5YZPUA_LXKMryKxstMV98v-cIotGrcQFAU'
    },
    {
      id: 3,
      name: 'Student Center',
      status: 'Active',
      statusColor: '#2eb872',
      statusBg: '#d9e6da',
      zones: 18,
      efficiency: '88%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXcVGcbaNZWTyxIPZDfrXV3FK8s-_tAiYl-PuqYIInVCmnLLRZ6gv4cQkqSrEP7h1GT5_8S5FbHch-51kZmdUrxNpgJaIv-9Jc-G94NpHlrVPh5YVpskki9TUa2yQR8Zrztwdb56ZQ3-KNk0fBDBMQdr1-vN5FLSwdPZU9Jon_tDqKk3l4caLwac19HJJDujNbgx_kAIK_ovzujS-1VnpnXKzJv2BpK2j3843YpTeXMPEwhmScf1Kdfo1dquvLrdhOm5OblMEnHqM'
    },
    {
      id: 4,
      name: 'North Sports Hub',
      status: 'Active',
      statusColor: '#2eb872',
      statusBg: '#d9e6da',
      zones: 4,
      efficiency: '91%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXva9lvhjAZPvPQNeVBioDZqrRAqkKG7OY56cYDu1dcNICALmzv-nu07YeXeTZSIbAjWwXqfZQbzs0fP4LjMQapYy1ZvRjAKFHsuo9Dn__OiWrZXn-R9edxU2vuP7S0MwUpW8gIV-vbhmrm8AvFQCy8q2pbxQoN-FCWVZrHzX51kWM4264yTKlHBrzuH8iInIch-xZuLPC5OFdXUXa0hpbKIWIqsHIeNOfWtYQjWb9D1wMSx2tFTu07coElc2OBID0uozY1NsRXbQ'
    },
    {
      id: 5,
      name: 'Faculty Offices',
      status: 'Active',
      statusColor: '#2eb872',
      statusBg: '#d9e6da',
      zones: 22,
      efficiency: '97%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6HzHMZmbpkGES9iheg58cquToC6jbAxlFdstORSgzyu97iBkm0CdW3P4V50_DtHvzW1DlKiTL-nITD8cPQNqOxSxL0ArczP02pH7PGBdhsJv5ZI42S6xaL7MILWPxZ8mfZiXVy6_aAsiaO7GMK8BaQE5M1VdnVuzWVtQeksMZAsO8A_02PB1cJeyqSm2WEiAMx5eaRjZ564YKhgVx0T-mA5FhcZWu6MOjGl22IvAwInlZLm9L1LhKZpOTGXXLbFp_zGNyq4m7F8s'
    }
  ];

  const filteredBuildings = buildings.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 bg-white/70 border-b border-[#bec9be]/30 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-[#9cf6ba] overflow-hidden items-center justify-center border border-[#00522d]/20">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH0WGpQWQZT_MKIHxnzZ-B-p71OTEzxlFXtYKk1zFtUNL5qCe_Gs9GwIMmKQrYBJIEESyJRbuquMEu8nxMowiafqZWcs_0WiZ5oUlDdLyAjj2OlIuU78v_MgTFP6ZdzVdKW_ih7mYDH9jjNVwQMmKnZq68f6psiEMldqXiXXOjmqUFdmmrLEwYMkND7an4QvOh4Ze6zp97u97evIZ-7S93ZJLyZ9la_VdphWMPEP8XNvInAncMEL3QDJOxDFnPa1NKU2IzpalBYCM' }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-2xl font-bold text-[#00522d]">Setup</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full text-[#00522d] active:bg-[#d9ebf5]">
          <MaterialIcons name="notifications" size={24} color="#00522d" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Search & Stats Header */}
        <View className="mb-6 gap-4">
          <View>
            <Text className="text-2xl font-bold text-[#0d1e25]">Buildings & Zones</Text>
            <Text className="text-base text-[#3f4941]">Manage 42 active campus facilities</Text>
          </View>

          <View className="relative justify-center">
            <MaterialIcons name="search" size={24} color="#6f7a70" className="absolute left-4 z-10" />
            <TextInput 
              className="w-full h-12 pl-12 pr-4 bg-white border border-[#bec9be]/50 rounded-full text-base text-[#0d1e25]"
              placeholder="Search buildings or zone IDs..."
              placeholderTextColor="#6f7a7080"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-1">
            <View className="flex-row gap-2">
              {filters.map(filter => (
                <TouchableOpacity 
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full border ${activeFilter === filter ? 'bg-[#00522d] border-[#00522d]' : 'bg-white border-[#bec9be]'}`}
                >
                  <Text className={`text-sm font-medium ${activeFilter === filter ? 'text-white' : 'text-[#3f4941]'}`}>{filter}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Building List */}
        <View className="gap-4">
          {filteredBuildings.map(building => (
            <TouchableOpacity 
              key={building.id}
              onPress={() => router.push('/(staff)/buildings/add-edit')}
              className="bg-white rounded-[24px] p-4 border border-[#bec9be]/30 flex-row items-center gap-4 active:bg-[#e7f6ff]"
            >
              <View className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#dff1fb] shrink-0">
                <Image source={{ uri: building.image }} className="w-full h-full" />
                <View className="absolute inset-0 bg-black/20" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-lg font-bold text-[#0d1e25] flex-1 mr-2" numberOfLines={1}>{building.name}</Text>
                  <View className="px-2 py-0.5 rounded-md border" style={{ backgroundColor: building.statusBg, borderColor: building.statusColor + '20' }}>
                    <Text className="text-[10px] font-bold uppercase tracking-wider" style={{ color: building.statusColor }}>{building.status}</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-3">
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="domain" size={16} color="#3f4941" />
                    <Text className="text-[12px] font-medium text-[#3f4941]">{building.zones} Zones</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="bolt" size={16} color={building.effColor || '#00522d'} />
                    <Text className="text-[12px] font-medium" style={{ color: building.effColor || '#00522d' }}>{building.efficiency} Eff.</Text>
                  </View>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6f7a70" />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity 
        onPress={() => router.push('/(staff)/buildings/add-edit')}
        className="absolute right-6 bottom-24 w-14 h-14 bg-[#00522d] rounded-2xl shadow-lg items-center justify-center active:scale-90 z-40"
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View className="absolute bottom-0 left-0 w-full flex-row justify-around items-center pt-2 pb-6 px-4 bg-white/70 border-t border-[#bec9be]/30 shadow-lg h-20 z-50">
        <TouchableOpacity onPress={() => router.push('/(staff)')} className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="dashboard" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70]">Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="delete" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70]">Waste</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="bolt" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70]">Energy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center bg-[#006d3e] rounded-full px-4 py-1 active:scale-90">
          <MaterialIcons name="domain" size={24} color="#92ecb1" />
          <Text className="text-[10px] font-bold text-[#92ecb1]">Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center active:scale-90 px-4 py-1">
          <MaterialIcons name="track-changes" size={24} color="#6f7a70" />
          <Text className="text-[10px] font-bold text-[#6f7a70]">Goals</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
