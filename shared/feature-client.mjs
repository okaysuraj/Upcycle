// Translate feature definitions into authorized API reads and writes.
import catalog from './features.mjs';

export { catalog };
export const getFeature = (key) => catalog.find((feature) => feature.key === key);
export const permitted = (definition, user) =>
  !!definition &&
  ((!user && definition.public === true) ||
    (!!user && (!definition.roles || definition.roles.includes(user.role))));
export const getValue = (record, key) =>
  key.split('.').reduce((value, part) => value?.[part], record);
export function formatValue(value) {
  if (value === null || value === undefined || value === '') return 'Not recorded';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'number')
    return Number.isFinite(value)
      ? value.toLocaleString(undefined, { maximumFractionDigits: 2 })
      : 'Not recorded';
  if (Array.isArray(value))
    return (
      value
        .map((item) =>
          typeof item === 'object'
            ? item.title || item.name || item.id || JSON.stringify(item)
            : String(item)
        )
        .join(', ') || 'None'
    );
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}
export function interpolate(template, values) {
  return template.replace(/\{([\w]+)\}/g, (_, key) => {
    if (values[key] === undefined || values[key] === null || values[key] === '')
      throw new Error(`Missing ${key}. Select a saved record first.`);
    return encodeURIComponent(String(values[key]));
  });
}
function bodyValues(body, values) {
  return Object.fromEntries(
    Object.entries(body || {}).map(([key, value]) => [
      key,
      typeof value === 'string' && /^\{\w+\}$/.test(value) ? values[value.slice(1, -1)] : value,
    ])
  );
}
function assignPath(object, key, value) {
  const parts = key.split('.');
  const last = parts.pop();
  const target = parts.reduce((node, part) => (node[part] ||= {}), object);
  target[last] = value;
}
export function initialValues(definition, record = {}, user = {}) {
  return Object.fromEntries(
    (definition.fields || []).map((field) => {
      const stored = getValue(record, field.key);
      const value = stored ?? (field.key === 'campusId' ? user.campusId : undefined);
      if (value === undefined || value === null) {
        if (field.multiple || field.type === 'collection') return [field.key, []];
        return [field.key, field.type === 'boolean' ? false : ''];
      }
      if (field.type === 'json') return [field.key, JSON.stringify(value, null, 2)];
      if (field.type === 'array') return [field.key, value.join(', ')];
      return [field.key, value];
    })
  );
}
export function makePayload(definition, values) {
  const payload = bodyValues(definition.body, values);
  for (const field of definition.fields || []) {
    const raw = values[field.key];
    if (field.type !== 'boolean' && (raw === '' || raw === undefined || raw === null)) {
      if (field.required) throw new Error(`${field.label} is required.`);
      continue;
    }
    let value = raw;
    if (['number', 'integer'].includes(field.type)) {
      value = Number(raw);
      if (!Number.isFinite(value) || (field.type === 'integer' && !Number.isInteger(value)))
        throw new Error(`${field.label} must be a valid ${field.type}.`);
      if (field.min !== undefined && value < field.min)
        throw new Error(`${field.label} must be at least ${field.min}.`);
      if (field.max !== undefined && value > field.max)
        throw new Error(`${field.label} must be at most ${field.max}.`);
    } else if (field.type === 'datetime') {
      if (Number.isNaN(Date.parse(String(raw))))
        throw new Error(`${field.label} must be a valid date and time.`);
      value = new Date(String(raw)).toISOString();
    } else if (field.type === 'json') {
      try {
        value = JSON.parse(raw);
      } catch {
        throw new Error(`${field.label} must be valid JSON.`);
      }
    } else if (field.type === 'collection') {
      if (!Array.isArray(raw)) throw new Error(`${field.label} must be a list.`);
      value = raw.map((item) => makePayload({ fields: field.fields }, item));
    } else if (field.type === 'array') {
      value = String(raw)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    } else if (field.type === 'boolean') value = !!raw;
    else if (!field.multiple) value = String(raw).trim();
    if (
      field.required &&
      ((typeof value === 'string' && !value) || (Array.isArray(value) && !value.length))
    )
      throw new Error(`${field.label} is required.`);
    if (field.options && !field.options.includes(value))
      throw new Error(`Select a valid ${field.label.toLowerCase()}.`);
    if (field.equals !== undefined && value !== field.equals)
      throw new Error(`Enter ${field.equals} to confirm.`);
    if (
      field.type === 'asset' &&
      (field.multiple ? value : [value]).some(
        (url) => typeof url !== 'string' || !/^https:\/\//.test(url)
      )
    )
      throw new Error(`Upload ${field.label.toLowerCase()} before saving.`);
    assignPath(payload, field.key, value);
  }
  return payload;
}
export async function loadFeature(fetchJson, feature, user, recordId, scopeId) {
  if (!permitted(feature, user)) throw new Error('Your role does not have access to this feature.');
  const template = !user && feature.publicEndpoint ? feature.publicEndpoint : feature.endpoint;
  let endpoint =
    recordId && feature.detailEndpoint
      ? interpolate(feature.detailEndpoint, { id: recordId })
      : interpolate(template, { userId: user?.id });
  if (scopeId && feature.key === 'posts') {
    const separator = endpoint.includes('?') ? '&' : '?';
    endpoint += `${separator}groupId=${encodeURIComponent(scopeId)}`;
  }
  const data = await fetchJson(endpoint);
  const selected = feature.dataPath ? getValue(data, feature.dataPath) : data;
  if (selected === undefined || selected === null || typeof selected !== 'object')
    throw new Error('The server returned an invalid feature response.');
  let records = Array.isArray(selected) ? selected : [selected];
  if (recordId) {
    records = records.filter((record) => record.id === recordId || record.code === recordId);
    if (!records.length)
      throw new Error('This record was not found. Return to the list and choose a saved record.');
  }
  return records;
}
export function visibleActions(feature, record, user) {
  return (feature.actions || []).filter(
    (action) =>
      permitted(action, user) &&
      (!action.when ||
        Object.entries(action.when).every(([key, value]) => getValue(record, key) === value)) &&
      (!action.unlessMember || !record.members?.some((member) => member.userId === user.id)) &&
      (!action.ifMember || record.members?.some((member) => member.userId === user.id)) &&
      (!action.requiresVerifiedVendor || user.kycStatus === 'VERIFIED')
  );
}
export async function performAction(fetchJson, definition, record, values = {}, user = {}) {
  if (!permitted(definition, user)) throw new Error('Your role cannot perform this action.');
  const payload = makePayload(definition, values);
  const replacements = { ...record, ...values, userId: user.id };
  const endpoint = interpolate(definition.endpoint, replacements);
  const body = Object.keys(payload).length
    ? JSON.stringify(bodyValues(payload, replacements))
    : undefined;
  return fetchJson(endpoint, {
    method: definition.method || 'POST',
    ...(body ? { body } : {}),
  });
}
export function filterRecords(records, query, columns) {
  const needle = query.trim().toLowerCase();
  return records.filter(
    (record) =>
      !needle ||
      columns.some((column) =>
        formatValue(getValue(record, column.key)).toLowerCase().includes(needle)
      )
  );
}
