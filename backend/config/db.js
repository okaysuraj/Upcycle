const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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
