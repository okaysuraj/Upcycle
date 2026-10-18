import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
export default function AssetField({ field, value, onChange, onBusy }) {
  const { authFetchJson } = useAuth();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function upload(files) {
    if (!files.length) return;
    setError('');
    setBusy(true);
    onBusy(true);
    try {
      if (
        files.length > (field.maxFiles || 1) ||
        files.some((file) => file.size > 10 * 1024 * 1024)
      )
        throw new Error(`Choose up to ${field.maxFiles || 1} images, no larger than 10 MB each.`);
      const body = new FormData();
      files.forEach((file) => body.append(field.formKey || 'image', file));
      const saved = await authFetchJson(field.uploadEndpoint, { method: 'POST', body });
      const urls = field.multiple ? saved.urls : [saved.url];
      if (
        !Array.isArray(urls) ||
        urls.some((url) => typeof url !== 'string' || !url.startsWith('https://'))
      )
        throw new Error('The provider did not return saved image URLs.');
      onChange(field.multiple ? urls : urls[0]);
    } catch (cause) {
      setError(cause.message);
    } finally {
      setBusy(false);
      onBusy(false);
    }
  }
  return (
    <div className="space-y-2">
      <input
        aria-label={field.label}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple={field.multiple}
        disabled={busy}
        onChange={(event) => {
          void upload(Array.from(event.target.files || []));
        }}
      />
      {busy && (
        <p role="status" className="text-sm">
          Uploading image…
        </p>
      )}
      {(Array.isArray(value) ? value : value ? [value] : []).map((url) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="block text-sm text-[var(--accent-emerald)] underline"
        >
          Open saved image
        </a>
      ))}
      {error && (
        <p role="alert" className="text-sm text-rose-700 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
