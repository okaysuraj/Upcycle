// Render stored values and nested details without changing the records.
import { View, Linking } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Label, Control } from '../WorkspaceShell';
import { formatValue } from '../../../shared/feature-client.mjs';

export function Value({ value }: { value: any }) {
  const { colors } = useTheme();
  if (typeof value === 'string' && /^https?:\/\//i.test(value))
    return (
      <Label
        accessibilityRole="link"
        onPress={() => {
          void Linking.openURL(value);
        }}
        style={{ color: colors.accent, textDecorationLine: 'underline' }}
      >
        Open document or lesson
      </Label>
    );
  return <Label selectable>{formatValue(value)}</Label>;
}
export function Nested({
  value,
  name,
  onMilestone,
  busy,
}: {
  value: any;
  name: string;
  onMilestone?: (item: any) => void;
  busy: boolean;
}) {
  const { colors } = useTheme();
  if (value === null || value === undefined) return null;
  const entries = Array.isArray(value) ? value : [value];
  return (
    <View
      style={{
        gap: 10,
        paddingTop: 14,
        borderTopWidth: 1,
        borderColor: colors.border,
      }}
    >
      <Label style={{ fontFamily: 'Jakarta-600', textTransform: 'capitalize' }}>{name}</Label>
      {entries.length === 0 ? (
        <Label style={{ color: colors.secondary }}>None recorded.</Label>
      ) : (
        entries.map((entry, index) => (
          <View
            key={entry?.id || index}
            style={{
              padding: 12,
              borderRadius: 14,
              backgroundColor: colors.elevated,
              gap: 10,
            }}
          >
            {typeof entry === 'object' && entry !== null ? (
              Object.entries(entry).map(([key, content]) => (
                <View key={key}>
                  <Label style={{ fontSize: 12, color: colors.secondary }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </Label>
                  {typeof content === 'object' && content !== null ? (
                    <Nested value={content} name={key} busy={busy} />
                  ) : (
                    <Value value={content} />
                  )}
                </View>
              ))
            ) : (
              <Value value={entry} />
            )}
            {name === 'milestones' && entry?.id && onMilestone && (
              <Control
                title={entry.completed ? 'Reopen milestone' : 'Complete milestone'}
                disabled={busy}
                onPress={() => onMilestone(entry)}
              />
            )}
          </View>
        ))
      )}
    </View>
  );
}
