import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Label, Control } from './WorkspaceShell';
import { useTheme } from '../context/ThemeContext';
export default function BinScanner({
  records,
  onSelect,
}: {
  records: any[];
  onSelect: (id: string) => void;
}) {
  const [permission, requestPermission] = useCameraPermissions();
  const [enabled, setEnabled] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const { colors } = useTheme();
  const choose = (value: string) => {
    const saved = records.find((record) => record.id === value.trim());
    if (!saved) {
      setError('That bin ID was not found. Scan or select a saved bin.');
      return;
    }
    setError('');
    setId(saved.id);
    onSelect(saved.id);
    setEnabled(false);
  };
  const camera = async () => {
    if (enabled) {
      setEnabled(false);
      return;
    }
    const result = permission?.granted ? permission : await requestPermission();
    if (result.granted) setEnabled(true);
    else setError('Camera permission was denied. Select a saved bin below.');
  };
  return (
    <View style={{ gap: 12 }}>
      <Label style={{ fontFamily: 'Jakarta-600' }}>Find a saved bin</Label>
      <Control
        title={enabled ? 'Stop camera' : 'Scan QR code'}
        onPress={() => {
          void camera().catch((cause) => setError(cause.message));
        }}
      />
      {enabled && (
        <CameraView
          style={{ height: 280 }}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
          onBarcodeScanned={(result) => choose(result.data)}
        />
      )}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 14,
          padding: 12,
          color: colors.text,
          fontFamily: 'Jakarta-400',
        }}
        accessibilityLabel="Bin ID"
        placeholder="Enter bin ID"
        placeholderTextColor={colors.secondary}
        value={id}
        onChangeText={setId}
        autoCapitalize="none"
      />
      <Control title="Find bin" onPress={() => choose(id)} />
      {records.map((record) => (
        <Control
          key={record.id}
          title={`${record.location} · ${record.category}`}
          onPress={() => choose(record.id)}
        />
      ))}
      {error ? (
        <Label accessibilityRole="alert" style={{ color: '#be123c' }}>
          {error}
        </Label>
      ) : null}
    </View>
  );
}
