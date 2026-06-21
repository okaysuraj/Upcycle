import { useEffect, useState } from 'react';

export default function VerifyEmail({ token, onNavigateToLogin }) {
  const [status, setStatus] = useState('verifying'); // verifying, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) return;

    fetch('/api/auth/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
    .then(res => res.json().then(data => ({ status: res.status, data })))
    .then(({ status, data }) => {
      if (status === 200) {
        setStatus('success');
        setMessage(data.message);
      } else {
        setStatus('error');
        setMessage(data.message || 'Verification failed.');
      }
    })
    .catch(err => {
      setStatus('error');
      setMessage(err.message);
    });
  }, [token]);

  return (
    <div className="min-h-screen bg-[#fbfbfc] flex flex-col items-center justify-center p-6 text-[#2d382d]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e5e7eb] p-8 text-center">
        {status === 'verifying' && (
          <>
            <div className="w-12 h-12 border-4 border-[#4f7942]/30 border-t-[#4f7942] rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-bold mb-2">Verifying your email...</h2>
            <p className="text-[#6b7280]">Please wait a moment.</p>
          </>
        )}
        {status === 'success' && (
          <>
            <span className="material-symbols-outlined text-5xl text-[#4f7942] mb-4">check_circle</span>
            <h2 className="text-xl font-bold mb-2">Email Verified!</h2>
            <p className="text-[#6b7280] mb-6">{message}</p>
            <button 
              onClick={() => {
                // Clear token from URL
                window.history.replaceState({}, document.title, window.location.pathname);
                onNavigateToLogin();
              }}
              className="w-full bg-[#4f7942] text-white py-3 rounded-xl font-semibold hover:bg-[#3e5f34] transition-colors"
            >
              Go to Login
            </button>
          </>
        )}
        {status === 'error' && (
          <>
            <span className="material-symbols-outlined text-5xl text-red-500 mb-4">error</span>
            <h2 className="text-xl font-bold mb-2">Verification Failed</h2>
            <p className="text-[#6b7280] mb-6">{message}</p>
            <button 
              onClick={() => {
                window.history.replaceState({}, document.title, window.location.pathname);
                onNavigateToLogin();
              }}
              className="w-full bg-[#e5e7eb] text-[#4b5563] py-3 rounded-xl font-semibold hover:bg-[#d1d5db] transition-colors"
            >
              Return to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
