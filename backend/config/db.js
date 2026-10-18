// Share one Prisma client and bounded PostgreSQL pool across API routes.
require('dotenv').config();
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString,
  max: 10,
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  statement_timeout: 15000,
  query_timeout: 20000,
  application_name: 'upcycle-api',
});
pool.on('error', (error) =>
  console.error(
    JSON.stringify({ level: 'error', service: 'postgres-pool', code: error.code || error.name })
  )
);
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function connectDB() {
  try {
    await prisma.$connect();
  } catch (err) {
    console.error('⚠️  PostgreSQL connection error', err);
    process.exit(1);
  }
}

module.exports = { connectDB, prisma, pool };
