// Provide native navigation, account actions, and shared text controls.
import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, Pressable, StyleSheet, TextProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { catalog, permitted } from '../../shared/feature-client.mjs';

export function Label({ style, ...props }: TextProps) {
  const { colors } = useTheme();
  return (
    <Text
      {...props}
      style={[
        { color: colors.text, fontFamily: 'Jakarta-400', fontSize: 14, lineHeight: 22 },
        style,
      ]}
    />
  );
}
export function Control({
  title,
  onPress,
  disabled = false,
  primary = false,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  primary?: boolean;
}) {
  const { colors } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: 44,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: primary ? colors.accent : colors.border,
        backgroundColor: primary ? colors.accent : colors.surface,
        opacity: disabled ? 0.4 : pressed ? 0.8 : 1,
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Label
        style={{
          fontFamily: 'Jakarta-500',
          color: primary ? (colors.canvas === '#121413' ? '#052e16' : '#fff') : colors.text,
        }}
      >
        {title}
      </Label>
    </Pressable>
  );
}
export default function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const { colors, theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [error, setError] = useState('');
  const available = catalog.filter((feature) => permitted(feature, user));
  const navigate = (key: string) => {
    setMenu(false);
    router.push({ pathname: '/features/[feature]', params: { feature: key } });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
      <View
        style={[styles.header, { backgroundColor: colors.surface, borderColor: colors.border }]}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open overview"
          onPress={() => navigate('overview')}
        >
          <Label style={{ fontFamily: 'Jakarta-700', fontSize: 19, color: colors.accent }}>
            Upcycle
          </Label>
        </Pressable>
        <View style={styles.row}>
          <Control title="Search" onPress={() => navigate('search')} />
          <Control title="Menu" onPress={() => setMenu(true)} />
        </View>
      </View>
      {children}
      <View
        style={[styles.bottom, { backgroundColor: colors.surface, borderColor: colors.border }]}
      >
        {['overview', 'waste', 'events', 'profile'].map((key) => (
          <Pressable
            key={key}
            accessibilityRole="button"
            onPress={() => navigate(key)}
            style={{ flex: 1, minHeight: 44, justifyContent: 'center', alignItems: 'center' }}
          >
            <Label style={{ fontFamily: 'Jakarta-500', fontSize: 11 }}>
              {catalog.find((feature) => feature.key === key)?.title}
            </Label>
          </Pressable>
        ))}
      </View>
      <Modal visible={menu} animationType="fade" onRequestClose={() => setMenu(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
          <View style={styles.header}>
            <Label style={{ fontFamily: 'Jakarta-700', fontSize: 20 }}>Your workspace</Label>
            <Control title="Close" onPress={() => setMenu(false)} />
          </View>
          <ScrollView contentContainerStyle={{ padding: 20, gap: 14 }}>
            <Label>
              {user?.name} · {user?.role?.replaceAll('_', ' ')}
            </Label>
            <View style={styles.row}>
              {(['light', 'dark', 'system'] as const).map((value) => (
                <Control
                  key={value}
                  title={value === theme ? `${value} ✓` : value}
                  onPress={() => {
                    void setTheme(value).catch((cause) => setError(cause.message));
                  }}
                />
              ))}
            </View>
            {error ? (
              <Label accessibilityRole="alert" style={{ color: '#be123c' }}>
                {error}
              </Label>
            ) : null}
            {Array.from(new Set(available.map((feature) => feature.group))).map((group) => (
              <View key={group} style={{ gap: 6 }}>
                <Label style={{ color: colors.secondary, fontSize: 12, fontFamily: 'Jakarta-600' }}>
                  {group}
                </Label>
                {available
                  .filter((feature) => feature.group === group)
                  .map((feature) => (
                    <Pressable
                      key={feature.key}
                      accessibilityRole="button"
                      style={{ paddingVertical: 12 }}
                      onPress={() => navigate(feature.key)}
                    >
                      <Label>{feature.title}</Label>
                    </Pressable>
                  ))}
              </View>
            ))}
            {user?.role === 'VENDOR' && (
              <Control
                title="Vendor document submission"
                onPress={() => {
                  setMenu(false);
                  router.push('/(auth)/kyc-verification');
                }}
              />
            )}
            <Control
              title="Password reset"
              onPress={() => {
                setMenu(false);
                router.push('/(auth)/forgot-password');
              }}
            />
            <Control
              title="Deactivate account"
              onPress={() => {
                setMenu(false);
                router.push('/user/account-deactivation');
              }}
            />
            <Control
              title="Sign out"
              onPress={() => {
                void logout()
                  .then(() => router.replace('/(auth)/login'))
                  .catch((cause) => setError(cause.message));
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderBottomWidth: 1,
  },
  row: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  bottom: { flexDirection: 'row', borderTopWidth: 1, paddingVertical: 5 },
});
