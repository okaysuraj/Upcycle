import { useState } from 'react';
import { View, Platform, Linking } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Label, Control } from './WorkspaceShell';
export default function AssetField({
  field,
  value,
  onChange,
  onBusy,
}: {
  field: any;
  value: any;
  onChange: (value: any) => void;
  onBusy: (busy: boolean) => void;
}) {
  const { authFetchJson } = useAuth();
  const { colors } = useTheme();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function upload() {
    if (busy) return;
    setError('');
    setBusy(true);
    onBusy(true);
    try {
      const selected = await DocumentPicker.getDocumentAsync({
        type: ['image/jpeg', 'image/png', 'image/webp'],
        multiple: field.multiple || false,
        copyToCacheDirectory: true,
      });
      if (selected.canceled) return;
      const files = selected.assets;
      if (
        files.length > (field.maxFiles || 1) ||
        files.some((file) => (file.size || 0) > 10 * 1024 * 1024)
      )
        throw new Error(`Choose up to ${field.maxFiles || 1} images, no larger than 10 MB each.`);
      const body = new FormData();
      for (const file of files) {
        if (Platform.OS === 'web')
          body.append(
            field.formKey || 'image',
            file.file || (await (await fetch(file.uri)).blob()),
            file.name
          );
        else
          body.append(field.formKey || 'image', {
            uri: file.uri,
            name: file.name,
            type: file.mimeType,
          } as any);
      }
      const saved = await authFetchJson(field.uploadEndpoint, { method: 'POST', body });
      const urls = field.multiple ? saved.urls : [saved.url];
      if (
        !Array.isArray(urls) ||
        urls.some((url) => typeof url !== 'string' || !url.startsWith('https://'))
      )
        throw new Error('The provider did not return saved image URLs.');
      onChange(field.multiple ? urls : urls[0]);
    } catch (cause: any) {
      setError(cause.message);
    } finally {
      setBusy(false);
      onBusy(false);
    }
  }
  return (
    <View style={{ gap: 8 }}>
      <Control
        title={busy ? 'Uploading image…' : 'Choose image'}
        disabled={busy}
        onPress={() => {
          void upload();
        }}
      />
      {(Array.isArray(value) ? value : value ? [value] : []).map((url: string) => (
        <Label
          key={url}
          accessibilityRole="link"
          onPress={() => {
            void Linking.openURL(url);
          }}
          style={{ color: colors.accent, textDecorationLine: 'underline' }}
        >
          Open saved image
        </Label>
      ))}
      {error ? (
        <Label
          accessibilityRole="alert"
          style={{ color: colors.canvas === '#121413' ? '#fb7185' : '#be123c' }}
        >
          {error}
        </Label>
      ) : null}
    </View>
  );
}
