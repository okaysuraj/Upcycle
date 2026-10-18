-- Unknown measurements remain NULL; existing records are retained unchanged.
ALTER TABLE "User" ALTER COLUMN "availabilityHours" SET DEFAULT 0;
ALTER TABLE "Campus" ALTER COLUMN "sustainabilityScore" DROP NOT NULL,
  ALTER COLUMN "sustainabilityScore" DROP DEFAULT;
ALTER TABLE "Building" ALTER COLUMN "efficiency" DROP NOT NULL,
  ALTER COLUMN "efficiency" DROP DEFAULT;
ALTER TABLE "Course" ALTER COLUMN "rating" DROP NOT NULL,
  ALTER COLUMN "rating" DROP DEFAULT;
ALTER TABLE "GoalMilestone" ALTER COLUMN "leadTeam" DROP NOT NULL;
