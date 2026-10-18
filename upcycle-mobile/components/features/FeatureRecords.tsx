// Display metrics or saved records, including their permitted actions.
import type { Dispatch, SetStateAction } from 'react';
import { View, Switch, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../context/ThemeContext';
import { Label, Control } from '../WorkspaceShell';
import type { useFeatureData } from '../../../shared/use-feature.mjs';
import {
  formatValue,
  getValue,
  permitted,
  visibleActions,
} from '../../../shared/feature-client.mjs';
import { Value, Nested } from './RecordValues';

export default function FeatureRecords({
  state,
  rows,
  user,
  selected,
  setSelected,
}: {
  state: ReturnType<typeof useFeatureData>;
  rows: any[];
  user: any;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}) {
  const { feature, records, busy } = state;
  const { colors } = useTheme();
  const router = useRouter();
  const panel = {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 20,
    gap: 14,
  };
  if (!feature) return null;
  const milestone = (record: any) => {
    void state.run(
      {
        endpoint: '/goals/milestones/{id}',
        method: 'PATCH',
        roles: feature.roles,
        fields: [],
        body: { completed: !record.completed },
      },
      record
    );
  };
  return feature.kind === 'metrics' ? (
    feature.columns.map((column) => (
      <View key={column.key} style={panel}>
        <Label style={{ color: colors.secondary, fontSize: 12 }}>{column.label}</Label>
        <Label
          style={{
            fontSize: 24,
            fontFamily: 'Jakarta-600',
            lineHeight: 32,
          }}
        >
          {formatValue(getValue(records[0], column.key))}
        </Label>
      </View>
    ))
  ) : rows.length === 0 ? (
    <View style={panel}>
      <Label style={{ fontFamily: 'Jakarta-600' }}>
        {records.length ? 'No matching records' : 'No records yet'}
      </Label>
      <Label style={{ color: colors.secondary }}>
        {records.length
          ? 'Change the search to see more records.'
          : 'Saved records will appear here.'}
      </Label>
    </View>
  ) : (
    rows.map((record, index) => (
      <View key={record.id || index} style={panel}>
        <Label accessibilityRole="header" style={{ fontFamily: 'Jakarta-600', fontSize: 16 }}>
          {record.title ||
            record.name ||
            record.location ||
            record.subject ||
            record.message ||
            record.badge?.name ||
            feature.title}
        </Label>
        {feature.batchAction && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Switch
              accessibilityLabel={`Select ${record.title || record.id}`}
              value={selected.includes(record.id)}
              onValueChange={(checked) =>
                setSelected((previous) =>
                  checked ? [...previous, record.id] : previous.filter((id) => id !== record.id)
                )
              }
            />
            <Label>Select record</Label>
          </View>
        )}
        {feature.columns.map((column) => (
          <View key={column.key}>
            <Label style={{ fontSize: 12, color: colors.secondary }}>{column.label}</Label>
            <Value value={getValue(record, column.key)} />
          </View>
        ))}
        {feature.nested.map((name) => (
          <Nested
            key={name}
            name={name}
            value={record[name]}
            onMilestone={feature.milestoneActions ? milestone : undefined}
            busy={busy}
          />
        ))}
        {feature.map &&
          record.latitude !== null &&
          record.latitude !== undefined &&
          record.longitude !== null &&
          record.longitude !== undefined && (
            <Control
              title="Open recorded location"
              onPress={() => {
                void Linking.openURL(
                  `https://www.google.com/maps/search/?api=1&query=${record.latitude},${record.longitude}`
                );
              }}
            />
          )}
        {feature.key === 'groups' && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            <Control
              title="Open organization"
              onPress={() =>
                router.push({
                  pathname: '/features/[feature]',
                  params: { feature: 'groups', id: record.id },
                })
              }
            />
            {record.members?.some((member: any) => member.userId === user?.id) && (
              <Control
                title="Open organization feed"
                onPress={() =>
                  router.push({
                    pathname: '/features/[feature]',
                    params: { feature: 'posts', groupId: record.id },
                  })
                }
              />
            )}
          </View>
        )}
        {feature.kind === 'search' && (
          <Control
            title="Open record"
            onPress={() =>
              router.push({
                pathname: '/features/[feature]',
                params: { feature: record.feature, id: record.id },
              })
            }
          />
        )}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {feature.edit && permitted(feature.edit, user) && (
            <Control
              title="Edit record"
              disabled={busy}
              onPress={() => {
                void state.openForm(feature.edit!, record, 'Edit record');
              }}
            />
          )}
          {visibleActions(feature, record, user).map((action) => (
            <Control
              key={action.label}
              title={action.label!}
              disabled={busy}
              onPress={() => {
                void state.run(action, record);
              }}
            />
          ))}
        </View>
      </View>
    ))
  );
}
