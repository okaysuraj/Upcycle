import type { Action, Feature } from './feature-client.mjs';
export function useFeatureData(
  key: string,
  auth: any,
  recordId?: string,
  startCreate?: boolean,
  scopeId?: string
): {
  feature?: Feature;
  records: any[];
  loading: boolean;
  error: string;
  notice: string;
  form: { definition: Action; record: any; label: string } | null;
  values: Record<string, any>;
  options: Record<string, any[]>;
  formError: string;
  optionsLoading: boolean;
  busy: boolean;
  reload: () => Promise<boolean>;
  openForm: (definition: Action, record?: any, label?: string) => Promise<void>;
  closeForm: () => void;
  updateValue: (key: string, value: any) => void;
  submit: () => Promise<void>;
  run: (definition: Action, record?: any) => Promise<void>;
  runBatch: (selected: any[]) => Promise<void>;
};
