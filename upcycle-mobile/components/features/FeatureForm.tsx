// Create, edit, and confirm a record through the shared form controller.
import { useState } from 'react';
import { View, Modal, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { Label, Control } from '../WorkspaceShell';
import type { useFeatureData } from '../../../shared/use-feature.mjs';
import FeatureField from './FeatureField';

export default function FeatureForm({ state }: { state: ReturnType<typeof useFeatureData> }) {
  const { colors } = useTheme();
  const { form, values, options, formError, optionsLoading, busy } = state;
  const [uploadBusy, setUploadBusy] = useState(false);
  return (
    <Modal
      visible={!!form}
      animationType="slide"
      onRequestClose={() => {
        if (!uploadBusy) state.closeForm();
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ padding: 20, gap: 20 }}
          >
            <Label accessibilityRole="header" style={{ fontFamily: 'Jakarta-700', fontSize: 22 }}>
              {form?.label}
            </Label>
            {form?.definition.confirm && (
              <Label>Confirm this action for the selected saved record.</Label>
            )}
            {form?.definition.fields.map((field) => (
              <View key={field.key} style={{ gap: 8 }}>
                <Label style={{ fontFamily: 'Jakarta-500' }}>
                  {field.label}
                  {field.required ? ' *' : ''}
                </Label>
                <FeatureField
                  field={field}
                  value={values[field.key]}
                  options={options[field.key]}
                  onChange={(value) => state.updateValue(field.key, value)}
                  onBusy={setUploadBusy}
                />
              </View>
            ))}
            {optionsLoading && <Label>Loading saved choices…</Label>}
            {formError ? (
              <Label accessibilityRole="alert" style={{ color: '#be123c' }}>
                {formError}
              </Label>
            ) : null}
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Control
                title={busy ? 'Saving…' : form?.definition.confirm ? 'Confirm' : 'Save'}
                primary
                disabled={busy || optionsLoading || uploadBusy}
                onPress={() => {
                  void state.submit();
                }}
              />
              <Control title="Cancel" disabled={busy || uploadBusy} onPress={state.closeForm} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
