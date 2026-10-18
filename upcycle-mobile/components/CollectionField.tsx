import { View, TextInput, Switch } from 'react-native';
import { Field, initialValues } from '../../shared/feature-client.mjs';
import { Label, Control } from './WorkspaceShell';
import { useTheme } from '../context/ThemeContext';
export default function CollectionField({
  field,
  value = [],
  onChange,
}: {
  field: Field;
  value?: any[];
  onChange: (value: any[]) => void;
}) {
  const { colors } = useTheme();
  const update = (index: number, key: string, next: any) =>
    onChange(value.map((item, position) => (position === index ? { ...item, [key]: next } : item)));
  return (
    <View style={{ gap: 12 }}>
      {value.map((item, index) => (
        <View
          key={index}
          style={{
            gap: 12,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 14,
            padding: 12,
          }}
        >
          <Label style={{ fontSize: 12 }}>
            {field.label} {index + 1}
          </Label>
          {field.fields?.map((child) => (
            <View key={child.key} style={{ gap: 6 }}>
              <Label>
                {child.label}
                {child.required ? ' *' : ''}
              </Label>
              {child.type === 'collection' ? (
                <CollectionField
                  field={child}
                  value={item[child.key]}
                  onChange={(next) => update(index, child.key, next)}
                />
              ) : child.type === 'boolean' ? (
                <Switch
                  accessibilityLabel={child.label}
                  value={!!item[child.key]}
                  onValueChange={(next) => update(index, child.key, next)}
                />
              ) : (
                <TextInput
                  accessibilityLabel={child.label}
                  value={item[child.key] || ''}
                  onChangeText={(next) => update(index, child.key, next)}
                  autoCapitalize={child.type === 'url' ? 'none' : 'sentences'}
                  style={{
                    color: colors.text,
                    fontFamily: 'Jakarta-400',
                    fontSize: 14,
                    borderWidth: 1,
                    borderColor: colors.border,
                    borderRadius: 14,
                    padding: 12,
                    minHeight: 44,
                  }}
                />
              )}
            </View>
          ))}
          <Control
            title="Remove entry"
            onPress={() => onChange(value.filter((_, position) => position !== index))}
          />
        </View>
      ))}
      <Control
        title={`Add ${field.label.toLowerCase()} entry`}
        onPress={() =>
          onChange([
            ...value,
            initialValues({ fields: field.fields || [], endpoint: '', roles: [] }),
          ])
        }
      />
    </View>
  );
}
