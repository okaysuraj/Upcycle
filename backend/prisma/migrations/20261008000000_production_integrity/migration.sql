-- Additive schema hardening. Preflight existing data with npm run db:integrity.
BEGIN;
SET LOCAL lock_timeout = '5s';
-- AlterTable
ALTER TABLE "SmartBin" ALTER COLUMN "fillLevel" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RewardItem" ALTER COLUMN "quantityAvailable" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "FleetVehicle" ALTER COLUMN "batteryPct" DROP DEFAULT;

-- AlterTable
ALTER TABLE "DispatchOrder" ALTER COLUMN "etaMinutes" DROP DEFAULT;

-- AlterTable
ALTER TABLE "SustainabilityGoal" ALTER COLUMN "targetYear" DROP DEFAULT;

-- AlterTable
ALTER TABLE "VolunteerShift" ALTER COLUMN "hours" DROP DEFAULT,
ALTER COLUMN "points" DROP DEFAULT,
ALTER COLUMN "maxSlots" DROP DEFAULT;

-- CreateTable
CREATE TABLE "PostLike" (
    "postId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostLike_pkey" PRIMARY KEY ("postId","userId")
);

-- CreateIndex
CREATE INDEX "PostLike_userId_idx" ON "PostLike"("userId");

-- CreateIndex
CREATE INDEX "User_campusId_role_idx" ON "User"("campusId", "role");

-- CreateIndex
CREATE INDEX "User_isActive_points_idx" ON "User"("isActive", "points");

-- CreateIndex
CREATE INDEX "SmartBin_campusId_fillLevel_idx" ON "SmartBin"("campusId", "fillLevel");

-- CreateIndex
CREATE INDEX "SmartBin_buildingId_idx" ON "SmartBin"("buildingId");

-- CreateIndex
CREATE INDEX "WasteLog_campusId_date_idx" ON "WasteLog"("campusId", "date");

-- CreateIndex
CREATE INDEX "WasteLog_userId_date_idx" ON "WasteLog"("userId", "date");

-- CreateIndex
CREATE INDEX "MarketplaceListing_status_createdAt_idx" ON "MarketplaceListing"("status", "createdAt");

-- CreateIndex
CREATE INDEX "MarketplaceListing_vendorId_idx" ON "MarketplaceListing"("vendorId");

-- CreateIndex
CREATE INDEX "MarketplaceListing_campusId_idx" ON "MarketplaceListing"("campusId");

-- CreateIndex
CREATE INDEX "Event_campusId_date_idx" ON "Event"("campusId", "date");

-- CreateIndex
CREATE INDEX "Event_status_date_idx" ON "Event"("status", "date");

-- CreateIndex
CREATE INDEX "EventRegistration_userId_status_idx" ON "EventRegistration"("userId", "status");

-- CreateIndex
CREATE INDEX "Task_assignedToId_status_idx" ON "Task"("assignedToId", "status");

-- CreateIndex
CREATE INDEX "Task_status_dueDate_idx" ON "Task"("status", "dueDate");

-- CreateIndex
CREATE INDEX "Notification_userId_read_createdAt_idx" ON "Notification"("userId", "read", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_taskId_idx" ON "Notification"("taskId");

-- CreateIndex
CREATE INDEX "Harvest_plantId_date_idx" ON "Harvest"("plantId", "date");

-- CreateIndex
CREATE INDEX "CarbonFootprint_campusId_month_idx" ON "CarbonFootprint"("campusId", "month");

-- CreateIndex
CREATE INDEX "WaterUsage_campusId_date_idx" ON "WaterUsage"("campusId", "date");

-- CreateIndex
CREATE INDEX "EnergyUsage_campusId_date_idx" ON "EnergyUsage"("campusId", "date");

-- CreateIndex
CREATE INDEX "MonthlyESGReport_campusId_month_idx" ON "MonthlyESGReport"("campusId", "month");

-- CreateIndex
CREATE INDEX "RFP_campusId_deadline_idx" ON "RFP"("campusId", "deadline");

-- CreateIndex
CREATE INDEX "Quote_rfpId_idx" ON "Quote"("rfpId");

-- CreateIndex
CREATE INDEX "Quote_vendorId_createdAt_idx" ON "Quote"("vendorId", "createdAt");

-- CreateIndex
CREATE INDEX "EscrowTransaction_buyerId_createdAt_idx" ON "EscrowTransaction"("buyerId", "createdAt");

-- CreateIndex
CREATE INDEX "EscrowTransaction_sellerId_createdAt_idx" ON "EscrowTransaction"("sellerId", "createdAt");

-- CreateIndex
CREATE INDEX "EscrowTransaction_listingId_idx" ON "EscrowTransaction"("listingId");

-- CreateIndex
CREATE INDEX "VendorVerification_vendorId_status_idx" ON "VendorVerification"("vendorId", "status");

-- CreateIndex
CREATE INDEX "UserBadge_badgeId_idx" ON "UserBadge"("badgeId");

-- CreateIndex
CREATE UNIQUE INDEX "UserBadge_userId_badgeId_key" ON "UserBadge"("userId", "badgeId");

-- CreateIndex
CREATE INDEX "Redemption_userId_redeemedAt_idx" ON "Redemption"("userId", "redeemedAt");

-- CreateIndex
CREATE INDEX "Redemption_rewardId_idx" ON "Redemption"("rewardId");

-- CreateIndex
CREATE INDEX "Post_authorId_idx" ON "Post"("authorId");

-- CreateIndex
CREATE INDEX "Post_campusId_createdAt_idx" ON "Post"("campusId", "createdAt");

-- CreateIndex
CREATE INDEX "Post_groupId_createdAt_idx" ON "Post"("groupId", "createdAt");

-- CreateIndex
CREATE INDEX "Comment_postId_createdAt_idx" ON "Comment"("postId", "createdAt");

-- CreateIndex
CREATE INDEX "Comment_authorId_idx" ON "Comment"("authorId");

-- CreateIndex
CREATE INDEX "EcoGroup_campusId_idx" ON "EcoGroup"("campusId");

-- CreateIndex
CREATE INDEX "EcoGroupMember_userId_idx" ON "EcoGroupMember"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "EcoGroupMember_groupId_userId_key" ON "EcoGroupMember"("groupId", "userId");

-- CreateIndex
CREATE INDEX "AuditLog_timestamp_idx" ON "AuditLog"("timestamp");

-- CreateIndex
CREATE INDEX "AuditLog_userId_idx" ON "AuditLog"("userId");

-- CreateIndex
CREATE INDEX "AuditLog_entity_entityId_idx" ON "AuditLog"("entity", "entityId");

-- CreateIndex
CREATE INDEX "ContentModeration_status_createdAt_idx" ON "ContentModeration"("status", "createdAt");

-- CreateIndex
CREATE INDEX "ContentModeration_postId_idx" ON "ContentModeration"("postId");

-- CreateIndex
CREATE INDEX "ContentModeration_reportedById_idx" ON "ContentModeration"("reportedById");

-- CreateIndex
CREATE INDEX "Dispute_userId_status_idx" ON "Dispute"("userId", "status");

-- CreateIndex
CREATE INDEX "Building_campusId_idx" ON "Building"("campusId");

-- CreateIndex
CREATE INDEX "SupportTicket_userId_createdAt_idx" ON "SupportTicket"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "SupportTicket_status_priority_idx" ON "SupportTicket"("status", "priority");

-- CreateIndex
CREATE INDEX "DispatchOrder_campusId_createdAt_idx" ON "DispatchOrder"("campusId", "createdAt");

-- CreateIndex
CREATE INDEX "DispatchOrder_vehicleId_status_idx" ON "DispatchOrder"("vehicleId", "status");

-- CreateIndex
CREATE INDEX "SustainabilityGoal_campusId_idx" ON "SustainabilityGoal"("campusId");

-- CreateIndex
CREATE INDEX "GoalMilestone_goalId_idx" ON "GoalMilestone"("goalId");

-- CreateIndex
CREATE INDEX "VolunteerShift_campusId_date_idx" ON "VolunteerShift"("campusId", "date");

-- CreateIndex
CREATE INDEX "VolunteerSignup_userId_status_idx" ON "VolunteerSignup"("userId", "status");

-- AddForeignKey
ALTER TABLE "PostLike" ADD CONSTRAINT "PostLike_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLike" ADD CONSTRAINT "PostLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "User" ADD CONSTRAINT "User_nonnegative_balances" CHECK ("points" >= 0 AND "activeTasks" >= 0 AND "availabilityHours" >= 0) NOT VALID;

ALTER TABLE "SmartBin" ADD CONSTRAINT "SmartBin_fill_range" CHECK ("fillLevel" >= 0 AND "fillLevel" <= 100) NOT VALID;

ALTER TABLE "WasteLog" ADD CONSTRAINT "WasteLog_positive_quantity" CHECK ("quantityKg" > 0 AND "quantityKg" < 'Infinity'::float8) NOT VALID;

ALTER TABLE "MarketplaceListing" ADD CONSTRAINT "MarketplaceListing_valid_price" CHECK ("price" IS NULL OR ("price" >= 0 AND "price" < 'Infinity'::float8)) NOT VALID;

ALTER TABLE "Event" ADD CONSTRAINT "Event_positive_capacity" CHECK ("maxAttendees" IS NULL OR "maxAttendees" > 0) NOT VALID;

ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_hours_range" CHECK ("hoursLogged" >= 0 AND "hoursLogged" <= 24) NOT VALID;

ALTER TABLE "Resource" ADD CONSTRAINT "Resource_nonnegative_stock" CHECK ("quantity" >= 0 AND "threshold" >= 0) NOT VALID;

ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_positive_quantity" CHECK ("quantity" > 0 AND "quantity" < 'Infinity'::float8) NOT VALID;

ALTER TABLE "CarbonFootprint" ADD CONSTRAINT "CarbonFootprint_nonnegative_measurements" CHECK ("totalEmissions" >= 0 AND "totalEmissions" < 'Infinity'::float8 AND "reduction" >= 0 AND "reduction" < 'Infinity'::float8) NOT VALID;

ALTER TABLE "WaterUsage" ADD CONSTRAINT "WaterUsage_nonnegative_measurements" CHECK ("gallonsUsed" >= 0 AND "gallonsUsed" < 'Infinity'::float8 AND "saved" >= 0 AND "saved" < 'Infinity'::float8) NOT VALID;

ALTER TABLE "EnergyUsage" ADD CONSTRAINT "EnergyUsage_valid_measurements" CHECK ("kwhUsed" >= 0 AND "kwhUsed" < 'Infinity'::float8 AND "percentageRenewable" >= 0 AND "percentageRenewable" <= 100) NOT VALID;

ALTER TABLE "Quote" ADD CONSTRAINT "Quote_positive_amount" CHECK ("amount" > 0 AND "amount" < 'Infinity'::float8) NOT VALID;

ALTER TABLE "EscrowTransaction" ADD CONSTRAINT "EscrowTransaction_valid_amount_parties" CHECK ("amount" > 0 AND "amount" < 'Infinity'::float8 AND "buyerId" <> "sellerId") NOT VALID;

ALTER TABLE "Badge" ADD CONSTRAINT "Badge_nonnegative_points" CHECK ("pointsAwarded" >= 0) NOT VALID;

ALTER TABLE "RewardItem" ADD CONSTRAINT "RewardItem_valid_stock_cost" CHECK ("pointsCost" > 0 AND "quantityAvailable" >= 0) NOT VALID;

ALTER TABLE "Post" ADD CONSTRAINT "Post_nonnegative_likes" CHECK ("likes" >= 0) NOT VALID;

ALTER TABLE "Building" ADD CONSTRAINT "Building_valid_zones_efficiency" CHECK ("zonesCount" > 0 AND ("efficiency" IS NULL OR ("efficiency" >= 0 AND "efficiency" <= 100))) NOT VALID;

ALTER TABLE "FleetVehicle" ADD CONSTRAINT "FleetVehicle_valid_observations" CHECK ("batteryPct" >= 0 AND "batteryPct" <= 100 AND ("latitude" IS NULL OR ("latitude" >= -90 AND "latitude" <= 90)) AND ("longitude" IS NULL OR ("longitude" >= -180 AND "longitude" <= 180)) AND (("latitude" IS NULL) = ("longitude" IS NULL))) NOT VALID;

ALTER TABLE "DispatchOrder" ADD CONSTRAINT "DispatchOrder_valid_payload_eta" CHECK ("payloadKg" >= 0 AND "payloadKg" < 'Infinity'::float8 AND "etaMinutes" >= 0) NOT VALID;

ALTER TABLE "SustainabilityGoal" ADD CONSTRAINT "SustainabilityGoal_progress_range" CHECK ("progressPct" >= 0 AND "progressPct" <= 100 AND "targetYear" >= 2000 AND "targetYear" <= 2200) NOT VALID;

ALTER TABLE "VolunteerShift" ADD CONSTRAINT "VolunteerShift_valid_capacity_hours_points" CHECK ("maxSlots" > 0 AND "hours" > 0 AND "hours" <= 24 AND "points" >= 0) NOT VALID;

ALTER TABLE "Course" ADD CONSTRAINT "Course_valid_duration_rating" CHECK ("durationHrs" > 0 AND "durationHrs" < 'Infinity'::float8 AND ("rating" IS NULL OR ("rating" >= 0 AND "rating" <= 5))) NOT VALID;

ALTER TABLE "ContentDocument" ADD CONSTRAINT "ContentDocument_valid_kind_content" CHECK ("kind" IN ('TERMS', 'PRIVACY', 'FAQ') AND length(btrim("title")) > 0 AND length(btrim("body")) > 0 AND length(btrim("version")) > 0) NOT VALID;

COMMIT;
