// Security metadata must never be editable or exposed through profile endpoints.
const securityKey =
  /^(twoFactor|lastTwoFactor|mfa|totp|session|password|secret|token|rbacMatrix|platformSettings)/i;
function publicMetadata(metadata) {
  return Object.fromEntries(
    Object.entries(
      metadata && typeof metadata === 'object' && !Array.isArray(metadata) ? metadata : {}
    ).filter(([key]) => !securityKey.test(key))
  );
}
function publicUser(user) {
  const { password, ...safe } = user;
  return { ...safe, roleMetadata: publicMetadata(safe.roleMetadata) };
}
module.exports = { publicUser, publicMetadata };
