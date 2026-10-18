// Both clients and the API validate the same supported forms.
const features = require('../../shared/features.mjs').default;
const valueAt = (object, key) => key.split('.').reduce((value, part) => value?.[part], object);
function validateFields(fields, body) {
  for (const field of fields || []) {
    const value = valueAt(body, field.key);
    if (value === undefined || value === null || value === '') {
      if (field.required) return `${field.label} is required`;
      continue;
    }
    if (['number', 'integer'].includes(field.type)) {
      if (
        typeof value !== 'number' ||
        !Number.isFinite(value) ||
        (field.type === 'integer' && !Number.isInteger(value))
      )
        return `${field.label} must be a valid ${field.type}`;
      if (field.min !== undefined && value < field.min)
        return `${field.label} must be at least ${field.min}`;
      if (field.max !== undefined && value > field.max)
        return `${field.label} must be at most ${field.max}`;
    } else if (field.type === 'boolean') {
      if (typeof value !== 'boolean') return `${field.label} must be a boolean`;
    } else if (field.type === 'datetime') {
      if (typeof value !== 'string' || Number.isNaN(Date.parse(value)))
        return `${field.label} must be a valid date and time`;
    } else if (field.type === 'asset') {
      const urls = field.multiple ? value : [value];
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
      if (
        !Array.isArray(urls) ||
        urls.some(
          (url) =>
            typeof url !== 'string' ||
            !cloudName ||
            !url.startsWith(`https://res.cloudinary.com/${cloudName}/`)
        )
      )
        return `Upload ${field.label.toLowerCase()} before saving`;
    } else if (field.type === 'array' || field.multiple) {
      if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || !item.trim()))
        return `${field.label} must contain valid selections`;
    } else if (field.type === 'collection') {
      if (!Array.isArray(value)) return `${field.label} must be a list`;
      for (const item of value) {
        if (!item || typeof item !== 'object' || Array.isArray(item))
          return `${field.label} contains an invalid entry`;
        const error = validateFields(field.fields, item);
        if (error) return error;
      }
    } else if (field.type !== 'json') {
      if (typeof value !== 'string' || (field.required && !value.trim()))
        return `${field.label} must be valid text`;
      if (field.type === 'url') {
        try {
          const url = new URL(value);
          if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
        } catch {
          return `${field.label} must be an HTTP or HTTPS URL`;
        }
      }
    }
    if (field.required && Array.isArray(value) && !value.length)
      return `${field.label} is required`;
    if (field.options && !field.options.includes(value))
      return `Select a valid ${field.label.toLowerCase()}`;
    if (field.equals !== undefined && value !== field.equals)
      return `Enter ${field.equals} to confirm`;
  }
  return null;
}
const definitions = features
  .flatMap((feature) => [
    feature.create,
    feature.edit,
    ...feature.actions,
    ...feature.toolbar,
    feature.batchAction,
  ])
  .filter(Boolean)
  .map((definition) => ({
    ...definition,
    pattern: new RegExp(
      '^' +
        definition.endpoint
          .split('?')[0]
          .replace(/[.*+?^$()|[\]\\]/g, '\\$&')
          .replace(/\{\w+\}/g, '[^/]+') +
        '/?$'
    ),
  }));
function featureValidation(req, res, next) {
  const matches = definitions.filter(
    (definition) =>
      (definition.method || 'POST') === req.method && definition.pattern.test(req.path)
  );
  if (!matches.length) return next();
  const presentFields = Array.from(
    new Map(
      matches
        .flatMap((definition) => definition.fields || [])
        .filter((field) => valueAt(req.body, field.key) !== undefined)
        .map((field) => [field.key, field])
    ).values()
  );
  const presentError = validateFields(presentFields, req.body || {});
  if (presentError) return res.status(400).json({ message: presentError });
  const errors = matches.map((definition) => validateFields(definition.fields, req.body || {}));
  if (errors.every(Boolean)) return res.status(400).json({ message: errors[0] });
  next();
}
module.exports = { featureValidation, validateFields };
