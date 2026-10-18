import type { Feature } from './feature-client.mjs';
export function downloadRecords(
  feature: Feature,
  records: any[],
  format: 'csv' | 'json' | 'pdf'
): void;
export function exportRecords(feature: Feature, records: any[], format?: string): string;
export function reportHTML(feature: Feature, records: any[]): string;
export function openRecordPrint(feature: Feature, records: any[]): void;
