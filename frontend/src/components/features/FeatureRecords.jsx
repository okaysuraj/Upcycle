// Display metrics or saved records, including their permitted actions.
import { Link } from 'react-router-dom';
import { getValue, permitted, visibleActions } from '../../../../shared/feature-client.mjs';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Value, NestedContent } from './RecordValues';

export default function FeatureRecords({ state, rows, user, selected, setSelected }) {
  const { feature, records, busy } = state;
  if (!feature) return null;
  const milestone = (record) =>
    state.run(
      {
        endpoint: '/goals/milestones/{id}',
        method: 'PATCH',
        roles: feature.roles,
        fields: [],
        body: { completed: !record.completed },
      },
      record
    );

  return feature.kind === 'metrics' ? (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {feature.columns.map((column) => (
        <Card key={column.key} className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            {column.label}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
            <Value value={getValue(records[0], column.key)} />
          </p>
        </Card>
      ))}
    </div>
  ) : rows.length === 0 ? (
    /* Serene Empty State */
    <Card className="p-10 text-center">
      <div className="w-12 h-12 rounded-2xl bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-500 flex items-center justify-center mx-auto mb-3.5">
        <span className="material-symbols-outlined text-[24px]">inbox</span>
      </div>
      <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">
        {records.length ? 'No matching records' : 'No records yet'}
      </h2>
      <p className="mt-1 text-sm text-stone-500 dark:text-stone-400 max-w-sm mx-auto">
        {records.length
          ? 'Try adjusting your search query to find recorded items.'
          : 'Saved records will appear here once submitted.'}
      </p>
    </Card>
  ) : (
    /* Records Grid */
    <div className="grid items-start gap-4 md:grid-cols-2">
      {rows.map((record, index) => (
        <Card key={record.id || index} className="p-5 sm:p-6 transition-all">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h2 className="min-w-0 break-words text-base font-bold tracking-tight text-stone-900 dark:text-stone-100">
              {record.title ||
                record.name ||
                record.location ||
                record.subject ||
                record.message ||
                record.badge?.name ||
                feature.title}
            </h2>
            {feature.batchAction && (
              <input
                type="checkbox"
                aria-label={`Select ${record.title || record.id}`}
                checked={selected.includes(record.id)}
                onChange={(event) =>
                  setSelected((previous) =>
                    event.target.checked
                      ? [...previous, record.id]
                      : previous.filter((id) => id !== record.id)
                  )
                }
                className="h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
              />
            )}
          </div>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {feature.columns.map((column) => (
              <div key={column.key} className="space-y-0.5">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {column.label}
                </dt>
                <dd className="break-words text-sm font-medium text-stone-800 dark:text-stone-200">
                  <Value value={getValue(record, column.key)} />
                </dd>
              </div>
            ))}
          </dl>
          {feature.nested.map((name) => (
            <NestedContent
              key={name}
              name={name}
              value={record[name]}
              onMilestone={feature.milestoneActions ? milestone : undefined}
              busy={busy}
            />
          ))}
          {feature.map &&
            record.latitude !== null &&
            record.latitude !== undefined &&
            record.longitude !== null &&
            record.longitude !== undefined && (
              <a
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-emerald)] underline hover:opacity-80 dark:text-[var(--accent-emerald)]"
                href={`https://www.google.com/maps/search/?api=1&query=${record.latitude},${record.longitude}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>Open recorded location</span>
              </a>
            )}
          {feature.key === 'groups' && (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link
                to={`/features/groups?id=${record.id}`}
                className="text-xs font-semibold text-[var(--accent-emerald)] underline hover:opacity-80"
              >
                Open organization
              </Link>
              {record.members?.some((member) => member.userId === user?.id) && (
                <Link
                  to={`/features/posts?groupId=${record.id}`}
                  className="text-xs font-semibold text-[var(--accent-emerald)] underline hover:opacity-80"
                >
                  Open organization feed
                </Link>
              )}
            </div>
          )}
          {feature.kind === 'search' && (
            <Link
              className="mt-4 inline-block text-xs font-semibold text-[var(--accent-emerald)] underline hover:opacity-80 dark:text-[var(--accent-emerald)]"
              to={`/features/${record.feature}?id=${record.id}`}
            >
              Open record
            </Link>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-2 pt-3 border-t border-stone-100 dark:border-stone-800/60">
            {feature.edit && permitted(feature.edit, user) && (
              <Button
                variant="outline"
                size="sm"
                disabled={busy}
                onClick={() => state.openForm(feature.edit, record, 'Edit record')}
              >
                Edit record
              </Button>
            )}
            {visibleActions(feature, record, user).map((action) => (
              <Button
                key={action.label}
                size="sm"
                variant="outline"
                disabled={busy}
                onClick={() => state.run(action, record)}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
