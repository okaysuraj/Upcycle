import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OtpVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      router.push('/(student)');
    }, 1000);
  };

  const handleResend = () => {
    setTimeLeft(45);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff]">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center px-5 h-16 border-b border-[#bec9be]/30 bg-[#f4faff]">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full active:bg-[#dff1fb]">
          <MaterialIcons name="arrow-back" size={24} color="#00522d" />
        </TouchableOpacity>
        <Text className="text-xs font-bold uppercase tracking-wider text-[#00522d] bg-[#dff1fb] px-3 py-1 rounded-full">
          Verification
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-8" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-[#dff1fb] rounded-3xl items-center justify-center mb-4 shadow-sm">
            <MaterialIcons name="mark-email-unread" size={40} color="#00522d" />
          </View>
          <Text className="text-3xl font-bold text-[#0d1e25] tracking-tight text-center">Verify Your Account</Text>
          <Text className="text-xs text-[#556158] text-center mt-1 max-w-[280px] leading-relaxed">
            Enter the 6-digit confirmation code dispatched to your institutional email.
          </Text>
        </View>

        {/* OTP Input Grid */}
        <View className="bg-white rounded-[32px] p-6 border border-[#bec9be]/30 shadow-sm mb-6">
          <View className="flex-row justify-between gap-2 mb-6">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                className="w-11 h-14 text-center text-xl font-bold bg-[#f4faff] border border-[#bec9be]/40 text-[#00522d] rounded-2xl focus:border-[#00522d] focus:bg-white"
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
            className={`w-full py-4 rounded-full flex-row items-center justify-center gap-2 shadow-md ${
              otp.join('').length === 6 && !isVerifying ? 'bg-[#00522d]' : 'bg-[#00522d] opacity-50'
            }`}
          >
            <Text className="text-white font-bold text-sm">
              {isVerifying ? 'Verifying...' : 'Verify Code'}
            </Text>
            {!isVerifying && <MaterialIcons name="check-circle" size={18} color="white" />}
          </TouchableOpacity>

          <View className="items-center mt-4">
            {timeLeft > 0 ? (
              <Text className="text-xs text-[#556158]">
                Resend code in <Text className="font-bold text-[#00522d]">00:{timeLeft.toString().padStart(2, '0')}</Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text className="text-xs font-bold text-[#00522d]">Resend Verification Code</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
