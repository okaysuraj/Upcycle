import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function QRScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View className="flex-1 bg-[#0d1e25]" />;
  }

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 bg-[#f4faff] justify-center items-center p-6">
        <View className="w-16 h-16 rounded-full bg-[#dff1fb] items-center justify-center mb-4">
          <Ionicons name="camera" size={32} color="#00522d" />
        </View>
        <Text className="text-2xl font-bold text-[#0d1e25] text-center mb-2">Camera Access Required</Text>
        <Text className="text-xs text-[#556158] text-center mb-6 max-w-xs">
          Upcycle requires camera permissions to scan IoT Smart Bin QR codes on campus.
        </Text>
        <TouchableOpacity 
          onPress={requestPermission}
          className="px-6 py-3.5 bg-[#00522d] rounded-full shadow-md"
        >
          <Text className="text-white font-bold text-xs">Grant Camera Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleBarcodeScanned = ({ data }: { type: string; data: string }) => {
    router.push({
      pathname: '/(staff)/log-waste',
      params: { binId: data || 'BIN-104' }
    });
  };

  return (
    <View className="flex-1 bg-black">
      {/* @ts-ignore: React 19 typing mismatch */}
      <CameraView
        className="flex-1"
        facing="back"
        onBarcodeScanned={handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      />

      {/* Overlay UI */}
      <SafeAreaView className="absolute inset-0 justify-between p-5 pointer-events-box-none">
        {/* Top Control Bar */}
        <View className="flex-row justify-between items-center bg-black/40 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
          <TouchableOpacity onPress={() => router.back()} className="p-1.5 rounded-full bg-white/20">
            <MaterialIcons name="arrow-back" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-xs font-bold text-white uppercase tracking-wider">Target Smart Bin QR</Text>
          <TouchableOpacity 
            onPress={() => handleBarcodeScanned({ type: 'qr', data: 'BIN-101' })}
            className="px-3 py-1 bg-[#00522d] rounded-full"
          >
            <Text className="text-[10px] font-bold text-white">Manual</Text>
          </TouchableOpacity>
        </View>

        {/* Scan Reticle */}
        <View className="items-center justify-center">
          <View className="w-64 h-64 border-2 border-[#9cf6ba] rounded-3xl bg-transparent relative items-center justify-center">
            <View className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
            <View className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
            <View className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
            <View className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />
            <Text className="text-white/60 text-[11px] font-medium">Align QR inside frame</Text>
          </View>
        </View>

        {/* Bottom Tips */}
        <View className="bg-black/50 p-4 rounded-2xl border border-white/10 items-center">
          <Text className="text-white text-xs font-bold text-center">Encrypted IoT Telemetry Tag</Text>
          <Text className="text-white/70 text-[10px] text-center mt-0.5">
            Auto-syncs fill level readings with Central Facilities.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
