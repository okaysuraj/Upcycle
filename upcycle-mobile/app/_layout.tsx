import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import '../global.css';

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const isRoot = !segments[0]; // If there are no segments, we are at the root
    
    if (!user && !inAuthGroup && !isRoot) {
      // Redirect to login if not authenticated and trying to access protected routes
      router.replace('/(auth)/login');
    } else if (user && (inAuthGroup || isRoot)) {
      // Redirect away from login/splash if authenticated
      if (['PLATFORM_ADMIN', 'CAMPUS_ADMIN', 'WASTE_STAFF', 'ADMIN', 'STAFF'].includes(user.role)) {
        router.replace('/(staff)');
      } else if (user.role === 'VENDOR') {
        router.replace('/(vendor)');
      } else {
        router.replace('/(student)');
      }
    }
  }, [user, loading, segments]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-emerald-600">Loading Upcycle...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(staff)" />
      <Stack.Screen name="(student)" />
      <Stack.Screen name="(vendor)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
