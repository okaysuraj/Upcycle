-- Additive only. Review and apply through the database deployment workflow.
ALTER TYPE "WasteCategory" ADD VALUE IF NOT EXISTS 'GLASS';
ALTER TYPE "WasteCategory" ADD VALUE IF NOT EXISTS 'METAL';
ALTER TABLE "EventRegistration" ADD COLUMN IF NOT EXISTS "hoursLogged" DOUBLE PRECISION NOT NULL DEFAULT 0;
