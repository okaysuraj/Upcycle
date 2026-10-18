// Choose an input from the shared field definition.
import { View, TextInput, Switch, Pressable } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Label, Control } from '../WorkspaceShell';
import type { Field } from '../../../shared/feature-client.mjs';
import { getValue } from '../../../shared/feature-client.mjs';
import CollectionField from '../CollectionField';
import AssetField from '../AssetField';

export default function FeatureField({
  field,
  value: currentValue,
  options = [],
  onChange,
  onBusy,
}: {
  field: Field;
  value: any;
  options?: any[];
  onChange: (value: any) => void;
  onBusy: (busy: boolean) => void;
}) {
  const { colors } = useTheme();
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
  return field.type === 'asset' ? (
    <AssetField
      field={field}
      value={currentValue}
      onChange={(value) => onChange(value)}
      onBusy={onBusy}
    />
  ) : field.type === 'collection' ? (
    <CollectionField field={field} value={currentValue} onChange={(value) => onChange(value)} />
  ) : field.type === 'boolean' ? (
    <Switch
      accessibilityLabel={field.label}
      value={!!currentValue}
      onValueChange={(value) => onChange(value)}
    />
  ) : field.type === 'select' ? (
    <View style={{ gap: 6 }}>
      <Label style={{ fontSize: 12, color: colors.secondary }}>
        {field.multiple ? 'Select one or more saved choices' : 'Select a choice'}
      </Label>
      {!field.required && !field.multiple && <Control title="None" onPress={() => onChange('')} />}
      {(field.options || options || []).map((option: any) => {
        const value =
          typeof option === 'string' ? option : getValue(option, field.valueKey || 'id');
        const label =
          typeof option === 'string'
            ? option.replaceAll('_', ' ')
            : getValue(option, field.labelKey || 'name') ||
              option.title ||
              option.location ||
              option.code ||
              value;
        const checked = field.multiple
          ? (currentValue || []).includes(value)
          : currentValue === value;
        return (
          <Pressable
            key={value}
            accessibilityRole={field.multiple ? 'checkbox' : 'radio'}
            accessibilityState={{ checked }}
            onPress={() =>
              onChange(
                field.multiple
                  ? checked
                    ? currentValue.filter((item: string) => item !== value)
                    : [...(currentValue || []), value]
                  : value
              )
            }
            style={{
              ...input,
              backgroundColor: checked ? colors.elevated : colors.surface,
              borderColor: checked ? colors.accent : colors.border,
            }}
          >
            <Label>
              {checked ? '✓ ' : ''}
              {label}
            </Label>
          </Pressable>
        );
      })}
    </View>
  ) : (
    <TextInput
      accessibilityLabel={field.label}
      style={[
        input,
        ['textarea', 'json'].includes(field.type)
          ? { minHeight: 120, textAlignVertical: 'top' }
          : {},
      ]}
      value={String(currentValue ?? '')}
      onChangeText={(value) => onChange(value)}
      keyboardType={
        ['number', 'integer'].includes(field.type) ? 'numbers-and-punctuation' : 'default'
      }
      autoCapitalize={field.type === 'url' ? 'none' : 'sentences'}
      multiline={['textarea', 'json'].includes(field.type)}
      placeholder={field.type === 'datetime' ? 'YYYY-MM-DD HH:mm (local time)' : undefined}
      placeholderTextColor={colors.secondary}
    />
  );
}
