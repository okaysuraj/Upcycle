// Render stored values and nested details without changing the records.
import Button from '../ui/Button';
import { formatValue } from '../../../../shared/feature-client.mjs';

export function Value({ value }) {
  if (typeof value === 'string' && /^https?:\/\//i.test(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="text-[var(--accent-emerald)] font-medium underline hover:opacity-80 dark:text-[var(--accent-emerald)]"
      >
        Open document or lesson
      </a>
    );
  }
  return <span className="tabular-nums">{formatValue(value)}</span>;
}

export function NestedContent({ value, name, onMilestone, busy }) {
  if (value === undefined || value === null) return null;
  const entries = Array.isArray(value) ? value : [value];
  return (
    <div className="mt-4 space-y-3 border-t border-stone-200/80 pt-4 dark:border-stone-800">
      <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
        {name}
      </h3>
      {entries.length === 0 ? (
        <p className="text-sm text-stone-500 dark:text-stone-400">None recorded.</p>
      ) : (
        entries.map((entry, index) => (
          <div
            key={entry?.id || index}
            className="rounded-xl bg-stone-50/80 p-3.5 dark:bg-[#232725] border border-stone-100 dark:border-stone-800/80"
          >
            {typeof entry === 'object' && entry !== null ? (
              <dl className="space-y-2">
                {Object.entries(entry).map(([key, content]) => (
                  <div key={key} className="text-sm">
                    <dt className="text-xs font-medium text-stone-500 dark:text-stone-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </dt>
                    <dd className="mt-0.5 break-words font-medium">
                      {typeof content === 'object' && content !== null ? (
                        <NestedContent value={content} name={key} busy={busy} />
                      ) : (
                        <Value value={content} />
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <Value value={entry} />
            )}
            {name === 'milestones' && entry?.id && onMilestone && (
              <Button
                className="mt-3"
                variant="outline"
                size="sm"
                disabled={busy}
                onClick={() => onMilestone(entry)}
              >
                {entry.completed ? 'Reopen milestone' : 'Complete milestone'}
              </Button>
            )}
          </div>
        ))
      )}
    </div>
  );
}
