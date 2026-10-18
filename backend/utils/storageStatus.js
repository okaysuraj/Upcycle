// Cache provider health so integration screens do not ping on every request.
const { cloudinary } = require('../config/cloudinary');
let cached;
let checkedAt = 0;
let pending;
async function storageStatus() {
  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  )
    return { available: false, reason: 'Cloudinary credentials are required.' };
  if (cached && Date.now() - checkedAt < 60000) return cached;
  if (pending) return pending;
  pending = (async () => {
    try {
      const result = await cloudinary.api.ping();
      cached = {
        available: result.status === 'ok',
        reason:
          result.status === 'ok'
            ? 'The storage provider is reachable. Uploads save actual provider URLs.'
            : 'The storage provider did not confirm availability.',
      };
    } catch (error) {
      const status = error.http_code || error.error?.http_code;
      cached = {
        available: false,
        reason:
          status === 401
            ? 'The storage provider rejected the configured credentials. Configure valid Cloudinary credentials.'
            : 'The storage provider is unreachable. Check its configuration and try again.',
      };
    } finally {
      checkedAt = Date.now();
      pending = null;
    }
    return cached;
  })();
  return pending;
}
module.exports = { storageStatus };
