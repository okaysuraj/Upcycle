import { initialValues } from '../../../shared/feature-client.mjs';
import Button from './ui/Button';
export default function CollectionField({ field, value = [], onChange }) {
  const update = (index, key, next) =>
    onChange(value.map((item, position) => (position === index ? { ...item, [key]: next } : item)));
  return (
    <div className="space-y-3">
      {value.map((item, index) => (
        <fieldset key={index} className="space-y-3 rounded-[14px] border p-3">
          <legend className="px-1 text-xs">
            {field.label} {index + 1}
          </legend>
          {field.fields.map((child) => (
            <div key={child.key}>
              <label className="mb-1 block text-sm">
                {child.label}
                {child.required ? ' *' : ''}
              </label>
              {child.type === 'collection' ? (
                <CollectionField
                  field={child}
                  value={item[child.key]}
                  onChange={(next) => update(index, child.key, next)}
                />
              ) : child.type === 'boolean' ? (
                <input
                  aria-label={child.label}
                  type="checkbox"
                  checked={!!item[child.key]}
                  onChange={(event) => update(index, child.key, event.target.checked)}
                />
              ) : (
                <input
                  aria-label={child.label}
                  required={child.required}
                  type={child.type === 'url' ? 'url' : 'text'}
                  className="w-full rounded-[14px] border bg-transparent p-3"
                  value={item[child.key] || ''}
                  onChange={(event) => update(index, child.key, event.target.value)}
                />
              )}
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() => onChange(value.filter((_, position) => position !== index))}
          >
            Remove entry
          </Button>
        </fieldset>
      ))}
      <Button
        variant="outline"
        onClick={() => onChange([...value, initialValues({ fields: field.fields })])}
      >
        Add {field.label.toLowerCase()} entry
      </Button>
    </div>
  );
}
