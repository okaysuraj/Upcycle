import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function ListItem() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { authFetch } = useAuth();
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Construction Material');
  const [condition, setCondition] = useState('Good');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0');
  const [listingType, setListingType] = useState('Donate');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!title || !description) {
      setError('Title and description are required');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const payload = {
        title,
        description,
        price: listingType === 'Sell' ? parseFloat(price) : 0,
        category,
        isService: false
      };

      const res = await authFetch('/marketplace', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        router.back();
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to create listing');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-[#f4faff] border-b border-gray-200 px-4 h-24 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-2">
          <Ionicons name="leaf" size={24} color="#00522d" />
          <Text className="text-2xl font-bold text-[#00522d]">EcoMarket</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            <Ionicons name="close" size={24} color="#3f4941" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-32" showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-[#00522d]">List a Resource</Text>
          <Text className="text-gray-500 mt-2">Help the community grow by upcycling materials or selling items you no longer need.</Text>
        </View>

        {error ? (
          <View className="bg-red-100 p-3 rounded-lg mb-4">
            <Text className="text-red-700 font-bold">{error}</Text>
          </View>
        ) : null}

        {/* Image Upload Area */}
        <TouchableOpacity className="bg-white/70 rounded-xl p-6 items-center justify-center border-dashed border-2 border-gray-300 min-h-[200px] mb-4">
          <Ionicons name="camera" size={40} color="#006d3e" className="mb-2" />
          <Text className="font-bold text-[#0d1e25]">Upload Item Photos</Text>
          <Text className="text-xs text-gray-500 mt-1">Supports JPG, PNG up to 10MB</Text>
        </TouchableOpacity>

        {/* Preview Grid */}
        <View className="flex-row gap-2 mb-8">
          <View className="flex-1 aspect-square rounded-lg bg-[#dff1fb] border border-gray-200 overflow-hidden items-center justify-center">
            <Ionicons name="image" size={24} color="#6f7a70" />
          </View>
          <View className="flex-1 aspect-square rounded-lg bg-[#f4faff] border border-gray-200 border-dashed items-center justify-center">
            <Ionicons name="add" size={24} color="#6f7a70" />
          </View>
          <View className="flex-1 aspect-square rounded-lg bg-[#f4faff] border border-gray-200 border-dashed items-center justify-center">
            <Ionicons name="add" size={24} color="#6f7a70" />
          </View>
        </View>

        {/* Form Inputs */}
        <View className="bg-white rounded-[24px] p-6 border border-gray-200 shadow-sm gap-4 mb-8">
          
          <View className="gap-2">
            <Text className="text-sm font-bold text-gray-500 ml-1">Item Name</Text>
            <TextInput 
              className="bg-[#f4faff] border border-gray-200 rounded-xl px-4 py-3 text-base"
              placeholder="e.g., Reclaimed Pine Flooring"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View className="gap-2">
            <Text className="text-sm font-bold text-gray-500 ml-1">Category</Text>
            <View className="bg-[#f4faff] border border-gray-200 rounded-xl px-4 py-3 flex-row justify-between items-center">
              <Text className="text-base text-gray-700">{category}</Text>
              <Ionicons name="chevron-down" size={20} color="#6f7a70" />
            </View>
          </View>

          <View className="gap-2 mt-2 mb-2">
            <Text className="text-sm font-bold text-gray-500 ml-1">Listing Type</Text>
            <View className="flex-row gap-1 bg-[#f4faff] p-1 rounded-xl border border-gray-200">
              {['Donate', 'Sell'].map((type) => (
                <TouchableOpacity 
                  key={type}
                  onPress={() => setListingType(type)}
                  className={`flex-1 py-2 rounded-lg items-center ${listingType === type ? 'bg-[#006d3e]' : 'bg-transparent'}`}
                >
                  <Text className={`font-bold ${listingType === type ? 'text-white' : 'text-gray-500'}`}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {listingType === 'Sell' && (
            <View className="gap-2">
              <Text className="text-sm font-bold text-gray-500 ml-1">Price ($)</Text>
              <TextInput 
                className="bg-[#f4faff] border border-gray-200 rounded-xl px-4 py-3 text-base"
                placeholder="0.00"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />
            </View>
          )}

          <View className="gap-2">
            <Text className="text-sm font-bold text-gray-500 ml-1">Condition</Text>
            <View className="flex-row gap-1 bg-[#f4faff] p-1 rounded-xl border border-gray-200">
              {['New', 'Good', 'Fair'].map((cond) => (
                <TouchableOpacity 
                  key={cond}
                  onPress={() => setCondition(cond)}
                  className={`flex-1 py-2 rounded-lg items-center ${condition === cond ? 'bg-[#006d3e]' : 'bg-transparent'}`}
                >
                  <Text className={`font-bold ${condition === cond ? 'text-white' : 'text-gray-500'}`}>{cond}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-sm font-bold text-gray-500 ml-1">Description</Text>
            <TextInput 
              className="bg-[#f4faff] border border-gray-200 rounded-xl px-4 py-3 text-base"
              placeholder="Tell us more about the item..."
              multiline
              numberOfLines={4}
              style={{ textAlignVertical: 'top' }}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View className="gap-2">
            <Text className="text-sm font-bold text-gray-500 ml-1">Location</Text>
            <View className="h-40 rounded-xl bg-gray-200 overflow-hidden relative">
              <View className="absolute inset-0 bg-[#dff1fb] items-center justify-center border border-[#bec9be]/30">
                <Ionicons name="map" size={48} color="#00522d" className="opacity-20" />
              </View>
              <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Ionicons name="location" size={32} color="#ba1a1a" />
              </View>
            </View>
            <Text className="text-xs text-gray-500 font-bold ml-1">Main Campus, Building A</Text>
          </View>

        </View>

        <TouchableOpacity 
          onPress={handleSubmit}
          disabled={loading}
          className={`w-full py-4 rounded-xl items-center shadow-sm mb-4 ${loading ? 'bg-[#006d3e]/50' : 'bg-[#006d3e]'}`}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-bold text-lg">Publish Listing</Text>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity className="w-full py-4 rounded-xl items-center border border-gray-300 bg-white">
          <Text className="text-gray-600 font-bold text-lg">Save Draft</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
