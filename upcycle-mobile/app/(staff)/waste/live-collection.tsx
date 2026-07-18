import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LiveCollectionTracking() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [arrivedModal, setArrivedModal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [collected, setCollected] = useState(false);

  const handleConfirmCollection = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCollected(true);
      setTimeout(() => {
        setArrivedModal(false);
        setCollected(false);
      }, 1000);
    }, 1500);
  };

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Background Map */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.4285,
          longitude: -122.1707,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        customMapStyle={[]}
      >
        <Polyline
          coordinates={[
            { latitude: 37.4275, longitude: -122.1697 },
            { latitude: 37.4285, longitude: -122.1707 },
          ]}
          strokeColor="#006d3e"
          strokeWidth={5}
        />
        <Marker coordinate={{ latitude: 37.4285, longitude: -122.1707 }}>
          <View className="bg-red-500 w-8 h-8 rounded-full items-center justify-center border-2 border-white shadow-lg">
            <Ionicons name="location" size={20} color="white" />
          </View>
        </Marker>
      </MapView>
      
      {/* Map Gradient Overlay */}
      <View className="absolute inset-0 bg-white/10 pointer-events-none" />

      {/* Header Overlays */}
      <View style={{ paddingTop: insets.top }} className="absolute top-4 left-4 right-4 z-10 gap-2 pointer-events-box-none">
        <View className="bg-white/90 rounded-2xl p-4 shadow-sm flex-row items-center justify-between border border-gray-200">
          <View>
            <Text className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Current Route</Text>
            <Text className="text-[#00522d] font-bold text-lg">North Quad Sector B</Text>
          </View>
          <View className="items-end">
            <Text className="text-xs text-gray-500 font-bold mb-1">Progress</Text>
            <Text className="text-xl font-bold text-[#0d1e25]">12 / 24 <Text className="text-sm font-normal text-gray-400">Bins</Text></Text>
          </View>
        </View>

        {/* Floating Navigation Directions */}
        <View className="bg-[#00522d] rounded-2xl p-4 flex-row items-center shadow-lg">
          <Ionicons name="return-down-forward" size={32} color="white" />
          <View className="ml-4">
            <Text className="text-white/80 text-xs uppercase font-bold">Next Turn in 150m</Text>
            <Text className="text-white font-bold text-xl">Right onto Science Walk</Text>
          </View>
        </View>
      </View>

      {/* Next Stop Bottom Card */}
      <View className="absolute bottom-6 left-4 right-4 z-20">
        <View className="bg-white/95 rounded-3xl p-6 shadow-xl border border-[#a5d6a7]/30">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <View className="flex-row items-center gap-2 mb-1">
                <View className="bg-red-100 px-2 py-0.5 rounded-full">
                  <Text className="text-red-800 text-[10px] font-bold">85% FULL</Text>
                </View>
                <View className="bg-[#d9e6da] px-2 py-0.5 rounded-full">
                  <Text className="text-[#5b675e] text-[10px] font-bold">ORGANIC</Text>
                </View>
              </View>
              <Text className="text-xl font-bold text-[#0d1e25]">Green Lab Entrance</Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="time-outline" size={14} color="#6f7a70" />
                <Text className="text-gray-500 text-sm ml-1">Estimated arrival: 3 mins</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-[#d9ebf5] w-12 h-12 rounded-full items-center justify-center">
              <Ionicons name="navigate" size={20} color="#00522d" />
            </TouchableOpacity>
          </View>

          <View className="bg-[#e7f6ff] rounded-2xl p-4 mb-6 flex-row items-center">
            <View className="w-12 h-12 bg-[#006d3e]/20 rounded-xl items-center justify-center">
              <Ionicons name="trash" size={24} color="#006d3e" />
            </View>
            <View className="flex-1 ml-4">
              <View className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <View className="h-full bg-[#006d3e] w-[85%]" />
              </View>
              <View className="flex-row justify-between mt-2">
                <Text className="text-xs text-gray-500 font-bold">Bin #GL-402</Text>
                <Text className="text-xs text-[#00522d] font-bold">High Priority</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity 
            className="bg-[#00522d] py-4 rounded-full flex-row justify-center items-center shadow-lg"
            onPress={() => setArrivedModal(true)}
          >
            <Ionicons name="checkmark-circle" size={20} color="white" />
            <Text className="text-white font-bold text-lg ml-2">Arrived at Stop</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Arrived Modal Action Sheet */}
      <Modal visible={arrivedModal} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/20">
          <View className="bg-white rounded-t-[32px] p-8 shadow-2xl">
            <View className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />
            <Text className="text-2xl font-bold text-center mb-2 text-[#0d1e25]">Collection in Progress</Text>
            <Text className="text-gray-500 text-center mb-8">Confirm the bin has been emptied and the area is clean.</Text>
            
            <View className="gap-4 mb-8">
              <TouchableOpacity 
                className={`py-5 rounded-full flex-row items-center justify-center ${collected ? 'bg-[#2eb872]' : 'bg-[#00522d]'}`}
                onPress={handleConfirmCollection}
                disabled={processing || collected}
              >
                {processing ? (
                  <>
                    <Text className="text-white font-bold text-lg">Processing...</Text>
                  </>
                ) : collected ? (
                  <>
                    <Ionicons name="checkmark-circle" size={24} color="white" />
                    <Text className="text-white font-bold text-lg ml-2">Route Updated</Text>
                  </>
                ) : (
                  <>
                    <Ionicons name="sync" size={24} color="white" />
                    <Text className="text-white font-bold text-lg ml-2">Confirm Collection</Text>
                  </>
                )}
              </TouchableOpacity>
              
              {!processing && !collected && (
                <TouchableOpacity 
                  className="bg-[#d9ebf5] py-5 rounded-full items-center justify-center"
                  onPress={() => setArrivedModal(false)}
                >
                  <Text className="text-[#0d1e25] font-bold text-lg">Cancel</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
