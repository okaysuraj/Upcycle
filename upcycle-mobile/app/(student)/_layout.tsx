import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

function TabIcon({ emoji, focused }) {
  return (
    <View className={`items-center justify-center pt-2 ${focused ? 'opacity-100' : 'opacity-50'}`}>
      <Text className="text-2xl">{emoji}</Text>
    </View>
  );
}

export default function StudentLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#059669',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#f3f4f6',
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} /> }}
      />
      <Tabs.Screen
        name="events"
        options={{ title: 'Events', tabBarIcon: ({ focused }) => <TabIcon emoji="🎟️" focused={focused} /> }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{ title: 'Market', tabBarIcon: ({ focused }) => <TabIcon emoji="🛍️" focused={focused} /> }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{ title: 'Rank', tabBarIcon: ({ focused }) => <TabIcon emoji="🏆" focused={focused} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile', tabBarIcon: ({ focused }) => <TabIcon emoji="🎓" focused={focused} /> }}
      />
      
      {/* Hidden Screens */}
      <Tabs.Screen name="notifications" options={{ href: null }} />
      <Tabs.Screen name="challenges" options={{ href: null }} />
      <Tabs.Screen name="faq" options={{ href: null }} />
      <Tabs.Screen name="support" options={{ href: null }} />
      <Tabs.Screen name="social" options={{ href: null }} />
      <Tabs.Screen name="waste" options={{ href: null }} />
      <Tabs.Screen name="settings" options={{ href: null }} />
    </Tabs>
  );
}
