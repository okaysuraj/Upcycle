// Create, edit, and confirm a record through the shared form controller.
import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import FeatureField from './FeatureField';

export default function FeatureForm({ state }) {
  const { form, values, options, formError, optionsLoading, busy } = state;
  const [uploadBusy, setUploadBusy] = useState(false);
  return (
    <Modal
      isOpen={!!form}
      onClose={() => {
        if (!uploadBusy) state.closeForm();
      }}
      title={form?.label || 'Record'}
    >
      {form && (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (!uploadBusy) void state.submit();
          }}
        >
          {form.definition.confirm && (
            <p className="text-sm text-stone-600 dark:text-stone-300">
              Confirm this action for the selected saved record.
            </p>
          )}
          {form.definition.fields.map((field) => (
            <label key={field.key} className="block text-sm">
              <span className="mb-1.5 block font-semibold text-stone-800 dark:text-stone-200">
                {field.label}
                {field.required ? ' *' : ''}
              </span>
              <FeatureField
                field={field}
                value={values[field.key]}
                options={options[field.key]}
                onChange={(value) => state.updateValue(field.key, value)}
                onBusy={setUploadBusy}
              />
            </label>
          ))}
          {optionsLoading && (
            <p role="status" className="text-sm text-stone-500">
              Loading saved choices…
            </p>
          )}
          {formError && (
            <p role="alert" className="text-sm font-medium text-rose-700 dark:text-rose-400">
              {formError}
            </p>
          )}
          <div className="flex items-center gap-3 pt-3">
            <Button type="submit" disabled={busy || optionsLoading || uploadBusy}>
              {busy ? 'Saving…' : form.definition.confirm ? 'Confirm' : 'Save'}
            </Button>
            <Button variant="outline" disabled={busy || uploadBusy} onClick={state.closeForm}>
              Cancel
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
