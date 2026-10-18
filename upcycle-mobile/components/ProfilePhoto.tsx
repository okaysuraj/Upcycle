import React, { useState } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../context/AuthContext';
import { Control, Label } from './WorkspaceShell';
export default function ProfilePhoto({ onSaved }: { onSaved: () => Promise<boolean> }) {
  const { uploadProfilePic } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const upload = async () => {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      const selected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
      });
      if (selected.canceled) return;
      const result = await uploadProfilePic(selected.assets[0].uri);
      if (!result.success) throw new Error(result.error || 'Photo could not be saved.');
      await onSaved();
    } catch (cause: any) {
      setError(cause.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <View style={{ gap: 10 }}>
      <Label style={{ fontFamily: 'Jakarta-500' }}>Profile photo</Label>
      <Control
        title={busy ? 'Uploading…' : 'Choose and save photo'}
        disabled={busy}
        onPress={() => {
          void upload();
        }}
      />
      {error ? (
        <Label accessibilityRole="alert" style={{ color: '#be123c' }}>
          {error}
        </Label>
      ) : null}
    </View>
  );
}
