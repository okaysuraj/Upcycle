export interface Field {
  key: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
  source?: string;
  labelKey?: string;
  valueKey?: string;
  multiple?: boolean;
  min?: number;
  max?: number;
  fields?: Field[];
  equals?: string;
}
export interface Action {
  label?: string;
  endpoint: string;
  method?: string;
  roles: string[];
  body?: Record<string, unknown>;
  fields: Field[];
  confirm?: boolean;
}
export interface Feature {
  key: string;
  title: string;
  group: string;
  endpoint: string;
  kind: string;
  roles: string[];
  columns: Field[];
  create?: Action;
  edit?: Action;
  actions: Action[];
  toolbar: Action[];
  batchAction?: Action;
  export?: boolean;
  note?: string;
  nested: string[];
  milestoneActions?: boolean;
  map?: boolean;
  dataPath?: string;
  detailEndpoint?: string;
  publicEndpoint?: string;
  public?: boolean;
}
export const catalog: Feature[];
export function getFeature(key: string): Feature | undefined;
export function permitted(definition: { roles?: string[] } | undefined, user: any): boolean;
export function getValue(record: any, key: string): any;
export function formatValue(value: any): string;
export function interpolate(template: string, values: any): string;
export function initialValues(definition: Action, record?: any, user?: any): Record<string, any>;
export function makePayload(definition: Action, values: any): any;
export function loadFeature(
  fetchJson: any,
  feature: Feature,
  user: any,
  recordId?: string,
  scopeId?: string
): Promise<any[]>;
export function visibleActions(feature: Feature, record: any, user: any): Action[];
export function performAction(
  fetchJson: any,
  definition: Action,
  record: any,
  values: any,
  user: any
): Promise<any>;
export function filterRecords(records: any[], query: string, columns: Field[]): any[];
