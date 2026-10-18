// Connect feature data to search, exports, records, and the record form.
import FeatureRecords from './features/FeatureRecords';
import FeatureForm from './features/FeatureForm';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFeatureData } from '../../../shared/use-feature.mjs';
import { filterRecords, permitted } from '../../../shared/feature-client.mjs';
import { downloadRecords } from '../../../shared/reports.mjs';
import Button from './ui/Button';
import BinScanner from './BinScanner';
import ProfilePhoto from './ProfilePhoto';

export default function FeatureScreen({ feature: suppliedKey, startCreate = false }) {
  const auth = useAuth();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const key = suppliedKey || params.feature;
  const recordId = params.id || searchParams.get('id') || undefined;
  const state = useFeatureData(
    key,
    auth,
    recordId,
    startCreate,
    searchParams.get('groupId') || undefined
  );
  const { feature, records, loading, error, notice, busy } = state;
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selected, setSelected] = useState([]);
  const [exportError, setExportError] = useState('');
  const [scanId, setScanId] = useState('');
  const urlQuery = searchParams.get('q') || '';

  useEffect(() => {
    setQuery(urlQuery);
    setSelected([]);
    setScanId('');
  }, [key, urlQuery]);

  if (!feature) return <p role="alert">Feature not found.</p>;

  const rows = filterRecords(records, query, feature.columns).filter(
    (record) => feature.kind !== 'scan' || !scanId || record.id === scanId
  );

  const exportData = (format) => {
    try {
      downloadRecords(feature, rows, format);
      setExportError('');
    } catch (cause) {
      setExportError(cause.message);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-14">
      {/* Feature Header */}
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200/80 pb-5 dark:border-stone-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/70 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60">
            {feature.group}
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            {feature.title}
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {feature.note || 'View and manage saved records.'}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Button variant="outline" disabled={loading || busy} onClick={state.reload}>
            {loading ? 'Loading…' : 'Refresh'}
          </Button>
          {feature.create && permitted(feature.create, auth.user) && (
            <Button disabled={busy} onClick={() => state.openForm(feature.create)}>
              Add record
            </Button>
          )}
        </div>
      </header>

      {/* Notifications & Error Alerts */}
      {(error || exportError) && (
        <div
          role="alert"
          className="rounded-2xl border border-rose-200 bg-rose-50/90 p-4 text-sm font-medium text-rose-800 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-300 shadow-xs"
        >
          {error || exportError}
        </div>
      )}
      {notice && (
        <p
          role="status"
          className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-3.5 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300 shadow-xs"
        >
          {notice}
        </p>
      )}

      {/* Embedded Kind Screens */}
      {feature.kind === 'scan' && <BinScanner records={records} onSelect={setScanId} />}
      {key === 'profile' && <ProfilePhoto onSaved={state.reload} />}

      {!loading && !error && (
        <>
          {/* Controls & Search Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {feature.kind !== 'metrics' && (
              <div className="w-full min-w-0 sm:w-auto sm:flex-1">
                <label className="relative block">
                  <span className="sr-only">Search {feature.title}</span>
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500 flex items-center justify-center pointer-events-none">
                    <span className="material-symbols-outlined text-[18px]">search</span>
                  </span>
                  <input
                    className="w-full min-h-[44px] rounded-[14px] border border-stone-200 bg-white pl-10 pr-4 text-sm placeholder:text-stone-400 focus:border-emerald-600 focus:outline-none dark:border-stone-800 dark:bg-[#1a1d1b] dark:placeholder:text-stone-500 shadow-xs transition-colors"
                    placeholder={`Search ${feature.title.toLowerCase()}…`}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </label>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-2">
              {feature.toolbar
                .filter((action) => permitted(action, auth.user))
                .map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    disabled={busy}
                    onClick={() => state.run(action)}
                  >
                    {action.label}
                  </Button>
                ))}
              {feature.export && (
                <>
                  <Button variant="outline" size="sm" onClick={() => exportData('csv')}>
                    Export CSV
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => exportData('json')}>
                    Export JSON
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => exportData('pdf')}>
                    Print / save PDF
                  </Button>
                </>
              )}
              {feature.batchAction && permitted(feature.batchAction, auth.user) && (
                <Button
                  disabled={busy || !selected.length}
                  onClick={() =>
                    state.runBatch(records.filter((record) => selected.includes(record.id)))
                  }
                >
                  {feature.batchAction.label} ({selected.length})
                </Button>
              )}
            </div>
          </div>

          {/* Metrics Kind View */}
          <FeatureRecords
            state={state}
            rows={rows}
            user={auth.user}
            selected={selected}
            setSelected={setSelected}
          />
        </>
      )}

      {loading && (
        <div role="status" className="py-14 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin mx-auto mb-3" />
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
            Loading saved records…
          </p>
        </div>
      )}

      {/* Record Creation / Edit Modal */}
      <FeatureForm state={state} />
    </div>
  );
}
