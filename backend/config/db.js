const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function connectDB() {
  try {
    await prisma.$connect();
    console.log('✅ PostgreSQL Connected via Prisma ORM');
  } catch (err) {
    console.error('⚠️  PostgreSQL connection error', err);
    process.exit(1);
  }
}

module.exports = { connectDB, prisma };
