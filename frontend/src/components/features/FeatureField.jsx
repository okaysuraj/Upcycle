// Choose an input from the shared field definition.
import { getValue } from '../../../../shared/feature-client.mjs';
import CollectionField from '../CollectionField';
import AssetField from '../AssetField';

export default function FeatureField({
  field,
  value: currentValue,
  options = [],
  onChange,
  onBusy,
}) {
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
    <input
      type="checkbox"
      checked={!!currentValue}
      onChange={(event) => onChange(event.target.checked)}
      className="h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
    />
  ) : field.type === 'select' ? (
    <select
      multiple={field.multiple}
      required={field.required}
      className="w-full min-h-[44px] rounded-xl border border-stone-200 bg-white p-3 text-sm focus:border-emerald-600 focus:outline-none dark:border-stone-700 dark:bg-[#232725] dark:text-stone-100"
      value={currentValue}
      onChange={(event) =>
        onChange(
          field.multiple
            ? [...event.target.selectedOptions].map((option) => option.value)
            : event.target.value
        )
      }
    >
      {!field.multiple && <option value="">Select {field.label.toLowerCase()}</option>}
      {(field.options || options || []).map((option) => {
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
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  ) : ['textarea', 'json'].includes(field.type) ? (
    <textarea
      required={field.required}
      rows={4}
      className="w-full rounded-xl border border-stone-200 bg-white p-3 text-sm focus:border-emerald-600 focus:outline-none dark:border-stone-700 dark:bg-[#232725] dark:text-stone-100"
      value={currentValue}
      onChange={(event) => onChange(event.target.value)}
    />
  ) : (
    <input
      required={field.required}
      type={
        ['number', 'integer'].includes(field.type)
          ? 'number'
          : field.type === 'url'
            ? 'url'
            : 'text'
      }
      step={field.type === 'integer' ? '1' : 'any'}
      min={field.min}
      max={field.max}
      placeholder={field.type === 'datetime' ? 'YYYY-MM-DD HH:mm (local time)' : undefined}
      className="w-full min-h-[44px] rounded-xl border border-stone-200 bg-white p-3 text-sm focus:border-emerald-600 focus:outline-none dark:border-stone-700 dark:bg-[#232725] dark:text-stone-100"
      value={currentValue}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
