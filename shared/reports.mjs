// Export saved records as CSV, JSON, or printable HTML on either platform.
import { formatValue, getValue } from './feature-client.mjs';

export function downloadRecords(feature, records, format) {
  if (format === 'pdf') return openRecordPrint(feature, records);
  const content = exportRecords(feature, records, format);
  const type = format === 'csv' ? 'text/csv;charset=utf-8' : 'application/json';
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = globalThis.document.createElement('a');
  link.href = url;
  link.download = `upcycle-${feature.key}-${new Date().toISOString().slice(0, 10)}.${format}`;
  link.click();
  // Give the browser time to start reading the object URL before releasing it.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function exportRecords(feature, records, format = 'csv') {
  const rows = records.map((record) =>
    Object.fromEntries(
      feature.columns.map((column) => [column.label, getValue(record, column.key) ?? null])
    )
  );
  if (format === 'json')
    return JSON.stringify(
      {
        feature: feature.key,
        generatedAt: new Date().toISOString(),
        note: feature.note || 'Stored records; no certification is implied.',
        records: rows,
      },
      null,
      2
    );
  const cell = (value) => {
    const content = formatValue(value);
    return `"${(/^[=+@\-\t\r]/.test(content) ? "'" : '') + content.replaceAll('"', '""')}"`;
  };
  return [feature.columns.map((column) => column.label), ...rows.map((row) => Object.values(row))]
    .map((row) => row.map(cell).join(','))
    .join('\r\n');
}
export function reportHTML(feature, records) {
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[character]
    );
  const headers = feature.columns.map((column) => `<th>${escape(column.label)}</th>`).join('');
  const rows = records
    .map(
      (record) =>
        `<tr>${feature.columns.map((column) => `<td>${escape(formatValue(getValue(record, column.key)))}</td>`).join('')}</tr>`
    )
    .join('');
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Upcycle — ${escape(feature.title)}</title><style>@page{size:landscape;margin:16mm}body{font:12px/1.5 Arial,sans-serif;color:#191c1a}h1{font-size:24px}p{max-width:900px}table{border-collapse:collapse;width:100%}th,td{text-align:left;vertical-align:top;border:1px solid #e7e7e3;padding:8px;overflow-wrap:anywhere}th{background:#f4f4f0}tr{break-inside:avoid}</style></head><body><h1>${escape(feature.title)}</h1><p>Exported ${escape(new Date().toISOString())}. ${records.length} stored records.</p><p>${escape(feature.note || 'Saved database records. This document is not a certified report.')}</p><table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></body></html>`;
}
export function openRecordPrint(feature, records) {
  const popup = globalThis.window?.open('', '_blank');
  if (!popup) throw new Error('The print window was blocked. Allow popups and try again.');
  popup.document.write(reportHTML(feature, records));
  popup.document.close();
  popup.focus();
  setTimeout(() => popup.print(), 200);
}
