import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function OtpVerification() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(59);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only keep the last character
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join('');
    if (code.length === 6) {
      setIsVerifying(true);
      // Simulate verification delay
      setTimeout(async () => {
        setIsVerifying(false);
        // Here we would typically verify the OTP with Firebase/backend
        // For now, let's just log them in
        await login('test@example.com', 'password'); // Dummy login for flow
        router.replace('/(student)');
      }, 1500);
    }
  };

  const handleResend = () => {
    setTimeLeft(59);
    // Trigger resend logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-5 h-16 border-b border-[#bccabd]/30 bg-[#f4faff] z-50">
          <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
              <MaterialIcons name="arrow-back" size={24} color="#006d3e" />
            </TouchableOpacity>
            <View className="flex-row items-center gap-2">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLuaeWGEBHEzwqBPQAk8QsJgcjKH1dH53_ec81VNIPmrmp8NEDSB5RWseIPhSajfG2n3WOy64AWqjK6D7sWGEN6SewlhMQg_zIDtiR7YpHOMy_VQvNNFFD_rTqXRNqLRoFIFQtTWr7xG1rfQ-Rpkp8VzWiE9lZc7HJhdjkvcCFG2J6_tnSRu8Bue54Ws1t8FqvYXHfw2j7qjNUrGElb2ZNqWynH73bZCfB8Oblg_GX_GbE-QkeIgbSzy3HE' }}
                className="w-8 h-8"
                resizeMode="contain"
              />
              <Text className="text-xl font-bold text-[#006d3e]">Upcycle</Text>
            </View>
          </View>
          <Text className="text-sm font-medium text-[#3d4a40]">Verify Email</Text>
        </View>

        <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
          <View className="w-full max-w-md self-center">
            
            {/* Graphic Section */}
            <View className="items-center mb-10">
              <View className="relative w-32 h-32 items-center justify-center bg-[#2eb872]/10 rounded-full">
                <View className="absolute inset-0 bg-[#006d3e]/5 rounded-full" />
                <MaterialIcons name="mark-email-unread" size={64} color="#006d3e" />
              </View>
            </View>

            <View className="items-center mb-10">
              <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Verification Code</Text>
              <Text className="text-base text-[#3d4a40] text-center px-4">
                We've sent a code to your email. Please enter the 6-digit verification code below to secure your account.
              </Text>
            </View>

            {/* OTP Input Section */}
            <View className="mb-10">
              <View className="flex-row justify-between gap-2 px-2 mb-8">
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => inputRefs.current[index] = ref}
                    className="w-12 h-16 sm:w-14 sm:h-20 text-center text-2xl font-bold bg-[#e7f6ff] border-b-2 border-[#bccabd] text-[#006d3e] rounded-xl focus:border-[#006d3e]"
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={(value) => handleOtpChange(value, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                ))}
              </View>

              <TouchableOpacity 
                disabled={otp.join('').length < 6 || isVerifying}
                onPress={handleVerify}
                className={`w-full h-14 rounded-full flex-row items-center justify-center gap-2 shadow-sm mb-4 ${
                  otp.join('').length === 6 && !isVerifying ? 'bg-[#006d3e]' : 'bg-[#006d3e] opacity-50'
                }`}
              >
                <Text className="text-white font-bold text-lg">
                  {isVerifying ? 'Verifying...' : 'Verify'}
                </Text>
                {!isVerifying && <MaterialIcons name="check-circle" size={20} color="white" />}
              </TouchableOpacity>

              <View className="items-center">
                {timeLeft > 0 ? (
                  <Text className="text-sm text-[#3d4a40]">
                    Resend code in <Text className="font-bold text-[#006d3e]">00:{timeLeft.toString().padStart(2, '0')}</Text>
                  </Text>
                ) : (
                  <TouchableOpacity onPress={handleResend}>
                    <Text className="text-sm text-[#006d3e] underline">Didn't receive the code? Resend</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Context Card */}
            <View className="p-4 bg-[#d9e6da] rounded-xl flex-row items-center gap-4">
              <View className="p-2 bg-white rounded-full">
                <MaterialIcons name="shield" size={24} color="#006d3e" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#131e17]">Secure Login</Text>
                <Text className="text-xs text-[#3e4a41]">This verification step helps protect your data and sustainability impact records.</Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
