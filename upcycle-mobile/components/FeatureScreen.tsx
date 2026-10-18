// Connect feature data to native search, exports, records, and forms.
import FeatureRecords from './features/FeatureRecords';
import FeatureForm from './features/FeatureForm';
import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView, RefreshControl } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useFeatureData } from '../../shared/use-feature.mjs';
import { filterRecords, permitted } from '../../shared/feature-client.mjs';
import { exportFeatureRecords } from '../utils/exportRecords';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import WorkspaceShell, { Label, Control } from './WorkspaceShell';
import BinScanner from './BinScanner';
import ProfilePhoto from './ProfilePhoto';

export default function FeatureScreen({
  feature: suppliedKey,
  startCreate = false,
}: {
  feature?: string;
  startCreate?: boolean;
}) {
  const auth = useAuth();
  const params = useLocalSearchParams<{
    feature: string;
    id?: string;
    q?: string;
    groupId?: string;
  }>();
  const key = suppliedKey || params.feature;
  const state = useFeatureData(key, auth, params.id, startCreate, params.groupId);
  const { feature, records, loading, error, notice, busy } = state;
  const { colors } = useTheme();
  const [query, setQuery] = useState(params.q || '');
  const [selected, setSelected] = useState<string[]>([]);
  const [scanId, setScanId] = useState('');
  const [exportError, setExportError] = useState('');
  const [exporting, setExporting] = useState(false);
  useEffect(() => {
    setQuery(params.q || '');
    setSelected([]);
    setScanId('');
  }, [key, params.q]);
  if (!feature)
    return (
      <WorkspaceShell>
        <Label accessibilityRole="alert">Feature not found.</Label>
      </WorkspaceShell>
    );
  const rows = filterRecords(records, query, feature.columns).filter(
    (record) => feature.kind !== 'scan' || !scanId || record.id === scanId
  );
  const input = {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 12,
    minHeight: 44,
    color: colors.text,
    fontFamily: 'Jakarta-400',
    fontSize: 14,
  };
  const exportData = async (format: 'csv' | 'json' | 'pdf') => {
    if (exporting) return;
    setExporting(true);
    setExportError('');
    try {
      await exportFeatureRecords(feature, rows, format);
    } catch (cause: any) {
      setExportError(cause.message || 'The file could not be exported.');
    } finally {
      setExporting(false);
    }
  };
  return (
    <WorkspaceShell>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              void state.reload();
            }}
            tintColor={colors.accent}
          />
        }
        contentContainerStyle={{ padding: 20, gap: 20, paddingBottom: 40 }}
      >
        <View style={{ gap: 8 }}>
          <Label
            style={{
              fontSize: 12,
              fontFamily: 'Jakarta-600',
              color: colors.accent,
            }}
          >
            {feature.group}
          </Label>
          <Label
            accessibilityRole="header"
            style={{ fontFamily: 'Jakarta-700', fontSize: 24, lineHeight: 32 }}
          >
            {feature.title}
          </Label>
          <Label style={{ color: colors.secondary }}>
            {feature.note || 'View and manage saved records.'}
          </Label>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            <Control
              title={loading ? 'Loading…' : 'Refresh'}
              disabled={loading || busy}
              onPress={() => {
                void state.reload();
              }}
            />
            {feature.create && permitted(feature.create, auth.user) && (
              <Control
                title="Add record"
                primary
                disabled={busy}
                onPress={() => {
                  void state.openForm(feature.create!);
                }}
              />
            )}
          </View>
        </View>
        {error || exportError ? (
          <Label accessibilityRole="alert" style={{ color: '#be123c' }}>
            {error || exportError}
          </Label>
        ) : null}
        {notice ? (
          <Label accessibilityRole="alert" style={{ color: colors.accent }}>
            {notice}
          </Label>
        ) : null}
        {feature.kind === 'scan' && <BinScanner records={records} onSelect={setScanId} />}
        {key === 'profile' && <ProfilePhoto onSaved={state.reload} />}
        {!loading && !error && (
          <>
            {feature.kind !== 'metrics' && (
              <TextInput
                accessibilityLabel={`Search ${feature.title}`}
                style={input}
                placeholder={`Search ${feature.title.toLowerCase()}`}
                placeholderTextColor={colors.secondary}
                value={query}
                onChangeText={setQuery}
              />
            )}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {feature.toolbar
                .filter((action) => permitted(action, auth.user))
                .map((action) => (
                  <Control
                    key={action.label}
                    title={action.label!}
                    disabled={busy}
                    onPress={() => {
                      void state.run(action);
                    }}
                  />
                ))}
              {feature.export && (
                <>
                  <Control
                    title="Export CSV"
                    disabled={exporting}
                    onPress={() => {
                      void exportData('csv');
                    }}
                  />
                  <Control
                    title="Export JSON"
                    disabled={exporting}
                    onPress={() => {
                      void exportData('json');
                    }}
                  />
                  <Control
                    title="Print / save PDF"
                    disabled={exporting}
                    onPress={() => {
                      void exportData('pdf');
                    }}
                  />
                </>
              )}
              {feature.batchAction && permitted(feature.batchAction, auth.user) && (
                <Control
                  title={`${feature.batchAction.label} (${selected.length})`}
                  disabled={busy || !selected.length}
                  onPress={() => {
                    void state.runBatch(records.filter((record) => selected.includes(record.id)));
                  }}
                />
              )}
            </View>
            <FeatureRecords
              state={state}
              rows={rows}
              user={auth.user}
              selected={selected}
              setSelected={setSelected}
            />
          </>
        )}
        {loading && (
          <Label style={{ textAlign: 'center', color: colors.secondary }}>
            Loading saved records…
          </Label>
        )}
      </ScrollView>
      <FeatureForm state={state} />
    </WorkspaceShell>
  );
}
