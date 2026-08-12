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

export default function StudentLayout() {
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
        options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} /> }}
      />
      <Tabs.Screen
        name="events/index"
        options={{ title: 'Events', tabBarIcon: ({ focused }) => <TabIcon emoji="🎟️" focused={focused} /> }}
      />
      <Tabs.Screen
        name="marketplace/index"
        options={{ title: 'Market', tabBarIcon: ({ focused }) => <TabIcon emoji="🛍️" focused={focused} /> }}
      />
      <Tabs.Screen
        name="leaderboard/index"
        options={{ title: 'Rank', tabBarIcon: ({ focused }) => <TabIcon emoji="🏆" focused={focused} /> }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{ title: 'Profile', tabBarIcon: ({ focused }) => <TabIcon emoji="🎓" focused={focused} /> }}
      />
      
      {/* Hidden Screens */}
      <Tabs.Screen name="analytics/carbon" options={{ href: null }} />
      <Tabs.Screen name="analytics/esg" options={{ href: null }} />
      <Tabs.Screen name="analytics/index" options={{ href: null }} />
      <Tabs.Screen name="analytics/revenue" options={{ href: null }} />
      <Tabs.Screen name="analytics/score" options={{ href: null }} />
      <Tabs.Screen name="analytics/trends" options={{ href: null }} />
      <Tabs.Screen name="analytics/waste" options={{ href: null }} />
      <Tabs.Screen name="analytics/water" options={{ href: null }} />
      <Tabs.Screen name="badges/[id]" options={{ href: null }} />
      <Tabs.Screen name="challenges/history" options={{ href: null }} />
      <Tabs.Screen name="challenges/index" options={{ href: null }} />
      <Tabs.Screen name="challenges/[id]" options={{ href: null }} />
      <Tabs.Screen name="community/course" options={{ href: null }} />
      <Tabs.Screen name="community/create-post" options={{ href: null }} />
      <Tabs.Screen name="community/event-details" options={{ href: null }} />
      <Tabs.Screen name="community/index" options={{ href: null }} />
      <Tabs.Screen name="community/leaderboard" options={{ href: null }} />
      <Tabs.Screen name="community/learning" options={{ href: null }} />
      <Tabs.Screen name="education/course-detail" options={{ href: null }} />
      <Tabs.Screen name="education/learning-hub" options={{ href: null }} />
      <Tabs.Screen name="education/seminar-stream" options={{ href: null }} />
      <Tabs.Screen name="events/calendar" options={{ href: null }} />
      <Tabs.Screen name="events/create" options={{ href: null }} />
      <Tabs.Screen name="events/history" options={{ href: null }} />
      <Tabs.Screen name="events/listing" options={{ href: null }} />
      <Tabs.Screen name="events/my-tickets" options={{ href: null }} />
      <Tabs.Screen name="events/rsvp" options={{ href: null }} />
      <Tabs.Screen name="events/[id]" options={{ href: null }} />
      <Tabs.Screen name="faq" options={{ href: null }} />
      <Tabs.Screen name="help/accessibility" options={{ href: null }} />
      <Tabs.Screen name="help/bug-report" options={{ href: null }} />
      <Tabs.Screen name="help/contact" options={{ href: null }} />
      <Tabs.Screen name="help/feedback" options={{ href: null }} />
      <Tabs.Screen name="help/privacy-policy" options={{ href: null }} />
      <Tabs.Screen name="help/terms" options={{ href: null }} />
      <Tabs.Screen name="impact/certificate" options={{ href: null }} />
      <Tabs.Screen name="impact/share" options={{ href: null }} />
      <Tabs.Screen name="leaderboard/history" options={{ href: null }} />
      <Tabs.Screen name="leaderboard/rewards" options={{ href: null }} />
      <Tabs.Screen name="leaderboard/rules" options={{ href: null }} />
      <Tabs.Screen name="marketplace/categories" options={{ href: null }} />
      <Tabs.Screen name="marketplace/chat/[id]" options={{ href: null }} />
      <Tabs.Screen name="marketplace/checkout" options={{ href: null }} />
      <Tabs.Screen name="marketplace/compare-quotes" options={{ href: null }} />
      <Tabs.Screen name="marketplace/escrow" options={{ href: null }} />
      <Tabs.Screen name="marketplace/history" options={{ href: null }} />
      <Tabs.Screen name="marketplace/leave-review" options={{ href: null }} />
      <Tabs.Screen name="marketplace/list-item" options={{ href: null }} />
      <Tabs.Screen name="marketplace/messages" options={{ href: null }} />
      <Tabs.Screen name="marketplace/my-listings" options={{ href: null }} />
      <Tabs.Screen name="marketplace/receipt/[id]" options={{ href: null }} />
      <Tabs.Screen name="marketplace/review" options={{ href: null }} />
      <Tabs.Screen name="marketplace/reviews" options={{ href: null }} />
      <Tabs.Screen name="marketplace/saved" options={{ href: null }} />
      <Tabs.Screen name="marketplace/sell" options={{ href: null }} />
      <Tabs.Screen name="marketplace/[id]" options={{ href: null }} />
      <Tabs.Screen name="notifications/index" options={{ href: null }} />
      <Tabs.Screen name="notifications/settings" options={{ href: null }} />
      <Tabs.Screen name="notifications/[id]" options={{ href: null }} />
      <Tabs.Screen name="onboarding/tutorial-1" options={{ href: null }} />
      <Tabs.Screen name="onboarding/tutorial-2" options={{ href: null }} />
      <Tabs.Screen name="onboarding/tutorial-3" options={{ href: null }} />
      <Tabs.Screen name="organization/connected" options={{ href: null }} />
      <Tabs.Screen name="organization/create" options={{ href: null }} />
      <Tabs.Screen name="organization/join" options={{ href: null }} />
      <Tabs.Screen name="orgs/index" options={{ href: null }} />
      <Tabs.Screen name="orgs/join" options={{ href: null }} />
      <Tabs.Screen name="orgs/my-orgs" options={{ href: null }} />
      <Tabs.Screen name="orgs/[id]" options={{ href: null }} />
      <Tabs.Screen name="profile/achievements" options={{ href: null }} />
      <Tabs.Screen name="profile/badges" options={{ href: null }} />
      <Tabs.Screen name="profile/billing" options={{ href: null }} />
      <Tabs.Screen name="profile/edit" options={{ href: null }} />
      <Tabs.Screen name="profile/leaderboard" options={{ href: null }} />
      <Tabs.Screen name="profile/rewards" options={{ href: null }} />
      <Tabs.Screen name="profile/settings" options={{ href: null }} />
      <Tabs.Screen name="projects/create" options={{ href: null }} />
      <Tabs.Screen name="projects/index" options={{ href: null }} />
      <Tabs.Screen name="projects/[id]" options={{ href: null }} />
      <Tabs.Screen name="settings/ai-insights" options={{ href: null }} />
      <Tabs.Screen name="settings/appearance" options={{ href: null }} />
      <Tabs.Screen name="settings/index" options={{ href: null }} />
      <Tabs.Screen name="settings/language" options={{ href: null }} />
      <Tabs.Screen name="settings/moderation" options={{ href: null }} />
      <Tabs.Screen name="settings/notifications" options={{ href: null }} />
      <Tabs.Screen name="settings/platform" options={{ href: null }} />
      <Tabs.Screen name="settings/privacy" options={{ href: null }} />
      <Tabs.Screen name="social/create" options={{ href: null }} />
      <Tabs.Screen name="social/feed" options={{ href: null }} />
      <Tabs.Screen name="social/friends" options={{ href: null }} />
      <Tabs.Screen name="social/index" options={{ href: null }} />
      <Tabs.Screen name="social/post/[id]" options={{ href: null }} />
      <Tabs.Screen name="store/cart" options={{ href: null }} />
      <Tabs.Screen name="store/index" options={{ href: null }} />
      <Tabs.Screen name="store/orders" options={{ href: null }} />
      <Tabs.Screen name="store/tracking" options={{ href: null }} />
      <Tabs.Screen name="store/[id]" options={{ href: null }} />
      <Tabs.Screen name="support" options={{ href: null }} />
      <Tabs.Screen name="volunteering/history" options={{ href: null }} />
      <Tabs.Screen name="volunteering/index" options={{ href: null }} />
      <Tabs.Screen name="volunteering/sign-up" options={{ href: null }} />
      <Tabs.Screen name="wallet/history" options={{ href: null }} />
      <Tabs.Screen name="wallet/index" options={{ href: null }} />
      <Tabs.Screen name="wallet/transfer" options={{ href: null }} />
      <Tabs.Screen name="waste/guide" options={{ href: null }} />
      <Tabs.Screen name="waste/locations" options={{ href: null }} />
      <Tabs.Screen name="waste/scan-history" options={{ href: null }} />
    </Tabs>
  );
}
