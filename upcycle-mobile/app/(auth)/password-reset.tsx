import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PasswordReset() {
  const router = useRouter();
  
  const [step, setStep] = useState(1); // 1: Email, 2: New Password, 3: Success
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSendLink = () => {
    if (email) setStep(2);
  };

  const handleResetPassword = () => {
    if (password && password === confirmPassword) {
      setStep(3);
    }
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
        </View>

        <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
          <View className="w-full max-w-[480px] self-center">
            
            {step === 1 && (
              <View className="bg-white/80 rounded-[24px] p-8 mb-8 border border-[#bccabd]/30 shadow-sm">
                <View className="mb-8">
                  <View className="w-16 h-16 bg-[#dff1fb] rounded-2xl flex items-center justify-center mb-6">
                    <MaterialIcons name="lock-reset" size={32} color="#006d3e" />
                  </View>
                  <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Forgot Password?</Text>
                  <Text className="text-base text-[#3d4a40]">No worries, it happens. Enter your email below and we'll send you instructions to reset your password.</Text>
                </View>

                <View className="space-y-6">
                  <View>
                    <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">Email Address</Text>
                    <View className="flex-row items-center bg-[#f4faff] border border-[#bccabd] rounded-xl h-14 px-4">
                      <MaterialIcons name="mail" size={24} color="#3d4a40" />
                      <TextInput 
                        className="flex-1 ml-3 text-base text-[#0d1e25]"
                        placeholder="name@example.com"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  </View>

                  <TouchableOpacity 
                    onPress={handleSendLink}
                    disabled={!email}
                    className={`w-full h-14 rounded-full flex-row items-center justify-center gap-2 mt-4 ${email ? 'bg-[#006d3e]' : 'bg-[#006d3e] opacity-50'}`}
                  >
                    <Text className="text-white font-bold text-base">Send Reset Link</Text>
                    <MaterialIcons name="send" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {step === 2 && (
              <View className="bg-white/80 rounded-[24px] p-8 mb-8 border border-[#bccabd]/30 shadow-sm">
                <View className="mb-8">
                  <View className="w-16 h-16 bg-[#dff1fb] rounded-2xl flex items-center justify-center mb-6">
                    <MaterialIcons name="shield" size={32} color="#006d3e" />
                  </View>
                  <Text className="text-3xl font-bold text-[#0d1e25] mb-2">Reset Password</Text>
                  <Text className="text-base text-[#3d4a40]">Please choose a strong password you haven't used before for this account.</Text>
                </View>

                <View className="space-y-4">
                  <View>
                    <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">New Password</Text>
                    <View className="flex-row items-center bg-[#f4faff] border border-[#bccabd] rounded-xl h-14 px-4">
                      <MaterialIcons name="key" size={24} color="#3d4a40" />
                      <TextInput 
                        className="flex-1 ml-3 text-base text-[#0d1e25]"
                        placeholder="Min. 8 characters"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                      />
                      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="#3d4a40" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View>
                    <Text className="text-sm font-medium text-[#3d4a40] ml-1 mb-2">Confirm Password</Text>
                    <View className="flex-row items-center bg-[#f4faff] border border-[#bccabd] rounded-xl h-14 px-4">
                      <MaterialIcons name="lock" size={24} color="#3d4a40" />
                      <TextInput 
                        className="flex-1 ml-3 text-base text-[#0d1e25]"
                        placeholder="Repeat new password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showPassword}
                      />
                    </View>
                  </View>

                  <View className="px-1 mt-2 mb-4">
                    <Text className="text-xs text-[#3d4a40] mb-2">Strength: <Text className="text-[#006d3e] font-bold">Strong</Text></Text>
                    <View className="h-2 w-full flex-row gap-1">
                      <View className="h-full flex-1 bg-[#006d3e] rounded-full" />
                      <View className="h-full flex-1 bg-[#006d3e] rounded-full" />
                      <View className="h-full flex-1 bg-[#006d3e] rounded-full" />
                      <View className="h-full flex-1 bg-[#d4e5ef] rounded-full" />
                    </View>
                  </View>

                  <TouchableOpacity 
                    onPress={handleResetPassword}
                    disabled={!password || password !== confirmPassword}
                    className={`w-full h-14 rounded-full flex items-center justify-center mt-2 ${password && password === confirmPassword ? 'bg-[#006d3e]' : 'bg-[#006d3e] opacity-50'}`}
                  >
                    <Text className="text-white font-bold text-base">Reset Password</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => setStep(1)} className="w-full flex-row items-center justify-center gap-2 mt-6">
                  <MaterialIcons name="arrow-back" size={16} color="#3d4a40" />
                  <Text className="text-[#3d4a40]">Back to email entry</Text>
                </TouchableOpacity>
              </View>
            )}

            {step === 3 && (
              <View className="bg-white/80 rounded-[24px] p-10 text-center items-center shadow-sm border border-[#bccabd]/30">
                <View className="w-20 h-20 bg-[#7afbae] rounded-full flex items-center justify-center mb-8">
                  <MaterialIcons name="check-circle" size={40} color="#00210f" />
                </View>
                <Text className="text-3xl font-bold text-[#0d1e25] mb-4 text-center">Password Updated!</Text>
                <Text className="text-base text-[#3d4a40] mb-10 text-center">Your password has been successfully reset. You can now log in with your new credentials.</Text>
                
                <TouchableOpacity onPress={() => router.replace('/(auth)/login')} className="w-full h-14 bg-[#006d3e] rounded-full items-center justify-center">
                  <Text className="text-white font-bold text-base">Back to Login</Text>
                </TouchableOpacity>
              </View>
            )}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
