ALTER TABLE "Post" ADD COLUMN "groupId" UUID;
ALTER TABLE "Post" ADD CONSTRAINT "Post_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "EcoGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE TABLE "ContentDocument" (
 "id" UUID NOT NULL DEFAULT gen_random_uuid(),
 "kind" TEXT NOT NULL,
 "title" TEXT NOT NULL,
 "body" TEXT NOT NULL,
 "version" TEXT NOT NULL,
 "isPublished" BOOLEAN NOT NULL DEFAULT false,
 "createdById" UUID NOT NULL,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 "updatedAt" TIMESTAMP(3) NOT NULL,
 CONSTRAINT "ContentDocument_pkey" PRIMARY KEY ("id"),
 CONSTRAINT "ContentDocument_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE INDEX "ContentDocument_kind_isPublished_idx" ON "ContentDocument"("kind", "isPublished");
