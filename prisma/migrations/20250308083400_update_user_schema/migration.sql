/*
  Warnings:

  - You are about to drop the `TelegramUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[telegramId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telegramChatId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "telegramChatId" TEXT,
ADD COLUMN     "telegramId" TEXT,
ADD COLUMN     "telegramRole" "TgRoles" DEFAULT 'CLIENT',
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "TelegramUser";

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramChatId_key" ON "User"("telegramChatId");
