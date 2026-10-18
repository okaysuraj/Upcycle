// Persist mobile appearance preferences and expose matching theme colors.
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { themeTokens } from '../../shared/theme.mjs';

type Theme = 'light' | 'dark' | 'system';
const Context = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => Promise<void>;
  colors: typeof themeTokens.light;
} | null>(null);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [theme, setThemeState] = useState<Theme>('system');
  useEffect(() => {
    let active = true;
    void AsyncStorage.getItem('upcycle_theme')
      .then((saved) => {
        if (active && ['light', 'dark', 'system'].includes(saved || '')) {
          setThemeState(saved as Theme);
          setColorScheme(saved as Theme);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [setColorScheme]);
  const setTheme = async (value: Theme) => {
    await AsyncStorage.setItem('upcycle_theme', value);
    setThemeState(value);
    setColorScheme(value);
  };
  return (
    <Context.Provider
      value={{ theme, setTheme, colors: themeTokens[colorScheme === 'dark' ? 'dark' : 'light'] }}
    >
      {children}
    </Context.Provider>
  );
}
export function useTheme() {
  const value = useContext(Context);
  if (!value) throw new Error('Theme provider is required.');
  return value;
}
