-- AlterEnum
ALTER TYPE "TgRoles" ADD VALUE 'GUEST';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'guest';
