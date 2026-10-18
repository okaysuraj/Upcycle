import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';

export default function BinScanner({ records, onSelect }) {
  const video = useRef(null);
  const stream = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const choose = (value) => {
    const saved = records.find((record) => record.id === value.trim());
    if (!saved) {
      setError('That bin ID was not found. Scan or select a saved bin.');
      return;
    }
    setError('');
    setId(saved.id);
    onSelect(saved.id);
    setEnabled(false);
  };
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let timer;
    const start = async () => {
      try {
        if (!window.BarcodeDetector)
          throw new Error('QR scanning is unavailable in this browser. Select a saved bin below.');
        const detector = new window.BarcodeDetector({ formats: ['qr_code'] });
        const media = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });
        if (cancelled) {
          media.getTracks().forEach((track) => track.stop());
          return;
        }
        stream.current = media;
        video.current.srcObject = media;
        await video.current.play();
        const scan = async () => {
          if (cancelled) return;
          const results = await detector.detect(video.current);
          if (results[0]) {
            const saved = records.find((record) => record.id === results[0].rawValue.trim());
            if (saved) {
              setId(saved.id);
              onSelect(saved.id);
              setEnabled(false);
              return;
            }
            setError('Unrecognized bin ID. Choose a saved bin or try another code.');
          }
          timer = setTimeout(() => {
            void scan().catch((cause) => {
              setError(cause.message);
              setEnabled(false);
            });
          }, 500);
        };
        void scan().catch((cause) => {
          setError(cause.message);
          setEnabled(false);
        });
      } catch (cause) {
        setError(cause.message);
        setEnabled(false);
      }
    };
    void start();
    return () => {
      cancelled = true;
      clearTimeout(timer);
      stream.current?.getTracks().forEach((track) => track.stop());
      stream.current = null;
    };
  }, [enabled, records, onSelect]);
  return (
    <Card className="space-y-4 p-5">
      <h2 className="font-semibold">Find a saved bin</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setError('');
            setEnabled((value) => !value);
          }}
        >
          {enabled ? 'Stop camera' : 'Scan QR code'}
        </Button>
        <select
          className="min-w-0 flex-1 rounded-xl border bg-white p-3 dark:bg-[#232725]"
          value={id}
          onChange={(event) => choose(event.target.value)}
        >
          <option value="">Select saved bin</option>
          {records.map((record) => (
            <option key={record.id} value={record.id}>
              {record.location} · {record.category}
            </option>
          ))}
        </select>
      </div>
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          choose(id);
        }}
      >
        <input
          aria-label="Bin ID"
          value={id}
          onChange={(event) => setId(event.target.value)}
          placeholder="Enter bin ID"
          className="min-w-0 flex-1 rounded-xl border bg-white px-3 dark:bg-[#232725]"
        />
        <Button type="submit">Find bin</Button>
      </form>
      {enabled && (
        <video ref={video} playsInline muted className="max-h-80 w-full rounded-xl bg-black" />
      )}
      {error && (
        <p role="alert" className="text-sm text-rose-700 dark:text-rose-400">
          {error}
        </p>
      )}
    </Card>
  );
}
