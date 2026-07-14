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

export default function StaffLayout() {
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
        options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabIcon emoji="📊" focused={focused} /> }}
      />
      <Tabs.Screen
        name="tasks"
        options={{ title: 'Tasks', tabBarIcon: ({ focused }) => <TabIcon emoji="✅" focused={focused} /> }}
      />
      <Tabs.Screen
        name="waste"
        options={{ title: 'Waste', tabBarIcon: ({ focused }) => <TabIcon emoji="♻️" focused={focused} /> }}
      />
      <Tabs.Screen
        name="campuses"
        options={{ title: 'Campuses', tabBarIcon: ({ focused }) => <TabIcon emoji="🏢" focused={focused} /> }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: 'Settings', tabBarIcon: ({ focused }) => <TabIcon emoji="⚙️" focused={focused} /> }}
      />
      
      {/* Hidden Screens */}
      <Tabs.Screen name="esg" options={{ href: null }} />
      <Tabs.Screen name="events" options={{ href: null }} />
      <Tabs.Screen name="inventory" options={{ href: null }} />
      <Tabs.Screen name="maintenance" options={{ href: null }} />
      <Tabs.Screen name="reports" options={{ href: null }} />
      <Tabs.Screen name="users" options={{ href: null }} />
    </Tabs>
  );
}
