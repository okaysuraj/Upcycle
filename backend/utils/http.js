// Common HTTP errors, async handlers, roles, and transaction retries.
const { Prisma } = require('@prisma/client');
const operationsRoles = ['ADMIN', 'PLATFORM_ADMIN', 'CAMPUS_ADMIN', 'STAFF', 'WASTE_STAFF'];
const adminRoles = ['ADMIN', 'PLATFORM_ADMIN'];
function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}
function positiveNumber(value, label = 'Amount') {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0)
    throw httpError(400, `${label} must be greater than zero`);
  return number;
}
const route = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
  } catch (error) {
    next(error);
  }
};
// Retry serializable transactions so capacity and balance checks remain atomic.
async function transaction(prisma, handler) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await prisma.$transaction(handler, {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      });
    } catch (error) {
      if (error.code !== 'P2034' || attempt === 2) throw error;
    }
  }
}
module.exports = { operationsRoles, adminRoles, httpError, positiveNumber, route, transaction };
