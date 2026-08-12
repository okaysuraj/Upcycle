import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.back(1.5)),
        useNativeDriver: true,
      })
    ]).start();

    // After 2.5 seconds, navigate to the auth flow
    // (If the user is already authenticated, _layout.tsx will have already caught it and redirected them!)
    const timer = setTimeout(() => {
      // Fade out before redirect
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Route directly to login page as requested
        router.replace('/(auth)/login');
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, router]);

  return (
    <View className="flex-1 items-center justify-center bg-[#00522d]">
      <Animated.View 
        className="items-center justify-center"
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }}
      >
        <View className="w-24 h-24 bg-white rounded-3xl items-center justify-center mb-6 shadow-xl shadow-black/20">
          <Text className="text-[#00522d] text-5xl font-black">U</Text>
        </View>
        <Text className="text-4xl font-black text-white tracking-wider mb-2">Upcycle</Text>
        <Text className="text-white/80 text-lg font-medium tracking-widest">ECO-SMART CAMPUS</Text>
      </Animated.View>
    </View>
  );
}
