import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from './ui/Button';
export default function ProfilePhoto({ onSaved }) {
  const { authFetchJson } = useAuth();
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const save = async () => {
    if (!file || busy) return;
    setBusy(true);
    setError('');
    try {
      const body = new FormData();
      body.append('image', file);
      const uploaded = await authFetchJson('/upload/profile-pic', { method: 'POST', body });
      await authFetchJson('/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ profilePicUrl: uploaded.url }),
      });
      setFile(null);
      await onSaved();
    } catch (cause) {
      setError(cause.message || 'Photo could not be saved.');
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="space-y-3 rounded-[14px] border border-stone-200 bg-white p-5 dark:border-stone-700 dark:bg-[#1a1d1b]">
      <label className="block text-sm font-medium">
        Profile photo
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="mt-2 block w-full text-sm"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />
      </label>
      <Button disabled={!file || busy} onClick={save}>
        {busy ? 'Uploading…' : 'Save photo'}
      </Button>
      {error && (
        <p role="alert" className="text-sm text-rose-700 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
