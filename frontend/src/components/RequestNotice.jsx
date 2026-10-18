import { useEffect, useState } from 'react';

export default function RequestNotice() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const handleError = (event) => setMessage(event.detail);
    window.addEventListener('upcycle:request-error', handleError);
    return () => window.removeEventListener('upcycle:request-error', handleError);
  }, []);
  if (!message) return null;
  return (
    <div
      role="alert"
      className="fixed bottom-24 md:bottom-6 left-4 right-4 md:left-auto md:max-w-md z-[100] flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 shadow-lg dark:bg-rose-950 dark:border-rose-800 dark:text-rose-100"
    >
      <p className="flex-1">{message}</p>
      <button
        type="button"
        aria-label="Dismiss error"
        onClick={() => setMessage('')}
        className="p-1"
      >
        ✕
      </button>
    </div>
  );
}
