import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function KycVerification() {
  const { authFetch, authFetchJson, user } = useAuth();
  const [files, setFiles] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const submit = async (event) => {
    event.preventDefault();
    if (!files.length || !agreed) return;
    setWorking(true);
    setError('');
    setNotice('');
    try {
      const body = new FormData();
      files.forEach((file) => body.append('documents', file));
      const uploaded = await authFetch('/upload/kyc-documents', { method: 'POST', body });
      if (!uploaded.ok) throw new Error('Could not upload your documents.');
      const { urls } = await uploaded.json();
      await authFetchJson('/users/kyc', {
        method: 'POST',
        body: JSON.stringify({ documentsUrl: urls }),
      });
      setNotice('Documents submitted. Your verification is pending administrator review.');
      setFiles([]);
      setAgreed(false);
    } catch (cause) {
      setError(cause.message || 'Could not submit documents.');
    } finally {
      setWorking(false);
    }
  };
  return (
    <div className="max-w-[480px] mx-auto">
      <Card className="p-5 space-y-5">
        <div>
          <p className="text-xs font-medium text-emerald-700">Vendor verification</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">Submit documents for review</h1>
          <p className="mt-2 text-sm text-stone-500">
            Upload one to three current business or facility documents. Submission sets your status
            to pending; an administrator must review them.
          </p>
        </div>
        {user?.role === 'VENDOR' ? (
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label htmlFor="kyc-files" className="block text-sm font-medium">
                Documents
              </label>
              <input
                id="kyc-files"
                type="file"
                accept=".pdf,image/jpeg,image/png,image/webp"
                multiple
                required
                onChange={(event) =>
                  (() => {
                    const selected = Array.from(event.target.files || []);
                    if (
                      selected.length > 3 ||
                      selected.some((file) => file.size > 10 * 1024 * 1024)
                    ) {
                      setError('Choose one to three files, up to 10 MB each.');
                      setFiles([]);
                    } else {
                      setFiles(selected);
                      setError('');
                    }
                  })()
                }
                className="mt-2 block w-full text-sm"
              />
              <p className="mt-1 text-xs text-stone-500">
                PDF or image, up to 10 MB each. Maximum three files.
              </p>
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                required
                className="mt-1"
              />
              <span>
                I confirm these documents are current and that I am authorized to submit them for
                review.
              </span>
            </label>
            {error && (
              <p role="alert" className="text-sm text-rose-700">
                {error}
              </p>
            )}
            <div className="flex flex-wrap gap-4 items-center">
              <Button type="submit" disabled={working || files.length === 0 || !agreed}>
                {working ? 'Uploading…' : 'Submit for review'}
              </Button>
              <Link to="/features/overview" className="text-sm text-stone-500 hover:underline">
                Cancel
              </Link>
            </div>
          </form>
        ) : (
          <p role="alert" className="text-sm">
            Sign in with a vendor account to submit documents.
          </p>
        )}
        {notice && (
          <p role="status" className="text-sm text-emerald-700 dark:text-emerald-400">
            {notice}
          </p>
        )}
      </Card>
    </div>
  );
}
