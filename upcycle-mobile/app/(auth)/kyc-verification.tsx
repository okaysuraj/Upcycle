import { useState } from 'react';
import { View, ScrollView, Switch, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { Label, Control } from '../../components/WorkspaceShell';
export default function KycVerification() {
  const router = useRouter();
  const { authFetchJson, user } = useAuth();
  const { colors } = useTheme();
  const [files, setFiles] = useState<DocumentPicker.DocumentPickerAsset[]>([]);
  const [agreed, setAgreed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  async function choose() {
    try {
      const selected = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'],
        multiple: true,
        copyToCacheDirectory: true,
      });
      if (!selected.canceled) {
        if (
          selected.assets.length > 3 ||
          selected.assets.some((file) => (file.size || 0) > 10 * 1024 * 1024)
        )
          throw new Error('Choose one to three files, up to 10 MB each.');
        setFiles(selected.assets);
        setError('');
      }
    } catch (cause: any) {
      setError(cause.message);
    }
  }
  async function submit() {
    if (busy || !files.length || !agreed) return;
    setBusy(true);
    setError('');
    try {
      const body = new FormData();
      for (const file of files) {
        if (Platform.OS === 'web')
          body.append('documents', file.file || (await (await fetch(file.uri)).blob()), file.name);
        else
          body.append('documents', { uri: file.uri, name: file.name, type: file.mimeType } as any);
      }
      const uploaded = await authFetchJson<{ urls: string[] }>('/upload/kyc-documents', {
        method: 'POST',
        body,
      });
      await authFetchJson('/users/kyc', {
        method: 'POST',
        body: JSON.stringify({ documentsUrl: uploaded.urls }),
      });
      setNotice('Documents submitted. Your verification is pending administrator review.');
      setFiles([]);
      setAgreed(false);
    } catch (cause: any) {
      setError(cause.message || 'Could not submit documents.');
    } finally {
      setBusy(false);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        <View
          style={{
            width: '100%',
            maxWidth: 480,
            alignSelf: 'center',
            padding: 20,
            gap: 20,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 14,
            backgroundColor: colors.surface,
          }}
        >
          <Label style={{ fontSize: 12, color: colors.accent }}>Vendor verification</Label>
          <Label
            accessibilityRole="header"
            style={{ fontSize: 24, lineHeight: 32, fontFamily: 'Jakarta-700' }}
          >
            Submit documents for review
          </Label>
          <Label style={{ color: colors.secondary }}>
            Upload one to three current business or facility documents. Submission sets your status
            to pending; an administrator must review them.
          </Label>
          {user?.role === 'VENDOR' ? (
            <>
              <Label>Documents</Label>
              <Control
                title="Choose documents"
                disabled={busy}
                onPress={() => {
                  void choose();
                }}
              />
              {files.map((file) => (
                <Label key={file.uri}>{file.name}</Label>
              ))}
              <Label style={{ fontSize: 12, color: colors.secondary }}>
                PDF or image, up to 10 MB each. Maximum three files.
              </Label>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Switch
                  accessibilityLabel="Authorized to submit documents"
                  value={agreed}
                  onValueChange={setAgreed}
                />
                <Label style={{ flex: 1 }}>
                  I confirm these documents are current and that I am authorized to submit them for
                  review.
                </Label>
              </View>
              <Control
                title={busy ? 'Uploading?' : 'Submit for review'}
                primary
                disabled={busy || !files.length || !agreed}
                onPress={() => {
                  void submit();
                }}
              />
            </>
          ) : (
            <Label accessibilityRole="alert">
              Sign in with a vendor account to submit documents.
            </Label>
          )}
          {!!error && (
            <Label
              accessibilityRole="alert"
              style={{ color: colors.canvas === '#121413' ? '#fb7185' : '#be123c' }}
            >
              {error}
            </Label>
          )}
          {!!notice && <Label style={{ color: colors.accent }}>{notice}</Label>}
          <Control title="Cancel" onPress={() => router.replace('/features/overview')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
