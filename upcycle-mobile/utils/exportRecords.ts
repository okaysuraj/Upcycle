import { Platform } from 'react-native';
import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import type { Feature } from '../../shared/feature-client.mjs';
import { downloadRecords, exportRecords, reportHTML } from '../../shared/reports.mjs';

// Browsers download records; native devices share a file from their cache.
export async function exportFeatureRecords(
  feature: Feature,
  records: any[],
  format: 'csv' | 'json' | 'pdf'
) {
  if (Platform.OS === 'web') return downloadRecords(feature, records, format);
  if (!(await Sharing.isAvailableAsync())) {
    throw new Error('File sharing is unavailable on this device.');
  }

  let uri: string;
  if (format === 'pdf') {
    const file = await Print.printToFileAsync({ html: reportHTML(feature, records) });
    uri = file.uri;
  } else {
    const file = new File(Paths.cache, `upcycle-${feature.key}-${Date.now()}.${format}`);
    file.create();
    file.write(exportRecords(feature, records, format));
    uri = file.uri;
  }

  const mimeTypes = { csv: 'text/csv', json: 'application/json', pdf: 'application/pdf' };
  await Sharing.shareAsync(uri, {
    mimeType: mimeTypes[format],
    ...(format === 'pdf' ? { UTI: '.pdf' } : {}),
    dialogTitle: 'Export saved records',
  });
}
