// Coordinate feature loading, form choices, and guarded mutations for both clients.
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getFeature,
  initialValues,
  interpolate,
  loadFeature,
  performAction,
  permitted,
} from './feature-client.mjs';

export function useFeatureData(key, auth, recordId, startCreate = false, scopeId) {
  const feature = getFeature(key);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [form, setForm] = useState(null);
  const [values, setValues] = useState({});
  const [options, setOptions] = useState({});
  const [formError, setFormError] = useState('');
  const [optionsLoading, setOptionsLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  // Ignore responses that finish after navigation or a newer reload.
  const generation = useRef(0);
  const formGeneration = useRef(0);
  // A ref blocks double taps before React can render the busy state.
  const mutation = useRef(false);
  const user = auth.user;
  const fetchJson = auth.authFetchJson;

  const reload = useCallback(async () => {
    const current = ++generation.current;
    setLoading(true);
    setError('');
    try {
      if (!feature) throw new Error('Feature not found.');
      const data = await loadFeature(fetchJson, feature, user, recordId, scopeId);
      if (current === generation.current) setRecords(data);
      return true;
    } catch (cause) {
      if (current === generation.current) {
        setError(cause.message || 'Could not load records.');
        setRecords([]);
      }
      return false;
    } finally {
      if (current === generation.current) setLoading(false);
    }
  }, [feature, fetchJson, user, recordId, scopeId]);

  useEffect(() => {
    setNotice('');
    setForm(null);
    void reload();
    return () => {
      generation.current++;
      formGeneration.current++;
    };
  }, [reload]);

  const openForm = useCallback(
    async (definition, record = {}, label = 'Add record') => {
      if (!permitted(definition, user)) {
        setError('Your role cannot perform this action.');
        return;
      }
      const current = ++formGeneration.current;
      setForm({ definition, record, label });
      setValues(
        initialValues(
          definition,
          { ...record, ...(scopeId ? { groupId: scopeId } : {}) },
          user || {}
        )
      );
      setOptions({});
      setFormError('');
      setOptionsLoading(true);
      try {
        const sources = await Promise.all(
          (definition.fields || [])
            .filter((field) => field.source)
            .map(async (field) => {
              const response = await fetchJson(interpolate(field.source, record));
              if (!Array.isArray(response))
                throw new Error(`Could not load ${field.label.toLowerCase()} choices.`);
              return [
                field.key,
                field.memberOnly
                  ? response.filter((group) =>
                      group.members?.some((member) => member.userId === user?.id)
                    )
                  : response,
              ];
            })
        );
        if (current === formGeneration.current) setOptions(Object.fromEntries(sources));
      } catch (cause) {
        if (current === formGeneration.current) setFormError(cause.message);
      } finally {
        if (current === formGeneration.current) setOptionsLoading(false);
      }
    },
    [fetchJson, user, scopeId]
  );

  useEffect(() => {
    if (startCreate && feature?.create && permitted(feature.create, user))
      void openForm(feature.create);
  }, [startCreate, feature, openForm, user]);

  const closeForm = () => {
    if (!busy) {
      formGeneration.current++;
      setForm(null);
    }
  };
  const updateValue = (key, value) => setValues((previous) => ({ ...previous, [key]: value }));
  const submit = async () => {
    if (!form || busy || mutation.current || optionsLoading) return;
    mutation.current = true;
    const current = generation.current;
    setBusy(true);
    setFormError('');
    setNotice('');
    try {
      await performAction(fetchJson, form.definition, form.record, values, user);
      if (form.definition.endpoint === '/users/deactivate') {
        await auth.logout();
        return;
      }
      if (current !== generation.current) return;
      setForm(null);
      setNotice('Saved successfully.');
      await reload();
    } catch (cause) {
      if (current === generation.current)
        setFormError(cause.message || 'Changes could not be saved.');
    } finally {
      mutation.current = false;
      setBusy(false);
    }
  };
  const run = async (definition, record = {}) => {
    if (busy || mutation.current) return;
    if (definition.fields?.length || definition.confirm)
      return openForm(definition, record, definition.label);
    mutation.current = true;
    const current = generation.current;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await performAction(fetchJson, definition, record, {}, user);
      if (current !== generation.current) return;
      setNotice('Saved successfully.');
      await reload();
    } catch (cause) {
      if (current === generation.current) setError(cause.message || 'Changes could not be saved.');
    } finally {
      mutation.current = false;
      setBusy(false);
    }
  };
  const runBatch = async (selected) => {
    if (busy || mutation.current || !selected.length || !feature.batchAction) return;
    mutation.current = true;
    const current = generation.current;
    setBusy(true);
    setError('');
    setNotice('');
    let completed = 0;
    try {
      for (const record of selected) {
        if (current !== generation.current) return;
        await performAction(fetchJson, feature.batchAction, record, {}, user);
        completed++;
      }
      if (current !== generation.current) return;
      setNotice(`Saved ${completed} selected records.`);
      await reload();
    } catch (cause) {
      if (current === generation.current) {
        await reload();
        setError(`Saved ${completed} of ${selected.length} records. ${cause.message}`);
      }
    } finally {
      mutation.current = false;
      setBusy(false);
    }
  };
  return {
    feature,
    records,
    loading,
    error,
    notice,
    form,
    values,
    options,
    formError,
    optionsLoading,
    busy,
    reload,
    openForm,
    closeForm,
    updateValue,
    submit,
    run,
    runBatch,
  };
}
