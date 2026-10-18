// Render shared authentication forms using native controls.
import {
  View,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useAuthForm } from '../../shared/use-auth-form.mjs';
import { Label, Control } from './WorkspaceShell';
export default function AuthScreen({ mode = 'login' }: { mode?: string }) {
  const auth = useAuth();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { colors, theme, setTheme } = useTheme();
  const state = useAuthForm(mode, auth, params, () => router.replace('/features/overview'));
  const { screen, values, update, busy, error, notice, unverified, showPassword, setShowPassword } =
    state;
  const input = {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 12,
    minHeight: 44,
    fontFamily: 'Jakarta-400',
    fontSize: 14,
    color: colors.text,
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          borderBottomWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.surface,
        }}
      >
        <Label style={{ fontFamily: 'Jakarta-700', fontSize: 19, color: colors.accent }}>
          Upcycle
        </Label>
        <Control
          title={`Theme: ${theme}`}
          onPress={() => {
            void setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');
          }}
        />
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}
        >
          <View
            style={{
              width: '100%',
              maxWidth: 480,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 14,
              backgroundColor: colors.surface,
              padding: 20,
              gap: 20,
            }}
          >
            <View style={{ gap: 8 }}>
              <Label style={{ fontFamily: 'Jakarta-600', fontSize: 12, color: colors.accent }}>
                Your campus workspace
              </Label>
              <Label
                accessibilityRole="header"
                style={{ fontFamily: 'Jakarta-700', fontSize: 24, lineHeight: 32 }}
              >
                {screen.title}
              </Label>
              <Label style={{ color: colors.secondary }}>{screen.description}</Label>
            </View>
            {screen.fields.map((field: any) => (
              <View key={field.key} style={{ gap: 6 }}>
                <Label style={{ fontFamily: 'Jakarta-500' }}>{field.label}</Label>
                {field.type === 'select' ? (
                  <View style={{ gap: 6 }}>
                    {field.options.map((role: string) => (
                      <Pressable
                        key={role}
                        accessibilityRole="radio"
                        accessibilityLabel={role.toLowerCase()}
                        accessibilityState={{ checked: values[field.key] === role }}
                        onPress={() => update(field.key, role)}
                        style={{
                          ...input,
                          borderColor: values[field.key] === role ? colors.accent : colors.border,
                        }}
                      >
                        <Label>
                          {values[field.key] === role ? '✓ ' : ''}
                          {role.toLowerCase().replaceAll('_', ' ')}
                        </Label>
                      </Pressable>
                    ))}
                  </View>
                ) : (
                  <TextInput
                    accessibilityLabel={field.label}
                    style={input}
                    value={values[field.key]}
                    onChangeText={(value) => update(field.key, value)}
                    secureTextEntry={field.type === 'password' && !showPassword}
                    autoCapitalize={field.key === 'name' ? 'words' : 'none'}
                    keyboardType={field.type === 'email' ? 'email-address' : 'default'}
                    autoComplete={
                      field.key === 'name'
                        ? 'name'
                        : field.type === 'email'
                          ? 'email'
                          : field.type === 'password'
                            ? mode === 'login'
                              ? 'current-password'
                              : 'new-password'
                            : 'off'
                    }
                  />
                )}
              </View>
            ))}
            {screen.fields.some((field: any) => field.type === 'password') && (
              <Control
                title={showPassword ? 'Hide password' : 'Show password'}
                onPress={() => setShowPassword(!showPassword)}
              />
            )}
            {screen.button && (
              <Control
                title={busy ? 'Please wait…' : screen.button}
                primary
                disabled={busy}
                onPress={() => {
                  void state.submit();
                }}
              />
            )}
            {!!error && (
              <Label
                accessibilityRole="alert"
                style={{ color: colors.canvas === '#121413' ? '#fb7185' : '#be123c' }}
              >
                {error}
              </Label>
            )}
            {!!notice && (
              <Label accessibilityRole="alert" style={{ color: colors.accent }}>
                {notice}
              </Label>
            )}
            {unverified && (
              <Control
                title="Resend verification link"
                disabled={busy}
                onPress={() => {
                  void state.submit(true);
                }}
              />
            )}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {mode !== 'login' && (
                <Control title="Sign in" onPress={() => router.push('/(auth)/login')} />
              )}
              {mode !== 'register' && (
                <Control title="Create account" onPress={() => router.push('/(auth)/signup')} />
              )}
              {['login', 'reset'].includes(mode) && (
                <Control
                  title="Forgot password?"
                  onPress={() => router.push('/(auth)/forgot-password')}
                />
              )}
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              <Control title="Terms of service" onPress={() => router.push('/(auth)/terms')} />
              <Control
                title="Privacy policy"
                onPress={() => router.push('/(auth)/privacy-policy')}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
