import { Stack, useRouter, useSegments, type ErrorBoundaryProps } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import '../global.css';
import { ThemeProvider } from '../context/ThemeContext';
import { useFonts } from 'expo-font';

export function ErrorBoundary({ retry }: ErrorBoundaryProps) {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#fafaf8',
        gap: 16,
      }}
    >
      <Text
        accessibilityRole="header"
        style={{ fontSize: 24, fontWeight: '600', color: '#191c1a' }}
      >
        This screen could not load
      </Text>
      <Text style={{ fontSize: 16, color: '#5e6560' }}>
        Refresh Upcycle to try again. Your saved records remain in the database.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => {
          void retry();
        }}
        style={{ minHeight: 44, borderRadius: 14, padding: 14, backgroundColor: '#15803d' }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Reload Upcycle</Text>
      </Pressable>
    </View>
  );
}

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const isRoot = !segments[0];

    if (!user && !inAuthGroup && !isRoot) {
      router.replace('/(auth)/login');
    } else if (
      user &&
      (isRoot ||
        (inAuthGroup &&
          ['login', 'signup', 'welcome', 'choose-role', 'onboarding'].includes(
            String((segments as string[])[1])
          )) ||
        (segments[0] === '(admin)' && !['ADMIN', 'PLATFORM_ADMIN'].includes(user.role)) ||
        (segments[0] === '(staff)' &&
          !['ADMIN', 'PLATFORM_ADMIN', 'CAMPUS_ADMIN', 'WASTE_STAFF', 'STAFF'].includes(user.role)))
    ) {
      if (['PLATFORM_ADMIN', 'ADMIN'].includes(user.role)) {
        router.replace('/(admin)');
      } else if (['CAMPUS_ADMIN', 'WASTE_STAFF', 'STAFF'].includes(user.role)) {
        router.replace('/(staff)');
      } else if (user.role === 'VENDOR') {
        router.replace('/(vendor)');
      } else {
        router.replace('/(student)');
      }
    }
  }, [user, loading, segments, router]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-[#fafaf8] dark:bg-[#121413]">
        <ActivityIndicator size="large" color="#15803d" />
        <Text className="text-xs font-semibold text-stone-500 dark:text-stone-400 mt-3 tracking-wide">
          Connecting to Upcycle Campus...
        </Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(admin)" />
      <Stack.Screen name="(staff)" />
      <Stack.Screen name="(student)" />
      <Stack.Screen name="(vendor)" />
      <Stack.Screen name="user" />
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Jakarta-400': require('../assets/fonts/Jakarta-400.ttf'),
    'Jakarta-500': require('../assets/fonts/Jakarta-500.ttf'),
    'Jakarta-600': require('../assets/fonts/Jakarta-600.ttf'),
    'Jakarta-700': require('../assets/fonts/Jakarta-700.ttf'),
  });
  if (!fontsLoaded && !fontError)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}
