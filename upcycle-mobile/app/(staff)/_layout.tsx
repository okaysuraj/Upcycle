import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <View className={`items-center justify-center pt-2 ${focused ? 'opacity-100' : 'opacity-50'}`}>
      <Text className="text-2xl">{emoji}</Text>
    </View>
  );
}

export default function StaffLayout() {
  const insets = useSafeAreaInsets();
  
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
          height: 60 + insets.bottom,
          paddingBottom: 8 + insets.bottom,
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
        name="tasks/index"
        options={{ title: 'Tasks', tabBarIcon: ({ focused }) => <TabIcon emoji="✅" focused={focused} /> }}
      />
      <Tabs.Screen
        name="waste/index"
        options={{ title: 'Waste', tabBarIcon: ({ focused }) => <TabIcon emoji="♻️" focused={focused} /> }}
      />
      <Tabs.Screen
        name="campuses/index"
        options={{ title: 'Campuses', tabBarIcon: ({ focused }) => <TabIcon emoji="🏢" focused={focused} /> }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{ title: 'Settings', tabBarIcon: ({ focused }) => <TabIcon emoji="⚙️" focused={focused} /> }}
      />
      {/* Hidden Screens */}
      <Tabs.Screen name="alerts/create" options={{ href: null }} />
      <Tabs.Screen name="alerts/index" options={{ href: null }} />
      <Tabs.Screen name="analytics/comparison" options={{ href: null }} />
      <Tabs.Screen name="analytics/departments" options={{ href: null }} />
      <Tabs.Screen name="analytics" options={{ href: null }} />
      <Tabs.Screen name="approvals" options={{ href: null }} />
      <Tabs.Screen name="audit/index" options={{ href: null }} />
      <Tabs.Screen name="audit/new" options={{ href: null }} />
      <Tabs.Screen name="audit/[id]" options={{ href: null }} />
      <Tabs.Screen name="benchmarking" options={{ href: null }} />
      <Tabs.Screen name="bins/add" options={{ href: null }} />
      <Tabs.Screen name="bins/index" options={{ href: null }} />
      <Tabs.Screen name="bins/[id]" options={{ href: null }} />
      <Tabs.Screen name="buildings/add-edit" options={{ href: null }} />
      <Tabs.Screen name="buildings/index" options={{ href: null }} />
      <Tabs.Screen name="campus-analytics" options={{ href: null }} />
      <Tabs.Screen name="campus-dashboard" options={{ href: null }} />
      <Tabs.Screen name="campus-map" options={{ href: null }} />
      <Tabs.Screen name="campus-profile" options={{ href: null }} />
      <Tabs.Screen name="campus-reports" options={{ href: null }} />
      <Tabs.Screen name="campuses/heatmap" options={{ href: null }} />
      <Tabs.Screen name="campuses/map" options={{ href: null }} />
      <Tabs.Screen name="campuses/[id]" options={{ href: null }} />
      <Tabs.Screen name="comparison" options={{ href: null }} />
      <Tabs.Screen name="compliance/index" options={{ href: null }} />
      <Tabs.Screen name="contracts/index" options={{ href: null }} />
      <Tabs.Screen name="contracts/[id]" options={{ href: null }} />
      <Tabs.Screen name="dashboard/widgets" options={{ href: null }} />
      <Tabs.Screen name="directory/index" options={{ href: null }} />
      <Tabs.Screen name="directory/[id]" options={{ href: null }} />
      <Tabs.Screen name="documents/index" options={{ href: null }} />
      <Tabs.Screen name="documents/upload" options={{ href: null }} />
      <Tabs.Screen name="esg/carbon" options={{ href: null }} />
      <Tabs.Screen name="esg/energy" options={{ href: null }} />
      <Tabs.Screen name="esg/export" options={{ href: null }} />
      <Tabs.Screen name="esg/index" options={{ href: null }} />
      <Tabs.Screen name="esg/report" options={{ href: null }} />
      <Tabs.Screen name="esg/score" options={{ href: null }} />
      <Tabs.Screen name="esg/stats" options={{ href: null }} />
      <Tabs.Screen name="esg/water" options={{ href: null }} />
      <Tabs.Screen name="events/attendees/[id]" options={{ href: null }} />
      <Tabs.Screen name="events/create" options={{ href: null }} />
      <Tabs.Screen name="events/manage" options={{ href: null }} />
      <Tabs.Screen name="facilities/energy" options={{ href: null }} />
      <Tabs.Screen name="facilities/index" options={{ href: null }} />
      <Tabs.Screen name="facilities/sensors" options={{ href: null }} />
      <Tabs.Screen name="facilities/water" options={{ href: null }} />
      <Tabs.Screen name="fleet/index" options={{ href: null }} />
      <Tabs.Screen name="fleet/[id]" options={{ href: null }} />
      <Tabs.Screen name="help/api-docs" options={{ href: null }} />
      <Tabs.Screen name="help/support-tickets" options={{ href: null }} />
      <Tabs.Screen name="help/system-status" options={{ href: null }} />
      <Tabs.Screen name="help/ticket/[id]" options={{ href: null }} />
      <Tabs.Screen name="incidents/index" options={{ href: null }} />
      <Tabs.Screen name="incidents/report" options={{ href: null }} />
      <Tabs.Screen name="incidents/[id]" options={{ href: null }} />
      <Tabs.Screen name="inspections/index" options={{ href: null }} />
      <Tabs.Screen name="inspections/new" options={{ href: null }} />
      <Tabs.Screen name="inspections/[id]" options={{ href: null }} />
      <Tabs.Screen name="inventory/add" options={{ href: null }} />
      <Tabs.Screen name="inventory/index" options={{ href: null }} />
      <Tabs.Screen name="inventory/[id]" options={{ href: null }} />
      <Tabs.Screen name="log-waste" options={{ href: null }} />
      <Tabs.Screen name="logistics/routes" options={{ href: null }} />
      <Tabs.Screen name="logistics/schedule" options={{ href: null }} />
      <Tabs.Screen name="maintenance/index" options={{ href: null }} />
      <Tabs.Screen name="maintenance/[id]" options={{ href: null }} />
      <Tabs.Screen name="reports/custom" options={{ href: null }} />
      <Tabs.Screen name="reports/index" options={{ href: null }} />
      <Tabs.Screen name="route" options={{ href: null }} />
      <Tabs.Screen name="scan" options={{ href: null }} />
      <Tabs.Screen name="settings/notifications" options={{ href: null }} />
      <Tabs.Screen name="settings/security" options={{ href: null }} />
      <Tabs.Screen name="settings/team" options={{ href: null }} />
      <Tabs.Screen name="shifts/index" options={{ href: null }} />
      <Tabs.Screen name="shifts/swap" options={{ href: null }} />
      <Tabs.Screen name="tasks/approvals" options={{ href: null }} />
      <Tabs.Screen name="terms-policies" options={{ href: null }} />
      <Tabs.Screen name="training/index" options={{ href: null }} />
      <Tabs.Screen name="training/module" options={{ href: null }} />
      <Tabs.Screen name="users/index" options={{ href: null }} />
      <Tabs.Screen name="users/[id]" options={{ href: null }} />
      <Tabs.Screen name="vendor-verification" options={{ href: null }} />
      <Tabs.Screen name="vendors/index" options={{ href: null }} />
      <Tabs.Screen name="vendors/[id]" options={{ href: null }} />
      <Tabs.Screen name="waste/add" options={{ href: null }} />
      <Tabs.Screen name="waste/heatmap" options={{ href: null }} />
      <Tabs.Screen name="waste/history" options={{ href: null }} />
      <Tabs.Screen name="waste/live-collection" options={{ href: null }} />
      <Tabs.Screen name="waste/pickup-alerts" options={{ href: null }} />
      <Tabs.Screen name="waste/pickup-proof" options={{ href: null }} />
      <Tabs.Screen name="waste/route" options={{ href: null }} />
      <Tabs.Screen name="waste/scan" options={{ href: null }} />
    </Tabs>
  );
}
